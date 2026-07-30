# Decision 006: Weaver's durable conversation architecture

## Status

Accepted for Plan 006 documentation on 2026-07-30.

The owner confirmed the learning gate with three corrections:

1. the first durable conversation uses a Weaver-owned direct coordinator;
2. relationship-memory saves use risk-based confirmation;
3. private wiki pages are rebuildable projections, never canonical state.

This record fixes the architecture direction. Plan 006's final acceptance
remains an owner gate after the complete evidence, diagram, and reviews.

## Tiny model

Weaver keeps a notebook and a working brief.

The notebook is exact history. It never changes after a line settles.
The working brief is what the model needs for the next call. It may be replaced
when a better brief exists.

Relationship memory and Weaver opinions are separate notes with named authors.
A workflow checkpoint is only a bookmark for optional execution machinery.

## Identity

```text
Relationship
  -> Conversation
    -> Turn
      -> Run
```

- `Relationship` is the continuing owner and Weaver relationship.
- `Conversation` is one resumable chat in that relationship.
- `Turn` is one normal owner input and the work it starts.
- `Run` is one execution attempt for that turn.

Retry and continue each create a new `Run` under the same `Turn`. The new run
links to the interrupted run. The old attempt remains inspectable.

One conversation has at most one active turn. Other owner input received while
busy becomes a durable FIFO turn, unless the owner explicitly marks it as
steering for the active turn.

## Canonical records

`.weaver/state/weaver.sqlite3` owns:

- relationships, conversations, turns, and runs;
- immutable conversation items and their transaction order;
- canonical run phase and recovery requests;
- approvals;
- queued turns and steering delivery state;
- durable run-event sequence;
- context-snapshot versions and source links;
- relationship memories and memory-review jobs;
- Weaver opinions and their revisions.

`ConversationItem` is immutable ordered evidence. Item kinds include owner
input, assistant output, tool call, tool result, interruption, steering, and
context marker.

For every tool interaction, keep:

- provider tool-call ID;
- tool name;
- exact argument JSON;
- exact settled result;
- run and turn identity;
- delivery mode;
- settlement order.

Model-visible tool schemas may not accept credentials. Because arguments are
preserved exactly, secret-bearing fields are forbidden instead of redacted
after settlement.

## Storage rules

The canonical database uses:

- numbered migrations;
- foreign keys enabled on every connection;
- WAL;
- uniqueness constraints for conversation order, event order, turn order,
  run attempt, tool-call identity, and one result per call;
- owner-only directories (`700`) and files (`600`).

FTS5 is deferred until transcript search exists. When admitted, it indexes
owner and assistant text. Tool arguments and results stay out of the search
index.

`.weaver/state/workflows.sqlite3` is optional and absent from Plan 007.
A future coordinator adapter may store canonical IDs and phase versions there.
It may not store conversation history, relationship memory, Weaver opinions,
private library data, or recovery authority.

SQLite WAL does not make two database files crash-atomic as one transaction.
The optional adapter must reconcile from canonical Weaver state after a crash.
Deleting its database must not remove recovery choices, settled chats, events,
memories, approvals, or queued work.

## Direct coordinator

The first `RunCoordinator` is Weaver-owned direct code.

```text
claim queued run
  -> assemble context
  -> record boundary intent
  -> call model or tool
  -> settle exact items and events
  -> update canonical phase
  -> queue memory review
```

The coordinator keeps the current model types, `ToolRegistry`, effect policy,
cancellation, and readable inner loop unchanged.

Canonical phase is written before and after any non-repeatable boundary.
Startup reads that phase and creates a recovery request when it cannot prove
the boundary completed.

## Transactions and ordering

The following changes settle together in one canonical transaction:

- normal input: new turn, owner item, FIFO position, first queued run, and
  queued event;
- steering: steering item, active-turn link, delivery state, and event;
- tool settlement: tool result, link to its exact call, item-settled event, and
  updated run phase;
- run completion: final items, completed phase, and completed event;
- memory correction: replacement record, source links, supersession link, and
  notice or confirmation state.

Every conversation has a strictly increasing item sequence. Every client event
has a strictly increasing reconnect sequence. A committed item and its
item-settled event cannot disagree.

Token deltas remain transport-only. After reconnect, clients rebuild text from
canonical items and use durable events plus current run status to recover the
screen.

## Recovery

No startup path silently repeats a model call or tool.

- `retry` creates a new run and assembles context from before the failed
  attempt.
- `continue` creates a new run and additionally includes settled partial items
  from the interrupted attempt.
- `stop` leaves the interruption and recovery choice settled.

Neither retry nor continue changes the interrupted run.

## Context assembly

`ContextSnapshot` is a replaceable projection. It may reference:

- exact conversation-item IDs;
- relationship-memory IDs and versions;
- Weaver-opinion IDs and versions;
- the current prompt/tool/provider configuration version.

Every included snapshot, memory, and opinion has source identifiers. Replacing
a snapshot creates a new version and never edits exact items.

The minimum Plan 007 assembler uses exact history only. Compaction, retrieval,
and literary understanding are later experiments.

## Relationship memory

`RelationshipMemory` stores owner-attributed preferences, theories, shared
history, running discussions, and open questions.

`WeaverOpinion` is a separate Weaver-attributed record. It remains source-linked
and revisable. Literary claims are not relationship memory and wait for later
experiments.

Memory policy is risk-based:

| Risk | Example | Save rule |
| --- | --- | --- |
| Low | answer-length preference, favourite discussion format | save with visible notice and undo |
| Sensitive | health, identity, finance, private life | require confirmation before activation |
| Disputed | owner corrects or challenges the proposed record | require confirmation and keep the dispute |
| High impact | a record that changes permissions or future external actions | require explicit approval in the relevant future plan |

All memory records keep attribution, claim type, source type, confidence,
scope, and revision status as separate fields.

A correction appends a superseding version. Forgetting removes a memory from
future context without deleting its source conversation. Source-chat deletion
is a separate explicit action.

## Private compiled knowledge

`CompiledKnowledgeProjector` may later generate Markdown under:

```text
.weaver/projections/wiki/
```

The projection is private, rebuildable, and optional. It may support narrative
threads, contradiction-aware pages, linting, index/log navigation, and
Obsidian views.

It is not canonical, not committed, and does not require Git. This is input to
Plan 009, not Plan 007. The public project vision file is never a private hot
cache.

## Optional coordinator adapters

LangGraph remains a possible `RunCoordinator` adapter for a later workflow
with independently retryable stages, fan-out/join, or durable human pauses.

The adapter must:

- mirror canonical IDs and phase versions only;
- keep side effects idempotent;
- tolerate missing or stale checkpoint state;
- export Weaver events instead of framework stream types;
- pass the same repository and recovery contract tests as the direct
  coordinator.

## Scenario traces

### Restart between turns

1. The previous run is completed and all items/events are committed.
2. The process stops.
3. Startup reads no unfinished run.
4. The next owner input creates a new turn and queued run.

No recovery prompt appears.

### Crash before a model call

1. The run phase records `model_call_pending`.
2. The process crashes before any settled assistant item exists.
3. Startup records the run as interrupted and creates a recovery request.
4. Retry or continue creates a new run.

The model call is not started automatically.

### Crash after a settled tool result

1. Tool call and exact arguments already exist.
2. Tool result, item-settled event, and post-tool phase commit together.
3. The process crashes before the next model call.
4. Startup exposes the interrupted run.
5. Continue includes the settled result and does not call the tool again.

### Retry

1. The owner chooses retry.
2. Weaver creates a linked run under the same turn.
3. Context stops before the failed attempt's generated items.
4. The new run starts with a new attempt number.

### Continue

1. The owner chooses continue.
2. Weaver creates a linked run under the same turn.
3. Context includes settled partial items from the interrupted run.
4. Unsettled model/tool work is not replayed.

### Steering

1. The owner explicitly targets the active turn.
2. Weaver commits a steering item with delivery mode `steering`.
3. The inner loop receives it at the next safe model or tool boundary.
4. Delivery state and event are committed.

### FIFO follow-up

1. A normal owner message arrives while the conversation is busy.
2. Weaver commits a new turn with the next FIFO position.
3. The active turn settles.
4. The direct coordinator claims the oldest queued turn.

Every owner message remains its own turn.

### New-conversation continuity

1. The owner creates another conversation in the same relationship.
2. Exact items from the older chat remain there.
3. The assembler selects active relationship memories and Weaver opinions by
   source ID and version.
4. The new conversation continues the relationship without copying all old
   chat text.

### Memory correction

1. A low-risk memory was saved with notice.
2. The owner corrects it.
3. Weaver appends a new version linked to the source and superseded record.
4. Future context uses only the active corrected version.

> The old source item and revision trail remain inspectable.

### Crash during tool execution

1. The tool-call item is already committed.
2. The process crashes before the tool result settles.
3. Startup records the run as interrupted with the committed tool call visible.
4. Continue includes the settled tool-call item.
5. A fresh model call decides the next step.
6. The tool is not re-executed.

### Context replacement

1. Snapshot version 3 references exact items and memory/opinion versions.
2. A later assembler creates version 4.
3. Version 4 becomes active.
4. Version 3 and every exact source record remain unchanged.

## Future interfaces

Plan 006 documents, but does not implement:

- `ConversationRepository`
- `RunRepository`
- `RelationshipMemoryRepository`
- `OpinionRepository`
- `ContextAssembler`
- `ConversationRunner`
- `RunCoordinator`
- `RunEventLog`
- `CompiledKnowledgeProjector`

## Consequences

The first proof is smaller and easier to inspect. Weaver owns the rules that
matter for exact history and recovery. The cost is writing direct repository
and coordinator code in Plan 007.

LangGraph stays available if later workflow evidence justifies its replay and
checkpoint semantics.
