"""Copied-prose scan: no verbatim novel text may live in the notebook."""

from __future__ import annotations


from pathlib import Path
from typing import Any, Iterable

from .constants import FORBIDDEN_PROSE_KEYS, SKIPPED_PROSE_KEYS
from .report import CheckResult


def normalise_text(value: str) -> str:
    return " ".join(value.casefold().split())


def source_fragments(source_text: str) -> set[str]:
    """Return long source fragments for a no-copy check.

    Threshold: >= 40 chars and >= 6 words. The old 12-char/3-word
    rule caught common phrases like 'except for sunny and his
    shadows.' (a genuine false positive found during the Plan 019
    slice 8 review). A full copied line is at least 6 words and 40
    chars, and the test contract (a 42-char/7-word synthetic line
    must be caught) still holds.
    """

    fragments: set[str] = set()
    for line in source_text.splitlines():
        fragment = normalise_text(line)
        if len(fragment) >= 40 and len(fragment.split()) >= 6:
            fragments.add(fragment)
    return fragments


def contains_source_prose(value: str, fragments: Iterable[str]) -> bool:
    if not fragments:
        return False
    normalised_value = normalise_text(value)
    # Plain substring loop is correct and fast when the fragment set
    # is per-chapter (~100 fragments, measured <1ms per call). The
    # regex-alternation alternative is NOT used: compiling ~50-90 long
    # alternations takes 50-170ms each (4.8s for 100 chapters) and the
    # old any()-over-union was slow only because it scanned the whole
    # connections file against a 10k-fragment union. Keep fragment
    # sets per-chapter and this is O(chapter fragments) per call.
    return any(fragment in normalised_value for fragment in fragments)


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
                    result.add(path, "copied source prose (copied novel prose)")
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
        result.add(path, "copied source prose (copied novel prose)")
