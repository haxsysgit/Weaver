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
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.responses import FileResponse, HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, Field

from weaver.agent.errors import safe_error
from weaver.agent.turn import REASONING_TIERS, TOOL_BUDGET_TIERS, TurnExitReason
from weaver.chat_runtime import ChatRuntime

MAX_MESSAGE_CHARS = 32_000

FRONTEND_DIST = Path(__file__).with_name("dist")

EVENT_HEADERS = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-store",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no",
}

LOCAL_HOSTS = ("127.0.0.1", "localhost")


class TurnBody(BaseModel):
    message: str = Field(min_length=1, max_length=MAX_MESSAGE_CHARS)


class PreferencesBody(BaseModel):
    reader_chapter: int | None = Field(default=None, ge=1, le=3127)
    spoiler_mode: str = Field(default="protect", pattern="^(protect|none)$")


def _reject_blank(message: str) -> None:
    if not message.strip():
        raise HTTPException(status_code=422, detail="message must not be blank")


def _check_local(request: Request) -> None:
    """Require an exact loopback host and a matching origin when supplied."""
    host = request.headers.get("host", "").lower()
    try:
        parsed_host = urlparse(f"//{host}")
        hostname = parsed_host.hostname
        port = parsed_host.port
    except ValueError:
        raise HTTPException(status_code=403, detail="host not allowed") from None

    if hostname not in LOCAL_HOSTS:
        raise HTTPException(status_code=403, detail="host not allowed")
    if (
        parsed_host.path
        or parsed_host.params
        or parsed_host.query
        or parsed_host.fragment
    ):
        raise HTTPException(status_code=403, detail="host not allowed")
    if parsed_host.username is not None or parsed_host.password is not None:
        raise HTTPException(status_code=403, detail="host not allowed")

    expected_host = hostname
    if port is not None:
        expected_host = f"{hostname}:{port}"
    if host != expected_host:
        raise HTTPException(status_code=403, detail="host not allowed")

    origin = request.headers.get("origin")
    if not origin:
        raise HTTPException(status_code=403, detail="origin required")
    expected_origin = f"{request.url.scheme}://{host}"
    if origin.rstrip("/").lower() != expected_origin:
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
            await asyncio.shield(stream.task)

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

    from weaver.retrieval.packet import build_packet
    from weaver.spoilers.judge import SpoilerJudge, load_beats, load_labels

    spoiler_judge = (
        SpoilerJudge(
            load_labels(runtime.library.notebook_dir),
            beats=load_beats(runtime.library.notebook_dir),
        )
        if runtime.library is not None
        else SpoilerJudge()
    )

    @app.get("/api/preferences", dependencies=[Depends(_check_local)])
    async def get_preferences() -> dict:
        if runtime.prefs is None:
            return {"reader_chapter": None, "spoiler_mode": "protect"}
        prefs = await runtime.prefs.get()
        return {"reader_chapter": prefs.reader_chapter, "spoiler_mode": prefs.spoiler_mode}

    @app.put("/api/preferences", dependencies=[Depends(_check_local)])
    async def put_preferences(body: PreferencesBody) -> dict:
        if runtime.prefs is None:
            raise HTTPException(status_code=404, detail="preferences store unavailable")
        from weaver.prefs import UserPreferences

        await runtime.prefs.set(
            UserPreferences(reader_chapter=body.reader_chapter, spoiler_mode=body.spoiler_mode)
        )
        return {"reader_chapter": body.reader_chapter, "spoiler_mode": body.spoiler_mode}

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

    @app.post(
        "/api/conversations", status_code=201, dependencies=[Depends(_check_local)]
    )
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

        # Plan 014 live-trial seam: tool activity as SSE 'tool' events so
        # the UI can render search/open lines. Backward compatible: the
        # frontend parser ignores unknown events.
        async def on_tool_event(name: str, status: str, detail: str) -> None:
            stream.queue.put_nowait(
                _sse("tool", {"name": name, "status": status, "detail": detail})
            )

        # Plan 15 two-phase: when the model stops calling tools, the
        # draft is a locate summary. The packet builder re-reads the
        # turn's opened passages with expanded windows plus the notebook
        # statements and the spoiler judge's framing, then one final
        # toolless synthesis call writes the answer. The packet is
        # ephemeral, never persisted.
        async def on_packet(tool_results, draft: str):
            if runtime.library is None:
                return None
            prefs = await runtime.prefs.get() if runtime.prefs is not None else None
            packet = build_packet(
                runtime.library,
                tool_results,
                user_chapter=prefs.reader_chapter if prefs is not None else None,
                spoiler_mode=prefs.spoiler_mode if prefs is not None else "protect",
                tier="ascended",
                judge=spoiler_judge,
            )
            return packet.text if packet is not None else None

        try:
            result = await runtime.session.send(
                conversation_id,
                message,
                cancel_event=stream.cancel_event,
                on_delta=on_delta,
                on_tool_event=on_tool_event,
                # Plan 15: the Ascended tier. Tool calls are capped at 70
                # (awakened 50 / ascended 70 / transcendent 90); the final
                # answer call is always guaranteed. Thinking is always on;
                # the tier picks the reasoning effort (ascended -> high).
                tool_budget=TOOL_BUDGET_TIERS["ascended"],
                reasoning=REASONING_TIERS["ascended"],
                packet_builder=on_packet,
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
                        {
                            "code": "interrupted",
                            "message": result.safe_failure or safe_error("interrupted"),
                        },
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
        stream.task = asyncio.create_task(
            _run_turn(conversation_id, body.message, stream)
        )

        async def generator():
            try:
                while True:
                    chunk = await stream.queue.get()
                    yield chunk
                    if (
                        chunk.startswith("event: completed")
                        or chunk.startswith("event: interrupted")
                        or chunk.startswith("event: failed")
                    ):
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
        return Response(status_code=202, content="cancelling")

    @app.get("/sw.js")
    async def service_worker() -> Response:
        return FileResponse(
            FRONTEND_DIST / "sw.js",
            media_type="text/javascript",
            headers={"Service-Worker-Allowed": "/"},
        )

    @app.get("/manifest.webmanifest")
    async def web_manifest() -> Response:
        return FileResponse(
            FRONTEND_DIST / "manifest.webmanifest",
            media_type="application/manifest+json",
        )

    @app.get("/weaver-mark.svg")
    async def weaver_mark() -> Response:
        return FileResponse(FRONTEND_DIST / "weaver-mark.svg", media_type="image/svg+xml")

    @app.get("/")
    async def index() -> HTMLResponse:
        html = (FRONTEND_DIST / "index.html").read_text(encoding="utf-8")
        html = html.replace("{{MODE_LABEL}}", runtime.mode_label)
        if runtime.live:
            privacy_label = (
                "Weaver runs locally. Messages are sent to DeepSeek for replies."
            )
        else:
            privacy_label = "Fake mode stays on this machine. No model request is sent."
        html = html.replace("{{PRIVACY_LABEL}}", privacy_label)
        return HTMLResponse(
            html,
            headers={
                "Cache-Control": "no-store",
                "Content-Security-Policy": (
                    "default-src 'self'; script-src 'self'; "
                    "style-src 'self'; img-src 'self' data:; "
                    "connect-src 'self'; manifest-src 'self'; worker-src 'self'"
                ),
            },
        )

    app.mount(
        "/assets",
        StaticFiles(directory=FRONTEND_DIST / "assets", check_dir=False),
        name="frontend-assets",
    )
    return app
