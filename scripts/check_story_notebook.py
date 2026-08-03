#!/usr/bin/env python3
"""Validate Weaver's private, source-grounded story notebook.

The checker accepts the compact record shape used by the first reading slice
and the richer Plan 012 shape.  In both cases it checks the same guarantees:
every saved claim has source support, links resolve, source hashes still
match, and private data stays out of Git.  Diagnostics contain paths and rule
names only.  They never print notebook statements or novel prose.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
import re
import subprocess
import sys
from dataclasses import dataclass, field
from pathlib import Path
from typing import Any, Iterable


STATUS_LABELS = {
    "confirmed_fact",
    "character_belief",
    "interpretation",
    "theory",
    "conflict",
}
LEGACY_ENTRY_KINDS = {"entity", "relation", "event", "mystery", "interpretation"}
ENTITY_TYPES = {"person", "place", "power", "group", "item"}
PAGE_DIRS = {
    "person": "people",
    "place": "places",
    "power": "powers",
    "group": "groups",
    "item": "items",
}
READER_ROLES = {"lead", "plot_cause_checker", "character_world_checker"}
CHAPTER_JSON_PATTERN = re.compile(r"^(\d{4})\.json$")
CHAPTER_NOTE_PATTERN = re.compile(r"^(\d{4})\.md$")
CHAPTER_HEADING_PATTERN = re.compile(r"^#\s+Chapter\s+(\d{1,4})\s*$")
ENTITY_MARKER_PATTERN = re.compile(r"<!--\s*entity-id:\s*([^\s]+)\s*-->")
STATEMENT_MARKER_PATTERN = re.compile(
    r"<!--\s*statement-id:\s*([^\s]+)\s*-->"
)
NOTE_RECORD_MARKER_PATTERN = re.compile(
    r"<!--\s*notebook-record:\s*([^\s]+)\s*-->"
)
FORBIDDEN_PROSE_KEYS = {
    "chapter_text",
    "excerpt",
    "novel_text",
    "prose",
    "quote",
    "raw_text",
    "verbatim",
}
SKIPPED_PROSE_KEYS = {
    "chapter",
    "chapters",
    "corrected",
    "first_known",
    "first_known_chapter",
    "line_count",
    "location",
    "locations",
    "path",
    "predicate",
    "relation",
    "role",
    "sha256",
    "source_sha256",
    "status",
}
LEDGER_FILES = {
    "relationships.md",
    "timeline.md",
    "mysteries.md",
    "interpretations.md",
}


@dataclass
class CheckResult:
    """A non-sensitive checker result."""

    issues: list[str] = field(default_factory=list)
    counts: dict[str, int] = field(default_factory=dict)

    @property
    def ok(self) -> bool:
        return not self.issues


@dataclass
class NotebookContext:
    """Shared state built while checking one notebook."""

    root: Path
    repo_root: Path | None
    novel_dir: Path | None
    requested_through: int
    effective_through: int
    source_texts: dict[int, str] = field(default_factory=dict)
    source_line_counts: dict[int, int] = field(default_factory=dict)
    source_paragraph_counts: dict[int, int] = field(default_factory=dict)
    entry_ids: set[str] = field(default_factory=set)
    entity_ids: set[str] = field(default_factory=set)
    connection_ids: set[str] = field(default_factory=set)
    all_ids: set[str] = field(default_factory=set)
    entries_by_id: dict[str, dict[str, Any]] = field(default_factory=dict)
    rich_records: bool = False


def add_issue(result: CheckResult, path: Path | str, message: str) -> None:
    """Add a diagnostic without exposing private content."""

    display_path = path.as_posix() if isinstance(path, Path) else path
    result.issues.append(f"{display_path}: {message}")


def relative_path(path: Path, root: Path) -> Path:
    try:
        return path.relative_to(root)
    except ValueError:
        return path


def sha256_of(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as source_file:
        for chunk in iter(lambda: source_file.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def read_json(path: Path, result: CheckResult) -> dict[str, Any] | None:
    try:
        value = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, UnicodeError, json.JSONDecodeError):
        add_issue(result, path, "invalid JSON")
        return None
    if not isinstance(value, dict):
        add_issue(result, path, "record must be a JSON object")
        return None
    return value


def find_repo_root(notebook_root: Path) -> Path | None:
    for candidate in (notebook_root, *notebook_root.parents):
        if (candidate / "novels").is_dir():
            return candidate
    try:
        completed = subprocess.run(
            ["git", "-C", str(notebook_root), "rev-parse", "--show-toplevel"],
            capture_output=True,
            check=False,
            text=True,
        )
    except OSError:
        return None
    if completed.returncode != 0 or not completed.stdout.strip():
        return None
    return Path(completed.stdout.strip())


def discover_novel_dir(
    notebook_root: Path,
    repo_root: Path | None,
    explicit_novel_dir: Path | None,
) -> Path | None:
    if explicit_novel_dir is not None:
        return explicit_novel_dir.resolve()
    if repo_root is not None:
        candidate = repo_root / "novels" / "shadow-slave"
        if candidate.is_dir():
            return candidate.resolve()
    source_candidate = notebook_root / "novels" / "shadow-slave"
    if source_candidate.is_dir():
        return source_candidate.resolve()
    return None


def check_private_permissions(root: Path, result: CheckResult) -> None:
    """Require private modes when the notebook contains files."""

    try:
        has_children = any(root.iterdir())
    except OSError:
        add_issue(result, root, "cannot inspect permissions")
        return
    if not has_children:
        return

    paths = [root, *sorted(root.rglob("*"))]
    for path in paths:
        try:
            path_stat = path.lstat()
        except OSError:
            add_issue(result, relative_path(path, root), "cannot inspect permissions")
            continue
        display_path = relative_path(path, root)
        if path.is_symlink():
            add_issue(result, display_path, "unsafe permissions: symlink is not allowed")
        elif path_stat.st_mode & 0o077:
            add_issue(result, display_path, "unsafe permissions")


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
            add_issue(result, relative_path(path, root), "unexpected file name")
            continue
        if chapter_number in paths:
            add_issue(result, relative_path(path, root), "duplicate chapter number")
            continue
        paths[chapter_number] = path
    return paths


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
            add_issue(result, record_path, "source path must be relative")
            return None
        expected_name = f"chapter-{chapter_number:04d}.txt"
        if source_path.name != expected_name:
            add_issue(result, record_path, "source path does not name the assigned chapter")
            return None
        if context.repo_root is None:
            add_issue(result, record_path, "repository root is missing")
            return None
        resolved = (context.repo_root / source_path).resolve()
    elif context.novel_dir is not None:
        candidates = sorted(
            context.novel_dir.glob(f"*/chapter-{chapter_number:04d}.txt")
        )
        resolved = candidates[0].resolve() if candidates else None
        if resolved is None:
            add_issue(result, record_path, "original chapter is missing")
            return None
    else:
        add_issue(result, record_path, "novel directory is missing")
        return None

    if not resolved.is_file() or resolved.is_symlink():
        add_issue(result, record_path, "original chapter is missing")
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
        add_issue(result, record_path, "original chapter cannot be read")
        return

    context.source_texts[chapter_number] = source_text
    context.source_line_counts[chapter_number] = len(source_text.splitlines())
    paragraphs = [part for part in re.split(r"\n\s*\n", source_text) if part.strip()]
    context.source_paragraph_counts[chapter_number] = len(paragraphs)
    expected_hash, expected_line_count = record_source_metadata(record)
    if expected_hash is None:
        add_issue(result, record_path, "original chapter hash is missing")
    elif sha256_of(source_path) != expected_hash:
        add_issue(result, record_path, "source hash changed (changed original chapter)")
    if expected_line_count is not None and expected_line_count != len(source_text.splitlines()):
        add_issue(result, record_path, "changed original chapter line count")


def normalise_text(value: str) -> str:
    return " ".join(value.casefold().split())


def source_fragments(source_text: str) -> set[str]:
    """Return long source fragments for a no-copy check."""

    fragments: set[str] = set()
    for line in source_text.splitlines():
        fragment = normalise_text(line)
        if len(fragment) >= 12 and len(fragment.split()) >= 3:
            fragments.add(fragment)
    return fragments


def contains_source_prose(value: str, fragments: Iterable[str]) -> bool:
    normalised_value = normalise_text(value)
    return any(fragment in normalised_value for fragment in fragments if fragment)


def scan_for_source_prose(
    value: Any,
    fragments: Iterable[str],
    result: CheckResult,
    path: Path,
    key: str = "",
) -> None:
    if isinstance(value, dict):
        for child_key, child_value in value.items():
            child_key_name = str(child_key).casefold()
            if child_key_name in FORBIDDEN_PROSE_KEYS:
                if child_value not in (None, "", [], {}):
                    add_issue(result, path, "copied source prose (copied novel prose)")
                continue
            scan_for_source_prose(child_value, fragments, result, path, child_key_name)
        return
    if isinstance(value, list):
        for child_value in value:
            scan_for_source_prose(child_value, fragments, result, path, key)
        return
    if not isinstance(value, str):
        return
    if key in SKIPPED_PROSE_KEYS:
        return
    if contains_source_prose(value, fragments):
        add_issue(result, path, "copied source prose (copied novel prose)")


def parse_location(location: Any) -> tuple[str, int, int] | None:
    if isinstance(location, dict):
        line_start = location.get("line_start")
        line_end = location.get("line_end")
        if isinstance(line_start, int) and isinstance(line_end, int):
            return "line", line_start, line_end
        return None
    if not isinstance(location, str):
        return None
    line_match = re.fullmatch(r"lines?\s*:?\s*(\d+)(?:\s*-\s*(\d+))?", location.strip())
    if line_match:
        start = int(line_match.group(1))
        end = int(line_match.group(2) or line_match.group(1))
        return "line", start, end
    paragraph_match = re.fullmatch(r"paragraph\s+(\d+)", location.strip(), re.IGNORECASE)
    if paragraph_match:
        paragraph = int(paragraph_match.group(1))
        return "paragraph", paragraph, paragraph
    return None


def check_location(
    location_item: Any,
    current_chapter: int,
    context: NotebookContext,
    result: CheckResult,
    record_path: Path,
    no_support_message: str,
) -> None:
    if not isinstance(location_item, dict):
        add_issue(result, record_path, "chapter location does not exist")
        return
    location_chapter = location_item.get("chapter")
    parsed_location = parse_location(location_item.get("location"))
    if not isinstance(location_chapter, int) or location_chapter < 1:
        add_issue(result, record_path, no_support_message)
        return
    if location_chapter > current_chapter:
        add_issue(
            result,
            record_path,
            "evidence leaks knowledge from a later chapter (later chapter knowledge leaked backwards)",
        )
        return
    if parsed_location is None:
        add_issue(result, record_path, "chapter location does not exist")
        return
    if location_chapter not in context.source_line_counts:
        add_issue(result, record_path, "chapter location does not exist")
        return
    location_kind, start, end = parsed_location
    if location_kind == "line":
        limit = context.source_line_counts[location_chapter]
    else:
        limit = context.source_paragraph_counts[location_chapter]
    if start < 1 or start > end or end > limit:
        add_issue(result, record_path, "chapter location does not exist")


def check_evidence_list(
    evidence: Any,
    current_chapter: int,
    context: NotebookContext,
    result: CheckResult,
    record_path: Path,
    field_name: str,
) -> None:
    if not isinstance(evidence, list) or not evidence:
        add_issue(
            result,
            record_path,
            f"{field_name} has no supporting evidence (no supporting chapter)",
        )
        return
    for evidence_item in evidence:
        if isinstance(evidence_item, dict) and "location" in evidence_item:
            check_location(
                evidence_item,
                current_chapter,
                context,
                result,
                record_path,
                f"{field_name} has no supporting chapter",
            )
        else:
            add_issue(result, record_path, "chapter location does not exist")


def check_entry_support(
    entry: dict[str, Any],
    current_chapter: int,
    context: NotebookContext,
    record_path: Path,
    result: CheckResult,
) -> None:
    if "evidence" in entry:
        check_evidence_list(
            entry.get("evidence"),
            current_chapter,
            context,
            result,
            record_path,
            "statement",
        )
    else:
        chapters = entry.get("chapters")
        locations = entry.get("locations")
        if not isinstance(chapters, list) or not chapters:
            add_issue(result, record_path, "no supporting chapter")
        if not isinstance(locations, list) or not locations:
            add_issue(result, record_path, "no supporting chapter location")
        if isinstance(locations, list):
            for location_item in locations:
                check_location(
                    location_item,
                    current_chapter,
                    context,
                    result,
                    record_path,
                    "no supporting chapter",
                )


def check_corrections(
    entry: dict[str, Any],
    current_chapter: int,
    context: NotebookContext,
    record_path: Path,
    result: CheckResult,
) -> None:
    corrections = entry.get("later_corrections")
    if corrections is None:
        corrected = entry.get("corrected")
        if corrected is not None:
            corrections = [corrected]
    if corrections is None:
        return
    if not isinstance(corrections, list):
        corrections = [corrections]
    for correction in corrections:
        correction_chapter = correction.get("chapter") if isinstance(correction, dict) else correction
        if not isinstance(correction_chapter, int):
            add_issue(result, record_path, "correction chapter is invalid")
            continue
        if correction_chapter > current_chapter:
            add_issue(result, record_path, "later correction leaked backwards")
        if isinstance(correction, dict) and correction.get("evidence") is not None:
            check_evidence_list(
                correction.get("evidence"),
                current_chapter,
                context,
                result,
                record_path,
                "correction",
            )


def check_reader_contract(record: dict[str, Any], record_path: Path, result: CheckResult) -> None:
    readers = record.get("readers")
    if readers is None:
        return
    roles = {
        reader.get("role")
        for reader in readers
        if isinstance(reader, dict)
    } if isinstance(readers, list) else set()
    if roles != READER_ROLES or not isinstance(readers, list) or len(readers) != 3:
        add_issue(result, record_path, "reader roles are incomplete")
    if isinstance(readers, list):
        for reader in readers:
            if not isinstance(reader, dict):
                add_issue(result, record_path, "reader entry is malformed")
            elif reader.get("status") != "complete" or reader.get("independent") is not True:
                add_issue(result, record_path, "reader was not independently completed")

    reconciliation = record.get("reconciliation")
    if reconciliation is not None and (
        not isinstance(reconciliation, dict)
        or reconciliation.get("status") != "complete"
        or reconciliation.get("lead_reopened_source") is not True
    ):
        add_issue(result, record_path, "lead reconciliation is incomplete")
    review = record.get("review")
    if review is not None and (
        not isinstance(review, dict) or review.get("status") != "checked"
    ):
        add_issue(result, record_path, "independent review is incomplete")


def collect_entries(
    records: dict[int, tuple[Path, dict[str, Any]]],
    context: NotebookContext,
    result: CheckResult,
) -> None:
    for chapter_number, (record_path, record) in records.items():
        if "statements" in record:
            context.rich_records = True
        entries = record.get("statements", record.get("entries"))
        if not isinstance(entries, list):
            add_issue(result, record_path, "entries are missing")
            continue
        for entry in entries:
            if not isinstance(entry, dict):
                add_issue(result, record_path, "entry is malformed")
                continue
            entry_id = entry.get("id")
            if not isinstance(entry_id, str) or not entry_id.strip():
                add_issue(result, record_path, "entry id is missing")
                continue
            if entry_id in context.all_ids:
                add_issue(result, record_path, "duplicate id")
            context.entry_ids.add(entry_id)
            context.all_ids.add(entry_id)
            context.entries_by_id[entry_id] = entry


def collect_page_ids(root: Path, context: NotebookContext, result: CheckResult) -> None:
    """Collect explicit entity markers and legacy filename-based pages."""

    for entity_type, directory_name in PAGE_DIRS.items():
        directory = root / directory_name
        if not directory.is_dir():
            continue
        for path in sorted(directory.glob("*.md")):
            page_id = path.stem
            try:
                contents = path.read_text(encoding="utf-8")
            except (OSError, UnicodeError):
                add_issue(result, relative_path(path, root), "page cannot be read")
                continue
            explicit_ids = ENTITY_MARKER_PATTERN.findall(contents)
            if context.rich_records and not explicit_ids:
                add_issue(result, relative_path(path, root), "entity id marker is missing")
                continue
            ids = explicit_ids or [f"{entity_type}:{page_id}"]
            for entity_id in ids:
                if entity_id in context.all_ids:
                    add_issue(result, relative_path(path, root), "duplicate id")
                context.entity_ids.add(entity_id)
                context.all_ids.add(entity_id)


def check_entity_pages(root: Path, context: NotebookContext, result: CheckResult) -> None:
    for entry_id, entry in context.entries_by_id.items():
        if entry.get("kind") != "entity":
            continue
        entity_type = entry.get("entity_type")
        if entity_type not in ENTITY_TYPES:
            add_issue(result, "reading", "entity page type is invalid")
            continue
        page_path = root / PAGE_DIRS[entity_type] / f"{entry_id}.md"
        if not page_path.is_file():
            add_issue(result, relative_path(page_path, root), "entity page is missing")


def check_entries(
    records: dict[int, tuple[Path, dict[str, Any]]],
    context: NotebookContext,
    result: CheckResult,
) -> None:
    for chapter_number, (record_path, record) in records.items():
        check_reader_contract(record, record_path, result)
        entries = record.get("statements", record.get("entries"))
        if not isinstance(entries, list):
            continue
        seen_ids: set[str] = set()
        for entry in entries:
            if not isinstance(entry, dict):
                continue
            entry_id = entry.get("id")
            if isinstance(entry_id, str):
                if entry_id in seen_ids:
                    add_issue(result, record_path, "duplicate id")
                seen_ids.add(entry_id)
            kind = entry.get("kind")
            is_rich_record = "evidence" in entry
            if is_rich_record:
                if entry.get("kind") not in STATUS_LABELS:
                    add_issue(result, record_path, "statement kind is invalid")
            elif kind not in LEGACY_ENTRY_KINDS:
                add_issue(result, record_path, "entry kind is invalid")
            status = entry.get("status")
            if status is not None and status not in STATUS_LABELS:
                add_issue(result, record_path, "entry status is invalid")
            if not isinstance(entry.get("statement"), str) or not entry["statement"].strip():
                add_issue(result, record_path, "entry statement is missing")
            check_entry_support(entry, chapter_number, context, record_path, result)
            links = entry.get("links", [])
            if not isinstance(links, list) or not all(isinstance(link, str) for link in links):
                add_issue(result, record_path, "entry links are malformed")
            else:
                for link in links:
                    if link not in context.all_ids:
                        add_issue(result, record_path, "unknown linked id (broken link)")
            first_known = entry.get("first_known_chapter", entry.get("first_known"))
            if not isinstance(first_known, int) or not 1 <= first_known <= chapter_number:
                add_issue(result, record_path, "first-known chapter is invalid")
            check_corrections(entry, chapter_number, context, record_path, result)


def check_notes(
    root: Path,
    note_paths: dict[int, Path],
    records: dict[int, tuple[Path, dict[str, Any]]],
    result: CheckResult,
) -> None:
    for chapter_number in records:
        note_path = note_paths.get(chapter_number)
        if note_path is None:
            add_issue(
                result,
                root / "chapters" / f"{chapter_number:04d}.md",
                f"missing chapter {chapter_number} note",
            )
            continue
        try:
            note_contents = note_path.read_text(encoding="utf-8")
        except (OSError, UnicodeError):
            add_issue(result, relative_path(note_path, root), "chapter note cannot be read")
            continue
        heading_numbers = {
            int(match.group(1))
            for line in note_contents.splitlines()
            if (match := CHAPTER_HEADING_PATTERN.fullmatch(line)) is not None
        }
        if chapter_number not in heading_numbers:
            add_issue(result, relative_path(note_path, root), "chapter note heading is missing")

        record = records[chapter_number][1]
        record_marker = NOTE_RECORD_MARKER_PATTERN.findall(note_contents)
        if record_marker and f"chapter-{chapter_number:04d}" not in record_marker:
            add_issue(result, relative_path(note_path, root), "notebook record marker is wrong")
        note_statement_ids = set(STATEMENT_MARKER_PATTERN.findall(note_contents))
        if note_statement_ids:
            entries = record.get("statements", record.get("entries"))
            record_ids = {
                entry.get("id")
                for entry in entries
                if isinstance(entry, dict) and isinstance(entry.get("id"), str)
            } if isinstance(entries, list) else set()
            if note_statement_ids != record_ids:
                add_issue(result, relative_path(note_path, root), "statement ids do not match JSON")


def check_connections(
    root: Path,
    context: NotebookContext,
    result: CheckResult,
) -> int:
    connection_path = root / "connections.jsonl"
    if not connection_path.is_file():
        return 0
    try:
        lines = connection_path.read_text(encoding="utf-8").splitlines()
    except (OSError, UnicodeError):
        add_issue(result, "connections.jsonl", "connection file cannot be read")
        return 0
    connections: list[tuple[int, dict[str, Any]]] = []
    for line_number, line in enumerate(lines, start=1):
        if not line.strip():
            continue
        try:
            value = json.loads(line)
        except json.JSONDecodeError:
            add_issue(result, f"connections.jsonl:{line_number}", "invalid JSON")
            continue
        if not isinstance(value, dict):
            add_issue(result, f"connections.jsonl:{line_number}", "connection is malformed")
            continue
        connections.append((line_number, value))
        connection_id = value.get("id")
        if not isinstance(connection_id, str) or not connection_id.strip():
            add_issue(result, f"connections.jsonl:{line_number}", "connection id is missing")
            continue
        if connection_id in context.all_ids:
            add_issue(result, f"connections.jsonl:{line_number}", "duplicate id")
        context.connection_ids.add(connection_id)
        context.all_ids.add(connection_id)

    for line_number, connection in connections:
        source = connection.get("source")
        target = connection.get("target")
        if not isinstance(source, str) or source not in context.all_ids:
            add_issue(result, f"connections.jsonl:{line_number}", "unknown connection source")
        if not isinstance(target, str) or target not in context.all_ids:
            add_issue(result, f"connections.jsonl:{line_number}", "unknown connection target")
        predicate = connection.get("predicate", connection.get("relation"))
        if not isinstance(predicate, str) or not predicate.strip():
            add_issue(result, f"connections.jsonl:{line_number}", "connection relation is missing")
        chapters = connection.get("chapters", connection.get("evidence"))
        if chapters is not None and isinstance(chapters, list):
            for chapter_item in chapters:
                if isinstance(chapter_item, dict):
                    location = chapter_item.get("chapter")
                else:
                    location = chapter_item
                if not isinstance(location, int) or not 1 <= location <= context.effective_through:
                    add_issue(result, f"connections.jsonl:{line_number}", "connection chapter is invalid")
        first_known = connection.get("first_known_chapter", connection.get("first_known"))
        if first_known is not None and (
            not isinstance(first_known, int)
            or not 1 <= first_known <= context.effective_through
        ):
            add_issue(result, f"connections.jsonl:{line_number}", "connection first-known chapter is invalid")
    return len(connections)


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
        add_issue(result, "reading-progress.json", "progress file is missing")
        return 0, False
    progress = read_json(progress_path, result)
    if progress is None:
        return 0, False
    last_checked, complete = progress_values(progress)
    if last_checked is None or last_checked < 0:
        add_issue(result, progress_path, "last checked chapter is invalid")
        return 0, complete
    effective_through = min(last_checked, requested_through)
    if progress.get("through") is not None and progress.get("through") != requested_through:
        add_issue(result, progress_path, "progress range does not match requested range")
    if complete and requested_through < 100:
        add_issue(result, progress_path, "progress completion flag is incorrect")
    if complete and last_checked < requested_through:
        add_issue(result, progress_path, "last checked chapter is out of order")
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
        add_issue(result, "reading", f"missing chapter {chapter_number}")
    for chapter_number in sorted(actual - expected):
        if chapter_number > requested_through:
            add_issue(result, "reading", f"chapter {chapter_number} is outside requested range")
        else:
            add_issue(result, "reading", f"chapter {chapter_number} is out of order")
    note_chapters = set(note_paths)
    for chapter_number in sorted(note_chapters - actual):
        add_issue(result, relative_path(note_paths[chapter_number], note_paths[chapter_number].parent.parent), "chapter note is out of order")


def git_index_paths(repo_root: Path) -> list[str]:
    try:
        completed = subprocess.run(
            ["git", "-C", str(repo_root), "ls-files", "--cached", "-z"],
            capture_output=True,
            check=False,
        )
    except OSError:
        return []
    if completed.returncode != 0:
        return []
    return [item for item in completed.stdout.decode("utf-8").split("\0") if item]


def check_git_exposure(context: NotebookContext, result: CheckResult) -> None:
    if context.repo_root is None:
        return
    indexed_paths = git_index_paths(context.repo_root)
    notebook_relative = relative_path(context.root, context.repo_root).as_posix().rstrip("/")
    for indexed_path in indexed_paths:
        normalised = indexed_path.replace(os.sep, "/")
        if normalised == notebook_relative or normalised.startswith(f"{notebook_relative}/"):
            add_issue(result, indexed_path, "private knowledge tracked by Git")
        elif normalised.startswith("novels/"):
            add_issue(result, indexed_path, "novel text tracked by git")


def check_notebook(
    notebook_root: Path | str,
    through: int = 100,
    novel_dir: Path | str | None = None,
) -> CheckResult:
    """Check one private notebook and return counts plus non-sensitive issues."""

    root = Path(notebook_root).resolve()
    result = CheckResult()
    if not root.is_dir():
        add_issue(result, root, "notebook root is missing")
        return result
    if not isinstance(through, int) or not 1 <= through <= 500:
        add_issue(result, root, "requested range must be between chapters 1 and 500")
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
    check_private_permissions(root, result)
    reading_paths = collect_chapter_paths(root, "reading", CHAPTER_JSON_PATTERN, result)
    note_paths = collect_chapter_paths(root, "chapters", CHAPTER_NOTE_PATTERN, result)
    if not reading_paths and not (root / "reading-progress.json").exists():
        add_issue(result, root, "notebook is empty")

    records: dict[int, tuple[Path, dict[str, Any]]] = {}
    for chapter_number, record_path in sorted(reading_paths.items()):
        record = read_json(record_path, result)
        if record is None:
            continue
        if record.get("chapter") != chapter_number:
            add_issue(result, relative_path(record_path, root), "chapter does not match file")
        records[chapter_number] = (record_path, record)

    effective_through, complete = check_progress(root, records, through, result)
    context.effective_through = effective_through
    if records and effective_through == 0:
        effective_through = max(records)
        context.effective_through = effective_through

    for chapter_number, (record_path, record) in sorted(records.items()):
        if chapter_number <= through:
            check_original_chapter(context, chapter_number, record, record_path, result)

    collect_entries(records, context, result)
    collect_page_ids(root, context, result)
    check_sequence(records, note_paths, effective_through, through, result)
    check_entries(records, context, result)
    check_entity_pages(root, context, result)
    check_notes(root, note_paths, records, result)
    connection_count = check_connections(root, context, result)

    if complete or effective_through == 100:
        for ledger_name in LEDGER_FILES:
            if not (root / ledger_name).is_file():
                add_issue(result, ledger_name, "ledger file is missing")

    fragments_by_chapter = {
        chapter_number: source_fragments(source_text)
        for chapter_number, source_text in context.source_texts.items()
    }
    for chapter_number, (record_path, record) in records.items():
        fragments = fragments_by_chapter.get(chapter_number, set())
        scan_for_source_prose(record, fragments, result, record_path)
    connection_path = root / "connections.jsonl"
    if connection_path.is_file():
        try:
            connection_text = connection_path.read_text(encoding="utf-8")
        except (OSError, UnicodeError):
            connection_text = ""
        all_fragments = {
            fragment
            for fragments in fragments_by_chapter.values()
            for fragment in fragments
        }
        if contains_source_prose(connection_text, all_fragments):
            add_issue(result, "connections.jsonl", "copied source prose (copied novel prose)")

    check_git_exposure(context, result)
    result.counts = {
        "chapters": len(records),
        "entries": len(context.entry_ids),
        "entities": len(context.entity_ids),
        "connections": connection_count,
    }
    return result


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, required=True, help="private notebook root")
    parser.add_argument(
        "--through",
        type=int,
        required=True,
        help="maximum chapter to check (1-100)",
    )
    parser.add_argument(
        "--novel-dir",
        type=Path,
        help="private novel directory, useful for synthetic tests",
    )
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    result = check_notebook(args.root, through=args.through, novel_dir=args.novel_dir)
    prose_issue = any("copied source prose" in issue for issue in result.issues)
    if result.ok:
        print("Notebook check: PASS")
    else:
        print(f"Notebook check: FAIL ({len(result.issues)} problems)")
        for issue in result.issues:
            if prose_issue and "copied source prose" not in issue:
                continue
            if prose_issue:
                print("- copied source prose detected")
                break
            print(f"- {issue}")
    if not prose_issue:
        print(f"chapters: {result.counts.get('chapters', 0)}")
        print(f"entries: {result.counts.get('entries', 0)}")
        print(f"connections: {result.counts.get('connections', 0)}")
        print(
            "counts: "
            f"chapters={result.counts.get('chapters', 0)} "
            f"statements={result.counts.get('entries', 0)} "
            f"connections={result.counts.get('connections', 0)}"
        )
    print(f"problems: {len(result.issues)}")
    return 0 if result.ok else 1


if __name__ == "__main__":
    sys.exit(main())
