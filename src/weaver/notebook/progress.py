"""Progress file and chapter sequence checks."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from .context import NotebookContext, read_json, relative_path
from .report import CheckResult


def progress_values(progress: dict[str, Any]) -> tuple[int | None, bool]:
    last_checked = progress.get("last_fully_checked_chapter", progress.get("last_checked"))
    return last_checked if isinstance(last_checked, int) else None, bool(progress.get("complete"))


def check_progress(
    root: Path,
    records: dict[int, tuple[Path, dict[str, Any]]],
    requested_through: int,
    result: CheckResult,
) -> tuple[int, bool]:
    progress_path = root / "reading-progress.json"
    if not records and not progress_path.exists():
        return 0, False
    if not progress_path.is_file():
        result.add("reading-progress.json", "progress file is missing")
        return 0, False
    progress = read_json(progress_path, result)
    if progress is None:
        return 0, False
    last_checked, complete = progress_values(progress)
    if last_checked is None or last_checked < 0:
        result.add(progress_path, "last checked chapter is invalid")
        return 0, complete
    effective_through = min(last_checked, requested_through)
    if progress.get("through") is not None and progress.get("through") != requested_through:
        result.add(progress_path, "progress range does not match requested range")
    if complete and requested_through < 100:
        result.add(progress_path, "progress completion flag is incorrect")
    if complete and last_checked < requested_through:
        result.add(progress_path, "last checked chapter is out of order")
    return effective_through, complete


def check_sequence(
    records: dict[int, tuple[Path, dict[str, Any]]],
    note_paths: dict[int, Path],
    effective_through: int,
    requested_through: int,
    result: CheckResult,
) -> None:
    expected = set(range(1, effective_through + 1))
    actual = set(records)
    for chapter_number in sorted(expected - actual):
        result.add("reading", f"missing chapter {chapter_number}")
    for chapter_number in sorted(actual - expected):
        if chapter_number > requested_through:
            result.add("reading", f"chapter {chapter_number} is outside requested range")
        else:
            result.add("reading", f"chapter {chapter_number} is out of order")
    note_chapters = set(note_paths)
    for chapter_number in sorted(note_chapters - actual):
        result.add(relative_path(note_paths[chapter_number], note_paths[chapter_number].parent.parent), "chapter note is out of order")
