"""Shared ItemRecord <-> ConversationMessage adapter.

Plan 009 contract §3: the pinned mapping table from Plan 008, extracted
from `runner.py` into a shared module so the assembler, the runner, and
future plans use one source of truth. Behavior is unchanged.
"""

from __future__ import annotations

import json

from weaver.agent.messages import (
    AssistantMessage,
    ConversationMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
)
from weaver.model_layer import ModelToolCall

from .common import uid
from .repository import ItemRecord


def items_to_messages(items: list[ItemRecord]) -> list[ConversationMessage]:
    """Pinned mapping table (plan 008 contract §4): ItemRecord -> message.

    Raises ValueError with the item id for unknown kinds and missing
    required body keys — never a silent default.
    """
    messages: list[ConversationMessage] = []
    for item in items:
        try:
            body = json.loads(item.body)
        except json.JSONDecodeError as error:
            raise ValueError(f"item {item.id}: body is not valid JSON") from error
        if not isinstance(body, dict):
            raise ValueError(f"item {item.id}: body is not a JSON object")

        if item.kind == "owner":
            if "content" not in body:
                raise ValueError(f"item {item.id}: owner body missing 'content'")
            messages.append(
                UserMessage(
                    message_id=item.id,
                    turn_id=item.turn_id,
                    content=body["content"],
                )
            )
        elif item.kind == "assistant":
            raw_tool_calls = body.get("tool_calls")
            if raw_tool_calls is None:
                raw_tool_calls = []  # absent key = no tool calls (canonical form)
            elif not isinstance(raw_tool_calls, list):
                raise ValueError(
                    f"item {item.id}: assistant 'tool_calls' is not a list"
                )
            tool_calls = []
            for entry in raw_tool_calls:
                if not isinstance(entry, dict):
                    raise ValueError(
                        f"item {item.id}: assistant tool_calls entry is not an object"
                    )
                missing = [k for k in ("id", "name", "arguments") if k not in entry]
                if missing:
                    raise ValueError(
                        f"item {item.id}: assistant tool_calls entry missing {missing}"
                    )
                tool_calls.append(
                    ModelToolCall(
                        call_id=entry["id"],
                        name=entry["name"],
                        arguments_json=entry["arguments"],
                    )
                )
            messages.append(
                AssistantMessage(
                    message_id=item.id,
                    turn_id=item.turn_id,
                    content=body.get("content", ""),
                    tool_calls=tuple(tool_calls),
                )
            )
        elif item.kind == "tool_call":
            missing = [k for k in ("tool_call_id", "name", "arguments") if k not in body]
            if missing:
                raise ValueError(
                    f"item {item.id}: tool_call body missing {missing}"
                )
            messages.append(
                ToolCallMessage(
                    message_id=item.id,
                    turn_id=item.turn_id,
                    call_id=body["tool_call_id"],
                    tool_name=body["name"],
                    arguments_json=body["arguments"],
                )
            )
        elif item.kind == "tool_result":
            missing = [k for k in ("tool_call_id", "name", "result") if k not in body]
            if missing:
                raise ValueError(
                    f"item {item.id}: tool_result body missing {missing}"
                )
            messages.append(
                ToolResultMessage(
                    message_id=item.id,
                    turn_id=item.turn_id,
                    call_id=body["tool_call_id"],
                    tool_name=body["name"],
                    ok=True,
                    result=body["result"],
                )
            )
        else:
            raise ValueError(f"item {item.id}: unknown kind {item.kind!r}")
    return messages


def message_to_item(
    message: ConversationMessage,
    *,
    conversation_id: str,
    run_id: str,
    turn_id: str,
    sequence: int,
    created_at: str,
) -> ItemRecord:
    """Exact reverse of the pinned mapping table (contract §4)."""
    if isinstance(message, UserMessage):
        kind = "owner"
        body: dict = {"content": message.content}
    elif isinstance(message, AssistantMessage):
        kind = "assistant"
        body = {"content": message.content}
        if message.tool_calls:
            body["tool_calls"] = [
                {
                    "id": tc.call_id,
                    "name": tc.name,
                    "arguments": tc.arguments_json,
                }
                for tc in message.tool_calls
            ]
    elif isinstance(message, ToolCallMessage):
        kind = "tool_call"
        body = {
            "tool_call_id": message.call_id,
            "name": message.tool_name,
            "arguments": message.arguments_json,
        }
    elif isinstance(message, ToolResultMessage):
        kind = "tool_result"
        body = {
            "tool_call_id": message.call_id,
            "name": message.tool_name,
            "result": message.result,
        }
    else:
        raise TypeError(f"unknown message type {type(message).__name__}")

    return ItemRecord(
        id=uid(),
        conversation_id=conversation_id,
        sequence=sequence,
        turn_id=turn_id,
        run_id=run_id,
        kind=kind,
        body=json.dumps(body),
        created_at=created_at,
    )
