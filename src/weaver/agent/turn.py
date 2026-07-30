"""One bounded Weaver model and tool turn."""

from __future__ import annotations

import asyncio
import json
import logging
import uuid
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
    ModelToolCall,
)

logger = logging.getLogger(__name__)

_MAX_MODEL_STEPS = 8

PersistCallback = Callable[[ConversationMessage], None]


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


def _message_id() -> str:
    return uuid.uuid4().hex[:12]


def _persist(
    message: ConversationMessage,
    callback: PersistCallback | None,
) -> bool:
    if callback is None:
        return True
    try:
        callback(message)
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
    max_model_steps: int = 5,
) -> TurnResult:
    max_steps = min(max(max_model_steps, 1), _MAX_MODEL_STEPS)
    new_messages: list[ConversationMessage] = []
    model_steps = 0
    tool_starts = 0
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
        request_messages = project_messages(
            system_prompt=system_prompt,
            history=history + new_messages,
        )
        request = ModelRequest(
            messages=tuple(request_messages),
            tools=tuple(tool_schemas),
        )

        try:
            response = await model_layer.complete(
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
            if not _persist(interrupted, persist_message):
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
            if not _persist(assistant, persist_message):
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
        if not tool_calls or not _tool_calls_are_safe(
            tool_calls,
            known_call_ids,
        ):
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model_protocol")
            break
        known_call_ids.update(
            tool_call.call_id
            for tool_call in tool_calls
        )

        assistant = _assistant_message(
            turn_id=turn_id,
            response_message=response_message,
        )
        new_messages.append(assistant)
        if not _persist(assistant, persist_message):
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
            if not _persist(call_evidence, persist_message):
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
            if not _persist(result_evidence, persist_message):
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
