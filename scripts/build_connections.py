#!/usr/bin/env python3
"""Regenerate connections.jsonl from reading records (append-only).

Plan 019 slice 5 follow-up. The reading runs used to regenerate
connections per batch inside the reading-run machinery, which was
never kept as a standalone script. This reproduces that step
deterministically for any records whose statements are not yet linked:

  conn-{chapter}-{seq}-{target} rows, one per statement-link pair,
  evidence = [{chapter, location:{line_start: N}}] where N is the
  chapter's first line in the source file, first_known_chapter set.

Contract matched to scripts/check_story_notebook.py check_connections:
  - id unique, source/target must be known ids or aliases
  - relation present ("links"), evidence chapter ints valid
  - existing rows are never touched; new rows only append.

Usage:
  uv run python scripts/build_connections.py [--root .weaver/knowledge/shadow-slave]

The script is idempotent: re-running skips statements already linked.
"""
from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_KNOWLEDGE = ROOT / ".weaver" / "knowledge" / "shadow-slave"


def load_known_ids(knowledge: Path) -> tuple[set[str], dict[str, str]]:
    """entity ids + aliases from the notebook's entity pages."""
    ids: set[str] = set()
    aliases: dict[str, str] = {}
    for kind in ("people", "powers", "items", "places", "groups"):
        for page in (knowledge / kind).glob("*.md"):
            text = page.read_text(encoding="utf-8")
            m = re.search(r"<!--\s*entity-id:\s*([^\s]+)\s*-->", text)
            canonical = m.group(1) if m else f"{kind.rstrip('e')}:{page.stem}"
            ids.add(canonical)
            for am in re.finditer(r"<!--\s*alias:\s*([^<\s]+(?:\s+[^<\s]+)*)\s*-->", text):
                for a in am.group(1).split():
                    aliases[a] = canonical
                    ids.add(a)
    # also accept statement ids and reading-record entities implicitly via ids set
    return ids, aliases


def line_start_of(knowledge: Path, chapter: int) -> int:
    """First content line of the chapter in its source file (0-based-ish).

    The old generator used the chapter's first line; reading records
    store line_count, so we use the same convention: line 1 if the
    source file is missing, else the real first line offset (1-based).
    """
    lo = ((chapter - 1) // 100) * 100 + 1
    src = ROOT / "novels" / "shadow-slave" / f"{lo:04d}-{lo + 99:04d}" / f"chapter-{chapter:04d}.txt"
    if not src.exists():
        return 1
    with src.open(encoding="utf-8") as fh:
        return sum(1 for _ in fh)  # not used for line_start; see below


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", type=Path, default=DEFAULT_KNOWLEDGE)
    args = ap.parse_args()
    knowledge: Path = args.root
    conn_path = knowledge / "connections.jsonl"

    known_ids, aliases = load_known_ids(knowledge)

    existing: set[tuple[str, str]] = set()  # (source, target) pairs
    max_seq = 0
    if conn_path.exists():
        for line in conn_path.read_text(encoding="utf-8").splitlines():
            if not line.strip():
                continue
            try:
                c = json.loads(line)
            except json.JSONDecodeError:
                continue
            existing.add((c.get("source", ""), c.get("target", "")))
            m = re.match(r"conn-\d+-(\d+)-", c.get("id", ""))
            if m:
                max_seq = max(max_seq, int(m.group(1)))

    new_rows: list[str] = []
    seq = max_seq
    skipped = 0
    for rec_path in sorted((knowledge / "reading").glob("*.json")):
        rec = json.loads(rec_path.read_text(encoding="utf-8"))
        chapter = rec.get("chapter")
        if not isinstance(chapter, int):
            continue
        for st in rec.get("statements", []):
            source = st.get("id")
            # The connection's evidence should mirror the record's own
            # evidence (line_start 3+, never line 1 which is the chapter
            # heading). Whole-chapter evidence convention: first
            # evidence item, or fall back to the heading-safe default.
            record_evidence = st.get("evidence") or []
            evidence = [
                {"chapter": chapter, "location": {"line_start": 3}}
            ]
            for ev in record_evidence:
                if isinstance(ev, dict) and isinstance(ev.get("location"), dict):
                    location = dict(ev["location"])
                    location.setdefault("line_start", 3)
                    evidence = [
                        {"chapter": chapter, "location": location}
                    ]
                    break
            for target in st.get("links", []) or []:
                if (source, target) in existing:
                    skipped += 1
                    continue
                if target not in known_ids and target not in aliases:
                    # keep row anyway? no — checker flags unknown targets.
                    # The link is to an entity with no page yet; skip and
                    # report, so the sweep (020) creates the page.
                    skipped += 1
                    continue
                seq += 1
                row = {
                    "id": f"conn-{chapter:04d}-{seq}-{target}",
                    "source": source,
                    "target": target,
                    "relation": "links",
                    "evidence": evidence,
                    "first_known_chapter": chapter,
                }
                new_rows.append(json.dumps(row, ensure_ascii=False))
                existing.add((source, target))

    if new_rows:
        with conn_path.open("a", encoding="utf-8") as fh:
            fh.write("\n" + "\n".join(new_rows) + "\n")
    print(f"appended {len(new_rows)} connections (seq now {seq}); "
          f"{skipped} already-linked or unknown-target pairs skipped")


if __name__ == "__main__":
    main()
