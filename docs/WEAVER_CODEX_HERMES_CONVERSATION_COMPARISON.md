# Weaver durable conversation comparison

**Plan 006 source study, corrected after the 2026-07-30 learning gate.**

This comparison asks one question: which ideas help one Weaver relationship
survive across resumable conversations, retries, crashes, context replacement,
and later interfaces?

The accepted answer is a Weaver-owned direct coordinator with canonical
SQLite. LangGraph is optional, not the default conversation runtime.

## Evidence snapshot

| Source | Evidence | Supported use |
| --- | --- | --- |
| Pi | [`bb226f9c`](https://github.com/badlogic/pi-mono/tree/bb226f9c1f38d3c029156a690e97bbfc602336b9) | direct loop, distinct steering/follow-up, cancellation, lifecycle events, resumable sessions |
| Codex | [`rust-v0.145.0`](https://github.com/openai/codex/tree/rust-v0.145.0) and moving [app-server docs](https://learn.chatgpt.com/docs/app-server) | thread, turn, item, resume, steer, interrupt, client notifications |
| Claude Code | moving [sessions docs](https://code.claude.com/docs/en/sessions), checked 2026-07-30 | saved conversations and resume; separate file-backed context and memory |
| Hermes | Plan snapshot [`f27d45e`](https://github.com/NousResearch/hermes-agent/tree/f27d45e2880b46a2239b184ecc8ab88ecfd2843d) | SQLite, migrations, WAL, exact tool fields, search patterns |
| Honcho | moving [reasoning docs](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning), checked 2026-07-30 | distinct reasoning levels and contradiction-aware consolidation |
| LangGraph | moving [persistence](https://docs.langchain.com/oss/python/langgraph/persistence) and [interrupt](https://docs.langchain.com/oss/python/langgraph/interrupts) docs | optional checkpointed workflow stages and durable human pauses |
| Weaver | repository state before Plan 006 implementation | provider-neutral messages, `ToolRegistry`, effect policy, cancellation, inner model/tool loop |

Codex source claims in this report use only the pinned tag:

- [`thread.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/thread.rs)
- [`turn.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/turn.rs)
- [`thread_data.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/thread_data.rs)
- [`item.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/item.rs)

Claims from unrelated Codex `main` revisions were removed.

## Tiny model

Four records answer four different questions:

1. `ConversationItem`: what happened?
2. `RunEvent`: what lifecycle change should a reconnecting client see?
3. `ContextSnapshot`: what should the next model call see?
4. Relationship memory or Weaver opinion: what should carry into another
   conversation?

A workflow checkpoint answers a fifth question: where did an optional
coordinator adapter pause? It is never the answer to the first four.

## Corrected source observations

### Pi

Pi has a small direct model/tool loop and distinct steering and follow-up
queues. Sessions can be resumed. Pi does not provide cross-session semantic
memory, which is the actual gap Weaver must fill.

Adopt the readable control flow. Do not copy the broad coding-agent session
service or use JSONL as Weaver's relationship store.

### Codex

Codex gives the clearest client vocabulary:

- thread means conversation;
- turn means one user request and its work;
- item means one typed input or output;
- resume continues a stored thread;
- steer targets an active turn;
- interrupt requests cancellation;
- turn and item notifications expose progress.

Weaver adds `Relationship` above `Conversation` and `Run` below `Turn`.

### Claude Code

Claude Code saves and resumes conversations. The earlier claim that it had no
cross-session chat continuity was wrong.

Its instruction files, auto memory, and compaction are useful context patterns,
but they do not replace typed, source-linked Weaver records.

### Hermes

Hermes shows that a local agent can use SQLite migrations, WAL, full message
rows, exact tool fields, and search. Weaver adopts those storage patterns but
does not persist raw reasoning or copy Hermes memory policy.

FTS5 waits until transcript search is implemented. When added, it indexes user
and assistant text, not tool arguments or results.

### Honcho

Honcho's reasoning levels and contradiction records are distinct. Both are
useful ideas, but Weaver must validate any derived record under its own
attribution, source, confidence, scope, and revision rules.

### LangGraph

LangGraph can persist graph state and resume an interrupt. Its documentation
states that a resumed node starts from the beginning, so earlier code in that
node runs again.

That is useful for some workflows and dangerous as an unstated default for
model calls or effectful tools. A checkpoint does not settle a Weaver item.

## Concern map

| Concern | Useful source idea | Accepted Weaver direction |
| --- | --- | --- |
| Identity | Codex thread, turn, item | `Relationship -> Conversation -> Turn -> Run`, with immutable items |
| Live control | Pi direct loop | direct `ConversationRunner` and direct `RunCoordinator` |
| Steering | Pi and Codex | store steering inside the active turn and deliver at a safe boundary |
| Busy input | Pi follow-up | create durable FIFO turns; never collapse messages |
| Persistence | Hermes SQLite | `.weaver/state/weaver.sqlite3` is canonical |
| Context | Pi/Codex non-destructive replacement | versioned `ContextSnapshot` with source record IDs |
| Relationship memory | Honcho/Claude continuity ideas | owner-attributed records with risk-based save controls |
| Opinions | domain requirement | separate `WeaverOpinion`, source-linked and revisable |
| Events | Codex lifecycle notifications | durable sequenced `RunEvent` plus transport-only token deltas |
| Recovery | explicit interruption patterns | new run for retry and continue; no silent replay |
| Optional workflows | LangGraph checkpoints/interrupts | later adapter only after a graph-shaped need is proven |
| Generated knowledge | LLM Wiki pattern | private rebuildable Markdown projection, never canonical |

## Adopt

- Pi's readable direct inner loop.
- Pi/Codex distinction between steering and a later turn.
- Codex's thread, turn, item, resume, steer, and interrupt protocol shape.
- Hermes-style SQLite migrations, foreign keys, WAL, and typed rows.
- Immutable exact tool-call IDs, names, argument JSON, results, interruptions,
  and delivery mode.
- Durable lifecycle events with reconnect cursors.
- Non-destructive context replacement.

## Adapt

- Add one `Relationship` above conversations.
- Add one `Run` per execution attempt below a turn.
- Persist every normal busy input as its own FIFO turn.
- Persist steering inside the active turn and deliver it only at safe model or
  tool boundaries.
- Keep owner relationship memory separate from Weaver opinions.
- Apply risk-based memory saves: notice plus undo for low-risk records,
  confirmation for sensitive or disputed records.
- Generate private Markdown from canonical records when Plan 009 admits it.

## Reject

- LangGraph as the first conversation coordinator.
- Conversation history, relationship cards, literary claims, or narrative
  threads in graph state.
- One record or one `provenance` field for author, claim type, source type,
  confidence, scope, and revision status.
- Prompt labels as enforcement of canon/opinion separation.
- Automatic replay of an unfinished model call or tool.
- Replacing exact history with a context summary.
- Persisting raw reasoning.
- Credentials in model-visible tool schemas.
- Generated Markdown or Git as canonical private memory.

## Defer

- FTS5 transcript search.
- Conversation branching.
- Cross-device run claiming.
- At-rest encryption and key recovery.
- Relationship-memory curation implementation.
- Literary claims and compiled knowledge.
- LangGraph and its checkpoint database.

## Accepted architecture

The future contracts are:

- `ConversationRepository`
- `RunRepository`
- `RelationshipMemoryRepository`
- `OpinionRepository`
- `ContextAssembler`
- `ConversationRunner`
- `RunCoordinator`
- `RunEventLog`
- `CompiledKnowledgeProjector`

Plan 006 adds no Python interfaces.

The direct coordinator owns the first durable run:

```text
claim queued run
  -> assemble exact context projection
  -> cross a model or tool boundary
  -> settle immutable items and durable events
  -> update canonical phase
  -> queue memory review
```

Both retry and continue create a new `Run` linked to the interrupted run.
Retry assembles from before the failed attempt. Continue additionally includes
settled partial items. Neither silently replays work.

## Optional LangGraph adapter

LangGraph may later implement `RunCoordinator` when a workflow has:

- independently retryable durable stages;
- fan-out and deterministic join;
- a durable human pause;
- idempotent side effects;
- tested replay and cancellation rules.

Its checkpoint state may contain canonical IDs and phase versions only.
`.weaver/state/workflows.sqlite3` stays optional.

SQLite WAL cannot make two database files one crash-atomic transaction.
[SQLite's WAL documentation](https://www.sqlite.org/wal.html) states that
multi-database transactions are atomic per database, not across the set. The
adapter must reconcile from canonical Weaver state after any crash.

## Bottom line

Pi remains the better shape for Weaver's interactive core. Codex provides the
cleanest client vocabulary. Hermes provides useful local storage patterns.
Honcho and Claude Code provide memory and context ideas. LangGraph remains
conditional execution machinery.

Weaver owns the conversation, recovery choices, context sources, relationship
memory, opinions, and later literary understanding.
