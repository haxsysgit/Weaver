# Plan 004: Make cancellation and side effects explicit

> **Executor instructions:** Execute only after Plan 003 is accepted. Read this
> plan and the accepted Plan 003 result before editing. Run each verification
> gate and record failures. Do not treat task cancellation as proof that an
> external system rolled back.

## Status

- **State:** Draft; owner confirmation of `learning.md` pending
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium
- **Depends on:** Plan 003 accepted
- **Category:** Correctness and safety
- **Planned at:** commit `96d0729`, dirty working-tree snapshot, 2026-07-30
- **Learning gate:** `deliverables/004-cancellation-and-side-effects/learning.md`

## Goal

Give Weaver one clear rule for stopping a running async tool and one clear rule
for deciding which side effects a turn is allowed to start.

After this plan:

- cancellation can reach a running cooperative handler;
- a cancelled handler settles before the turn returns;
- read tools are allowed by default;
- internal writes and external effects are blocked unless the caller explicitly
  admits them;
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

Add an immutable policy value, for example:

```python
@dataclass(frozen=True, slots=True)
class ToolExecutionPolicy:
    allowed_effects: frozenset[EffectKind]
```

The safe default is `frozenset({EffectKind.READ})`.

`AgentSession` and `run_turn()` receive the policy explicitly. Do not read a
global permission flag from the environment.

### Effect meanings

- `READ`: may inspect local or remote state without changing domain or external
  state. Writing an owner-only operational receipt is allowed.
- `INTERNAL_WRITE`: changes Weaver-owned state, including library files,
  packets, exports, accepted memory, or durable records.
- `EXTERNAL_EFFECT`: changes another system or communicates outside Weaver,
  such as sending a message or submitting a form.

An unapproved effect returns `effect_not_allowed`. Its handler does not start.
This plan does not build a human approval UI.

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

### Honest limit

Async cancellation is cooperative. A handler that blocks the event loop,
swallows `CancelledError`, or has already committed an external action may not
stop immediately. Document this in code and tests. Do not add threads,
process-killing, or rollback claims in this slice.

### Retry rule

`retry_safe` remains descriptive metadata. There are no silent retries. A later
plan may consume this field only after defining visible attempt records and
idempotency keys.

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

## Steps

### Step 1: Write policy and cancellation regression tests

Add deterministic handlers controlled by `asyncio.Event` objects. Cover:

- read handler allowed by the default policy;
- internal-write and external-effect handlers blocked by default;
- explicitly admitted internal write runs;
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

If handler completion wins at the same time as cancellation, use one
documented deterministic rule. Recommended rule: a completed result wins only
if the task is already done before dispatch observes cancellation. Test that
race.

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

- [ ] The owner confirmed Plan 004 `learning.md`.
- [ ] Plan 003 is accepted.
- [ ] Default turns can run only `READ` effects.
- [ ] Blocked effects never start their handlers.
- [ ] A running cooperative async handler receives cancellation.
- [ ] Dispatch settles handler cleanup before returning.
- [ ] Cancelled calls are recorded as cancelled, not failed or completed.
- [ ] No retry occurs.
- [ ] Focused and full tests pass.
- [ ] In-scope lint passes.
- [ ] Reviews have no open blocker.
- [ ] The owner recorded Plan 004's final decision.

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
