# Results: Context assembler

## Status

Implemented 2026-07-31 (Slices 1-4); one review repair pass applied
(comments + plan scope fix, commit `3af68c3`); both independent reviews
rechecked clean. Awaiting owner decision.

## Implementation observations

- **Slice 1 (learning gate):** the 2026-07-30 draft answers were re-verified
  line-by-line against post-Plan 008 code. Draft line references were stale
  (`project_messages` is now at `agent/messages.py:70-110`, the adapter is
  module functions at `runner.py:51/146`, the working brief is at
  `docs/decisions/006-conversation-architecture.md:18-21`, and
  `ContextSnapshot` at `:161-166`). Corrected in learning.md; owner
  confirmed the gate 2026-07-31.
- **Slice 2 (assembler + shared adapter):** the pinned mapping table moved
  to `conversation/items.py` as public `items_to_messages` /
  `message_to_item`; `runner.py` re-imports them under the Plan 008 private
  names (existing tests import from `runner`, so the move is invisible).
  `ContextAssembler` counts at the projection boundary (system prompt once,
  then `project_messages` output per exchange block, content + tool-call
  arguments; tool schemas never counted), groups items into atomic exchange
  blocks (owner/assistant start a block; tool_call/tool_result join the
  block they follow), drops oldest blocks until the budget holds, and never
  drops the pinned owner message. Pin alone over budget returns the pin
  alone with `token_count > token_budget`, no raise.
- **Slice 3 (runner wiring):** `ConversationRunner` accepts
  `token_budget: int | None = None`; when set it constructs an assembler and
  filters items before `run_turn()`. Default (None) means no assembler,
  Plan 008 behavior byte-for-byte. `SessionWeave` accepts the same optional
  kwarg and forwards it. `ContextAssembler` / `ContextSnapshot` exported
  from `conversation/__init__.py`.
- **Slice 4 (tests):** seven new tests:
  `test_context_assembler_all_fit` (first_item_id None, item_count matches),
  `test_context_assembler_budget_drops_oldest_keeps_pin` (strict subset,
  oldest dropped first, newest owner survives, snapshot fields correct),
  `test_context_assembler_pin_alone_exceeds_budget` (returns pin alone, no
  raise, token_count > budget),
  `test_context_assembler_exchange_atomicity` (a budget landing inside an
  assistant(tool_calls)+tool_call+tool_result group drops the whole group;
  the surviving projection has no orphaned tool role and no unpaired
  call_id), `test_context_assembler_deterministic` (same items + budget →
  same selection/count/snapshot), `test_send_with_token_budget_drops_oldest_keeps_pin`
  (real send() through the runner drops the oldest owner text from the
  model request while the current owner text survives),
  `test_runner_unbounded_default_preserves_plan008` (no budget → full
  history reaches the model).

## Failures

- First budget test run failed: the truncation loop broke when
  `blocks[keep_from+1:]` fit but then kept `blocks[keep_from:]` (off-by-one
  on the drop boundary), so an extra block survived. Fixed by restating the
  loop as "advance keep_from while the kept suffix still exceeds the
  budget"; pin-alone fallback added after re-reading contract §2 (returns
  the pinned owner alone, not the pin plus newer blocks). Recorded as
  evidence; no silent retry.
- Two test-authoring failures: `_chat_items(3)` produces 6 items (pairs)
  but the all-fit test asserted 3; and the exchange-atomicity test expected
  `["owner", "assistant"]` but the budget also fits the newest assistant
  reply, so the correct expectation is `["assistant", "owner"]`. Both fixed
  against observed assembler behavior.

## Verification floor (2026-07-31)

- `uv run pytest -q tests/test_conversation.py tests/test_agent_turn.py` — 64 passed
- `uv run pytest -q` — 178 passed (171 baseline + 7 new)
- `uv run ruff check src/weaver tests` — clean
- `uv pip check` — compatible

## Repair pass (post-review, commit `3af68c3`)

Both reviewers passed with no blockers. Reviewer 2 raised one minor: the
plan's in-scope list omitted `session.py` (Slice 3 sanctions the kwarg
forwarding; the change itself was correct). Two nits: missing ponytail
markers for the tokenizer approximation, the O(n²) recount, and the
corrupt-data edge. Repair added the scope line and three comments only;
zero executable lines changed. Both rechecks pass (178 green, ruff
clean).
