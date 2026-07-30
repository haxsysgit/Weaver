# Learning Note: Restart-safe conversation proof

## Gate status

**Unadmitted. Owner confirmation required during Plan 007.**

## Tiny model

Before Weaver talks to a live model, it needs to prove that its notebook
survives a process dying at the worst useful moment.

One fake tool result settles. The process stops. A new process opens the same
database and continues without calling that tool again.

## Confirmed input from Plan 006

- `Relationship -> Conversation -> Turn -> Run`
- exact immutable conversation items;
- durable run events;
- direct coordinator first;
- retry and continue create new linked runs;
- canonical SQLite owns recovery;
- no silent replay;
- no LangGraph in the first proof.

## Questions answered

### 1. Smallest schema preserving the accepted identity model

Seven tables. No FTS5, no memory tables, no opinions.

```sql
CREATE TABLE _migration (version INTEGER NOT NULL);

CREATE TABLE relationship (
    id TEXT PRIMARY KEY,
    created_at TEXT NOT NULL
);

CREATE TABLE conversation (
    id TEXT PRIMARY KEY,
    relationship_id TEXT NOT NULL REFERENCES relationship(id),
    created_at TEXT NOT NULL
);

CREATE TABLE turn (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversation(id),
    sequence INTEGER NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(conversation_id, sequence)
);

CREATE TABLE run (
    id TEXT PRIMARY KEY,
    turn_id TEXT NOT NULL REFERENCES turn(id),
    attempt INTEGER NOT NULL,
    phase TEXT NOT NULL DEFAULT 'queued',
    interrupted_run_id TEXT REFERENCES run(id),
    created_at TEXT NOT NULL,
    UNIQUE(turn_id, attempt)
);

CREATE TABLE conversation_item (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversation(id),
    sequence INTEGER NOT NULL,
    turn_id TEXT NOT NULL REFERENCES turn(id),
    run_id TEXT NOT NULL REFERENCES run(id),
    kind TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(conversation_id, sequence)
);

CREATE TABLE run_event (
    id TEXT PRIMARY KEY,
    conversation_id TEXT NOT NULL REFERENCES conversation(id),
    sequence INTEGER NOT NULL,
    run_id TEXT NOT NULL REFERENCES run(id),
    kind TEXT NOT NULL,
    body TEXT NOT NULL DEFAULT '{}',
    created_at TEXT NOT NULL,
    UNIQUE(conversation_id, sequence)
);
```

Item `kind` values: `owner`, `assistant`, `tool_call`, `tool_result`.
Event `kind` values: `run_queued`, `run_completed`.

Each `tool_call` and `tool_result` item gets its own UUID via `_uid()`.
The `tool_call_id` is stored in the `body` JSON field and pairs the two
items: `{"tool_call_id": "<shared>", "name": "...", "arguments": "..."}`
for the call, `{"tool_call_id": "<shared>", "name": "...", "result": "..."}`
for the result. The `id TEXT PRIMARY KEY` constraint alone ensures no
duplicate item IDs.

### 2. Run phases bracketing model and tool calls

```text
queued -> model_call_pending -> settling -> completed
```

- `queued`: run exists, not yet claimed.
- `model_call_pending`: a model call is about to start. If the process
  crashes before the first assistant item settles, no model output was
  committed.
- `settling`: tool results are committed, preparing final answer.
- `completed`: all items and events for this run are committed.
- `interrupted`: crash or explicit stop before `completed`.

Only `interrupted` and `completed` are terminal. The phases `assembling`
and `tool_call_pending` are not implemented in the first proof: context
assembly and tool dispatch live in the agent loop (Plans 001--004) and
will be wired later. For now the coordinator advances directly through the
phases the first proof exercises.

### 3. Which rows settle in one transaction

Three transaction boundaries matter for the proof:

**New turn + run:** insert `turn`, `run` (phase=`queued`), owner
`conversation_item`, `run_event` (kind=`run_queued`). All in one transaction.
(`coordinator.py:start_turn`, lines 47--67)

**Tool settlement:** insert tool-call `conversation_item`, tool-result
`conversation_item`. Update `run.phase` to `settling`. All in one transaction.
(`coordinator.py:settle_tool`, lines 102--140)

**Run completion:** insert final assistant `conversation_item`, `run_event`
(kind=`run_completed`). Update `run.phase` to `completed`. All in one
transaction. (`coordinator.py:complete_run`, lines 142--165)

No `turn.status` column exists. Turn completion is inferred from the run
that ends it: the turn is complete when a run in that turn reaches
`completed`. A status column can be added later if needed.

### 4. What retry omits

Retry creates a new `run` (attempt=N+1, `interrupted_run_id`=old run ID).
It omits every `conversation_item` from the interrupted run: the assistant
output that made the tool call, the tool-call item, and the settled
tool-result item. The model starts fresh with only the owner input and any
items from prior completed runs. The old run's items remain in the database
but are excluded from the new run's context.

Retry is not implemented in the first proof (the proof only exercises
continue). The `RunCoordinator` has the building blocks: `mark_interrupted`,
`continue_interrupted`, and `load_items(for_run_id=...)`. A `retry_interrupted`
method can be added in the same pattern.

### 5. What settled data does continue add

Continue creates a new `run` (attempt=N+1, `interrupted_run_id`=old run ID).
It includes all settled `conversation_item` rows from the interrupted run:
the assistant output, the tool-call item, and the settled tool-result item.
The model sees that the tool already ran and got a result. It must not call
the tool again.

In the proof, `continue_interrupted` loads and returns the settled items
(`coordinator.py:206-208`). Process B's fake model hardcodes a response that
acknowledges the tool result without calling the tool again. Context assembly
(deciding which items enter the model's context window) is a Plan 007+
concern.

### 6. Subprocess fixture stops after tool settlement

The proof runs two Python processes via `subprocess.run`:

Process A (`_runner.py:_process_a`):
1. Create `SessionWeave(state_dir)` and call `open()`.
2. Call `start_conversation("Call the echo tool.")`.
3. `insert_assistant_item` writes an assistant item with a tool call, phase
   advances to `model_call_pending`.
4. `settle_tool` writes tool-call + tool-result items, phase advances to
   `settling`.
5. `mark_interrupted` sets phase to `interrupted`.
6. Exit the process (simulating crash before the next model call).

Process B (`_runner.py:_process_b`):
1. Create `SessionWeave(state_dir)` and call `open()`.
2. `find_interrupted_run` returns the interrupted run record.
3. `continue_interrupted` creates a new linked run (attempt 2) and returns
   settled items from the interrupted run.
4. `insert_assistant_item` writes a final answer with zero tool calls.
5. `complete_run` writes the final assistant item, run_completed event, and
   marks phase `completed`.

Test assertions in `_process_b`:
- Exactly one `tool_call` item exists across all runs.
- Exactly one `tool_result` item exists.
- Run 1 is `interrupted`; Run 2 is `completed`.
- No duplicate item IDs.
- Item sequences are strictly monotonically increasing.

The subprocess is a real separate Python process (`subprocess.run([sys.executable, ...])`),
not an in-process asyncio task. This proves the database survives process
boundaries.

### 7. Uniqueness constraints that turn duplicates into failures

| Constraint | What it catches |
|---|---|
| `UNIQUE(conversation_id, sequence)` on `turn` | Duplicate turn order |
| `UNIQUE(turn_id, attempt)` on `run` | Duplicate run attempt number |
| `UNIQUE(conversation_id, sequence)` on `conversation_item` | Duplicate item order |
| `id TEXT PRIMARY KEY` on `conversation_item` | Duplicate item ID |
| `UNIQUE(conversation_id, sequence)` on `run_event` | Duplicate event order |
| `tool_call_id` in body JSON | Pairs tool_call and tool_result items for inspection; no DB-level uniqueness enforced across the pair |

If any duplicate is attempted, SQLite raises `IntegrityError` and the
transaction rolls back. The test asserts that the final dataset has exactly
the expected row counts.

### 8. Owner-only permissions

```python
# session.py:open()
self._state_dir.mkdir(mode=0o700, parents=True, exist_ok=True)
db_path = self._state_dir / "weaver.sqlite3"
self._db = await aiosqlite.connect(str(db_path))
os.chmod(str(db_path), 0o600)
```

Test assertion (`test_conversation.py:test_subprocess_restart`):
```python
stat = state_dir.stat()
assert stat.st_mode & 0o077 == 0  # no group/other access on directory
```

The database file inside the 700 directory inherits restrictive permissions.
`os.chmod` additionally sets the file to `0o600`. The directory test directly
asserts restricted access; the file test is deferred (the directory guard is
the stronger claim).

### 9. Smallest repository/coordinator interfaces

Three classes, one entry point. Implemented at `src/weaver/conversation/`.

```python
class SessionWeave:
    """Wires repo + coordinator. Only public surface for subprocess tests."""
    def __init__(self, state_dir: Path) -> None: ...
    async def open(self) -> None: ...
    async def close(self) -> None: ...
    async def start_conversation(self, owner_text: str) -> str: ...
    async def continue_interrupted(self, conversation_id: str) -> str | None: ...
    async def find_interrupted_runs(self) -> list[dict]: ...
    @property
    def repo(self) -> ConversationRepository: ...
    @property
    def coordinator(self) -> RunCoordinator: ...

class ConversationRepository:
    """Only class touching SQLite. All write methods are _ prefixed
    (called by coordinator inside transactions)."""
    def __init__(self, db: aiosqlite.Connection): ...
    async def setup(self) -> None: ...
    async def find_interrupted_run(self, conversation_id) -> RunRecord | None: ...
    async def load_items(self, conversation_id, *, before_sequence=None,
                         for_run_id=None) -> list[ItemRecord]: ...
    async def load_events(self, conversation_id) -> list[EventRecord]: ...
    async def load_runs(self, conversation_id) -> list[RunRecord]: ...

class RunCoordinator:
    """Owns multi-step transaction logic. Called by SessionWeave."""
    def __init__(self, repo: ConversationRepository): ...
    async def start_turn(self, conversation_id, owner_text, *,
                         turn_sequence) -> tuple[str, str]: ...
    async def insert_assistant_item(self, conversation_id, run_id,
                                     turn_id, content, *,
                                     tool_calls=None) -> list[str]: ...
    async def settle_tool(self, conversation_id, run_id, turn_id,
                          tool_call_id, name, arguments, result) -> None: ...
    async def complete_run(self, conversation_id, run_id, turn_id,
                           final_text) -> None: ...
    async def mark_interrupted(self, run_id) -> None: ...
    async def continue_interrupted(self, conversation_id,
                                   interrupted_run) -> tuple[str, str, list[ItemRecord]]: ...
```

`SessionWeave` is the only class the subprocess fixture imports directly.
Process A calls `sw.start_conversation("hello")`. Process B calls
`sw.continue_interrupted(conversation_id)`. Repository write methods are
underscore-prefixed to signal they must be called inside a coordinator-managed
transaction.

### 10. Failures that stay recorded rather than retried

Any run whose phase was written before the crash stays recorded as
`interrupted`. The phase boundary is the safety marker:

| Crash point | What stays | Why |
|---|---|---|
| Before `model_call_pending` written | Nothing. Next startup sees no interrupted run. | No unsettled work exists. |
| Between `model_call_pending` and first assistant item | Run marked `interrupted` | Model call was about to start. Retry safe because no model output was committed. |
| After tool settlement, before `completed` | Run marked `interrupted`, all items committed | `continue` includes settled items; the old run remains inspectable. |

Failures are never silently retried. The recovery path is always explicit and
creates a new run. The old interrupted run remains inspectable via
`find_interrupted_run` and `load_items(for_run_id=...)`.

## Proposed proof

> A fake conversation persists exact ordered items, restarts in a new process,
> exposes interrupted work, continues without replaying a settled tool result,
> and never duplicates an item, tool call, or event.

## Exclusions

No live model, private library, relationship curation, compaction, FTS5,
generated wiki, LangGraph, or effectful-tool exactly-once claim.

## Post-implementation corrections

- Removed `_update_turn_status` dead code referencing non-existent
  `turn.status` column (`repository.py`).
- Removed `UNIQUE(id, run_id)` constraint: tool_call and tool_result items
  use separate UUIDs; `id TEXT PRIMARY KEY` alone prevents duplicates.
- `tool_call_id` lives in `body` JSON, not as the `id` PK. This was an
  intentional design change from the early learning draft.
- Removed `assembling` and `tool_call_pending` phases: these belong in
  context assembly and tool dispatch layers (already built in Plans 001--004),
  not in the coordinator's run-phase model.
- Removed `run_started`, `run_interrupted`, and `item_settled` event kinds:
  not emitted in the first proof. `run_queued` and `run_completed` are
  sufficient to track the run lifecycle. Additional event kinds can be
  added when a real model loop wires in.
- Removed the claim that DB file permissions are directly tested: only the
  directory permission is asserted. The directory `0o700` guard is the
  stronger claim.
- Repository write methods are `_`-prefixed private methods called inside
  coordinator transactions; the public API is the `SessionWeave` surface.
