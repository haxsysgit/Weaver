"""Canonical conversation messages owned by Weaver."""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from datetime import UTC, datetime
from typing import Any, Literal

from ..model_layer import ModelMessage, ModelToolCall


def _utcnow() -> str:
    return datetime.now(UTC).isoformat()


@dataclass
class UserMessage:
    kind: Literal["user"] = "user"
    message_id: str = ""
    turn_id: str = ""
    content: str = ""
    created_at: str = field(default_factory=_utcnow)


@dataclass
class AssistantMessage:
    kind: Literal["assistant"] = "assistant"
    message_id: str = ""
    turn_id: str = ""
    content: str = ""
    tool_calls: tuple[ModelToolCall, ...] = field(default_factory=tuple)
    status: Literal["complete", "interrupted", "failed"] = "complete"
    created_at: str = field(default_factory=_utcnow)


@dataclass
class ToolCallMessage:
    kind: Literal["tool_call"] = "tool_call"
    message_id: str = ""
    turn_id: str = ""
    call_id: str = ""
    tool_name: str = ""
    arguments_json: str = ""
    created_at: str = field(default_factory=_utcnow)


@dataclass
class ToolResultMessage:
    kind: Literal["tool_result"] = "tool_result"
    message_id: str = ""
    turn_id: str = ""
    call_id: str = ""
    tool_name: str = ""
    ok: bool = False
    result: dict[str, Any] | None = None
    error_code: str | None = None
    error: str | None = None
    created_at: str = field(default_factory=_utcnow)


ConversationMessage = (
    UserMessage
    | AssistantMessage
    | ToolCallMessage
    | ToolResultMessage
)


def project_messages(
    *,
    system_prompt: str,
    history: list[ConversationMessage],
) -> list[ModelMessage]:
    messages = [
        ModelMessage(
            role="system",
            content=system_prompt,
        )
    ]
    for message in history:
        if isinstance(message, UserMessage):
            messages.append(
                ModelMessage(
                    role="user",
                    content=message.content,
                )
            )
        elif isinstance(message, AssistantMessage):
            content: str | None = message.content
            if message.tool_calls and not message.content:
                content = None
            messages.append(
                ModelMessage(
                    role="assistant",
                    content=content,
                    tool_calls=message.tool_calls,
                )
            )
        elif isinstance(message, ToolResultMessage):
            messages.append(
                ModelMessage(
                    role="tool",
                    content=_format_tool_result(message),
                    tool_call_id=message.call_id,
                )
            )
    return messages


def _format_tool_result(message: ToolResultMessage) -> str:
    if message.ok and message.result is not None:
        return json.dumps(
            message.result,
            separators=(",", ":"),
            sort_keys=True,
        )
    return message.error or "Tool execution failed."
