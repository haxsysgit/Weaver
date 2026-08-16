"""Entity pages: markers, aliases, link resolution, missing pages, freshness."""

from __future__ import annotations

from pathlib import Path
from typing import Any

from .constants import ALIAS_MARKER_PATTERN, ENTITY_MARKER_PATTERN, ENTITY_TYPES, PAGE_DIRS
from .context import NotebookContext, relative_path
from .report import CheckResult

# A page with fewer than this many statement lines is "empty" (stale).
MIN_PAGE_STATEMENTS = 3


def collect_page_ids(root: Path, context: NotebookContext, result: CheckResult) -> None:
    """Collect explicit entity markers and legacy filename-based pages.

    Alias markers (<!-- alias: X -->) declare other names for the same
    entity; the canonical id is the page's entity-id marker (or its
    filename-derived id). Every alias must be unambiguous: it may not
    duplicate the page's own id, collide with a real entity id, or be
    claimed by two different pages. Page ids are collected in a first
    pass so an alias is validated against the complete id universe.
    """

    pages: list[tuple[Path, list[str], list[str]]] = []
    for entity_type, directory_name in PAGE_DIRS.items():
        directory = root / directory_name
        if not directory.is_dir():
            continue
        for path in sorted(directory.glob("*.md")):
            page_id = path.stem
            try:
                contents = path.read_text(encoding="utf-8")
            except (OSError, UnicodeError):
                result.add(relative_path(path, root), "page cannot be read")
                continue
            explicit_ids = ENTITY_MARKER_PATTERN.findall(contents)
            if context.rich_records and not explicit_ids:
                result.add(relative_path(path, root), "entity id marker is missing")
                continue
            ids = explicit_ids or [f"{entity_type}:{page_id}"]
            pages.append((path, ids, ALIAS_MARKER_PATTERN.findall(contents)))
            for entity_id in ids:
                if entity_id in context.all_ids:
                    result.add(relative_path(path, root), "duplicate id")
                context.entity_ids.add(entity_id)
                context.all_ids.add(entity_id)
    for path, ids, aliases in pages:
        canonical = ids[0]
        for alias in aliases:
            if alias == canonical or alias in ids:
                result.add(
                    relative_path(path, root), "alias duplicates the page's own id"
                )
                continue
            if alias in context.aliases:
                result.add(
                    relative_path(path, root),
                    f"alias {alias} is claimed by more than one page",
                )
                continue
            if alias in context.all_ids:
                result.add(
                    relative_path(path, root),
                    f"alias {alias} collides with an existing entity id",
                )
                continue
            context.aliases[alias] = canonical


def check_entity_pages(root: Path, context: NotebookContext, result: CheckResult) -> None:
    for entry_id, entry in context.entries_by_id.items():
        if entry.get("kind") != "entity":
            continue
        entity_type = entry.get("entity_type")
        if entity_type not in ENTITY_TYPES:
            result.add("reading", "entity page type is invalid")
            continue
        page_path = root / PAGE_DIRS[entity_type] / f"{entry_id}.md"
        if not page_path.is_file():
            result.add(relative_path(page_path, root), "entity page is missing")


def check_page_freshness(root: Path, context: NotebookContext, result: CheckResult) -> None:
    """Freshness checks the shape checker never ran.

    - Empty pages: an entity page with fewer than MIN_PAGE_STATEMENTS
      statement lines is stale (the Nether 282B case).
    - Missing pages for connection targets: a connections target with
      no page and no alias is a dangling link.
    """
    for entity_type, directory_name in PAGE_DIRS.items():
        directory = root / directory_name
        if not directory.is_dir():
            continue
        for path in sorted(directory.glob("*.md")):
            try:
                contents = path.read_text(encoding="utf-8")
            except (OSError, UnicodeError):
                continue
            statement_lines = [
                line for line in contents.splitlines() if line.strip().startswith("- ch")
            ]
            if len(statement_lines) < MIN_PAGE_STATEMENTS:
                result.warn(
                    relative_path(path, root),
                    f"page looks empty or stale ({len(statement_lines)} statement lines)",
                )
