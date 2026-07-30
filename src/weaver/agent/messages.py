"""Canonical conversation messages — provider-neutral, persistable, replayable."""

from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Literal


def _utcnow() -> str:
    return datetime.now(timezone.utc).isoformat()


@dataclass
class UserMessage:
    """A user-submitted message — the canonical durable record."""

    kind: Literal["user"] = "user"
    message_id: str = ""
    turn_id: str = ""
    content: str = ""
    created_at: str = field(default_factory=_utcnow)


@dataclass
class AssistantMessage:
    """A model-produced assistant message — may be complete, interrupted, or failed."""

    kind: Literal["assistant"] = "assistant"
    message_id: str = ""
    turn_id: str = ""
    content: str = ""
    status: Literal["complete", "interrupted", "failed"] = "complete"
    created_at: str = field(default_factory=_utcnow)


@dataclass
class ToolCallMessage:
    """A tool call requested by the model."""

    kind: Literal["tool_call"] = "tool_call"
    message_id: str = ""
    turn_id: str = ""
    call_id: str = ""
    tool_name: str = ""
    arguments: str = ""  # raw JSON string
    created_at: str = field(default_factory=_utcnow)


@dataclass
class ToolResultMessage:
    """The result of a tool execution — success or failure."""

    kind: Literal["tool_result"] = "tool_result"
    message_id: str = ""
    turn_id: str = ""
    call_id: str = ""
    tool_name: str = ""
    ok: bool = False
    result: dict | None = None
    error_code: str | None = None
    error: str | None = None
    created_at: str = field(default_factory=_utcnow)


ConversationMessage = UserMessage | AssistantMessage | ToolCallMessage | ToolResultMessage


def project_messages(
    *,
    system_prompt: str,
    history: list[ConversationMessage],
) -> list[dict]:
    """Project conversation history into provider-ready message dicts."""
    provider_messages: list[dict] = [
        {"role": "system", "content": system_prompt},
    ]
    for msg in history:
        if isinstance(msg, UserMessage):
            provider_messages.append({"role": "user", "content": msg.content})
        elif isinstance(msg, AssistantMessage):
            provider_messages.append({"role": "assistant", "content": msg.content})
        elif isinstance(msg, ToolCallMessage):
            provider_messages.append({
                "role": "assistant",
                "content": None,
                "tool_calls": [{
                    "id": msg.call_id,
                    "type": "function",
                    "function": {
                        "name": msg.tool_name,
                        "arguments": msg.arguments,
                    },
                }],
            })
        elif isinstance(msg, ToolResultMessage):
            provider_messages.append({
                "role": "tool",
                "tool_call_id": msg.call_id,
                "content": _format_tool_result(msg),
            })
    return provider_messages


def _format_tool_result(msg: ToolResultMessage) -> str:
    if msg.ok and msg.result is not None:
        import json
        return json.dumps(msg.result)
    return msg.error or "Tool execution failed."
