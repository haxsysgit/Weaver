#!/usr/bin/env python3
"""Deterministic per-entity digest builder for the Plan 020 sweep.

Plan 020 slice 2. For every entity in the connections graph, gather
the statements that link to it (from reading records via
connections.jsonl), and write one digest file per entity. The digest
is the ONLY source material a page rebuild reads — bounding the
agent context per page and making the sweep cache-hit friendly.

No model calls. Outputs:

  .weaver/knowledge/shadow-slave/digests/<entity>.md
    - Header: entity id, statement count
    - One line per linking statement, chapter-attributed and sorted:
      `- chNNN (kind): statement text`
    - Statements deduplicated across connection rows, sorted by
      chapter then statement id (stable order for caching).

  .weaver/knowledge/shadow-slave/digests/report.json
    - per-entity: statement count, chars, estimated tokens
      (tiktoken cl100k_base, the same proxy the budget used)

Aliases (<!-- alias: X --> page markers) fold into the canonical
entity so e.g. cassie statements land in the cassia digest.

Usage: uv run python scripts/build_digests.py [--root KNOWLEDGE]
"""
from __future__ import annotations

import argparse
import json
import re
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KNOWLEDGE = ROOT / ".weaver" / "knowledge" / "shadow-slave"

PAGE_DIR_PREFIX = {
    "people": "person:",
    "powers": "power:",
    "places": "place:",
    "items": "item:",
    "groups": "group:",
}


def load_connections(knowledge: Path) -> list[dict]:
    out = []
    with (knowledge / "connections.jsonl").open() as fh:
        for line in fh:
            line = line.strip()
            if line:
                out.append(json.loads(line))
    return out


def load_aliases(knowledge: Path) -> dict[str, str]:
    """alias id -> canonical id, from <!-- alias: X --> page markers."""
    out = {}
    for dirname, prefix in PAGE_DIR_PREFIX.items():
        for page in (knowledge / dirname).glob("*.md"):
            canonical = prefix + page.stem.split("-", 1)[1]
            for m in re.finditer(
                r"<!--\s*alias:\s*([^<\s]+(?:\s+[^<\s]+)*)\s*-->",
                page.read_text(encoding="utf-8"),
            ):
                for a in m.group(1).split():
                    out[a] = canonical
    return out


def load_statement_text(knowledge: Path) -> dict[str, tuple[int, str, str]]:
    """statement id -> (chapter, kind, text) for every reading record."""
    out = {}
    for path in (knowledge / "reading").glob("*.json"):
        try:
            rec = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        chapter = rec.get("chapter")
        if not isinstance(chapter, int):
            continue
        for st in rec.get("statements", []):
            sid = st.get("id")
            if sid:
                out[sid] = (chapter, st.get("kind", "confirmed_fact"), st.get("statement", ""))
    return out


def render_digest(entity: str, rows: list[tuple[int, str, str, str]]) -> str:
    lines = [f"# {entity}", "", f"- statements: {len(rows)}", ""]
    for chapter, sid, kind, text in rows:
        lines.append(f"- ch{chapter:04d} ({kind}): {text}")
    return "\n".join(lines) + "\n"


def build_digests(knowledge: Path) -> tuple[dict[str, list], dict[str, dict]]:
    """Return (entity -> sorted statement rows, entity -> size report)."""
    conns = load_connections(knowledge)
    statements = load_statement_text(knowledge)
    aliases = load_aliases(knowledge)

    # entity -> set of statement ids linking to it
    entity_statements: dict[str, set[str]] = defaultdict(set)
    for row in conns:
        target = row.get("target")
        source = row.get("source")
        if not target or not source:
            continue
        entity_statements[aliases.get(target, target)].add(source)

    # Skip the story-map layer: statement: targets are cross-statement
    # links (cross-* rows, explains/payoff/foreshadows) consumed by
    # lore_path, not entities with pages.
    entity_statements = {
        e: sids for e, sids in entity_statements.items()
        if not e.startswith("statement:")
    }

    digests: dict[str, dict] = {}
    all_rows: dict[str, list] = {}
    for entity, sids in entity_statements.items():
        rows = []
        for sid in sorted(sids):
            info = statements.get(sid)
            if info is None:
                continue
            chapter, kind, text = info
            rows.append((chapter, sid, kind, text))
        rows.sort(key=lambda r: (r[0], r[1]))
        all_rows[entity] = rows

        content = render_digest(entity, rows)
        digests[entity] = {
            "entity": entity,
            "statements": len(rows),
            "chars": len(content),
            "tokens": estimate_tokens(content),
        }
    return all_rows, digests


def estimate_tokens(text: str) -> int:
    try:
        import tiktoken

        enc = tiktoken.get_encoding("cl100k_base")
        return len(enc.encode(text))
    except Exception:  # pragma: no cover - tiktoken is a pyproject dep
        return len(text) // 4


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, default=KNOWLEDGE,
                        help="knowledge root (default .weaver/knowledge/shadow-slave)")
    args = parser.parse_args()

    all_rows, digests = build_digests(args.root)
    out_dir = args.root / "digests"
    out_dir.mkdir(exist_ok=True)

    for entity, rows in all_rows.items():
        (out_dir / f"{entity.replace(':', '-')}.md").write_text(
            render_digest(entity, rows), encoding="utf-8"
        )

    report = {"total_entities": len(digests), "entities": digests}
    (out_dir / "report.json").write_text(
        json.dumps(report, indent=1, ensure_ascii=False), encoding="utf-8"
    )

    total_tokens = sum(d["tokens"] for d in digests.values())
    print(f"digests: {len(digests)} entities -> {out_dir}")
    print(f"total: {sum(d['chars'] for d in digests.values()):,} chars, "
          f"{total_tokens:,} tokens (tiktoken cl100k proxy)")
    for entity, data in sorted(digests.items(), key=lambda kv: -kv[1]["tokens"])[:12]:
        print(f"  {entity:40s} {data['statements']:5d} stmts {data['tokens']:8,d} tok")


if __name__ == "__main__":
    main()
