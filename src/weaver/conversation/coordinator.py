"""RunCoordinator: owns multi-step transaction logic."""

from __future__ import annotations

import json
import logging
from contextlib import asynccontextmanager
from collections.abc import AsyncIterator

import aiosqlite

from .common import now, uid
from .repository import (
    ConversationRepository,
    EventRecord,
    ItemRecord,
    RunRecord,
)

logger = logging.getLogger(__name__)


@asynccontextmanager
async def _tx(
    db: aiosqlite.Connection,
) -> AsyncIterator[None]:
    """Run a write in one transaction; roll back on any exception.

    Every coordinator write must go through this helper: an exception
    (ValueError, UNIQUE violation, cancellation) without a rollback leaves
    a dangling open transaction and bricks every later operation on the
    connection ("cannot start a transaction within a transaction").
    Uses BEGIN IMMEDIATE (Hermes write-contention pattern) so the write
    lock is taken at transaction start and contention surfaces early
    instead of mid-transaction.
    """
    async with db.execute("BEGIN IMMEDIATE"):
        try:
            yield
        except BaseException:
            await db.rollback()
            raise
        else:
            await db.commit()


class RunCoordinator:
    def __init__(self, repo: ConversationRepository) -> None:
        self._repo = repo

    # -- public API called by SessionWeave --

    async def start_conversation_and_turn(
        self, owner_text: str, device_id: str = ""
    ) -> tuple[str, str, str]:
        """Create relationship + conversation + first turn + first run in one
        transaction.  Returns (conversation_id, turn_id, run_id)."""
        rel_id = uid()
        conv_id = uid()
        turn_id = uid()
        run_id = uid()
        ts = now()

        db = self._repo._db
        async with _tx(db):
            await self._repo._insert_relationship(rel_id, ts)
            await self._repo._insert_conversation(conv_id, rel_id, ts, device_id)
            await self._repo._insert_turn(turn_id, conv_id, sequence=1, created_at=ts)
            await self._repo._insert_run(
                run_id, turn_id, attempt=1, phase="queued", created_at=ts
            )
            seq = await self._repo._next_sequence(conv_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=uid(),
                    conversation_id=conv_id,
                    sequence=seq,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="owner",
                    body=json.dumps({"content": owner_text}),
                    created_at=ts,
                )
            )
            eseq = await self._repo._next_event_sequence(conv_id)
            await self._repo._insert_event(
                EventRecord(
                    id=uid(),
                    conversation_id=conv_id,
                    sequence=eseq,
                    run_id=run_id,
                    kind="run_queued",
                    body="{}",
                    created_at=ts,
                )
            )
        return conv_id, turn_id, run_id

    async def start_turn(
        self,
        conversation_id: str,
        owner_text: str,
        *,
        turn_sequence: int,
    ) -> tuple[str, str]:
        """Create a new turn and run with the owner's input.
        Returns (turn_id, run_id)."""
        turn_id = uid()
        run_id = uid()
        ts = now()

        db = self._repo._db
        async with _tx(db):
            await self._repo._insert_turn(turn_id, conversation_id, turn_sequence, ts)
            await self._repo._insert_run(
                run_id, turn_id, attempt=1, phase="queued", created_at=ts
            )
            seq = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=seq,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="owner",
                    body=json.dumps({"content": owner_text}),
                    created_at=ts,
                )
            )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=run_id,
                    kind="run_queued",
                    body="{}",
                    created_at=ts,
                )
            )
        return turn_id, run_id

    async def insert_assistant_item(
        self,
        conversation_id: str,
        run_id: str,
        turn_id: str,
        content: str,
        tool_calls: list[dict] | None = None,
    ) -> list[str]:
        """Insert an assistant item. Returns the tool-call IDs if any."""
        item_id = uid()
        ts = now()
        body: dict = {"content": content}
        if tool_calls:
            body["tool_calls"] = [
                {"id": tc["id"], "name": tc["name"], "arguments": tc["arguments"]}
                for tc in tool_calls
            ]

        db = self._repo._db
        async with _tx(db):
            seq = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=item_id,
                    conversation_id=conversation_id,
                    sequence=seq,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="assistant",
                    body=json.dumps(body),
                    created_at=ts,
                )
            )
            await self._repo._update_run_phase(run_id, "model_call_pending")

        if tool_calls:
            return [tc["id"] for tc in tool_calls]
        return []

    async def settle_tool(
        self,
        conversation_id: str,
        run_id: str,
        turn_id: str,
        tool_call_id: str,
        name: str,
        arguments: str,
        result: str,
    ) -> None:
        """Commit tool-call and tool-result items atomically."""
        ts = now()

        db = self._repo._db
        async with _tx(db):
            # Enforce one result per tool call
            existing = await self._repo._find_tool_result_for_call(tool_call_id)
            if existing is not None:
                raise ValueError(f"tool_call_id {tool_call_id} already has a result")

            # tool-call item
            seq_call = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=seq_call,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="tool_call",
                    body=json.dumps(
                        {
                            "tool_call_id": tool_call_id,
                            "name": name,
                            "arguments": arguments,
                        }
                    ),
                    created_at=ts,
                )
            )
            # tool-result item
            seq_result = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=seq_result,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="tool_result",
                    body=json.dumps(
                        {
                            "tool_call_id": tool_call_id,
                            "name": name,
                            "result": result,
                        }
                    ),
                    created_at=ts,
                )
            )
            await self._repo._update_run_phase(run_id, "settling")

    async def complete_run(
        self,
        conversation_id: str,
        run_id: str,
        turn_id: str,
        final_text: str,
        *,
        final_item_already_persisted: bool = False,
    ) -> None:
        """Mark run and turn completed with the final assistant item.

        With ``final_item_already_persisted=True`` (used by the
        ConversationRunner, plan 008 contract §3) the final assistant item
        was already persisted by the persist callback and only the
        run_completed event + phase transition are recorded — otherwise a
        second, semantically identical assistant item is inserted.
        """
        ts = now()

        db = self._repo._db
        async with _tx(db):
            if not final_item_already_persisted:
                seq = await self._repo._next_sequence(conversation_id)
                await self._repo._insert_item(
                    ItemRecord(
                        id=uid(),
                        conversation_id=conversation_id,
                        sequence=seq,
                        turn_id=turn_id,
                        run_id=run_id,
                        kind="assistant",
                        body=json.dumps({"content": final_text}),
                        created_at=ts,
                    )
                )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=run_id,
                    kind="run_completed",
                    body="{}",
                    created_at=ts,
                )
            )
            await self._repo._update_run_phase(run_id, "completed")

    async def record_run_failed(
        self,
        conversation_id: str,
        run_id: str,
        *,
        exit_reason: str,
        message: str,
        error_category: str = "",
        raw_stop_reason: str = "",
    ) -> None:
        """Record a run_failed event so a broken turn is diagnosable from
        the local state DB without the server's stderr."""
        ts = now()
        db = self._repo._db
        async with _tx(db):
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=run_id,
                    kind="run_failed",
                    body=json.dumps(
                        {
                            "exit_reason": exit_reason,
                            "message": message,
                            "error_category": error_category,
                            "raw_stop_reason": raw_stop_reason,
                        }
                    ),
                    created_at=ts,
                )
            )

    async def mark_interrupted(self, run_id: str) -> None:
        """Mark a run as interrupted (crash before completion)."""
        db = self._repo._db
        async with _tx(db):
            await self._repo._update_run_phase(run_id, "interrupted")

    async def continue_interrupted(
        self,
        conversation_id: str,
        interrupted_run: RunRecord,
    ) -> tuple[str, str, list[ItemRecord]]:
        """Create a new linked run including settled items from the
        interrupted run.  Returns (new_run_id, turn_id, settled_items)."""
        turn_id = interrupted_run.turn_id
        new_run_id = uid()
        ts = now()

        db = self._repo._db
        async with _tx(db):
            await self._repo._insert_run(
                new_run_id,
                turn_id,
                attempt=interrupted_run.attempt + 1,
                phase="queued",
                created_at=ts,
                interrupted_run_id=interrupted_run.id,
            )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=new_run_id,
                    kind="run_queued",
                    body="{}",
                    created_at=ts,
                )
            )

        settled = await self._repo.load_items(
            conversation_id, for_run_id=interrupted_run.id
        )
        return new_run_id, turn_id, settled

    async def retry_interrupted(
        self,
        conversation_id: str,
        interrupted_run: RunRecord,
    ) -> tuple[str, str]:
        """Create a new run that omits ALL items from the interrupted run.
        Returns (new_run_id, turn_id)."""
        turn_id = interrupted_run.turn_id
        new_run_id = uid()
        ts = now()

        db = self._repo._db
        async with _tx(db):
            await self._repo._insert_run(
                new_run_id,
                turn_id,
                attempt=interrupted_run.attempt + 1,
                phase="queued",
                created_at=ts,
                interrupted_run_id=interrupted_run.id,
            )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=new_run_id,
                    kind="run_queued",
                    body="{}",
                    created_at=ts,
                )
            )

        return new_run_id, turn_id
