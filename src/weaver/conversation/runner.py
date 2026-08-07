"""ConversationRunner: bridges ItemRecord storage and agent run_turn.

Plan 008 contract: the only adapter between `conversation/` and `agent/`.
Loads durable history as `ConversationMessage`, persists every message the
turn loop produces as one `ItemRecord` per transaction, and advances the
run phase exactly once per turn (single finalization path).
"""

from __future__ import annotations

import asyncio
import logging
import uuid

from weaver.agent.messages import ConversationMessage
from weaver.agent.turn import (
    DeltaCallback,
    ToolEventCallback,
    PersistCallback,
    TurnExitReason,
    TurnResult,
    run_turn,
)
from weaver.agent.tools import ToolExecutionPolicy, ToolRegistry
from weaver.model_layer import ModelLayer, ModelSpec
from weaver.model_layer.types import ReasoningEffort

from .assembler import ContextAssembler
from .common import now
from .coordinator import RunCoordinator, _tx
from .items import (
    items_to_messages as _items_to_messages,  # runner-internal names
    message_to_item as _message_to_item,
)
from .repository import ConversationRepository

logger = logging.getLogger(__name__)

# Safe, stable text returned when send() finds an interrupted run
# (contract §5: no auto-continue). Kept in the conversation module so the
# agent carve-out (agent/turn.py only) stays untouched.
INTERRUPTED_RUN_EXISTS = (
    "This conversation has an interrupted run. Continue or retry it first."
)


def _message_id() -> str:
    return uuid.uuid4().hex[:12]


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
        token_budget: int | None = None,
    ) -> None:
        self._repo = repo
        self._coordinator = coordinator
        self._model_layer = model_layer
        self._model = model
        self._system_prompt = system_prompt
        self._tool_registry = tool_registry
        self._active_tools = active_tools
        self._execution_policy = execution_policy
        # Plan 009: no budget configured = unbounded, Plan 008 behavior.
        # Plan 010 Phase D: the assembler always runs; a None budget means
        # count-only (no truncation) so the TUI gets a token meter for free.
        self._assembler = ContextAssembler(system_prompt, token_budget)

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
        on_delta: DeltaCallback | None = None,
        on_tool_event: ToolEventCallback | None = None,
        tool_budget: int | None = None,
        reasoning: ReasoningEffort | None = None,
    ) -> TurnResult:
        """Run one bounded model/tool turn inside an existing run.

        History is every item currently in the conversation: prior turns
        plus this run's owner item (the current user message). Items written
        during this turn get higher sequences and are never re-loaded here —
        run_turn tracks them in its own new_messages.
        """
        items = await self._repo.load_items(conversation_id)
        # The assembler always runs (Phase D count-only mode when no budget
        # is configured), so the snapshot is always available.
        items, snapshot = await self._assembler.assemble(items)
        logger.info(
            "context snapshot: %d items, %d/%d tokens",
            snapshot.item_count,
            snapshot.token_count,
            snapshot.token_budget,
        )
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
            on_delta=on_delta,
            on_tool_event=on_tool_event,
            tool_budget=tool_budget,
            reasoning=reasoning,
        )

        # Plan 010 Phase D: surface the context meter on the result so the
        # TUI footer can show tokens used (and % when a budget is set).
        result.token_count = snapshot.token_count
        result.token_budget = snapshot.token_budget or 0

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
