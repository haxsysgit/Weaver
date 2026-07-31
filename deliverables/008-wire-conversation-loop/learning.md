# Learning Note: Wire the conversation loop

## Gate status

**Admitted 2026-07-31.** Owner admitted Plan 008 (post-rewrite) and instructed
implementation. Answers below were re-verified line-by-line against the
tree on 2026-07-31; stale draft claims corrected. Final owner decision on
the implementation remains pending after tests, inspection, and independent
review.

## Tiny model

Weaver has two halves that have never touched.

The agent half (`agent/turn.py`) knows how to stream from a model, dispatch
tools, cancel handlers, and produce `TurnResult`. It has run in pytest since
Plan 001 but has never been called from a durable conversation.

The conversation half (`conversation/`) knows how to persist identity, exact
items, run phases, and restart safety. It has been tested in subprocess
fixtures since Plan 007 but has never called `run_turn()`.

The bridge is one adapter and one callback.

The adapter converts `ItemRecord` (SQLite rows) into `ConversationMessage`
(the type `run_turn()` consumes) and back. One direction loads history. The
other persists new messages as they settle.

The callback hooks into `run_turn()`'s `persist_message` seam. Every time
the turn loop produces an assistant message, a tool-call evidence record, or
a tool-result record, the callback writes the corresponding `ItemRecord`
into the database inside a coordinator-managed transaction.

## The pieces

- `run_turn()` (`agent/turn.py:149-280`): streams model responses, dispatches
  tools, calls `persist_message` after every message, returns `TurnResult`.
  The `persist_message` parameter (line 38 type alias, line 161 default
  `None`) is `Callable[[ConversationMessage], None]` — sync, one message at
  a time. **Plan 008 converts it to an async callback (named carve-out,
  contract §2: `turn.py:38,71-84` + call site only).**
- `SessionWeave` (`conversation/session.py:17-126`): wires
  `ConversationRepository` and `RunCoordinator`. Has `start_conversation`,
  `continue_interrupted`, `retry_interrupted`, `find_interrupted_runs`. No
  `send()` method. No reference to `agent/`.
- `ConversationRunner` (does not exist yet): the new class that owns the
  adapter and the persist callback. Created by `SessionWeave.open()` when
  `model_layer` and `tool_registry` are provided.
- `ItemRecord` (`conversation/repository.py:14-22`): dataclass with `id`,
  `conversation_id`, `sequence`, `turn_id`, `run_id`, `kind` ("owner",
  "assistant", "tool_call", "tool_result"), `body` (JSON string), `created_at`.
- `ConversationMessage` (`agent/messages.py:14-68`): union of `UserMessage`,
  `AssistantMessage`, `ToolCallMessage`, `ToolResultMessage`.
- `FakeModelProvider` (`model_layer/fake.py:26-56`): pre-programmed with a
  tuple of `ModelResponse` objects. Tests use `scripted_layer(*responses)`
  from `tests/test_agent_turn.py:97-108`.
- `ToolRegistry` (`agent/tools.py`): dispatches tools with cancellation and
  effect policy. Plan 004 hardened it.

## What I understood

1. `SessionWeave.send()` is the new public method. It creates a turn and run
   via the coordinator, assembles history from existing items, calls
   `run_turn()`, and returns the `TurnResult`.
2. The persist callback writes one `ConversationMessage` as one `ItemRecord`
   in a single transaction. It is called from inside `run_turn()`'s
   stream-dispatch-persist loop, not batched.
3. `_items_to_messages` converts `ItemRecord` rows to `ConversationMessage`
   lists by reading the `kind` field and `body` JSON. The mapping is:
   `owner` → `UserMessage`, `assistant` → `AssistantMessage` (with
   `tool_calls` from `body.tool_calls`), `tool_call` → `ToolCallMessage`
   (from `body.tool_call_id`, `body.name`, `body.arguments`),
   `tool_result` → `ToolResultMessage` (from `body.tool_call_id`,
   `body.name`, `body.result`).
4. `_message_to_item` is the reverse: `ConversationMessage` → `ItemRecord`.
   The `kind` field is set from the message type, the `body` is the JSON
   serialization of the message's fields.
5. The persist callback is a closure that captures `conversation_id`,
   `run_id`, and `turn_id` from the outer `run_turn_in_run` scope. It
   converts each message via `_message_to_item` and inserts the `ItemRecord`
   inside a single transaction **through the coordinator's rollback-safe
   `_tx` helper** (Slice 0; an exception rolls back and leaves the session
   usable). Because `_insert_item` is underscore-prefixed (private), the
   persist callback is an intentional internal coupling — the callback is
   owned by the conversation module. The callback is `async` (carve-out,
   contract §2): the sync `_persist` at `turn.py:71-84` awaits it.
6. After `run_turn()` returns, `run_turn_in_run` advances the run phase to
   `completed` or `interrupted` based on `TurnResult.exit_reason`. The
   pinned mapping (contract §9): `COMPLETED` → `completed`; `INTERRUPTED`,
   `MODEL_FAILED`, `INCOMPLETE`, `LIMIT_REACHED`, `PERSISTENCE_FAILED` →
   `interrupted`.
7. `SessionWeave.__init__` accepts `model_layer`, `model`, `system_prompt`,
   `tool_registry`, `active_tools`, and `execution_policy` as optional
   keyword arguments. When all are provided, `open()` creates a
   `ConversationRunner`. When `model_layer` is `None` (the default), the
   subprocess-test-only path works as before — no runner, no `send()`.
8. The end-to-end test uses a `FakeModelProvider` pre-programmed with two
   `ModelResponse` objects: one `tool_use` (calls an echo tool), one `stop`
   (acknowledges the result). `ToolRegistry.dispatch` actually runs the
   echo handler. The test asserts `result.tool_starts == 1` and that
   `tool_call` + `tool_result` items appear in the database with correct
   sequencing.
9. The existing `AgentSession` in `agent/session.py` is NOT deleted in Plan
   008. It is superseded by `SessionWeave` but both coexist until the TUI
   and CLI are wired in Plan 010. Deleting it prematurely would break
   existing tests that import it.
10. The only `agent/` change in Plan 008 is the named carve-out: the persist
    seam in `agent/turn.py` (line 38 type alias, `_persist` at lines 71-84,
    and the call sites) becomes async, plus the adjusted callback tests in
    `tests/test_agent_turn.py`. No other `agent/` files change, and
    `agent/tools.py`, `agent/messages.py`, `model_layer/` are untouched.
11. The run phase lifecycle for a send() call is:
    `queued` (created by `start_turn`) → items settle one at a time via
    persist callback → `completed` or `interrupted` (set after `run_turn()`
    returns). The intermediate phases `model_call_pending` and `settling`
    are not set by the persist callback in Plan 008 — they exist in the
    coordinator but belong to the model-call/tool-settlement boundaries
    inside `run_turn()`, which Plan 008 does not instrument.

## Send sequence

```text
SessionWeave.send(conv_id, "hello")
        |
        v
coordinator.start_turn(conv_id, "hello", turn_sequence=N)
        |  (creates turn + run + owner ItemRecord in one tx)
        v
runner.run_turn_in_run(conv_id, run_id, turn_id, cancel_event)
        |
        +--> load items from conversation
        +--> _items_to_messages(items_before_this_run)
        +--> create persist callback (closure over conv_id, run_id, turn_id)
        +--> run_turn(history=messages, persist_message=callback, ...)
        |       |
        |       +--> model stream
        |       +--> assistant message --> persist_callback(assistant_msg)
        |       |       |                        |
        |       |       |                        +--> _message_to_item
        |       |       |                        +--> _repo._insert_item in tx
        |       +--> tool_call message --> persist_callback(tool_call_msg)
        |       +--> tool dispatch (ToolRegistry.dispatch)
        |       +--> tool_result message --> persist_callback(tool_result_msg)
        |       +--> ... repeat until stop/length/error/aborted ...
        |       +--> return TurnResult
        |
        +--> update run phase to completed|interrupted
        +--> return TurnResult
```

## What this plan will prove

- `SessionWeave.send()` runs a real `run_turn()` turn with a fake model.
- Tool calls go through `ToolRegistry.dispatch` with real handlers.
- Every message produced by the turn appears as an `ItemRecord` in the
  database with correct `conversation_id`, `run_id`, `turn_id`, and
  strictly increasing `sequence`.
- The item sequence is `owner → assistant (with tool_calls) → tool_call →
  tool_result → assistant (final)` — a complete tool exchange.
- The run phase transitions from `queued` to `completed` on a successful
  turn.
- No files outside `src/weaver/conversation/` and `tests/` are modified.

## What it will not prove

- Live model calls (fake model only).
- Streaming text display (the turn blocks until complete).
- Context window budgeting (Plan 009).
- Crash recovery during a live turn (the coordinator's restart safety is
  already proven in Plan 007; wiring the live turn into it is deferred).
- TUI integration (Plan 010).
- Corpus tools or novel reading (Plan 011).

## Confirmation record

- Owner choice: **Admitted 2026-07-31** — "i have accepted plan 008, start implementing".
  This confirms the interpretation and adapter design above; it does not
  accept the future code.
- Corrections at admission: gate status updated; item 5 (async seam + `_tx`),
  item 6 (full exit mapping), item 10 (carve-out) corrected to match the
  rewritten plan contract; line refs for `session.py:17`, `fake.py:26`,
  `messages.py:14-68/70-136` re-verified.
- The remaining gate: the owner confirms Slice 1 answers above before
  Slice 2 builds `ConversationRunner` and applies the `agent/turn.py`
  carve-out.
