"""Plan 020 slice 3: build the exact subagent task text for one entity page rebuild.

Every task embeds the SAME shared block (page standard + rules) at the
same position, so DeepSeek's prefix cache hits across all rebuild runs.
Usage: uv run python scripts/build_page_task.py person:nephis
Writes the task to stdout (redirect to a file if needed).
"""

from __future__ import annotations

import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
SHARED_BLOCK = Path("/tmp/shared_block.txt").read_text()

STANDARD_SKELETON = """## 1. Header block (all kinds)

Every entity page opens with the same block, in this order:

1. `# Display Name` — the human-readable name (the wiki infobox name;
   aliases live in markers, not the title).
2. `<!-- entity-id: kind:slug -->` — the checker-validated id.
3. `<!-- alias: ... -->` — one per alias id, each on its own line
   (optional; only for id-shaped variants).
4. `- First known: chapter N.` — the first chapter with evidence in
   the reading records.
5. `- Vital status: ...` — for people only (Alive/Dead/Unknown).
6. `- Titles: ...` — epithets and titles from the records.
7. `- Rank/Tier: ...` — Awakened/Ascended/Transcendent/Supreme/Divine.
8. `- Affiliation: ...` — clans/factions/groups from the records.
9. `- Relatives: ...` — named relatives from the records.
10. `- Overview: 2-4 sentences` synthesized from the top statements.

Empty fields are omitted (e.g. a place page has no Vital status).

## 2. Section skeleton per kind

### People (person:*)

- `## Appearance` — physical description statements.
- `## Personality` — character, motives, mannerisms.
- `## Biography` — chronological story statements, with `### Volume
  N: <name>` subsections using the arcs.md volume boundaries (Vol 1
  ch1-95, Vol 2 ch96-350, Vol 3 ch351-600, Vol 4 ch601-750, Vol 5
  ch751-1060, Vol 6 ch1061-1400, Vol 7 ch1401-1700, Vol 8
  ch1701-2100, Vol 9 ch2101-2500, Vol 10 ch2501-2850, Vol 11
  ch2851-3000, Vol 12 ch3001-3100, Vol 13 ch3101-3160). Statements
  are grouped under the volume they belong to.
- `## Aspect + Abilities` — the Aspect, its abilities, flaw, rank
  evolutions.
- `## Relationships` — statements about other entities.
- `## Trivia` — miscellaneous facts.

### Powers (power:*)

- `## Description` — what this power/ability/concept is.
- `## Mechanics` — how it works, rules, limits.
- `## Users / Origin` — who has it, where it comes from.
- `## Notable feats` — major demonstrated uses.
- `## Trivia`.

### Places (place:*)

- `## Description` — what and where.
- `## History` — chronological statements.
- `## Notable events` — major story beats that happened there.
- `## Trivia`.

### Items (item:*)

- `## Description` — what it is, appearance.
- `## Origin` — who made/found it, where it came from.
- `## Abilities/Enchantments` — what it does.
- `## History` — its journey through the story.
- `## Trivia`.

### Groups (group:*)

- `## Description` — who they are.
- `## Membership` — named members.
- `## History` — chronological statements.
- `## Trivia`.

## 3. Statement lines

- Every content line is a statement line: `- chNNNN (kind): text`.
- `kind` is one of confirmed_fact / interpretation / theory (from the
  reading records; preserved unchanged).
- Statements are chapter-ascending within each section.
- Statement text is byte-preserved from the reading records — never
  rewritten, shortened, or rephrased.
- Statements that do not fit any named section still appear, under a
  minimal heading (e.g. `## Notes`) rather than being dropped.

## 5. What is forbidden

- Never invent statements, facts, chapters, or quotes.
- Never import wiki content (structure is the only thing borrowed
  from the wiki; claims come from reading records + novel text).
- No [[wikilinks]] anywhere — plain display names only.
- No empty sections — omit, do not write "TBD".
- No commentary or meta-text in pages (no "see also", no editor
  notes)."""


def build_task(entity: str, extra_notes: str = "") -> str:
    kind, slug = entity.split(":", 1)
    digest_path = (
        REPO / ".weaver/knowledge/shadow-slave/digests" / f"{kind}-{slug}.md"
    )
    page_path = REPO / ".weaver/knowledge/shadow-slave" / (
        "people" if kind == "person" else f"{kind}s"
    ) / f"{kind}-{slug}.md"
    digest = digest_path.read_text()
    digest_kb = digest_path.stat().st_size // 1024
    n_statements = sum(1 for l in digest.splitlines() if l.startswith("- ch"))

    return f"""Plan 020 tier rebuild: rebuild ONE notebook entity page from its digest, in {REPO}.

TARGET FILE (overwrite): {page_path}

INPUTS (read both):
- Digest: {digest_path} (the ONLY source material — every statement about {slug}, chapter-attributed, sorted, {n_statements} statements)
- The existing page at {page_path} (shows current organization — your rebuild must include ALL digest statements, including ones missing from the current page)

THE SHARED BLOCK (page standard + rules — follow exactly):
===BEGIN===
You are rebuilding a Shadow Slave notebook entity page from digest statements.

THE PAGE STANDARD (must follow exactly):
# Page Standard — the notebook entity-page skeleton (019 slice 4)

Written 2026-08-16 from the wiki structure study
(`wiki-structure-study.md`, slice 3) + the current notebook reality
(584 pages, checker rules in `scripts/check_story_notebook.py`). This
is the contract Plan 020 follows for every rebuild. The novel text +
reading records are the only sources; the standard only organizes
existing content. It is a skeleton, not a template: sections that are
empty for an entity are omitted, never written empty.
{STANDARD_SKELETON}

RULES:
- Rebuild ONLY from the digest statements below. Never invent, never import wiki claims.
- Every statement line must keep its exact `- chNNNN (kind): text` format, byte-preserved.
- Group statements under the standard's section skeleton (## Biography with ### Volume nesting, etc.). Move statements between sections, never change their text.
- Header block per standard: # Name, <!-- entity-id: kind:slug -->, First known, Titles, Overview.
- Do NOT invent [[wikilinks]] — plain display names only.
- Keep all statements. Order: by chapter ascending within each section.
===END===

RULES:
- Rebuild the ENTIRE page from the digest statements ONLY. Never invent facts, never import wiki or outside knowledge.
- Every digest statement must appear EXACTLY once in the page, byte-preserved: `- chNNNN (kind): text` — do not rewrite, shorten, or rephrase statements. The kind stays (confirmed_fact/interpretation/theory).
- Organize statements under the standard's section skeleton: header block (entity-id marker `<!-- entity-id: {entity} -->`, plus existing alias markers from the current page, First known, Vital status, Titles, Rank/Tier, Affiliation, Relatives, Overview 2-4 sentences) then per-kind sections. For people: Appearance / Personality / Biography with `### Volume N` nesting under Biography / Aspect + Abilities / Relationships / Trivia. Empty sections are omitted.
- Statements stay in chapter-ascending order within each section.
- The CURRENT page header block is authoritative for titles/aliases (verified in Plan 019): preserve the exact Titles line, alias markers, and entity-id marker from the current page.
- Do NOT invent [[wikilinks]] — plain display names only.
- Keep the file private-mode 600 when done (chmod 600).
{extra_notes}

LESSON FROM THE SUNNY REBUILD: people pages MUST have a `## Appearance`
section when any appearance statements exist (physical description,
body, face, eyes, hair, skin, scars, form transformations, outfit
statements). Do not bury them in Biography. Place it between the
header block and `## Personality`. Statements about someone ELSE's
appearance or 'appeared/looked at' phrasings stay where they are.

VERIFY BEFORE FINISHING:
1. Every `- ch` line in the digest appears in your page (diff the full statement lines). This is {n_statements} statements — the page MUST contain all of them.
2. No statement text was altered (spot-check 10).
3. Header block matches the standard and preserves the current page's Titles/aliases (entity-id marker, First known, Titles, Overview).
4. Run: uv run python scripts/check_story_notebook.py --root .weaver/knowledge/shadow-slave --through 3160 --novel-dir novels/shadow-slave and confirm the page produces no NEW errors (other pages' known issues are fine — compare against the issue list before your edit if needed).
5. Confirm the file size: the digest is {digest_kb}KB, so the page will be roughly {max(20, digest_kb)}KB+. A page much smaller means you dropped statements — go back.

IMPORTANT COST/EXECUTION NOTES:
- You have a hard budget. Work efficiently: read the digest ONCE, plan the section mapping in one pass, then write the file in a few large writes (write the whole file, or write in 3-4 section-sized chunks with append). Do not re-read the digest repeatedly.
- The digest is large (~{digest_kb}KB). Reading it fully into context is expected and required — that is the one-time cost. Do not try to read it multiple times.
- If writing the whole file at once fails, write it in sequential chunks (header+volumes 1-4, volumes 5-8, volumes 9-13, then the remaining sections) using write then append operations.
- NEVER read novels/shadow-slave/* files. The digest is the only source.

Report: statement count written, page size, section structure used, checker result, any digest statements you could not place, and your final output file size."""


def build_batch_task(entities: list[str]) -> str:
    """One task that rebuilds several small pages in one worker context."""
    parts = [f"Plan 020 tier-1 batch rebuild: rebuild {len(entities)} notebook entity pages from their digests, in {REPO}.",
             "",
             "TARGET FILES (overwrite each):"]
    for entity in entities:
        kind, slug = entity.split(":", 1)
        page_path = REPO / ".weaver/knowledge/shadow-slave" / (
            "people" if kind == "person" else f"{kind}s") / f"{kind}-{slug}.md"
        digest_path = REPO / ".weaver/knowledge/shadow-slave/digests" / f"{kind}-{slug}.md"
        n = sum(1 for l in digest_path.read_text().splitlines() if l.startswith("- ch"))
        parts.append(f"- {page_path}   (digest {digest_path.name}: {n} statements)")
    parts += ["",
        "THE SHARED BLOCK (page standard + rules — follow exactly, identical for every page):",
        "===BEGIN===",
        "You are rebuilding Shadow Slave notebook entity pages from digest statements.",
        "",
        "THE PAGE STANDARD (must follow exactly):",
        "# Page Standard — the notebook entity-page skeleton (019 slice 4)",
        "",
        "Written 2026-08-16 from the wiki structure study",
        "(`wiki-structure-study.md`, slice 3) + the current notebook reality",
        "(584 pages, checker rules in `scripts/check_story_notebook.py`). This",
        "is the contract Plan 020 follows for every rebuild. The novel text +",
        "reading records are the only sources; the standard only organizes",
        "existing content. It is a skeleton, not a template: sections that are",
        "empty for an entity are omitted, never written empty.",
        STANDARD_SKELETON,
        "",
        "RULES:",
        "- Rebuild ONLY from the digest statements. Never invent, never import wiki claims.",
        "- Every statement line must keep its exact `- chNNNN (kind): text` format, byte-preserved.",
        "- Group statements under the standard's section skeleton (## Biography with ### Volume nesting, etc.).",
        "- Header block per standard: # Name, <!-- entity-id: kind:slug -->, First known, Titles, Overview.",
        "- The CURRENT page header block is authoritative for titles/aliases: preserve its exact Titles line, alias markers, and entity-id marker.",
        "- Do NOT invent [[wikilinks]] — plain display names only.",
        "- Keep all statements. Order: by chapter ascending within each section.",
        "===END===",
        "",
        "WORKFLOW (one entity at a time, strictly sequential):",
        "1. For EACH entity in the list: read its digest ONCE, plan the section mapping,",
        "   then write its page (whole file or 2-3 chunks). Move to the next entity.",
        "   Never re-read a digest you already processed. Never read novels/shadow-slave/* files.",
        "2. Every page: ALL digest statements exactly once, byte-preserved",
        "   `- chNNNN (kind): text`; people pages MUST have a ## Appearance section",
        "   when appearance statements exist (physical description, body, face, eyes,",
        "   hair, skin, scars, form transformations) placed between header block and",
        "   ## Personality — statements about someone ELSE's appearance stay where they are.",
        "3. chmod 600 each file when done.",
        "",
        "VERIFY BEFORE FINISHING:",
        "- For each page: the number of `- ch` lines must equal its digest's statement count",
        "  (grep -c '^- ch'). Run one checker pass at the end:",
        "  uv run python scripts/check_story_notebook.py --root .weaver/knowledge/shadow-slave",
        "  --through 3160 --novel-dir novels/shadow-slave and confirm none of YOUR pages",
        "  produce NEW errors.",
        "",
        "COST/EXECUTION NOTES:",
        "- You have a hard budget. Read each digest exactly once, write in as few large",
        "  writes as possible, do not re-read pages or digests.",
        "- NEVER read novels/shadow-slave/* files. Digests are the only source.",
        "",
        "Report: per page — statement count written, page size, sections used, checker",
        "result; then the total file sizes.",
    ]
    return "\n".join(parts)

if __name__ == "__main__":
    args = sys.argv[1:]
    if args and args[0] == "batch":
        entities = args[1:]
        print(build_batch_task(entities))
    elif args:
        print(build_task(args[0]))
    else:
        print("usage: build_page_task.py person:x | build_page_task.py batch person:a person:b ...")
        sys.exit(2)
