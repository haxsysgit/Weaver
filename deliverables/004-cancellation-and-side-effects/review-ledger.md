# Review Ledger: Cancellation and side effects

## Status

The initial candidate required repair. The one admitted repair pass is
complete. Both final rechecks passed with no open blocker.

## Frozen candidates

- Initial candidate tree:
  `b6c86b7bbc7ec12a4741501a61dccaec60586867`
- Repaired candidate tree:
  `845804513d12dc02dab5ddaa38491d4297a43808`
- Initial verification: 69 focused tests, 140 full tests, clean scoped lint,
  compatible packages, and clean candidate-range whitespace

## Review 1: Task lifecycle and safety claims

- Reviewer: independent lifecycle reviewer
- Initial verdict: repair required
- Finding 1, high: `ToolExecutionPolicy` accepted a mutable caller collection,
  so effects could change after the constructor's outside-effect check
- Finding 2, medium: later unknown, inactive, or blocked calls in a cancelled
  batch went through normal dispatch gates instead of settling as cancelled
- Other checks: named tasks, cleanup settlement, completion tie, swallowed
  cancellation, no retry, start counts, real IDs, and no later model request
  passed
- Independent focused run: 62 tests passed

## Review 2: Deterministic tests and effect defaults

- Reviewer: independent evidence reviewer
- Initial verdict: repair required
- Finding 1, high: confirmed the mutable-policy outside-effect bypass
- Finding 2, medium: directly reproduced a cancelled batch where the later
  blocked call returned `effect_not_allowed`
- Finding 3, low: canonical plan and plan-index status were stale
- Passed checks: 69 focused tests, 140 full tests, scoped lint, 64 compatible
  packages, no sleeps, clean candidate whitespace, owner path hashes, no
  private-library changes, credential scan, hashes, and diagram structure
- Visual limitation: the reviewer's image viewer could not render the SVG;
  the primary inspection used a capped PNG and recorded two rounds

## Repair and recheck

The one admitted repair pass:

1. normalizes and validates effect collections into an immutable `frozenset`;
2. settles later calls directly as cancelled after cancellation wins;
3. adds blocked, inactive, and unknown later-call regressions;
4. updates stale plan status;
5. reruns the full command floor.

Repair verification:

- 71 focused tests passed;
- 142 full tests passed;
- scoped lint passed;
- 64 packages compatible;
- candidate-range whitespace passed;
- no path under `novels/` changed.

### Lifecycle reviewer recheck

- Verdict: pass
- Mutable-policy bypass: closed
- Cancelled later-call settlement: closed
- Completion-at-observation tie check: passed
- New lifecycle blockers: none
- Independent focused run: 64 tests passed

### Evidence reviewer recheck

- Runtime, test, privacy, scope, hash, and status findings: closed
- Independent floor: 71 focused tests, 142 full tests, clean scoped lint, and
  64 compatible packages
- New implementation or privacy blocker: none
- Record-only mismatch: rubric still said 140 tests and three calls
- Correction: rubric now records 142 tests and the four-call cancellation test
- Final record acknowledgement: passed
- Open blockers: none

## Readability pass

Owner-requested pass after acceptance. No behavioral changes. Five
improvements: shared error-code constants, dispatch-gate documentation,
cancellation-race explanation, result-variable lifetime comment,
EXTERNAL_EFFECT constraint annotation. 142 tests pass, lint clean.
