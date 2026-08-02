# Plan 009: Context assembler

> **Executor instructions:** Execute only after Plan 008 is accepted. Read this
> plan, the accepted Plan 008 results, and every file in "Current state" before
> editing. Run each verification gate and record failures.

## Status

- **State:** Accepted by owner 2026-07-31 (decision recorded in `deliverables/009-context-assembler/decision.md`)
- **Priority:** P2
- **Effort:** S
- **Risk:** Low
- **Depends on:** Plan 008 accepted
- **Category:** Architecture and correctness
- **Planned at:** commit `e523383`, 2026-07-30
- **Audited at:** 2026-07-31 — current-state references re-verified; truncation
  policy pinned to preserve tool-call/result pairing (audit finding A4/A5
  hazards apply to replay correctness)
- **Learning gate:** confirmed by owner 2026-07-31; answers re-verified in
  `deliverables/009-context-assembler/learning.md`
- **Final decision:** accepted 2026-07-31 (owner)

## Goal

Give `run_turn()` a context window it can't exceed.

After this plan, `ContextAssembler` converts `ItemRecord` rows into the
`ConversationMessage` list that becomes the model context, respecting a token
budget, a system prompt, and Weaver's canon/opinion separation. The oldest
items drop first when the budget tightens, whole exchanges stay intact, and
the owner's most recent message is always included.

## Why this matters

Plan 008's `ConversationRunner._items_to_messages` converts every
`ItemRecord` into a `ConversationMessage`. That works for the fake-model
proof (3-5 items). A real conversation across 50 turns with tool calls and
novel passages will produce thousands of items that don't fit in any model's
context window.

The Plan 006 architecture decision named `ContextAssembler` as the bridge
between database items and model context (`docs/decisions/006-conversation-architecture.md:239`).
This plan builds the smallest version that proves the interface works.

The audit found two reasons the truncation policy must be pinned rather than
left to the executor:

1. `project_messages` drops `ToolCallMessage` and projects tool calls only
   from the assistant message (`messages.py:108-136`). A truncation boundary
   that lands between an assistant's `tool_calls` and its `tool_result` (or
   between the assistant message and its `tool_call` item) produces a broken
   exchange on replay — the model sees a tool role without its call or a
   call without its result.
2. Continue/retry correctness depends on the same invariant: the old
   subprocess proof asserted item counts only, never the reconstructed
   projection.

## Current state

### `src/weaver/agent/messages.py:108-136` — project_messages()

```python
def project_messages(
    *,
    system_prompt: str,
    history: list[ConversationMessage],
) -> list[ModelMessage]:
```

Converts all history into model messages. No budget, no truncation. Drops
`ToolCallMessage` by design; tool calls project from
`AssistantMessage.tool_calls`, tool results from `ToolResultMessage`. Uses
tiktoken (`tiktoken` is already in `pyproject.toml`).

### `src/weaver/conversation/runner.py` — ConversationRunner (Plan 008)

`_items_to_messages` converts items to messages per Plan 008's pinned mapping
table. `run_turn_in_run` feeds the full history to `run_turn()`. No budget
awareness.

### `src/weaver/conversation/items.py` — shared conversion (Plan 009 decision)

The item↔message adapter is extracted from `runner.py` into a shared module
(`conversation/items.py`) so the assembler, the runner, and future plans use
one source of truth. Decision pinned in Contract §3: **extract, do not
duplicate**. `runner.py` imports from it; behavior is unchanged.

### `docs/decisions/006-conversation-architecture.md:78-93` — working brief

> The working brief is what the model needs for the next call. It may be
> replaced when a better brief exists.

### `docs/decisions/006-conversation-architecture.md:172-192` — ContextSnapshot

> ContextSnapshot is a replaceable model-context projection with source
> item IDs. It records which items were included, the token count, and a
> version.

### Verified baseline (2026-07-31)

- `uv run pytest -q` → 166 passed; `uv run ruff check src/weaver tests` → clean.
- tiktoken importable (`uv run python -c "import tiktoken"`).

## Contract to prove

### 1. Token counting

- Encoding: `cl100k_base` (tiktoken). This is an accepted **approximation**
  of DeepSeek's tokenizer; the plan's verification floor asserts the counting
  formula, not cross-tokenizer equality.
- Counted: the system prompt plus every message produced by
  `project_messages(system_prompt=..., history=...)` on the candidate item
  list (i.e. count at the model boundary, not per-item body length).
- Not counted: tool schemas, snapshot fields, `ItemRecord` metadata.
- Formula is deterministic: same items, same budget → same selection and
  same `token_count`, verified by a test against a fixed string set.

### 2. Truncation policy

- Drop oldest items first, in whole **exchange blocks**: a unit is
  `assistant(with tool_calls)` + its `tool_call` + `tool_result` items, or a
  lone `owner`/`assistant` message. Never split a unit — Contract reason:
  `project_messages` reconstructs tool calls from the assistant item, so a
  split boundary yields an orphaned tool role or an unpaired call on replay.
- What can never be dropped: the owner's most recent message (pinned; its
  `sequence` is recorded in the snapshot as `pinned_item_id` is not — the
  pinned boundary is expressed as `first_item_id` of the oldest included
  exchange).
- If even the pinned owner message alone exceeds the budget, the assembler
  returns it alone plus a snapshot with `token_count > token_budget` — it
  must not raise and must not drop the pin.
- The budget applies to the whole projected context (system prompt +
  messages); `token_budget` is the ceiling for that sum.

### 3. Shared conversion module

Extract `_items_to_messages` / `_message_to_item` from
`src/weaver/conversation/runner.py` into `src/weaver/conversation/items.py`
(public names `items_to_messages` / `message_to_item`), keeping Plan 008's
pinned mapping table and its `ValueError` invariant checks. `runner.py`
re-imports them; no behavior change. This is a modification of a Plan 008
file and is in scope for Plan 009 (same package, no API change).

### 4. Snapshot

`ContextSnapshot` is a dataclass:

```python
@dataclass
class ContextSnapshot:
    id: str
    conversation_id: str
    first_item_id: str | None  # oldest included exchange's first item; None if all fit
    last_item_id: str
    item_count: int
    token_count: int
    token_budget: int
    created_at: str
```

Snapshots are **not** written to the database in Plan 009 (no schema change,
no migration). They are in-memory objects consumed by the turn. The schema
for a future snapshot table is designed in learning.md only.

### 5. Assembler interface

```python
class ContextAssembler:
    def __init__(self, system_prompt: str, token_budget: int,
                 encoding_name: str = "cl100k_base") -> None: ...

    async def assemble(
        self, items: list[ItemRecord]
    ) -> tuple[list[ItemRecord], ContextSnapshot]: ...
```

`assemble()` returns the **filtered `ItemRecord` list** plus the snapshot.
The runner converts the filtered list to `ConversationMessage` via
`items_to_messages` and feeds it to `run_turn()` (which projects again via
`project_messages` — the assembler must therefore count at the same
projection boundary to avoid double-counting drift).

## Scope

### In scope

- `src/weaver/conversation/assembler.py` (new)
- `src/weaver/conversation/items.py` (new — extracted adapter)
- `src/weaver/conversation/runner.py` (import the shared adapter; call the
  assembler before `run_turn()`)
- `src/weaver/conversation/session.py` (optional `token_budget` kwarg
  forwarded to the runner; slice 3 sanctions this executor choice)
- `src/weaver/conversation/__init__.py` (export `ContextAssembler`)
- `tests/test_conversation.py`
- Plan 009 deliverables and `plans/README.md`

### Out of scope

- `agent/turn.py`, `agent/messages.py`, `model_layer/`
- new database tables, migrations, snapshot persistence
- compaction, narrative-thread assembly, relationship memory
- live models, corpus tools, TUI

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused tests | `uv run pytest -q tests/test_conversation.py -k "context_assembler or test_send"` | All pass |
| Full tests | `uv run pytest -q` | All pass (166 baseline; expect 171+) |
| Lint in scope | `uv run ruff check src/weaver/conversation tests/test_conversation.py` | Exit 0 |
| Package check | `uv pip check` | Compatible |

## Steps

### Slice 1: Confirm the learning gate

Answer three questions in `deliverables/009-context-assembler/learning.md`:

1. Token counting: which tiktoken encoding, what formula for
   `project_messages()` output, and how tool schemas are counted (Contract §1)?
2. Truncation policy: which items are dropped first, what can never be
   dropped, and how exchange-block boundaries are kept intact (Contract §2)?
3. ContextSnapshot integration: what fields does a snapshot record store,
   and where would it live in the schema if a future plan persists it?

The answers must reference exact file paths and line numbers from the
**current** codebase (post-Plan 008); re-verify the drafted 2026-07-30
answers at admission.

Commit: `plan 009: learning gate answers`

### Slice 2: Build ContextAssembler

Create `src/weaver/conversation/assembler.py` per Contract §5, and
`src/weaver/conversation/items.py` per Contract §3 (extract from runner;
runner tests must stay green unchanged).

Truncation algorithm:

1. Convert all items to messages once (for counting) while keeping the item
   ↔ exchange-block grouping.
2. If the projected total fits, return everything.
3. Otherwise drop the oldest exchange block (or lone message) until the
   budget holds or only the pinned owner message remains.
4. Build the snapshot from the surviving items.

**Verify:** unit tests pass with no changes to `runner.py` behavior (the
extraction is a pure move).

### Slice 3: Wire into ConversationRunner

Modify `ConversationRunner.run_turn_in_run` to call
`ContextAssembler.assemble(items)` after loading items and before converting
to messages. The runner passes `system_prompt` and `token_budget` from its
constructor or from `SessionWeave` kwargs (executor's choice; keep the
default = no budget limit, preserving Plan 008 behavior for callers that do
not configure an assembler).

**Verify:** the Plan 008 end-to-end test still passes with the assembler
wired in (budget default unbounded), and a bounded-budget send drops older
items while the pinned owner message survives.

### Slice 4: Budget test

Add `test_context_assembler_budget` to `tests/test_conversation.py`:

- Create 20 owner + assistant item pairs (40 items).
- Assemble with a tight budget (e.g. 500 tokens).
- Assert the returned items are a strict subset of the input.
- Assert the last (most recent) owner item is always included.
- Assert the snapshot records the correct `first_item_id` (oldest included
  exchange) and `last_item_id`.
- Exchange-atomicity case: a budget that would split an
  `assistant(tool_calls) → tool_call → tool_result` group must instead drop
  the whole group; the surviving projection (via `project_messages`) contains
  no orphaned tool role and no unpaired call_id.

Commit: `plan 009: context budget test`

## Test plan

1. Token determinism: fixed item set → fixed selection, count, and snapshot.
2. Oldest-first: with a tight budget, the oldest exchange drops before newer
   ones.
3. Pin: the owner's most recent message survives every budget, including a
   budget smaller than the pin alone (returns pin only, no raise).
4. Exchange atomicity: no split of assistant(tool_calls)/tool_call/tool_result
   (Contract §2); projection check after truncation.
5. All-fit case: `first_item_id is None`, `item_count` equals input length.
6. Runner integration: unbounded default preserves Plan 008 behavior.

## Independent review

1. Reviewer 1 (counting/truncation): formula determinism, exchange-block
   atomicity, pinned owner message, snapshot field correctness.
2. Reviewer 2 (integration/scope): runner wiring with unbounded default, no
   `agent/` or `model_layer/` changes, no schema change, shared `items.py`
   extraction is a pure move.
3. One repair pass is allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 009 learning gate.
- [ ] Plan 008 is accepted.
- [ ] `ContextAssembler` exists with `assemble()` returning filtered items
  and a snapshot.
- [ ] `items.py` extraction is a pure move; Plan 008 runner tests unchanged.
- [ ] `ConversationRunner` uses the assembler before calling `run_turn()`;
  unbounded default preserves Plan 008 behavior.
- [ ] Budget test proves oldest-first drop, pinned owner message, and
  exchange atomicity.
- [ ] Full tests and lint pass.
- [ ] No new database tables or migrations.
- [ ] No changes to `agent/turn.py` or `agent/messages.py`.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 009 final decision.

## STOP conditions

Stop and report if:

- Plan 008 is not accepted or `ConversationRunner` doesn't exist in the
  expected shape;
- tiktoken is not importable;
- token counting at the assembler boundary disagrees with
  `project_messages()` on the same input (formula drift);
- truncation would split an exchange block (Contract §2) and the executor
  cannot keep it atomic within the slice;
- the extraction into `items.py` changes Plan 008 test results.

## Maintenance notes

- The `cl100k_base` approximation should be re-visited when a real
  DeepSeek tokenizer binding exists; until then the plan's formula
  determinism tests are the guard.
- Snapshot persistence (a `context_snapshot` table + migration) is a future
  plan; design the schema in learning.md now so the later migration is
  additive.
- Future memory plans (Plan 014+) will reuse `ContextAssembler` for
  narrative-thread assembly; keep the interface item-list-in,
  filtered-item-list-out so memory sources can be injected later.

## Deferred work

- Snapshot persistence (ContextSnapshot table + migration).
- Compaction and narrative-thread context assembly (Plan 006 deferred items).
- Tokenizer parity with DeepSeek's real tokenizer.
- TUI, live models, corpus tools remain outside Plan 009.

## Checkpoint audit corrections (2026-08-01)

Spec-vs-code audit results. 18/18 claims verified, 17 aligned, 1
partial (type). One low-severity code bug, fixed. Doc fixes:

1. FIXED — assemble([]) with a budget below the system prompt raised
   IndexError on the pin fallback. Commit 9ffb0ab returns a sane
   snapshot for empty input (count-only mode already did).
2. DOC — Contract §2 garbled parenthetical ("its sequence is recorded
   in the snapshot as pinned_item_id is not") removed; the pinned
   boundary is expressed as first_item_id of the oldest included
   exchange, exactly as implemented.
3. DOC — Contract §5 and the snapshot field are `token_budget: int |
   None` (None = count-only, Plan 010 Phase D), not `int`.
4. DOC — learning.md point 9 and the assemble-sequence diagram say the
   assembler is absent when no budget is set; it now always runs in
   count-only mode. Behavioral claims unchanged.
