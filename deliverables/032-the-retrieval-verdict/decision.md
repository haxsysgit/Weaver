# Plan 032 Owner Decision

## Status

**Closed 2026-11-03. Accepted.** The owner accepted Plan 032 ("Accept
Plan 032") after the spot-check, in which the owner agreed with all 10
verdicts.

## Decision

On 2026-11-03, after the final report, the owner chose the evaluator's
recommendation over the literal decision rule ("Retire nothing, test
first"):

- **Retire nothing now.** Vector search (passages and notebook
  statements), the notebook, and the story-map tools (`who_is`,
  `lore_path`) all stay in the pipeline.
- **Extend nothing yet.** No re-embedding past chapter 3127 and no
  notebook-statement indexing past chapter 1000 until a held-out test
  settles the paraphrase effect.
- **Plan 033 order:** first fix turns that end with no answer (35 of 372
  in Plan 032); then the held-out test, about 15 new "find the scene I
  describe" questions, arms A and D, three runs each (about $0.50). If
  arm A's lead holds, extend vector search; if not, retire it.

Reason: every arm tied on the primary metric (10 of 40 on pass^3), so the
fixed rule could not see any component; the secondary measures pointed
both ways (vector search doubles the paraphrase score on reused
questions, the notebook halves wrong answers), and retiring a part on a
measurement miss would mean rebuilding it later (`results.md`).

Also carried into Plan 033 with it: when a lookup misses, say the scene
was not found instead of presenting another scene (raised by the
owner's spot-check); close the library's search index in
`ChatRuntime.close()`, and fix the volume table (volume 13 is 3128 to
3160).

## Not part of this decision

- No merge to `main`, tag, or deploy.
