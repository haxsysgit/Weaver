# Learning Note: Context assembler

## Gate status

**Confirmed by owner 2026-07-31** ("no lets move to plan 009, i have
confirmed and accepted it"). Plan 008 accepted the same day. This admits
Plan 009 implementation. It does not accept the future implementation; the
final owner decision remains pending after tests, inspection, and
independent review.

## Tiny model

Plan 008 feeds every `ItemRecord` to `run_turn()`. That works for three
items. A real conversation across fifty turns with tool calls and novel
passages will produce thousands of items that don't fit in any model's
context window.

The context assembler adds one decision before every `run_turn()` call:
which items enter the working brief, and which stay in the notebook? It
counts tokens with tiktoken, drops the oldest items first, and pins the
owner's most recent message so the model never loses track of what it was
asked.

## The pieces (re-verified against post-Plan 008 code, 2026-07-31)

- The item↔message adapter is the Plan 008 pinned mapping table, currently
  module functions `_items_to_messages` (`conversation/runner.py:51`) and
  `_message_to_item` (`conversation/runner.py:146`). Plan 009 extracts them
  to `conversation/items.py` as public `items_to_messages` /
  `message_to_item`; `runner.py` re-imports them and behavior is unchanged.
- `project_messages()` (`agent/messages.py:70-110`): converts
  `ConversationMessage` lists to `ModelMessage` lists for the model layer.
  Plan 009 does NOT modify this function: it filters items before they
  reach it, and counts at the same projection boundary.
- `tiktoken` (already a dependency): tokenizes text using the `cl100k_base`
  encoding. Accepted approximation of DeepSeek's real tokenizer; the
  plan's determinism tests guard the formula, not cross-tokenizer equality.
- `ItemRecord` (`conversation/repository.py:13-22`): the rows that get
  filtered. Plan 009 adds the in-memory `ContextSnapshot` dataclass that
  records which items were included and the token count.
- `docs/decisions/006-conversation-architecture.md:18-21`: the notebook vs.
  working brief distinction. The notebook is exact immutable history. The
  working brief is what the model needs for the next call; it may be
  replaced. Plan 009's filtered item list is the working brief.
- `docs/decisions/006-conversation-architecture.md:161-166`:
  `ContextSnapshot` is a replaceable projection that references exact
  conversation-item IDs plus configuration version. Plan 009 creates the
  dataclass but does NOT persist snapshots (no table, no migration).

## What I understood

1. `ContextAssembler` is a standalone class in `conversation/assembler.py`,
   constructed with `system_prompt` and `token_budget`. It lives as long as
   `ConversationRunner` (same lifetime as `SessionWeave`).
2. `assemble(items: list[ItemRecord])` returns a filtered
   `list[ItemRecord]` plus a `ContextSnapshot`. The filtered list is what
   enters the turn; the snapshot is returned for logging/inspection but NOT
   written to the database.
3. Token counting: `tiktoken.get_encoding("cl100k_base")`. Counted = the
   system prompt once, plus every message produced by `project_messages`
   on the candidate items (content and tool-call arguments at the model
   boundary). Tool schemas are NOT counted: they never enter
   `project_messages` output, and the budget applies to conversation
   history only.
4. When the budget is exceeded, whole exchange blocks are dropped from the
   oldest end first. A block is `assistant(with tool_calls)` + its
   `tool_call` + `tool_result` items, or a lone `owner`/`assistant`
   message. A block is never split: `project_messages` reconstructs tool
   calls from the assistant item, so a split boundary would produce an
   orphaned tool role or an unpaired call on replay.
5. The most recent owner message is pinned and never dropped. If it alone
   exceeds the budget, the assembler returns it alone with
   `token_count > token_budget` — it must not raise and must not drop the
   pin (the turn may then fail with a length stop; that's the model's
   problem, not the assembler's).
6. Dropped items remain in the database (the notebook). The working brief
   is a view, not a mutation. Future turns re-assemble with the same or a
   different budget.
7. `ContextSnapshot` records: `id`, `conversation_id`, `first_item_id`
   (oldest included exchange's first item; `None` if all fit),
   `last_item_id`, `item_count`, `token_count`, `token_budget`,
   `created_at`. No version field; versioning is deferred.
8. The assembler does NOT compact or summarize. It only drops. Compaction
   is a separate plan.
9. `ConversationRunner.run_turn_in_run` calls `assembler.assemble()` after
   loading items and before `_items_to_messages`. When no budget is
   configured, the assembler is absent and Plan 008 behavior is preserved
   exactly (unbounded default).
10. The assembler does not know tool schemas, system prompt structure, or
    model-specific tokenization. It counts what `project_messages()`
    produces. tiktoken vs. real tokenizer differences are accepted.

## Assemble sequence

```text
ConversationRunner.run_turn_in_run()
        |
        +--> load all items from conversation
        +--> assembler.assemble(items)            (only if token_budget set)
        |       |
        |       +--> group items into exchange blocks
        |       +--> per block: items_to_messages + project_messages + count
        |       +--> total = system prompt + sum of block counts
        |       +--> if total fits: keep everything
        |       +--> else drop oldest blocks until it fits or only the
        |       |       pinned owner message remains (never raise)
        |       +--> return (filtered_items, snapshot)
        |
        +--> items_to_messages(filtered_items) → ConversationMessage list
        +--> run_turn(history=filtered_messages, ...)
```

## What this plan will prove

- Token counting via tiktoken is deterministic: same items, same budget →
  same selection, count, and snapshot.
- The assembler returns a strict subset when the budget is tight, oldest
  first.
- The most recent owner message is always included, even when it alone
  exceeds the budget (no raise).
- Exchange blocks are atomic: no orphaned tool role, no unpaired call_id
  in the surviving projection.
- All-fit case: `first_item_id is None`, `item_count` equals input length.
- Runner integration: unbounded default preserves Plan 008 behavior.
- No changes to `agent/turn.py`, `agent/messages.py`, or `model_layer/`.

## What it will not prove

- Compaction or summarization of dropped items.
- Snapshot persistence or versioning (schema designed here for a future
  additive migration).
- Narrative-thread-aware context assembly.
- Model-specific token counting (tiktoken approximation only).
- Live model calls or real conversation budgets.

## Confirmation record

- Owner choice: confirmed 2026-07-31 ("i have confirmed and accepted it")
- Date: 2026-07-31
- Corrections or added constraints: none; the 2026-07-30 draft line
  references were re-verified against post-Plan 008 code (messages.py:70,
  runner.py:51/146, 006-conversation-architecture.md:18-21/161) and
  corrected in this note.

Confirming approves this interpretation and the assembler interface. It
does not accept the future code.
