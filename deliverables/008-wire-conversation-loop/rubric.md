# Acceptance Rubric: Wire the conversation loop

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed `learning.md` | Pending | Confirmation pending |
| Plan 007 is accepted | Pending | Plan 007 owner decision |
| `ConversationRunner` exists at `src/weaver/conversation/runner.py` | Not built | |
| `_items_to_messages` converts ItemRecord to ConversationMessage | Not built | |
| `_message_to_item` converts ConversationMessage to ItemRecord | Not built | |
| `_persist_callback` writes items inside transactions | Not built | |
| `run_turn_in_run` calls `run_turn()` with history and persist callback | Not built | |
| `SessionWeave.send(conversation_id, user_text)` returns `TurnResult` | Not built | |
| `SessionWeave.__init__` accepts `model_layer`, `model`, `system_prompt`, `tool_registry`, `active_tools`, `execution_policy` as optional kwargs | Not built | |
| `SessionWeave.open()` creates `ConversationRunner` when model_layer is provided | Not built | |
| `test_send_fake_turn` passes with real `ToolRegistry.dispatch` | Not built | |
| Item sequence after turn is `owner → assistant → tool_call → tool_result → assistant` | Not built | |
| All items have strictly increasing `sequence` with correct `conversation_id`, `run_id`, `turn_id` | Not built | |
| No duplicate item IDs after turn | Not built | |
| Run phase transitions from `queued` to `completed` on success | Not built | |
| Run phase transitions to `interrupted` on model failure or cancellation | Not built | |
| No changes to `agent/turn.py`, `agent/tools.py`, `agent/messages.py` | Not checked | Scope audit |
| No changes to `model_layer/` | Not checked | Scope audit |
| `AgentSession` in `agent/session.py` is NOT deleted | Not checked | Scope audit |
| Fake mode works with `FakeModelProvider` and zero live model calls | Not checked | |
| Full deterministic floor passes (focused tests + full suite + lint) | Not built | |
| No private content or credentials leak | Not checked | Candidate scans |
| Two independent reviews have no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
