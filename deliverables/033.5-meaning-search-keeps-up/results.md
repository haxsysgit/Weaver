# Results

## Status

**Complete (2026-11-05), pending the owner's decision.** Live spend
**$0.45** of the $3.00 cap (the Reader Trials; embedding is local).

## Summary

1. **The meaning half now reaches the whole shelf.** One in-place update
   took the index from 6,826 points (chapters 1 to 3127) to 7,171 (1 to
   3232) in 373 seconds on CPU. Nothing was deleted or rebuilt; no
   unchanged chapter was re-embedded.
2. **It keeps up on its own.** The Saturday refresh runs the same update
   after its chapter step. A busy index (the server holds it) is recorded
   as waiting and caught up on the next run.
3. **A planning finding was wrong and is corrected.** The 81 chapters 3047
   to 3127 did not change on disk: every stored hash matches its raw file.
   They contain scrape debris lines that Weaver blanks when reading (Plan
   031), so the planning probe, which hashed the blanked text, saw a
   difference. Their line numbers are still right. After the review
   (finding 2) they were re-embedded once from the text Weaver reads.
4. **The Reader Trials gate fails: 9 of 12 on the evaluator record.** The
   vague ask, the confusing fight, and the fanfic spark fail, on the answer
   path, not the index (details below). This build should not reach
   `main` until a follow-up fixes them and the owner approves a re-run.

## The build

| Piece | Where |
|---|---|
| Pinned settings (chunk 40 lines, overlap 19, bge-large dense, BM42 sparse) | `src/weaver/retrieval/index_settings.py` |
| Check and in-place update, stable point ids, coverage | `src/weaver/retrieval/meaning_index.py` |
| Stable `_point_id` (SHA-256, was Python `hash()`) | `src/weaver/retrieval/experiment.py` |
| Full build uses the pinned settings and the shelf as its ceiling | `library.build_library_index`, `scripts/build_library_index.py` |
| `weaver library index [--check]` | `src/weaver/cli.py` |
| Weekly refresh step, recorded under `index` in the status | `src/weaver/corpus/schedule.py` |

Decisions taken while building (planning agent as executor):

- **A chapter is current when its stored hash equals the raw file's
  hash** (`ChapterIndex.source_hash`), the same hash every citation
  carries. Chunk text is what Weaver reads (debris blanked, line numbers
  unchanged), so new vectors match what the reading tools open.
- **Old points are removed by a `chapter` filter**, after the new vectors
  for that batch exist, so the old build's unstable ids do not matter.
- **Coverage is written even when a run stops part-way**, from a fresh
  check, so the prompt's reach line never overstates.
- **No index on the machine is left alone** (`no_index`); building one
  from scratch stays the build script's job.

## The real run (slice 4)

| Step | Result |
|---|---|
| `--check` before | shelf 3232, current 3127, missing 105 (first 3128), changed 0, coverage 3127 |
| Copy | `.weaver/retrieval/index.before-033.5` (81 MB, identical by `diff -r`) and its coverage file |
| Match test (chapters 1, 800, 1600, 2400, 3000, 3046) | spans and hashes identical, minimum cosine 1.000000 on every chunk: PASS |
| Update | 105 chapters, 345 points, 373 seconds, exit 0 |
| `--check` after | missing 0, changed 0, current 3232, coverage 3232 |
| Second run | `current`, 0 embedded, 0 written |

### Probes (counts only)

| Probe | Before | After |
|---|---|---|
| Points in `novel_chunks` | 6,826 | 7,171 |
| Hybrid search limited to 3128 to 3232, hits found by meaning (3 queries, 8 hits each) | 0, 0, 0 | 8, 8, 8 (all found by both halves) |
| Top 10 meaning-only chapters in 1 to 500 (3 queries) | baseline | identical |

## Review repair run

Review finding 2 (`3f3ddde`) made the check also compare the text Weaver
reads and the chunk count. Under it, `--check` found 186 chapters stale
(3047 to 3232): every chapter from 3047 on carries a scrape debris line,
and the first pass had written 3128 to 3232 without the new fields. One
update re-embedded them; see the table below for the counts.

| Step | Result |
|---|---|
| `--check` under the repaired rules | changed 186 (first 3047), missing 0, coverage 3046 |
| Update | 186 chapters, 481 points, 840 seconds, exit 0 |
| `--check` after | missing 0, changed 0, current 3232, coverage 3232 |
| Points | 7,163 (8 fewer: blanking debris lines shortened a few chapters by a chunk) |
| Probes | new range 8 of 8 found by meaning on every query; old-range top ten unchanged |

## Reader Experience Trials (slice 6)

Build: `3f3ddde` code (the trials' answer path is unchanged since `70d5793`);
index at 7,171 points, chapters 1 to 3232, before the repair run. Voice
`buddy` (fanfic: `storyteller`), reader at chapter 3160 (first-timer: 300),
spoiler mode protect. One trial per process through the real web app, fresh
device each, evaluator turns from Plan 030. Live spend **$0.45** (cap $3.00).

**Evaluator record: 9 of 12 pass.** This is evidence, not the owner's
acceptance. H3 is not confirmed.

| # | Trial | Verdict | Conversation | Storytelling |
|---|---|---|---|---|
| 1 | Vibe check | Pass | Buddy, no lore, leaves room. Asks for the reader's favourite chapter three turns running. | n/a |
| 2 | Hot take | Pass | Takes a side, argues, challenges back ("got one?"). | Every quote checked is in its cited chapter. |
| 3 | Half-memory | Pass | Corrects the order and the pronoun without condescension. | Turn 1 missed the key passage; from turn 2 the fight is retold from ch. 1247 with a verbatim quote, vivid and in order. |
| 4 | First-timer | Pass | Holds the boundary warmly, gives a useful ch. 298 pointer. | n/a |
| 5 | Theory | Pass | Engages, labels canon and inference, bets 85/15. One garbled word ("Warren-era"). | Quotes real (chs. 15, 353, 2412, 2443). |
| 6 | Vague ask | **Fail (accuracy)** | Forgets its own ch. 118 citation one turn later; "corrects" a claim it never made. | Turn 4 invents a canon link (a Second Nightmare "sky with hands", a Cassie vision with a "crown of light") and states it as fact. The phrase is nowhere in the novel. |
| 7 | Emotional favourite | Pass | Matches the energy, no lecture. | The Rain picnic and the shadow bond retold with real quotes (chs. 15, 3156). |
| 8 | Low-effort | Pass | Verdict first, survives "why", "huh", "tldr". Opener and "prep" turn about 270 words; first answer took 70 seconds. | n/a |
| 9 | Long thread | Pass | Holds its top three across nine turns, refuses two false "you said" claims. Misses the third (treats it as a lookup). | Ranking leaves out Sunny and Nephis and hedges heavily. Quotes real. |
| 10 | Adversarial | Pass | Unbothered, admits being a word predictor, shows receipts. "Prove it" took 97 seconds. | Quotes real (chs. 1, 15, 373). |
| 11 | Fanfic spark | **Fail (conversation)** | The fit question ("would this fit before chapter 400?") got the generic gap answer after a provider stream failure and an 8 h 16 min retry. | Turns 1 to 4 are novel-quality prose, labelled, in character after the push, canon intact (Immortal Flame and Broken Sword, ch. 27). Two turns took 14 to 16 minutes. |
| 12 | Confusing fight | **Fail (accuracy, storytelling)** | "I still can't picture the arena" got the generic gap answer. | Told the reader there is no Sunny against Kanakht fight in the Eternal City; there is (the Flesh of Kanakht, chs. 2709 to 2716). Said Jet's duel has no winner; ch. 2706 says she slew the Cursed Wanderer. Quotes it did use are real. |

### What the failures share

- **The gap answer stood in where Weaver should have answered.** The same
  156-character "I couldn't pin that down in the chapters I opened" reply
  appeared three times (long thread turn 5, confusing turn 3, fanfic turn
  5), twice on the push the trial exists to test. Plan 033 added it so no
  turn goes silent; here it stands in for a reread of what Weaver had
  already found. This is Plan 033 review finding 10 showing up in the
  Reader Trials.
- **Stopping too early in a long arc.** The confusing fight answer read up
  to ch. 2699 and concluded; the fight is in chs. 2704 to 2716, which the
  meaning index has covered since before this plan. Not caused by this
  plan's index change.
- **Invention stated as canon** (vague ask) is a safety failure: no
  invented canon, no fake certainty.
- **No deadline on a model call.** One turn ran 8 h 16 min; the product
  had no time limit to stop it.

Per the plan, failures are recorded, not tuned or re-run here.

## Verification floor

| Check | Result |
|---|---|
| `uv run pytest -q` | 896 passed, 4 skipped after the review repairs (865 at the 033 close, plus 31 new) |
| Ruff on changed files | no new findings (existing ones in `cli.py`, `library.py`, `experiment.py` unchanged) |
| `npx vitest run` | 185 passed |
| `npx tsc --noEmit` | clean |

## Commands

```bash
uv run weaver library index --check
uv run weaver library index
uv run python deliverables/033.5-meaning-search-keeps-up/tools/match_and_probe.py match
uv run python deliverables/033.5-meaning-search-keeps-up/tools/match_and_probe.py probe [--index PATH]
```

Run outputs are private, under `.weaver/evaluation/plan033.5/`.
