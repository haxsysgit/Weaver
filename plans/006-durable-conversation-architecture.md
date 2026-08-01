# Plan 006: Correct and record Weaver's durable conversation architecture

> **Executor instructions:** This is a documentation and architecture slice.
> Do not add runtime code, packages, live model calls, or private library
> access. Never pass the final owner gate automatically.

## Status

- **State:** Accepted (2026-07-30)
- **Priority:** P1
- **Depends on:** Plan 005 accepted
- **Category:** Research, architecture, and docs
- **Admitted source:** Owner-supplied Plan 006 implementation request,
  2026-07-30
- **Learning gate:** Confirmed with corrections on 2026-07-30
- **Final gate:** Closed (2026-07-30)

## Goal

Record how one Weaver relationship survives resumable conversations, process
restarts, retries, steering, long contexts, and later interfaces without
letting a coordinator framework own canonical evidence.

## Confirmed corrections

1. Use a Weaver-owned direct coordinator first. LangGraph stays optional until
   a graph-shaped workflow proves its value.
2. Save low-risk relationship memory with notice and undo. Require
   confirmation for sensitive or disputed memory.
3. Treat private wiki Markdown as a rebuildable projection, never canonical
   state.

## Accepted architecture

- `Relationship -> Conversation -> Turn -> Run`
- normal owner input always creates its own turn;
- busy normal input becomes a durable FIFO turn;
- explicit steering stays inside the active turn and waits for a safe boundary;
- retry and continue both create linked runs under the same turn;
- exact `ConversationItem` records are immutable and transactionally ordered;
- `RunEvent` records lifecycle and settled-item notices for reconnect;
- token deltas remain transport-only;
- `ContextSnapshot` is a replaceable versioned projection;
- relationship memory and Weaver opinions are separate, attributed records;
- canonical state lives in `.weaver/state/weaver.sqlite3`;
- `.weaver/state/workflows.sqlite3` is optional and absent from Plan 007;
- FTS5 waits for transcript search;
- generated wiki pages live privately under `.weaver/projections/wiki/`;
- model-visible tool schemas may not accept credentials.

The canonical detail is
[`docs/decisions/006-conversation-architecture.md`](../docs/decisions/006-conversation-architecture.md).

## Future contracts

Plan 006 records names only:

- `ConversationRepository`
- `RunRepository`
- `RelationshipMemoryRepository`
- `OpinionRepository`
- `ContextAssembler`
- `ConversationRunner`
- `RunCoordinator`
- `RunEventLog`
- `CompiledKnowledgeProjector`

No Python interfaces are added here.

## Scope

### In scope

- corrected source research and comparison documents;
- the confirmed learning record;
- the canonical architecture decision;
- Plan 002 wording and repository roadmap reconciliation;
- Plan 007 replacement proof and unadmitted learning gate;
- editable Draw.io source plus matching preview;
- two independent reviews, one repair pass, and both rechecks;
- public, privacy-safe results.

### Out of scope

- Python source, tests, dependencies, or lockfiles;
- novel files or private state;
- live model calls;
- runtime migrations or repository interfaces;
- relationship-memory curation;
- context compaction or FTS5;
- a generated wiki;
- LangGraph installation or use;
- Plan 007 implementation.

## Work

### 1. Clean research evidence

- remove tracked `.pi-subagents/` residue after a privacy scan;
- ignore future `.pi-subagents/` output;
- correct Claude Code, Codex, Pi, Honcho, LangGraph, SQLite, and wiki claims;
- remove machine acceptance blobs, obsolete paths, and supervisor notes.

### 2. Record the decision

- update the learning record with the owner's confirmation;
- create the canonical decision with ownership, transitions, transactions,
  recovery, context, memory, replay, privacy, and adapter rules;
- include traces for restart, crash boundaries, retry, continue, steering,
  FIFO follow-up, new-conversation continuity, correction, and replacement;
- reconcile both architecture comparisons and Plan 002 wording.

### 3. Redirect Plan 007

Replace the temporary live metadata-chat draft with a restart-safe fake proof.
Leave Plan 007 unadmitted until its own learning cycle.

### 4. Draw and inspect

Create `architecture.drawio` plus a matching SVG preview. Validate the source,
run a real exporter when available, cap a PNG for visual inspection, and record
the evidence.

### 5. Review and stop at the final gate

Two independent reviewers inspect architecture/source accuracy and
conversation/privacy behavior. Apply one repair pass, obtain both rechecks, and
leave final acceptance to the owner.

## Verification floor

```bash
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
git diff --check
xmllint --noout deliverables/006-durable-conversation-architecture/architecture.drawio
```

Also verify local Markdown links, scope, privacy, `.pi-subagents/` ignore
behavior, source identifiers, owner-message preservation, optional-checkpoint
deletion safety, and diagram/preview agreement.

## Done criteria

- [x] Plan 005 accepted.
- [x] Plan 006 learning confirmed with three corrections.
- [x] Research evidence corrected and private residue removed.
- [x] Canonical architecture decision written.
- [x] Plan 007 replacement proof recorded.
- [ ] Diagram source and preview inspected.
- [x] Two reviews and rechecks have no blocker.
- [x] Full verification floor passes.
- [x] Owner records the final Plan 006 decision.

## Checkpoint audit corrections (2026-08-01)

Spec-vs-code audit results. 26/26 claims verified, 17 aligned, 6
partial, 3 missing (all future contracts). One significant real gap.
Doc fixes:

1. DEFERRED (significant) — startup recovery is not implemented: no
   startup scan reads unfinished phases, no `recovery_request` table
   exists, and `find_interrupted_run` matches only
   `phase='interrupted'`. A hard kill mid-turn leaves
   `queued`/`model_call_pending`/`settling`; the next `send()` starts a
   fresh turn and re-invokes the model — "No startup path silently
   repeats a model call or tool" is unenforced on real crashes. The
   Plan 007 proof simulates crashes via explicit `mark_interrupted`,
   which is not equivalent. Recovery wiring is a future plan.
2. DOC — the intermediate phases (`model_call_pending`, `settling`) are
   written only by coordinator helpers used in the proof path; the
   wired runner goes `queued` -> terminal. Plan 008's terminal-only
   mapping is consistent with the runner.
3. DOC — item-settled events: only `run_queued`/`run_completed` exist;
   "a committed item and its item-settled event cannot disagree" is
   vacuous until settled-item notices are implemented (future).
4. DOC — `continue_interrupted`/`retry_interrupted` are repository-level
   seams; nothing (TUI, CLI) invokes them, and `run_turn_in_run` loads
   the full history, so retry does not actually omit the failed run's
   items today. Reworded to repository-level only.
5. DOC — one-result-per-call is app-enforced (settle_tool pre-check +
   ValueError), not a DB constraint. Reworded.
6. DOC — FIFO busy turns, steering, interruption/context item kinds,
   snapshot persistence, approvals/memories/opinions tables: all future
   contracts, none implemented. Annotated as such.
