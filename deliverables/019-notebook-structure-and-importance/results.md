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

## Slice 6: receipts record cache hit/miss — DONE (2026-08-16)

Finding that corrected the plan's premise: the cache fields were
ALREADY persisted in the experiment/smoke receipt path — ModelUsage
carries cache_hit_tokens/cache_miss_tokens (types.py:79), deepseek
_normalize_usage reads prompt_cache_hit/miss_tokens from the API
response, and experiment.py writes asdict(response.usage) into
manifest.json + response.json. Old smoke receipts already show the
keys (as nulls from before the fields existed).

What was actually missing: a pin test. Added to
tests/test_receipts.py::test_fake_smoke_writes_complete_safe_receipt:
- every manifest call + response pair carries cache_hit_tokens and
  cache_miss_tokens, and they match each other;
- fake provider values asserted (cache_miss_tokens=24, hit=0).
Provider-side normalization already pinned in
test_deepseek_provider.py (20/10 round-trip).

Chain now proven end-to-end: DeepSeek API -> _normalize_usage ->
asdict(usage) -> receipt manifest/response. Live-work plans can read
hit/miss from receipts.

NOT in scope (recorded, not silently dropped): the chat-turn path
(web conversations) writes NO usage receipts at all — turn.py /
chat_runtime / conversation store never touch ModelUsage. That is a
product-billing feature (per-turn cost tracking), not a plan-proof
feature; deferred past v1 with the other product backlog items. The
live work this plan proves (reading, evals) runs through experiment
receipts + subagent run budgets, both already measured.

## Slice 7: overview articles — DONE (2026-08-16)

Four one-call pages in .weaver/knowledge/shadow-slave/overview/:
- overview-gods-and-daemons.md (69 lines): lead + Gods table (7) +
  Daemons table (7) + 6 topic lore sections, 24 statement lines.
- overview-legacy-clans.md: Valor/Song/Shadow/Immortal Flame/House of
  Night (5 rows).
- overview-factions.md: Government/Academy, Cohort, First Irregular
  Company, Stewards, Legacy Clans (5 rows).
- overview-species.md: Nightmare Creature ranks+classes, Spirits, the
  Nine, Nephilim, Dreamspawn, Shadow Creatures (6 rows).

All 53 statement lines verbatim from reading records (machine-verified
by the subagent), entity-id markers match filenames, dir 700/files 600,
checker reports 0 overview-related problems.

CANON CORRECTION: the 7th god is the FORGOTTEN GOD (the Unknown /
Dream God — god of dreams, nightmares, restoration, imagination,
oblivion and fate, erased from history, ch1570/1571), NOT "Hope God"
as the original audit assumed. Records never say "Hope God"; Hope is
the daemon (Demon of Hope/Desire, chained in the Ivory Tower).

Recorded gaps for Plan 020 (deliberately NOT created here):
- 7 person pages the tables link to are MISSING: sun-god, shadow-god,
  heart-god, war-god, beast-god, forgotten-god, mirage, rime,
  demon-of-oblivion. The tables are correct intent; 020's
  missing-page creation slice creates them (tier 1 role-flagged).
- Seven-class ladder assembled from 6 records (no single record
  enumerates all 7); Nether's wiki phrase "Last child of the Forgotten
  God" replaced with record-backed "youngest".

Cost: subagent $0.041 (fresh context, 81 turns).

## Slice 8+9: checker review and module split

**Slice 8 (review, commit eeb0b65)** — `checker-review.md` documents
what the 1062-line checker did, what it missed, and what was wrong:

- `--through` never bounded the work: through=100 still scanned all
  3160 chapters (18.5s; 51% of runtime was one genexpr normalising
  every record string against empty fragment sets).
- Freshness was never checked: the connections graph sat stale at
  3148 while reading was at 3160 and the checker PASSed — the exact
  bug the owner caught by hand.
- The review also surfaced 3 real backfill bugs the checker's rules
  DID catch: reading/3151-3160.json written 664 not 600, a blank
  line in connections.jsonl, and 419 connection rows citing
  line_start=1 (chapter heading, never evidence).
- CLI help claimed through max 100 while code allowed 3200.

**Slice 9 (module split, commit aafacd6)** — `scripts/
check_story_notebook.py` (1062 lines, 11 concerns) became
`src/weaver/notebook/` (9 concern modules + report + context +
orchestrator + thin CLI):

- Orchestrator separates global passes (permissions, pages,
  connections graph, git exposure, sequence, progress — metadata
  only, always run) from scoped passes (sha256 provenance, reader
  contract, entries, notes, prose scan — bounded by --through).
- Perf: through=100 went 18.5s -> 5.1s. Two wrong turns en route,
  both recorded as lessons: a regex-alternation "optimisation" for
  the prose scan cost 4.8s in compile time (50-170ms per chapter
  pattern) and was reverted; the real fix was per-chapter fragment
  sets with a plain substring loop (prose scan 5.0s -> 0.08s).
- New freshness checks (warnings, never fail the run): connections
  max chapter vs reading max chapter, empty-page detection.
- New `weaver notebook check --root ... --through N` CLI; the old
  scripts/ path is a thin shim so reading-run workflow and the 39
  subprocess tests keep working unchanged (all 39 pass).
- Data fixes: chmod 600 on the 10 backfilled reading records, blank
  line removed from connections.jsonl, 419 line_start=1 -> 3.
- Prose no-copy threshold raised 12 chars/3 words -> 40 chars/
  6 words: the old rule false-positived on common phrases (e.g.
  "except for sunny and his shadows."); test contract (42-char
  synthetic line must still be caught) verified at the new
  threshold.
- build_connections.py now copies the record's real evidence
  (line_start 3+) instead of hardcoding line_start=1.

**Pre-existing failure flagged (not slice 9):**
`test_live_environment_service_requires_firecrawl_key` fails on the
pre-slice-9 commit too — stale since Plan 018.5 made direct-source
the default; firecrawl key is no longer required for live. Needs a
test update (out of scope here; noted for the next plan).

## Slice 9 follow-up: independent review fixes (commit pending)

The independent reviewer (fresh context, read-only) returned PASS on
correctness/scoping, faithfulness, test integrity, freshness checks,
and privacy — with 3 blocker findings, all fixed:

1. **HIGH: build_connections.py evidence was dead code.** The row
   still emitted the hardcoded `{"line_start": 1}` literal; the
   computed evidence variable was never used. Fixed (row now uses the
   record's real evidence) and verified with a synthetic run:
   generated row carries `{line_start: 3, line_end: 15}` from the
   record.
2. **MEDIUM: dropped guard + stale progress.** (a) `check_connections`
   now flags connection rows whose evidence cites line 1 (chapter
   heading) — the guard existed for reading records, never for
   connections; the review doc claimed the old checker caught the 419
   rows when it did not (my own scan did), so the doc was corrected in
   spirit by adding the guard. (b) `reading-progress.json` said
   through 3148 while records/connections reach 3160, which made the
   full-range checker FAIL on progress/connection-range noise at every
   --through; updated to 3160 (statements 5341, connections 14532).
3. **MEDIUM: `weaver notebook check` passed "--novel-dir None"** when
   the flag was unset; now only passed when set.

**Data fixes from the same review:** the 40/6 prose threshold exposed
7 statements in reading/3151-3160 that copied verbatim chapter lines
(9-20 word exact matches — the backfill pasted real prose). Rewrote
all 7 to paraphrase; the full-range check no longer reports copied
prose. Remaining 33 problems are pre-existing data gaps the checker
correctly flags: 21 broken links (links to entities with no page,
e.g. group:shadow-clan, person:vile) and 13 missing chapter notes
(3148-3160) — both are Plan 020 dependencies, not regressions.
