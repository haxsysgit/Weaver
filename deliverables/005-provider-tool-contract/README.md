# Plan 005 Deliverables

This folder holds public, synthetic-only evidence for Weaver's provider-neutral
tool payload contract. DeepSeek is the live provider used for this experiment,
but no shared Weaver type gains a DeepSeek-only field.

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Active |
| `learning.md` | Plain-language understanding and owner gate | Confirmed |
| `results.md` | SDK-boundary and explicit live observations | Deterministic and live contracts passed |
| `rubric.md` | Acceptance checklist | Active |
| [`architecture.drawio`](architecture.drawio) | Editable provider-contract architecture | Validated |
| [`architecture.svg`](architecture.svg) | Rendered architecture preview | Inspected |
| `review-ledger.md` | Independent reviews and rechecks | Not started |
| `decision.md` | Owner's final decision | Pending |

Live receipts stay in ignored owner-only state. This folder gets metadata and
safe categories only.

The Draw.io desktop CLI is unavailable on this machine. The editable source was
validated directly, and the matching SVG was rendered to a capped PNG with
ImageMagick for visual inspection.
