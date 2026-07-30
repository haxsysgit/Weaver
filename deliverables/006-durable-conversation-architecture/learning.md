# Learning Note: Durable conversation architecture

## Gate status

**Pending owner confirmation.**

Plan 005 is accepted. Plan 006 may now complete its research and learning
slice. No final architecture record, roadmap reconciliation, diagram, runtime
change, dependency change, live model call, or private library read is admitted
until this note is confirmed.

The full source study is
[`WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md`](../../WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md).

## Tiny model

Weaver needs four separate things:

1. Exact conversation items record what happened.
2. A context snapshot records what the model should see next.
3. Relationship memory carries useful continuity into another conversation.
4. A workflow checkpoint records where one execution attempt paused.

They may reference each other. None replaces another.

## Observations

These are source-backed findings, not owner decisions.

### Observation 1: Weaver already has the right inner loop boundary

`src/weaver/agent/turn.py` is a readable model/tool loop. It validates provider
identity, stop reasons, tool-call IDs, exact JSON arguments, cancellation, and
message persistence. `ToolRegistry` owns tool policy and dispatch.

There is no evidence that this loop needs to be rewritten as graph nodes.

### Observation 2: the current session wrapper is temporary

`src/weaver/agent/session.py` keeps history in memory, holds at most one pending
message, and cannot survive process restart. It also does not separate a turn
from an execution attempt.

The old Plan 007 draft proves a short chat. It does not prove durable
conversation identity, exact resume, retry evidence, or reconnect ordering.

### Observation 3: Pi gives the clearest small loop

Pi has an inner model/tool/steering loop, an outer follow-up loop, separate
queues, cancellation, and awaited lifecycle events. Its coding-agent
`AgentSession` and JSONL session tree are useful warnings: one large session
service collects too many jobs, and an append-only file tree is not enough for
Weaver's relationship and memory queries.

### Observation 4: Codex gives the clearest client protocol shape

Codex app-server separates thread, turn, and item. It supports resume, active
turn steering, interruption, and item/turn lifecycle notifications.

Weaver still needs two records Codex does not supply for this domain:

- `Relationship`, above conversations;
- `Run`, below a turn, so retry does not erase the failed attempt.

### Observation 5: Hermes proves local SQLite can carry full sessions

The Plan 006 Hermes snapshot uses SQLite, schema migrations, WAL, FTS5,
full message rows, tool-call fields, and session lineage. Its optional memory
providers also show deliberate memory writes and post-turn extraction.

The installed Hermes checkout is `244a6f2`, older than the research snapshot
`f27d45e`. The installed checkout must not be described as current.

Hermes also records raw reasoning fields. Weaver must not copy that choice.
Raw reasoning stays ephemeral.

### Observation 6: LangGraph replay is not settlement

LangGraph replay can re-run nodes after a checkpoint. Resuming an interrupted
node starts that node again. Model calls and side effects therefore need
idempotency and explicit replay policy.

So a checkpoint cannot prove that a conversation item settled exactly once.
Weaver needs its own canonical records and a visible recovery choice.

### Observation 7: the dependency is incomplete

The environment currently has:

- `langgraph 1.2.9`;
- `langgraph-checkpoint 4.1.1`;
- no `langgraph-checkpoint-sqlite`.

The package is present transitively. That does not make LangGraph an accepted
architecture choice. A later implementation plan must add the SQLite
checkpointer explicitly if the owner accepts this design.

### Observation 8: the deterministic baseline is still green

Checked on 2026-07-30:

```text
156 passed
ruff: all checks passed
uv pip check: 64 packages checked, all compatible
```

One combined scope-audit command failed before execution because its shell
expression had an unmatched quote. It changed nothing. The checks were rerun
as smaller commands: tests, lint, package compatibility, `git diff --check`,
changed-file scope, untracked-file scope, credential patterns, private paths,
and raw-reasoning patterns all passed.

## Rejected designs

These are rejected by the supplied Plan 006 direction, pending confirmation.

1. One record for exact chat history, model context, memory, and workflow
   position.
2. LangGraph checkpoint state as Weaver's canonical transcript or memory.
3. LangGraph `thread_id` equal to `conversation_id`.
4. Automatic replay of an unfinished model call or effectful tool after crash.
5. Rewriting settled items when retrying, correcting, forgetting, or
   compacting.
6. Collapsing or silently dropping owner messages while a turn is busy.
7. Copying Pi `AgentSession`, Hermes `AIAgent`, or raw LangGraph event types
   into Weaver's domain.
8. Persisting raw reasoning.
9. Treating a user theory or Weaver opinion as canon.
10. Continuing with the current temporary-chat Plan 007 proof.

## Architecture hypothesis

This is the design proposed for the owner gate. It is not accepted yet.

### One friendship, many conversations

`Relationship` is the continuing Weaver and owner friendship.
`Conversation` is one resumable chat inside it.

Each user input creates one `Turn`. Each execution attempt creates one `Run`.
Retry appends a new run and preserves the failed one.

One conversation has at most one active turn. Different conversations may run
independently in a later plan.

### Exact evidence

`ConversationItem` stores ordered user, assistant, tool-call, tool-result,
interruption, and context-marker records.

Settled items are immutable. Exact tool-call IDs and argument JSON remain
available. Corrections and retries append evidence.

`RunEvent` stores ordered lifecycle events for clients and reconnects.

Proposed run states are:

```text
queued
running
waiting_for_user
completed
interrupted
failed
```

### Separate model context

`ContextSnapshot` is a replaceable, versioned projection from exact item IDs.
It can hold a summary and open threads for the next model call.

Replacing a snapshot does not replace the conversation items it summarizes.

### Separate relationship memory

`RelationshipMemory` stores attributed preferences, theories, disagreements,
running jokes, Weaver opinions, and unresolved discussions.

`MemoryChange` records save, correction, pin, supersession, or forget.

Every memory has source identifiers. User theories stay attributed to the
user. Weaver opinions stay separate and revisable. Forgetting removes a memory
from future context; source-chat deletion is a separate explicit action.

Memory has two proposed write paths:

1. a typed remember tool for deliberate saves during a turn;
2. a non-blocking post-turn curator for useful items the live model missed.

Both use one validator, provenance rules, idempotency, and a visible
save/update notice with inspect and undo controls.

### Storage ownership

```text
.weaver/
  state/
    weaver.sqlite3       canonical conversations, runs, events, context, memory
    workflows.sqlite3    replaceable LangGraph checkpoints
  runs/                  private experiment receipts
  corpus/                existing private library state
```

`weaver.sqlite3` is Weaver's source of truth. It uses migrations, foreign keys,
WAL, and FTS5 transcript search.

`workflows.sqlite3` belongs to the LangGraph adapter. It may be rebuilt without
losing settled chats or memories.

All private directories remain owner-only `700`. Files remain `600`.

### LangGraph boundary

LangGraph coordinates this outer run:

```text
load conversation
  -> claim run
  -> assemble context
  -> execute existing Weaver model/tool loop
  -> settle durable items
  -> queue memory review
```

LangGraph `thread_id` equals Weaver `run_id`, not `conversation_id`.

Graph state contains identifiers, workflow phase, and pending recovery or
approval IDs. It does not contain canonical transcripts, relationship memory,
private library data, provider-neutral messages, tool policy, or public client
events.

### Failure handling

Startup finds unfinished work and records it as visibly interrupted. It does
not replay the model/tool node automatically.

The owner gets a durable recovery choice:

- retry: create a new `run_id`;
- continue: use confirmed partial evidence and create a new execution path;
- stop: leave the interruption settled.

### Steering and follow-up

Normal input while busy becomes FIFO follow-up.

Explicit steering targets the active turn and is delivered at a safe
model/tool boundary. Every message is preserved. Nothing is collapsed.

## Owner choices carried into this gate

The supplied planning discussion records this direction:

1. one friendship across many resumable conversations;
2. separate exact history, model context, relationship memory, and checkpoints;
3. Weaver-owned canonical state;
4. LangGraph around the durable outer run only;
5. the current Python model/tool loop unchanged;
6. separate `weaver.sqlite3` and `workflows.sqlite3`;
7. `run_id` used as LangGraph `thread_id`;
8. explicit interrupted-run recovery instead of silent replay;
9. attributed, correctable, forgettable memory with visible controls;
10. Plan 007 redirected to restart and resume as its first proof.

## Decisions the owner is confirming

Please confirm or correct these exact points:

1. Accept the domain split:
   `Relationship -> Conversation -> Turn -> Run`, with ordered
   `ConversationItem` and `RunEvent` records.
2. Accept separate `ContextSnapshot`, `RelationshipMemory`, and `MemoryChange`
   records, each linked to source item IDs.
3. Accept `weaver.sqlite3` as canonical and `workflows.sqlite3` as replaceable.
4. Accept LangGraph for the outer durable run, with `thread_id = run_id`.
5. Keep the existing Weaver model/tool loop, provider types, tool registry,
   policy, cancellation, and public event types outside LangGraph.
6. Require explicit recovery for unfinished work. Never silently replay a model
   call or effectful tool.
7. Preserve every steering and follow-up message with the proposed delivery
   rules.
8. Redirect Plan 007's first proof to a fake conversation surviving process
   restart with exact ordering and no duplicated turn or tool result.

## What confirmation admits

Confirmation admits the remaining Plan 006 documentation work:

- create the canonical architecture decision;
- reconcile Plan 002, both comparison documents, the roadmap, `README.md`, and
  `weaver.md`;
- rename Plan 006 and its deliverable folder;
- supersede the current Plan 007 temporary-chat draft and record the new proof;
- draw and inspect the editable architecture diagram and preview;
- run two independent reviews, one repair pass, and both rechecks;
- return to the owner for the final Plan 006 decision.

It does not admit Python changes, packages, live model calls, or private library
access.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming this note accepts the hypothesis for documentation. It does not
accept Plan 006's final architecture result.
