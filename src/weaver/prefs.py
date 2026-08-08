"""User preferences store (Plan 15 slice 2).

Single-owner app, single row (id=1): the reader's current chapter and the
spoiler knob. Never seen by tools, never a retrieval filter; the spoiler
judge consumes it at answer-framing time. Flavor prefs (best character,
best scene, fun stuff) are reserved for later memory plans.
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import aiosqlite

SPOILER_MODES = ("protect", "none")
MAX_CHAPTER = 3127

SpoilerMode = Literal["protect", "none"]


@dataclass
class UserPreferences:
    reader_chapter: int | None = None
    spoiler_mode: SpoilerMode = "protect"
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
            " flavor TEXT NOT NULL DEFAULT '{}')"
        )
        await self._db.commit()

    async def close(self) -> None:
        if self._db is not None:
            await self._db.close()
            self._db = None

    async def get(self) -> UserPreferences:
        assert self._db is not None
        cur = await self._db.execute(
            "SELECT reader_chapter, spoiler_mode, flavor FROM preferences WHERE id = 1"
        )
        row = await cur.fetchone()
        if row is None:
            return UserPreferences()
        mode = row[1] if row[1] in SPOILER_MODES else "protect"
        return UserPreferences(
            reader_chapter=row[0],
            spoiler_mode=mode,
            flavor=json.loads(row[2] or "{}"),
        )

    async def set(self, prefs: UserPreferences) -> UserPreferences:
        assert self._db is not None
        if prefs.reader_chapter is not None and not 1 <= prefs.reader_chapter <= MAX_CHAPTER:
            raise ValueError(f"reader_chapter must be 1..{MAX_CHAPTER} or null")
        if prefs.spoiler_mode not in SPOILER_MODES:
            raise ValueError(f"spoiler_mode must be one of {SPOILER_MODES}")
        await self._db.execute(
            "INSERT INTO preferences (id, reader_chapter, spoiler_mode, flavor)"
            " VALUES (1, ?, ?, ?)"
            " ON CONFLICT(id) DO UPDATE SET"
            " reader_chapter = excluded.reader_chapter,"
            " spoiler_mode = excluded.spoiler_mode,"
            " flavor = excluded.flavor",
            (prefs.reader_chapter, prefs.spoiler_mode, json.dumps(prefs.flavor)),
        )
        await self._db.commit()
        return prefs
