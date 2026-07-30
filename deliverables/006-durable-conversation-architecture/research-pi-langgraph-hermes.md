# Research: Pi, LangGraph, and Hermes

## Source basis

- Pi is pinned to
  [`bb226f9c1f38d3c029156a690e97bbfc602336b9`](https://github.com/badlogic/pi-mono/tree/bb226f9c1f38d3c029156a690e97bbfc602336b9).
- Hermes is the Plan 006 snapshot
  [`f27d45e2880b46a2239b184ecc8ab88ecfd2843d`](https://github.com/NousResearch/hermes-agent/tree/f27d45e2880b46a2239b184ecc8ab88ecfd2843d).
- LangGraph uses moving
  [persistence](https://docs.langchain.com/oss/python/langgraph/persistence)
  and
  [interrupt](https://docs.langchain.com/oss/python/langgraph/interrupts)
  documentation checked on 2026-07-30.

## Pi

### Observation

Pi's small loop separates steering from follow-up. Steering can affect the
active work, while normal follow-up waits for the next turn. Cancellation and
lifecycle events stay in direct control flow.

Pi sessions are resumable. The accurate limitation is narrower:

> Pi supports resumable sessions without cross-session semantic memory.

Its append-oriented session history and non-destructive compaction are useful
references. They are not a strong canonical query model for one relationship
across many conversations.

### Weaver use

Keep the readable direct-loop shape, distinct steering/follow-up handling,
cancellation, and awaited settlement. Store both steering and follow-up
durably rather than only in live queues.

## LangGraph

### Observation

LangGraph checkpointers persist graph state by `thread_id`. Interrupts can
pause for external input and resume later. The interrupt documentation also
states that a resumed node starts again from the beginning, so code before the
interrupt runs again.

This makes idempotency and side-effect placement part of the design. A
checkpoint does not prove that a Weaver conversation item, model call, or tool
result settled exactly once.

### Weaver use

Do not place conversation history, relationship cards, literary claims, or
narrative threads in LangGraph state. The first durable conversation uses a
Weaver-owned direct coordinator.

LangGraph remains a later `RunCoordinator` adapter only when a workflow has
independently retryable stages, fan-out/join, or a durable human pause that is
clearer as a graph.

## Hermes

### Observation

The pinned Hermes snapshot shows useful local storage patterns: SQLite schema
versions, WAL, full message records, tool fields, search, and session lineage.
It also shows why Weaver needs its own boundary. Hermes can persist raw
reasoning fields and uses memory shapes that do not meet Weaver's attribution
and revision rules.

### Weaver use

Adopt migrations, foreign keys, WAL, typed rows, and exact tool evidence.
Do not persist raw reasoning. Add FTS5 only with a real transcript-search
feature, and index user/assistant text rather than tool arguments or results.

## Cross-database correction

`.weaver/state/weaver.sqlite3` is canonical. A future
`.weaver/state/workflows.sqlite3` is optional and replaceable.

SQLite documents that transactions involving multiple attached databases are
atomic for each database but
[not atomic across all databases as a set](https://www.sqlite.org/wal.html).
WAL does not turn two database files into one crash-atomic commit.

So a future adapter must tolerate a missing, stale, or ahead checkpoint. It
must reconcile from canonical Weaver IDs and phase versions. Deleting the
checkpoint database may lose only adapter position, never chats, events,
recovery choices, approvals, queued work, memories, or opinions.

## Accepted Plan 006 use

- Direct coordination for the first durable conversation.
- Canonical SQLite owned by Weaver.
- Optional LangGraph later, behind `RunCoordinator`.
- No framework state as conversation or memory authority.
- No automatic replay of unfinished model or tool work.
