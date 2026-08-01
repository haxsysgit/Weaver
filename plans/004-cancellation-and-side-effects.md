# Plan 004: Make cancellation and side effects explicit

> **Executor instructions:** Execute only after Plan 003 is accepted. Read this
> plan and the accepted Plan 003 result before editing. Run each verification
> gate and record failures. Do not treat task cancellation as proof that an
> external system rolled back.

## Status

- **State:** Accepted and closed on 2026-07-30
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium
- **Depends on:** Plan 003 accepted
- **Category:** Correctness and safety
- **Planned at:** commit `b101737`, dirty working-tree snapshot, 2026-07-30
- **Learning gate:** confirmed in
  `deliverables/004-cancellation-and-side-effects/learning.md`
- **Final decision:** accepted on 2026-07-30 after implementation, evidence,
  inspection, the readability pass, and both independent rechecks

## Goal

Give Weaver one clear rule for stopping a running async tool and one clear rule
for deciding which side effects a turn is allowed to start.

After this plan:

- cancellation can reach a running cooperative handler;
- a cancelled handler settles before the turn returns;
- normal sessions allow read tools only;
- maintenance sessions allow reads and Weaver-owned writes for the whole
  session;
- outside effects stay blocked in every Plan 004 policy;
- no automatic retry is added;
- receipts distinguish cancelled, blocked, failed, and completed calls.

## Why this matters

The current registry directly awaits a handler. Setting the session's
`cancel_event` does not stop that await. A tool can complete a write after the
user believes the turn was cancelled.

The registry already has `READ`, `INTERNAL_WRITE`, and `EXTERNAL_EFFECT`
labels, but those labels do not change behavior. That makes the policy look
stronger than it is.

Cancellation cannot magically undo a finished write. This plan defines the
honest boundary and tests it.

## Current state

- `src/weaver/agent/tools.py:26-52` defines effect and retry metadata.
- `src/weaver/agent/tools.py:95-139` awaits the handler directly.
- `src/weaver/agent/turn.py:288-299` passes the event to the context, then waits
  for dispatch.
- `src/weaver/agent/session.py:122-125` only sets the event.
- `src/weaver/corpus/tools.py:193-207` currently marks all five internal
  library tools as
  `INTERNAL_WRITE`.

The Plan 003 dependency is expected to change `tools.py`, `turn.py`, and their
tests. At execution time, reread those files instead of applying this plan to
old line numbers.

## Policy to implement

### Capability and effect are separate checks

An active tool answers: "May the model ask for this capability?"

An allowed effect answers: "May this turn start this class of side effect?"

Both checks must pass.

Add an immutable policy value:

```python
@dataclass(frozen=True, slots=True)
class ToolExecutionPolicy:
    allowed_effects: frozenset[EffectKind]
```

`ToolExecutionPolicy.read_only()` admits `READ`.
`ToolExecutionPolicy.maintenance()` admits `READ` and `INTERNAL_WRITE`.
Construction rejects any policy containing `EXTERNAL_EFFECT`.

`AgentSession` and `run_turn()` receive the policy explicitly. Do not read a
global permission flag from the environment.

### Effect meanings

- `READ`: may inspect local or remote state without changing domain or external
  state. Writing an owner-only operational receipt is allowed.
- `INTERNAL_WRITE`: changes Weaver-owned state, including library files,
  packets, exports, accepted memory, or durable records.
- `EXTERNAL_EFFECT`: changes another system or communicates outside Weaver,
  such as sending a message or submitting a form.

An unapproved effect returns `effect_not_allowed`. Its arguments are not
parsed and its handler does not start. This plan does not build a human
approval UI.

Every `ToolDefinition` must state its `EffectKind` explicitly. New tools do not
inherit an effect default.

### Cancellation contract

Add a clear context method such as `raise_if_cancelled()`. Every handler must
check it:

1. before expensive work;
2. before a commit or atomic replace;
3. after any long provider wait when control returns.

Registry dispatch should run the async handler in a task and wait for either:

- handler completion; or
- `cancel_event`.

If cancellation wins:

1. call `handler_task.cancel()`;
2. await the handler task until it settles;
3. return `error_code="cancelled"`;
4. never launch a replacement or retry.

Do not detach a tool task and claim cancellation succeeded.

If handler completion and cancellation become observable together, the
completed handler result wins. Once cancellation wins, a handler that catches
`CancelledError` and returns still settles as cancelled.

The exact dispatch order is:

```text
registered
  -> active
  -> effect allowed
  -> valid JSON
  -> JSON object
  -> cancellation check
  -> handler starts
```

`ToolResult.started` records whether the handler actually began. Turn
statistics use that field instead of counting dispatch attempts.

### Honest limit

Async cancellation is cooperative. A handler that blocks the event loop,
swallows `CancelledError`, or has already committed an external action may not
stop immediately. Document this in code and tests. Do not add threads,
process-killing, or rollback claims in this slice.

### Retry rule

`retry_safe` remains descriptive metadata. There are no silent retries. A later
plan may consume this field only after defining visible attempt records and
idempotency keys.

### Cancelled batches

After cancellation wins, the turn starts no later handler and makes no later
model request. It records a linked `cancelled` result for every remaining call
in the grouped assistant batch so future conversation replay stays valid.

Handlers receive the real `session_id`, `turn_id`, and `call_id`.

## Scope

### In scope

- `src/weaver/agent/tools.py`
- `src/weaver/agent/turn.py`
- `src/weaver/agent/session.py`
- `src/weaver/agent/errors.py`
- `src/weaver/agent/__init__.py`
- `tests/test_agent_turn.py`
- a new focused test file if cancellation tests become hard to scan
- Plan 004 deliverables and `plans/README.md`

### Out of scope

- changing private-library write algorithms;
- adding approval prompts or UI;
- retries, backoff, or job queues;
- force-stopping synchronous or threaded work;
- durable events or context budgeting;
- LangGraph;
- chat CLI;
- live model or Firecrawl calls;
- private novel access.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused tests | `uv run pytest -q tests/test_agent_turn.py` | All agent tests pass |
| Full tests | `uv run pytest -q` | All tests pass |
| Lint in scope | `uv run ruff check src/weaver/agent tests/test_agent_turn.py` | Exit 0 |
| Package check | `uv pip check` | All installed packages compatible |

Confirmed execution baseline:

- 38 agent tests passed;
- 116 full tests passed;
- scoped lint passed;
- 64 installed packages were compatible.

Pre-existing owner-owned worktree changes:

- modified `README.md`, SHA-256
  `d4eb6ff102c62c3f1676f7ea40ccd02247a66bc46e8fabf182f988b9efdd8ff4`;
- untracked `tempplan.md`, SHA-256
  `df6d3f91d4cb39b9439c680dacda1356f7e3fec1b3165e60711ef71b74279740`;
- `README.md:27` has a pre-existing trailing-space failure.

Both paths stay untouched and outside every Plan 004 commit.

## Steps

### Step 1: Write policy and cancellation regression tests

Add deterministic handlers controlled by `asyncio.Event` objects. Cover:

- read handler allowed by the default policy;
- internal-write and external-effect handlers blocked by default;
- maintenance policy admits internal writes;
- external effects remain blocked under both policy constructors;
- cancellation before dispatch means handler start count stays zero;
- cancellation while a handler waits delivers `CancelledError`;
- dispatch waits for handler cleanup before returning;
- a cancelled tool result is recorded and no next handler starts;
- `session_id`, `turn_id`, and `call_id` reach the handler;
- no retry occurs even when `retry_safe=True`.

Use events, not sleeps, for synchronization.

**Verify:** focused tests fail for the expected missing behavior.

### Step 2: Add the execution policy

Create `ToolExecutionPolicy` beside `EffectKind`. Pass it from `AgentSession` to
`run_turn()` and from `run_turn()` to dispatch.

Check active membership first, then effect permission, then parse arguments,
then start the handler.

Return stable safe error codes. Do not expose exception text to the model or
CLI.

**Verify:** effect-policy tests pass.

### Step 3: Race handler completion against cancellation

Use named tasks. Always cancel and await the unused waiter in `finally` so no
task leaks remain.

If handler cancellation wins, preserve Python cancellation semantics inside the
handler, settle it, and return the safe cancelled result.

If handler completion wins at the same time as cancellation, keep the
completed result. Test that race.

**Verify:** cancellation tests pass with no pending-task warnings.

### Step 4: Expose handler checkpoints

Add a small context helper that raises `asyncio.CancelledError` when the event
is set. Document the three required checkpoint locations.

Do not retrofit every library operation in this plan. Plan 007 only exposes
library inspection. Future plans that activate mutating library tools must audit
their commit checkpoints first.

**Verify:** a test handler using the helper cancels before its simulated commit.

### Step 5: Run the full floor and review the safety claims

Run tests, lint, and package checks. Inspect for bare `except Exception` blocks
that might swallow `CancelledError`. Confirm no detached handler task remains.

Record what cancellation proves and what it does not prove in `results.md`.

## Test plan

No timing-based flaky tests. Every cancellation test should coordinate with
events:

```text
handler_started -> test sets cancel -> handler_cleanup_finished -> turn returns
```

Also test blocked effects never parse malicious or malformed argument strings,
because permission refusal should happen before unnecessary work.

## Independent review

1. Safety reviewer checks task lifecycle, cancellation races, and effect
   defaults.
2. Test reviewer checks deterministic synchronization, no sleeps, and no
   overclaim about rollback.
3. One repair pass is allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [x] The owner confirmed Plan 004 `learning.md`.
- [x] Plan 003 is accepted.
- [x] Default turns can run only `READ` effects.
- [x] Blocked effects never start their handlers.
- [x] A running cooperative async handler receives cancellation.
- [x] Dispatch settles handler cleanup before returning.
- [x] Cancelled calls are recorded as cancelled, not failed or completed.
- [x] No retry occurs.
- [x] Focused and full tests pass.
- [x] In-scope lint passes.
- [x] Reviews have no open blocker.
- [x] The owner recorded Plan 004's final decision.

## STOP conditions

Stop and report if:

- Plan 003 is not accepted;
- the proposed policy requires a UI approval service to be safe;
- a dependency uses blocking synchronous work on the event loop;
- the change would claim to roll back an already committed effect;
- private-library mutation code must be changed;
- a test requires arbitrary sleeps to pass;
- a handler task must be detached after cancellation;
- private prose, credentials, or raw reasoning enter evidence.

## Maintenance notes

Every new tool must choose an `EffectKind`. Defaulting a new tool to `READ`
requires reviewer attention.

Plan 007 may expose only a library inspection capability. Any later plan that
activates fetch, update, export, memory writes, or outside communication must
admit the matching effect and test cancellation near its commit point.

## Checkpoint audit corrections (2026-08-01)

Spec-vs-code audit results. 26/26 claims verified, 24 aligned, 2
partial (both in the durable layer). One hard-invariant violation,
fixed. Doc fixes:

1. FIXED — "Cancelled calls are recorded as cancelled, not failed or
   completed" was violated on the durable path: the Plan 008/009
   mapping wrote only `result` for tool_result items, so cancelled,
   blocked, and failed calls replayed as `ok=True` ("Tool execution
   failed."). Commit 9ffb0ab persists failure metadata and reads old
   rows as successes. In-memory evidence was always correct.
2. DOC — the raise_if_cancelled() checkpoint contract ships as helper +
   contract + tests; the registered corpus handlers (inspect/build/
   export under maintenance()) do not call it yet. This matches the
   plan's own Step-4 deferral; restated as such.
3. NOTE — the cancelled-batch record is not absolute under persistence
   failure: a mid-batch DB failure breaks the loop and the tail loses
   its cancelled records. Reachable only on DB write failure.
4. NOTE — latent session wedge: external `task.cancel()` of
   AgentSession.send skips the busy/cancel cleanup (CancelledError is a
   BaseException in 3.11). Nothing in the repo does this (TUI contract
   forbids task.cancel); worth try/finally when task-level cancellation
   is ever legitimate.
