"""Preferences store (Plan 15 slice 2; per device since Plan 030)."""

import sqlite3
from pathlib import Path

import pytest

from weaver.prefs import MAX_CHAPTER, PreferencesStore, UserPreferences

DEVICE = "device-a"


@pytest.mark.asyncio
async def test_defaults_when_empty(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        prefs = await store.get(DEVICE)
        assert prefs.reader_chapter is None
        assert prefs.spoiler_mode == "protect"
        assert prefs.flavor == {}
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_set_then_get_roundtrip(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        await store.set(
            DEVICE,
            UserPreferences(reader_chapter=600, spoiler_mode="none", flavor={"best": "saint"}),
        )
        prefs = await store.get(DEVICE)
        assert prefs.reader_chapter == 600
        assert prefs.spoiler_mode == "none"
        assert prefs.flavor == {"best": "saint"}
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_set_overwrites_the_device_row(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        await store.set(DEVICE, UserPreferences(reader_chapter=100))
        await store.set(DEVICE, UserPreferences(reader_chapter=200))
        prefs = await store.get(DEVICE)
        assert prefs.reader_chapter == 200
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_devices_keep_separate_preferences(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        await store.set("device-a", UserPreferences(reader_chapter=200))
        await store.set(
            "device-b",
            UserPreferences(reader_chapter=2500, spoiler_mode="none"),
        )
        a = await store.get("device-a")
        b = await store.get("device-b")
        fresh = await store.get("device-c")
        assert (a.reader_chapter, a.spoiler_mode) == (200, "protect")
        assert (b.reader_chapter, b.spoiler_mode) == (2500, "none")
        assert fresh.reader_chapter is None
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_old_shared_row_is_not_inherited(tmp_path: Path) -> None:
    """Owner decision (2026-10-28): start fresh. The pre-030 single row is
    left in place but no device reads it."""
    db = tmp_path / "weaver.sqlite3"
    legacy = sqlite3.connect(db)
    legacy.execute(
        "CREATE TABLE preferences ("
        " id INTEGER PRIMARY KEY CHECK (id = 1),"
        " reader_chapter INTEGER,"
        " spoiler_mode TEXT NOT NULL DEFAULT 'protect',"
        " tier TEXT NOT NULL DEFAULT 'ascended',"
        " flavor TEXT NOT NULL DEFAULT '{}')"
    )
    legacy.execute(
        "INSERT INTO preferences (id, reader_chapter, spoiler_mode, tier)"
        " VALUES (1, 1000, 'none', 'transcendent')"
    )
    legacy.commit()
    legacy.close()

    store = PreferencesStore(db)
    await store.open()
    try:
        prefs = await store.get(DEVICE)
        assert prefs.reader_chapter is None
        assert prefs.spoiler_mode == "protect"
    finally:
        await store.close()

    check = sqlite3.connect(db)
    try:
        row = check.execute("SELECT reader_chapter FROM preferences WHERE id = 1").fetchone()
    finally:
        check.close()
    assert row == (1000,)


@pytest.mark.asyncio
async def test_rejects_out_of_range_chapter(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        with pytest.raises(ValueError):
            await store.set(DEVICE, UserPreferences(reader_chapter=0))
        with pytest.raises(ValueError):
            await store.set(DEVICE, UserPreferences(reader_chapter=MAX_CHAPTER + 1))
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_rejects_unknown_spoiler_mode(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        with pytest.raises(ValueError):
            await store.set(DEVICE, UserPreferences(spoiler_mode="sometimes"))
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_persists_across_reopen(tmp_path: Path) -> None:
    db = tmp_path / "weaver.sqlite3"
    store = PreferencesStore(db)
    await store.open()
    await store.set(DEVICE, UserPreferences(reader_chapter=3127, spoiler_mode="none"))
    await store.close()
    store = PreferencesStore(db)
    await store.open()
    try:
        prefs = await store.get(DEVICE)
        assert prefs.reader_chapter == 3127
        assert prefs.spoiler_mode == "none"
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_rows_saved_with_a_reading_tier_still_load(tmp_path: Path) -> None:
    """Slice 3 removed Answer depth; rows written before it keep their tier
    column and still load and save."""
    db = tmp_path / "weaver.sqlite3"
    store = PreferencesStore(db)
    await store.open()
    await store.close()
    old = sqlite3.connect(db)
    old.execute(
        "INSERT INTO device_preferences (device_id, reader_chapter, spoiler_mode, tier)"
        " VALUES (?, 900, 'protect', 'transcendent')",
        (DEVICE,),
    )
    old.commit()
    old.close()

    store = PreferencesStore(db)
    await store.open()
    try:
        assert (await store.get(DEVICE)).reader_chapter == 900
        await store.set(DEVICE, UserPreferences(reader_chapter=950))
        assert (await store.get(DEVICE)).reader_chapter == 950
    finally:
        await store.close()
