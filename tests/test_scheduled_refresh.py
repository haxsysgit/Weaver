"""Plan 031: the weekly scheduled refresh, its status record, and alerts.

The scheduled run applies appends only (new chapters at the end, or a
missing chapter filled). Anything else waits for the owner. Every run
writes a status record (no chapter text) that Settings reads, and raises
a notification when it fails, needs the owner, or the source goes quiet.
"""

from __future__ import annotations

import json
import os
from datetime import UTC, datetime, timedelta

import pytest

from weaver.corpus.errors import CorpusError
from weaver.corpus.models import ErrorCategory
from weaver.corpus.schedule import (
    library_status,
    record_manual_apply,
    release_lock,
    run_scheduled_refresh,
    status_path,
    take_lock,
)

NOW = datetime(2026, 11, 7, 10, 0, tzinfo=UTC)  # a Saturday
PROBE = "probe_consecutive_urls_until_first_404"


def preview(*actions: str) -> dict:
    return {
        "preview": True,
        "actions": [{"action": a, "status": "previewed", "chapter": 3233} for a in actions],
        "action_counts": {"previewed": len(actions)},
    }


def applied(saved: int, *, stopped: int, reason: str = "first_404", failed=None) -> dict:
    actions = [{"action": "fetch", "status": "saved", "chapter": 3232 + i} for i in range(1, saved + 1)]
    if failed:
        actions.append({"action": "stop_without_write", "status": "failed", **failed})
    return {
        "preview": False,
        "actions": actions,
        "action_counts": {"saved": saved, **({"failed": 1} if failed else {})},
        "stop_reason": reason,
        "stopped_at_chapter": stopped,
    }


class FakeUpdate:
    def __init__(self, preview_result, apply_result=None, error=None):
        self.preview_result = preview_result
        self.apply_result = apply_result
        self.error = error
        self.calls: list[bool] = []
        self.appends_only: list[bool] = []

    # The real signature (weaver.corpus.tools.update_novel_corpus).
    async def __call__(self, novel_id, through_chapter=None, preview=True, source="direct", *, appends_only=False):
        self.calls.append(preview)
        self.appends_only.append(appends_only)
        if self.error is not None and not preview:
            raise self.error
        return self.preview_result if preview else self.apply_result


class Notes:
    def __init__(self):
        self.sent: list[tuple[str, str]] = []

    def __call__(self, title: str, body: str) -> None:
        self.sent.append((title, body))


def shelve(root, *chapters):
    for chapter in chapters:
        lo = ((chapter - 1) // 100) * 100 + 1
        folder = root / "novels" / "shadow-slave" / f"{lo:04d}-{lo + 99:04d}"
        folder.mkdir(parents=True, exist_ok=True)
        (folder / f"chapter-{chapter:04d}.txt").write_text("x\n", encoding="utf-8")


@pytest.mark.asyncio
async def test_new_chapters_are_appended_and_recorded(tmp_path) -> None:
    shelve(tmp_path, 3232)
    update = FakeUpdate(preview(PROBE), applied(5, stopped=3238))
    notes = Notes()

    status = await run_scheduled_refresh(tmp_path, update=update, notify=notes, now=NOW)

    assert update.calls == [True, False]
    assert update.appends_only == [True, True]  # refused at the write layer too
    assert status["outcome"] == "added"
    assert status["added"] == 5
    assert status["last_chapter"] == 3237
    assert status["last_new_chapter_at"] == NOW.isoformat()
    assert notes.sent == []
    on_disk = json.loads(status_path(tmp_path).read_text(encoding="utf-8"))
    assert on_disk == status


@pytest.mark.asyncio
async def test_anything_but_an_append_waits_for_the_owner(tmp_path) -> None:
    update = FakeUpdate(preview(PROBE, "replace_broken_atomically"))
    notes = Notes()

    status = await run_scheduled_refresh(tmp_path, update=update, notify=notes, now=NOW)

    assert update.calls == [True]  # never applied
    assert status["outcome"] == "needs_owner"
    assert "weaver refresh --apply" in notes.sent[0][1]


@pytest.mark.asyncio
async def test_a_moved_source_raises_an_alert_naming_where_it_went(tmp_path) -> None:
    failed = {
        "chapter": 3233,
        "error_category": "validation",
        "error_code": "final_url_mismatch",
        "observed_url": "https://elsewhere.example/novel/shadow-slave/chapter-3233",
    }
    update = FakeUpdate(preview(PROBE), applied(0, stopped=3233, reason="validation", failed=failed))
    notes = Notes()

    status = await run_scheduled_refresh(tmp_path, update=update, notify=notes, now=NOW)

    assert status["outcome"] == "failed"
    assert status["last_failure"]["code"] == "final_url_mismatch"
    assert "elsewhere.example" in notes.sent[0][1]


@pytest.mark.asyncio
async def test_a_network_failure_is_recorded_and_alerted(tmp_path) -> None:
    error = CorpusError("The direct request failed.", ErrorCategory.PROVIDER, detail_code="http_ConnectError")
    update = FakeUpdate(preview(PROBE), error=error)
    notes = Notes()

    status = await run_scheduled_refresh(tmp_path, update=update, notify=notes, now=NOW)

    assert status["outcome"] == "failed"
    assert status["last_failure"]["category"] == "provider"
    assert len(notes.sent) == 1


@pytest.mark.asyncio
async def test_a_quiet_source_alerts_after_nine_days(tmp_path) -> None:
    status_path(tmp_path).parent.mkdir(parents=True)
    status_path(tmp_path).write_text(
        json.dumps({"last_new_chapter_at": (NOW - timedelta(days=10)).isoformat()}),
        encoding="utf-8",
    )
    update = FakeUpdate(preview(PROBE), applied(0, stopped=3233))
    notes = Notes()

    status = await run_scheduled_refresh(tmp_path, update=update, notify=notes, now=NOW)

    assert status["outcome"] == "up_to_date"
    assert status["quiet_days"] == 10
    assert "10 days" in notes.sent[0][1]


@pytest.mark.asyncio
async def test_a_second_run_is_refused_while_one_holds_the_lock(tmp_path) -> None:
    lock = status_path(tmp_path).parent / "refresh.lock"
    lock.parent.mkdir(parents=True)
    lock.write_text(NOW.isoformat(), encoding="utf-8")
    update = FakeUpdate(preview(PROBE), applied(1, stopped=3234))

    status = await run_scheduled_refresh(tmp_path, update=update, notify=Notes(), now=NOW)

    assert status["outcome"] == "skipped_locked"
    assert update.calls == []
    assert lock.exists()  # the other run's lock is left alone


@pytest.mark.asyncio
async def test_a_stale_lock_from_a_dead_run_is_cleared(tmp_path) -> None:
    lock = status_path(tmp_path).parent / "refresh.lock"
    lock.parent.mkdir(parents=True)
    lock.write_text((NOW - timedelta(hours=3)).isoformat(), encoding="utf-8")
    update = FakeUpdate(preview(PROBE), applied(1, stopped=3234))

    status = await run_scheduled_refresh(tmp_path, update=update, notify=Notes(), now=NOW)

    assert status["outcome"] == "added"
    assert not lock.exists()


def test_status_reports_a_schedule_that_stopped_running(tmp_path) -> None:
    assert library_status(tmp_path, now=NOW)["stale"] is True  # never ran
    status_path(tmp_path).parent.mkdir(parents=True)
    status_path(tmp_path).write_text(
        json.dumps({"last_check_at": (NOW - timedelta(days=9)).isoformat(), "outcome": "added"}),
        encoding="utf-8",
    )
    assert library_status(tmp_path, now=NOW)["stale"] is True
    status_path(tmp_path).write_text(
        json.dumps({"last_check_at": (NOW - timedelta(days=6)).isoformat(), "outcome": "added"}),
        encoding="utf-8",
    )
    assert library_status(tmp_path, now=NOW)["stale"] is False


@pytest.mark.asyncio
async def test_an_unexpected_error_is_recorded_and_alerted(tmp_path) -> None:
    update = FakeUpdate(preview(PROBE), error=PermissionError("receipt locked"))
    notes = Notes()

    status = await run_scheduled_refresh(tmp_path, update=update, notify=notes, now=NOW)

    assert status["outcome"] == "failed"
    assert status["last_failure"]["category"] == "unexpected"
    assert status["last_failure"]["code"] == "PermissionError"
    assert "receipt locked" not in json.dumps(status)  # type name only
    assert len(notes.sent) == 1
    assert json.loads(status_path(tmp_path).read_text(encoding="utf-8"))["outcome"] == "failed"
    assert not (status_path(tmp_path).parent / "refresh.lock").exists()


def _empty_lock(root, age: timedelta):
    lock = status_path(root).parent / "refresh.lock"
    lock.parent.mkdir(parents=True, exist_ok=True)
    lock.write_text("", encoding="utf-8")  # a crash before the time was written
    stamp = (NOW - age).timestamp()
    os.utime(lock, (stamp, stamp))
    return lock


@pytest.mark.asyncio
async def test_an_unreadable_stale_lock_is_cleared_by_its_age(tmp_path) -> None:
    _empty_lock(tmp_path, timedelta(hours=3))
    update = FakeUpdate(preview(PROBE), applied(1, stopped=3234))

    status = await run_scheduled_refresh(tmp_path, update=update, notify=Notes(), now=NOW)

    assert status["outcome"] == "added"


@pytest.mark.asyncio
async def test_an_unreadable_fresh_lock_is_still_honoured(tmp_path) -> None:
    _empty_lock(tmp_path, timedelta(minutes=5))
    update = FakeUpdate(preview(PROBE), applied(1, stopped=3234))

    status = await run_scheduled_refresh(tmp_path, update=update, notify=Notes(), now=NOW)

    assert status["outcome"] == "skipped_locked"
    assert update.calls == []


def test_the_lock_is_shared_with_a_manual_apply(tmp_path) -> None:
    assert take_lock(tmp_path, NOW) is True
    assert take_lock(tmp_path, NOW) is False
    release_lock(tmp_path)
    assert take_lock(tmp_path, NOW) is True


def test_a_manual_apply_clears_a_waiting_note(tmp_path) -> None:
    status_path(tmp_path).parent.mkdir(parents=True)
    status_path(tmp_path).write_text(
        json.dumps({"outcome": "needs_owner", "last_check_at": (NOW - timedelta(days=2)).isoformat()}),
        encoding="utf-8",
    )

    status = record_manual_apply(tmp_path, applied(2, stopped=3235), now=NOW)

    assert status["outcome"] == "added"
    assert status["last_chapter"] == 3234
    assert status["last_new_chapter_at"] == NOW.isoformat()
    assert library_status(tmp_path, now=NOW)["outcome"] == "added"


def test_a_failed_run_that_saved_chapters_still_moves_the_edge(tmp_path) -> None:
    failed = {"chapter": 3235, "error_category": "provider", "error_code": "http_503"}

    status = record_manual_apply(
        tmp_path, applied(2, stopped=3235, reason="provider", failed=failed), now=NOW
    )

    assert status["outcome"] == "failed"
    assert status["added"] == 2
    assert status["last_new_chapter_at"] == NOW.isoformat()
