# Acceptance Rubric: Direct-reading baseline

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` (including chapter selection and questions) | Pending | Confirmation pending |
| Plan 010 is accepted | Pending | Plan 010 owner decision |
| `run_direct_reading` experiment exists in `src/weaver/experiment.py` | Not built | |
| Experiment sends identical chapter packet to Flash and Pro | Not built | |
| Blind protocol: neither model sees the other's answer | Not built | |
| 5--8 questions cover literal recall, character state, causal reasoning, and thematic interpretation | Not built | |
| Comparison matrix records agreement/disagreement/partial per question | Not built | |
| `--fake` flag produces structured comparison with pre-scripted responses | Not built | |
| Token counts recorded for both models | Not built | |
| Raw answer text recorded (no chapter text in output) | Not built | |
| Receipt written with owner-only permissions via `receipts.py` | Not built | |
| `"direct-reading"` registered in CLI experiment table | Not built | |
| `weaver experiment direct-reading --fake` produces structured output | Not built | |
| No chapter text in receipts, logs, or committed files | Not checked | Privacy scan |
| Full deterministic floor passes (focused tests + full suite + lint) | Not built | |
| No changes to `conversation/`, `agent/`, or `model_layer/` | Not checked | Scope audit |
| No credential values, private prose, or raw reasoning in output | Not checked | Candidate scans |
| Two independent reviews have no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
