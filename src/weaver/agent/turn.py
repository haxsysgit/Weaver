"""One bounded Weaver model and tool turn."""

from __future__ import annotations

import asyncio
import json
import logging
import uuid
from collections.abc import Awaitable
from dataclasses import dataclass, field
from enum import Enum
from typing import Callable

from weaver.agent.errors import CANCELLED, safe_error, safe_tool_error
from weaver.agent.messages import (
    AssistantMessage,
    ConversationMessage,
    ToolCallMessage,
    ToolResultMessage,
    project_messages,
)
from weaver.agent.tools import (
    ToolExecutionContext,
    ToolExecutionPolicy,
    ToolRegistry,
    ToolResult,
)
from ..model_layer import (
    ModelLayer,
    ModelMessage,
    ModelReasoning,
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelStreamEventType,
    ModelToolCall,
)
from ..model_layer.layer import ModelProtocolError
from ..model_layer.types import ReasoningEffort

logger = logging.getLogger(__name__)

# Plan 15 (2026-08-07): the tier budgets are ceilings, not targets. The
# absolute guardrail sits above all three tiers so a runaway loop can never
# exceed it; hermes uses 90 iterations, pi uses no cap at all.
_MAX_MODEL_STEPS = 100

# Plan 15 tiers: the model is trusted to find the answer without burning
# the budget; the cap exists so a runaway tool loop cannot run forever.
# Owner decision 2026-08-07: awakened 50 / ascended 70 / transcendent 90.
TOOL_BUDGET_TIERS: dict[str, int] = {
    "awakened": 50,
    "ascended": 70,
    "transcendent": 90,
}

# Plan 15 (2026-08-07, owner decision): thinking is ALWAYS on for every
# tier. Only the tool budget and the reasoning effort differ. DeepSeek's
# API only supports high and max (low/medium clamp up to high), so
# awakened and ascended share high and transcendent gets max.
# Plan 15 (owner 2026-08-08): search/locate steps do not need the tier's
# full reasoning effort. Thinking stays on for every call, but tool-call
# steps (and a no-packet final answer) drop to low so the search loop is
# fast; the final reading call keeps the tier effort (high/max).
# DeepSeek flash documents reasoning_effort low/high/max.
LOCATE_REASONING_EFFORT: ReasoningEffort = "low"

REASONING_TIERS: dict[str, ReasoningEffort] = {
    "awakened": "high",
    "ascended": "high",
    "transcendent": "max",
}

# Per-step countdown reminders are noise at 50-90 step budgets; they only
# appear when the budget is running low or on the forced answer call.
BUDGET_REMINDER_THRESHOLD = 10

# Plan 008 carve-out (contract §2): the persist seam is async end-to-end.
# A sync callback that returns a coroutine would be treated as success by
# _persist and every message would silently never persist.
PersistCallback = Callable[[ConversationMessage], Awaitable[None]]

# Plan 010 Phase B seam: the turn loop can forward live text deltas to an
# async callback while still persisting only the final assistant message.
# Deltas are best-effort preview: a callback failure is logged and
# swallowed so a UI hiccup can never fail a turn.
DeltaCallback = Callable[[str], Awaitable[None]]
PacketBuilder = Callable[[list[ToolResult], str], Awaitable[str | None]]

# Plan 014 live-trial seam: the dispatch forwards tool activity
# (name, status, detail) so the surface can render search/open lines
# instead of the model narrating its steps. Best-effort like deltas.
ToolEventCallback = Callable[[str, str, str], Awaitable[None]]


async def _complete_buffered_stream(
    model_layer: ModelLayer,
    model: ModelSpec,
    request: ModelRequest,
    cancel_event: asyncio.Event,
) -> tuple[ModelResponse, tuple[str, ...]]:
    """Drain a model stream without exposing unvalidated text.

    The caller releases the buffered chunks only after deciding which
    answer is safe to publish.
    """
    final_response: ModelResponse | None = None
    text_deltas: list[str] = []
    async for event in model_layer.stream(model, request, cancel_event):
        if event.event_type == ModelStreamEventType.TEXT_DELTA and event.delta:
            text_deltas.append(event.delta)
        elif event.event_type == ModelStreamEventType.RESPONSE_COMPLETE:
            final_response = event.response
    if final_response is None:
        raise ModelProtocolError(
            "A model stream completed without a final response."
        )
    return final_response, tuple(text_deltas)


async def _publish_deltas(
    deltas: tuple[str, ...],
    on_delta: DeltaCallback | None,
) -> None:
    if on_delta is None:
        return
    for delta in deltas:
        try:
            await on_delta(delta)
        except Exception:
            logger.warning("delta callback failed", exc_info=True)


# Plan 15 (owner 2026-08-08): the answer call must never truncate. The
# model writes long answers while thinking is on, and DeepSeek counts
# reasoning tokens against max_tokens, so the default 4096 cap cut the
# daemons answer mid-sentence (finish_reason="length", the run marked
# interrupted). Tool-call calls keep the 4096 default (their outputs are
# short and bounded thinking keeps the locate loop fast); the answer
# calls get headroom.
ANSWER_MAX_OUTPUT_TOKENS = 16384

# Plan 15 (owner 2026-08-08): the final reading call keeps conversation
# continuity without letting an old exchange dominate. The window is the
# last three owner/assistant exchanges (the immediate question plus two
# previous Q&A pairs); anything older is dropped and only survives in
# the packet.
SYNTHESIS_HISTORY_EXCHANGES = 3

# A thinking model sometimes slips out of the structured tool-call
# protocol and writes its call as prose ('<tool calls>' plus a JSON
# block). That text is never an answer: the harness corrects the model
# and re-runs, at most this many times, and never persists the slip.
TEXT_TOOL_SLIP_LIMIT = 2
TEXT_TOOL_CORRECTION = (
    "Your previous message wrote a tool call as plain text. Tool calls "
    "are structured, never text: to call a tool use the tool-call "
    "mechanism attached to your reply, or, if you have enough to "
    "answer, write the answer directly."
)
WORKING_NOTE_CORRECTION = (
    "Your previous message was a placeholder or narrated work you had not "
    "done. Call a tool now if you need evidence, or answer the user fully "
    "and directly."
)
ZERO_EVIDENCE_CORRECTION = (
    "You answered without opening any evidence this turn. The library is the "
    "only source of truth: run at least one search or read, or say honestly "
    "that the library does not cover it. If this is not a lore question, just "
    "answer directly."
)
FINAL_ANSWER_INSTRUCTION = (
    "This is the final answer phase. The evidence packet above is complete and "
    "no tools are available. Answer the user directly, citing chapters. Do not "
    "name or describe searches, tool calls, or work you plan to do."
)
WORKING_NOTE_MARKERS = (
    "one moment",
    "give me a moment",
    "let me look",
    "let me search",
    "let me check",
    "i'll search",
    "i'll look",
    "i'll check",
    "i'll trace",
    "i'll open",
    "i need to verify",
    "reaching into the",
    "searching the library",
)
FINAL_REFUSAL_MARKERS = (
    "i can't answer",
    "i cannot answer",
    "i'm unable to answer",
    "i am unable to answer",
)
KNOWN_READING_TOOL_NAMES = frozenset(
    {
        "semantic_search",
        "read_chapters",
        "find_text",
        "browse_chapters",
        "who_is",
        "lore_path",
    }
)


def _is_textual_tool_call(content: str, tool_names: tuple[str, ...]) -> bool:
    """True when the model wrote a tool call as prose instead of using
    the structured tool-call mechanism."""
    stripped = content.lstrip()
    if stripped.startswith("<tool calls>") or stripped.startswith("<tool_calls>"):
        return True
    if "```json" in content and '"name"' in content and '"arguments"' in content:
        return True

    known_tool_names = KNOWN_READING_TOOL_NAMES.union(tool_names)
    for line in content.splitlines():
        tag = line.strip()
        if not tag.startswith("<") or not tag.endswith(">"):
            continue
        tag_name = tag[1:-1].split(":", 1)[0].split(None, 1)[0]
        if tag_name in known_tool_names:
            return True
    return False


def _is_working_note_candidate(content: str) -> bool:
    """True when a plain reply only promises or narrates future work."""
    casefolded = content.casefold()
    return any(marker in casefolded for marker in WORKING_NOTE_MARKERS)


def _candidate_rejection_note(
    content: str,
    tool_names: tuple[str, ...],
) -> str | None:
    if _is_textual_tool_call(content, tool_names):
        return TEXT_TOOL_CORRECTION
    if not content.strip() or _is_working_note_candidate(content):
        return WORKING_NOTE_CORRECTION
    return None


def _is_final_phase_refusal(content: str) -> bool:
    """True for a direct refusal produced while enhancing a valid answer."""
    casefolded = content.strip().casefold()
    return any(casefolded.startswith(marker) for marker in FINAL_REFUSAL_MARKERS)


class TurnExitReason(str, Enum):
    COMPLETED = "completed"
    INCOMPLETE = "incomplete"
    MODEL_FAILED = "model_failed"
    LIMIT_REACHED = "limit_reached"
    INTERRUPTED = "interrupted"
    PERSISTENCE_FAILED = "persistence_failed"


@dataclass
class TurnResult:
    turn_id: str
    exit_reason: TurnExitReason
    final_text: str = ""
    model_steps: int = 0
    tool_starts: int = 0
    new_messages: list[ConversationMessage] = field(default_factory=list)
    safe_failure: str = ""
    model_name: str = ""
    provider_name: str = ""
    input_characters: int = 0
    # Plan 15: failure details recorded so a failed turn is diagnosable
    # later (persisted as a run_event by the runner).
    error_category: str = ""
    raw_stop_reason: str = ""
    # Plan 010 Phase D: context meter surfaced from the assembler snapshot
    # (0 = no snapshot; token_budget 0 = unbounded).
    token_count: int = 0
    token_budget: int = 0


def _message_id() -> str:
    return uuid.uuid4().hex[:12]


async def _persist(
    message: ConversationMessage,
    callback: PersistCallback | None,
) -> bool:
    if callback is None:
        return True
    try:
        await callback(message)
        return True
    except Exception:
        logger.warning(
            "persist failed for %s",
            message.kind,
            exc_info=True,
        )
        return False


def _input_characters(messages: list[ModelMessage]) -> int:
    return sum(len(message.content or "") for message in messages)


def _response_matches_model(
    response: ModelResponse,
    model: ModelSpec,
) -> bool:
    return (
        response.provider_id == model.provider_id
        and response.model_id == model.model_id
        and response.assistant_message.role == "assistant"
        and response.assistant_message.name is None
        and response.assistant_message.tool_call_id is None
    )


def _tool_calls_are_safe(
    tool_calls: tuple[ModelToolCall, ...],
    known_call_ids: set[str],
) -> bool:
    seen_call_ids: set[str] = set()
    for tool_call in tool_calls:
        if not tool_call.call_id.strip():
            return False
        if tool_call.call_id in known_call_ids:
            return False
        if tool_call.call_id in seen_call_ids:
            return False
        seen_call_ids.add(tool_call.call_id)

        if not tool_call.name.strip():
            return False
        if not tool_call.arguments_json.strip():
            return False
        try:
            arguments = json.loads(tool_call.arguments_json)
        except json.JSONDecodeError:
            return False
        if not isinstance(arguments, dict):
            return False
    return True


def _recent_exchanges(
    history: list[ConversationMessage],
    *,
    max_exchanges: int,
) -> list[ConversationMessage]:
    """The last ``max_exchanges`` owner/assistant exchanges, in order.

    Tool-call and tool-result messages are skipped (their evidence lives
    in the packet; carrying old tool transcripts bloats the context). The
    returned window always ends at the current question.
    """
    # Keep user messages and content-bearing assistant answers only.
    # Tool-use assistants from earlier turns (tool_calls, empty content)
    # must never reach the final reading wire: their tool results are skipped
    # here, so keeping them orphaned the tool_calls and DeepSeek 400'd
    # (invalid_request) exactly when holding a conversation.
    messages = [
        message
        for message in history
        if message.kind == "user"
        or (
            message.kind == "assistant"
            and message.content
            and not message.tool_calls
        )
    ]
    window: list[ConversationMessage] = []
    user_count = 0
    for message in reversed(messages):
        window.append(message)
        if message.kind == "user":
            user_count += 1
            if user_count >= max_exchanges:
                break
    return list(reversed(window))


def _known_call_ids(
    history: list[ConversationMessage],
) -> set[str]:
    call_ids: set[str] = set()
    for message in history:
        if isinstance(message, AssistantMessage):
            call_ids.update(
                tool_call.call_id
                for tool_call in message.tool_calls
            )
        elif isinstance(message, ToolCallMessage):
            call_ids.add(message.call_id)
    return call_ids


def _assistant_message(
    *,
    turn_id: str,
    response_message: ModelMessage,
    status: str = "complete",
    include_tool_calls: bool = True,
) -> AssistantMessage:
    tool_calls = response_message.tool_calls if include_tool_calls else ()
    return AssistantMessage(
        message_id=_message_id(),
        turn_id=turn_id,
        content=response_message.content or "",
        tool_calls=tool_calls,
        status=status,
        reasoning_content=response_message.reasoning_content or "",
    )


async def run_turn(
    *,
    session_id: str,
    turn_id: str,
    model_layer: ModelLayer,
    model: ModelSpec,
    system_prompt: str,
    history: list[ConversationMessage],
    tool_registry: ToolRegistry,
    active_tools: tuple[str, ...],
    execution_policy: ToolExecutionPolicy,
    cancel_event: asyncio.Event,
    persist_message: PersistCallback | None = None,
    on_delta: DeltaCallback | None = None,
    on_tool_event: ToolEventCallback | None = None,
    max_model_steps: int = 5,
    tool_budget: int | None = None,
    reasoning: ReasoningEffort | None = None,
    # Plan 15 final reading seam: called after a candidate passes the
    # mechanical checks. Returns the reading packet text, or None when
    # there is no evidence to re-read. The candidate remains ephemeral
    # until the final reading call succeeds or falls back to it.
    packet_builder: PacketBuilder | None = None,
) -> TurnResult:
    max_steps = min(max(max_model_steps, 1), _MAX_MODEL_STEPS)
    if tool_budget is not None:
        # Plan 15 two-budget split: tool calls are capped at tool_budget
        # and the final answer call is always guaranteed. The cap counts
        # tool steps, never the answer.
        max_steps = min(max(tool_budget, 0) + 1, _MAX_MODEL_STEPS)
    new_messages: list[ConversationMessage] = []
    turn_tool_results: list[ToolResult] = []
    model_steps = 0
    tool_starts = 0
    tool_steps_used = 0
    final_text = ""
    safe_failure = ""
    error_category = ""
    raw_stop_reason = ""
    model_name = ""
    provider_name = ""
    completed_response = False
    exit_reason = TurnExitReason.COMPLETED
    final_packet: str | None = None
    validated_candidate: AssistantMessage | None = None
    validated_candidate_deltas: tuple[str, ...] = ()
    candidate_rejections = 0
    candidate_note: str | None = None
    zero_evidence_reprompted = False

    try:
        tool_schemas = tool_registry.active_schemas(active_tools)
    except ValueError as error:
        logger.warning("active tool schema setup failed: %s", error)
        return TurnResult(
            turn_id=turn_id,
            exit_reason=TurnExitReason.MODEL_FAILED,
            safe_failure=safe_error("tool_schema"),
        )

    initial_messages = project_messages(
        system_prompt=system_prompt,
        history=history,
    )
    input_characters = _input_characters(initial_messages)
    known_call_ids = _known_call_ids(history)

    async def persist_answer(
        answer: AssistantMessage,
        deltas: tuple[str, ...],
    ) -> bool:
        new_messages.append(answer)
        persisted = await _persist(answer, persist_message)
        if persisted:
            await _publish_deltas(deltas, on_delta)
        return persisted

    while model_steps < max_steps:
        if cancel_event.is_set():
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        model_steps += 1
        # Plan 15: the budget is visible to the model so it can plan, and
        # the call after the last tool step is forced to be the answer.
        in_final_phase = final_packet is not None and validated_candidate is not None
        forced_answer = (
            not in_final_phase
            and tool_budget is not None
            and tool_steps_used >= tool_budget
        )
        request_messages = project_messages(
            system_prompt=system_prompt,
            history=history + new_messages,
        )
        if in_final_phase:
            # The packet is ephemeral context for one fail-soft final
            # reading call. This call must NOT carry the
            # whole conversation history (an older exchange's answer can
            # dominate the model and it replies to the wrong question),
            # but it also must not forget the conversation (follow-ups
            # like "and what about the 6th daemon?" need the previous
            # exchange). Curate the recent exchanges, validated candidate,
            # and packet. Current-turn tool transcripts stay out because
            # their evidence has already been folded into the packet.
            recent = _recent_exchanges(
                history,
                max_exchanges=SYNTHESIS_HISTORY_EXCHANGES,
            )
            request_messages = project_messages(
                system_prompt=system_prompt,
                history=[*recent, validated_candidate],
            )
            request_messages = [
                *request_messages,
                ModelMessage(
                    role="system",
                    content=final_packet + "\n\n" + FINAL_ANSWER_INSTRUCTION,
                ),
            ]
        if tool_budget is not None and not in_final_phase:
            remaining = tool_budget - tool_steps_used
            if forced_answer or remaining <= BUDGET_REMINDER_THRESHOLD:
                reminder = (
                    "Your tool steps are spent. Answer now from what you "
                    "have gathered. Do not call tools."
                    if forced_answer
                    else f"Tool steps remaining: {remaining} of {tool_budget}."
                )
                request_messages = [
                    *request_messages,
                    ModelMessage(role="system", content=reminder),
                ]
        if candidate_note is not None:
            request_messages = [
                *request_messages,
                ModelMessage(role="system", content=candidate_note),
            ]
            candidate_note = None
        request = ModelRequest(
            messages=tuple(request_messages),
            # Plan 15: on the forced call the tools are stripped from the
            # request (hermes-style), so the model physically cannot call
            # one and must write the answer.
            tools=() if (forced_answer or in_final_phase) else tuple(tool_schemas),
            # Plan 15: answer calls get headroom so a long answer with a
            # long thinking trace never truncates (see the daemons turn);
            # tool-call calls keep the model default (4096).
            max_output_tokens=(
                ANSWER_MAX_OUTPUT_TOKENS
                if (in_final_phase or forced_answer)
                else None
            ),
            # Plan 15 (owner 2026-08-07): thinking stays on for every
            # tier; the tier only picks the reasoning effort. None keeps
            # the pre-tier behavior (thinking disabled, no effort).
            # Plan 15 (owner 2026-08-08): final reading and forced answer
            # calls keep the tier effort; locate steps drop to low.
            reasoning=(
                ModelReasoning(
                    enabled=True,
                    effort=(
                        reasoning
                        if (in_final_phase or forced_answer)
                        else LOCATE_REASONING_EFFORT
                    ),
                )
                if reasoning is not None
                else ModelReasoning()
            ),
        )

        response: ModelResponse | None = None
        response_deltas: tuple[str, ...] = ()
        try:
            if on_delta is None:
                # Plan 008 behavior: drain the stream, no live preview.
                response = await model_layer.complete(
                    model,
                    request,
                    cancel_event,
                )
            else:
                # Candidate text stays buffered until validation chooses
                # the one answer that may reach the public callback.
                response, response_deltas = await _complete_buffered_stream(
                    model_layer,
                    model,
                    request,
                    cancel_event,
                )
        except asyncio.CancelledError:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break
        except Exception:
            logger.warning("model request failed", exc_info=True)
            if not in_final_phase:
                exit_reason = TurnExitReason.MODEL_FAILED
                safe_failure = safe_error("model")
                break

        if response is None:
            # The final reading pass only enhances an answer that already
            # passed validation. A provider failure cannot erase it.
            assert validated_candidate is not None
            if not await persist_answer(
                validated_candidate,
                validated_candidate_deltas,
            ):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            final_text = validated_candidate.content
            completed_response = True
            break

        model_name = response.model_id
        provider_name = response.provider_id

        if in_final_phase:
            if response.stop_reason == ModelStopReason.ABORTED:
                exit_reason = TurnExitReason.INTERRUPTED
                safe_failure = safe_error("interrupted")
                break

            assert validated_candidate is not None
            answer = validated_candidate
            answer_deltas = validated_candidate_deltas
            if _response_matches_model(response, model):
                response_message = response.assistant_message
                rejection_note = _candidate_rejection_note(
                    response_message.content or "",
                    active_tools,
                )
                valid_final = (
                    response.stop_reason == ModelStopReason.STOP
                    and not response_message.tool_calls
                    and rejection_note is None
                    and not _is_final_phase_refusal(response_message.content or "")
                )
                if valid_final:
                    answer = _assistant_message(
                        turn_id=turn_id,
                        response_message=response_message,
                    )
                    answer_deltas = response_deltas
            if not await persist_answer(answer, answer_deltas):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            final_text = answer.content
            completed_response = True
            break

        if not _response_matches_model(response, model):
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
            break

        response_message = response.assistant_message
        tool_calls = response_message.tool_calls

        if response.stop_reason == ModelStopReason.ABORTED:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        if response.stop_reason == ModelStopReason.ERROR:
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model")
            error_category = response.error_category or ""
            raw_stop_reason = response.raw_stop_reason
            break

        if response.stop_reason == ModelStopReason.LENGTH:
            interrupted = _assistant_message(
                turn_id=turn_id,
                response_message=response_message,
                status="interrupted",
                include_tool_calls=False,
            )
            new_messages.append(interrupted)
            if not await _persist(interrupted, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            await _publish_deltas(response_deltas, on_delta)
            exit_reason = TurnExitReason.INCOMPLETE
            final_text = interrupted.content
            safe_failure = safe_error("incomplete")
            break

        if response.stop_reason == ModelStopReason.STOP:
            if tool_calls:
                exit_reason = TurnExitReason.MODEL_FAILED
                safe_failure = safe_error("model_protocol")
                break
            assistant = _assistant_message(
                turn_id=turn_id,
                response_message=response_message,
            )
            rejection_note = _candidate_rejection_note(
                assistant.content,
                active_tools,
            )
            if rejection_note is not None:
                if forced_answer:
                    exit_reason = TurnExitReason.LIMIT_REACHED
                    safe_failure = safe_error("limit")
                    break
                if candidate_rejections >= TEXT_TOOL_SLIP_LIMIT:
                    exit_reason = TurnExitReason.MODEL_FAILED
                    safe_failure = safe_error("model_protocol")
                    break
                candidate_rejections += 1
                candidate_note = rejection_note
                continue

            if forced_answer:
                if not await persist_answer(assistant, response_deltas):
                    exit_reason = TurnExitReason.PERSISTENCE_FAILED
                    safe_failure = safe_error("assistant_persistence")
                    break
                final_text = assistant.content
                completed_response = True
                break

            if tool_steps_used == 0 and not zero_evidence_reprompted:
                zero_evidence_reprompted = True
                candidate_note = ZERO_EVIDENCE_CORRECTION
                continue

            packet: str | None = None
            if packet_builder is not None:
                try:
                    packet = await packet_builder(
                        turn_tool_results,
                        assistant.content,
                    )
                except Exception:
                    logger.warning("reading packet build failed", exc_info=True)

            if packet and model_steps < max_steps:
                validated_candidate = assistant
                validated_candidate_deltas = response_deltas
                final_packet = packet
                continue

            if not await persist_answer(assistant, response_deltas):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            final_text = assistant.content
            completed_response = True
            break

        if response.stop_reason != ModelStopReason.TOOL_USE:
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
            break
        if forced_answer:
            # The final call must answer; a tool call here means the model
            # refused, and running it would starve the answer again.
            exit_reason = TurnExitReason.LIMIT_REACHED
            safe_failure = safe_error("limit")
            break
        if not tool_calls or not _tool_calls_are_safe(
            tool_calls,
            known_call_ids,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
            break
        tool_steps_used += 1
        known_call_ids.update(
            tool_call.call_id
            for tool_call in tool_calls
        )

        assistant = _assistant_message(
            turn_id=turn_id,
            response_message=response_message,
        )
        new_messages.append(assistant)
        if not await _persist(assistant, persist_message):
            exit_reason = TurnExitReason.PERSISTENCE_FAILED
            safe_failure = safe_error("assistant_persistence")
            break

        batch_cancelled = cancel_event.is_set()
        for tool_call in tool_calls:
            call_evidence = ToolCallMessage(
                message_id=_message_id(),
                turn_id=turn_id,
                call_id=tool_call.call_id,
                tool_name=tool_call.name,
                arguments_json=tool_call.arguments_json,
            )
            new_messages.append(call_evidence)
            if not await _persist(call_evidence, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("tool_call_persistence")
                break

            if batch_cancelled or cancel_event.is_set():
                tool_result = ToolResult(
                    ok=False,
                    error_code=CANCELLED,
                    error="Tool call was cancelled.",
                )
            else:
                context = ToolExecutionContext(
                    session_id=session_id,
                    turn_id=turn_id,
                    call_id=tool_call.call_id,
                    cancel_event=cancel_event,
                    on_tool_event=on_tool_event,
                )
                tool_result = await tool_registry.dispatch(
                    tool_call.name,
                    tool_call.arguments_json,
                    active_names=active_tools,
                    policy=execution_policy,
                    context=context,
                )
            if tool_result.started:
                tool_starts += 1
            turn_tool_results.append(tool_result)
            if (
                tool_result.error_code == CANCELLED
                or cancel_event.is_set()
            ):
                batch_cancelled = True

            result_evidence = ToolResultMessage(
                message_id=_message_id(),
                turn_id=turn_id,
                call_id=tool_call.call_id,
                tool_name=tool_call.name,
                ok=tool_result.ok,
                result=tool_result.result,
                error_code=tool_result.error_code,
                error=(
                    None
                    if tool_result.ok
                    else tool_result.error
                    or safe_tool_error(
                        tool_result.error_code or "tool_failed"
                    )
                ),
            )
            new_messages.append(result_evidence)
            if not await _persist(result_evidence, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("tool_result_persistence")
                break

        if exit_reason != TurnExitReason.COMPLETED:
            break
        if batch_cancelled:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

    if (
        model_steps >= max_steps
        and exit_reason == TurnExitReason.COMPLETED
        and not completed_response
    ):
        exit_reason = TurnExitReason.LIMIT_REACHED
        safe_failure = safe_error("limit")

    return TurnResult(
        turn_id=turn_id,
        exit_reason=exit_reason,
        final_text=final_text,
        model_steps=model_steps,
        tool_starts=tool_starts,
        new_messages=new_messages,
        safe_failure=safe_failure,
        model_name=model_name,
        provider_name=provider_name,
        input_characters=input_characters,
        error_category=error_category,
        raw_stop_reason=raw_stop_reason,
    )
