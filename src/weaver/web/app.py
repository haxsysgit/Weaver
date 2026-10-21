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
import os
from collections import deque
from contextlib import asynccontextmanager
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

from fastapi import Depends, FastAPI, HTTPException, Request, Response
from fastapi.responses import FileResponse, HTMLResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel, ConfigDict, Field

from weaver.skills import plan_for_question
from weaver.agent.errors import safe_error
from weaver.agent.turn import REASONING_TIERS, TurnExitReason
from weaver.chat_runtime import ChatRuntime
from weaver.model_layer.deepseek import (
    current_api_key,
    current_model_id,
    current_sponsored_turn,
)
from weaver.model_layer.fake_chat import current_fake_retry
from weaver.prefs import MAX_CHAPTER
from weaver.sponsored import SponsoredTurn, SponsoredUnavailable

MAX_MESSAGE_CHARS = 32_000

# Plan v1 slice 3 (BYOK + device scoping): the browser sends its
# per-user DeepSeek key and its device id on every request. Plan v1
# (2026-08-17): the browser may also pick the model per request.
KEY_HEADER = "x-weaver-key"
DEVICE_HEADER = "x-device-id"
MODEL_HEADER = "x-weaver-model"
SPONSORED_PASS_COOKIE = "weaver_sponsored_pass"


def _device_id(request: Request) -> str:
    """The browser's device id from fetch headers or its EventSource cookie."""
    device_id = request.headers.get(DEVICE_HEADER) or request.cookies.get(
        "weaver_device_id", ""
    )
    return device_id.strip()[:128]


def _request_key(request: Request) -> str | None:
    """The per-request DeepSeek key (None when absent/blank)."""
    key = (request.headers.get(KEY_HEADER) or "").strip()
    return key or None


def _request_model(request: Request) -> str | None:
    """The per-request model id (None when absent/blank)."""
    model = (request.headers.get(MODEL_HEADER) or "").strip()
    return model or None


def _client_address(request: Request) -> str:
    """Use a forwarded address only from an explicitly trusted proxy."""
    direct_address = request.client.host if request.client is not None else "unknown"
    trusted_proxies = {
        address.strip()
        for address in os.environ.get(
            "WEAVER_TRUSTED_PROXY_ADDRESSES", ""
        ).split(",")
        if address.strip()
    }
    header_name = os.environ.get("WEAVER_ORIGINAL_ADDRESS_HEADER", "").strip()
    if direct_address not in trusted_proxies or not header_name:
        return direct_address
    forwarded = request.headers.get(header_name, "").split(",", 1)[0].strip()
    return forwarded or direct_address

FRONTEND_DIST = Path(__file__).with_name("dist")

EVENT_HEADERS = {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-store",
    "Connection": "keep-alive",
    "X-Accel-Buffering": "no",
}

LOCAL_HOSTS = ("127.0.0.1", "localhost")


def _allowed_hosts() -> tuple[str, ...]:
    """Loopback plus any WEAVER_ALLOWED_HOSTS (comma-separated).

    The v1 box serves behind Tailscale Funnel, whose public hostname
    (weaver-v1.<tailnet>.ts.net) is not loopback; without this the
    host guard 403s every real request. Env stays the only way in, so
    the default posture is unchanged (loopback only).
    """
    extra = [h.strip().lower() for h in os.environ.get("WEAVER_ALLOWED_HOSTS", "").split(",") if h.strip()]
    return LOCAL_HOSTS + tuple(extra)


class TurnBody(BaseModel):
    message: str = Field(min_length=1, max_length=MAX_MESSAGE_CHARS)


class PreferencesBody(BaseModel):
    reader_chapter: int | None = Field(default=None, ge=1, le=MAX_CHAPTER)
    spoiler_mode: str = Field(default="protect", pattern="^(protect|none)$")
    tier: str = Field(default="ascended", pattern="^(awakened|ascended|transcendent)$")


class ConversationMetadataBody(BaseModel):
    model_config = ConfigDict(extra="forbid")

    title: str | None = Field(default=None, max_length=80)
    archived: bool = False
    pinned: bool = False


class CreateConversationBody(BaseModel):
    model_config = ConfigDict(extra="forbid")

    domain: str = Field(default="canon", pattern="^(canon|fanfic)$")
    fanfic_kind: str | None = Field(default=None, max_length=40)


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

    if hostname not in _allowed_hosts():
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
    """Require an exact loopback host and a matching origin when supplied.

    The origin check compares host, not scheme: behind Tailscale Funnel
    the browser sends an https:// origin while the box sees plain HTTP,
    so an exact scheme compare would 403 every real request. A foreign
    site still fails because its host never matches.
    """
    _check_local_hostname(request)
    origin = request.headers.get("origin")
    if not origin:
        raise HTTPException(status_code=403, detail="origin required")
    try:
        parsed_origin = urlparse(origin)
        origin_host = parsed_origin.hostname
    except ValueError:
        raise HTTPException(status_code=403, detail="origin not allowed") from None
    if not origin_host:
        raise HTTPException(status_code=403, detail="origin not allowed")
    expected_host = request.headers.get("host", "").lower()
    origin_port = parsed_origin.port
    origin_host = origin_host.lower()
    if origin_port is not None and f"{origin_host}:{origin_port}" != expected_host:
        raise HTTPException(status_code=403, detail="origin not allowed")
    if origin_port is None and origin_host != expected_host.split(":")[0]:
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


def _turn_profile(
    question: str,
    domain: str = "canon",
) -> tuple[int, str | None, int, bool]:
    """Suggested skill profile: tool budget, reasoning tier, packet cap, final pass.

    This is a starting point, not a lock. The model may load more skills with
    load_skill, and doing so raises its budget to match.
    """
    plan = plan_for_question(question, domain=domain)
    return plan.tool_budget, plan.reasoning_tier, plan.packet_cap, plan.final_pass


def _reader_note(prefs) -> str:
    """The spoiler position the model must see before it writes anything.

    The reading packet carries this too, but the packet is only built after
    the candidate answer, so the answer itself needs the boundary up front.
    """
    if prefs is None or prefs.reader_chapter is None:
        return ""
    if prefs.spoiler_mode != "protect":
        return ""
    return (
        f"The reader is at chapter {prefs.reader_chapter}. Protect the story: "
        "never reveal, confirm, deny, or hint at anything past that chapter. "
        "A question about whether a character survives, dies, or appears later "
        "gets no yes or no, not even a hint. Say it is past their chapter. "
        "Never open a refusal with yes or no: a bare no reads as an answer."
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
    await runtime.session.set_generated_title(conversation_id, title)


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

    def _set_sponsored_pass(response: Response, pass_token: str) -> None:
        response.set_cookie(
            SPONSORED_PASS_COOKIE,
            pass_token,
            httponly=True,
            max_age=365 * 24 * 60 * 60,
            samesite="strict",
            secure=True,
        )

    async def _access_status(
        request: Request,
        response: Response,
        pass_token_override: str | None = None,
    ) -> dict:
        if runtime.sponsored is None or runtime.sponsored_balance is None:
            return {
                "enabled": False,
                "development": not runtime.live,
                "remaining_questions": 0,
                "reset_at": None,
                "consented": False,
                "source": "reader_byok" if _request_key(request) else "unavailable",
            }

        pass_token = pass_token_override
        if pass_token is None:
            pass_token = request.cookies.get(SPONSORED_PASS_COOKIE, "")
        try:
            status = await runtime.sponsored.status(pass_token)
        except SponsoredUnavailable:
            pass_token = runtime.sponsored.issue_pass()
            _set_sponsored_pass(response, pass_token)
            status = await runtime.sponsored.status(pass_token)

        balance = await runtime.sponsored_balance.available_microdollars()
        enough_balance = (
            balance is not None
            and balance >= runtime.sponsored.config.reservation_microdollars
        )
        summary = await runtime.sponsored.summary()
        enough_capacity = (
            summary.remaining_microdollars
            >= runtime.sponsored.config.reservation_microdollars
        )
        enabled = status.enabled and enough_balance and enough_capacity
        return {
            "enabled": enabled,
            "development": False,
            "remaining_questions": status.remaining_questions,
            "reset_at": status.reset_at,
            "consented": status.consented,
            "source": (
                "reader_byok"
                if _request_key(request)
                else ("sponsored" if enabled else "unavailable")
            ),
        }

    def _raise_sponsored_error(error: SponsoredUnavailable) -> None:
        status_codes = {
            "active_turn": 409,
            "consent_required": 428,
            "global_exhausted": 429,
            "reader_exhausted": 429,
            "network_busy": 429,
            "invalid_pass": 401,
            "insufficient_balance": 503,
            "disabled": 503,
            "stale_price": 503,
        }
        raise HTTPException(
            status_code=status_codes.get(error.code, 503),
            detail={"code": error.code},
        ) from None

    async def _prepare_turn_access(
        request: Request,
    ) -> tuple[str | None, str | None, SponsoredTurn | None]:
        request_key = _request_key(request)
        if request_key is not None:
            return request_key, _request_model(request), None
        if not runtime.live and runtime.sponsored is None:
            return None, _request_model(request), None
        if runtime.sponsored is None or runtime.sponsored_balance is None:
            _raise_sponsored_error(SponsoredUnavailable("disabled"))

        pass_token = request.cookies.get(SPONSORED_PASS_COOKIE, "")
        available_balance = (
            await runtime.sponsored_balance.available_microdollars()
        )
        if available_balance is None:
            _raise_sponsored_error(SponsoredUnavailable("insufficient_balance"))
        try:
            reservation = await runtime.sponsored.reserve(
                pass_token,
                network_address=_client_address(request),
                available_balance_microdollars=available_balance,
            )
        except SponsoredUnavailable as error:
            _raise_sponsored_error(error)
        return None, None, SponsoredTurn(runtime.sponsored, reservation)

    async def _own_conversation(conversation_id: str, request: Request) -> None:
        """404 unless the conversation exists AND belongs to this device.

        Device scoping (plan v1 slice 3): a browser only ever sees its
        own conversations. Unknown ids and other devices' conversations
        are indistinguishable on purpose (404, not 403, so no existence
        oracle).
        """
        if not await runtime.session.conversation_owned_by(
            conversation_id, _device_id(request)
        ):
            raise HTTPException(status_code=404, detail="unknown conversation")

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

    @app.get("/api/access", dependencies=[Depends(_check_local_hostname)])
    async def get_access(request: Request, response: Response) -> dict:
        return await _access_status(request, response)

    @app.post("/api/access/consent", dependencies=[Depends(_check_local)])
    async def consent_to_sponsored_access(
        request: Request,
        response: Response,
    ) -> dict:
        if runtime.sponsored is None:
            _raise_sponsored_error(SponsoredUnavailable("disabled"))
        pass_token = request.cookies.get(SPONSORED_PASS_COOKIE, "")
        try:
            await runtime.sponsored.record_consent(pass_token)
        except SponsoredUnavailable:
            pass_token = runtime.sponsored.issue_pass()
            _set_sponsored_pass(response, pass_token)
            await runtime.sponsored.record_consent(pass_token)
        return await _access_status(
            request,
            response,
            pass_token_override=pass_token,
        )

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
    async def list_conversations(request: Request) -> list[dict]:
        device = _device_id(request)
        return await runtime.session.list_conversations(device_id=device)

    @app.patch(
        "/api/conversations/{conversation_id}",
        dependencies=[Depends(_check_local)],
    )
    async def update_conversation_metadata(
        conversation_id: str,
        request: Request,
        body: ConversationMetadataBody,
    ) -> dict:
        await _own_conversation(conversation_id, request)
        field_names = body.model_fields_set
        if not field_names:
            raise HTTPException(status_code=422, detail="metadata update must not be empty")

        stream = active.get(conversation_id)
        if (
            body.archived is True
            and stream is not None
            and not stream.finished
        ):
            raise HTTPException(
                status_code=409,
                detail="a turn is running in this conversation",
            )

        title = body.title
        if "title" in field_names and title is not None:
            title = title.strip()
            if not title:
                raise HTTPException(status_code=422, detail="title must not be blank")

        summary = await runtime.session.update_conversation_metadata(
            conversation_id,
            title=title,
            title_is_set="title" in field_names,
            archived=body.archived if "archived" in field_names else None,
            pinned=body.pinned if "pinned" in field_names else None,
        )
        if summary is None:
            raise HTTPException(status_code=404, detail="unknown conversation")
        return summary

    @app.post(
        "/api/conversations", status_code=201, dependencies=[Depends(_check_local)]
    )
    async def create_conversation(
        request: Request,
        body: CreateConversationBody | None = None,
    ) -> dict:
        device = _device_id(request)
        domain = body.domain if body is not None else "canon"
        fanfic_kind = body.fanfic_kind if body is not None else None
        conversation_id = await runtime.session.start_conversation(
            "",
            device,
            domain=domain,
            fanfic_kind=fanfic_kind,
        )
        return {
            "conversation_id": conversation_id,
            "domain": domain,
            "fanfic_kind": fanfic_kind,
        }

    @app.delete(
        "/api/conversations/{conversation_id}",
        dependencies=[Depends(_check_local)],
    )
    async def delete_conversation(conversation_id: str, request: Request) -> dict:
        await _own_conversation(conversation_id, request)
        stream = active.get(conversation_id)
        if stream is not None and not stream.finished:
            raise HTTPException(status_code=409, detail="a turn is running in this conversation")
        if not await runtime.session.delete_conversation(conversation_id):
            raise HTTPException(status_code=404, detail="unknown conversation")
        return {"deleted": conversation_id}

    @app.get("/api/conversations/{conversation_id}/messages")
    async def get_messages(conversation_id: str, request: Request) -> list[dict]:
        await _own_conversation(conversation_id, request)
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
        conversation_id: str,
        message: str,
        stream: TurnStream,
        *,
        retry: bool = False,
        regenerate: bool = False,
        request_key: str | None = None,
        request_model: str | None = None,
        sponsored_turn: SponsoredTurn | None = None,
    ) -> None:
        """Run the send (or the last-turn retry/regenerate), then emit
        only the validated terminal answer."""
        # BYOK (plan v1 slice 3): bind this turn's per-request key. The
        # contextvar is task-local, so a concurrent turn in another task
        # keeps its own key; None falls back to the server env key.
        key_token = (
            current_api_key.set(request_key) if request_key is not None else None
        )
        # Plan v1 (2026-08-17): bind this turn's per-request model. The
        # runner resolves it at call time; None keeps the runtime
        # default. Reset alongside the key token below.
        model_token = (
            current_model_id.set(request_model)
            if request_model is not None
            else None
        )
        fake_retry_token = (
            current_fake_retry.set(retry) if not runtime.live else None
        )
        sponsored_token = (
            current_sponsored_turn.set(sponsored_turn)
            if sponsored_turn is not None
            else None
        )
        sponsored_finished = False

        async def finish_sponsored(failure_category: str | None) -> None:
            nonlocal sponsored_finished
            if sponsored_turn is None or sponsored_finished:
                return
            await sponsored_turn.finish(failure_category=failure_category)
            sponsored_finished = True

        # Tool activity crosses the browser boundary as phase metadata only.
        # Arguments, results, chapter text, passage handles, and raw detail stay
        # inside the agent turn.
        async def on_tool_event(
            name: str, status: str, _detail: str, _result: dict | None = None
        ) -> None:
            stream.emit("tool", {"name": name, "status": status})

        async def on_delta(delta: str) -> None:
            stream.emit("delta", {"text": delta})
            if runtime.fake_delta_delay_seconds > 0:
                await asyncio.sleep(runtime.fake_delta_delay_seconds)

        delta_callback = on_delta
        turn_prefs = (
            await runtime.prefs.get() if runtime.prefs is not None else None
        )
        reader_note = _reader_note(turn_prefs)
        max_chapter = (
            turn_prefs.reader_chapter
            if turn_prefs is not None
            and turn_prefs.spoiler_mode == "protect"
            else None
        )
        conversation_domain, _ = await runtime.session.conversation_domain(
            conversation_id
        )
        (
            profile_budget,
            profile_reasoning_tier,
            profile_packet_cap,
            profile_final_pass,
        ) = _turn_profile(message, domain=conversation_domain)

        # Plan 15 final reading phase: after a candidate passes the
        # mechanical checks, the packet builder re-reads the turn's
        # opened passages with expanded windows plus the notebook
        # statements and spoiler framing. One toolless call may improve
        # the answer; the candidate and packet stay ephemeral.
        async def on_packet(tool_results, candidate: str):
            if runtime.library is None:
                return (
                    "--- chapter 184, lines 1-12 ---\n"
                    "Synthetic passage for development only. The character makes "
                    "a choice, then learns that its consequence reaches further "
                    "than intended.\n\n"
                    "--- evidence board ---\n"
                    "direct sources: chapter 184 lines 1-12\n"
                    "notebook leads: none\n"
                    "citation gaps: none\n\n"
                    "--- spoiler framing ---\n"
                    "The synthetic development fixture may be answered completely."
                )
            prefs = await runtime.prefs.get() if runtime.prefs is not None else None
            packet = build_packet(
                runtime.library,
                tool_results,
                candidate=candidate,
                user_chapter=prefs.reader_chapter if prefs is not None else None,
                spoiler_mode=prefs.spoiler_mode if prefs is not None else "protect",
                judge=spoiler_judge,
                cap_override=profile_packet_cap,
            )
            if packet is None or "direct sources: none" in packet.text:
                # Notebook leads without a page of prose are not evidence:
                # forcing the final pass here only produces a failed repair.
                return None
            return packet.text

        try:
            tool_budget = (
                min(profile_budget, 4)
                if sponsored_turn is not None
                else profile_budget
            )
            reasoning = (
                REASONING_TIERS[profile_reasoning_tier]
                if profile_reasoning_tier is not None
                else None
            )
            # the naming call runs once, after the very first turn
            is_first_turn = (
                len(await runtime.session.load_transcript(conversation_id)) == 0
            )
            if regenerate:
                regenerated = await runtime.session.regenerate_last_turn(
                    conversation_id,
                    cancel_event=stream.cancel_event,
                    on_delta=delta_callback,
                    on_tool_event=on_tool_event,
                    tool_budget=tool_budget,
                    reasoning=reasoning,
                    packet_builder=on_packet,
                    final_pass=profile_final_pass,
                    reader_note=reader_note,
                    max_chapter=max_chapter,
                )
                if regenerated is None:
                    stream.emit(
                        "failed",
                        {
                            "code": "regenerate",
                            "message": "There is nothing to regenerate.",
                        },
                    )
                    return
                result, regenerated_message = regenerated
            elif retry:
                retried = await runtime.session.retry_last_turn(
                    conversation_id,
                    cancel_event=stream.cancel_event,
                    on_delta=delta_callback,
                    on_tool_event=on_tool_event,
                    tool_budget=tool_budget,
                    reasoning=reasoning,
                    packet_builder=on_packet,
                    final_pass=profile_final_pass,
                    reader_note=reader_note,
                    max_chapter=max_chapter,
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
                    on_delta=delta_callback,
                    on_tool_event=on_tool_event,
                    # Plan 030 CP4.5: the question shape picks the tool
                    # budget, reasoning, packet cap, and whether the final
                    # reading pass is needed.
                    tool_budget=tool_budget,
                    reasoning=reasoning,
                    packet_builder=on_packet,
                    final_pass=profile_final_pass,
                    reader_note=reader_note,
                    max_chapter=max_chapter,
                )
            reason = result.exit_reason
            if reason == TurnExitReason.COMPLETED:
                await finish_sponsored(None)
                if is_first_turn:
                    first_message = (
                        regenerated_message
                        if regenerate
                        else (retried_message if retry else message)
                    )
                    await runtime.session.set_generated_title(
                        conversation_id,
                        _derived_title(first_message),
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
                await finish_sponsored("cancelled")
                stream.emit(
                    "interrupted",
                    {
                        "code": "interrupted",
                        "message": result.safe_failure or safe_error("interrupted"),
                    },
                )
            else:
                # MODEL_FAILED, LIMIT_REACHED, PERSISTENCE_FAILED, INCOMPLETE.
                failure_code = reason.value
                if getattr(result, "error_category", "") == "simulated_model":
                    failure_code = "simulated_model"
                await finish_sponsored(failure_code)
                stream.emit(
                    "failed",
                    {
                        "code": failure_code,
                        "message": result.safe_failure or safe_error("turn"),
                    },
                )
        except asyncio.CancelledError:
            # Caller-side disconnect during startup; nothing was sent.
            await finish_sponsored("cancelled")
        except Exception:
            try:
                await finish_sponsored("turn")
            except Exception:
                pass
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
            if sponsored_turn is not None and not sponsored_finished:
                try:
                    await finish_sponsored("turn")
                except Exception:
                    pass
            if key_token is not None:
                current_api_key.reset(key_token)
            if model_token is not None:
                current_model_id.reset(model_token)
            if fake_retry_token is not None:
                current_fake_retry.reset(fake_retry_token)
            if sponsored_token is not None:
                current_sponsored_turn.reset(sponsored_token)

    @app.post(
        "/api/conversations/{conversation_id}/turns",
        dependencies=[Depends(_check_local)],
    )
    async def start_turn(
        conversation_id: str,
        body: TurnBody,
        request: Request,
    ) -> Response:
        await _own_conversation(conversation_id, request)
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
        try:
            request_key, request_model, sponsored_turn = (
                await _prepare_turn_access(request)
            )
        except Exception:
            if active.get(conversation_id) is stream:
                active.pop(conversation_id, None)
            raise
        stream.task = asyncio.create_task(
            _run_turn(
                conversation_id,
                body.message,
                stream,
                request_key=request_key,
                request_model=request_model,
                sponsored_turn=sponsored_turn,
            )
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
    async def retry_last_turn(conversation_id: str, request: Request) -> Response:
        """Re-run the last interrupted turn with its own message.

        The web layer never takes the message from the client: the
        session reloads the failed turn's owner text from the store, so
        retry cannot be steered. Same 202 + GET /stream contract as the
        turns route.
        """
        await _own_conversation(conversation_id, request)
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
        try:
            request_key, request_model, sponsored_turn = (
                await _prepare_turn_access(request)
            )
        except Exception:
            if active.get(conversation_id) is stream:
                active.pop(conversation_id, None)
            raise
        stream.task = asyncio.create_task(
            _run_turn(
                conversation_id,
                "",
                stream,
                retry=True,
                request_key=request_key,
                request_model=request_model,
                sponsored_turn=sponsored_turn,
            )
        )
        return Response(
            status_code=202,
            content=json.dumps({"conversation_id": conversation_id}),
            media_type="application/json",
        )

    @app.post(
        "/api/conversations/{conversation_id}/regenerate",
        dependencies=[Depends(_check_local)],
    )
    async def regenerate_last_turn(conversation_id: str, request: Request) -> Response:
        """Re-answer the last question in place.

        Regenerate never takes text from the client and never creates a
        new user message: the session reloads the last owner message from
        the store, supersedes the run that answered it (so the old answer
        vanishes from the transcript), and re-answers the same question.
        Same 202 + GET /stream contract as the turns route.
        """
        await _own_conversation(conversation_id, request)
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
        try:
            request_key, request_model, sponsored_turn = (
                await _prepare_turn_access(request)
            )
        except Exception:
            if active.get(conversation_id) is stream:
                active.pop(conversation_id, None)
            raise
        stream.task = asyncio.create_task(
            _run_turn(
                conversation_id,
                "",
                stream,
                regenerate=True,
                request_key=request_key,
                request_model=request_model,
                sponsored_turn=sponsored_turn,
            )
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
        await _own_conversation(conversation_id, request)
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
    async def cancel_turn(conversation_id: str, request: Request) -> Response:
        await _own_conversation(conversation_id, request)
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

    @app.get("/weaver-mask-mark.webp")
    async def weaver_mask_mark() -> Response:
        return FileResponse(
            FRONTEND_DIST / "weaver-mask-mark.webp",
            media_type="image/webp",
        )

    @app.get("/favicon-16.png")
    async def favicon_16() -> Response:
        return FileResponse(FRONTEND_DIST / "favicon-16.png", media_type="image/png")

    @app.get("/favicon-32.png")
    async def favicon_32() -> Response:
        return FileResponse(FRONTEND_DIST / "favicon-32.png", media_type="image/png")

    @app.get("/weaver-icon-192.png")
    async def weaver_icon_192() -> Response:
        return FileResponse(
            FRONTEND_DIST / "weaver-icon-192.png",
            media_type="image/png",
        )

    @app.get("/weaver-icon-512.png")
    async def weaver_icon_512() -> Response:
        return FileResponse(
            FRONTEND_DIST / "weaver-icon-512.png",
            media_type="image/png",
        )

    @app.get("/weaver-icon-maskable-512.png")
    async def weaver_icon_maskable_512() -> Response:
        return FileResponse(
            FRONTEND_DIST / "weaver-icon-maskable-512.png",
            media_type="image/png",
        )

    @app.get("/")
    async def index() -> HTMLResponse:
        html = (FRONTEND_DIST / "index.html").read_text(encoding="utf-8")
        html = html.replace("{{MODE_LABEL}}", runtime.mode_label)
        if runtime.live:
            privacy_label = (
                "Weaver runs on a private server. Your question and the "
                "passages it opens are sent to DeepSeek for a reply."
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

    @app.get("/privacy")
    async def privacy() -> FileResponse:
        return FileResponse(
            FRONTEND_DIST / "privacy.html",
            media_type="text/html",
            headers={
                "Content-Security-Policy": (
                    "default-src 'none'; base-uri 'none'; frame-ancestors 'none'"
                ),
            },
        )

    @app.get("/robots.txt")
    async def robots() -> FileResponse:
        return FileResponse(
            FRONTEND_DIST / "robots.txt",
            media_type="text/plain",
        )

    app.mount(
        "/assets",
        StaticFiles(directory=FRONTEND_DIST / "assets", check_dir=False),
        name="frontend-assets",
    )
    return app
