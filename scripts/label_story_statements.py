"""Candidate flagging and validation for the spoiler-labels file (Plan 15 slice 4).

The labels live in <notebook>/spoiler-labels.json, a map of
{statement_id: label} where the label is one of the judge's heavy labels
(reveal, twist, death, arc_payoff). Statements absent from the map are
safe_lore by default, so the file only lists what needs protection.

This script is machinery: it never decides a label. `--candidates`
prints statements that pattern-match heavy-label vocabulary for the
curator (the reading-pass owner) to review with story knowledge, with
targeted spot-checks opening evidence lines for ambiguous cases.
`--check` validates an existing labels file (every id must exist in the
records, every label must be one the judge understands).

Usage:
  uv run python scripts/label_story_statements.py --root PATH --candidates
  uv run python scripts/label_story_statements.py --root PATH --check
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

HEAVY_LABELS = ("reveal", "twist", "death", "arc_payoff")

PATTERNS: dict[str, re.Pattern] = {
    "death": re.compile(
        r"\b(killed|slain|slew|died|death|dead|murdered|perished|executed|bloodbath)\b",
        re.IGNORECASE,
    ),
    "reveal": re.compile(
        r"\b(revealed?|was actually|is actually|was really|in truth|real identity|"
        r"secret identity|turned out|unmasked|confessed|true name)\b",
        re.IGNORECASE,
    ),
    "twist": re.compile(
        r"\b(betrayed|betrayal|was a trap|tricked|deceived|deception|double agent|spy)\b",
        re.IGNORECASE,
    ),
    "arc_payoff": re.compile(
        r"\b(the siege|the spire|final battle|ascended|broke the|the chains|survived|"
        r"escaped|the gate opened|fell)\b",
        re.IGNORECASE,
    ),
}


def statement_chapter(statement: dict) -> int:
    """Statements carry no chapter field; the id encodes it."""
    match = re.match(r"statement:chapter-(\d+):", statement.get("id", ""))
    return int(match.group(1)) if match else 0


def load_statements(root: Path) -> list[dict]:
    statements: list[dict] = []
    for path in sorted((root / "reading").glob("*.json")):
        record = json.loads(path.read_text(encoding="utf-8"))
        for statement in record.get("statements", []):
            statement.setdefault("chapter", statement_chapter(statement))
            statements.append(statement)
    return statements


def flag_statements(statements: list[dict]) -> list[tuple[str, dict]]:
    """Return (label, statement) pairs for every pattern match."""
    flagged: list[tuple[str, dict]] = []
    for statement in statements:
        text = statement.get("statement", "")
        for label, pattern in PATTERNS.items():
            if pattern.search(text):
                flagged.append((label, statement))
    return flagged


def load_labels(root: Path) -> dict:
    path = root / "spoiler-labels.json"
    if not path.exists():
        return {}
    return json.loads(path.read_text(encoding="utf-8"))


def validate_labels(root: Path, labels: dict) -> list[str]:
    """Return a list of problems; empty means the labels file is sound."""
    problems: list[str] = []
    known = {statement["id"] for statement in load_statements(root)}
    for statement_id, label in sorted(labels.items()):
        if statement_id not in known:
            problems.append(f"unknown statement id: {statement_id}")
        if label not in HEAVY_LABELS:
            problems.append(f"invalid label {label!r} for {statement_id}")
    return problems


def load_beats(root: Path) -> list[dict]:
    path = root / "spoiler-beats.json"
    if not path.exists():
        return []
    data = json.loads(path.read_text(encoding="utf-8"))
    return data.get("beats", []) if isinstance(data, dict) else []


def validate_beats(root: Path, beats: list[dict]) -> list[str]:
    """Return a list of problems; empty means the beats file is sound."""
    problems: list[str] = []
    known = {statement["id"] for statement in load_statements(root)}
    seen: set[str] = set()
    for beat in beats:
        beat_id = beat.get("id", "")
        if beat_id in seen:
            problems.append(f"duplicate beat id: {beat_id}")
        seen.add(beat_id)
        if beat.get("label") not in HEAVY_LABELS:
            problems.append(f"invalid beat label {beat.get('label')!r} for {beat_id}")
        start, end = beat.get("chapter_start"), beat.get("chapter_end")
        if not (isinstance(start, int) and isinstance(end, int) and start <= end):
            problems.append(f"invalid beat chapter range {start}-{end} for {beat_id}")
        if not isinstance(beat.get("volume"), int) or not 1 <= beat["volume"] <= 12:
            problems.append(f"invalid beat volume {beat.get('volume')!r} for {beat_id}")
        for anchor in beat.get("anchors", []):
            if anchor not in known:
                problems.append(f"unknown beat anchor {anchor!r} for {beat_id}")
    return problems


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=Path(".weaver/knowledge/shadow-slave"))
    parser.add_argument("--candidates", action="store_true", help="print pattern-flagged statements for review")
    parser.add_argument("--check", action="store_true", help="validate spoiler-labels.json")
    args = parser.parse_args(argv)

    if args.candidates:
        flagged = flag_statements(load_statements(args.root))
        print(f"{len(flagged)} candidate flags over {len(load_statements(args.root))} statements\n")
        for label, statement in flagged:
            text = statement.get("statement", "")
            print(f"[{label}] {statement['id']} ch{statement.get('chapter')} "
                  f"({statement.get('kind')}) {text[:200]}")
        return 0

    if args.check:
        problems: list[str] = []
        labels = load_labels(args.root)
        problems.extend(
            f"labels: {p}" for p in validate_labels(args.root, labels)
        )
        beats = load_beats(args.root)
        problems.extend(f"beats: {p}" for p in validate_beats(args.root, beats))
        if problems:
            print(f"spoiler files: {len(problems)} problem(s)")
            for problem in problems[:50]:
                print(" -", problem)
            return 1
        print(
            f"spoiler-labels.json: {len(labels)} statements, "
            f"spoiler-beats.json: {len(beats)} beats, all valid"
        )
        return 0

    parser.print_help()
    return 2


if __name__ == "__main__":
    sys.exit(main())
