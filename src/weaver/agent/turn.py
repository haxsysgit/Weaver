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
    ModelRequest,
    ModelResponse,
    ModelSpec,
    ModelStopReason,
    ModelStreamEventType,
    ModelToolCall,
)
from ..model_layer.layer import ModelProtocolError

logger = logging.getLogger(__name__)

_MAX_MODEL_STEPS = 8

# Plan 008 carve-out (contract §2): the persist seam is async end-to-end.
# A sync callback that returns a coroutine would be treated as success by
# _persist and every message would silently never persist.
PersistCallback = Callable[[ConversationMessage], Awaitable[None]]

# Plan 010 Phase B seam: the turn loop can forward live text deltas to an
# async callback while still persisting only the final assistant message.
# Deltas are best-effort preview: a callback failure is logged and
# swallowed so a UI hiccup can never fail a turn.
DeltaCallback = Callable[[str], Awaitable[None]]

# Plan 014 live-trial seam: the dispatch forwards tool activity
# (name, status, detail) so the surface can render search/open lines
# instead of the model narrating its steps. Best-effort like deltas.
ToolEventCallback = Callable[[str, str, str], Awaitable[None]]


async def _complete_streaming(
    model_layer: ModelLayer,
    model: ModelSpec,
    request: ModelRequest,
    cancel_event: asyncio.Event,
    on_delta: DeltaCallback,
) -> ModelResponse:
    """Drain the model stream, forwarding TEXT_DELTA events to on_delta.

    Mirrors ModelLayer.complete (same terminal-response validation) but
    delivers each text chunk as it arrives.
    """
    final_response: ModelResponse | None = None
    async for event in model_layer.stream(model, request, cancel_event):
        if event.event_type == ModelStreamEventType.TEXT_DELTA and event.delta:
            try:
                await on_delta(event.delta)
            except Exception:
                logger.warning("delta callback failed", exc_info=True)
        elif event.event_type == ModelStreamEventType.RESPONSE_COMPLETE:
            final_response = event.response
    if final_response is None:
        raise ModelProtocolError(
            "A model stream completed without a final response."
        )
    return final_response


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
    reader_ceiling: int | None = None,
) -> TurnResult:
    max_steps = min(max(max_model_steps, 1), _MAX_MODEL_STEPS)
    if tool_budget is not None:
        # Plan 15 two-budget split: tool calls are capped at tool_budget
        # and the final answer call is always guaranteed. The cap counts
        # tool steps, never the answer.
        max_steps = min(max(tool_budget, 0) + 1, _MAX_MODEL_STEPS)
    new_messages: list[ConversationMessage] = []
    model_steps = 0
    tool_starts = 0
    tool_steps_used = 0
    final_text = ""
    safe_failure = ""
    model_name = ""
    provider_name = ""
    completed_response = False
    exit_reason = TurnExitReason.COMPLETED

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

    while model_steps < max_steps:
        if cancel_event.is_set():
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        model_steps += 1
        # Plan 15: the budget is visible to the model so it can plan, and
        # the call after the last tool step is forced to be the answer.
        forced_answer = tool_budget is not None and tool_steps_used >= tool_budget
        request_messages = project_messages(
            system_prompt=system_prompt,
            history=history + new_messages,
        )
        if tool_budget is not None:
            reminder = (
                "Your tool steps are spent. Answer now from what you have "
                "gathered. Do not call tools."
                if forced_answer
                else f"Tool steps remaining: {tool_budget - tool_steps_used} "
                f"of {tool_budget}."
            )
            request_messages = [
                *request_messages,
                ModelMessage(role="system", content=reminder),
            ]
        request = ModelRequest(
            messages=tuple(request_messages),
            # Plan 15: on the forced call the tools are stripped from the
            # request (hermes-style), so the model physically cannot call
            # one and must write the answer.
            tools=() if forced_answer else tuple(tool_schemas),
        )

        try:
            if on_delta is None:
                # Plan 008 behavior: drain the stream, no live preview.
                response = await model_layer.complete(
                    model,
                    request,
                    cancel_event,
                )
            else:
                # Phase B: forward deltas as they arrive; the final
                # response still comes back whole for persistence.
                response = await _complete_streaming(
                    model_layer,
                    model,
                    request,
                    cancel_event,
                    on_delta,
                )
        except asyncio.CancelledError:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break
        except Exception:
            logger.warning("model request failed", exc_info=True)
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model")
            break

        model_name = response.model_id
        provider_name = response.provider_id
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
            new_messages.append(assistant)
            if not await _persist(assistant, persist_message):
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
                    reader_ceiling=reader_ceiling,
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
    )
