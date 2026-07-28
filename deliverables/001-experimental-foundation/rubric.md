# Acceptance Rubric

## Gate A — Learning and safety

- [x] Owner corrected and confirmed `learning.md`.
- [x] Owner confirmed the compromised Firecrawl credential was rotated.
- [x] `temp.md` is absent from the current working tree.
- [x] Public/private ignore rules are implemented.
- [x] Staged-file audit finds no credentials or novel text.

## Gate B — Deterministic implementation

- [x] Provider-neutral model types exist.
- [x] `ModelClient.complete(request)` is asynchronous.
- [x] DeepSeek aliases are exact.
- [x] Adapter uses an explicit timeout and `max_retries=0`.
- [x] Normal content, JSON mode, and function calls normalize correctly.
- [x] Function argument strings are not silently repaired.
- [x] Usage includes reasoning and cache details when returned.
- [x] Fake client is deterministic.
- [x] Fake and live CLI modes are explicit and never fall back.
- [x] Private receipts are redacted and owner-only.
- [x] Required deterministic commands pass.

## Gate C — Live evidence

- [x] Flash JSON call completed.
- [x] Repeated Flash prefix recorded cache fields.
- [x] Pro forced function call normalized correctly.
- [x] Returned model IDs, latency, usage, and finish reasons were recorded.
- [x] No novel text was sent.
- [x] No literary-quality conclusion was drawn.

## Gate D — Review and decision

- [ ] Architecture/privacy Pro review has no blocker.
- [ ] Test/evidence Pro review has no blocker.
- [ ] Accepted findings were repaired at most once.
- [ ] Both reviewers rechecked the unchanged repaired candidate.
- [ ] Owner inspected learning, diagrams, live evidence, and results.
- [ ] Owner finalized `decision.md`.
