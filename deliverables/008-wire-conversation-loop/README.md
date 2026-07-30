# Plan 008: Wire the conversation loop

## Status

**Planned.** Learning gate is the next step.

## Goal

Zip `conversation/` and `agent/` into one working conversation.
`SessionWeave.send()` calls `run_turn()` with a fake model, tool calls go
through `ToolRegistry.dispatch`, and results settle as `conversation_item`
rows.

## Deliverables

| File | Purpose |
|---|---|
| `plan.md` | Pointer to canonical plan |
| `learning.md` | Learning gate questions and answers |
| `rubric.md` | Acceptance checklist |
| `results.md` | Implementation results |
| `review-ledger.md` | Independent review findings |
| `decision.md` | Owner acceptance record |
| `architecture.drawio` | Diagram (before acceptance) |
