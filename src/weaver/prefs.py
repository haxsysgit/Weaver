"""User preferences store (Plan 15 slices 2 + 5).

Single-owner app, single row (id=1): the reader's current chapter, the
spoiler knob, and the reading tier (awakened / ascended / transcendent)
which picks the tool budget and reasoning effort for web turns. Never seen
by tools, never a retrieval filter; the spoiler judge consumes the
position at answer-framing time. Flavor prefs (best character, best
scene, fun stuff) are reserved for later memory plans.

Also owns the conversation_title table (one row per conversation: the
LLM-generated thread name from the Plan 15 naming call). Same sqlite file
as the conversation store, no migration machinery needed.
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import aiosqlite

SPOILER_MODES = ("protect", "none")
TIERS = ("awakened", "ascended", "transcendent")
# Plan v1 (2026-08-17): the reader-position ceiling. Keep in step with
# the shelf (novels/shadow-slave, currently 3160); the web system prompt
# derives its own count at runtime so it can never lie again.
MAX_CHAPTER = 3160

SpoilerMode = Literal["protect", "none"]
Tier = Literal["awakened", "ascended", "transcendent"]


@dataclass
class UserPreferences:
    reader_chapter: int | None = None
    spoiler_mode: SpoilerMode = "protect"
    tier: Tier = "ascended"
    flavor: dict = field(default_factory=dict)


class PreferencesStore:
    def __init__(self, db_path: Path):
        self._db_path = db_path
        self._db: aiosqlite.Connection | None = None

    async def open(self) -> None:
        self._db_path.parent.mkdir(parents=True, exist_ok=True)
        self._db = await aiosqlite.connect(self._db_path)
        await self._db.execute(
            "CREATE TABLE IF NOT EXISTS preferences ("
            " id INTEGER PRIMARY KEY CHECK (id = 1),"
            " reader_chapter INTEGER,"
            " spoiler_mode TEXT NOT NULL DEFAULT 'protect',"
            " tier TEXT NOT NULL DEFAULT 'ascended',"
            " flavor TEXT NOT NULL DEFAULT '{}')"
        )
        # existing databases predate the tier column: add it in place
        cur = await self._db.execute("PRAGMA table_info(preferences)")
        columns = [row[1] for row in await cur.fetchall()]
        if "tier" not in columns:
            await self._db.execute(
                "ALTER TABLE preferences ADD COLUMN tier TEXT NOT NULL DEFAULT 'ascended'"
            )
        await self._db.execute(
            "CREATE TABLE IF NOT EXISTS conversation_title ("
            " conversation_id TEXT PRIMARY KEY,"
            " title TEXT NOT NULL,"
            " named_at TEXT NOT NULL)"
        )
        await self._db.commit()

    async def close(self) -> None:
        if self._db is not None:
            await self._db.close()
            self._db = None

    async def get(self) -> UserPreferences:
        assert self._db is not None
        cur = await self._db.execute(
            "SELECT reader_chapter, spoiler_mode, tier, flavor FROM preferences WHERE id = 1"
        )
        row = await cur.fetchone()
        if row is None:
            return UserPreferences()
        mode = row[1] if row[1] in SPOILER_MODES else "protect"
        tier = row[2] if row[2] in TIERS else "ascended"
        return UserPreferences(
            reader_chapter=row[0],
            spoiler_mode=mode,
            tier=tier,
            flavor=json.loads(row[3] or "{}"),
        )

    async def set(self, prefs: UserPreferences) -> UserPreferences:
        assert self._db is not None
        if prefs.reader_chapter is not None and not 1 <= prefs.reader_chapter <= MAX_CHAPTER:
            raise ValueError(f"reader_chapter must be 1..{MAX_CHAPTER} or null")
        if prefs.spoiler_mode not in SPOILER_MODES:
            raise ValueError(f"spoiler_mode must be one of {SPOILER_MODES}")
        if prefs.tier not in TIERS:
            raise ValueError(f"tier must be one of {TIERS}")
        await self._db.execute(
            "INSERT INTO preferences (id, reader_chapter, spoiler_mode, tier, flavor)"
            " VALUES (1, ?, ?, ?, ?)"
            " ON CONFLICT(id) DO UPDATE SET"
            " reader_chapter = excluded.reader_chapter,"
            " spoiler_mode = excluded.spoiler_mode,"
            " tier = excluded.tier,"
            " flavor = excluded.flavor",
            (prefs.reader_chapter, prefs.spoiler_mode, prefs.tier, json.dumps(prefs.flavor)),
        )
        await self._db.commit()
        return prefs

    async def set_title(self, conversation_id: str, title: str) -> None:
        """Store the LLM-generated thread name (Plan 15 slice 5)."""
        assert self._db is not None
        await self._db.execute(
            "INSERT INTO conversation_title (conversation_id, title, named_at)"
            " VALUES (?, ?, datetime('now'))"
            " ON CONFLICT(conversation_id) DO UPDATE SET title = excluded.title",
            (conversation_id, title),
        )
        await self._db.commit()

    async def clear_title(self, conversation_id: str) -> None:
        """Drop the stored thread name (conversation deleted)."""
        assert self._db is not None
        await self._db.execute(
            "DELETE FROM conversation_title WHERE conversation_id = ?",
            (conversation_id,),
        )
        await self._db.commit()

    async def titles(self) -> dict[str, str]:
        """All stored thread names, keyed by conversation id."""
        assert self._db is not None
        cur = await self._db.execute("SELECT conversation_id, title FROM conversation_title")
        return {row[0]: row[1] for row in await cur.fetchall()}
