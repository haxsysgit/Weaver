"""The orchestrator: global passes always, scoped passes bounded by range.

Global passes (permissions, pages, connections graph, git exposure,
sequence, progress) scan metadata only and run in seconds even on the
full notebook. Scoped passes (provenance sha256, reader contract,
entries, notes, prose scan) are bounded by --through so "check a small
change" costs what a small change costs.
"""

from __future__ import annotations

import json
import re
from pathlib import Path
from typing import Any

from .connections import check_connections, check_connections_freshness
from .constants import (
    CHAPTER_JSON_PATTERN,
    CHAPTER_NOTE_PATTERN,
    CHAPTER_HEADING_PATTERN,
    LEDGER_FILES,
    NOTE_RECORD_MARKER_PATTERN,
    STATEMENT_MARKER_PATTERN,
)
from .context import (
    NotebookContext,
    discover_novel_dir,
    find_repo_root,
    read_json,
    relative_path,
)
from .git_exposure import check_git_exposure
from .pages import (
    check_entity_pages,
    check_page_freshness,
    collect_page_ids,
)
from .permissions import check_private_permissions
from .progress import check_progress, check_sequence
from .prose import contains_source_prose, scan_for_source_prose, source_fragments
from .provenance import check_original_chapter
from .records import check_entries, collect_entries
from .report import CheckResult, validate_range


def chapter_number_from_name(name: str, pattern: re.Pattern[str]) -> int | None:
    match = pattern.fullmatch(name)
    if match is None:
        return None
    return int(match.group(1))


def collect_chapter_paths(
    root: Path,
    directory_name: str,
    pattern: re.Pattern[str],
    result: CheckResult,
) -> dict[int, Path]:
    directory = root / directory_name
    if not directory.is_dir():
        return {}
    paths: dict[int, Path] = {}
    for path in sorted(directory.iterdir()):
        chapter_number = chapter_number_from_name(path.name, pattern)
        if chapter_number is None:
            result.add(relative_path(path, root), "unexpected file name")
            continue
        if chapter_number in paths:
            result.add(relative_path(path, root), "duplicate chapter number")
            continue
        paths[chapter_number] = path
    return paths


def check_notes(
    root: Path,
    note_paths: dict[int, Path],
    records: dict[int, tuple[Path, dict[str, Any]]],
    result: CheckResult,
) -> None:
    for chapter_number in records:
        note_path = note_paths.get(chapter_number)
        if note_path is None:
            result.add(
                root / "chapters" / f"{chapter_number:04d}.md",
                f"missing chapter {chapter_number} note",
            )
            continue
        try:
            note_contents = note_path.read_text(encoding="utf-8")
        except (OSError, UnicodeError):
            result.add(relative_path(note_path, root), "chapter note cannot be read")
            continue
        heading_numbers = {
            int(match.group(1))
            for line in note_contents.splitlines()
            if (match := CHAPTER_HEADING_PATTERN.fullmatch(line)) is not None
        }
        if chapter_number not in heading_numbers:
            result.add(relative_path(note_path, root), "chapter note heading is missing")

        record = records[chapter_number][1]
        record_marker = NOTE_RECORD_MARKER_PATTERN.findall(note_contents)
        if not record_marker:
            result.add(relative_path(note_path, root), "notebook record marker is missing")
        elif f"chapter-{chapter_number:04d}" not in record_marker:
            result.add(relative_path(note_path, root), "notebook record marker is wrong")
        note_statement_ids = set(STATEMENT_MARKER_PATTERN.findall(note_contents))
        entries = record.get("statements", record.get("entries"))
        record_ids = (
            {
                entry.get("id")
                for entry in entries
                if isinstance(entry, dict) and isinstance(entry.get("id"), str)
            }
            if isinstance(entries, list)
            else set()
        )
        if note_statement_ids != record_ids:
            result.add(relative_path(note_path, root), "statement ids do not match JSON")


def check_notebook(
    notebook_root: Path | str,
    through: int = 100,
    novel_dir: Path | str | None = None,
) -> CheckResult:
    """Check one private notebook and return counts plus non-sensitive issues."""

    root = Path(notebook_root).resolve()
    result = CheckResult()
    if not root.is_dir():
        result.add(root, "notebook root is missing")
        return result
    if not validate_range(through, result, root):
        return result

    repo_root = find_repo_root(root)
    explicit_novel_dir = Path(novel_dir) if novel_dir is not None else None
    discovered_novel_dir = discover_novel_dir(root, repo_root, explicit_novel_dir)
    context = NotebookContext(
        root=root,
        repo_root=repo_root,
        novel_dir=discovered_novel_dir,
        requested_through=through,
        effective_through=through,
    )

    # ---- global passes (metadata only, always run) ----
    check_private_permissions(root, result)
    reading_paths = collect_chapter_paths(root, "reading", CHAPTER_JSON_PATTERN, result)
    context.note_paths = collect_chapter_paths(root, "chapters", CHAPTER_NOTE_PATTERN, result)
    if not reading_paths and not (root / "reading-progress.json").exists():
        result.add(root, "notebook is empty")

    records: dict[int, tuple[Path, dict[str, Any]]] = {}
    for chapter_number, record_path in sorted(reading_paths.items()):
        record = read_json(record_path, result)
        if record is None:
            continue
        if record.get("chapter") != chapter_number:
            result.add(relative_path(record_path, root), "chapter does not match file")
        records[chapter_number] = (record_path, record)
    context.records = records

    effective_through, complete = check_progress(root, records, through, result)
    context.effective_through = effective_through
    if records and effective_through == 0:
        effective_through = max(records)
        context.effective_through = effective_through

    collect_entries(records, context, result)
    collect_page_ids(root, context, result)
    check_sequence(records, context.note_paths, effective_through, through, result)

    # ---- scoped passes (bounded by through) ----
    for chapter_number, (record_path, record) in sorted(records.items()):
        if chapter_number <= through:
            check_original_chapter(context, chapter_number, record, record_path, result)

    scoped_records = {
        chapter_number: (record_path, record)
        for chapter_number, (record_path, record) in records.items()
        if chapter_number <= through
    }
    check_entries(scoped_records, context, result)
    check_entity_pages(root, context, result)
    check_notes(root, context.note_paths, scoped_records, result)

    connection_count = check_connections(root, context, result)

    if complete or effective_through == 100:
        for ledger_name in LEDGER_FILES:
            if not (root / ledger_name).is_file():
                result.add(ledger_name, "ledger file is missing")

    # Prose scan: only chapters in range have source text loaded, so
    # only scan records in range. Out-of-range records have no
    # fragments and scanning them is pure waste (was 51% of runtime).
    fragments_by_chapter = {
        chapter_number: source_fragments(source_text)
        for chapter_number, source_text in context.source_texts.items()
    }
    for chapter_number, (record_path, record) in scoped_records.items():
        fragments = fragments_by_chapter.get(chapter_number, set())
        scan_for_source_prose(record, fragments, result, record_path)
    connection_path = root / "connections.jsonl"
    if connection_path.is_file():
        try:
            connection_text = connection_path.read_text(encoding="utf-8")
        except (OSError, UnicodeError):
            connection_text = ""
        # Check each connection row against its OWN evidence chapter's
        # fragments, never the union of all fragments: the union of
        # thousands of chapter lines makes the alternation regex
        # compile take minutes (measured >20s for ~15k fragments) and
        # the old any()-loop took 13s per run.
        for line in connection_text.splitlines():
            if not line.strip():
                continue
            try:
                connection_value = json.loads(line)
            except json.JSONDecodeError:
                continue
            if not isinstance(connection_value, dict):
                continue
            row_chapters = []
            for chapter_item in connection_value.get(
                "chapters", connection_value.get("evidence")
            ) or []:
                if isinstance(chapter_item, dict):
                    row_chapters.append(chapter_item.get("chapter"))
                else:
                    row_chapters.append(chapter_item)
            for row_chapter in row_chapters:
                if not isinstance(row_chapter, int):
                    continue
                row_fragments = fragments_by_chapter.get(row_chapter, set())
                if contains_source_prose(line, row_fragments):
                    result.add("connections.jsonl", "copied source prose (copied novel prose)")
                    break

    # ---- freshness passes (new: the gap the owner's stale-graph bug exposed) ----
    check_connections_freshness(root, context, result)
    check_page_freshness(root, context, result)

    check_git_exposure(context, result)
    result.counts = {
        "chapters": len(records),
        "entries": len(context.entry_ids),
        "entities": len(context.entity_ids),
        "connections": connection_count,
    }
    return result


def run_checks(
    notebook_root: Path | str,
    through: int = 100,
    novel_dir: Path | str | None = None,
) -> CheckResult:
    """Public alias: check_notebook. The CLI and tests call this."""
    return check_notebook(notebook_root, through=through, novel_dir=novel_dir)
