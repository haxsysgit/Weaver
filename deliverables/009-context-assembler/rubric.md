# Acceptance Rubric: Context assembler

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Confirmed 2026-07-31 | learning.md confirmation record |
| Plan 008 is accepted | Accepted 2026-07-31 | `deliverables/008-wire-conversation-loop/decision.md` |
| `ContextAssembler` exists at `src/weaver/conversation/assembler.py` | Built | `assemble()` returns `(filtered_items, snapshot)` |
| `items.py` extraction is a pure move | Done | runner tests unchanged; adapter moved verbatim |
| `assemble()` returns `tuple[list[ItemRecord], ContextSnapshot]` | Built | `test_context_assembler_all_fit` |
| Token counting uses `tiktoken.get_encoding("cl100k_base")` | Built | assembler `__init__`; determinism test |
| Counting at projection boundary (system + project_messages output) | Built | `_count_messages`; tool schemas excluded |
| Oldest turns drop first when budget exceeded | Built | `test_context_assembler_budget_drops_oldest_keeps_pin` |
| Exchange boundaries preserved (no partial tool exchange) | Built | `test_context_assembler_exchange_atomicity` |
| Most recent owner message is always included (pinned) | Built | pin test; `test_send_with_token_budget_drops_oldest_keeps_pin` |
| Pin alone over budget: returns pin, no raise, token_count > budget | Built | `test_context_assembler_pin_alone_exceeds_budget` |
| `ContextSnapshot` records `first_item_id`, `last_item_id`, `item_count`, `token_count`, `token_budget` | Built | snapshot dataclass + all-fit test |
| `ConversationRunner.run_turn_in_run` calls assembler before `run_turn()` | Built | runner wiring; unbounded default preserved |
| No new database tables or migrations | Checked | schema.py untouched |
| No changes to `agent/turn.py`, `agent/messages.py` | Checked | scope audit |
| No changes to `model_layer/` | Checked | scope audit |
| Full deterministic floor passes (focused + full suite + lint) | Passed | 178 tests, ruff clean, `uv pip check` clean |
| No private content or credentials leak | Pending | staged-file scan before commit |
| Two independent reviews have no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
