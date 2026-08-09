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
from collections import deque
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
    tier: str = Field(default="ascended", pattern="^(awakened|ascended|transcendent)$")


def _reject_blank(message: str) -> None:
    if not message.strip():
        raise HTTPException(status_code=422, detail="message must not be blank")


def _check_local_hostname(request: Request) -> None:
    """Require an exact loopback host (no origin requirement).

    Used by read-only routes consumed by EventSource, which does not
    always send an Origin header.
    """
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


def _check_local(request: Request) -> None:
    """Require an exact loopback host and a matching origin when supplied."""
    _check_local_hostname(request)
    origin = request.headers.get("origin")
    if not origin:
        raise HTTPException(status_code=403, detail="origin required")
    expected_origin = f"{request.url.scheme}://{request.headers.get('host', '').lower()}"
    if origin.rstrip("/").lower() != expected_origin:
        raise HTTPException(status_code=403, detail="origin not allowed")


class TurnStream:
    """One owned turn task plus its SSE event bus.

    The turn task emits events into ``history`` (a bounded replay buffer)
    and every current subscriber queue. Clients read the stream via GET
    (EventSource); on a dropped connection the browser reconnects with
    Last-Event-ID and the server replays what it missed (hermes-webui
    pattern). A disconnect never cancels the turn: it completes
    server-side and the reply is persisted, so a reload or reconnect
    always finds the outcome.
    """

    def __init__(self, conversation_id: str) -> None:
        self.conversation_id = conversation_id
        self.cancel_event = asyncio.Event()
        self.task: asyncio.Task[Any] | None = None
        self.seq = 0
        self.history: deque[tuple[int, str]] = deque(maxlen=2048)
        self.finished = False
        self._subscribers: set[asyncio.Queue[tuple[int, str]]] = set()

    def emit(self, event: str, payload: dict) -> None:
        self.seq += 1
        frame = (
            f"id: {self.seq}\n"
            f"event: {event}\n"
            f"data: {json.dumps(payload)}\n\n"
        )
        self.history.append((self.seq, frame))
        for queue in list(self._subscribers):
            queue.put_nowait((self.seq, frame))

    def subscribe(self, queue: asyncio.Queue[tuple[int, str]]) -> None:
        self._subscribers.add(queue)

    def unsubscribe(self, queue: asyncio.Queue[tuple[int, str]]) -> None:
        self._subscribers.discard(queue)


def _is_terminal_frame(frame: str) -> bool:
    return frame.startswith(
        ("event: completed", "event: interrupted", "event: failed")
    )


def _sse(event: str, payload: dict) -> str:
    return f"event: {event}\ndata: {json.dumps(payload)}\n\n"


# Plan 15 slice 5: the thread-naming call. One cheap flash call per
# conversation (the first one only), short and creative like ChatGPT's
# names. Best-effort: never fails the turn; falls back to a derived name.
NAMING_SYSTEM_PROMPT = (
    "You name chat threads. Given the user's first message and the reply, "
    "produce a short, concise, creative thread name of 2 to 6 words. "
    "Output only the name, no quotes, no punctuation at the end."
)


def _derived_title(first_message: str) -> str:
    """Fallback title from the first owner message (fake mode / failure)."""
    words = [w for w in first_message.split() if len(w) > 2][:5]
    return " ".join(words).title() or "New chat"


async def _name_thread(runtime: ChatRuntime, conversation_id: str, first_message: str, answer: str) -> None:
    """One LLM call to name the thread; stores it. The sidebar refetches."""
    from weaver.model_layer import ModelMessage, ModelRequest

    title = _derived_title(first_message)
    if runtime.live and runtime.model_layer is not None and runtime.model is not None:
        try:
            request = ModelRequest(
                messages=(
                    ModelMessage(role="system", content=NAMING_SYSTEM_PROMPT),
                    ModelMessage(
                        role="user",
                        content=(
                            f"First message: {first_message[:400]}\n"
                            f"Reply: {answer[:600]}"
                        ),
                    ),
                ),
                max_output_tokens=32,
            )
            response = await runtime.model_layer.complete(runtime.model, request, asyncio.Event())
            text = (response.content or "").strip().strip('"')
            if text:
                title = text[:60]
        except Exception:
            # the turn already succeeded; a failed name is not a failure
            title = _derived_title(first_message)
    if runtime.prefs is not None:
        await runtime.prefs.set_title(conversation_id, title)


def _tool_preview(name: str, result: dict) -> tuple[str | None, list[str]]:
    """Preview snippet + passage handles for the tap-to-view surface.

    Reading tools return novel prose in their in-turn results; the preview
    is a short snippet for the UI only, never persisted. Handles let the
    frontend summon the full passage via GET /api/passages.
    """
    payload = result.get("result") or {}
    if name == "read_chapters":
        evidence = result.get("durable_evidence") or {}
        text = str(payload.get("text", ""))
        return text[:140] or None, [evidence["passage_handle"]] if evidence.get("passage_handle") else []
    if name == "find_text":
        hits = payload.get("hits") or []
        if not hits:
            return None, []
        first = hits[0]
        handles = [
            h["passage_handle"]
            for h in hits[:3]
            if h.get("passage_handle")
        ]
        return str(first.get("text", ""))[:140] or None, handles
    if name == "browse_chapters":
        chapters = payload.get("chapters") or []
        if not chapters:
            return None, []
        first = chapters[0]
        return (
            f"ch {first.get('chapter')} - {first.get('title', '')}"[:140],
            [c["passage_handle"] for c in chapters[:3] if c.get("passage_handle")],
        )
    if name == "semantic_search":
        notebook = payload.get("notebook_hits") or []
        canonical = payload.get("canonical_hits") or []
        if notebook:
            return str(notebook[0].get("statement", ""))[:140] or None, []
        if canonical:
            first = canonical[0]
            return (
                f"ch {first.get('chapter')}, lines {first.get('line_start')}-{first.get('line_end')}",
                [h["passage_handle"] for h in canonical[:3] if h.get("passage_handle")],
            )
        return None, []
    if name == "who_is":
        entity = payload.get("entity") or {}
        body = str(entity.get("body", ""))[:140]
        return (str(entity.get("title", "")) + " - " + body)[:140] if body else None, []
    return None, []


def _sse(event: str, payload: dict) -> str:
    return f"event: {event}\ndata: {json.dumps(payload)}\n\n"


def create_app(runtime: ChatRuntime) -> FastAPI:
    # One active stream per conversation id. An entry lives from the
    # moment a turn is accepted until the turn's task finishes (the task
    # marks it finished in a finally), then a janitor drops it after the
    # grace window so a late reconnect can still replay the outcome.
    active: dict[str, TurnStream] = {}

    async def _settle(conversation_id: str) -> None:
        """Cancel a running turn and await it."""
        stream = active.get(conversation_id)
        if stream is None or stream.finished:
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
            return {"reader_chapter": None, "spoiler_mode": "protect", "tier": "ascended"}
        prefs = await runtime.prefs.get()
        return {
            "reader_chapter": prefs.reader_chapter,
            "spoiler_mode": prefs.spoiler_mode,
            "tier": prefs.tier,
        }

    @app.put("/api/preferences", dependencies=[Depends(_check_local)])
    async def put_preferences(body: PreferencesBody) -> dict:
        if runtime.prefs is None:
            raise HTTPException(status_code=404, detail="preferences store unavailable")
        from weaver.prefs import UserPreferences

        await runtime.prefs.set(
            UserPreferences(
                reader_chapter=body.reader_chapter,
                spoiler_mode=body.spoiler_mode,
                tier=body.tier,
            )
        )
        return {
            "reader_chapter": body.reader_chapter,
            "spoiler_mode": body.spoiler_mode,
            "tier": body.tier,
        }

    @app.get("/api/conversations")
    async def list_conversations() -> list[dict]:
        rows = await runtime.session.list_conversations()
        stored = await runtime.prefs.titles() if runtime.prefs is not None else {}
        return [
            {
                "conversation_id": row["conversation_id"],
                "title": stored.get(row["conversation_id"])
                or (row["last_owner_text"] or "")[:80]
                or "New chat",
                "created_at": row["created_at"],
            }
            for row in rows
        ]

    @app.post(
        "/api/conversations", status_code=201, dependencies=[Depends(_check_local)]
    )
    async def create_conversation() -> dict:
        conversation_id = await runtime.session.start_conversation("")
        return {"conversation_id": conversation_id}

    @app.delete(
        "/api/conversations/{conversation_id}",
        dependencies=[Depends(_check_local)],
    )
    async def delete_conversation(conversation_id: str) -> dict:
        stream = active.get(conversation_id)
        if stream is not None and not stream.finished:
            raise HTTPException(status_code=409, detail="a turn is running in this conversation")
        if not await runtime.session.delete_conversation(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        if runtime.prefs is not None:
            await runtime.prefs.clear_title(conversation_id)
        return {"deleted": conversation_id}

    @app.get("/api/passages", dependencies=[Depends(_check_local)])
    async def get_passage(handle: str) -> dict:
        """Ephemeral passage fetch for the tap-to-view surface.

        Reads the novel straight from disk by handle; nothing is
        persisted (the durable split: prose lives in the novel, never in
        the conversation store).
        """
        if runtime.library is None:
            raise HTTPException(status_code=404, detail="library unavailable")
        from weaver.retrieval.library import parse_passage_handle

        try:
            parsed = parse_passage_handle(handle)
        except ValueError as exc:
            raise HTTPException(status_code=422, detail=str(exc))
        if parsed is None:
            raise HTTPException(status_code=422, detail="malformed passage handle")
        chapter, start, end = parsed
        try:
            passage = runtime.library.index.open_lines(chapter, start, end)
        except (FileNotFoundError, ValueError, IndexError):
            raise HTTPException(status_code=404, detail="unknown chapter")
        from weaver.spoilers.judge import volume_of

        beats = [
            beat["title"]
            for beat in spoiler_judge.beats_for(chapter)
        ]
        return {
            "handle": handle,
            "chapter": passage.chapter,
            "line_start": passage.line_start,
            "line_end": passage.line_end,
            "text": passage.text,
            "volume": volume_of(chapter),
            "beats": beats,
        }

    @app.get("/api/conversations/{conversation_id}/messages")
    async def get_messages(conversation_id: str) -> list[dict]:
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        # Dead attempts (interrupted or retried runs) never render: a retry
        # re-persists the owner message under a new run, so hiding the old
        # run's items keeps the transcript free of duplicates.
        runs = await runtime.session.repo.load_runs(conversation_id)
        dead_run_ids = {
            run.id for run in runs if run.phase in ("interrupted", "superseded")
        }
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
            if item["run_id"] not in dead_run_ids
        ]

    async def _run_turn(
        conversation_id: str, message: str, stream: TurnStream, *, retry: bool = False
    ) -> None:
        """Run the send (or the last-turn retry), streaming deltas, then
        the terminal event."""

        async def on_delta(text: str) -> None:
            stream.emit("delta", {"text": text})

        # Plan 014 live-trial seam: tool activity as SSE 'tool' events so
        # the UI can render search/open lines. Plan 15 slice 5: on
        # success the handler's result is enriched with a preview snippet
        # and passage handles for the tap-to-view surface. Backward
        # compatible: the frontend parser ignores unknown fields.
        async def on_tool_event(
            name: str, status: str, detail: str, result: dict | None = None
        ) -> None:
            payload: dict[str, Any] = {"name": name, "status": status, "detail": detail}
            if status == "done" and isinstance(result, dict) and result.get("ok"):
                preview, handles = _tool_preview(name, result)
                if preview:
                    payload["preview"] = preview
                if handles:
                    payload["handles"] = handles
            stream.emit("tool", payload)

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
            prefs = await runtime.prefs.get() if runtime.prefs is not None else None
            tier = prefs.tier if prefs is not None else "ascended"
            # the naming call runs once, after the very first turn
            is_first_turn = (
                len(await runtime.session.load_transcript(conversation_id)) == 0
            )
            if retry:
                retried = await runtime.session.retry_last_turn(
                    conversation_id,
                    cancel_event=stream.cancel_event,
                    on_delta=on_delta,
                    on_tool_event=on_tool_event,
                    tool_budget=TOOL_BUDGET_TIERS[tier],
                    reasoning=REASONING_TIERS[tier],
                    packet_builder=on_packet,
                )
                if retried is None:
                    stream.emit(
                        "failed",
                        {"code": "retry", "message": "There is nothing to retry."},
                    )
                    return
                result, retried_message = retried
            else:
                result = await runtime.session.send(
                    conversation_id,
                    message,
                    cancel_event=stream.cancel_event,
                    on_delta=on_delta,
                    on_tool_event=on_tool_event,
                    # Plan 15: the tier is a user preference (the mode
                    # selector). Tool calls are capped at 50/70/90; the final
                    # answer call is always guaranteed. Thinking is always on;
                    # the tier picks the reasoning effort.
                    tool_budget=TOOL_BUDGET_TIERS[tier],
                    reasoning=REASONING_TIERS[tier],
                    packet_builder=on_packet,
                )
            reason = result.exit_reason
            if reason == TurnExitReason.COMPLETED:
                if is_first_turn and runtime.prefs is not None:
                    asyncio.create_task(
                        _name_thread(
                            runtime,
                            conversation_id,
                            retried_message if retry else message,
                            result.final_text,
                        )
                    )
                stream.emit(
                    "completed",
                    {
                        "text": result.final_text,
                        "token_count": result.token_count,
                        "token_budget": result.token_budget,
                    },
                )
            elif reason == TurnExitReason.INTERRUPTED:
                stream.emit(
                    "interrupted",
                    {
                        "code": "interrupted",
                        "message": result.safe_failure or safe_error("interrupted"),
                    },
                )
            else:
                # MODEL_FAILED, LIMIT_REACHED, PERSISTENCE_FAILED, INCOMPLETE.
                stream.emit(
                    "failed",
                    {
                        "code": reason.value,
                        "message": result.safe_failure or safe_error("turn"),
                    },
                )
        except asyncio.CancelledError:
            # Caller-side disconnect during startup; nothing was sent.
            pass
        except Exception:
            stream.emit(
                "failed",
                {"code": "turn", "message": safe_error("turn")},
            )
        finally:
            # The turn is done but the stream (with its full event
            # history) stays in the registry so a reconnecting client can
            # replay the outcome; the GET handler pops it once the
            # terminal has been served. A size cap bounds streams whose
            # client never came back.
            stream.finished = True

    @app.post(
        "/api/conversations/{conversation_id}/turns",
        dependencies=[Depends(_check_local)],
    )
    async def start_turn(
        conversation_id: str,
        body: TurnBody,
    ) -> Response:
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        _reject_blank(body.message)
        stream = active.get(conversation_id)
        if stream is not None and not stream.finished:
            raise HTTPException(status_code=409, detail="a turn is already running")

        stream = TurnStream(conversation_id)
        active[conversation_id] = stream
        if len(active) > 32:
            for stale_id, stale in list(active.items()):
                if stale.finished:
                    active.pop(stale_id, None)
                    break
        stream.task = asyncio.create_task(
            _run_turn(conversation_id, body.message, stream)
        )
        # The turn runs server-side; the reply is streamed over the GET
        # /stream route (EventSource with Last-Event-ID resume), so a
        # dropped connection never loses the reply (hermes-webui pattern).
        return Response(
            status_code=202,
            content=json.dumps({"conversation_id": conversation_id}),
            media_type="application/json",
        )

    @app.post(
        "/api/conversations/{conversation_id}/retry",
        dependencies=[Depends(_check_local)],
    )
    async def retry_last_turn(conversation_id: str) -> Response:
        """Re-run the last interrupted turn with its own message.

        The web layer never takes the message from the client: the
        session reloads the failed turn's owner text from the store, so
        retry cannot be steered. Same 202 + GET /stream contract as the
        turns route.
        """
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        stream = active.get(conversation_id)
        if stream is not None and not stream.finished:
            raise HTTPException(status_code=409, detail="a turn is already running")

        stream = TurnStream(conversation_id)
        active[conversation_id] = stream
        if len(active) > 32:
            for stale_id, stale in list(active.items()):
                if stale.finished:
                    active.pop(stale_id, None)
                    break
        stream.task = asyncio.create_task(
            _run_turn(conversation_id, "", stream, retry=True)
        )
        return Response(
            status_code=202,
            content=json.dumps({"conversation_id": conversation_id}),
            media_type="application/json",
        )

    @app.get(
        "/api/conversations/{conversation_id}/stream",
        dependencies=[Depends(_check_local_hostname)],
    )
    async def read_turn_stream(conversation_id: str, request: Request) -> Response:
        """SSE stream for the active (or recently finished) turn.

        The browser reconnects with Last-Event-ID on any drop; the server
        replays the missed events from the bounded history, then follows
        live until the terminal event. A disconnect never cancels the
        turn.
        """
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        stream = active.get(conversation_id)
        if stream is None:
            raise HTTPException(status_code=404, detail="no turn stream")

        last_event_id = 0
        raw = request.headers.get("last-event-id")
        if raw and raw.isdigit():
            last_event_id = int(raw)

        # the generator rebinds the cursor, so it must not close over the
        # route's int local (ints are immutable); a one-element list is a
        # simple mutable cell
        seen: list[int] = [last_event_id]

        async def generator():
            async def _finished() -> None:
                # the client saw the whole story: drop the entry unless a
                # newer turn replaced it
                if stream.finished and active.get(conversation_id) is stream:
                    active.pop(conversation_id, None)

            while True:
                # catch up: replay everything past the client's last id
                for seq, frame in stream.history:
                    if seq > seen[0]:
                        seen[0] = seq
                        yield frame
                        if _is_terminal_frame(frame):
                            await _finished()
                            return
                if stream.finished:
                    await _finished()
                    return
                queue: asyncio.Queue[tuple[int, str]] = asyncio.Queue()
                stream.subscribe(queue)
                try:
                    seq, frame = await queue.get()
                finally:
                    stream.unsubscribe(queue)
                if seq <= seen[0]:
                    continue  # already replayed; re-sync from history
                seen[0] = seq
                yield frame
                if _is_terminal_frame(frame):
                    await _finished()
                    return

        return StreamingResponse(generator(), headers=EVENT_HEADERS)

    @app.post(
        "/api/conversations/{conversation_id}/cancel",
        dependencies=[Depends(_check_local)],
    )
    async def cancel_turn(conversation_id: str) -> Response:
        if not await runtime.session.conversation_exists(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        stream = active.get(conversation_id)
        if stream is None or stream.finished:
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
