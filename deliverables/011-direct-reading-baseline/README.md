# Plan 011 Deliverables

This folder holds public, content-free evidence for the direct-reading
baseline: the first time Weaver reads a novel.

## Architecture

![Plan 011 architecture](architecture.svg)

- Editable source: [`architecture.drawio`](architecture.drawio)
- Rendered preview: [`architecture.svg`](architecture.svg)

The visual shows the reading pipeline: corpus packet assembly, blind Flash
and Pro calls with identical chapter text and questions, comparison matrix,
and receipt output. Chapter text stays inside the model request and is never
written to disk in results.

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Planned 2026-07-30 |
| `learning.md` | Plain-language understanding and owner gate | Pending confirmation |
| `architecture.drawio` | Editable reading-pipeline architecture | Pending |
| `architecture.svg` | Rendered architecture preview | Pending |
| `results.md` | Deterministic observations and executed commands | Pending implementation |
| `rubric.md` | Acceptance checklist | Pending implementation |
| `review-ledger.md` | Independent findings, repairs, and rechecks | Pending implementation |
| `decision.md` | Owner's final accept or reject record | Pending |

No novel prose, chats, credentials, private receipts, or raw model reasoning
belong here. Chapter text is explicitly excluded from all deliverable files.
