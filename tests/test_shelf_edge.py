"""Plan 031: one shelf edge for the whole app.

The edge is the highest chapter file on the shelf, rescanned on a short
cache so a running server sees chapters a refresh adds. Reader boundaries,
the system prompt, and the frontend all follow it; nothing hard-codes it.
"""

from __future__ import annotations

import json

import pytest
from httpx import ASGITransport, AsyncClient

from weaver.chat_runtime import open_chat_runtime
from weaver.shelf import ShelfEdge, search_coverage
from weaver.spoilers.judge import volume_of
from weaver.web.app import create_app


def shelve(root, *chapters: int) -> None:
    for chapter in chapters:
        lo = ((chapter - 1) // 100) * 100 + 1
        folder = root / "novels" / "shadow-slave" / f"{lo:04d}-{lo + 99:04d}"
        folder.mkdir(parents=True, exist_ok=True)
        (folder / f"chapter-{chapter:04d}.txt").write_text("x\n", encoding="utf-8")


class Clock:
    def __init__(self) -> None:
        self.now = 0.0

    def __call__(self) -> float:
        return self.now


def test_edge_is_the_highest_chapter_file(tmp_path) -> None:
    shelve(tmp_path, 1, 2, 3199, 3232)
    assert ShelfEdge(tmp_path / "novels" / "shadow-slave").last_chapter() == 3232


def test_edge_is_none_without_a_shelf(tmp_path) -> None:
    assert ShelfEdge(tmp_path / "novels" / "shadow-slave").last_chapter() is None


def test_edge_sees_a_new_chapter_after_the_cache_expires(tmp_path) -> None:
    shelve(tmp_path, 3232)
    clock = Clock()
    edge = ShelfEdge(tmp_path / "novels" / "shadow-slave", ttl_seconds=30, clock=clock)
    assert edge.last_chapter() == 3232

    shelve(tmp_path, 3233)
    assert edge.last_chapter() == 3232  # still cached
    clock.now = 31
    assert edge.last_chapter() == 3233


def test_search_coverage_reads_the_recorded_index_reach(tmp_path) -> None:
    assert search_coverage(tmp_path) is None
    folder = tmp_path / ".weaver" / "retrieval"
    folder.mkdir(parents=True)
    (folder / "coverage.json").write_text(
        json.dumps({"novel_chunks_through": 3127}), encoding="utf-8"
    )
    assert search_coverage(tmp_path) == 3127


def test_the_last_volume_is_open_ended() -> None:
    assert volume_of(3127) == 12
    assert volume_of(3128) == 13
    assert volume_of(3160) == 13
    assert volume_of(3161) == 14
    assert volume_of(3232) == 14
    assert volume_of(9000) == 14


@pytest.fixture
async def shelf_app(tmp_path, monkeypatch):
    project = tmp_path / "project"
    shelve(project, 1, 3232)
    folder = project / ".weaver" / "retrieval"
    folder.mkdir(parents=True)
    (folder / "coverage.json").write_text(
        json.dumps({"novel_chunks_through": 3127}), encoding="utf-8"
    )
    monkeypatch.setenv("WEAVER_PROJECT_ROOT", str(project))
    runtime = await open_chat_runtime(tmp_path / "state", live=False, surface="web")
    async with AsyncClient(
        transport=ASGITransport(app=create_app(runtime)), base_url="http://127.0.0.1"
    ) as client:
        yield runtime, client, project
    await runtime.close()


@pytest.mark.asyncio
async def test_library_endpoint_reports_the_edge_to_a_browser(shelf_app) -> None:
    _runtime, client, _project = shelf_app
    response = await client.get(
        "/api/library", headers={"Sec-Fetch-Site": "same-origin"}
    )
    assert response.status_code == 200
    body = response.json()
    assert body["last_chapter"] == 3232
    assert body["search_through"] == 3127


@pytest.mark.asyncio
async def test_library_endpoint_carries_the_weekly_refresh_status(shelf_app) -> None:
    _runtime, client, project = shelf_app
    headers = {"Sec-Fetch-Site": "same-origin"}

    never = (await client.get("/api/library", headers=headers)).json()["refresh"]
    assert never["outcome"] is None
    assert never["stale"] is True

    status = project / ".weaver" / "corpus" / "shadow-slave" / "library-status.json"
    status.parent.mkdir(parents=True)
    status.write_text(
        json.dumps({"last_check_at": "2999-01-01T10:00:00+00:00", "outcome": "added", "added": 5}),
        encoding="utf-8",
    )
    recorded = (await client.get("/api/library", headers=headers)).json()["refresh"]
    assert recorded["outcome"] == "added"
    assert recorded["added"] == 5


@pytest.mark.asyncio
async def test_a_boundary_past_3160_saves_and_one_past_the_edge_is_refused(
    shelf_app,
) -> None:
    _runtime, client, _project = shelf_app
    write = {"Origin": "http://127.0.0.1", "X-Device-Id": "edge-device"}

    saved = await client.put(
        "/api/preferences",
        headers=write,
        json={"reader_chapter": 3200, "spoiler_mode": "protect"},
    )
    assert saved.status_code == 200, saved.text

    refused = await client.put(
        "/api/preferences",
        headers=write,
        json={"reader_chapter": 3233, "spoiler_mode": "protect"},
    )
    assert refused.status_code == 422
    assert "3232" in refused.text


@pytest.mark.asyncio
async def test_the_prompt_names_the_edge_and_what_search_covers(shelf_app) -> None:
    runtime, _client, project = shelf_app
    prompt = runtime.session._system_prompt_by_domain("canon", None)
    assert "chapters 1-3232" in prompt
    assert "semantic_search covers chapters 1-3127" in prompt

    shelve(project, 3233)
    runtime.shelf._expires_at = 0.0  # as if the cache had expired
    assert "chapters 1-3233" in runtime.session._system_prompt_by_domain("canon", None)
