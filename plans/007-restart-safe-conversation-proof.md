# Plan 007: Prove a restart-safe Weaver conversation

> **Executor instructions:** Plan 007 is admitted and implemented.
> See `deliverables/007-restart-safe-conversation-proof/` for full evidence.
> Plan 007.5 (`plans/007.5-audit-repair.md`) applies post-audit corrections.

## Status

- **State:** Implemented (commit `96e4faf`), repair pass applied (`54091b9`),
  audit repair in progress (`007.5`)
- **Depends on:** Plan 006 accepted
- **Category:** Deterministic storage and recovery proof
- **Learning gate:** `deliverables/007-restart-safe-conversation-proof/learning.md`
  (all 10 questions answered, reconciled with implementation)

## Implementation

`src/weaver/conversation/` — 6 files: `schema.py`, `repository.py`,
`coordinator.py`, `session.py`, `_runner.py`, `__init__.py` (plus `common.py`
in 007.5).  `tests/test_conversation.py` — 4 tests (growing to 10 in 007.5).

## First proof

> A fake conversation persists exact ordered items, restarts in a new process,
> exposes interrupted work, continues without replaying a settled tool result,
> and never duplicates a turn, call ID, result, or event.

## Why this comes first

A short live chat can look correct while losing history or repeating work after
a crash. Plan 007 must prove the notebook before it opens a real conversation.

The smallest useful example is:

1. process A creates one relationship, conversation, turn, and run;
2. a fake model emits one tool call;
3. the fake tool result settles;
4. the process stops before the next model call finishes;
5. process B opens the same database and exposes the interrupted run;
6. continue creates a new linked run;
7. the new fake model call sees the settled tool result;
8. the tool is not called again;
9. the turn completes with exact ordering and no duplicate IDs or events.

## Plan 006 boundary

Plan 007 will later implement:

- SQLite migrations;
- `ConversationRepository`;
- `RunRepository`;
- a Weaver-owned direct `RunCoordinator`;
- a minimal exact-history `ContextAssembler`;
- recovery commands for retry, continue, and stop;
- a durable `RunEventLog`;
- subprocess restart tests.

The existing model types, `ToolRegistry`, effect policy, cancellation, and
inner model/tool loop stay outside the coordinator.

## Deliberate exclusions

The first proof does not include:

- live models;
- private-library access;
- a chat CLI or polished UI;
- relationship-memory curation;
- Weaver-opinion curation;
- context compaction;
- FTS5 transcript search;
- a generated wiki;
- LangGraph or `.weaver/state/workflows.sqlite3`;
- effectful-tool exactly-once claims;
- literary retrieval or understanding.

## Learning questions

The Plan 007 learning cycle must confirm:

1. the minimum schema and migration mechanism;
2. exact item kinds and uniqueness constraints;
3. canonical run phases around model/tool boundaries;
4. retry, continue, and stop command semantics;
5. item and event transaction boundaries;
6. subprocess fixture design;
7. fake model/tool scripts that make replay visible;
8. owner-only permission handling;
9. repository interfaces that stay small enough for the proof;
10. failure evidence and rollback behavior.

## Hypothesis

A direct coordinator plus one canonical SQLite database can prove restart
safety with less machinery and clearer failure evidence than a graph runtime.

This remains a hypothesis until the learning gate is confirmed and the
deterministic proof is built.

## Expected schema properties

The learning cycle should test, not merely assume:

- foreign keys enabled on every connection;
- WAL;
- migration version recorded;
- one FIFO position per turn in a conversation;
- one attempt number per run in a turn;
- one item sequence per conversation;
- one event sequence per conversation;
- exact tool-call ID unique under the required scope;
- one settled result per tool call;
- every retry/continue run linked to its interrupted predecessor;
- every snapshot source linked to exact items;
- owner-only database directory and file permissions.

## Expected recovery behavior

### Retry

Create a new run under the same turn. Assemble from before the interrupted
attempt.

### Continue

Create a new run under the same turn. Include settled partial items. Never
repeat the settled fake tool result.

### Stop

Settle the recovery request without creating more model or tool work.

## Test floor for the future build

- migration from an empty private state directory;
- repository ordering and uniqueness tests;
- exact argument/result round trip;
- crash before a fake model call;
- crash after a settled fake tool result;
- subprocess reopen and recovery listing;
- retry context boundary;
- continue context boundary;
- no duplicate turn, call ID, result, or event;
- deletion of any optional checkpoint file has no effect, though Plan 007 does
  not create one;
- owner-only permission checks;
- existing full test and lint floor.

## Deliverables

Before Plan 007's final owner gate, it will need:

- editable `architecture.drawio`;
- matching rendered preview;
- deterministic results;
- two independent reviews and rechecks;
- final owner decision.

## Gate

The old live metadata-chat plan is superseded. This draft does not admit code.
The next action after Plan 006 final acceptance is Plan 007 research and owner
confirmation, not implementation.

## Checkpoint audit corrections (2026-08-01)

Spec-vs-code audit results. The core proof holds (exact fake history
survives a real subprocess boundary; no duplicates; continue does not
re-run the tool; both subprocess tests pass). 17/17 claims, 11 aligned,
6 partial. Doc fixes:

1. DOC — learning.md Q10 crash table overstates recovery: a hard crash
   mid-turn leaves a non-terminal phase that `find_interrupted_run`
   does not surface, and no startup scan exists. Recovery is exercised
   only for runs explicitly `mark_interrupted`-ed; the proof simulates
   the crash that way. Correction added.
2. DOC — stale line refs in Q3/Q6 (start_turn 99, settle_tool 184,
   complete_run 246, continue load ~330). Re-pointed.
3. DOC — Q8 "file permission test deferred" is stale: both directory
   (0o700) and DB file (0o600) permissions are asserted today.
4. DOC — Q7/Q4 stale after 007.5: `settle_tool` enforces one result per
   call_id (ValueError) and `retry_interrupted` exists and is tested.
5. DOC — Q2 phase model is proof-path-only: the wired send() path never
   writes the intermediate phases (see Plan 006 correction 2).
6. DOC — stale statuses: learning.md header and deliverables README say
   "Unadmitted/Pending" but decision.md records Accepted. Flipped.
7. NOTE — `_runner.py` is legacy, not dead: exercised by the subprocess
   tests, but Plan 008 superseded its mechanism (it hardcodes fake model
   behavior instead of calling run_turn()); the projection-path proof
   is now the stronger replay check.
