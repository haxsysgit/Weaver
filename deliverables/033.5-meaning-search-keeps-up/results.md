# Results

## Status

**Slices 2 to 4 complete (2026-11-04).** Review (slice 5) and the Reader
Experience Trials (slice 6) are in progress.

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
   difference. Their line numbers are still right, so they were left as
   they are.

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

## Verification floor

| Check | Result |
|---|---|
| `uv run pytest -q` | 888 passed, 4 skipped (865 at the 033 close, plus 23 new) |
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
