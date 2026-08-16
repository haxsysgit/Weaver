"""Connections graph validity and freshness."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from .context import NotebookContext, relative_path
from .report import CheckResult


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
        result.add("connections.jsonl", "connection file cannot be read")
        return 0
    connections: list[tuple[int, dict[str, Any]]] = []
    for line_number, line in enumerate(lines, start=1):
        if not line.strip():
            result.add(f"connections.jsonl:{line_number}", "invalid JSON")
            continue
        try:
            value = json.loads(line)
        except json.JSONDecodeError:
            result.add(f"connections.jsonl:{line_number}", "invalid JSON")
            continue
        if not isinstance(value, dict):
            result.add(f"connections.jsonl:{line_number}", "connection is malformed")
            continue
        connections.append((line_number, value))
        connection_id = value.get("id")
        if not isinstance(connection_id, str) or not connection_id.strip():
            result.add(f"connections.jsonl:{line_number}", "connection id is missing")
            continue
        if connection_id in context.all_ids:
            result.add(f"connections.jsonl:{line_number}", "duplicate id")
        context.connection_ids.add(connection_id)
        context.all_ids.add(connection_id)

    for line_number, connection in connections:
        source = connection.get("source")
        target = connection.get("target")
        if not isinstance(source, str) or (
            source not in context.all_ids and source not in context.aliases
        ):
            result.add(f"connections.jsonl:{line_number}", "unknown connection source")
        if not isinstance(target, str) or (
            target not in context.all_ids and target not in context.aliases
        ):
            result.add(f"connections.jsonl:{line_number}", "unknown connection target")
        predicate = connection.get("predicate", connection.get("relation"))
        if not isinstance(predicate, str) or not predicate.strip():
            result.add(f"connections.jsonl:{line_number}", "connection relation is missing")
        chapters = connection.get("chapters", connection.get("evidence"))
        if chapters is not None and isinstance(chapters, list):
            for chapter_item in chapters:
                if isinstance(chapter_item, dict):
                    location = chapter_item.get("chapter")
                    location_data = chapter_item.get("location")
                    if isinstance(location_data, dict):
                        line_start = location_data.get("line_start")
                        line_end = location_data.get("line_end")
                        if line_start == 1 and not line_end:
                            result.add(
                                f"connections.jsonl:{line_number}",
                                "line 1 is the chapter heading, not evidence",
                            )
                else:
                    location = chapter_item
                if not isinstance(location, int) or not 1 <= location <= context.effective_through:
                    result.add(f"connections.jsonl:{line_number}", "connection chapter is invalid")
        first_known = connection.get("first_known_chapter", connection.get("first_known"))
        if first_known is not None and (
            not isinstance(first_known, int)
            or not 1 <= first_known <= context.effective_through
        ):
            result.add(f"connections.jsonl:{line_number}", "connection first-known chapter is invalid")
    return len(connections)


def check_connections_freshness(
    root: Path,
    context: NotebookContext,
    result: CheckResult,
) -> None:
    """The staleness check the shape checker never ran: is the graph
    current with the reading records?

    The checker that PASSed while connections.jsonl was stuck at 3148
    (reading at 3160) is the exact failure this catches.
    """
    connection_path = root / "connections.jsonl"
    if not connection_path.is_file():
        return
    max_connection_chapter = 0
    try:
        lines = connection_path.read_text(encoding="utf-8").splitlines()
    except (OSError, UnicodeError):
        return
    for line in lines:
        if not line.strip():
            continue
        try:
            value = json.loads(line)
        except json.JSONDecodeError:
            continue
        if not isinstance(value, dict):
            continue
        first_known = value.get("first_known_chapter", value.get("first_known"))
        if isinstance(first_known, int):
            max_connection_chapter = max(max_connection_chapter, first_known)
    if max_connection_chapter == 0:
        return
    max_reading_chapter = max(context.records) if context.records else 0
    if max_reading_chapter and max_connection_chapter < max_reading_chapter:
        result.warn(
            "connections.jsonl",
            f"graph is stale: max chapter {max_connection_chapter}, "
            f"reading records reach {max_reading_chapter}",
        )
