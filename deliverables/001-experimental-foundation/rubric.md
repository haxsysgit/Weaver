# Acceptance Rubric

## Gate A — Learning and safety

- [x] Owner corrected and confirmed `learning.md`.
- [x] Owner confirmed the compromised Firecrawl credential was rotated.
- [x] `temp.md` is absent from the current working tree.
- [x] Public/private ignore rules are implemented.
- [ ] Staged-file audit finds no credentials or novel text.

## Gate B — Deterministic implementation

- [ ] Provider-neutral model types exist.
- [ ] `ModelClient.complete(request)` is asynchronous.
- [ ] DeepSeek aliases are exact.
- [ ] Adapter uses an explicit timeout and `max_retries=0`.
- [ ] Normal content, JSON mode, and function calls normalize correctly.
- [ ] Function argument strings are not silently repaired.
- [ ] Usage includes reasoning and cache details when returned.
- [ ] Fake client is deterministic.
- [ ] Fake and live CLI modes are explicit and never fall back.
- [ ] Private receipts are redacted and owner-only.
- [ ] Required deterministic commands pass.

## Gate C — Live evidence

- [ ] Flash JSON call completed.
- [ ] Repeated Flash prefix recorded cache fields.
- [ ] Pro forced function call normalized correctly.
- [ ] Returned model IDs, latency, usage, and finish reasons were recorded.
- [ ] No novel text was sent.
- [ ] No literary-quality conclusion was drawn.

## Gate D — Review and decision

- [ ] Architecture/privacy Pro review has no blocker.
- [ ] Test/evidence Pro review has no blocker.
- [ ] Accepted findings were repaired at most once.
- [ ] Both reviewers rechecked the unchanged repaired candidate.
- [ ] Owner inspected learning, diagrams, live evidence, and results.
- [ ] Owner finalized `decision.md`.
