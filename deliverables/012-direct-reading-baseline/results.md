# Results: Build Weaver's first Shadow Slave knowledge

## Status

Plan wording locked by the owner 2026-08-03 (plain-language revision). The
method research gate and deterministic checker slice are complete. The old
chapter 1 attempt is quarantined to a private `old-attempts` folder.
Chapters have not been read yet: the three-reader run starts after the
owner names the reader agents. Final owner decision pending.

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

## Checks run

- `uv run pytest -q tests/test_story_notebook_checker.py` passed.
- `uv run ruff check scripts/check_story_notebook.py tests/test_story_notebook_checker.py`
  passed.
- The full private notebook check and independent ten-chapter review remain
  pending until the chapter run finishes.

## Outcomes

- No novel file modified.
- No knowledge base content committed.
- No private story knowledge in committed files.
