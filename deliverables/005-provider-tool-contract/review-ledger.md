# Review Ledger: DeepSeek tool payload contract

## Status

Complete. Both independent reviewers passed the repaired candidate with no
remaining blocker.

## Review 1: Provider and SDK contract

- Reviewer: independent provider-contract reviewer
- Frozen candidate: `3f12fdd`
- Findings:
  - shared provider-neutral types and `ExperimentResult` stayed unchanged;
  - both requests explicitly disable thinking;
  - the real OpenAI 2.49 serializer and stream parser are exercised through
    `httpx.MockTransport`;
  - exact tool-call arguments and call ID survive linked result replay;
  - malformed, missing-ID, provider-error, and unexpected-finish responses stop
    at the right request boundary;
  - Flash runs before Pro, both must pass, and no retry or fallback exists.
- Initial verdict: pass, no provider-contract blocker
- Non-blocker: `results.md` still had stale pre-live status text

## Review 2: Evidence, privacy, and test quality

- Reviewer: independent evidence and privacy reviewer
- Frozen candidate: `3f12fdd`
- Findings:
  - 33 focused and 156 full tests passed;
  - lint, package compatibility, diff check, fake mode, missing-key refusal,
    receipt privacy, and diagram validation passed;
  - private receipts keep metadata only with owner-only permissions;
  - the editable diagram and SVG match and render cleanly;
  - the owner's existing CLI rename edits and audit deletion stayed unstaged.
- Initial verdict: blocked on public evidence cleanup only
- Blockers:
  - `results.md` contradicted its admitted live section;
  - the canonical plan left proven completion boxes unchecked.

## Repair and recheck

One documentation-only repair pass:

1. changed the results status to record the admitted live pass;
2. checked the canonical plan criteria already proven by evidence.

Rechecks:

- provider-contract reviewer: pass, no remaining blocker;
- evidence and privacy reviewer: pass, no remaining blocker.

No code, test, receipt schema, or diagram repair was required.

## Readability pass

Owner-requested pass after acceptance. No behavioral changes. Three
improvements: error-category constants shared between `experiment.py` and
tests, internal-exception logging added to `_run_contract_model`.
156 tests pass, lint clean, 64 packages compatible.
