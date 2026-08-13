# Module 07: persistence and continuation (the vault)

![Persistence](diagrams/07-persistence.png)

everything that survives a conversation lives in one sqlite database
(a single file that stores all the rows) behind `ConversationRepository`
(`conversation/repository.py`), the only class that touches sqlite. the
full schema (the shape of the tables) is `conversation/schema.py`; the
capture's `evidence/01-web-turn/06-08` files are real rows from a real
turn.

## the tables (the rooms of the vault)

| table | purpose | capture rows |
|---|---|---|
| `relationship` | top-level owner relationship (one row per owner, the top of the tree) | - |
| `conversation` | a chat thread, references the relationship | `05-conversations.json` |
| `turn` | one exchange (sequence per conversation) | `04-transcript.json` |
| `run` | one execution attempt of a turn (`phase`: queued, then running, then completed), `interrupted_run_id` links recovery (which run it resumes) | `07-sqlite-runs.json` |
| `conversation_item` | the transcript itself: `kind` = owner / assistant / tool_call / tool_result, `body` = the JSON payload | `06-sqlite-items.json` |
| `run_event` | the run's story as log entries: `run_queued`, `run_completed`, failures | `08-sqlite-events.json` |

wal journaling (write-ahead log: a journal so a crash mid-write can't
corrupt the file), foreign keys on (the database checks that every
reference points at something real), 5s busy timeout (if the file is
locked by another write, wait up to 5 seconds instead of failing
instantly), `schema.py:67-71`. migration (changing the shape of the
tables as the app evolves) is a versioned one-shot guarded by the
`_migration` table (each version runs exactly once, `schema.py:74`).

## one write, one transaction (the bank teller's rule, again)

`_tx` (`coordinator.py:24`) wraps every write: `BEGIN IMMEDIATE` (take
the write lock up front), commit on success, rollback on any exception
(including cancellation: if the turn is cancelled mid-write, the
half-finished write is undone). the docstring is explicit about why: a
dangling transaction bricks the connection (the database is stuck
holding an unfinished transfer forever). the heaviest use is
`start_conversation_and_turn` (`coordinator.py:53`), which creates
relationship + conversation + turn + run + first owner item +
`run_queued` event atomically (all or nothing): a conversation can
never half-exist in the store. `run_turn_in_run`'s persist callback
writes one message per transaction (`runner.py:87-99`).

## what the capture shows

`06-sqlite-items.json`: the starter turn (sequence 1, empty owner
content), the real owner message (sequence 2), the assistant answer
(sequence 3). `07-sqlite-runs.json`: the starter run left as `queued`
and the real run at `completed`, both `attempt 1`. `08-sqlite-events.json`:
`run_queued`, `run_queued`, `run_completed` in sequence order: events
carry the run's lifecycle without duplicating the transcript.

## durable evidence only (the vault never holds prose)

`body` for a `tool_result` holds the durable evidence record (the
pointer: chapter, lines, hash, handle), never the reading prose
(modules 05-06; the seam is `items.py:_durable_result`). this is why
the transcript file `04-transcript.json` and the item rows never
contain novel text. the same canary discipline applies to the lab's
own artifacts: no private source ever leaves `novels/`.

## interrupts, restarts, recovery (what happens when things break)

- **interrupted run:** a turn that dies mid-work leaves its run marked
  interrupted (phase stays incomplete, not completed); the interruption
  is recorded (`coordinator.py:330`).
- **`send()` never auto-continues:** finding an interrupted run returns
  the safe-failure `INTERRUPTED_RUN_EXISTS` instead of starting a new
  run (`session.py:168-174`, `runner.py:43`). no invisible behavior in
  a fresh process (restarted server acting on its own), the store is
  the truth, the owner decides.
- **explicit recovery paths** (`session.py:327-500`):
  `continue_interrupted` (pick up where it stopped), `retry_interrupted`
  (run the interrupted turn again), `retry_last_turn` (re-runs the
  interrupted turn with its stored owner text), and `regenerate_last_turn`
  (re-answers the last question in place, superseding the previous run
  so the old answer leaves the transcript). the web routes for
  retry/regenerate never take text from the client (`app.py:619-664`),
  they reload it from the store (the client can't lie about what was
  asked).
- **restart safety:** everything reloads from sqlite: transcript, runs,
  events. `tests/test_conversation.py` proves the whole flow by running
  a turn, killing the process, and continuing in a fresh process (hard
  restart, data intact).

## inspect it yourself

```bash
.venv/bin/python docs/learning-lab/scripts/capture_01_web_turn.py
```

open the state db it created (`/tmp/learning-lab-01-*/weaver.sqlite3`)
with `sqlite3` and run the same queries the repository runs,
`SELECT * FROM conversation_item ORDER BY sequence;` and compare with
the committed artifacts.

## key invariants

- the store is the source of truth; the ui is a projection of it.
- every write is transactional and versioned; no partial records.
- interrupted runs are explicit, never silently overwritten.
- retry/regenerate reload their inputs from the store, never from the
  client.
- tool prose never persists; only durable evidence records do.