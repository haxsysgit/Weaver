"""Shared ItemRecord <-> ConversationMessage adapter.

Plan 009 contract §3: the pinned mapping table from Plan 008, extracted
from `runner.py` into a shared module so the assembler, the runner, and
future plans use one source of truth. Behavior is unchanged.

Plan 014 slice 1: tool results may carry private reading material under
the reserved `DURABLE_EVIDENCE_KEY`. The key's value is the durable
evidence record (chapter, line range, source hash, source kind, passage
handle); everything else in the result is temporary model material for
the current turn and is dropped at persistence. The in-memory message
keeps the full dict so the model reads the passage this turn; the
conversation DB only ever holds the evidence record.
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

# Reserved key inside a tool result dict. The value is the durable
# evidence record that survives persistence; all other keys are private
# material that must never reach the conversation DB (Plan 014 slice 1).
DURABLE_EVIDENCE_KEY = "durable_evidence"


def _durable_result(result: dict) -> dict:
    """Return the durable part of a tool result for persistence.

    A result without the reserved key is persisted verbatim (Plan 008
    behavior). A result with the key persists only the evidence record;
    the private material is dropped here and stays in the in-memory
    message for the current turn only.
    """
    if DURABLE_EVIDENCE_KEY not in result:
        return result
    evidence = result[DURABLE_EVIDENCE_KEY]
    if not isinstance(evidence, dict):
        raise ValueError(
            f"tool result {DURABLE_EVIDENCE_KEY!r} must be a dict, "
            f"got {type(evidence).__name__}"
        )
    return evidence


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
            missing = [
                k for k in ("tool_call_id", "name", "arguments") if k not in body
            ]
            if missing:
                raise ValueError(f"item {item.id}: tool_call body missing {missing}")
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
                raise ValueError(f"item {item.id}: tool_result body missing {missing}")
            messages.append(
                ToolResultMessage(
                    message_id=item.id,
                    turn_id=item.turn_id,
                    call_id=body["tool_call_id"],
                    tool_name=body["name"],
                    # Checkpoint audit fix: rows written before the fix have
                    # no ok/error keys and were clean successes; new rows
                    # carry failure metadata so cancelled/blocked/failed
                    # calls replay as failed (Plan 004 contract).
                    ok=body.get("ok", True),
                    result=body["result"],
                    error_code=body.get("error_code"),
                    error=body.get("error"),
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
            "result": _durable_result(message.result)
            if isinstance(message.result, dict)
            else message.result,
        }
        # Checkpoint audit fix: record failures so they survive the durable
        # round trip. Clean successes stay minimal (ok absent = True on read)
        # so existing rows and writes are unchanged.
        if not message.ok:
            body["ok"] = False
            if message.error_code is not None:
                body["error_code"] = message.error_code
            if message.error is not None:
                body["error"] = message.error
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
