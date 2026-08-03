# Plan 012 Deliverables

This folder holds public, content-free evidence for Weaver's first Shadow
Slave knowledge build. No story knowledge belongs here.

Plan 012 reads chapters 1 to 100 with three independent reads per chapter
and builds a private story notebook under `.weaver/knowledge/shadow-slave/`
(chapter notes, JSON records, pages, connections). The plan wording is
locked (2026-08-03). Weaver's code is unchanged; the novel files stay the
final source of truth.

## Architecture

The reading loop, in plain terms: each chapter gets three independent reads
(lead, plot and cause checker, character and world checker). The lead
compares them, reopens the novel before deciding, and saves one master
JSON record per chapter. The larger pages and connection file are rebuilt
from those records. A deterministic checker rejects bad records, and a
separate reviewer later checks every statement against its named chapter
location.

Per the owner's locked choices, no diagrams are created or updated for this
plan.

| File | Purpose | Current state |
| --- | --- | --- |
| `plan.md` | Pointer to the canonical implementation plan | Active |
| `learning.md` | Plain-language understanding and owner gate | Confirmed 2026-08-03 |
| `results.md` | Observations and executed commands | Research gate and checker tests complete; reading awaits owner's reader-agent pick |
| `rubric.md` | Acceptance checklist | Updated to plain plan |
| `review-ledger.md` | Findings, repairs, and rechecks | Plan revision recorded; post-run review pending |
| `decision.md` | Owner's final accept or reject record | Final pending |
| `fictional-understanding-research.md` | Sanitized cited method research | Complete 2026-08-03; primary paper pages rechecked |

No novel prose, chats, credentials, private receipts, story-derived
knowledge, or raw model reasoning belong here.
