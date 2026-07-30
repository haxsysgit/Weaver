# Plan 010 Deliverables

This folder holds public, content-free evidence for the TUI entrypoint:
the first chat window the owner uses to talk to Weaver.

## Architecture

![Plan 010 architecture](architecture.svg)

- Editable source: [`architecture.drawio`](architecture.drawio)
- Rendered preview: [`architecture.svg`](architecture.svg)

The visual shows the Textual TUI widget tree (Header, RichLog, Input), the
async event-loop integration with `SessionWeave.send()`, the fake/live mode
selection based on `DEEPSEEK_KEY`, and the tool registration boundary.

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Planned 2026-07-30 |
| `learning.md` | Plain-language understanding and owner gate | Pending confirmation |
| `architecture.drawio` | Editable TUI architecture | Pending |
| `architecture.svg` | Rendered architecture preview | Pending |
| `results.md` | Deterministic observations and executed commands | Pending implementation |
| `rubric.md` | Acceptance checklist | Pending implementation |
| `review-ledger.md` | Independent findings, repairs, and rechecks | Pending implementation |
| `decision.md` | Owner's final accept or reject record | Pending |

No novel prose, chats, credentials, private receipts, or raw model reasoning
belong here.
