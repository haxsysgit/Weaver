# Learning Note

## Gate status

**Admitted 2026-11-04** (owner: "admit plan 33.5 but no you will be doing
everything"). Admission confirms the owner directions and the findings in
the plan's "Owner direction" section, and approves one run of the twelve
Reader Experience Trials (slice 6). The planning agent (Opus) executes all
slices; the runbook's hard rules bind it.

## Observations (planning agent, 2026-11-04, no model spend)

- The live index's chunks are the story chunker at 40 target lines and 19
  overlap: all 3,046 unchanged chapters reproduce their stored line spans.
- CPU re-embedding reproduces stored dense vectors at cosine 1.000
  (chapters 1, 2000, 3000; about 15 chunks in under 30 seconds after the
  model loads).
- 81 chapters (3047 to 3127) changed on disk after indexing; 105 (3128 to
  3232) were never indexed.
- The build script's defaults (12 and 5, ceiling 1000) and `hash()`-based
  point ids would make a different, duplicated index if re-run.

## Hypotheses (not decisions)

- **H1.** One update brings the index level with the shelf (0 missing, 0
  changed, coverage 3232) in under 30 minutes on CPU, without touching
  unchanged chapters.
- **H2.** Searches limited to chapters past 3127 return hits found by
  meaning, and searches on old chapters are unchanged.
- **H3.** The finished 033 and 033.5 build passes the twelve Reader
  Experience Trials on the evaluator record. Plan 033's check set suggests
  wide what-if answers (Trial 5, the theory) are the most at risk.

## Outcomes (planning agent, 2026-11-05; evidence, not decisions)

- **H1 confirmed.** One in-place update reached 0 missing, 0 changed,
  coverage 3232 in 373 seconds on CPU, touching no unchanged chapter; a
  second run wrote nothing.
- **H2 confirmed.** Searches limited to chapters 3128 to 3232 went from 0
  to 8 of 8 hits found by meaning; old-chapter searches kept the same top
  ten.
- **H3 not confirmed.** 9 of 12 Reader Experience Trials pass the evaluator
  record (vague ask, confusing fight, fanfic spark fail). Plan 030 passed
  12 of 12 on the v2.0.0 candidate. The failures trace to the answer path
  (the gap answer standing in for a reread, stopping early in a long arc,
  one invented canon link, no model-call deadline), not to the index.
- **Planning finding corrected.** The 81 chapters thought "changed on disk"
  were unchanged files with scrape debris that Weaver blanks; the probe had
  hashed the blanked text. Every chapter from 3047 on carries such a line.
- **Executor note.** The planning agent built slices 2 to 4 itself (owner,
  at admission); a fresh subagent's review found two Major defects (crash
  safety, debris-aware freshness), both repaired before close.
