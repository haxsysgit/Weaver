"""RunCoordinator: owns multi-step transaction logic."""

from __future__ import annotations

import json
import uuid
from datetime import datetime, timezone

from .repository import (
    ConversationRepository,
    EventRecord,
    ItemRecord,
    RunRecord,
)


def _uid() -> str:
    return uuid.uuid4().hex


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


class RunCoordinator:
    def __init__(self, repo: ConversationRepository) -> None:
        self._repo = repo

    # -- public API called by SessionWeave --

    async def start_turn(
        self,
        conversation_id: str,
        owner_text: str,
        *,
        turn_sequence: int,
    ) -> tuple[str, str]:
        """Create a new turn and run with the owner's input. Returns (turn_id, run_id)."""
        turn_id = _uid()
        run_id = _uid()
        now = _now()

        db = self._repo._db
        async with db.execute("BEGIN"):
            await self._repo._insert_turn(
                turn_id, conversation_id, turn_sequence, now
            )
            await self._repo._insert_run(
                run_id, turn_id, attempt=1, phase="queued", created_at=now
            )
            seq = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=seq,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="owner",
                    body=json.dumps({"content": owner_text}),
                    created_at=now,
                )
            )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=run_id,
                    kind="run_queued",
                    body="{}",
                    created_at=now,
                )
            )
            await db.commit()
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
        item_id = _uid()
        now = _now()
        body: dict = {"content": content}
        if tool_calls:
            body["tool_calls"] = [
                {"id": tc["id"], "name": tc["name"], "arguments": tc["arguments"]}
                for tc in tool_calls
            ]

        db = self._repo._db
        async with db.execute("BEGIN"):
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
                    created_at=now,
                )
            )
            await self._repo._update_run_phase(run_id, "model_call_pending")
            await db.commit()

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
        now = _now()

        db = self._repo._db
        async with db.execute("BEGIN"):
            # tool-call item
            seq_call = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=seq_call,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="tool_call",
                    body=json.dumps(
                        {"tool_call_id": tool_call_id, "name": name, "arguments": arguments}
                    ),
                    created_at=now,
                )
            )
            # tool-result item
            seq_result = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=seq_result,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="tool_result",
                    body=json.dumps(
                        {"tool_call_id": tool_call_id, "name": name, "result": result}
                    ),
                    created_at=now,
                )
            )
            await self._repo._update_run_phase(run_id, "settling")
            await db.commit()

    async def complete_run(
        self,
        conversation_id: str,
        run_id: str,
        turn_id: str,
        final_text: str,
    ) -> None:
        """Mark run and turn completed with final assistant item."""
        now = _now()

        db = self._repo._db
        async with db.execute("BEGIN"):
            seq = await self._repo._next_sequence(conversation_id)
            await self._repo._insert_item(
                ItemRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=seq,
                    turn_id=turn_id,
                    run_id=run_id,
                    kind="assistant",
                    body=json.dumps({"content": final_text}),
                    created_at=now,
                )
            )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=run_id,
                    kind="run_completed",
                    body="{}",
                    created_at=now,
                )
            )
            await self._repo._update_run_phase(run_id, "completed")
            await db.commit()

    async def mark_interrupted(self, run_id: str) -> None:
        """Mark a run as interrupted (crash before completion)."""
        db = self._repo._db
        async with db.execute("BEGIN"):
            await self._repo._update_run_phase(run_id, "interrupted")
            await db.commit()

    async def continue_interrupted(
        self,
        conversation_id: str,
        interrupted_run: RunRecord,
    ) -> tuple[str, str, list[ItemRecord]]:
        """Create a new linked run including settled items from the interrupted run.
        Returns (new_run_id, turn_id, settled_items)."""
        turn_id = interrupted_run.turn_id
        new_run_id = _uid()
        now = _now()

        db = self._repo._db
        async with db.execute("BEGIN"):
            await self._repo._insert_run(
                new_run_id,
                turn_id,
                attempt=interrupted_run.attempt + 1,
                phase="queued",
                created_at=now,
                interrupted_run_id=interrupted_run.id,
            )
            eseq = await self._repo._next_event_sequence(conversation_id)
            await self._repo._insert_event(
                EventRecord(
                    id=_uid(),
                    conversation_id=conversation_id,
                    sequence=eseq,
                    run_id=new_run_id,
                    kind="run_queued",
                    body="{}",
                    created_at=now,
                )
            )
            await db.commit()

        settled = await self._repo.load_items(
            conversation_id, for_run_id=interrupted_run.id
        )
        return new_run_id, turn_id, settled
