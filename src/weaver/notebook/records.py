"""Reading-record schema contract: kinds, evidence, links, corrections."""

from __future__ import annotations

import re
from pathlib import Path
from typing import Any

from .constants import READER_ROLES, STATUS_LABELS, LEGACY_ENTRY_KINDS
from .context import NotebookContext
from .report import CheckResult


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
        result.add(record_path, "chapter location does not exist")
        return
    location_chapter = location_item.get("chapter")
    parsed_location = parse_location(location_item.get("location"))
    if not isinstance(location_chapter, int) or location_chapter < 1:
        result.add(record_path, no_support_message)
        return
    if location_chapter > current_chapter:
        result.add(
            record_path,
            "evidence leaks knowledge from a later chapter (later chapter knowledge leaked backwards)",
        )
        return
    if parsed_location is None:
        result.add(record_path, "chapter location does not exist")
        return
    if location_chapter not in context.source_line_counts:
        result.add(record_path, "chapter location does not exist")
        return
    location_kind, start, end = parsed_location
    if location_kind == "line":
        limit = context.source_line_counts[location_chapter]
    else:
        limit = context.source_paragraph_counts[location_chapter]
    if start < 1 or start > end or end > limit:
        result.add(record_path, "chapter location does not exist")
        return
    if location_kind == "line" and start == 1:
        # Line 1 of every chapter file is the chapter heading, never story
        # text, so it can never be evidence for a statement.
        result.add(record_path, "line 1 is the chapter heading, not evidence")


def check_evidence_list(
    evidence: Any,
    current_chapter: int,
    context: NotebookContext,
    result: CheckResult,
    record_path: Path,
    field_name: str,
) -> None:
    if not isinstance(evidence, list) or not evidence:
        result.add(
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
            result.add(record_path, "chapter location does not exist")


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
            result.add(record_path, "no supporting chapter")
        if not isinstance(locations, list) or not locations:
            result.add(record_path, "no supporting chapter location")
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
            result.add(record_path, "correction chapter is invalid")
            continue
        if correction_chapter > current_chapter:
            result.add(record_path, "later correction leaked backwards")
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
        result.add(record_path, "reader roles are incomplete")
    if isinstance(readers, list):
        for reader in readers:
            if not isinstance(reader, dict):
                result.add(record_path, "reader entry is malformed")
            elif reader.get("status") != "complete" or reader.get("independent") is not True:
                result.add(record_path, "reader was not independently completed")

    reconciliation = record.get("reconciliation")
    if reconciliation is not None and (
        not isinstance(reconciliation, dict)
        or reconciliation.get("status") != "complete"
        or reconciliation.get("lead_reopened_source") is not True
    ):
        result.add(record_path, "lead reconciliation is incomplete")
    review = record.get("review")
    if review is not None and (
        not isinstance(review, dict) or review.get("status") != "checked"
    ):
        result.add(record_path, "independent review is incomplete")


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
            result.add(record_path, "entries are missing")
            continue
        for entry in entries:
            if not isinstance(entry, dict):
                result.add(record_path, "entry is malformed")
                continue
            entry_id = entry.get("id")
            if not isinstance(entry_id, str) or not entry_id.strip():
                result.add(record_path, "entry id is missing")
                continue
            if entry_id in context.all_ids:
                result.add(record_path, "duplicate id")
            context.entry_ids.add(entry_id)
            context.all_ids.add(entry_id)
            context.entries_by_id[entry_id] = entry


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
                    result.add(record_path, "duplicate id")
                seen_ids.add(entry_id)
            kind = entry.get("kind")
            is_rich_record = "evidence" in entry
            if is_rich_record:
                if entry.get("kind") not in STATUS_LABELS:
                    result.add(record_path, "statement kind is invalid")
            elif kind not in LEGACY_ENTRY_KINDS:
                result.add(record_path, "entry kind is invalid")
            status = entry.get("status")
            if status is not None and status not in STATUS_LABELS:
                result.add(record_path, "entry status is invalid")
            if not isinstance(entry.get("statement"), str) or not entry["statement"].strip():
                result.add(record_path, "entry statement is missing")
            check_entry_support(entry, chapter_number, context, record_path, result)
            links = entry.get("links", [])
            if not isinstance(links, list) or not all(isinstance(link, str) for link in links):
                result.add(record_path, "entry links are malformed")
            else:
                for link in links:
                    if link not in context.all_ids and link not in context.aliases:
                        result.add(record_path, "unknown linked id (broken link)")
            first_known = entry.get("first_known_chapter", entry.get("first_known"))
            if not isinstance(first_known, int) or not 1 <= first_known <= chapter_number:
                result.add(record_path, "first-known chapter is invalid")
            check_corrections(entry, chapter_number, context, record_path, result)
