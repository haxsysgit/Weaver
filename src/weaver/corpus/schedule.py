"""The weekly scheduled refresh (Plan 031).

`weaver refresh --scheduled` runs this unattended. It previews first and
applies only when every planned action is an append (new chapters at the
end, or a missing chapter filled in). Anything else, such as replacing a
broken chapter, waits for the owner's manual `weaver refresh --apply`.

Every run writes a status record (metadata only, never chapter text) that
Settings reads through /api/library, appends one line to a run log, and
raises a notification when the run fails, needs the owner, or the source
has gone quiet. A lock keeps two runs from overlapping.
"""

from __future__ import annotations

import json
import os
from collections.abc import Awaitable, Callable
from datetime import UTC, datetime, timedelta
from pathlib import Path
from typing import Any

from .errors import CorpusError

NOVEL_ID = "shadow-slave"
# Actions a run may take with nobody watching: they only add files.
UNATTENDED_ACTIONS = frozenset(
    {"probe_consecutive_urls_until_first_404", "save_missing", "preserve_valid", "fetch"}
)
# The author posts Monday to Friday; a weekly run that finds nothing for
# longer than a week and a weekend means the source, or the author, paused.
QUIET_DAYS = 9
# The run is weekly; a status older than a week and a day means the
# schedule stopped (the PC was off for a long time, or the task is gone).
STALE_DAYS = 8
STALE_LOCK = timedelta(hours=2)

Update = Callable[..., Awaitable[dict[str, Any]]]
Notify = Callable[[str, str], None]


def state_dir(project_root: Path) -> Path:
    return project_root / ".weaver" / "corpus" / NOVEL_ID


def status_path(project_root: Path) -> Path:
    return state_dir(project_root) / "library-status.json"


def _read_status(project_root: Path) -> dict[str, Any]:
    try:
        value = json.loads(status_path(project_root).read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return {}
    return value if isinstance(value, dict) else {}


def _write_status(project_root: Path, status: dict[str, Any]) -> None:
    path = status_path(project_root)
    path.parent.mkdir(parents=True, exist_ok=True)
    temporary = path.with_suffix(".tmp")
    temporary.write_text(json.dumps(status, indent=2) + "\n", encoding="utf-8")
    os.replace(temporary, path)


def _log(project_root: Path, now: datetime, status: dict[str, Any]) -> None:
    line = (
        f"{now.isoformat()} outcome={status.get('outcome')} "
        f"added={status.get('added', 0)} last={status.get('last_chapter')}\n"
    )
    with (state_dir(project_root) / "scheduled.log").open("a", encoding="utf-8") as log:
        log.write(line)


def _take_lock(project_root: Path, now: datetime) -> bool:
    lock = state_dir(project_root) / "refresh.lock"
    lock.parent.mkdir(parents=True, exist_ok=True)
    try:
        held_since = datetime.fromisoformat(lock.read_text(encoding="utf-8").strip())
    except (OSError, ValueError):
        held_since = None
    if held_since is not None and now - held_since > STALE_LOCK:
        lock.unlink(missing_ok=True)  # a run that died without cleaning up
    try:
        descriptor = os.open(lock, os.O_CREAT | os.O_EXCL | os.O_WRONLY)
    except FileExistsError:
        return False
    with os.fdopen(descriptor, "w", encoding="utf-8") as handle:
        handle.write(now.isoformat())
    return True


def _release_lock(project_root: Path) -> None:
    (state_dir(project_root) / "refresh.lock").unlink(missing_ok=True)


def _newest_chapter_time(project_root: Path) -> str | None:
    novel_dir = project_root / "novels" / NOVEL_ID
    newest: float | None = None
    if novel_dir.is_dir():
        for path in novel_dir.glob("*/chapter-*.txt"):
            mtime = path.stat().st_mtime
            newest = mtime if newest is None else max(newest, mtime)
    return datetime.fromtimestamp(newest, UTC).isoformat() if newest else None


def _failure_from_actions(actions: list[dict[str, Any]]) -> dict[str, Any] | None:
    for action in actions:
        if action.get("status") in {"failed", "conflict"}:
            return {
                "chapter": action.get("chapter"),
                "category": action.get("error_category"),
                "code": action.get("error_code"),
                "observed_url": action.get("observed_url"),
            }
    return None


def _failure_message(failure: dict[str, Any]) -> str:
    if failure.get("code") == "final_url_mismatch" and failure.get("observed_url"):
        return (
            f"The source moved: chapter {failure.get('chapter')} now goes to "
            f"{failure['observed_url']}. Nothing was saved. Check the new "
            "host before pointing Weaver at it."
        )
    return (
        f"The refresh stopped at chapter {failure.get('chapter')} "
        f"({failure.get('category')}: {failure.get('code')}). Nothing unsafe "
        "was saved. Run `weaver refresh` to see the plan."
    )


async def run_scheduled_refresh(
    project_root: Path,
    *,
    update: Update,
    notify: Notify,
    now: datetime | None = None,
) -> dict[str, Any]:
    """One unattended weekly run; returns the status it recorded."""
    now = now or datetime.now(UTC)
    previous = _read_status(project_root)
    if not _take_lock(project_root, now):
        return {**previous, "outcome": "skipped_locked"}
    try:
        status = await _run(project_root, update, notify, now, previous)
        _write_status(project_root, status)
        _log(project_root, now, status)
        return status
    finally:
        _release_lock(project_root)


async def _run(
    project_root: Path,
    update: Update,
    notify: Notify,
    now: datetime,
    previous: dict[str, Any],
) -> dict[str, Any]:
    status: dict[str, Any] = {
        "last_check_at": now.isoformat(),
        "last_success_at": previous.get("last_success_at"),
        "last_new_chapter_at": previous.get("last_new_chapter_at")
        or _newest_chapter_time(project_root),
        "last_chapter": previous.get("last_chapter"),
        "added": 0,
        "last_failure": None,
        "quiet_days": None,
    }
    try:
        plan = await update(NOVEL_ID, preview=True, source="direct")
        blocked = sorted(
            {
                str(action.get("action"))
                for action in plan.get("actions", [])
                if action.get("action") not in UNATTENDED_ACTIONS
            }
        )
        if blocked:
            status["outcome"] = "needs_owner"
            status["waiting_actions"] = blocked
            notify(
                "Weaver's library needs you",
                "The weekly refresh found work that is not a plain append "
                f"({', '.join(blocked)}). Run `weaver refresh` to see it, then "
                "`weaver refresh --apply` yourself.",
            )
            return status
        result = await update(NOVEL_ID, preview=False, source="direct")
    except CorpusError as exc:
        status["outcome"] = "failed"
        status["last_failure"] = {
            "chapter": None,
            "category": exc.category.value,
            "code": exc.detail_code,
            "observed_url": None,
        }
        notify(
            "Weaver's library refresh failed",
            f"The weekly refresh could not reach the source ({exc.category.value}). "
            "Nothing was changed; it will try again next week.",
        )
        return status

    added = int(result.get("action_counts", {}).get("saved", 0))
    status["added"] = added
    failure = _failure_from_actions(result.get("actions", []))
    if result.get("stop_reason") == "first_404" and failure is None:
        stopped = result.get("stopped_at_chapter")
        status["last_chapter"] = stopped - 1 if stopped else status["last_chapter"]
        status["last_success_at"] = now.isoformat()
        status["outcome"] = "added" if added else "up_to_date"
        if added:
            status["last_new_chapter_at"] = now.isoformat()
        elif status["last_new_chapter_at"]:
            quiet = now - datetime.fromisoformat(status["last_new_chapter_at"])
            status["quiet_days"] = quiet.days
            if quiet.days > QUIET_DAYS:
                notify(
                    "Weaver's library is quiet",
                    f"No new chapter in {quiet.days} days. The author may be "
                    "on a break, or the source stopped updating.",
                )
        return status

    status["outcome"] = "failed"
    status["last_failure"] = failure or {
        "chapter": result.get("stopped_at_chapter"),
        "category": result.get("stop_reason"),
        "code": None,
        "observed_url": None,
    }
    notify("Weaver's library refresh failed", _failure_message(status["last_failure"]))
    return status


def library_status(project_root: Path, *, now: datetime | None = None) -> dict[str, Any]:
    """The last run's record for Settings, plus whether the schedule stopped."""
    now = now or datetime.now(UTC)
    status = _read_status(project_root)
    checked = status.get("last_check_at")
    stale = True
    if checked:
        try:
            stale = now - datetime.fromisoformat(checked) > timedelta(days=STALE_DAYS)
        except ValueError:
            stale = True
    return {
        "last_check_at": checked,
        "last_success_at": status.get("last_success_at"),
        "last_new_chapter_at": status.get("last_new_chapter_at"),
        "outcome": status.get("outcome"),
        "added": status.get("added", 0),
        "last_failure": status.get("last_failure"),
        "stale": stale,
    }
