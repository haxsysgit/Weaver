# Plan 020 results

## Slice 2: Digest pass (2026-08-16)

Built `scripts/build_digests.py` — deterministic, no model calls.
For each of the 719 entities in the connections graph, gathers the
statements that link to it (via connections.jsonl + reading records,
aliases folded), writes `.weaver/knowledge/shadow-slave/digests/
<entity>.md` (chapter-attributed, sorted, deduplicated) and a
`report.json` with per-entity statement count / chars / tokens
(tiktoken cl100k proxy). Runtime 4.7s.

### Size report (validates the budget)

- 719 entities, 4,720,417 chars, 1,068,864 tokens total.
- Measured digests match the plan's budget estimates: Sunny 257k
  (est 240k), Nephis 88.8k (89k), Kai 34.6k (32k), Effie 30.2k (29k).
- Tier cost model (people only, off-peak miss $0.22 + 15% output
  $0.66): tier 0 (5 people) 461k tok ~$0.15; tier 1 (25) 206k ~$0.07;
  tier 2 (59) 114k ~$0.04; tier 3 (33) 17k ~$0.01; tier 4 (43) 7k
  ~$0.00.
- **Whole-sweep digest input ≈ $0.27 off-peak** (all 719 entities).
  With output + overhead the sweep lands ~$0.50-0.80, far under the
  $3 cap. The old $1.5-3 estimate was based on raw-record feeding;
  digest-first compression is the main saving.

### Data findings (feed slices 3-6)

1. **God/daemon namespace split**: the connections graph links most
   gods/daemons as `power:*` (sun-god, shadow-god, heart-god,
   war-god, beast-god, dream-god, mirage, rime, demon-of-*,
   prince-of-the-underworld) but a few as `person:*` (storm-god,
   weaver, nether, ariel, oblivion, hope). The page standard treats
   gods/daemons as person pages (tier 1 role-flagged). Slices 3-6
   must pick one canonical namespace and merge the split digests.
2. **142 `statement:*` targets** in the connections graph have
   digests but no pages (legacy rows linking statements to
   statements). The sweep should ignore `statement:*` digests.
3. Aliases fold correctly (cassie -> cassia; no duplicate digest).

### Commands

- `uv run python scripts/build_digests.py` (default root
  .weaver/knowledge/shadow-slave)

## Slice 2 follow-up: canon distinction + execution pattern (2026-08-16)

Owner drove three locked decisions (now in plans/020 as decisions 6-8):

1. **Canon 3-way split (verified against the novel):** the gods are
   PEOPLE (`person:sun-god`), divine lineages are INHERITANCES
   (separate pages: `power:the-fire` = Sun God's lineage, the four
   Weaves = Weaver's forbidden lineage, Storm/War lineages), and
   Aspect Legacy is a MECHANIC (one `power:aspect-legacy` page — the
   Spell's per-Awakened personal legacy: Shadow Dance, Memory of
   Light, Jet's scythe; defined in novel ch653/1254/1290/1479/1483).
   Evidence: the current `power:sun-god` digest contains ONLY
   character/feat statements (7 rows, ch436-691); lineage statements
   already link elsewhere (`power:the-fire`, `power:blood-weave`,
   `bone-weave`, `soul-weave`, or to the people who inherit them).
2. **`statement:*` targets explained + preserved:** they are the
   190-row cross-statement story-map layer (cross-* ids, relations
   explains/relates/payoff/causes/foreshadows, chapters 5-1080) that
   powers `lore_path` — NOT junk. 0 of them come from reading-record
   links (verified: 0 of 14,363 links point to statement: ids). They
   are a hand-curated Plan 15-era layer. Decision: keep them, skip
   them in the digest pass (done — 577 digests now, 142 stale
   statement-*.md files removed, report clean). Known limitation
   recorded: the story map is frozen at the 1000-chapter era;
   extending or retiring `lore_path` is a post-v1 decision.
3. **Execution pattern locked:** page rebuilds run in budgeted
   context:fresh subagents (never the main agent's context — this
   session carries 136M+ cacheRead tokens; per-call overhead would
   dominate). Each subagent gets the byte-identical shared block
   (standard + checker rules + samples) FIRST for prefix-cache hits
   across all rebuild calls, plus its one entity digest. One
   subagent per tier-0/1 page; batches for tiers 2-4. Every run
   records input/output/cacheRead/cost.

### Commands

- `uv run python scripts/build_digests.py` (now skips statement:*)

## Slice 3: tier-0 pilot — Kai page rebuild (2026-08-16)

Pilot of the rebuild pipeline: context:fresh worker + shared block
(page standard inlined, byte-identical across runs) + one entity
digest. Rebuilt person-kai.md from 395 digest statements.

- **Result: FULL PASS.** 395/395 statements byte-identical (0 missing,
  0 extra, 0 duplicates). Page 155KB/456 lines. Standard skeleton:
  header block (entity-id person:kai, First known ch115, Vital status
  Alive, Titles, Rank/Tier Awakened->Supreme, Affiliation, Overview)
  + Appearance / Personality / Biography (12 volume nestings) /
  Aspect + Abilities / Relationships / Trivia.
- **Checker:** 0 problems on the page. Pre-existing 612 notebook
  problems unchanged (missing chapter notes 3148-3160 etc.).
- **Cost: $0.029** (84,098 input + 33,497 output tokens) — 21x under
  the $0.60 hard cap.
- **Side fix:** digests/ dir permissions hardened to 700/600 (checker
  flags unsafe permissions on private artifacts).
- **Verification lesson:** the first statement-preservation check
  keyed by (chapter, kind) collapsed same-chapter statements and
  falsely reported 4 "altered" texts; the correct check is a Counter
  multiset of full lines (byte-identical 395/395).

## Slice 3: tier-0 rebuilds — Sunny, Effie (2026-08-16)

Pipeline: context:fresh worker + byte-identical shared block + one
digest (build_page_task.py generates the tasks). Every page verified
independently after the run: Counter-multiset byte-compare (0 missing,
0 extra, 0 altered) + section-structure check + checker grep.

- **Sunny** (3604 stmts, 1.15MB digest): FULL PASS after one fix-up.
  Main rebuild $0.084 (148k in / 114k out); fix-up $0.077 — total
  $0.161. Sections: Appearance (5 stmts moved from Biography) /
  Personality / Biography (13 volumes) / Aspect + Abilities /
  Relationships / Trivia. All 4 kinds preserved (confirmed_fact 3082,
  interpretation 347, theory 156, character_belief 19).
- **Effie** (418 stmts): FULL PASS first try. $0.027 (71k in / 39k
  out). Sections: Appearance / Personality / Biography (vols 2-13 —
  she first appears ch125) / Aspect + Abilities / Relationships /
  Trivia.
- **Lesson baked into the generator:** people pages MUST have an
  ## Appearance section when appearance statements exist (Sunny's
  first rebuild buried them in Biography); build_page_task.py now
  appends that instruction to every task.
- **Kai pilot** (395 stmts): FULL PASS, $0.029 — see earlier entry.

- **Cassia** (655 stmts): FULL PASS first try. $0.043 (96k in / 64k
  out). Sections: Appearance / Personality / Biography (vols 1-13) /
  Aspect + Abilities / Relationships / Trivia. Alias person:cassie
  preserved verbatim.

- **Nephis** (1219 stmts): FULL PASS first try. $0.060 (154k in /
  78k out). Sections: Appearance / Personality / Biography (vols
  1-13) / Aspect + Abilities / Relationships / Trivia.

## Tier 0 complete (2026-08-16): 5/5 pages FULL PASS

- Kai $0.029 + Sunny $0.161 + Effie $0.027 + Cassia $0.043 +
  Nephis $0.060 = **$0.32 total for the main cast**
  (6,291 statements rebuilt, all byte-identical, all checker-clean,
  all sections per standard with Appearance included).
- Next: tier 1 (25 pages — gods/daemons with merged person+power
  digests, sovereigns, main supporting cast).

## Slice 3: tier-1 batch D — gods/daemons (2026-08-16)

5/5 FULL PASS, checker 0 problems. Real cost $0.0263 (33k in / 19k
out / 1.0M cacheRead @ off-peak). Pages: ariel (6), storm-god (3),
hope (2), oblivion (1), prince-of-the-underworld (12) — thin pages,
sections per standard with empty ones omitted, all chmod 600.
Cost discipline: balance-checked before dispatch ($4.31), costs
measured from session files at current off-peak rates, NOT the
harness's stale flat-rate field.
