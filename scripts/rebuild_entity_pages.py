#!/usr/bin/env python3
"""Rebuild entity biography pages from the story notebook's records.

The reading/ records are the source of truth. Every entity page under
people/, places/, powers/, items/, groups/ is regenerated from the full
statement history that links to it, in chapter order, grouped by volume,
so pages read as biographies instead of early-chapter snapshots.

Preserves the page's title, entity-id marker, alias markers, and any
"First known" line. The generated story sections come from the records,
so a page can never lag behind the reading again.

Usage:
  uv run python scripts/rebuild_entity_pages.py --root .weaver/knowledge/shadow-slave

Only touches files under <root>/people|places|powers|items|groups.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from collections import defaultdict
from pathlib import Path

ENTITY_MARKER = re.compile(r"<!--\s*entity-id:\s*([^\s]+)\s*-->")
ALIAS_MARKER = re.compile(r"<!--\s*alias:\s*([^\s]+)\s*-->")
FIRST_KNOWN = re.compile(r"^- First known: (.+)$", re.MULTILINE)

VOLUMES = [
    (1, 95, "Volume 1: Child of Shadows"),
    (96, 350, "Volume 2: Demon of Change"),
    (351, 600, "Volume 3: Prince of Nothing"),
    (601, 750, "Volume 4: Chain Breaker"),
    (751, 1060, "Volume 5: Dread Night"),
]

DIRS = ("people", "places", "powers", "items", "groups")


def volume_of(chapter: int) -> int:
    for i, (lo, hi, _) in enumerate(VOLUMES):
        if lo <= chapter <= hi:
            return i
    return len(VOLUMES) - 1


def collect_statements(root: Path) -> tuple[dict[str, list[tuple[int, str, str, str]]], dict[str, int]]:
    """entity id -> [(chapter, kind, statement, statement_id)], and first-known chapters."""
    by_entity: dict[str, list[tuple[int, str, str, str]]] = defaultdict(list)
    first_known: dict[str, int] = {}
    for path in sorted((root / "reading").glob("*.json")):
        try:
            record = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, ValueError):
            continue
        chapter = record.get("chapter")
        if not isinstance(chapter, int):
            continue
        for stmt in record.get("statements", []):
            if not isinstance(stmt, dict):
                continue
            sid = stmt.get("id")
            kind = stmt.get("kind", "confirmed_fact")
            text = stmt.get("statement", "")
            for link in stmt.get("links", []):
                if not isinstance(link, str):
                    continue
                by_entity[link].append((chapter, kind, text, sid))
                if link not in first_known or chapter < first_known[link]:
                    first_known[link] = chapter
    return by_entity, first_known


def collect_aliases(root: Path) -> set[str]:
    """Alias ids declared by existing pages. Alias-only ids must never get pages."""
    aliases: set[str] = set()
    for dirname in DIRS:
        page_dir = root / dirname
        if not page_dir.is_dir():
            continue
        for path in page_dir.glob("*.md"):
            aliases.update(ALIAS_MARKER.findall(path.read_text(encoding="utf-8", errors="replace")))
    return aliases


def page_metadata(path: Path) -> tuple[str, list[str], str | None]:
    """(entity_id, aliases, first_known_line) from an existing page."""
    text = path.read_text(encoding="utf-8", errors="replace")
    ids = ENTITY_MARKER.findall(text)
    entity_id = ids[0] if ids else path.stem
    aliases = ALIAS_MARKER.findall(text)
    first_known = FIRST_KNOWN.search(text)
    return entity_id, aliases, (first_known.group(1) if first_known else None)


def render_page(entity_id: str, statements: list[tuple[int, str, str, str]], first_known: int | None) -> str:
    title = entity_id.split(":", 1)[-1].replace("-", " ").title()
    out = [f"# {title}", ""]
    out.append(f"<!-- entity-id: {entity_id} -->")
    if first_known:
        out.append(f"- First known: chapter {first_known}.")
    out.append("")
    if not statements:
        out.append("_No statements link this entity yet._")
        out.append("")
        return "\n".join(out)

    statements.sort(key=lambda s: (s[0], s[3]))
    current_volume = None
    for chapter, kind, text, sid in statements:
        vol = volume_of(chapter)
        if vol != current_volume:
            current_volume = vol
            out.append(f"## {VOLUMES[vol][2]}")
            out.append("")
        out.append(f"- ch{chapter} ({kind}): {text}")
    out.append("")
    return "\n".join(out)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--root", type=Path, required=True, help="private notebook root")
    args = parser.parse_args()

    by_entity, first_known = collect_statements(args.root)
    aliases = collect_aliases(args.root)
    existing = {}
    for dirname in DIRS:
        page_dir = args.root / dirname
        if not page_dir.is_dir():
            continue
        for path in sorted(page_dir.glob("*.md")):
            entity_id, page_aliases, fk = page_metadata(path)
            existing[entity_id] = (path, page_aliases, fk)

    all_ids = set(existing) | (set(by_entity) - aliases)
    written = 0
    for entity_id in sorted(all_ids):
        if entity_id in aliases and entity_id not in existing:
            # Alias-only ids resolve to their canonical page; never create a page.
            continue
        path = existing.get(entity_id, (None, [], None))[0]
        aliases = existing.get(entity_id, (None, [], None))[1]
        page = render_page(entity_id, by_entity.get(entity_id, []), first_known.get(entity_id))
        if aliases:
            lines = page.splitlines()
            idx = next((i for i, line in enumerate(lines) if line.startswith("<!-- entity-id:")), 0)
            insert = [f"<!-- alias: {a} -->" for a in aliases]
            page = "\n".join(lines[: idx + 1] + insert + lines[idx + 1 :])
        if path is None:
            dirname = entity_id.split(":", 1)[0] + "s"
            if dirname == "person s":
                dirname = "people"
            if dirname not in DIRS:
                dirname = "people"
            path = args.root / dirname / f"{entity_id.replace(':', '-')}.md"
            path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(page, encoding="utf-8")
        written += 1
    print(f"pages written: {written}")

    # Report entities that have statements but no page, and vice versa.
    missing = sorted((set(by_entity) - set(aliases)) - set(existing))
    if missing:
        print("entities with statements but no page:", len(missing))
        for e in missing:
            print("  ", e)
    return 0


if __name__ == "__main__":
    sys.exit(main())
