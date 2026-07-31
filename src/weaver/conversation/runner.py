"""ConversationRunner: bridges ItemRecord storage and agent run_turn.

Plan 008 contract: the only adapter between `conversation/` and `agent/`.
Loads durable history as `ConversationMessage`, persists every message the
turn loop produces as one `ItemRecord` per transaction, and advances the
run phase exactly once per turn (single finalization path).
"""

from __future__ import annotations

import asyncio
import json
import logging
import uuid

from weaver.agent.messages import (
    AssistantMessage,
    ConversationMessage,
    ToolCallMessage,
    ToolResultMessage,
    UserMessage,
)
from weaver.agent.turn import (
    PersistCallback,
    TurnExitReason,
    TurnResult,
    run_turn,
)
from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
from weaver.model_layer import ModelLayer, ModelSpec, ModelToolCall

from .common import now, uid
from .coordinator import RunCoordinator, _tx
from .repository import ConversationRepository, ItemRecord

logger = logging.getLogger(__name__)

# Safe, stable text returned when send() finds an interrupted run
# (contract §5: no auto-continue). Kept in the conversation module so the
# agent carve-out (agent/turn.py only) stays untouched.
INTERRUPTED_RUN_EXISTS = (
    "This conversation has an interrupted run. "
    "Continue or retry it first."
)


def _message_id() -> str:
    return uuid.uuid4().hex[:12]


def _items_to_messages(items: list[ItemRecord]) -> list[ConversationMessage]:
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


def _message_to_item(
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


class ConversationRunner:
    def __init__(
        self,
        repo: ConversationRepository,
        coordinator: RunCoordinator,
        *,
        model_layer: ModelLayer,
        model: ModelSpec,
        system_prompt: str,
        tool_registry: ToolRegistry,
        active_tools: tuple[str, ...],
        execution_policy: ToolExecutionPolicy,
    ) -> None:
        self._repo = repo
        self._coordinator = coordinator
        self._model_layer = model_layer
        self._model = model
        self._system_prompt = system_prompt
        self._tool_registry = tool_registry
        self._active_tools = active_tools
        self._execution_policy = execution_policy

    def _persist_callback(
        self,
        conversation_id: str,
        run_id: str,
        turn_id: str,
    ) -> PersistCallback:
        """Async closure writing one message as one ItemRecord per tx."""

        async def callback(message: ConversationMessage) -> None:
            db = self._repo._db
            async with _tx(db):
                sequence = await self._repo._next_sequence(conversation_id)
                item = _message_to_item(
                    message,
                    conversation_id=conversation_id,
                    run_id=run_id,
                    turn_id=turn_id,
                    sequence=sequence,
                    created_at=now(),
                )
                await self._repo._insert_item(item)

        return callback

    async def run_turn_in_run(
        self,
        conversation_id: str,
        run_id: str,
        turn_id: str,
        cancel_event: asyncio.Event,
    ) -> TurnResult:
        """Run one bounded model/tool turn inside an existing run.

        History is every item currently in the conversation: prior turns
        plus this run's owner item (the current user message). Items written
        during this turn get higher sequences and are never re-loaded here —
        run_turn tracks them in its own new_messages.
        """
        items = await self._repo.load_items(conversation_id)
        history = _items_to_messages(items)

        result = await run_turn(
            session_id=conversation_id,
            turn_id=turn_id,
            model_layer=self._model_layer,
            model=self._model,
            system_prompt=self._system_prompt,
            history=history,
            tool_registry=self._tool_registry,
            active_tools=self._active_tools,
            execution_policy=self._execution_policy,
            cancel_event=cancel_event,
            persist_message=self._persist_callback(
                conversation_id,
                run_id,
                turn_id,
            ),
        )

        # Contract §3: single finalization. The final STOP assistant was
        # already persisted through the callback; complete_run records only
        # the event + phase. Every other exit marks the run interrupted.
        if result.exit_reason == TurnExitReason.COMPLETED:
            await self._coordinator.complete_run(
                conversation_id,
                run_id,
                turn_id,
                result.final_text,
                final_item_already_persisted=True,
            )
        else:
            await self._coordinator.mark_interrupted(run_id)
        return result
