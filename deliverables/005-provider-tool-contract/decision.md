# Owner Decision: DeepSeek tool payload contract

## Status

**Accepted by the owner on 2026-07-30.**

- Owner choice: accept Plan 005
- Date: 2026-07-30
- Reason: both admitted live model contracts passed, the deterministic floor is
  green, receipt privacy and diagram evidence passed inspection, and both
  independent reviewers passed the repaired candidate with no blocker

## Accepted boundary

- Shared Weaver model types stay provider-neutral.
- Thinking remains disabled for this tool loop.
- Flash runs before Pro, with one attempt per model and no fallback.
- The real SDK serializer and streaming parser stay covered by deterministic
  transport tests.
- Live credentials must be explicit in the process environment. The CLI does
  not silently restore a key from `.env`.
- Thinking-enabled reasoning replay remains deferred to a later admitted plan.
