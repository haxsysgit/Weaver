# Plan 010 Deliverables

This folder holds public, content-free evidence for Weaver's local developer
and debugging console. Plan 010 was accepted and closed on 2026-08-02.

> Accepted as Weaver’s developer and debugging console. No further product polish.

Maintenance bug fixes remain allowed. The TUI is no longer a product surface.

## Architecture

![Plan 010 architecture](architecture.svg)

- Editable source: [`architecture.drawio`](architecture.drawio)
- Rendered preview: [`architecture.svg`](architecture.svg)

The visual shows the open OWNER and WEAVER transcript blocks, labelled
streaming preview, auto-growing composer, owner controls, `SessionWeave`
boundary, filtered durable history, and cooperative cancellation boundary.
The editable source and preview were both XML-validated and the preview was
inspected at 1400 x 900. The local draw.io exporter is unavailable, so the
matching SVG was maintained directly.

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Planned 2026-07-30 |
| `learning.md` | Plain-language understanding and owner gate | Confirmed 2026-07-31 |
| `architecture.drawio` | Editable console architecture | Updated 2026-08-02 |
| `architecture.svg` | Rendered architecture preview | Updated and inspected 2026-08-02 |
| `results.md` | Deterministic observations and executed commands | Accepted closeout evidence 2026-08-02 |
| `rubric.md` | Acceptance checklist | Passed 2026-08-02 |
| `review-ledger.md` | Independent findings, repairs, and rechecks | All closeout rechecks PASS |
| `decision.md` | Owner's final accept or reject record | Accepted and closed 2026-08-02 |

No novel prose, chats, credentials, private receipts, or raw model reasoning
belong here.
