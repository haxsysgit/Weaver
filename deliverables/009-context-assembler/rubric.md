# Acceptance Rubric: Context assembler

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Pending | Confirmation pending |
| Plan 008 is accepted | Pending | Plan 008 owner decision |
| `ContextAssembler` exists at `src/weaver/conversation/assembler.py` | Not built | |
| `assemble()` returns `tuple[list[ItemRecord], ContextSnapshot]` | Not built | |
| Token counting uses `tiktoken.get_encoding("cl100k_base")` | Not built | |
| Oldest turns drop first when budget exceeded | Not built | |
| Turn boundaries preserved (no partial turns in the brief) | Not built | |
| Most recent owner message is always included (pinned) | Not built | |
| Budget-exceeded test: 20+ item pairs, tight budget, strict subset returned | Not built | |
| Pinned message test: last owner message survives all budgets | Not built | |
| `ContextSnapshot` records `first_item_id`, `last_item_id`, `item_count`, `token_count`, `token_budget` | Not built | |
| `ConversationRunner.run_turn_in_run` calls assembler before `run_turn()` | Not built | |
| No new database tables or migrations | Not checked | Schema audit |
| No changes to `agent/turn.py`, `agent/messages.py` | Not checked | Scope audit |
| No changes to `model_layer/` | Not checked | Scope audit |
| Tool schemas are NOT counted in the budget | Not checked | |
| Full deterministic floor passes (focused tests + full suite + lint) | Not built | |
| No private content or credentials leak | Not checked | Candidate scans |
| Two independent reviews have no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
