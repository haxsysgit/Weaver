# Learning Note: Durable conversation architecture

## Gate status

**Confirmed by the owner on 2026-07-30, with corrections.**

This confirmation admits Plan 006 documentation, diagram, and review work. It
does not admit runtime code, packages, live model calls, private library reads,
or Plan 007 implementation. Final Plan 006 acceptance remains an owner gate.

## Tiny model

1. Exact conversation items record what happened.
2. Run events record durable lifecycle changes for clients.
3. A context snapshot records what the next model call should see.
4. Relationship memory carries owner-attributed continuity.
5. Weaver opinions remain separate and revisable.
6. A workflow checkpoint records only optional adapter position.

None replaces another.

## Source-backed observations

### Direct control already fits

Weaver owns provider-neutral model types, `ToolRegistry`, effect policy,
cancellation, and a readable model/tool loop. There is no proven graph-shaped
need in the first durable conversation.

### The current session is temporary

The in-memory session cannot survive restart or distinguish a turn from one
execution attempt. Plan 007 must prove durable identity and recovery before a
live conversation surface.

### Source systems solve different pieces

- Pi provides the clearest direct loop, steering, FIFO follow-up, and
  resumable-session reference. It lacks cross-session semantic memory.
- Codex provides thread, turn, item, resume, steer, interrupt, and client
  lifecycle vocabulary.
- Claude Code saves and resumes conversations. The earlier opposite claim was
  wrong.
- Hermes provides useful SQLite, WAL, migration, exact-message, and search
  patterns.
- Honcho keeps reasoning level separate from contradiction/consolidation
  status.
- LangGraph provides checkpointed workflows and durable interrupts, but resume
  can rerun earlier node code.
- Karpathy's LLM Wiki provides useful private inspection patterns, not a
  canonical store for Weaver.

### Prompts do not enforce evidence boundaries

Canon, opinion, source, author, scope, and revision status cannot be made safe
by prompt labels alone. Future records keep attribution, claim type, source
type, confidence, scope, and revision status separate.

### Two databases are not one transaction

SQLite WAL does not make a canonical database and an optional checkpoint
database crash-atomic together. A future adapter must reconcile from canonical
IDs and phase versions.

## Owner confirmation

The owner accepted:

- `Relationship -> Conversation -> Turn -> Run`;
- immutable ordered items and durable reconnect events;
- separate context snapshots, relationship memory, and Weaver opinions;
- canonical SQLite owned by Weaver;
- explicit retry/continue recovery with a new run;
- durable FIFO follow-up and safe-boundary steering;
- Plan 007 redirected to restart safety.

The owner corrected three points:

1. **Coordinator:** use a Weaver-owned direct coordinator first. LangGraph is a
   later optional adapter.
2. **Memory:** low-risk items may save with notice and undo. Sensitive or
   disputed items require confirmation.
3. **Wiki:** generated Markdown is a private rebuildable projection, never the
   canonical store.

## Accepted decisions

- Every normal input creates its own turn.
- Every retry or continuation creates a new linked run.
- Exact tool IDs, names, argument JSON, results, interruption, and delivery
  mode remain immutable evidence.
- Token deltas are transport-only.
- Canonical phase, approvals, recovery requests, queued work, events, and
  memory-review jobs live in `.weaver/state/weaver.sqlite3`.
- FTS5 waits until transcript search exists.
- Credentials are forbidden from model-visible tool schemas.
- `.weaver/state/workflows.sqlite3` stays optional and absent from Plan 007.
- `.weaver/projections/wiki/` is private, generated, and rebuildable.

## Rejected designs

- LangGraph as the default conversation coordinator.
- graph state as chat, relationship memory, literary claims, or narrative
  threads;
- silent replay of a model call or tool;
- one flat `provenance` field;
- prompt labels as storage enforcement;
- generated Markdown or Git as canonical private state;
- auto-saving sensitive or disputed relationship details;
- Plan 007's old temporary live metadata-chat proof.

## Later hypotheses

Plan 009 may test narrative threads, contradiction-aware versions, linting,
index/log navigation, Obsidian views, and bounded compiled Markdown against
direct rereading.

## Confirmation record

- Owner choice: confirmed with corrections
- Date: 2026-07-30
- Admitted next work: documentation, diagram, reviews, verification
- Final Plan 006 decision: still pending owner review
