"""SessionWeave: thin top-level orchestrator for Weaver conversations."""

from __future__ import annotations

import logging
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path

import aiosqlite

from .coordinator import RunCoordinator
from .repository import ConversationRepository

logger = logging.getLogger(__name__)


def _uid() -> str:
    return uuid.uuid4().hex


def _now() -> str:
    return datetime.now(timezone.utc).isoformat()


class SessionWeave:
    """Wires repository and coordinator. Only public surface for subprocess tests."""

    def __init__(self, state_dir: Path) -> None:
        self._state_dir = state_dir
        self._db: aiosqlite.Connection | None = None
        self._repo: ConversationRepository | None = None
        self._coordinator: RunCoordinator | None = None

    @property
    def repo(self) -> ConversationRepository:
        assert self._repo is not None, "call open() first"
        return self._repo

    @property
    def coordinator(self) -> RunCoordinator:
        assert self._coordinator is not None, "call open() first"
        return self._coordinator

    async def open(self) -> None:
        """Create state directory, open database, run migrations."""
        self._state_dir.mkdir(mode=0o700, parents=True, exist_ok=True)
        db_path = self._state_dir / "weaver.sqlite3"
        self._db = await aiosqlite.connect(str(db_path))
        self._repo = ConversationRepository(self._db)
        await self._repo.setup()
        self._coordinator = RunCoordinator(self._repo)

        # Enforce owner-only file permissions
        os.chmod(str(db_path), 0o600)

    async def close(self) -> None:
        if self._db is not None:
            await self._db.close()
            self._db = None
            self._repo = None
            self._coordinator = None

    async def start_conversation(self, owner_text: str) -> str:
        """Create relationship + conversation + first turn. Returns conversation_id."""
        assert self._repo is not None and self._coordinator is not None
        rel_id = _uid()
        conv_id = _uid()
        now = _now()

        db = self._repo._db
        async with db.execute("BEGIN"):
            await self._repo._insert_relationship(rel_id, now)
            await self._repo._insert_conversation(conv_id, rel_id, now)
            await db.commit()

        await self._coordinator.start_turn(conv_id, owner_text, turn_sequence=1)
        return conv_id

    async def continue_interrupted(self, conversation_id: str) -> str | None:
        """If an interrupted run exists, continue it. Returns new run_id or None."""
        assert self._repo is not None and self._coordinator is not None
        interrupted = await self._repo.find_interrupted_run(conversation_id)
        if interrupted is None:
            return None
        new_run_id, _, _ = await self._coordinator.continue_interrupted(
            conversation_id, interrupted
        )
        return new_run_id

    async def find_interrupted_runs(self) -> list[dict]:
        """Load all conversations and return any with interrupted runs."""
        assert self._repo is not None
        cursor = await self._repo._db.execute("SELECT id FROM conversation")
        rows = await cursor.fetchall()
        result = []
        for (conv_id,) in rows:
            interrupted = await self._repo.find_interrupted_run(conv_id)
            if interrupted is not None:
                items = await self._repo.load_items(conv_id)
                result.append(
                    {
                        "conversation_id": conv_id,
                        "interrupted_run": {
                            "id": interrupted.id,
                            "attempt": interrupted.attempt,
                            "phase": interrupted.phase,
                        },
                        "item_count": len(items),
                    }
                )
        return result
