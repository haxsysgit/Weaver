# Plan 033.5 brief for the executor (`deepseek-flash`)

The plan is `plans/033.5-meaning-search-keeps-up.md`. Read it first. You
run slices 2, 3 and 4. You are a capable engineer: fix what breaks, make
reasonable calls, keep going, and write down what you decided and why.
Stop only for the hard rules.

## 1. Hard rules

1. **Never rebuild the index.** No call may delete or recreate the
   `novel_chunks` collection. Change it chapter by chapter only.
2. **Match before you write.** Before the real update (slice 4), prove the
   pinned settings reproduce the stored index on at least three unchanged
   chapters spread across the novel: identical line spans, cosine at
   least 0.999 per chunk. If not, stop and report.
3. **Copy first.** Before the real update, copy `.weaver/retrieval/index`
   to `.weaver/retrieval/index.before-033.5` (and `coverage.json` beside
   it). Never delete either copy.
4. **No model spend.** This brief needs no DeepSeek call through the
   product. Embedding is local (fastembed, CPU).
5. **Private stays private.** Never print, copy, or commit the DeepSeek key;
   never open `.env`. No novel text in any committed file, log line, or
   report. `novels/` is read-only.
6. **Git.** Commit with the prefix `Plan 033.5: ` and no trailer lines of
   any kind. Stage files by name. Never stage the owner's unrelated
   uncommitted work (`uv.lock`, `package.json`, `package-lock.json`,
   `.agents/`, `docs/`, `vision.md`, `scripts/build_prod_bundle.py`,
   `deliverables/015-*`, `deliverables/019-*`). Never push, merge, tag,
   stash, reset, amend, or force. Keep LF line endings (the checkout is
   LF; check `git diff --stat` before committing: a whole-file diff means
   CRLF crept in).
7. **One process on the index.** Never start the Weaver server. If port
   8016 is in use, ask the owner to stop it.
8. **Tests mean something.** Write the test first, watch it fail, then
   make it pass. Never weaken or delete a test to get green.
9. **Owner-only:** reader-facing copy, Settings UI, scope changes.

## 2. What has been found (planning agent, 2026-11-04)

- The live index was built with `chunk_chapter(..., target_lines=40,
  overlap_lines=19)` (the chunker's defaults are 40 and 10). With 40 and
  19, all 3,046 unchanged chapters reproduce their stored spans, and
  `TextEmbedding("BAAI/bge-large-en-v1.5")` on the chunk `text`
  reproduces stored dense vectors at cosine 1.000.
- Stored payload per point: `chapter`, `line_start`, `line_end`,
  `source_hash` (the chunk's `source_hash`), `source_kind: "novel"`.
  Vectors: `dense` (1024) and `bm25` (BM42 via `splade_encoder` over
  `SparseTextEmbedding("Qdrant/bm42-all-minilm-l6-v2-attentions")`).
- 81 chapters (3047 to 3127) have a stored `source_hash` that no longer
  matches the file. 3128 to 3232 have no points. Total 6,826 points.
- `experiment._point_id` uses `hash()`, which differs per process. Use a
  stable id for new points (for example the first 8 bytes of a SHA-256 of
  `"chapter:line_start"`, as an unsigned int below 2**63). Remove a
  chapter's old points by a `chapter` filter, whatever their ids.
- `coverage.json` (`.weaver/retrieval/`) is read by `weaver.shelf.
  search_coverage`; the prompt says the meaning half reaches it.
- The scheduled refresh is `weaver.corpus.schedule.run_scheduled_refresh`;
  its status lands in `.weaver/corpus/shadow-slave/library-status.json`.
  Embedded Qdrant raises when another process holds the index: that is
  the "busy" case.

## 3. Slices

**Slice 2, update in place.** Pin the settings (chunk 40 and 19, both
models) in one place. Write the update function in `weaver.retrieval`
(the plan's Scope says what it must do) and its tests with a fake
embedder (floor item 3). Make `scripts/build_library_index.py` use the
pinned settings and default its ceiling to the shelf. Floor; commit.

**Slice 3, command and weekly refresh.** `weaver library index` and
`--check` (counts only: missing, changed, current, coverage). The
scheduled refresh runs the update after its chapter step, and when the
index lags; a busy index records an `index` entry in the status (waiting,
reaches chapter N) and the refresh outcome is otherwise unchanged. Tests;
floor; commit.

**Slice 4, the real run.** Server stopped. `--check` (record). Copy the
index (rule 3). Match test (rule 2), recorded. Run the update and time it.
`--check` again: expect 0 missing, 0 changed, coverage 3232. Probes,
recorded as counts: point count; a `semantic_search` limited to chapters
3128 to 3232 returns hits with `found_by` containing meaning; a fixed
query on an old stretch (for example "Sunny" in chapters 1 to 500)
returns the same top chapters as against the copy taken before the run.

## 4. Report

Write `.weaver/evaluation/plan033.5/EXECUTOR_REPORT.md` (private): what
ran, the floor numbers, the match test, the timings, the probe counts,
every decision you made and why, anything unusual. Tell the owner when
it is ready.

## 5. Setup

```bash
cd /c/Users/haxsy/weaver
export UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python   # every uv command needs it
```

Floor at every code slice: `uv run pytest -q`, `uv run --with ruff ruff
check` on changed files, and `npx vitest run` and `npx tsc --noEmit` once
before the last commit (no frontend change is expected).
