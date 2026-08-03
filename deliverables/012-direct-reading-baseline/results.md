# Results: Build Weaver's first Shadow Slave knowledge

## Status

Plan wording locked by the owner 2026-08-03 (plain-language revision). The
method research gate, deterministic checker slice, private chapters 1-100
notebook, and independent ten-group source review are complete. The old
chapter 1 attempt is quarantined to a private `old-attempts` folder. Final
owner decision is pending.

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

## Checks run

- `uv run pytest -q tests/test_story_notebook_checker.py` passed.
- `uv run ruff check scripts/check_story_notebook.py tests/test_story_notebook_checker.py`
  passed.
- `uv run python scripts/check_story_notebook.py --root
  .weaver/knowledge/shadow-slave --through 100` passed: 100 chapters, 200
  statements, 924 connections, 0 problems.
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
- Owner acceptance remains pending in `decision.md`.
- No private story knowledge in committed files.
