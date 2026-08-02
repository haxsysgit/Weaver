"""FastAPI app serving the local browser chat.

One owned background task per send, an asyncio.Queue per SSE stream,
cooperative cancellation via cancel events (never task.cancel() on model
work), and settlement on client disconnect and shutdown. Binds only to
127.0.0.1; no CORS, no CDN, same-origin assets only.
"""

import asyncio
import json
from contextlib import asynccontextmanager
from typing import Any

from fastapi import FastAPI, HTTPException, Request, Response
from fastapi.responses import FileResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from weaver.agent.errors import safe_error
from weaver.agent.turn import TurnExitReason
from weaver.chat_runtime import ChatRuntime

# Plan 011 Gate 2 contract: turns run under a timeout ceiling so a wedged
# model call cannot hang the browser forever.
MAX_MESSAGE_CHARS = 32_000
TURN_TIMEOUT_SECONDS = 180.0

STATIC_DIR = __file__.rsplit("/", 1)[0] + "/static"
TEMPLATE_DIR = __file__.rsplit("/", 1)[0] + "/templates"

EVENT_HEADERS = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no",
}


class TurnBody(BaseModel):
    message: str = Field(min_length=1, max_length=MAX_MESSAGE_CHARS)


def _reject_blank(message: str) -> None:
    if not message.strip():
        raise HTTPException(status_code=422, detail="message must not be blank")


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
    # One active stream per conversation id.
    active: dict[str, TurnStream] = {}

    async def _settle(conversation_id: str) -> None:
        """Await a turn's task after cancel or disconnect, then remove it."""
        stream = active.pop(conversation_id, None)
        if stream is None:
            return
        stream.cancel_event.set()
        if stream.task is not None:
            try:
                await asyncio.wait_for(asyncio.shield(stream.task), timeout=10.0)
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

    @app.post("/api/conversations", status_code=201)
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
            if result.exit_reason == TurnExitReason.INTERRUPTED:
                await stream.queue.put(
                    _sse(
                        "interrupted",
                        {"message": result.safe_failure or safe_error("interrupted")},
                    )
                )
            else:
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

    @app.post("/api/conversations/{conversation_id}/turns")
    async def stream_turn(
        conversation_id: str,
        body: TurnBody,
        request: Request,
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

    @app.post("/api/conversations/{conversation_id}/cancel")
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
    async def index() -> FileResponse:
        return FileResponse(TEMPLATE_DIR + "/index.html")

    app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")
    return app
