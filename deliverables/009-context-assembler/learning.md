# Learning Note: Context assembler

## Gate status

**Unadmitted. Owner confirmation required before implementation.**

Plan 008 must be accepted first. This confirmation admits Plan 009
implementation. It does not accept the future implementation. The final owner
decision remains pending after tests, inspection, and independent review.

## Tiny model

Plan 008 feeds every `ItemRecord` to `run_turn()`. That works for three items.
A real conversation across fifty turns with tool calls and novel passages will
produce thousands of items that don't fit in any model's context window.

The context assembler adds one decision before every `run_turn()` call: which
items enter the working brief, and which stay in the notebook? It counts tokens
with tiktoken, drops the oldest items first, and pins the owner's most recent
message so the model never loses track of what it was asked.

## The pieces

- `ConversationRunner._items_to_messages` (Plan 008, `conversation/runner.py`):
  converts `ItemRecord` rows to `ConversationMessage` lists. Plan 009 wraps
  this conversion with budget awareness.
- `project_messages()` (`agent/messages.py:108-150`): converts
  `ConversationMessage` lists to `ModelMessage` lists for the model layer.
  Plan 009 does NOT modify this function — it filters items before they reach
  it.
- `tiktoken` (`pyproject.toml`, already a dependency since Plan 001): tokenizes
  text using the `cl100k_base` encoding. `project_messages()` output is what
  gets counted.
- `ItemRecord` (`conversation/repository.py:14-22`): the rows that get
  filtered. Plan 009 introduces a new dataclass `ContextSnapshot` that records
  which items were included and which were dropped.
- `docs/decisions/006-conversation-architecture.md:78-93`: the notebook vs.
  working brief distinction. The notebook is exact immutable history. The
  working brief is what fits in the model's context window. They are different
  things.
- `docs/decisions/006-conversation-architecture.md:172-192`: `ContextSnapshot`
  is a replaceable model-context projection with source item IDs, token count,
  and a version. Plan 009 creates the dataclass but does NOT persist snapshots
  to the database (no snapshot table, no migration).

## What I understood

1. `ContextAssembler` is a standalone class in `conversation/assembler.py`. It
   is created once per `SessionWeave` (same lifetime as `ConversationRunner`).
2. `assemble(items: list[ItemRecord])` returns a filtered `list[ItemRecord]`
   plus a `ContextSnapshot`. The filtered list is what enters the turn. The
   snapshot is returned to the caller for logging/inspection but NOT written to
   the database.
3. Token counting uses `tiktoken.get_encoding("cl100k_base")`. The count is
   the sum of tokens for the system prompt plus every item converted to a
   `ConversationMessage` and projected through `project_messages()`. Tool
   schemas are NOT counted in Plan 009 — the budget applies to conversation
   history only.
4. When the budget is exceeded, the oldest items are dropped first. Items
   are dropped in consecutive blocks: an owner message and all following
   assistant/tool-call/tool-result items until the next owner message. This
   preserves turn boundaries — a partial turn is never shown to the model.
5. The most recent owner message is pinned and never dropped. If it alone
   exceeds the token budget, the assembler still includes it (and the turn
   may fail with a length stop reason — that's the model's problem, not the
   assembler's).
6. Dropped items remain in the database (the notebook). The working brief
   is a view, not a mutation. Future turns may re-assemble with a different
   budget or strategy.
7. `ContextSnapshot` records: `id`, `conversation_id`, `first_item_id` (the
   oldest item included, `None` if all items fit), `last_item_id`, `item_count`
   (number of items in the brief), `token_count` (actual tokens used), and
   `token_budget` (the budget passed to the assembler). No version field —
   versioning is deferred.
8. The assembler does NOT compact or summarize items. It only drops. Compaction
   (replacing items with a summary) is a separate plan.
9. `ConversationRunner.run_turn_in_run` is modified to call
   `assembler.assemble()` before `run_turn()`. If the assembler returns fewer
   items than the full history, the snapshot is logged but the turn proceeds
   with the filtered subset.
10. The assembler does NOT know about tool schemas, system prompt structure, or
    model-specific tokenization quirks. It counts what `project_messages()`
    produces. If tiktoken's count differs from the model's actual token count
    (different tokenizer), that's an accepted approximation.
11. No new database tables or migrations. Snapshot persistence is deferred to
    a future plan.

## Assemble sequence

```text
ConversationRunner.run_turn_in_run()
        |
        +--> load all items from conversation
        +--> assembler.assemble(items)
        |       |
        |       +--> convert system prompt to tokens
        |       +--> for each turn boundary (owner → ... → next owner):
        |       |       convert turn items to messages + count tokens
        |       |       if fits: include in brief
        |       |       if exceeds budget: drop this turn + all older turns
        |       +--> always include last owner message
        |       +--> return (filtered_items, snapshot)
        |
        +--> _items_to_messages(filtered_items) → ConversationMessage list
        +--> run_turn(history=filtered_messages, ...)
```

## What this plan will prove

- Token counting via tiktoken produces consistent, budget-aware filtering.
- The assembler returns a strict subset of items when the budget is tight.
- The most recent owner message is always included.
- Turn boundaries are preserved (no partial turns in the brief).
- Oldest turns drop first.
- `ContextSnapshot` records what was included and excluded.
- No changes to `agent/turn.py`, `agent/messages.py`, or `model_layer/`.

## What it will not prove

- Compaction or summarization of dropped items.
- Snapshot persistence or versioning.
- Narrative-thread-aware context assembly (character threads, plot arcs).
- Model-specific token counting (tiktoken approximation only).
- Live model calls or real conversation budgets.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming approves this interpretation and the assembler interface. It does
not accept the future code.
