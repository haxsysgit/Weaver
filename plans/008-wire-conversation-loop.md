# Plan 008: Wire the conversation loop

> **Executor instructions:** Execute only after Plan 007 is accepted. Read this
> plan, the accepted Plan 007 results, and every file in "Current state" before
> editing. Run each verification gate and record failures.

## Status

- **State:** Planned; learning gate required
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium (first integration of two previously separate subsystems)
- **Depends on:** Plan 007 accepted
- **Category:** Integration and correctness
- **Planned at:** commit `e523383`, 2026-07-30
- **Learning gate:** `deliverables/008-wire-conversation-loop/learning.md`
- **Final decision:** pending

## Goal

Zip `conversation/` and `agent/` into one working conversation.

After this plan, `SessionWeave.send()` calls `run_turn()` with a fake model,
tool calls go through `ToolRegistry.dispatch`, results settle as
`conversation_item` rows, and a subprocess restart test proves the full
end-to-end cycle.

## Why this matters

Plans 001--007 built every piece — model layer, tool registry with
cancellation, turn loop, and durable conversation storage — but they have
never been assembled. `_runner.py` hardcodes fake model behavior instead of
calling `run_turn()`. `SessionWeave` has no `send()` method. The durability
shell and the agent loop live in separate modules with zero imports between
them.

The pieces are individually tested. This plan proves they compose.

## Current state

### `src/weaver/agent/turn.py:149-161` — run_turn() signature

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

`persist_message` (line 38) is `Callable[[ConversationMessage], None]`. When
provided, `run_turn` calls it after every assistant, tool-call, and
tool-result message. This is the seam.

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

### `src/weaver/conversation/coordinator.py:30-281` — RunCoordinator

`start_conversation_and_turn`, `start_turn`, `insert_assistant_item`,
`settle_tool`, `complete_run`, `mark_interrupted`, `continue_interrupted`,
`retry_interrupted`. All methods take and produce `ItemRecord`. None know
about `ConversationMessage` or `run_turn()`.

### `src/weaver/agent/messages.py:14-104` — ConversationMessage types

```
ConversationMessage = UserMessage | AssistantMessage | ToolCallMessage | ToolResultMessage
```

`project_messages()` (line 108) converts `list[ConversationMessage]` into
`list[ModelMessage]` for the model layer.

### `src/weaver/model_layer/fake.py:30-56` — FakeModelProvider

```python
class FakeModelProvider:
    def __init__(self, provider_id, *, models, responses=()):
        self.calls: list[FakeModelCall] = []
        self._responses = responses
```

Pre-programmed with a tuple of `ModelResponse` objects. Each call pops the
next response. Tests use a `scripted_layer()` helper
(`tests/test_agent_turn.py:97-108`).

### `src/weaver/agent/session.py:28-125` — AgentSession (old)

In-memory session with `send()`, `cancel()`, `history`, `turn_count`. This
plan does NOT delete it — SessionWeave supersedes it but both coexist until
the TUI and CLI are wired (Plan 010).

## Implementation slices

### 1. Confirm the learning gate

Answer three questions in `deliverables/008-wire-conversation-loop/learning.md`:

1. ItemRecord ↔ ConversationMessage mapping: which fields map where, and
   what are the edge cases (missing body fields, tool_calls without
   arguments_json)?
2. Persist callback design: where in the coordinator phase lifecycle does
   each message kind land, and how does the callback get the `conversation_id`,
   `run_id`, and `turn_id` it needs?
3. End-to-end test shape: what does the fake model's response sequence look
   like, and what assertions prove tool dispatch went through the real
   registry?

The answers must reference exact file paths and line numbers from the current
codebase. No speculation.

Commit: `plan 008: learning gate answers`

### 2. Build ConversationRunner

Create `src/weaver/conversation/runner.py`. This class owns two adapters:

**`_items_to_messages(items: list[ItemRecord]) -> list[ConversationMessage]`**

Maps:
- `kind="owner"` → `UserMessage(message_id=item.id, turn_id=item.turn_id, content=body["content"])`
- `kind="assistant"` → `AssistantMessage(message_id=item.id, turn_id=item.turn_id, content=body.get("content", ""), tool_calls=tuple(ModelToolCall(...) for tc in body.get("tool_calls", [])))`
- `kind="tool_call"` → `ToolCallMessage(message_id=item.id, turn_id=item.turn_id, call_id=body["tool_call_id"], tool_name=body["name"], arguments_json=body["arguments"])`
- `kind="tool_result"` → `ToolResultMessage(message_id=item.id, turn_id=item.turn_id, call_id=body["tool_call_id"], tool_name=body["name"], ok=True, result=body["result"])` (plan 008: all tool results are ok; error codes come later)

**`_persist_callback(conversation_id, run_id, turn_id) -> PersistCallback`**

Returns a closure that writes each `ConversationMessage` as an `ItemRecord`:

```python
def _persist_callback(self, conversation_id, run_id, turn_id):
    async def persist(message: ConversationMessage) -> None:
        ts = now()
        item = self._message_to_item(message, conversation_id, run_id, turn_id, ts)
        async with self._repo._db.execute("BEGIN"):
            seq = await self._repo._next_sequence(conversation_id)
            item.sequence = seq
            await self._repo._insert_item(item)
            await self._repo._db.commit()
    return persist
```

`_message_to_item` is the reverse of `_items_to_messages`.

**`run_turn_in_run(conversation_id, run_id, turn_id, cancel_event) -> TurnResult`**

1. Load items from the conversation (all items before this run's sequence).
2. Convert to `ConversationMessage` list via `_items_to_messages`.
3. Call `run_turn()` with the history, the persist callback, and all
   required parameters.
4. After `run_turn()` returns, advance the run phase to `completed` or
   `interrupted` based on `TurnResult.exit_reason`.

Commit: `plan 008: add ConversationRunner`

### 3. Add send() to SessionWeave

Accept `model_layer`, `model`, `system_prompt`, `tool_registry`,
`active_tools`, and `execution_policy` in `SessionWeave.__init__` as optional
keyword arguments. When all are provided, create a `ConversationRunner` in
`open()`.

Add `send(conversation_id, user_text) -> TurnResult`:

1. Find the current turn sequence for the conversation.
2. Call `coordinator.start_turn(conversation_id, user_text, turn_sequence=...)`.
3. Create `asyncio.Event()` for cancellation.
4. Call `runner.run_turn_in_run(...)`.
5. Return the `TurnResult`.

Export `ConversationRunner` from `__init__.py`.

Commit: `plan 008: add send() to SessionWeave`

### 4. End-to-end fake-model test

Add `test_send_fake_turn` to `tests/test_conversation.py`:

- Register an echo tool in a `ToolRegistry`.
- Create a `FakeModelProvider` with two responses: one `tool_use` (calls
  echo), one `stop` (acknowledges the result).
- Call `sw.send(conv_id, "Echo hello")`.
- Assert `result.exit_reason == "completed"`, `result.model_steps == 2`,
  `result.tool_starts == 1`.
- Load items from the repo: verify the sequence is owner → assistant
  (with tool_calls) → tool_call → tool_result → assistant (final).
- Verify no duplicate IDs, sequences strictly increasing.

Commit: `plan 008: end-to-end fake turn test`

## Verification floor

```bash
uv run pytest -q tests/test_conversation.py
uv run pytest -q
uv run ruff check src/weaver/conversation tests/test_conversation.py
```

Expected: focused tests include the new `test_send_fake_turn`, full suite
passes (170+ tests), lint clean.

## Independent review

1. Reviewer 1 checks the adapter (ItemRecord ↔ ConversationMessage),
   persist callback transaction boundaries, and run phase lifecycle.
2. Reviewer 2 checks the end-to-end test, cancellation wiring, and scope
   (no changes to agent/, no model-layer modifications).
3. One repair pass allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [ ] Owner confirmed Plan 008 learning gate.
- [ ] Plan 007 is accepted.
- [ ] `ConversationRunner` exists with `_items_to_messages`, `_message_to_item`,
  `_persist_callback`, and `run_turn_in_run`.
- [ ] `SessionWeave.send()` returns `TurnResult`.
- [ ] `test_send_fake_turn` passes with real `ToolRegistry.dispatch`.
- [ ] All items after the turn have correct `conversation_id`, `run_id`,
  `turn_id`, and strictly increasing `sequence`.
- [ ] Focused tests, full tests, and lint pass.
- [ ] No files outside `src/weaver/conversation/` and
  `tests/test_conversation.py` are modified.
- [ ] Two independent reviews have no open blocker.
- [ ] Owner records Plan 008 final decision.

## STOP conditions

Stop and report if:

- Plan 007 is not accepted;
- the fake model provider's `responses` tuple API has changed from what
  `tests/test_agent_turn.py:97-108` shows;
- `run_turn()` fails because the persist callback is not callable from
  within the turn loop's async context;
- a `ConversationMessage` type has fields not covered by the adapter;
- focused verification fails twice after one clear repair attempt;
- private prose, credentials, or raw reasoning enter evidence.

## Deferred work

- `AgentSession` in `agent/session.py` is superseded but not deleted. A
  future cleanup plan removes it after the TUI and CLI are wired.
- ContextAssembler (Plan 009) builds on `_items_to_messages` to add system
  prompt assembly and context window budgeting.
- Live model calls, corpus tools, relationship memory, LangGraph, and TUI
  remain outside Plan 008.
