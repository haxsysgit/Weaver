"""SQLite schema and migrations for Weaver's conversation storage."""

from __future__ import annotations

import aiosqlite

SCHEMA_VERSION = 2

SCHEMA = """
CREATE TABLE _migration (
    version INTEGER NOT NULL
);

CREATE TABLE relationship (
    id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL
);

CREATE TABLE conversation (
    id TEXT PRIMARY KEY,
    relationship_id TEXT NOT NULL REFERENCES relationship(id),
    device_id TEXT NOT NULL DEFAULT '',
    created_at TEXT NOT NULL
);

CREATE TABLE turn (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversation(id),
    sequence INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(conversation_id, sequence)
);

CREATE TABLE run (
    id TEXT PRIMARY KEY,
    turn_id TEXT NOT NULL REFERENCES turn(id),
    attempt INTEGER NOT NULL,
    phase TEXT NOT NULL DEFAULT 'queued',
    interrupted_run_id TEXT REFERENCES run(id),
    created_at TEXT NOT NULL,
    UNIQUE(turn_id, attempt)
);

CREATE TABLE conversation_item (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversation(id),
    sequence INTEGER NOT NULL,
    turn_id TEXT NOT NULL REFERENCES turn(id),
    run_id TEXT NOT NULL REFERENCES run(id),
    kind TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(conversation_id, sequence)
);

CREATE TABLE run_event (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversation(id),
    sequence INTEGER NOT NULL,
    run_id TEXT NOT NULL REFERENCES run(id),
    kind TEXT NOT NULL,
    body TEXT NOT NULL DEFAULT '{}',
    created_at TEXT NOT NULL,
    UNIQUE(conversation_id, sequence)
);
"""

PRAGMAS = [
    "PRAGMA journal_mode=WAL",
    "PRAGMA foreign_keys=ON",
    "PRAGMA busy_timeout=5000",
]


async def migrate(db: aiosqlite.Connection) -> None:
    """Run schema if not already applied, then bump to the latest."""
    cursor = await db.execute(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='_migration'"
    )
    row = await cursor.fetchone()
    if row is None:
        await db.executescript(SCHEMA)
        await db.execute("INSERT INTO _migration (version) VALUES (?)", (SCHEMA_VERSION,))
        await db.commit()
        return
    cursor = await db.execute("SELECT version FROM _migration ORDER BY version DESC LIMIT 1")
    row = await cursor.fetchone()
    version = row[0] if row else 1
    if version < 2:
        # v2: conversations carry the device id that owns them (v1 BYOK
        # device scoping, plan v1 slice 3).
        await db.execute(
            "ALTER TABLE conversation ADD COLUMN device_id TEXT NOT NULL DEFAULT ''"
        )
        await db.execute(
            "INSERT INTO _migration (version) VALUES (?)", (2,)
        )
        await db.commit()
