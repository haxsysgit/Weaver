"""ConversationRepository: the only class that touches SQLite."""

from __future__ import annotations

from dataclasses import dataclass

import aiosqlite

from .schema import PRAGMAS, migrate


@dataclass
class ItemRecord:
    id: str
    conversation_id: str
    sequence: int
    turn_id: str
    run_id: str
    kind: str
    body: str
    created_at: str


@dataclass
class RunRecord:
    id: str
    turn_id: str
    attempt: int
    phase: str
    interrupted_run_id: str | None
    created_at: str


@dataclass
class EventRecord:
    id: str
    conversation_id: str
    sequence: int
    run_id: str
    kind: str
    body: str
    created_at: str


@dataclass
class ConversationSummaryRecord:
    id: str
    created_at: str
    generated_title: str | None
    manual_title: str | None
    archived_at: str | None
    pinned_at: str | None
    edition_id: str
    last_owner_body: str | None


class ConversationRepository:
    def __init__(self, db: aiosqlite.Connection) -> None:
        self._db = db

    async def setup(self) -> None:
        await migrate(self._db)
        for pragma in PRAGMAS:
            await self._db.execute(pragma)

    # -- write helpers (do not commit; caller wraps in transaction) --

    async def _insert_relationship(self, id: str, created_at: str) -> None:
        await self._db.execute(
            "INSERT INTO relationship (id, created_at) VALUES (?, ?)",
            (id, created_at),
        )

    async def _insert_conversation(
        self, id: str, relationship_id: str, created_at: str, device_id: str = ""
    ) -> None:
        await self._db.execute(
            "INSERT INTO conversation (id, relationship_id, device_id, created_at) "
            "VALUES (?, ?, ?, ?)",
            (id, relationship_id, device_id, created_at),
        )

    async def _insert_turn(
        self, id: str, conversation_id: str, sequence: int, created_at: str
    ) -> None:
        await self._db.execute(
            "INSERT INTO turn (id, conversation_id, sequence, created_at) VALUES (?, ?, ?, ?)",
            (id, conversation_id, sequence, created_at),
        )

    async def _insert_run(
        self,
        id: str,
        turn_id: str,
        attempt: int,
        phase: str,
        created_at: str,
        interrupted_run_id: str | None = None,
    ) -> None:
        await self._db.execute(
            "INSERT INTO run (id, turn_id, attempt, phase, interrupted_run_id, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?)",
            (id, turn_id, attempt, phase, interrupted_run_id, created_at),
        )

    async def _insert_item(self, item: ItemRecord) -> None:
        await self._db.execute(
            "INSERT INTO conversation_item (id, conversation_id, sequence, turn_id, run_id, kind, body, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
            (
                item.id,
                item.conversation_id,
                item.sequence,
                item.turn_id,
                item.run_id,
                item.kind,
                item.body,
                item.created_at,
            ),
        )

    async def _insert_event(self, event: EventRecord) -> None:
        await self._db.execute(
            "INSERT INTO run_event (id, conversation_id, sequence, run_id, kind, body, created_at) "
            "VALUES (?, ?, ?, ?, ?, ?, ?)",
            (
                event.id,
                event.conversation_id,
                event.sequence,
                event.run_id,
                event.kind,
                event.body,
                event.created_at,
            ),
        )

    async def _update_run_phase(self, run_id: str, phase: str) -> None:
        await self._db.execute("UPDATE run SET phase = ? WHERE id = ?", (phase, run_id))

    async def _next_sequence(self, conversation_id: str) -> int:
        cursor = await self._db.execute(
            "SELECT COALESCE(MAX(sequence), 0) + 1 FROM conversation_item WHERE conversation_id = ?",
            (conversation_id,),
        )
        row = await cursor.fetchone()
        assert row is not None
        return row[0]

    async def _next_turn_sequence(self, conversation_id: str) -> int:
        cursor = await self._db.execute(
            "SELECT COALESCE(MAX(sequence), 0) + 1 FROM turn WHERE conversation_id = ?",
            (conversation_id,),
        )
        row = await cursor.fetchone()
        assert row is not None
        return row[0]

    async def _next_event_sequence(self, conversation_id: str) -> int:
        cursor = await self._db.execute(
            "SELECT COALESCE(MAX(sequence), 0) + 1 FROM run_event WHERE conversation_id = ?",
            (conversation_id,),
        )
        row = await cursor.fetchone()
        assert row is not None
        return row[0]

    async def _find_tool_result_for_call(self, tool_call_id: str) -> str | None:
        """Return the item id of an existing tool_result for this
        tool_call_id, or None."""
        cursor = await self._db.execute(
            "SELECT id FROM conversation_item "
            "WHERE kind = 'tool_result' "
            "AND json_extract(body, '$.tool_call_id') = ?",
            (tool_call_id,),
        )
        row = await cursor.fetchone()
        return row[0] if row else None

    # -- public read queries --

    async def conversation_exists(self, conversation_id: str) -> bool:
        """Return whether a conversation ID is present in durable state."""
        cursor = await self._db.execute(
            "SELECT 1 FROM conversation WHERE id = ? LIMIT 1",
            (conversation_id,),
        )
        return await cursor.fetchone() is not None

    async def find_interrupted_run(self, conversation_id: str) -> RunRecord | None:
        cursor = await self._db.execute(
            "SELECT r.id, r.turn_id, r.attempt, r.phase, r.interrupted_run_id, r.created_at "
            "FROM run r "
            "JOIN turn t ON r.turn_id = t.id "
            "WHERE t.conversation_id = ? AND r.phase = 'interrupted' "
            "ORDER BY r.created_at DESC LIMIT 1",
            (conversation_id,),
        )
        row = await cursor.fetchone()
        if row is None:
            return None
        return RunRecord(
            id=row[0],
            turn_id=row[1],
            attempt=row[2],
            phase=row[3],
            interrupted_run_id=row[4],
            created_at=row[5],
        )

    async def load_items(
        self,
        conversation_id: str,
        *,
        before_sequence: int | None = None,
        for_run_id: str | None = None,
    ) -> list[ItemRecord]:
        query = (
            "SELECT id, conversation_id, sequence, turn_id, run_id, kind, body, created_at "
            "FROM conversation_item WHERE conversation_id = ?"
        )
        params: list = [conversation_id]
        if before_sequence is not None:
            query += " AND sequence < ?"
            params.append(before_sequence)
        if for_run_id is not None:
            query += " AND run_id = ?"
            params.append(for_run_id)
        query += " ORDER BY sequence ASC"
        cursor = await self._db.execute(query, params)
        rows = await cursor.fetchall()
        return [
            ItemRecord(
                id=r[0],
                conversation_id=r[1],
                sequence=r[2],
                turn_id=r[3],
                run_id=r[4],
                kind=r[5],
                body=r[6],
                created_at=r[7],
            )
            for r in rows
        ]

    async def load_events(self, conversation_id: str) -> list[EventRecord]:
        cursor = await self._db.execute(
            "SELECT id, conversation_id, sequence, run_id, kind, body, created_at "
            "FROM run_event WHERE conversation_id = ? ORDER BY sequence ASC",
            (conversation_id,),
        )
        rows = await cursor.fetchall()
        return [
            EventRecord(
                id=r[0],
                conversation_id=r[1],
                sequence=r[2],
                run_id=r[3],
                kind=r[4],
                body=r[5],
                created_at=r[6],
            )
            for r in rows
        ]

    async def load_conversation_summaries(
        self,
        limit: int = 12,
        device_id: str = "",
    ) -> list[ConversationSummaryRecord]:
        """Return newest-first, device-owned conversation metadata."""
        async with self._db.execute(
            """
            SELECT
                c.id,
                c.created_at,
                c.generated_title,
                c.manual_title,
                c.archived_at,
                c.pinned_at,
                c.edition_id,
                (
                SELECT i.body FROM conversation_item i
                WHERE i.conversation_id = c.id AND i.kind = 'owner'
                ORDER BY i.sequence DESC LIMIT 1
                ) AS last_owner
            FROM conversation c
            WHERE c.device_id = ?
            ORDER BY c.created_at DESC
            LIMIT ?
            """,
            (device_id, limit),
        ) as cur:
            rows = await cur.fetchall()
        return [
            ConversationSummaryRecord(
                id=row[0],
                created_at=row[1],
                generated_title=row[2],
                manual_title=row[3],
                archived_at=row[4],
                pinned_at=row[5],
                edition_id=row[6],
                last_owner_body=row[7],
            )
            for row in rows
        ]

    async def load_conversation_summary(
        self, conversation_id: str
    ) -> ConversationSummaryRecord | None:
        async with self._db.execute(
            """
            SELECT
                c.id,
                c.created_at,
                c.generated_title,
                c.manual_title,
                c.archived_at,
                c.pinned_at,
                c.edition_id,
                (
                    SELECT i.body FROM conversation_item i
                    WHERE i.conversation_id = c.id AND i.kind = 'owner'
                    ORDER BY i.sequence DESC LIMIT 1
                ) AS last_owner
            FROM conversation c
            WHERE c.id = ?
            """,
            (conversation_id,),
        ) as cursor:
            row = await cursor.fetchone()
        if row is None:
            return None
        return ConversationSummaryRecord(
            id=row[0],
            created_at=row[1],
            generated_title=row[2],
            manual_title=row[3],
            archived_at=row[4],
            pinned_at=row[5],
            edition_id=row[6],
            last_owner_body=row[7],
        )

    async def set_generated_title(self, conversation_id: str, title: str) -> bool:
        cursor = await self._db.execute(
            "UPDATE conversation SET generated_title = ? WHERE id = ?",
            (title, conversation_id),
        )
        await self._db.commit()
        return cursor.rowcount == 1

    async def update_conversation_metadata(
        self,
        conversation_id: str,
        *,
        manual_title: str | None,
        update_manual_title: bool,
        archived_at: str | None,
        update_archived: bool,
        pinned_at: str | None,
        update_pinned: bool,
    ) -> bool:
        """Apply the requested metadata fields in one conversation-row update."""
        assignments: list[str] = []
        values: list[str | None] = []
        if update_manual_title:
            assignments.append("manual_title = ?")
            values.append(manual_title)
        if update_archived:
            assignments.append("archived_at = ?")
            values.append(archived_at)
        if update_pinned:
            assignments.append("pinned_at = ?")
            values.append(pinned_at)
        if not assignments:
            raise ValueError("metadata update must include at least one field")

        values.append(conversation_id)
        query = "UPDATE conversation SET " + ", ".join(assignments) + " WHERE id = ?"
        cursor = await self._db.execute(query, values)
        await self._db.commit()
        return cursor.rowcount == 1

    async def conversation_owner(self, conversation_id: str) -> str | None:
        """The device id that owns a conversation, or None when missing."""
        async with self._db.execute(
            "SELECT device_id FROM conversation WHERE id = ?",
            (conversation_id,),
        ) as cur:
            row = await cur.fetchone()
        return row[0] if row is not None else None

    async def delete_conversation(self, conversation_id: str) -> bool:
        """Hard-delete a conversation and everything under it.

        Returns False when the conversation does not exist. One
        transaction: run_event -> conversation_item -> run -> turn ->
        conversation (foreign-key order).
        """
        if not await self.conversation_exists(conversation_id):
            return False
        await self._db.execute(
            "DELETE FROM run_event WHERE conversation_id = ?", (conversation_id,)
        )
        await self._db.execute(
            "DELETE FROM conversation_item WHERE conversation_id = ?",
            (conversation_id,),
        )
        await self._db.execute(
            "DELETE FROM run WHERE turn_id IN ("
            " SELECT id FROM turn WHERE conversation_id = ?)",
            (conversation_id,),
        )
        await self._db.execute(
            "DELETE FROM turn WHERE conversation_id = ?", (conversation_id,)
        )
        await self._db.execute(
            "DELETE FROM conversation WHERE id = ?", (conversation_id,)
        )
        await self._db.commit()
        return True

    async def load_runs(self, conversation_id: str) -> list[RunRecord]:
        cursor = await self._db.execute(
            "SELECT r.id, r.turn_id, r.attempt, r.phase, r.interrupted_run_id, r.created_at "
            "FROM run r JOIN turn t ON r.turn_id = t.id "
            "WHERE t.conversation_id = ? ORDER BY r.created_at ASC",
            (conversation_id,),
        )
        rows = await cursor.fetchall()
        return [
            RunRecord(
                id=r[0],
                turn_id=r[1],
                attempt=r[2],
                phase=r[3],
                interrupted_run_id=r[4],
                created_at=r[5],
            )
            for r in rows
        ]
