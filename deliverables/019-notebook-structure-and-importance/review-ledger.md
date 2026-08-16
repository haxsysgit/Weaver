# Review Ledger

## Status

Reviewed (Plan 019 slices 8+9, independent reviewer f14b842c, 2026-08-16).

## Verdicts (reviewer)

- A. --through scoping correctness: PASS (bounded hashing, bounded
  prose, global passes metadata-only; ~5s vs 18.5s structurally
  supported). Caveats: through=100 still emits range noise (inherited,
  pinned by tests); live notebook FAILed at every through until the
  progress file was fixed.
- B. Faithfulness of the split: PASS, one dropped check — connection
  rows never validated line_start; guard added in follow-up (c9b7363).
- C. Test integrity: PASS — 39 tests spawn the shim and exercise the
  module end-to-end. Gaps: no freshness/CLI/generator tests.
- D. Freshness checks: PASS with notes — connections freshness works,
  page freshness matches page conventions, warnings never fail.
- E. Privacy: PASS — diagnostics carry paths + fixed rule strings
  only; never story text.

## Blockers found

1. HIGH — build_connections.py evidence variable was dead code; row
   hardcoded line_start: 1. FIXED (c9b7363), verified by synthetic run.
2. MEDIUM — line_start==1 guard missing for connections; progress file
   stale at 3148 blocking checker PASS. FIXED (c9b7363).
3. MEDIUM — cli.py passed "--novel-dir None". FIXED (c9b7363).

## Data fixes

7 statements in reading/3151-3160 contained verbatim chapter prose
(9-20 word exact matches) — paraphrased; no copied-prose issues remain.

## Residual (accepted, not blockers)

- 21 broken links + 13 missing chapter notes (3148-3160) — pre-existing
  data gaps flagged by the checker, Plan 020 dependencies.
- through=100 range noise (~32k inherited issues) — pinned by tests,
  owner decision noted in results.md.
- test_live_environment_service_requires_firecrawl_key fails on the
  pre-slice-9 commit too (stale since 018.5 direct-source default).
