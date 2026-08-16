# Results

## Slice 2 pre-run: cost measurement test (2026-08-16)

Measured BEFORE committing to the full 3149-3160 reading, per owner
directive ("accurately calculate and test this first using a small part
of the notebook").

**Test:** read chapters 3149-3150 as a budgeted subagent run (usageBudget
tokens soft 150k/hard 300k, costUsd soft $0.25/hard $0.50). Run
f0689c3f, context fork, model deepseek-v4-flash.

**Output:** `reading/3149.json` (9 statements) + `reading/3150.json`
(10 statements), both schema-valid, source sha256 + line_count verified
against the novel files (honest provenance).

**Cost — the real numbers (subagent's own calls only, after run start):**

| metric | value |
|---|---|
| model calls | 33 |
| fresh input | 168.2k tokens |
| output | 21.7k tokens |
| cacheRead | 5.58M tokens |
| **total cost (2 chapters)** | **$0.0453** |
| per chapter | $0.0226 |
| **extrapolated 12 chapters** | **$0.27** |

**Measurement lesson (important):** the subagent run forked the parent
session, so its jsonl contained the parent's ENTIRE 2-day history (838
calls, $1.14). Naively summing the jsonl gives $1.21 for 2 chapters —
wrong by 27x. The correct figure requires filtering to calls after the
run's start timestamp. Lesson: for clean per-run accounting, start
subagent runs fresh (context: fresh) or always filter by timestamp.

**Verdict:** full reading 3149-3160 ≈ $0.27 extrapolated — far under the
$3 cap. Cache hits dominate (5.58M cacheRead vs 168k fresh input per
run; cacheRead is the bulk of context and costs ~50x less). The
remaining slices are agent-context work (billed through the same key). 019 budget is
safely inside the cap.

## Slice 2: reading 3149-3160 — DONE (2026-08-16)

Two runs, both budgeted subagents, `context: fresh` (per the
fork-filter lesson):

- **3149-3150** (measurement test, run f0689c3f): 19 statements, $0.0453
- **3151-3160** (main batch, run 994a9d2f): 129 statements, $0.0132

**Total cost for the full slice: $0.0585 — under the $3 cap by 51x.**

| metric | test (2 ch) | main (10 ch) |
|---|---|---|
| model calls | 33 | 20 turns |
| fresh input | 168.2k | 30.0k |
| output | 21.7k | 25.4k |
| cacheRead | 5.58M | 678.7k |
| cost | $0.0453 | $0.0132 |

Final state: `reading/` has 3160 files (complete to shelf end),
129 statements for 3151-3160, all verified: sha256 matches source,
line_count matches, sequential ids, confirmed_fact kinds.
Volume thirteen ended at ch 3160 ("Prelude to Apocalypse" — Sunny
enters the Fifth Nightmare Seed).

Remaining 019 work: wiki structure study, page standard, importance
ranking, receipts cache fields, overview articles, structure checker.
All agent-context work (billed through the same DeepSeek key). The notebook checker full run (~5+ min) is
part of the verification floor at close.

## Slice 3: wiki structure study — DONE (2026-08-16)

Evidence file: `wiki-structure-study.md` (in this deliverable folder).

Pulled fresh via MediaWiki API: Gods_and_Daemons (18.7KB wikitext),
Sunny (110KB), Nether (4.8KB), category taxonomy (321 cats, Main
Character = Sunny only, Volume N Characters 1-12, Legacy Clans).

Findings adopted: overview page shape (lead + summary tables +
topic-grouped lore, chapter-cited) for one-call answers; infobox field
set for our page header block; by-power-stage biography; category
ladder as the importance skeleton (Main → Main Cast → Character →
volume-tagged → background); lore groups with first_known_chapter.

Rejected: spoiler-broken perspective (post-ch3000), fan duplication
(322 real articles in 2,891 pages), collapsible spoiler UI, images,
theme-song/site-nav trivia, hidden-god framing.

Ground truth for the sweep: 584 pages; 6 of 7 gods missing; Nether 282B
vs Sunny 446KB gap = the work.

## Slice 4: page standard + 3 sample rebuilds — DONE (2026-08-16)

Standard: `page-standard.md` (header block + 5 kind skeletons +
overview one-call shape, grounded in the wiki study). Key finding:
the notebook has NO wikilinks — relations live in connections.jsonl +
reading-record links; the standard forbids inventing [[...]] syntax.

Sample rebuilds (subagent, budgeted, context fresh):
- person-sunny.md: header block added, ## Volume N -> ### Volume N
  under new ## Biography. 1794 statements preserved byte-for-byte
  (verified by count).
- person-nephis.md: same treatment. 530 statements preserved.
- power-nightmare-spell.md: full rebuild to the powers skeleton
  (Mechanics / Users / Notable moments / Origin & Lore), 76 -> 79
  statements (3 added from reading records, each verified against its
  source record).
- No wikilinks invented anywhere; entity-id markers intact.

Cost: agent-context work per the doctrine; measured in the run usage.

## Slice 5: importance ranking — DONE (2026-08-16)

Ranker: `scripts/rank_entities.py` (deterministic, no model calls).

Signals per person over connections.jsonl + reading records: mentions,
distinct chapters, distinct volumes (arcs.md boundaries), relationship
degree (distinct people sharing a source statement), first/last
chapter. Tier thresholds measured from the real distribution + role
flags for gods/daemons (lore-critical even when rarely named).

Output: `.weaver/knowledge/shadow-slave/importance.md` (private; the
tier list the owner reviews).

Tiers: 0=5 (Sunny, Nephis, Cassia, Effie, Kai) / 1=24 (main cast +
gods/daemons incl. Mordret, Jet, Saint, Rain, Anvil, Weaver, Nether,
Ariel, Storm God) / 2=60 / 3=31 / 4=45. 165 people total.

Fixes found during ranking (the review gate works):
- aliases were NOT folded: person:cassie (36 mentions) had no page and
  person:mongrel double-counted into Sunny. The ranker now reads
  `<!-- alias: -->` markers and folds alias targets into the canonical
  person.
- relationship term over-weighted group scenes (1-mention person with 6
  co-mentioners scored 18); tiers now use mention + chapter thresholds,
  relationships shown but not decision-driving.

Gate: OWNER REVIEWS the tier list (importance.md) before Plan 020
spends tier by tier.

## Slice 5 follow-up: connections stale at 3148 — FIXED (2026-08-16)

Owner caught it: importance.md last-chapter anchors stopped at 3148
while reading records go to 3160.

Root cause (two layers):
1. The reading-run machinery used to regenerate connections.jsonl per
   batch; the standalone generator was never kept. Nothing rebuilt it
   for 3149-3160.
2. Worse: the 3151-3160 records were written WITHOUT the rich schema
   (links/evidence/first_known_chapter/later_corrections) — the
   subagent followed the bare 3148 reference shape I gave it. 3149-3150
   had links (100%), 3151-3160 had none.

Fixes:
- scripts/build_connections.py — the missing standalone generator
  (append-only, idempotent, checker-contract matched). Appended 419
  rows for 3149-3160, seq 13923 -> 14342, max chapter 3148 -> 3160.
- Backfill subagent enriched 3151-3160 (129 statements, 394 entity
  links, evidence + first_known_chapter added, $0.047). Epithet
  mapping applied (Raised by Wolves->effie, Nightingale->kai,
  Soul Reaper->master-jet, Queen of Worms->ki-song, King of
  Swords->anvil, King of Nothing->mordret, Lady of Shadows->revel).
  Flagged for review: 3155:04 (Sovereign of Death/Star of Ruin
  inferred epithets), cap-5 trade-offs on 3151:05 / 3152:13 / 3157:06.
- rank_entities.py re-run: tier 0 last chapters now ch3160; Revel,
  Morgan of Valor, Seishan, Nightwalker landed tier 1 with the new
  mentions.

LESSON (process): the reading run must ship its record-format
contract with the SAME field set as the established convention, and
the connections regeneration step must be a kept script, not
machinery inside a one-off reading session. build_connections.py now
exists; the page standard (slice 4) already documents the rich schema.

## Slice 5 follow-up 2: epithet audit — Sovereign of Death corrected (2026-08-16)

Owner corrected the flagged mapping: "Sovereign of Death" is SUNNY
(his Supreme title), not Nephis. Verified in the records: ch2261
"Sunny (now the Sovereign of Death, 27)"; 6 records total.

What changed:
- 3155:04's links list was coincidentally already correct (Sunny
  linked as sentence subject), so no link edit needed — but the
  subagent's reasoning note was wrong.
- REAL gap found: person-sunny.md header listed only "Lost from Light
  (True Name); Mongrel" while records show Lord of Shadows (103 recs),
  Master Sunless (40), Sovereign of Death (6), Devil Detective (5).
  Titles line updated to the full set.
- person-nephis.md: "Changing Star (True Name; also read as Star of
  Ruin)" — Star of Ruin confirmed in 4 records (ch93-3155).
- Epithet spot-check across all records (12 titles): mappings
  consistent (Raised by Wolves=Effie, Nightingale=Kai, Soul
  Reaper=Master Jet, Song of the Fallen=Cassia, Queen of Worms=Ki
  Song, King of Swords=Anvil, King of Nothing=Mordret, Lord of
  Shadows=Sunny, Lady of Shadows=Revel, Changing Star/Star of
  Ruin=Nephis). Remaining gaps are old pre-3151 records, not the
  backfill.

Decision: titles stay in the Titles header line (page standard),
NOT as alias markers — aliases are id-shaped (person:mongrel) and
checker-validated as unique page-name variants; epithets are display
titles. The two concepts stay separate.
