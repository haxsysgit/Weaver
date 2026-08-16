#!/usr/bin/env python3
"""Deterministic importance ranker for the Shadow Slave notebook.

Plan 019 slice 5. Computes per-person importance over the reading
records + connections store, producing tier 0-4. The wiki category
ladder (Main Character -> Main Cast -> Character -> volume-tagged ->
background) is the tier skeleton; the numbers come from OUR data.

Signals per person (all from .weaver knowledge, no model calls):
  - mentions        : connection rows targeting the person
  - chapters        : distinct chapters with evidence
  - volumes         : distinct volumes touched (arcs.md boundaries)
  - relationships   : distinct OTHER people sharing a statement
                      (connection rows from the same source statement)
  - recency         : last chapter the person is mentioned in
                      (a living plot presence matters)

Tier thresholds are derived from the data distribution at the bottom
of this file (see TIER docstring) and can be tuned after owner review.

Usage: uv run python scripts/rank_entities.py [--min-mentions N] [--kind person]
"""
from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
KNOWLEDGE = ROOT / ".weaver" / "knowledge" / "shadow-slave"

# Volume boundaries from arcs.md (novel-text verified; vol 13 = 3101-3160).
VOLUMES: list[tuple[int, int, str]] = [
    (1, 95, "1"), (96, 350, "2"), (351, 600, "3"), (601, 750, "4"),
    (751, 1060, "5"), (1061, 1400, "6"), (1401, 1700, "7"),
    (1701, 2100, "8"), (2101, 2500, "9"), (2501, 2850, "10"),
    (2851, 3000, "11"), (3001, 3100, "12"), (3101, 10_000, "13"),
]


def volume_of(chapter: int) -> str:
    for lo, hi, name in VOLUMES:
        if lo <= chapter <= hi:
            return name
    return "?"


def load_connections() -> list[dict]:
    out = []
    with (KNOWLEDGE / "connections.jsonl").open() as fh:
        for line in fh:
            line = line.strip()
            if line:
                out.append(json.loads(line))
    return out


def load_person_ids() -> set[str]:
    return {
        p.stem.replace("person-", "person:", 1)
        for p in (KNOWLEDGE / "people").glob("person-*.md")
    }


def load_aliases() -> dict[str, str]:
    """alias id -> canonical person id, from <!-- alias: X --> markers."""
    out = {}
    for p in (KNOWLEDGE / "people").glob("person-*.md"):
        canonical = p.stem.replace("person-", "person:", 1)
        for m in re.finditer(r"<!--\s*alias:\s*([^<\s]+(?:\s+[^<\s]+)*)\s*-->", p.read_text()):
            for a in m.group(1).split():
                out[a] = canonical
    return out


def rank(kind: str = "person", min_mentions: int = 1) -> dict[str, dict]:
    conns = load_connections()
    person_ids = load_person_ids()
    aliases = load_aliases()

    def canonical(t: str) -> str:
        if t in aliases:
            return aliases[t]
        if t in person_ids:
            return t
        # target has no page: keep as-is (ranked, flagged later)
        return t

    for c in conns:
        c["target"] = canonical(c["target"])

    by_target: dict[str, list[dict]] = defaultdict(list)
    for c in conns:
        by_target[c["target"]].append(c)

    # statement -> set of people linked from it (for relationship degree)
    statement_people: dict[str, set[str]] = defaultdict(set)
    for c in conns:
        if c["target"] in person_ids:
            statement_people[c["source"]].add(c["target"])

    out: dict[str, dict] = {}
    for target, rows in by_target.items():
        if not target.startswith(f"{kind}:"):
            continue
        if len(rows) < min_mentions:
            continue
        chapters = {r.get("first_known_chapter") or 0 for r in rows}
        chapters |= {e.get("chapter", 0) for r in rows for e in r.get("evidence", [])}
        chapters.discard(0)
        volumes = {volume_of(ch) for ch in chapters}
        # relationship degree: distinct people sharing a source statement
        rel = set()
        for r in rows:
            rel |= statement_people.get(r["source"], set())
        rel.discard(target)
        out[target] = {
            "mentions": len(rows),
            "chapters": len(chapters),
            "volumes": len(volumes),
            "relationships": len(rel),
            "last_chapter": max(chapters) if chapters else 0,
            "first_chapter": min(chapters) if chapters else 0,
        }
    return out


def score(m: dict) -> float:
    """Weighted composite. Mentions dominate, spread and ties break."""
    return (
        m["mentions"]
        + 3.0 * m["chapters"]
        + 5.0 * m["volumes"]
        + 1.5 * m["relationships"]
    )


GOD_DAEMON_IDS = {
    "person:sun-god", "person:shadow-god", "person:heart-god", "person:war-god",
    "person:beast-god", "person:hope-god", "person:storm-god", "person:dream-god",
    "person:forgotten-god", "person:weaver", "person:nether", "person:hope",
    "person:ariel", "person:mirage", "person:rime", "person:oblivion",
    "person:demon-of-oblivion", "person:demon-of-imagination",
    "person:demon-of-repose", "person:prince-of-the-underworld",
}


def tier_of(s: float, m: dict, person_id: str) -> int:
    """Tier from mentions + chapter spread; role flags override upward.

    The wiki ladder is the skeleton: Main (tier 0) / Main Cast +
    gods+daemons (tier 1) / regular cast (2) / recurring (3) /
    background (4). Gods and daemons are lore-critical even when the
    records name them rarely (Storm God: 1 mention) — the role flag
    keeps them at tier 1 where the deep rebuilds live.

    Measured anchors (2026-08-16): Sunny 3496 mentions, Nephis 1198,
    Cassia 642, Effie 405, Kai 383 — the main five, tier 0. Mordret
    299, Master Jet 307, Saint 299, Rain 222 — main cast, tier 1.
    """
    if person_id in GOD_DAEMON_IDS:
        return 1
    if m["mentions"] >= 350 or m["chapters"] >= 330:
        return 0
    if m["mentions"] >= 60 or m["chapters"] >= 60:
        return 1
    if m["mentions"] >= 12 or m["chapters"] >= 12:
        return 2
    if m["mentions"] >= 4 or m["chapters"] >= 4:
        return 3
    return 4


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--min-mentions", type=int, default=1)
    ap.add_argument("--kind", default="person")
    ap.add_argument("--out", type=Path, default=KNOWLEDGE / "importance.md")
    args = ap.parse_args()

    ranks = rank(args.kind, args.min_mentions)
    scored = sorted(
        ((t, score(m), m) for t, m in ranks.items()),
        key=lambda x: (-x[1], -x[2]["mentions"]),
    )

    lines = [
        "# Character Importance Tiers — Shadow Slave notebook",
        "",
        "<!-- Generated by scripts/rank_entities.py (Plan 019 slice 5).",
        "     Deterministic over reading records + connections.jsonl.",
        "     Tier = mention/chapter thresholds + role flags (gods/daemons).",
        "     Tune after owner review. -->",
        "",
        f"{len(scored)} ranked people.",
        "",
    ]
    tier_buckets: dict[int, list] = defaultdict(list)
    for target, s, m in scored:
        t = tier_of(s, m, target)
        tier_buckets[t].append((target, s, m))

    for t in range(5):
        bucket = tier_buckets[t]
        lines.append(f"## Tier {t} ({len(bucket)})")
        lines.append("")
        lines.append("| person | score | mentions | chapters | volumes | relationships | first | last |")
        lines.append("|---|---|---|---|---|---|---|---|")
        for target, s, m in bucket:
            lines.append(
                f"| {target} | {s:.0f} | {m['mentions']} | {m['chapters']} | "
                f"{m['volumes']} | {m['relationships']} | ch{m['first_chapter']} | "
                f"ch{m['last_chapter']} |"
            )
        lines.append("")

    (args.out if args.out else KNOWLEDGE / "importance.md").write_text("\n".join(lines))
    print(f"wrote {args.out}")
    for t in range(5):
        print(f"  tier {t}: {len(tier_buckets[t])} people")


if __name__ == "__main__":
    main()
