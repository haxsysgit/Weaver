"""User preferences store (Plan 15 slices 2 + 5; per device since Plan 030).

One row per browser device id: the reader's current chapter and the spoiler
knob. Never seen by tools, never a retrieval filter; the spoiler judge consumes the position
at answer-framing time. Flavor prefs (best character, best scene, fun
stuff) are reserved for later memory plans.

Plan 030 settings audit, finding 1: the old store was a single row shared
by every device, so one reader's save set another reader's spoiler cap.
Owner decision (2026-10-28): start fresh. The old ``preferences`` row is
left in the database untouched and nothing reads it; every device starts
with no saved boundary until it saves one.

Plan 030 slice 3 (owner decision 2026-10-29): the reader no longer picks an
answer depth; Weaver decides how much to read per question. The ``tier``
column stays so existing rows remain valid, but nothing reads or writes it.
"""

from __future__ import annotations

import json
from dataclasses import dataclass, field
from pathlib import Path
from typing import Literal

import aiosqlite

SPOILER_MODES = ("protect", "none")
# Plan v1 (2026-08-17): the reader-position ceiling. Keep in step with
# the shelf (novels/shadow-slave, currently 3160); the web system prompt
# derives its own count at runtime so it can never lie again.
MAX_CHAPTER = 3160

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
            "CREATE TABLE IF NOT EXISTS device_preferences ("
            " device_id TEXT PRIMARY KEY,"
            " reader_chapter INTEGER,"
            " spoiler_mode TEXT NOT NULL DEFAULT 'protect',"
            " tier TEXT NOT NULL DEFAULT 'ascended',"
            " flavor TEXT NOT NULL DEFAULT '{}')"
        )
        await self._db.commit()

    async def close(self) -> None:
        if self._db is not None:
            await self._db.close()
            self._db = None

    async def get(self, device_id: str) -> UserPreferences:
        """This device's preferences, or the defaults if it saved none."""
        assert self._db is not None
        cur = await self._db.execute(
            "SELECT reader_chapter, spoiler_mode, flavor"
            " FROM device_preferences WHERE device_id = ?",
            (device_id,),
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

    async def set(self, device_id: str, prefs: UserPreferences) -> UserPreferences:
        """Replace this device's preferences; other devices are untouched."""
        assert self._db is not None
        if prefs.reader_chapter is not None and not 1 <= prefs.reader_chapter <= MAX_CHAPTER:
            raise ValueError(f"reader_chapter must be 1..{MAX_CHAPTER} or null")
        if prefs.spoiler_mode not in SPOILER_MODES:
            raise ValueError(f"spoiler_mode must be one of {SPOILER_MODES}")
        await self._db.execute(
            "INSERT INTO device_preferences"
            " (device_id, reader_chapter, spoiler_mode, flavor)"
            " VALUES (?, ?, ?, ?)"
            " ON CONFLICT(device_id) DO UPDATE SET"
            " reader_chapter = excluded.reader_chapter,"
            " spoiler_mode = excluded.spoiler_mode,"
            " flavor = excluded.flavor",
            (
                device_id,
                prefs.reader_chapter,
                prefs.spoiler_mode,
                json.dumps(prefs.flavor),
            ),
        )
        await self._db.commit()
        return prefs
