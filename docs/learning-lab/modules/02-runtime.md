# Module 02: runtime wiring (the power switch and the bank teller)

the web layer (module 01) talks to exactly one object: `ChatRuntime`,
built by `open_chat_runtime(state_dir, live=False, surface="web")`
(`chat_runtime.py:304`). that call is a test seam (a joint in the
pipeline where you can plug in something else): the same code builds
the production server and the offline lab runs. only the provider
differs (the model company connection): `DeepSeekProvider` (the real
api) vs `FakeModelProvider` (the scripted stand-in), `chat_runtime.py:321-341`.

this is a design decision worth stopping on: the system doesn't have a
"test mode" and a "real mode". it has one mode, and one swappable piece.
you never test a different system than the one you ship.

## what `open_chat_runtime` wires up (the power switch turns on)

for the web surface (`chat_runtime.py:362-388`):

- the five reading tools registered on a `ToolRegistry` (the list of
  tools the model may call, module 06), with `WEB_ACTIVE_TOOLS` as the
  active set (the ones actually switched on) and
  `ToolExecutionPolicy.read_only()` as the policy (the rulebook: only
  reading allowed, no writing);
- `WEB_SYSTEM_PROMPT` as the system prompt (the standing instructions
  the model gets at the top of every request: who it is, how to behave);
  the web surface gets an empty tool registry and a read-only policy,
  meaning it can never write, by construction;
- a `ContextAssembler` token budget of `200_000` for the web surface
  (the bounded per-step re-send: how many tokens one step may use,
  keeps the tool loop fast);
- the `SessionWeave` itself, opened against the state directory (where
  the database lives).

`SessionWeave` (`conversation/session.py`) owns three collaborators (its
team): `ConversationRepository` (the only class that touches sqlite, the
database file), `RunCoordinator` (the bank teller: every write path),
and `ConversationRunner` (the worker that executes the turn).

## the path of a message (follow the money)

1. **`SessionWeave.send()`** (`session.py:130`) checks for an
   interrupted run first (a turn that died mid-work): if one exists it
   returns a safe error instead of auto-continuing (`session.py:168-174`;
   text: `INTERRUPTED_RUN_EXISTS`, `runner.py:43`). never hide what
   happened; make the owner decide. otherwise it computes the next turn
   sequence (the numbering) and calls `RunCoordinator.start_turn`, then
   hands control to `run_turn_in_run`.

2. **`RunCoordinator.start_conversation_and_turn()`**
   (`coordinator.py:53`) creates relationship + conversation + turn +
   run + the first owner item + the `run_queued` event (a log entry
   saying "this run is waiting") **in one transaction** (`BEGIN
   IMMEDIATE`, `coordinator.py:37-44`: a group of writes that all
   succeed or all fail together, like a bank transfer). a failure
   anywhere rolls the whole thing back, no half-created conversations.

   this is why the capture shows *two* owner items (your messages) in
   the transcript: the conversation starter (empty content, `sequence
   1`) created with the conversation, then the real message (`sequence
   2`) created when the turn starts. see
   `evidence/01-web-turn/06-sqlite-items.json`.

3. **`ConversationRunner.run_turn_in_run()`** (`runner.py:103`) loads
   the full item history (all stored rows: messages, tool calls, tool
   results), runs it through the `ContextAssembler` (the window
   manager, module 03), projects items to messages (converts stored
   rows into the message shape the model reads), and calls `run_turn`
   (module 04). every message the turn produces is saved by a callback
   that wraps **one message = one transaction** (`runner.py:87-99`).
   one row, one transfer. no partial messages.

4. **run phases** (the run's lifecycle): the run starts `queued`
   (waiting), moves through `running` (working), and ends `completed`
   (done, or `failed`/interrupted). the capture's
   `evidence/01-web-turn/07-sqlite-runs.json` shows exactly this: the
   starter run stuck at `queued` (its turn is the empty starter turn)
   and the real run at `completed` with `attempt 1`. the `run_event`
   rows (`08-sqlite-events.json`) tell the story in log entries:
   `run_queued` then `run_completed`.

## one write, one transaction, always (the bank teller's rule)

`_tx` (`coordinator.py:24`) is the only write path. the docstring says
why that matters: an exception without a rollback leaves a dangling open
transaction that bricks the connection (the database is stuck holding a
half-finished transfer forever, every later write fails). `BEGIN
IMMEDIATE` takes the write lock at the start so contention (two writers
fighting) surfaces early instead of mid-write.

## why the runtime exists as a seam (the reason this lab exists)

the whole lab is a product of this design: the same
`open_chat_runtime(...)` call, with `live=False`, gives us a fully
deterministic system to capture (same inputs, same outputs, every time).
the mode label (`"fake"`) is carried on the runtime (`chat_runtime.py:343`)
so the surface can tell the owner what it is talking to. honest about
what's running.

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_01_web_turn.py
```

then open `evidence/01-web-turn/07-sqlite-runs.json` and
`08-sqlite-events.json` and trace: which run belongs to the starter
turn (empty owner message), which to the real turn, and how the phases
advance.

## key invariants

- `send()` never auto-continues an interrupted run, explicit recovery
  only (module 07).
- relationship, conversation, turn, run, items/events are created
  atomically (all or nothing).
- one message persists in its own transaction; no partial messages.
- the assembler always runs, even with no budget (count-only mode), so
  the context meter is always available.
