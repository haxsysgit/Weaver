"""Record authenticity: source paths and sha256 against the novel files."""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

from .context import NotebookContext, sha256_of
from .report import CheckResult


def chapter_source_path(
    context: NotebookContext,
    chapter_number: int,
    record: dict[str, Any],
    record_path: Path,
    result: CheckResult,
) -> Path | None:
    source_data = record.get("source")
    source_relative = source_data.get("path") if isinstance(source_data, dict) else None
    if source_relative is None:
        source_relative = record.get("source_path")

    if isinstance(source_relative, str) and source_relative:
        source_path = Path(source_relative)
        if source_path.is_absolute():
            result.add(record_path, "source path must be relative")
            return None
        expected_name = f"chapter-{chapter_number:04d}.txt"
        if source_path.name != expected_name:
            result.add(record_path, "source path does not name the assigned chapter")
            return None
        if context.repo_root is None:
            result.add(record_path, "repository root is missing")
            return None
        resolved = (context.repo_root / source_path).resolve()
    elif context.novel_dir is not None:
        candidates = sorted(
            context.novel_dir.glob(f"*/chapter-{chapter_number:04d}.txt")
        )
        resolved = candidates[0].resolve() if candidates else None
        if resolved is None:
            result.add(record_path, "original chapter is missing")
            return None
    else:
        result.add(record_path, "novel directory is missing")
        return None

    if not resolved.is_file() or resolved.is_symlink():
        result.add(record_path, "original chapter is missing")
        return None
    return resolved


def record_source_metadata(record: dict[str, Any]) -> tuple[str | None, int | None]:
    source_data = record.get("source")
    if isinstance(source_data, dict):
        source_hash = source_data.get("sha256")
        line_count = source_data.get("line_count")
    else:
        source_hash = record.get("source_sha256")
        line_count = None
    return source_hash if isinstance(source_hash, str) else None, line_count


def check_original_chapter(
    context: NotebookContext,
    chapter_number: int,
    record: dict[str, Any],
    record_path: Path,
    result: CheckResult,
) -> None:
    source_path = chapter_source_path(context, chapter_number, record, record_path, result)
    if source_path is None:
        return
    try:
        source_text = source_path.read_text(encoding="utf-8")
    except (OSError, UnicodeError):
        result.add(record_path, "original chapter cannot be read")
        return

    context.source_texts[chapter_number] = source_text
    context.source_line_counts[chapter_number] = len(source_text.splitlines())
    paragraphs = [part for part in re.split(r"\n\s*\n", source_text) if part.strip()]
    context.source_paragraph_counts[chapter_number] = len(paragraphs)
    expected_hash, expected_line_count = record_source_metadata(record)
    if expected_hash is None:
        result.add(record_path, "original chapter hash is missing")
    elif sha256_of(source_path) != expected_hash:
        result.add(record_path, "source hash changed (changed original chapter)")
    if expected_line_count is not None and expected_line_count != len(source_text.splitlines()):
        result.add(record_path, "changed original chapter line count")
