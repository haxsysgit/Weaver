# Learning Note: Restart-safe conversation proof

## Gate status

**Unadmitted. Owner confirmation required after Plan 006 is finally accepted.**

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
    UNIQUE(conversation_id, sequence),
    UNIQUE(id, run_id)
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
Event `kind` values: `run_queued`, `run_started`, `run_interrupted`,
`run_completed`.

`tool_call` items store the exact tool-call ID in `body` as JSON:
`{"tool_call_id": "...", "name": "...", "arguments": "..."}`.
`tool_result` items store `{"tool_call_id": "...", "name": "...", "result": "..."}`.
The `tool_call_id` doubles as the `conversation_item.id` for both call and
result rows (same ID for the paired items).

### 2. Run phases bracketing model and tool calls

```text
queued -> assembling -> model_call_pending -> tool_call_pending
  -> settling -> completed
```

- `queued`: run exists, not yet claimed.
- `assembling`: context is being assembled.
- `model_call_pending`: a model call is about to start. If the process crashes
  before the first assistant item settles, no model output was committed.
- `tool_call_pending`: model returned tool calls, dispatch is about to start.
  If the process crashes before the first tool result settles, tool calls are
  committed but results are not.
- `settling`: tool results are committed, preparing final answer.
- `completed`: all items and events for this run are committed.
- `interrupted`: crash or explicit stop before `completed`.

Only `interrupted` and `completed` are terminal.

### 3. Which rows settle in one transaction

Three transaction boundaries matter for the proof:

**New turn + run:** insert `turn`, `run` (phase=`queued`), owner
`conversation_item`, `run_event` (kind=`run_queued`). All in one transaction.

**Tool settlement:** insert tool-call `conversation_item`, tool-result
`conversation_item`, `run_event` (kind=`item_settled` for the tool result).
Update `run.phase` to `settling`. All in one transaction.

**Run completion:** insert final assistant `conversation_item`, `run_event`
(kind=`run_completed`). Update `run.phase` to `completed`. Update `turn.status`
to `completed`. All in one transaction.

### 4. What retry omits

Retry creates a new `run` (attempt=N+1, `interrupted_run_id`=old run ID).
It omits every `conversation_item` from the interrupted run: the assistant
output that made the tool call, the tool-call item, and the settled
tool-result item. The model starts fresh with only the owner input and any
items from prior completed runs. The old run's items remain in the database
but are excluded from the new run's context.

### 5. What settled data does continue add

Continue creates a new `run` (attempt=N+1, `interrupted_run_id`=old run ID).
It includes all settled `conversation_item` rows from the interrupted run:
the assistant output, the tool-call item, and the settled tool-result item.
The model sees that the tool already ran and got a result. It must not call
the tool again.

### 6. Subprocess fixture stops after tool settlement

The proof runs two Python processes:

Process A:
1. Create `SessionWeave(state_dir)` and call `open()`.
2. Call `start_conversation("Call the echo tool.")`.
3. Internally: the fake model emits one tool call; the coordinator settles the
   tool result; the run phase advances to `model_call_pending`.
4. Exit the process (crashes before the next model call starts).

Process B:
1. Create `SessionWeave(state_dir)` and call `open()`.
2. Call `find_interrupted_runs()`: returns the interrupted run.
3. Call `continue_interrupted(conversation_id)`.
4. Internally: the coordinator creates a new run, includes the settled tool
   result in context; the fake model returns a final answer WITHOUT calling
   the tool again.
5. The run and turn are marked `completed`.

Test assertions:
- Exactly one `tool_call` item exists across all runs.
- Exactly one `tool_result` item exists.
- Run 1 is `interrupted`; Run 2 is `completed`.
- No duplicate item IDs, sequences, turn IDs, or event IDs.
- The final assistant item text confirms the model saw the tool result.

### 7. Uniqueness constraints that turn duplicates into failures

| Constraint | What it catches |
|---|---|
| `UNIQUE(conversation_id, sequence)` on `turn` | Duplicate turn order |
| `UNIQUE(turn_id, attempt)` on `run` | Duplicate run attempt number |
| `UNIQUE(conversation_id, sequence)` on `conversation_item` | Duplicate item order |
| `UNIQUE(id, run_id)` on `conversation_item` | Same item ID in two runs (a tool call ID reused) |
| `UNIQUE(conversation_id, sequence)` on `run_event` | Duplicate event order |
| Tool-call ID = `conversation_item.id` | Natural: you cannot insert a second row with the same PK |
| One `tool_result` per `tool_call` | Enforced by reusing the same PK |

If any duplicate is attempted, SQLite raises `IntegrityError` and the
transaction rolls back. The test asserts that the final dataset has exactly
the expected row counts.

### 8. Owner-only permissions

```python
state_dir = Path(".weaver/state")
state_dir.mkdir(mode=0o700, parents=True, exist_ok=True)

# Platform-specific permission check in tests:
stat = state_dir.stat()
assert stat.st_mode & 0o077 == 0  # no group/other access
```

Database file created inside the 700 directory inherits restrictive
permissions. On first open, `sqlite3.connect()` creates the file; the
parent directory's permissions prevent non-owner access. A test assert
verifies the file mode is `0o600` or stricter after creation.

### 9. Smallest repository/coordinator interfaces

Three classes, one entry point.

```python
class SessionWeave:
    """Thin top-level orchestrator. Wires repository and coordinator."""
    def __init__(self, state_dir: Path) -> None: ...
    async def open(self) -> None: ...
    async def close(self) -> None: ...
    async def start_conversation(self, owner_text: str) -> str: ...
    async def continue_interrupted(self, conversation_id: str) -> str: ...
    async def find_interrupted_runs(self) -> list[dict]: ...
    @property
    def repo(self) -> ConversationRepository: ...
    @property
    def coordinator(self) -> RunCoordinator: ...

class ConversationRepository:
    """Only class touching SQLite."""
    def __init__(self, db: aiosqlite.Connection): ...
    async def migrate(self) -> None: ...
    async def create_relationship(self, id: str) -> None: ...
    async def create_conversation(self, id: str, relationship_id: str) -> None: ...
    async def create_turn(self, id: str, conversation_id: str, sequence: int) -> None: ...
    async def create_run(self, id: str, turn_id: str, attempt: int,
                         interrupted_run_id: str | None = None) -> None: ...
    async def insert_item(self, item) -> None: ...
    async def insert_event(self, event) -> None: ...
    async def update_run_phase(self, run_id: str, phase: str) -> None: ...
    async def load_items(self, conversation_id: str,
                         before_sequence: int | None = None) -> list: ...
    async def find_interrupted_run(self, conversation_id: str) -> dict | None: ...

class RunCoordinator:
    """Owns multi-step transaction logic. Called by SessionWeave."""
    def __init__(self, repo: ConversationRepository): ...
    async def claim_turn(self, conversation_id: str) -> dict: ...
    async def settle_tool_result(self, run_id: str, tool_call_id: str,
                                  name: str, result: str) -> None: ...
    async def complete_run(self, run_id: str, final_text: str) -> None: ...
    async def continue_interrupted(self, run: dict) -> dict: ...
```

`SessionWeave` is the only class the subprocess fixture imports directly.
Process A calls `sw.start_conversation("hello")`. Process B calls
`sw.continue_interrupted(conversation_id)`. Everything else is internal.

### 10. Failures that stay recorded rather than retried

Any run whose phase was written before the crash stays recorded as
`interrupted`. The phase boundary is the safety marker:

| Crash point | What stays | Why |
|---|---|---|
| Before `model_call_pending` written | Nothing. Next startup sees no interrupted run. | No unsettled work exists. |
| Between `model_call_pending` and first assistant item | Run marked `interrupted` | Model call was about to start. Retry safe because no model output was committed. |
| Between `tool_call_pending` and tool settlement | Run marked `interrupted`, tool-call items committed | The committed tool-call items mean retry must decide: `continue` sees them and does not re-execute; `retry` omits them. |
| After tool settlement, before `completed` | Run marked `interrupted`, all items committed | `continue` includes settled items; `retry` omits them. |

Failures are never silently retried. The recovery path (`retry` or `continue`)
is always explicit and creates a new run. The old interrupted run remains
inspectable.

## Proposed proof (unchanged)

> A fake conversation persists exact ordered items, restarts in a new process,
> exposes interrupted work, continues without replaying a settled tool result,
> and never duplicates a turn, call ID, result, or event.

## Exclusions

No live model, private library, relationship curation, compaction, FTS5,
generated wiki, LangGraph, or effectful-tool exactly-once claim.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections: pending

Confirmation will admit a detailed implementation plan and deterministic build,
not final acceptance.
