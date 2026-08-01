# Plan 008: Wire the conversation loop

> **Executor instructions:** Execute only after Plan 007 is accepted (owner-recorded
> decision). Read this plan, the accepted Plan 007 results, and every file in
> "Current state" before editing. Run each verification gate and record failures.
> Slice 0 repairs two pre-existing defects before any wiring begins — do not skip
> it and do not merge wiring before the repair tests pass.

## Status

- **State:** Admitted 2026-07-31; implemented, two independent reviews clean (one repair pass applied, both recheck), owner accepted 2026-07-31 (recorded in `deliverables/008-wire-conversation-loop/decision.md`)
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium (first integration of two previously separate subsystems; two prerequisite repairs)
- **Depends on:** Plan 007 accepted (recorded in `deliverables/007-restart-safe-conversation-proof/decision.md`)
- **Category:** Integration and correctness
- **Planned at:** commit `e523383`, 2026-07-30
- **Admitted at:** 2026-07-31 (owner: "i have accepted plan 008, start implementing")
- **Learning gate:** confirmed by owner 2026-07-31 ("confirmed, proceed"); answers re-verified in `deliverables/008-wire-conversation-loop/learning.md`
- **Final decision:** accepted 2026-07-31 (owner)

## Goal

Zip `conversation/` and `agent/` into one working conversation.

After this plan, `SessionWeave.send()` calls `run_turn()` with a fake model,
tool calls go through `ToolRegistry.dispatch`, results settle as
`conversation_item` rows, and a subprocess restart test proves the full
end-to-end cycle. The run-phase lifecycle stays consistent, the session can
never be bricked by a rejected tool result, and no message is ever persisted
twice or silently dropped.

## Why this matters

Plans 001--007 built every piece — model layer, tool registry with
cancellation, turn loop, and durable conversation storage — but they have
never been assembled. `_runner.py` hardcodes fake model behavior instead of
calling `run_turn()`. `SessionWeave` has no `send()` method. The durability
shell and the agent loop live in separate modules with zero imports between
them.

The audit performed before this rewrite found two defects that would surface
the moment the loop is wired:

1. every `RunCoordinator` write is wrapped in `BEGIN ... commit()` with no
   rollback path, so a rejected duplicate tool result leaves a dangling
   transaction and **bricks the session for every later operation**
   (reproduced live; the existing regression test masks it);
2. `run_turn()`'s persist callback is synchronous, so the plan's earlier
   `async def persist` sketch would silently persist **nothing** — the
   coroutine is truthy, `_persist` sees no exception, and every message
   vanishes without an error.

This plan repairs both before composing the pieces.

## Current state

### `src/weaver/agent/turn.py:149-165` — run_turn() signature

```python
async def run_turn(
    *,
    session_id: str,
    turn_id: str,
    model_layer: ModelLayer,
    model: ModelSpec,
    system_prompt: str,
    history: list[ConversationMessage],
    tool_registry: ToolRegistry,
    active_tools: tuple[str, ...],
    execution_policy: ToolExecutionPolicy,
    cancel_event: asyncio.Event,
    persist_message: PersistCallback | None = None,
    max_model_steps: int = 5,
) -> TurnResult:
```

- `PersistCallback = Callable[[ConversationMessage], None]` at `turn.py:38`
  — **synchronous**.
- `_persist` at `turn.py:71-84` calls the callback, swallows exceptions, and
  returns False on failure (→ `PERSISTENCE_FAILED` exit). An async callback
  would return a coroutine: no exception is raised, `_persist` reports
  success, and **every message silently never persists**. This is the
  highest-risk seam in the plan.
- The final STOP assistant message is persisted through the callback at
  `turn.py:213-222`.

### `src/weaver/conversation/session.py:30-126` — SessionWeave

Wires `ConversationRepository` and `RunCoordinator`. Has `start_conversation`,
`continue_interrupted`, `retry_interrupted`, `find_interrupted_runs`. No
`send()` method. No reference to `agent/`.

### `src/weaver/conversation/repository.py:14-22` — ItemRecord

```python
@dataclass
class ItemRecord:
    id: str
    conversation_id: str
    sequence: int
    turn_id: str
    run_id: str
    kind: str          # "owner", "assistant", "tool_call", "tool_result"
    body: str          # JSON string
    created_at: str
```

- `_next_sequence` (`repository.py:164`) computes `MAX(sequence)+1` inside
  the transaction. Safe for one serial writer per session; **not** safe for
  two coroutines interleaving on the same connection (both can read the same
  MAX → `UNIQUE(conversation_id, sequence)` violation). Plan 008 documents
  the serial ceiling and does not add a lock.
- There is no `_next_turn_sequence`; `start_turn` requires an explicit
  `turn_sequence` (`coordinator.py:63`).

### `src/weaver/conversation/coordinator.py:30-281` — RunCoordinator

`start_conversation_and_turn`, `start_turn`, `insert_assistant_item`,
`settle_tool`, `complete_run`, `mark_interrupted`, `continue_interrupted`,
`retry_interrupted`. All methods take and produce `ItemRecord`. None know
about `ConversationMessage` or `run_turn()`.

- **Defect:** every method is `async with db.execute("BEGIN") ... commit()`
  with no rollback. `settle_tool` raises `ValueError` on a duplicate tool
  result (`coordinator.py:151`) after BEGIN. Reproduced: the second
  `settle_tool` raises, then `start_turn` on the same session fails with
  `OperationalError: cannot start a transaction within a transaction`. Any
  UNIQUE violation has the same effect.
- `tests/test_conversation.py::test_duplicate_tool_result_rejected` masks the
  defect because it only calls `sw.close()` after the raise (close rolls
  back).
- `complete_run` (`coordinator.py:139-177`) inserts a final assistant item
  + `run_completed` event + phase flip. Tool-call item bodies use keys
  `{"id", "name", "arguments"}` (`coordinator.py:100-104`).
- `schema.py:55-58` sets PRAGMAs `journal_mode=WAL`, `foreign_keys=ON` — no
  `busy_timeout`.

### `src/weaver/agent/messages.py:14-68` — ConversationMessage types

```
ConversationMessage = UserMessage | AssistantMessage | ToolCallMessage | ToolResultMessage
```

`project_messages()` (`messages.py:70-136`) converts
`list[ConversationMessage]` into `list[ModelMessage]`. **It drops
`ToolCallMessage` entirely**; tool calls project only from
`AssistantMessage.tool_calls`; tool results from `ToolResultMessage`.

### `src/weaver/model_layer/fake.py:21-56` — FakeModelProvider

```python
class FakeModelProvider:
    def __init__(self, provider_id, *, models, responses=()):
        self.calls: list[FakeModelCall] = []
        self._responses = responses
```

Scripted responses are consumed **in order; the last response repeats** for
any further calls (it does not "pop" and exhaust). Deterministic default when
`responses` is empty. Tests use a `scripted_layer()` helper
(`tests/test_agent_turn.py:97-108`).

### `src/weaver/agent/session.py:28-125` — AgentSession (old)

In-memory session with `send()`, `cancel()`, `history`, `turn_count`. This
plan does NOT delete it — SessionWeave supersedes it but both coexist until
the TUI and CLI are wired (Plan 010).

### Verified baseline (2026-07-31)

- `uv run pytest -q` → 166 passed (~12s).
- `uv run ruff check src/weaver tests` → clean.
- `uv pip check` → compatible.

## Contract to prove

### 1. Transaction boundary repair (Slice 0)

Every coordinator write moves through one rollback-safe path. Add a small
context helper (e.g. `_tx(db)` in `coordinator.py` or `repository.py`) that
commits on success and rolls back on any exception, and replace every
`BEGIN ... commit()` block with it.

- `settle_tool` duplicate-result `ValueError` and any UNIQUE violation must
  leave the connection usable.
- Regression test: duplicate settle raises → a normal `start_turn` + settle
  on the **same session** succeeds.
- Add `PRAGMA busy_timeout=5000` beside the existing PRAGMAs
  (`schema.py:55-58`) so cross-process contention fails after a bounded wait
  instead of instantly.

### 2. Persist seam decision (the only named carve-out)

Change the seam to **async end-to-end**:

- `agent/turn.py:38` — `PersistCallback = Callable[[ConversationMessage], Awaitable[None]]`
- `agent/turn.py:71-84` — `_persist` awaits the callback and still swallows
  exceptions (returning False → `PERSISTENCE_FAILED`).
- The only `agent/` file this plan may modify is `agent/turn.py` (those two
  spots and the `_persist` call site), plus `tests/test_agent_turn.py` for
  the adjusted callback tests. No other `agent/` file changes. This carve-out
  must be confirmed by Reviewer 2 at admission.
- Rejected alternative: a synchronous bridge (pending-queue + loop task)
  inside the runner — it creates a crash window where messages written after
  a crash are lost without a failure signal, and it re-implements what
  `_persist` already does.

### 3. Single finalization path

`run_turn` persists the final STOP assistant through the callback; the runner
then calls `complete_run`. To avoid a second, semantically identical assistant
item (the pattern already visible in `_runner._process_b`):

- `complete_run` gains `final_item_already_persisted: bool = False`; when
  True it records only the `run_completed` event and the phase transition,
  inserting no assistant item.
- All existing callers keep the default (False) and are unchanged.
- The end-to-end test asserts exactly **5 items**: owner → assistant
  (with tool_calls) → tool_call → tool_result → assistant (final).

### 4. Item mapping table (pinned)

DB body key conventions differ from `ModelToolCall` and from message kinds
(`"owner"` vs `"user"`). The adapter maps exactly as follows:

| `kind` | body keys (source of truth) | produced `ConversationMessage` |
| --- | --- | --- |
| `owner` | `content` | `UserMessage(message_id=item.id, turn_id=item.turn_id, content=body["content"])` |
| `assistant` | `content?`, `tool_calls: [{id, name, arguments}]` | `AssistantMessage(message_id=item.id, turn_id=item.turn_id, content=body.get("content", ""), tool_calls=tuple(ModelToolCall(call_id=tc["id"], name=tc["name"], arguments_json=tc["arguments"]) for tc in body.get("tool_calls", ())))` |
| `tool_call` | `tool_call_id`, `name`, `arguments` | `ToolCallMessage(message_id=item.id, turn_id=item.turn_id, call_id=body["tool_call_id"], tool_name=body["name"], arguments_json=body["arguments"])` |
| `tool_result` | `tool_call_id`, `name`, `result` | `ToolResultMessage(message_id=item.id, turn_id=item.turn_id, call_id=body["tool_call_id"], tool_name=body["name"], ok=True, result=body["result"])` |

Invariants:

- Do **not** fold `tool_call` items into the assistant item's `tool_calls`
  tuple — `project_messages` already projects tool calls from the assistant
  message, so folding double-projects on replay.
- Round-trip check: `items → _items_to_messages → project_messages` must
  produce exactly one tool role per call_id, no duplicate call_ids, and no
  empty tool role.
- Unknown `kind` values and missing required body keys raise a
  `ValueError` with the item id — never a silent default.

### 5. Interrupted-run policy for `send()`

`send()` first calls `find_interrupted_run(conversation_id)`. If an
interrupted run exists, `send()` returns a safe error result (exit reason
`INTERRUPTED`, `safe_failure` set to the module constant
`INTERRUPTED_RUN_EXISTS` in `conversation/runner.py`) and does **not**
auto-continue. `continue_interrupted` / `retry_interrupted` remain the
explicit recovery methods. Auto-continue may be reconsidered only by a later
plan.

*Executor correction (2026-07-31):* the error text constant lives in the
conversation module, not `agent/errors.py`, to keep the agent carve-out
(`agent/turn.py` only) airtight. `safe_error`'s unknown-code fallback would
have returned generic text.

### 6. Turn sequencing

Add `repository._next_turn_sequence(conversation_id)` (MAX(turn_sequence)+1
within the conversation; 1 for the first turn) and use it in `send()`
alongside `_next_sequence` for items.

### 7. Partial persistence reconciliation

On `PERSISTENCE_FAILED`, earlier messages are in the DB, later ones are not,
and `TurnResult.new_messages` contains both. Decision: the runner marks the
run interrupted; future context is built **only from DB items**.
`new_messages` is never re-injected into the conversation.

### 8. Concurrency ceiling

One serial writer per `SessionWeave`. No write lock in this plan; the ceiling
is documented in code and in Maintenance notes. Concurrent `send()` (future
features, multi-process) is out of scope.

### 9. Exit-reason → run-phase mapping

| `TurnExitReason` | run phase |
| --- | --- |
| `COMPLETED` | `completed` |
| `INTERRUPTED` | `interrupted` |
| `MODEL_FAILED` | `interrupted` |
| `INCOMPLETE` | `interrupted` |
| `LIMIT_REACHED` | `interrupted` |
| `PERSISTENCE_FAILED` | `interrupted` |

A provider `TOOL_USE` response with **zero tool calls** (possible at
`deepseek.py:221-231`) must be treated as `MODEL_FAILED` by the runner —
never looped.

### 10. Cancellation contract

`run_turn`'s `cancel_event` is the only cancellation lever. Never
`task.cancel()` a model call: asyncio cancellation is sticky and can skip the
ABORTED terminal and stream cleanup (see Plan 010's contract for the same
rule).

## Scope

### In scope

- `src/weaver/conversation/runner.py` (new)
- `src/weaver/conversation/coordinator.py` (rollback helper; `complete_run` flag)
- `src/weaver/conversation/repository.py` (`_next_turn_sequence`)
- `src/weaver/conversation/session.py` (`send()`)
- `src/weaver/conversation/schema.py` (`busy_timeout` PRAGMA)
- `src/weaver/conversation/__init__.py` (export `ConversationRunner`)
- `src/weaver/agent/turn.py` — **named carve-out only**: lines 38 and 71-84
  (persist seam sync → async) and the `_persist` call site
- `tests/test_conversation.py`; `tests/test_agent_turn.py` (carve-out tests only)
- Plan 008 deliverables and `plans/README.md`

### Out of scope

- `model_layer/` (including the `FakeModelProvider` API), `corpus/`, `cli.py`, TUI
- deleting `AgentSession` (`agent/session.py`)
- `ContextAssembler` (Plan 009), snapshot persistence, relationship memory
- live model calls, LangGraph, corpus tools in the conversation
- concurrent writers / multi-process conversation
- auto-continue on interrupted runs

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused tests | `uv run pytest -q tests/test_conversation.py tests/test_agent_turn.py` | All pass (10 conversation + 38 agent tests today, plus new tests) |
| Full tests | `uv run pytest -q` | All pass (166 baseline; expect 171+) |
| Lint in scope | `uv run ruff check src/weaver/conversation src/weaver/agent/turn.py tests/test_conversation.py tests/test_agent_turn.py` | Exit 0 |
| Package check | `uv pip check` | All installed packages compatible |

Confirmed execution baseline (2026-07-31): 166 full tests passed; scoped
lint passed; packages compatible.

## Steps

### Slice 0: Repair the transaction boundary

Implement Contract §1: rollback-safe transaction helper in
`coordinator.py`, replace every `BEGIN ... commit()` block, add the
`busy_timeout` PRAGMA, and add the regression test (duplicate settle raises →
next normal operation on the same session succeeds).

**Verify:** the new regression test passes; `test_duplicate_tool_result_rejected`
still passes; full suite green. Do not proceed to Slice 2 with a red Slice 0.

### Slice 1: Confirm the learning gate

Answer five questions in `deliverables/008-wire-conversation-loop/learning.md`:

1. ItemRecord ↔ ConversationMessage mapping (Contract §4): which fields map
   where, and what are the edge cases (missing body fields, tool_calls
   without arguments)?
2. Persist callback design: where in the coordinator phase lifecycle does
   each message kind land, and how does the callback get the
   `conversation_id`, `run_id`, and `turn_id` it needs?
3. End-to-end test shape: what does the fake model's response sequence look
   like, and what assertions prove tool dispatch went through the real
   registry?
4. Persist seam: confirm the async end-to-end carve-out (Contract §2) with
   the reviewer — is `agent/turn.py:38,71-84` the complete change surface?
5. Interrupted-run policy: confirm `send()` returns `interrupted_run_exists`
   and does not auto-continue (Contract §5).

The answers must reference exact file paths and line numbers from the
**current** codebase; the draft answers written 2026-07-30 must be
re-verified line-by-line at admission.

Commit: `plan 008: learning gate answers`

### Slice 2: Build ConversationRunner

Create `src/weaver/conversation/runner.py`. This class owns:

**`_items_to_messages(items: list[ItemRecord]) -> list[ConversationMessage]`**
— the pinned Contract §4 table, with the invariant checks (unknown kind,
missing body keys → `ValueError` with item id).

**`_message_to_item(message, conversation_id, run_id, turn_id, ts) -> ItemRecord`**
— exact reverse of the table (assistant `tool_calls` re-encoded as
`[{id, name, arguments}]`).

**`_persist_callback(conversation_id, run_id, turn_id) -> PersistCallback`**
— returns an `async` closure (matching the async seam from Contract §2) that
writes each message as one `ItemRecord` in one transaction using
`_next_sequence` + `_insert_item` via the rollback-safe helper from Slice 0.

**`run_turn_in_run(conversation_id, run_id, turn_id, cancel_event) -> TurnResult`**

1. Load all items for the conversation (prior turns plus this run's owner
   item, which is the current user message).
2. Convert via `_items_to_messages`.
3. Call `run_turn()` with the history, the persist callback, and all
   required parameters.
4. Advance the run phase via the Contract §9 mapping; for `COMPLETED` call
   `complete_run(..., final_item_already_persisted=True)` (Contract §3);
   otherwise `mark_interrupted`.

**Verify:** unit tests for the mapping table round-trip, the invariant
checks, and the exit-reason mapping (no live model, no `run_turn` yet).

### Slice 3: Add send() to SessionWeave

Accept `model_layer`, `model`, `system_prompt`, `tool_registry`,
`active_tools`, and `execution_policy` in `SessionWeave.__init__` as optional
keyword arguments. When all are provided, create a `ConversationRunner` in
`open()`. When any is absent, the existing subprocess-only path stays
unchanged.

Add `send(conversation_id, user_text) -> TurnResult`:

1. `find_interrupted_run(conversation_id)` first — return the safe
   `interrupted_run_exists` error if found (Contract §5).
2. Compute `turn_sequence = repository._next_turn_sequence(conversation_id)`.
3. `coordinator.start_turn(conversation_id, user_text, turn_sequence=...)`.
4. Create `asyncio.Event()` for cancellation.
5. `runner.run_turn_in_run(...)`.
6. Return the `TurnResult`.

Export `ConversationRunner` from `conversation/__init__.py`.

**Verify:** `start_conversation` + `send` produces items with correct
`conversation_id`, `run_id`, `turn_id`; sequences strictly increasing from 1;
subprocess-only mode (no kwargs) still passes the existing restart tests.

### Slice 4: End-to-end fake-model test

Add `test_send_fake_turn` to `tests/test_conversation.py`:

- Register an echo tool in a `ToolRegistry` (mirror the
  `tests/test_agent_turn.py:111-145` handler pattern).
- Create a `FakeModelProvider` with two responses: one `tool_use` (calls
  echo), one `stop` (acknowledges the result).
- Call `sw.send(conv_id, "Echo hello")`.
- Assert `result.exit_reason == "completed"`, `result.model_steps == 2`,
  `result.tool_starts == 1`.
- Load items: exactly 5, sequence owner → assistant (with tool_calls) →
  tool_call → tool_result → assistant (final).
- Assert no duplicate IDs and strictly increasing sequences.
- Restart proof: a second `SessionWeave` on the same state dir replays the
  items through `_items_to_messages` + `project_messages` and the scripted
  fake does **not** re-call the echo tool (Contract §4 invariants; this is
  the projection-path check the old subprocess proof never made).

Commit: `plan 008: end-to-end fake turn test`

## Test plan

No timing-based tests. Deterministic cases:

1. Mapping round-trip: every `kind` maps to the pinned message type and back
   to an identical body; missing `content` on an owner item raises
   `ValueError` with the item id.
2. Projection invariants: `items → messages → project_messages` yields
   exactly one tool role per call_id, no duplicate call_ids, no empty tool
   role.
3. Persist seam: every message kind reaches the async callback; a raising
   callback produces `PERSISTENCE_FAILED` and an interrupted run.
4. Single finalization: exactly one final assistant item per turn; the
   `run_completed` event and phase transition still occur.
5. Duplicate tool result: raises, then a normal operation on the same session
   succeeds (Slice 0 regression).
6. Interrupted run: `send()` returns `interrupted_run_exists`; explicit
   `retry_interrupted` works afterwards.
7. Exit-reason mapping: each `TurnExitReason` lands in the pinned run phase
   (scripted fake responses for MODEL_FAILED / LIMIT_REACHED / INCOMPLETE).
8. TOOL_USE with zero tool calls is treated as `MODEL_FAILED` (no loop).

## Independent review

1. Reviewer 1 (adapter/tx): mapping table and round-trip, rollback helper
   (repro: duplicate settle then next op), single-finalization path,
   sequence invariants.
2. Reviewer 2 (seam/scope): the carve-out is limited to `turn.py:38,71-84`
   + call site and its tests; interrupted-run policy; busy_timeout; no
   `agent/` or `model_layer/` changes beyond the carve-out.
3. One repair pass is allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 008 learning gate (answers re-verified against current code).
- [ ] Plan 007 is accepted (owner-recorded decision).
- [ ] Slice 0 repairs merged first: rollback helper + busy_timeout + regression test green.
- [ ] `ConversationRunner` exists with `_items_to_messages`, `_message_to_item`,
  `_persist_callback`, and `run_turn_in_run`; persist seam is async end-to-end.
- [ ] `SessionWeave.send()` returns `TurnResult`; `interrupted_run_exists` on an interrupted run.
- [ ] `test_send_fake_turn` passes with real `ToolRegistry.dispatch`; the send
  turn persists exactly 5 items (owner, assistant tool_calls, tool_call,
  tool_result, assistant final) — 6 in full-history load including the
  `start_conversation` owner — with no duplicate IDs and strictly increasing
  sequences.
- [ ] Restart proof replays items through `project_messages` without re-calling the tool.
- [ ] Focused tests, full tests, and lint pass.
- [ ] No files outside the scope list (including the named carve-out) are modified.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 008 final decision.

## STOP conditions

Stop and report if:

- Plan 007 is not accepted;
- the persist seam requires changes outside `agent/turn.py:38,71-84` (the
  carve-out) — escalate the scope, do not widen it unilaterally;
- the async callback would still be called through a sync `_persist` (i.e.
  the seam was not actually converted end-to-end) — Contract §2 is a hard
  requirement, not a preference;
- the Slice 0 regression (duplicate settle → next op succeeds) fails;
- the fake model provider's `responses` tuple API has changed from
  `fake.py:21-56`;
- the mapping table produces an empty tool role or a double-projected tool
  call on replay;
- `complete_run`'s new flag is needed by any caller outside `runner.py`;
- focused verification fails twice after one clear repair attempt;
- private prose, credentials, or raw reasoning enter evidence.

## Maintenance notes

- **Serial-writer ceiling:** `_next_sequence` is MAX+1 inside the tx. Add a
  per-`SessionWeave` write lock (or move sequencing to a single writer
  process) before any concurrent `send()` feature ships. Cross-process
  writers are untested; WAL allows only one writer at a time and
  `busy_timeout` now bounds the wait. If contention ever appears,
  Hermes's pattern (BEGIN IMMEDIATE + app-level retry with jitter) is the
  upgrade path — the retry half is deliberately not implemented here.
- `complete_run(final_item_already_persisted=True)` must only be used by the
  runner; every other caller keeps the default so the final assistant item
  is still inserted.
- `run_turn_in_run` loads ALL conversation items. When a future plan wires
  `continue_interrupted`/`retry_interrupted` into the runner, continue is
  already correct (the interrupted run's settled items are in the table)
  but retry needs an explicit exclusion (load with `run_id !=` the
  interrupted run's id) — retry currently stays in the subprocess driver.
- Cancelled tool results replay as `ok=True` with their stored result per
  the pinned mapping table (the body stores only
  `tool_call_id`/`name`/`result`). Interrupted runs are recovered via
  continue/retry, which makes the lossy edge visible but acceptable in
  Plan 008's scope; a future plan can add `ok`/`error` body keys.
- The persist carve-out in `agent/turn.py` is the only `agent/` change in
  this plan. Future plans touching `agent/` must re-confirm the carve-out is
  closed.
- A future plan that activates fetch/update corpus tools inside a
  conversation must first re-audit their effect classification (they are
  network-backed but registered `INTERNAL_WRITE`; see audit finding B2 and
  Plan 010's contract).

## Deferred work

- `AgentSession` in `agent/session.py` is superseded but not deleted. A
  future cleanup plan removes it after the TUI and CLI are wired.
- `ContextAssembler` (Plan 009) builds on `_items_to_messages` to add system
  prompt assembly and context window budgeting.
- Auto-continue on interrupted runs; per-session write locking; snapshot
  persistence.
- Live model calls, corpus tools in conversation, relationship memory,
  LangGraph, and TUI remain outside Plan 008.

## Checkpoint audit corrections (2026-08-01)

Spec-vs-code audit results. 13/13 claims verified, all aligned. No code
bugs. Doc fixes:

1. DOC — stale line refs: the persist seam is at turn.py:43-45 and
   _persist at turn.py:114-128 (Phase B streaming grew the file; the
   plan cites 38 and 71-84).
2. DOC — the pinned mapping table moved from runner.py into items.py
   (Plan 009 extraction, verbatim); runner.py re-exports the private
   names. Noted.
3. DOC — run_turn_in_run now interposes ContextAssembler.assemble()
   (Plan 009) with token_budget=None as count-only (Plan 010 Phase D);
   Plan 008 behavior preserved and guarded by
   test_runner_unbounded_default_preserves_plan008.
4. FIXED (coverage) — plan test-plan items 3/7 ("a raising callback
   produces PERSISTENCE_FAILED and an interrupted run") were uncovered.
   Commit 9ffb0ab adds test_send_persist_failure_marks_run_interrupted;
   the behavior was already correct, now locked.
5. NOTE — find_interrupted_run matches phase='interrupted' only; a hard
   crash leaves queued/model_call_pending/settling and the next send
   starts a new turn (see Plan 006 correction 1). Out of plan-008's
   contract; a future plan wiring send() as the primary path should
   reconcile it.
