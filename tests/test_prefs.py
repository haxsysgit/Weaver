"""Preferences store (Plan 15 slice 2)."""

from pathlib import Path

import pytest

from weaver.prefs import MAX_CHAPTER, PreferencesStore, UserPreferences


@pytest.mark.asyncio
async def test_defaults_when_empty(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        prefs = await store.get()
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
        await store.set(UserPreferences(reader_chapter=600, spoiler_mode="none", flavor={"best": "saint"}))
        prefs = await store.get()
        assert prefs.reader_chapter == 600
        assert prefs.spoiler_mode == "none"
        assert prefs.flavor == {"best": "saint"}
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_set_overwrites_single_row(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        await store.set(UserPreferences(reader_chapter=100))
        await store.set(UserPreferences(reader_chapter=200))
        prefs = await store.get()
        assert prefs.reader_chapter == 200
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_rejects_out_of_range_chapter(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        with pytest.raises(ValueError):
            await store.set(UserPreferences(reader_chapter=0))
        with pytest.raises(ValueError):
            await store.set(UserPreferences(reader_chapter=MAX_CHAPTER + 1))
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_rejects_unknown_spoiler_mode(tmp_path: Path) -> None:
    store = PreferencesStore(tmp_path / "weaver.sqlite3")
    await store.open()
    try:
        with pytest.raises(ValueError):
            await store.set(UserPreferences(spoiler_mode="sometimes"))
    finally:
        await store.close()


@pytest.mark.asyncio
async def test_persists_across_reopen(tmp_path: Path) -> None:
    db = tmp_path / "weaver.sqlite3"
    store = PreferencesStore(db)
    await store.open()
    await store.set(UserPreferences(reader_chapter=3127, spoiler_mode="none"))
    await store.close()
    store = PreferencesStore(db)
    await store.open()
    try:
        prefs = await store.get()
        assert prefs.reader_chapter == 3127
        assert prefs.spoiler_mode == "none"
    finally:
        await store.close()
