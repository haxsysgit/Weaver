"""Shared constants and patterns for notebook validation."""

from __future__ import annotations

import re

MAX_CHAPTER = 3200

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
ALIAS_MARKER_PATTERN = re.compile(r"<!--\s*alias:\s*([^<\s]+(?:\s+[^<\s]+)*)\s*-->")
STATEMENT_MARKER_PATTERN = re.compile(r"<!--\s*statement-id:\s*([^\s]+)\s*-->")
NOTE_RECORD_MARKER_PATTERN = re.compile(r"<!--\s*notebook-record:\s*([^\s]+)\s*-->")
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
