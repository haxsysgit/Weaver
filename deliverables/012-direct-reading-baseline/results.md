# Results: Build Weaver's first Shadow Slave knowledge

## Status

Plan wording locked by the owner 2026-08-03 (plain-language revision). The
method research gate and deterministic checker slice are complete. The
owner-directed rich read by pi is complete through chapter 1000 and checker-
verified (0 problems) at `.weaver/knowledge/shadow-slave/`. The parallel
codex-built notebook was deleted by owner direction on 2026-08-04; the pi
run is now the canonical notebook. The fandom wiki was added as a standing
canon cross-check source (volume boundaries source-verified and arcs.md
corrected). Owner accepted the plan on 2026-08-04.

## Timeline

### 2026-08-03: Plan revision locked

- The owner supplied a plain-language revision of Plan 012 (reading flow,
  saved files, notebook checker, completion list) and confirmed it.
- Locked choices recorded in `learning.md` and `plans/012`:
  reader-positioned knowledge (Weaver talks according to where the reader
  is), three independent reads per chapter, pure reading with no embeddings
  or search, chapters 1-100 from the start, old attempt quarantined, short
  novel excerpts allowed only in private chapter notes, chapter JSON files
  are the master copy.
- The early chapter 1 pilot (built before the gate record and final
  contract) is candidate evidence only, never accepted output. Its verified
  content will not be reused in the new run.

### 2026-08-03: Method research and checker slice

- Rechecked the primary arXiv pages for Narrative World Model,
  ReadAgent, and Shadow-Loom. The public method note records only the
  resulting record-shape decisions; it contains no story knowledge.
- Added `scripts/check_story_notebook.py` and synthetic tests. The checker
  validates source hashes and locations, resumable chapter order, evidence
  labels, links, reader/reconciliation/review gates, private permissions,
  copied-prose rejection, and Git exposure without printing saved story
  text.
- `uv run pytest -q tests/test_story_notebook_checker.py` passed (29 tests).
- `uv run ruff check scripts/check_story_notebook.py tests/test_story_notebook_checker.py`
  passed.
- Moved the old pilot into the private `old-attempts/20260803-pilot/`
  quarantine. Chapter 1 will be written again from zero.

### 2026-08-03: Private reading and independent review

- Three independent reader roles were run for chapters 1-100: lead, plot
  and cause checker, and character and world checker. The coordinator
  reconciled each chapter and reopened its source before saving it.
- The private notebook contains 100 readable chapter notes, 100 matching
  JSON master records, 44 entity pages, 924 connections, and a complete
  progress record. JSON and connection files store locations, not copied
  novel prose.
- An independent reviewer checked all ten chapter groups. All 200 saved
  statements passed their named chapter ranges after source-location repairs;
  no later-knowledge leaks or structural mismatches remain.
- The source-grounded checker passes the rebuilt notebook with zero problems.

### 2026-08-03: pi run, batch 1 (chapters 1-20)

- Owner directed pi to redo Plan 012 itself, aggressively (20 chapters per
turn) with max continuity, so the two runs can be compared.
- Karpathy LLM wiki research done first (see
  `deliverables/006-durable-conversation-architecture/research-karpathy-llm-wiki.md`);
  adopted index.md (read first every turn) and log.md (append-only journal)
  as the continuity mechanism.
- Read chapters 1-20 in full with line numbers; wrote 20 master records
  (88 statements, 4-6 per chapter), 20 chapter notes, 33 entity pages, 180
  connections, timeline, mysteries, relationships, interpretations, and the
  continuity index/log.
- Reading continued to chapter 1000 across later batches (see log.md and
  reading-progress.json); the notebook is checker-verified through 1000.
- Checker passes with zero problems: `uv run python
  scripts/check_story_notebook.py --root .weaver/knowledge/shadow-slave
  --through 1000 --novel-dir novels/shadow-slave`.
- Notebook lives at `.weaver/knowledge/shadow-slave/`; dirs 700, files
  600, never committed.

## Checks run

- `uv run pytest -q tests/test_story_notebook_checker.py` passed.
- `uv run ruff check scripts/check_story_notebook.py tests/test_story_notebook_checker.py`
  passed.
- `uv run python scripts/check_story_notebook.py --root
  .weaver/knowledge/shadow-slave --through 1000 --novel-dir
  novels/shadow-slave` passed (canonical pi run): 1000 chapters, 2422
  statements, 7334 connections, 0 problems.
- The independent ten-chapter review passed all 200 statements after the
  evidence repairs.
- `uv run pytest -q` passed.
- `uv pip check` passed.
- Staged scans found no staged files, tracked novel files, tracked private
  notebook files, credentials, or private-text matches.

## Outcomes

- No novel file modified.
- No private story knowledge committed; the private notebook remains ignored
  under `.weaver/`.
- Weaver application code unchanged.
- Owner acceptance recorded in `decision.md` (Accepted, 2026-08-04).
- No private story knowledge in committed files.
