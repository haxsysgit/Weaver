# Review Ledger

## Status

Closed 2026-11-18.

## Builder check on the design (subagent, 2026-11-18)

A fresh subagent read `design.md` as a builder and checked it against
the frontend code. It confirmed the bundle sizes, the `tool` event shape
and the chapter-knot regex, and raised seven questions and three wrong
claims:

| Finding | Repair |
| --- | --- |
| Opening on the sea, message times and "most recent" need engine changes | Three named changes in design section 9 (my call); only the last-activity field touches the server, in 037.1 |
| Today's first visit never sets the spoiler boundary | Corrected; a new "how far have you read" step, with skip (my call, proposed to the owner earlier) |
| Chapter knots have no tap action | Corrected; none added |
| The Soul Sea choice is in Settings, not the first visit | Corrected; retired from Settings |
| The desktop rail was not mentioned | Owner's question; owner retired it (section 7.6) |
| Which Settings survive | Owner's question; Settings rebuilt from scratch (section 7.7) |
| How a weave starts from home; Still before art; pinned and archived on the sea | My calls, recorded in the design |
