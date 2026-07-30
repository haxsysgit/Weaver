# Plan 009: Context assembler

> **Executor instructions:** Execute only after Plan 008 is accepted. Read this
> plan, the accepted Plan 008 results, and every file in "Current state" before
> editing. Run each verification gate and record failures.

## Status

- **State:** Planned; learning gate required
- **Priority:** P2
- **Effort:** S
- **Risk:** Low
- **Depends on:** Plan 008 accepted
- **Category:** Architecture and correctness
- **Planned at:** commit `e523383`, 2026-07-30
- **Learning gate:** `deliverables/009-context-assembler/learning.md`
- **Final decision:** pending

## Goal

Give `run_turn()` a context window it can't exceed.

After this plan, `ContextAssembler` converts `ItemRecord` rows into
`ModelMessage` lists that respect a token budget, a system prompt, and
Weaver's canon/opinion separation. The oldest items drop first when the
budget tightens, but the owner's most recent message is always included.

## Why this matters

Plan 008's `ConversationRunner._items_to_messages` converts every
`ItemRecord` into a `ConversationMessage`. That works for the fake-model
proof (3 items). A real conversation across 50 turns with tool calls and
novel passages will produce thousands of items that don't fit in any model's
context window.

The Plan 006 architecture decision named `ContextAssembler` as the bridge
between database items and model context (`docs/decisions/006-conversation-architecture.md:239`).
This plan builds the smallest version that proves the interface works.

## Current state

### `src/weaver/agent/turn.py:108-118` — project_messages()

```python
def project_messages(
    *,
    system_prompt: str,
    history: list[ConversationMessage],
) -> list[ModelMessage]:
```

Converts all history into model messages. No budget, no truncation. Uses
tiktoken via `tiktoken` (already in pyproject.toml).

### `src/weaver/conversation/runner.py` — ConversationRunner (Plan 008)

`_items_to_messages` converts items to messages. `run_turn_in_run` feeds
the full history to `run_turn()`. No budget awareness.

### `docs/decisions/006-conversation-architecture.md:78-93` — working brief

> The working brief is what the model needs for the next call. It may be
> replaced when a better brief exists.

### `docs/decisions/006-conversation-architecture.md:172-192` — ContextSnapshot

> ContextSnapshot is a replaceable model-context projection with source
> item IDs. It records which items were included, the token count, and a
> version.

## Implementation slices

### 1. Confirm the learning gate

Answer three questions in `deliverables/009-context-assembler/learning.md`:

1. Token counting: which tiktoken encoding, what formula for
   `project_messages()` output, and how tool schemas are counted?
2. Truncation policy: which items are dropped first, what can never be
   dropped, and how the sequence boundary is recorded?
3. ContextSnapshot integration: what fields does a snapshot record store,
   and where does it live in the schema?

Commit: `plan 009: learning gate answers`

### 2. Build ContextAssembler

Create `src/weaver/conversation/assembler.py`.

```python
class ContextAssembler:
    def __init__(self, system_prompt: str, token_budget: int,
                 encoding_name: str = "cl100k_base") -> None: ...

    async def assemble(
        self, items: list[ItemRecord]
    ) -> tuple[list[ModelMessage], ContextSnapshot]: ...
```

`assemble()` converts items to messages via `_items_to_messages` (extracted
from ConversationRunner into a shared module, or duplicated — executor's
choice after reading the Plan 008 implementation), then counts tokens and
drops oldest messages until within budget. The owner's last message is pinned
and never dropped.

`ContextSnapshot` is a dataclass:
```python
@dataclass
class ContextSnapshot:
    id: str
    conversation_id: str
    first_item_id: str | None  # oldest included; None if all fit
    last_item_id: str
    item_count: int
    token_count: int
    token_budget: int
    created_at: str
```

Snapshots are NOT written to the database in Plan 009 (the schema has no
snapshot table). They are returned as in-memory objects for the turn to
consume. The schema lives in Plan 009's learning.md for a future plan.

No new tables, no migration changes.

Commit: `plan 009: add ContextAssembler`

### 3. Wire into ConversationRunner

Modify `ConversationRunner.run_turn_in_run` to call `ContextAssembler.assemble()`
before `run_turn()`. Pass the assembled messages as the `history` parameter
(converting back to `ConversationMessage` list — `project_messages` takes
`ConversationMessage`, not `ModelMessage` — so the assembler returns
filtered `ConversationMessage` items, not `ModelMessage` directly).

Simplify: `ContextAssembler.assemble()` returns `list[ItemRecord]` (the
filtered subset) plus the `ContextSnapshot`. The runner converts to
`ConversationMessage` and feeds to `run_turn()`.

Commit: `plan 009: wire assembler into runner`

### 4. Budget test

Add `test_context_assembler_budget` to `tests/test_conversation.py`:

- Create 20 owner + assistant item pairs (40 items).
- Assemble with a tight budget (e.g. 500 tokens).
- Assert the returned items are a strict subset.
- Assert the last (most recent) owner item is always included.
- Assert the snapshot records the correct `first_item_id` (oldest included).

Use the items-to-messages conversion from Plan 008's runner to produce
real `ConversationMessage` lists for token counting.

Commit: `plan 009: context budget test`

## Verification floor

```bash
uv run pytest -q tests/test_conversation.py -k "context_assembler or test_send"
uv run pytest -q
uv run ruff check src/weaver/conversation tests/test_conversation.py
```

Expected: budget tests pass, no regressions, lint clean.

## Independent review

1. Reviewer 1 checks token counting correctness, truncation policy, and
   that the pinned owner message never drops.
2. Reviewer 2 checks snapshot fields, scope, and regression safety.
3. One repair pass allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 009 learning gate.
- [ ] Plan 008 is accepted.
- [ ] `ContextAssembler` exists with `assemble()` returning filtered items
  and a snapshot.
- [ ] `ConversationRunner` uses the assembler before calling `run_turn()`.
- [ ] Budget test proves oldest items drop first and last owner message
  is pinned.
- [ ] Full tests and lint pass.
- [ ] No new database tables or migrations.
- [ ] No changes to `agent/turn.py` or `agent/messages.py`.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 009 final decision.

## STOP conditions

- Plan 008 is not accepted or ConversationRunner doesn't exist in the
  expected shape.
- tiktoken is not importable (check `pyproject.toml` — it's already a
  dependency).
- Token counting produces a different result than `project_messages()`
  expects.

## Deferred work

- Snapshot persistence (ContextSnapshot table + migration) is deferred to
  a future plan.
- Compaction and narrative-thread context assembly remain Plan 006 deferred
  items.
- TUI, live models, corpus tools remain outside Plan 009.
