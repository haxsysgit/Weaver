# Plan 003: Preserve tool protocol and enforce active capabilities

> **Executor instructions:** Read this whole plan before editing. Follow each
> step in order. Run every verification command and record the output in
> `deliverables/003-preserve-tool-protocol/results.md`. Stop on any condition in
> the STOP section. Do not touch private novel files.

## Status

- **State:** Draft; owner confirmation of `learning.md` pending
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium
- **Depends on:** Plan 002 must have a recorded owner decision
- **Category:** Correctness and security
- **Planned at:** commit `96d0729`, dirty working-tree snapshot, 2026-07-30
- **Learning gate:** `deliverables/003-preserve-tool-protocol/learning.md`

## Goal

Make one model-to-tool-to-model exchange structurally correct and keep the
active capability list enforceable at the final dispatch boundary.

After this plan, a tool call keeps its call ID, name, raw JSON arguments, and
assistant grouping all the way into the next DeepSeek request. A registered
tool that is not active cannot run, even if a provider returns its name.

## Why this matters

The current loop builds correct-looking dictionaries after a tool runs, then
drops the tool-call fields while converting those dictionaries into
`Message` objects. The next provider request can contain a blank assistant
message and an unlinked tool result.

The registry also treats "registered" as enough permission to execute. The
active list only controls which schemas the model sees. A bad provider response
can still name another registered tool and reach its handler.

These are foundation bugs. Every later Weaver tool would sit on top of them.

## Current state

### Relevant files

- `src/weaver/model.py`: provider-neutral request, message, tool-call, and event
  types.
- `src/weaver/agent/messages.py`: canonical conversation records and provider
  projection.
- `src/weaver/agent/turn.py`: bounded streaming model/tool loop.
- `src/weaver/agent/tools.py`: registration, schema selection, and dispatch.
- `src/weaver/deepseek.py`: converts `Message` objects to SDK payloads.
- `src/weaver/fake.py`: captures `ModelRequest` objects for deterministic tests.
- `tests/test_agent_turn.py`: current runtime and session tests.
- `tests/test_deepseek.py`: current DeepSeek adapter tests.

### Confirmed bug shape

`src/weaver/agent/turn.py:253-268` creates an assistant dictionary with
`tool_calls`. `src/weaver/agent/turn.py:318-328` creates tool dictionaries with
`tool_call_id`. On the next loop, `src/weaver/agent/turn.py:153-162` copies only
`role` and `content` into `Message`.

`src/weaver/model.py:18-23` has no assistant `tool_calls` field.
`src/weaver/deepseek.py:290-300` can send `tool_call_id`, but cannot send an
assistant tool-call array.

`src/weaver/agent/tools.py:95-120` looks up any registered tool. It does not
receive or check the active names used at
`src/weaver/agent/turn.py:119-130`.

### Dirty snapshot hashes

The agent runtime is untracked at commit `96d0729`, so Git history alone cannot
detect drift. Before execution, compare:

```text
a85bbb7f...  src/weaver/model.py
4b7042db...  src/weaver/deepseek.py
f05736f7...  src/weaver/agent/messages.py
32591bc4...  src/weaver/agent/tools.py
005148ae...  src/weaver/agent/turn.py
da73f35b...  tests/test_agent_turn.py
dcda0417...  tests/test_deepseek.py
```

Use `sha256sum` on the live files. A dependency-approved change is allowed only
after the executor rereads the changed symbols and records the new hashes.

## Target design

### One lossless provider-neutral message type

Move or define `ToolCall` before `Message` in `src/weaver/model.py`, then let
`Message` carry:

```python
role: Role
content: str | None
name: str | None
tool_call_id: str | None
tool_calls: tuple[ToolCall, ...]
```

Do not store OpenAI SDK objects in Weaver types.

### One assistant message per model step

Add `tool_calls: tuple[ToolCall, ...]` to canonical `AssistantMessage`.
`run_turn()` must create one assistant record containing all calls returned in
that model step. Individual `ToolCallMessage` records may remain as inspectable
execution records, but `project_messages()` must not turn each one into a new
assistant message.

Projection must produce this exact order:

1. assistant message with optional text plus the complete tool-call array;
2. one tool message per call with its matching `tool_call_id`;
3. the next assistant response.

### Dispatch checks permission twice

Keep schema filtering in `active_schemas()`. Also pass the active names into
`dispatch()` and refuse any call outside that set with:

```text
ok=false
error_code="inactive_tool"
```

The handler must not start. Unknown and inactive tools remain separate cases.

### Terminal response rules

Use the provider `finish_reason` instead of assigning and ignoring it.

- `stop` with no tool call may complete normally.
- `tool_calls` must contain at least one structurally safe call.
- `length` must never become a completed answer or execute a partial call.
- a length-limited partial answer may be recorded with
  `AssistantMessage.status="interrupted"`, but `TurnResult` must report a
  non-complete exit reason and safe failure.

When a tool succeeds with `{}`, serialize it as `{}`. Test `result is not None`
instead of using dictionary truthiness.

## Scope

### In scope

- `src/weaver/model.py`
- `src/weaver/deepseek.py`
- `src/weaver/agent/messages.py`
- `src/weaver/agent/tools.py`
- `src/weaver/agent/turn.py`
- `src/weaver/agent/errors.py`, only for a safe incomplete-response message
- `src/weaver/fake.py`, only if request capture needs a small test helper
- `tests/test_agent_turn.py`
- `tests/test_deepseek.py`
- Plan 003 deliverables and `plans/README.md`

### Out of scope

- cancellation of a running handler;
- effect approvals and retry policy;
- LangGraph;
- chat CLI or UI;
- durable storage, turn events, context budgeting, or memory;
- changes to private-library behavior;
- any file under `novels/`;
- live model calls.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Focused tests | `uv run pytest -q tests/test_agent_turn.py tests/test_deepseek.py` | All focused tests pass |
| Full tests | `uv run pytest -q` | All tests pass |
| Lint in scope | `uv run ruff check src/weaver/model.py src/weaver/deepseek.py src/weaver/agent tests/test_agent_turn.py tests/test_deepseek.py` | Exit 0 |
| Package check | `uv pip check` | All installed packages compatible |

The baseline on 2026-07-30 was 73 passing tests. Lint had existing unused-code
failures in the agent slice. This plan must clean the in-scope failures it
touches.

## Steps

### Step 1: Add regression tests before changing the types

Write failing tests that prove:

- the second fake model request contains one assistant message with its tool
  calls and one linked tool-result message;
- two calls from one model step remain grouped under one assistant message;
- replaying the saved history on the next user turn preserves the same shape;
- an inactive but registered tool returns `inactive_tool` and its handler count
  stays zero;
- an unknown tool still returns `unknown_tool`;
- a successful empty dictionary reaches the model as `{}`;
- `finish_reason="length"` cannot return `COMPLETED` or run a partial tool call.

Use named helper functions. Keep request-shape assertions explicit.

**Verify:** run the focused tests and record the expected failures. Do not hide
the red test stage.

### Step 2: Make message projection lossless

Update the model and canonical assistant types. Change
`project_messages()` to return provider-neutral `Message` objects directly.
Remove the dictionary-to-`Message` conversion from `run_turn()`.

Update `_message_payload()` to emit:

- `content: null` when an assistant tool-call message has no text;
- `tool_calls` only when present;
- `tool_call_id` only on tool messages.

Do not add provider-specific types to `weaver.agent`.

**Verify:** message projection and DeepSeek adapter tests pass.

### Step 3: Enforce active names during dispatch

Pass the active capability set into `ToolRegistry.dispatch()`. Refuse inactive
registered tools before JSON parsing and before handler execution.

Keep duplicate registration and unknown active-schema setup behavior unchanged.

**Verify:** inactive, unknown, malformed-argument, and allowed-tool tests pass.

### Step 4: Handle terminal states and empty results

Use `finish_reason` to distinguish complete, tool, and incomplete responses.
Reject unsafe partial calls. Serialize any non-`None` result, including `{}`.
Delete newly unused variables and imports in the touched files.

**Verify:** all focused tests and the in-scope lint command pass.

### Step 5: Run the full floor and inspect the diff

Run the full test suite and package check. Inspect every changed hunk. Confirm
that no library-management code, private state, or novel file changed.

Update the Plan 003 results, rubric, and review ledger. Do not mark the owner
decision.

## Test plan

The focused suite must cover:

- single and multiple tool calls;
- exact call IDs and raw argument strings;
- empty assistant text with tool calls;
- empty successful tool output;
- unknown, inactive, malformed, and allowed tools;
- replay across a later user turn;
- `stop`, `tool_calls`, and `length` finish reasons;
- persistence order and failure behavior already covered by existing tests.

No test may call the network or include novel prose.

## Independent review

Freeze the candidate after tests pass.

1. One fresh reviewer checks provider-message correctness and capability
   enforcement.
2. A second fresh reviewer checks tests, privacy, and scope.
3. Record every finding in `review-ledger.md`.
4. Allow one accepted repair pass.
5. Both reviewers recheck the same repaired candidate.

Do not store raw model reasoning in the ledger.

## Done criteria

- [ ] The owner confirmed Plan 003 `learning.md`.
- [ ] Plan 002 has a recorded final owner decision.
- [ ] The second provider request retains assistant tool calls and linked tool
      results.
- [ ] Multiple calls remain grouped under one assistant message.
- [ ] Inactive registered tools cannot execute.
- [ ] Empty dictionaries remain successful tool results.
- [ ] Incomplete provider responses are not marked complete.
- [ ] Focused and full tests pass.
- [ ] In-scope lint passes.
- [ ] No network call or novel access occurred.
- [ ] Two independent reviews have no open blocker.
- [ ] The owner recorded Plan 003's final decision.

## STOP conditions

Stop and report if:

- Plan 002 has not been closed by an owner decision when execution starts;
- current message or tool types differ materially from the snapshot and the
  difference did not come from an accepted dependency;
- the DeepSeek SDK requires provider-owned objects inside Weaver's canonical
  message types;
- fixing replay requires a durable storage migration;
- the change requires library behavior, LangGraph, or a chat entry point;
- focused verification fails twice after one clear repair attempt;
- private prose, a credential value, or raw reasoning appears in any output.

## Maintenance notes

Future providers must map to the same Weaver-owned `Message` and `ToolCall`
types. Active schema filtering is for model guidance. Dispatch enforcement is
the security boundary.

Plan 004 will add cancellation and effect permissions. Do not pre-build those
rules here.
