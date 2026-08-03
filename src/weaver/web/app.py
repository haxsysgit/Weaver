"""FastAPI app serving the local browser chat.

One owned background task per send, an asyncio.Queue per SSE stream,
cooperative cancellation via cancel events (never task.cancel() on model
work), and settlement on client disconnect and shutdown. A turn's entry
stays in the active registry until its task really finishes, so a new
turn cannot start while the previous one is still settling. Binds only
to 127.0.0.1; no CORS, no CDN, same-origin assets only; host and origin
checks on every mutating route.
"""

import asyncio
import json
from contextlib import asynccontextmanager
from typing import Any
from urllib.parse import urlparse

from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.responses import HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from weaver.agent.errors import safe_error
from weaver.agent.turn import TurnExitReason
from weaver.chat_runtime import ChatRuntime

MAX_MESSAGE_CHARS = 32_000
SETTLE_TIMEOUT_SECONDS = 10.0

STATIC_DIR = __file__.rsplit("/", 1)[0] + "/static"
TEMPLATE_DIR = __file__.rsplit("/", 1)[0] + "/templates"

EVENT_HEADERS = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no",
}

LOCAL_HOSTS = ("127.0.0.1", "localhost")


class TurnBody(BaseModel):
    message: str = Field(min_length=1, max_length=MAX_MESSAGE_CHARS)


def _reject_blank(message: str) -> None:
    if not message.strip():
        raise HTTPException(status_code=422, detail="message must not be blank")


def _check_local(request: Request) -> None:
    """Loopback-only host and origin guard for mutating routes."""
    host = request.headers.get("host") or ""
    if host and not any(host.startswith(h) for h in LOCAL_HOSTS):
        raise HTTPException(status_code=403, detail="host not allowed")
    origin = request.headers.get("origin")
    if origin and urlparse(origin).hostname not in LOCAL_HOSTS:
        raise HTTPException(status_code=403, detail="origin not allowed")


class TurnStream:
    """One owned turn task plus the SSE queue it feeds."""

    def __init__(self, conversation_id: str, queue: asyncio.Queue[str]) -> None:
        self.conversation_id = conversation_id
        self.queue = queue
        self.cancel_event = asyncio.Event()
        self.task: asyncio.Task[Any] | None = None


def _sse(event: str, payload: dict) -> str:
    return f"event: {event}\ndata: {json.dumps(payload)}\n\n"


def create_app(runtime: ChatRuntime) -> FastAPI:
    # One active stream per conversation id. An entry lives from the
    # moment a turn is accepted until that turn's task finishes (the
    # task removes itself in a finally), so the 409 guard cannot race
    # with a still-settling turn.
    active: dict[str, TurnStream] = {}

    async def _settle(conversation_id: str) -> None:
        """Cancel a turn and await it; the task's finally removes the entry."""
        stream = active.get(conversation_id)
        if stream is None:
            return
        stream.cancel_event.set()
        if stream.task is not None:
            try:
                await asyncio.wait_for(
                    asyncio.shield(stream.task), timeout=SETTLE_TIMEOUT_SECONDS
                )
            except asyncio.TimeoutError:
                pass  # ponytail: shield+timeout; kill via event only, never task.cancel

    @asynccontextmanager
    async def lifespan(_: FastAPI):
        yield
        for conversation_id in list(active):
            await _settle(conversation_id)

    app = FastAPI(
        title="Weaver",
        docs_url=None,
        redoc_url=None,
        openapi_url=None,
        lifespan=lifespan,
    )
    app.state.runtime = runtime

    @app.get("/api/conversations")
    async def list_conversations() -> list[dict]:
        rows = await runtime.session.list_conversations()
        return [
            {
                "conversation_id": row["conversation_id"],
                "title": row["last_owner_text"][:80] or "New chat",
            }
            for row in rows
        ]

    @app.post("/api/conversations", status_code=201, dependencies=[Depends(_check_local)])
    async def create_conversation() -> dict:
        conversation_id = await runtime.session.start_conversation("")
        return {"conversation_id": conversation_id}

    @app.get("/api/conversations/{conversation_id}/messages")
    async def get_messages(conversation_id: str) -> list[dict]:
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        transcript = await runtime.session.load_transcript(conversation_id)
        return [
            {
                "message_id": item["message_id"],
                "turn_id": item["turn_id"],
                "role": item["role"],
                "content": item["content"],
                "created_at": item["created_at"],
            }
            for item in transcript
        ]

    async def _run_turn(conversation_id: str, message: str, stream: TurnStream) -> None:
        """Run the send, streaming deltas, then the terminal event."""

        async def on_delta(text: str) -> None:
            stream.queue.put_nowait(_sse("delta", {"text": text}))

        try:
            result = await runtime.session.send(
                conversation_id,
                message,
                cancel_event=stream.cancel_event,
                on_delta=on_delta,
            )
            reason = result.exit_reason
            if reason == TurnExitReason.COMPLETED:
                await stream.queue.put(
                    _sse(
                        "completed",
                        {
                            "text": result.final_text,
                            "token_count": result.token_count,
                            "token_budget": result.token_budget,
                        },
                    )
                )
            elif reason == TurnExitReason.INTERRUPTED:
                await stream.queue.put(
                    _sse(
                        "interrupted",
                        {"message": result.safe_failure or safe_error("interrupted")},
                    )
                )
            else:
                # MODEL_FAILED, LIMIT_REACHED, PERSISTENCE_FAILED, INCOMPLETE.
                await stream.queue.put(
                    _sse(
                        "failed",
                        {
                            "code": reason.value,
                            "message": result.safe_failure or safe_error("turn"),
                        },
                    )
                )
        except asyncio.CancelledError:
            # Caller-side disconnect during startup; nothing was sent.
            pass
        except Exception:
            await stream.queue.put(
                _sse(
                    "failed",
                    {"code": "turn", "message": safe_error("turn")},
                )
            )
        finally:
            # The turn is done (or wedged past the settle window): only now
            # may a new turn start for this conversation.
            active.pop(conversation_id, None)

    @app.post(
        "/api/conversations/{conversation_id}/turns",
        dependencies=[Depends(_check_local)],
    )
    async def stream_turn(
        conversation_id: str,
        body: TurnBody,
    ) -> Response:
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        _reject_blank(body.message)
        if conversation_id in active:
            raise HTTPException(status_code=409, detail="a turn is already running")

        queue: asyncio.Queue[str] = asyncio.Queue()
        stream = TurnStream(conversation_id, queue)
        active[conversation_id] = stream
        stream.task = asyncio.create_task(_run_turn(conversation_id, body.message, stream))

        async def generator():
            try:
                while True:
                    chunk = await stream.queue.get()
                    yield chunk
                    if chunk.startswith("event: completed") or chunk.startswith(
                        "event: interrupted"
                    ) or chunk.startswith("event: failed"):
                        break
            finally:
                # Client disconnect or normal end: settle the owned task.
                await _settle(conversation_id)

        return StreamingResponse(generator(), headers=EVENT_HEADERS)

    @app.post(
        "/api/conversations/{conversation_id}/cancel",
        dependencies=[Depends(_check_local)],
    )
    async def cancel_turn(conversation_id: str) -> Response:
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        stream = active.get(conversation_id)
        if stream is None:
            return Response(status_code=200, content="idle")
        stream.cancel_event.set()
        await _settle(conversation_id)
        return Response(status_code=202, content="cancelling")

    @app.get("/")
    async def index() -> HTMLResponse:
        html = open(TEMPLATE_DIR + "/index.html", encoding="utf-8").read()
        html = html.replace("{{MODE_LABEL}}", runtime.mode_label)
        return HTMLResponse(
            html,
            headers={
                "Content-Security-Policy": (
                    "default-src 'self'; script-src 'self'; "
                    "style-src 'self'; img-src 'self' data:; connect-src 'self'"
                )
            },
        )

    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
    return app
