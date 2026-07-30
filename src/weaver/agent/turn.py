"""Bounded streaming turn runtime — domain-free model and tool loop.

Responsibilities:
- Stream model responses and handle text/tool-call events
- Dispatch tools through the ToolRegistry with cancellation safety
- Persist canonical messages at durable boundaries
- Return a TurnResult with safe, content-free failure text

Does NOT:
- Own session state, history, or measurement
- Know about novels, characters, or scenes
- Handle message projection (messages.py owns that)
"""

from __future__ import annotations

import asyncio
import json
import logging
import uuid
from dataclasses import dataclass, field
from enum import Enum
from typing import Callable

from weaver.agent.errors import safe_error, safe_tool_error
from weaver.agent.messages import (
    AssistantMessage,
    ConversationMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
    project_messages,
)
from weaver.agent.tools import ToolExecutionContext, ToolRegistry
from weaver.client import ModelClient, ToolSchema
from weaver.model import (
    Message,
    ModelRequest,
    ModelStreamEvent,
    ModelStreamEventType,
    ToolDefinition,
)

logger = logging.getLogger(__name__)

_MAX_MODEL_STEPS = 8

PersistCallback = Callable[[ConversationMessage], None]


class TurnExitReason(str, Enum):
    COMPLETED = "completed"
    MODEL_FAILED = "model_failed"
    LIMIT_REACHED = "limit_reached"
    INTERRUPTED = "interrupted"
    PERSISTENCE_FAILED = "persistence_failed"


@dataclass
class TurnResult:
    """Result of one conversational turn — domain-free."""

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


def _mid() -> str:
    return uuid.uuid4().hex[:12]


def _persist(msg: ConversationMessage, callback: PersistCallback | None) -> bool:
    if callback is None:
        return True
    try:
        callback(msg)
        return True
    except Exception:
        logger.warning("persist failed for %s", msg.kind, exc_info=True)
        return False


async def run_turn(
    *,
    turn_id: str,
    model: ModelClient,
    system_prompt: str,
    history: list[ConversationMessage],
    tool_registry: ToolRegistry,
    active_tools: tuple[str, ...],
    cancel_event: asyncio.Event,
    persist_message: PersistCallback | None = None,
    max_model_steps: int = 5,
) -> TurnResult:
    """Execute one conversational turn — streaming model and tool loop.

    Returns a TurnResult regardless of outcome.
    persist_message is called for every ToolCallMessage (before handler),
    ToolResultMessage (after handler), and AssistantMessage.
    """
    max_steps = min(max(max_model_steps, 1), _MAX_MODEL_STEPS)
    new_messages: list[ConversationMessage] = []
    model_steps = 0
    tool_starts = 0

    exit_reason = TurnExitReason.COMPLETED
    final_text = ""
    safe_failure = ""
    model_name = ""
    provider_name = ""

    # ── Build tool schemas ──
    tool_schemas: list[ToolSchema] = []
    if active_tools:
        try:
            tool_schemas = tool_registry.active_schemas(active_tools)
        except ValueError as exc:
            logger.warning("active tool schema setup failed: %s", exc)
            return TurnResult(
                turn_id=turn_id,
                exit_reason=TurnExitReason.MODEL_FAILED,
                safe_failure=safe_error("tool_schema"),
            )

    # ── Build initial provider messages ──
    provider_messages: list[dict] = project_messages(
        system_prompt=system_prompt,
        history=history,
    )
    input_characters = sum(len(m.get("content") or "") for m in provider_messages)

    # ── Main loop ──
    accumulated_text = ""
    while model_steps < max_steps:
        if cancel_event.is_set():
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break

        model_steps += 1
        accumulated_text = ""
        model_failed = False
        tool_call_events: list[ModelStreamEvent] = []
        finish_reason = ""

        # Build model request
        model_request = ModelRequest(
            model="pro",
            messages=tuple(
                Message(
                    role=m["role"],  # type: ignore[arg-type]
                    content=m.get("content") or "",
                )
                for m in provider_messages
            ),
            max_tokens=4096,
            tools=tuple(
                ToolDefinition(
                    name=ts.name,
                    description=ts.description,
                    parameters=ts.input_schema,
                )
                for ts in tool_schemas
            ),
        )

        # Stream from model
        try:
            async for stream_event in model.stream(model_request, cancel_event):
                if cancel_event.is_set():
                    exit_reason = TurnExitReason.INTERRUPTED
                    safe_failure = safe_error("interrupted")
                    break

                if stream_event.event_type == ModelStreamEventType.TEXT_DELTA:
                    accumulated_text += stream_event.delta

                elif stream_event.event_type == ModelStreamEventType.COMPLETE_TOOL_CALL:
                    if stream_event.tool_calls_unsafe:
                        logger.warning(
                            "Rejecting unsafe tool call %s (finish_reason=length)",
                            stream_event.tool_name,
                        )
                    else:
                        tool_call_events.append(stream_event)

                elif stream_event.event_type == ModelStreamEventType.RESPONSE_COMPLETED:
                    finish_reason = stream_event.finish_reason
                    model_name = stream_event.model
                    provider_name = stream_event.provider
                    break

                elif stream_event.event_type == ModelStreamEventType.RESPONSE_FAILED:
                    if stream_event.category == "cancelled":
                        exit_reason = TurnExitReason.INTERRUPTED
                        safe_failure = safe_error("interrupted")
                    else:
                        model_failed = True
                        exit_reason = TurnExitReason.MODEL_FAILED
                        safe_failure = safe_error("model")
                    break

        except asyncio.CancelledError:
            exit_reason = TurnExitReason.INTERRUPTED
            safe_failure = safe_error("interrupted")
            break
        except Exception as exc:
            logger.warning("model stream failed: %s", exc, exc_info=True)
            model_failed = True
            exit_reason = TurnExitReason.MODEL_FAILED
            safe_failure = safe_error("model")

        if exit_reason != TurnExitReason.COMPLETED:
            break

        # ── No tool calls: turn complete ──
        if not tool_call_events:
            assistant_msg = AssistantMessage(
                message_id=_mid(),
                turn_id=turn_id,
                content=accumulated_text,
                status="complete",
            )
            new_messages.append(assistant_msg)
            if not _persist(assistant_msg, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("assistant_persistence")
                break
            final_text = accumulated_text
            break

        # ── Execute tool calls ──
        # Persist assistant message with tool calls
        assistant_msg = AssistantMessage(
            message_id=_mid(),
            turn_id=turn_id,
            content=accumulated_text,
            status="complete",
        )
        new_messages.append(assistant_msg)
        if not _persist(assistant_msg, persist_message):
            exit_reason = TurnExitReason.PERSISTENCE_FAILED
            safe_failure = safe_error("assistant_persistence")
            break

        # Append tool results to provider messages for the next model step
        provider_messages.append({
            "role": "assistant",
            "content": accumulated_text or None,
            "tool_calls": [
                {
                    "id": ev.call_id,
                    "type": "function",
                    "function": {
                        "name": ev.tool_name,
                        "arguments": ev.tool_arguments or "{}",
                    },
                }
                for ev in tool_call_events
            ],
        })

        tool_results: list[dict] = []
        for ev in tool_call_events:
            tool_starts += 1

            # Persist tool call before handler
            tc_msg = ToolCallMessage(
                message_id=_mid(),
                turn_id=turn_id,
                call_id=ev.call_id or "",
                tool_name=ev.tool_name or "",
                arguments=ev.tool_arguments or "{}",
            )
            new_messages.append(tc_msg)
            if not _persist(tc_msg, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("tool_call_persistence")
                break

            # Dispatch tool
            context = ToolExecutionContext(
                session_id="",
                turn_id=turn_id,
                call_id=ev.call_id or "",
                cancel_event=cancel_event,
            )
            result = await tool_registry.dispatch(
                ev.tool_name or "",
                ev.tool_arguments or "{}",
                context,
            )

            # Persist tool result
            tr_msg = ToolResultMessage(
                message_id=_mid(),
                turn_id=turn_id,
                call_id=ev.call_id or "",
                tool_name=ev.tool_name or "",
                ok=result.ok,
                result=result.result,
                error_code=result.error_code,
                error=result.error,
            )
            new_messages.append(tr_msg)
            if not _persist(tr_msg, persist_message):
                exit_reason = TurnExitReason.PERSISTENCE_FAILED
                safe_failure = safe_error("tool_result_persistence")
                break

            # Append to provider messages
            content = (
                json.dumps(result.result)
                if result.ok and result.result
                else result.error or safe_tool_error(result.error_code or "tool_failed")
            )
            tool_results.append({
                "role": "tool",
                "tool_call_id": ev.call_id,
                "content": content,
            })

        if exit_reason != TurnExitReason.COMPLETED:
            break

        provider_messages.extend(tool_results)

    # ── Build result ──
    if model_steps >= max_steps and exit_reason == TurnExitReason.COMPLETED:
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
