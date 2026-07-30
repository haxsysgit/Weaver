# Weaver conversation architecture: Pi, Codex, Hermes, and LangGraph

**Plan 006 source study. Learning gate pending.**

This study covers conversation infrastructure: how chats survive, how runs
coordinate, how memory persists. It deliberately separates these concerns from
downstream content understanding: retrieval strategies, chunking, vector
search, similarity search, and RAG pipelines. Those plug into
`ContextAssembler` and `RelationshipMemoryRepository` as separate subsystems.
See `deliverables/006-durable-conversation-architecture/context-research-prompt.md`
and the three subagent research reports for a dedicated exploration of
context assembly, curation, and narrative-aware compaction approaches.

This study asks one practical question: what should Weaver own if one
friendship must continue across many resumable conversations, crashes, long
context windows, and later interfaces?

The answer is not "copy one agent." Each source solves a different part well.
Weaver needs a small inner loop like Pi, a client protocol shaped more like
Codex, storage lessons from Hermes, and LangGraph only around recoverable run
coordination. Weaver still owns the actual friendship, chat history, memory,
and tool rules.

## Evidence snapshot

Checked on 2026-07-30.

| Source | Snapshot inspected | What the snapshot proves |
| --- | --- | --- |
| Pi | [`bb226f9`](https://github.com/badlogic/pi-mono/tree/bb226f9c1f38d3c029156a690e97bbfc602336b9) | Current source snapshot for the small agent loop, steering and follow-up queues, lifecycle events, JSONL sessions, and compaction records. The older Weaver comparison used `d7b0263`; it remains useful evidence but is not the snapshot used here. |
| Codex | Installed `codex-cli 0.145.0`; source tag [`rust-v0.145.0`](https://github.com/openai/codex/tree/rust-v0.145.0) at commit `25af12f`; current [app-server documentation](https://learn.chatgpt.com/docs/app-server) | The installed release exposes thread, turn, item, resume, steer, interrupt, and streamed lifecycle concepts. Current docs are useful product evidence, but claims tied to source use the installed release tag rather than a moving `main` branch. |
| Hermes | Plan snapshot [`f27d45e`](https://github.com/NousResearch/hermes-agent/tree/f27d45e2880b46a2239b184ecc8ab88ecfd2843d) | Current-for-this-study source snapshot for its conversation loop, SQLite session store, FTS5 search, compression lineage, and memory tools. |
| Installed Hermes | Local checkout `244a6f2ceb7f58c16b3cb2186584c39524e37874` | This checkout is older than the research snapshot. It must not be presented as current Hermes architecture. |
| Hermes moving branch | Public `HEAD` was `206eda50a52dbfe43600392e05114d22de8b3d89` when verified | The branch moved after the supplied `f27d45e` snapshot. This report therefore calls `f27d45e` the Plan 006 research snapshot, not a permanent current commit. |
| LangGraph | Installed `langgraph 1.2.9` and `langgraph-checkpoint 4.1.1`; current [persistence](https://docs.langchain.com/oss/python/langgraph/persistence) and [interrupt](https://docs.langchain.com/oss/python/langgraph/interrupts) docs | Checkpoints, thread-scoped graph state, replay, pending writes, and resumable interrupts are available. `langgraph-checkpoint-sqlite` is not installed. |
| Weaver | Commit `a5f8ce2`; 156 tests pass; lint passes; 64 installed packages are compatible | Weaver already has provider-neutral model records, canonical user/assistant/tool evidence, a typed `ToolRegistry`, effect rules, cancellation, and a readable model/tool loop. It has no durable conversation repository yet. |

Primary source paths used in addition to the published docs:

- Pi:
  [`packages/agent/src/agent-loop.ts`](https://github.com/badlogic/pi-mono/blob/bb226f9c1f38d3c029156a690e97bbfc602336b9/packages/agent/src/agent-loop.ts),
  [`packages/agent/src/agent.ts`](https://github.com/badlogic/pi-mono/blob/bb226f9c1f38d3c029156a690e97bbfc602336b9/packages/agent/src/agent.ts), and
  [`packages/coding-agent/src/core/session-manager.ts`](https://github.com/badlogic/pi-mono/blob/bb226f9c1f38d3c029156a690e97bbfc602336b9/packages/coding-agent/src/core/session-manager.ts).
- Codex:
  [`thread.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/thread.rs),
  [`turn.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/turn.rs),
  [`thread_data.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/thread_data.rs), and
  [`item.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/item.rs).
- Hermes:
  [architecture](https://hermes-agent.nousresearch.com/docs/developer-guide/architecture/),
  [session storage](https://hermes-agent.nousresearch.com/docs/developer-guide/session-storage),
  [memory providers](https://hermes-agent.nousresearch.com/docs/user-guide/features/memory-providers),
  [`conversation_loop.py`](https://github.com/NousResearch/hermes-agent/blob/f27d45e2880b46a2239b184ecc8ab88ecfd2843d/agent/conversation_loop.py),
  [`hermes_state_common.py`](https://github.com/NousResearch/hermes-agent/blob/f27d45e2880b46a2239b184ecc8ab88ecfd2843d/hermes_state_common.py), and
  [`memory_tool.py`](https://github.com/NousResearch/hermes-agent/blob/f27d45e2880b46a2239b184ecc8ab88ecfd2843d/tools/memory_tool.py).

## Tiny model

Think of four different records:

1. A conversation item says what actually happened.
2. A context snapshot says what the model should see next.
3. Relationship memory says what may matter in another conversation.
4. A workflow checkpoint says where one execution attempt paused.

They can point to each other. They are not interchangeable.

Deleting workflow checkpoints must not delete settled chat history. Replacing a
context snapshot must not erase the items it summarized. Forgetting a memory
must not secretly rewrite the source conversation.

## What each source is really good at

### Pi

Pi's core loop is the smallest useful execution reference. `runLoop()` has an
inner model/tool/steering loop and an outer follow-up loop. `Agent` owns two
separate queues, exposes cancellation, and awaits lifecycle subscribers before
declaring a run settled.

The coding-agent layer then shows the cost of letting one session object grow
too far. Its `AgentSession` coordinates persistence, retry, compaction,
extensions, model state, and UI concerns. Its `SessionManager` is inspectable
and append-oriented, but JSONL trees are a weak canonical store for Weaver's
cross-conversation relationship and memory rules.

### Codex

Codex app-server has the clearest public client vocabulary:

- a thread is a conversation;
- a turn is one user request and the work it starts;
- items are the user, assistant, command, file, and tool records inside a turn;
- `thread/resume` continues stored history;
- `turn/steer` targets a specific active turn;
- `turn/interrupt` requests cancellation;
- item and turn start/completed notifications let a client render progress.

Codex is evidence for protocol shape, not a complete Weaver domain model.
Weaver needs one relationship above conversations, a separate run attempt
below turns, relationship memory with provenance, and durable reconnect events.

### Hermes

Hermes proves that a local agent can keep full message history in SQLite with
WAL, schema versions, FTS5, source tags, and parent session lineage. Its current
docs and `f27d45e` source also separate session storage from file-backed memory
and optional memory providers.

Some choices do not fit Weaver:

- Hermes stores raw `reasoning`, `reasoning_content`, and provider reasoning
  records in the message table. Weaver's contract says raw reasoning stays
  ephemeral.
- Built-in memory uses bounded files and substring-based replace/remove
  actions. Weaver needs attributed, source-linked, superseding records.
- Compression can split sessions into parent/child lineage. Weaver wants one
  conversation identity whose exact ledger survives context replacement.

### LangGraph

LangGraph checkpoints graph state by `thread_id`, supports pending writes,
state history, replay, and `interrupt()` plus `Command(resume=...)`.

The replay rule is the dangerous part. Replaying from a checkpoint re-executes
later nodes, including model calls and API requests. Resuming an interrupted
node starts that node again from the beginning. LangGraph's own docs therefore
tell developers to make side effects idempotent or place them after the
interrupt in another node.

That is good workflow machinery. It is not a safe default for canonical chat
history. Weaver must settle items in its own database and treat graph
checkpoints as replaceable execution state.

## Decision map by concern

| Concern | Pi | Codex | Hermes | LangGraph | Weaver direction |
| --- | --- | --- | --- | --- | --- |
| Thread identity | One stateful agent/session | Thread contains turns and can resume or fork | Session rows with lineage and platform keys | `thread_id` scopes checkpoints | `Relationship` contains many `Conversation` records. LangGraph `thread_id` maps to one `Run`, not the conversation. |
| Turn execution | Small explicit model/tool loop | Turn is one request plus streamed work | One very large turn function handles model, tools, retries, compression, and hooks | Graph nodes and checkpoints coordinate execution | Keep Weaver's readable inner loop. Add an outer run coordinator later. |
| Steering | Separate steering and follow-up queues | `turn/steer` has an active turn precondition | Platform queues exist, but the core contract is less crisp | Interrupts pause for structured input, not casual mid-turn steering | Durable FIFO follow-up plus explicit steering delivered at a safe boundary. Preserve every message. |
| Persistence | Final messages can be appended to a JSONL tree | Stored rollout history can be resumed and read as turns/items | SQLite, WAL, FTS5, migrations, exact message and tool fields | Checkpoints and pending writes store graph progress | SQLite is canonical for settled Weaver records. A second database stores replaceable graph checkpoints. |
| Compaction | Summary entries point to kept history | Context compaction and persisted items are separate concepts | Compression mutates active context and can split session lineage | State can be replaced or replayed from checkpoints | Exact items stay. `ContextSnapshot` is a versioned projection with source item IDs. |
| Memory | No lifelong relationship model in the small core | Product memory is separate from thread protocol | Built-in file memory plus optional provider sync and extraction | Checkpointer is short-term thread state; a store can span threads | Typed relationship memory with attribution, provenance, supersession, forget, and visible notices. |
| Events | Awaited lifecycle events | Thread, turn, item, and delta notifications | UI and gateway callbacks wrap the agent | Several framework stream modes | Weaver-owned sequenced `RunEvent` records and transport-neutral client events. |
| Failure recovery | Aborts and retries are mostly live-process concerns | Interrupted and failed turn statuses are visible | Session writes and compression locks preserve substantial state | Resume and replay can re-run nodes | Never silently replay model or effectful tool work. Show recovery choices. Retry creates a new run. |
| Coupling | Core types come from Pi packages; coding session grows broad | Protocol is Codex-specific | Large central agent and Hermes-specific storage/memory shapes | Runnable, state, reducer, config, and checkpoint semantics spread easily | Frameworks stay behind Weaver interfaces. Domain records never import framework types. |

## Adopt

| Concern | Pattern to adopt | Source | Weaver use |
| --- | --- | --- | --- |
| Turn execution | A direct model/tool loop with injected model and tool seams | Pi | Keep the existing `run_turn()` structure readable and provider-neutral. |
| Steering | Distinct steering and follow-up concepts | Pi and Codex | Steering targets the active turn. Normal input while busy becomes FIFO follow-up. |
| Events | Start, progress, completed, interrupted, and failed lifecycle records | Codex | Give clients stable Weaver commands and events with IDs and ordering. |
| Persistence | SQLite migrations, foreign keys, WAL, and FTS5 transcript search | Hermes | Use these storage properties in Weaver's private canonical state database. |
| Failure recovery | Explicit interrupted and failed states | Codex and Weaver | A crash leaves visible evidence rather than pretending the turn completed. |
| Coupling | Keep model and tool types owned by the agent | Pi pattern and existing Weaver code | Preserve `ModelLayer`, `ConversationMessage`, `ToolRegistry`, effect rules, and cancellation. |

## Adapt

| Concern | Pattern to adapt | What changes for Weaver |
| --- | --- | --- |
| Thread identity | Codex thread, turn, and item hierarchy | Add `Relationship` above `Conversation`, and add `Run` below `Turn` so retries do not erase failed attempts. |
| Turn execution | LangGraph checkpointed execution | Use it only for the outer run phases. The existing inner loop remains one Weaver node. |
| Steering | Pi's in-memory queues and Codex's active-turn precondition | Persist every follow-up and steering message. Delivery waits for a safe model/tool boundary. |
| Persistence | Hermes' one SQLite state store | Split canonical Weaver state from replaceable LangGraph checkpoints. |
| Compaction | Pi and Codex summary/context replacement | Store inspectable `ContextSnapshot` records with source item IDs and versions. Never replace settled items. |
| Memory | Hermes' deliberate memory tool plus provider-side post-turn extraction | Use one typed remember tool and one non-blocking curator, both behind the same validator, provenance, and idempotency rules. |
| Events | Codex lifecycle notifications | Add a durable sequence number and reconnect cursor. Do not expose LangGraph stream modes. |
| Failure recovery | LangGraph resume and replay | Startup routes unfinished work to a recovery choice. Retry gets a new `run_id`; continue uses only confirmed partial evidence. |
| Coupling | LangGraph checkpointer adapter | Map LangGraph `thread_id` to Weaver `run_id` and keep graph state limited to IDs, phase, and pending recovery or approval IDs. |

## Reject

| Concern | Rejected design | Why |
| --- | --- | --- |
| Thread identity | Use `conversation_id` as LangGraph `thread_id` | Replay and checkpoint history from separate turn attempts would become mixed under one execution identity. |
| Turn execution | Rewrite the current model/tool loop as many graph nodes | It spreads framework replay rules through code that is already small, tested, and readable. |
| Steering | Collapse or replace queued messages | Every owner message is evidence. Delivery time may move; content may not disappear. |
| Persistence | Make JSONL, framework state, or checkpoint blobs canonical | Weaver needs relational invariants, search, migrations, source links, and recovery independent of a framework. |
| Compaction | Replace or delete old conversation items after summary | A bad summary must be inspectable and replaceable without destroying history. |
| Memory | Treat user theories, Weaver opinions, or summaries as settled canon | The source and author matter. Opinions stay separate and revisable. |
| Events | Send raw LangGraph events directly to CLI, TUI, or web clients | It makes clients depend on one coordinator and leaks replay internals into the product contract. |
| Failure recovery | Automatically replay an unfinished model/tool node after restart | It can duplicate model calls or effectful tools. Recovery needs an explicit choice and idempotency proof. |
| Coupling | Copy Pi `AgentSession`, Hermes `AIAgent`, or LangGraph state into Weaver's domain | Each carries product-specific responsibilities Weaver does not want. |
| Privacy | Persist raw reasoning because another agent does | Weaver's contract requires raw reasoning to remain ephemeral. |

## Defer

| Concern | Deferred choice | Why it can wait |
| --- | --- | --- |
| Thread identity | Conversation branching | Restart and exact resume come first. Branching adds lineage and UI choices that Plan 007 does not need. |
| Persistence | At-rest encryption | Owner-only filesystem permissions are the initial boundary. Encryption needs its own key and recovery decision. |
| Memory | Exact ranking and decay formula | The architecture only needs attributed, source-linked records and visible controls now. Retrieval quality needs later experiments. |
| Events | Public web transport | Define Weaver event records first. HTTP, WebSocket, or another transport can adapt them later. |
| Failure recovery | Cross-device run claiming | Weaver is single-owner and local-first for the first proof. |
| Coupling | Multi-user authentication and tenancy | `relationship_id` avoids a schema dead end without making Plan 007 solve accounts. |

## Observation: Weaver's current runtime

Weaver already owns the hard inner boundaries:

- `src/weaver/agent/messages.py` defines canonical user, assistant, tool-call,
  and tool-result records.
- `src/weaver/agent/turn.py` validates provider identity, stop reasons,
  tool-call IDs, exact JSON arguments, cancellation, and persistence callbacks.
- `src/weaver/agent/tools.py` owns registration, effect rules, dispatch,
  cooperative cancellation, and result validation.
- `src/weaver/model_layer/types.py` keeps provider-neutral request, response,
  message, usage, and tool-call records.

The current `AgentSession` is intentionally temporary. Its history is in
memory, only one pending message is kept, and a busy send can return the result
of the queued message rather than the active one. That is enough for the old
small chat draft, but it is the wrong base for durable identity, exact retry
evidence, reconnect events, and one-friend/many-conversations continuity.

## Architecture hypothesis for the owner gate

This is a **hypothesis**, not an accepted Plan 006 decision.

### Domain records

- `Relationship`: the continuing Weaver and owner friendship.
- `Conversation`: one resumable chat inside the relationship.
- `Turn`: one owner input and the work it initiates.
- `Run`: one execution attempt for a turn. A retry appends another run.
- `ConversationItem`: ordered user, assistant, tool-call, tool-result,
  interruption, and context-marker evidence.
- `RunEvent`: ordered lifecycle evidence for clients and reconnects.
- `ContextSnapshot`: a replaceable model-context projection derived from exact
  conversation items.
- `RelationshipMemory`: attributed preferences, theories, disagreements,
  running jokes, Weaver opinions, and unresolved discussions.
- `MemoryChange`: a validated save, correction, pin, supersession, or forget
  operation.

One conversation has at most one active turn. Separate conversations may run
independently in a later plan.

Proposed run states:

```text
queued
  -> running
  -> waiting_for_user
  -> running
  -> completed

running -> interrupted
running -> failed
```

Settled conversation items are immutable. Corrections, retries, compaction
markers, and recovery choices append new evidence.

### Storage ownership

```text
.weaver/
  state/
    weaver.sqlite3       canonical conversations, runs, events, context, memory
    workflows.sqlite3    replaceable LangGraph checkpoints
  runs/                  private experiment receipts
  corpus/                existing private library state
```

`weaver.sqlite3` is the source of truth. It uses migrations, foreign keys, WAL,
and FTS5 transcript search. `workflows.sqlite3` belongs to the LangGraph
adapter. Deleting it may lose resumable workflow position, but it must not
erase settled conversations or relationship memory.

LangGraph `thread_id` equals Weaver `run_id`. Graph state contains identifiers,
the workflow phase, and pending recovery or approval IDs. It does not contain
the canonical transcript, private library data, or relationship memory.

### Outer run

```text
load conversation
  -> claim run
  -> assemble context
  -> execute existing Weaver model/tool loop
  -> settle durable items
  -> queue memory review
```

Startup does not automatically replay unfinished model or tool work. It records
the interruption and offers retry or continue. Retry creates a new run.
Continue incorporates only confirmed partial evidence.

### Memory

The relationship can continue across new conversations without stuffing old
transcripts into every prompt:

1. A typed remember tool handles deliberate saves during a turn.
2. A non-blocking post-turn curator catches useful items the live model missed.
3. Both use the same validator, provenance rules, idempotency keys, and visible
   save/update notices.
4. Every memory points to source conversation item IDs.
5. User theories stay attributed to the user.
6. Weaver opinions stay separate, revisable records.
7. Correction appends a superseding record.
8. Forget removes a memory from future context. Source-chat deletion is a
   separate explicit action.

## Owner choices carried into this gate

The supplied planning discussion records these choices. They still need an
explicit Plan 006 learning confirmation before they become the repository's
accepted architecture:

1. One continuing friendship spans many resumable conversations.
2. Exact history, model context, relationship memory, and workflow checkpoints
   stay separate.
3. Weaver owns canonical state.
4. LangGraph coordinates the outer durable run in a separate checkpoint
   database.
5. The existing Python model/tool loop stays unchanged.
6. A normal message while busy becomes FIFO follow-up.
7. Explicit steering targets the active turn and waits for a safe boundary.
8. A crash never silently replays model or effectful tool work.
9. Plan 007's first proof becomes restart and resume, not temporary in-memory
   chat.
10. Raw reasoning remains ephemeral.

## What confirmation admits

Confirming this learning gate admits the documentation and diagram work only:

- record the final architecture decision;
- reconcile Plan 002, the older Pi/LangGraph comparison, Plan 007, `README.md`,
  and `weaver.md`;
- rename Plan 006 and its deliverable folder around durable conversation
  architecture;
- mark the current Plan 007 draft superseded and set its next proof;
- draw and inspect the architecture;
- run two independent reviews and one repair pass.

It does not admit runtime code, dependencies, live model calls, or private
library access. The final Plan 006 acceptance remains a second owner decision.
