# Plan 006: Settle the LangGraph boundary

> **Executor instructions:** This is an architecture decision slice. Do not add
> LangGraph, change the runtime, or start Plan 007 while the decision is being
> written. The owner makes the final choice after reviewing the reconciled
> wording and diagram.

## Status

- **State:** Draft; owner confirmation of `learning.md` pending
- **Priority:** P1
- **Effort:** S
- **Risk:** Low code risk; high future-direction value
- **Depends on:** Plan 005 accepted
- **Category:** Architecture and docs
- **Planned at:** commit `96d0729`, dirty working-tree snapshot, 2026-07-30
- **Learning gate:** `deliverables/006-settle-langgraph-boundary/learning.md`

## Goal

Remove the current contradiction about LangGraph and record one exact boundary
that later agents can follow.

The proposed interpretation for owner confirmation is:

- Weaver is a custom agent.
- Weaver owns its model types, tool registry, tool implementations,
  cancellation rules, library pipeline, memory schemas, receipts, and UI
  protocol.
- The custom inner model/tool loop remains plain Python.
- If LangGraph is added, it may coordinate the outer conversation flow only.
- LangGraph does not own library work, semantic memory, general system policy, or
  every background job.
- Plan 007 does not add LangGraph unless this decision records a concrete job it
  must perform in that slice.

## Why this matters

Plan 002 says LangGraph may later power the conversation loop.
`WEAVER_PI_LANGGRAPH_COMPARISON.md` recommends a plain Python conversation loop
and reserves graph execution for selected background jobs.

Both cannot remain the active instruction. A later executor would have to guess
which document wins, and could either wrap a simple loop in unnecessary graph
state or spread LangGraph types through the whole system.

## Current state

### Plan 002 wording

`plans/002-trusted-shadow-slave-library.md:70-79` says Weaver owns its tools and
system behavior, and says LangGraph's admitted future job is the conversation
loop only.

### Pi and LangGraph comparison

`WEAVER_PI_LANGGRAPH_COMPARISON.md:10-21` chooses a small imperative
conversation loop and optional graph-shaped background workflows.

`WEAVER_PI_LANGGRAPH_COMPARISON.md:65` repeats that the live conversation loop
is imperative.

`WEAVER_PI_LANGGRAPH_COMPARISON.md:227-237` gives useful Weaver-owned
components: `ConversationRunner`, `MemoryRepository`, `ContextAssembler`,
`RunEventLog`, `ApprovalService`, and provider/UI adapters.

### Dependencies

`pyproject.toml:11-12` includes LangChain packages. It does not include
LangGraph, and current Weaver source does not import LangGraph.

This plan does not add or remove packages. Dependency cleanup or LangGraph
installation belongs to the first plan that proves it is needed.

## Mental model to record

Think of Weaver as the restaurant and LangGraph as a possible ticket board.

Weaver still owns:

- the menu: tool schemas;
- the kitchen rules: deterministic pipelines and side-effect policy;
- the ingredients: private library and future memory;
- the staff records: events, receipts, and decisions.

A ticket board may help route a conversation through named stages. It does not
become the restaurant.

## Decision questions

The architecture decision must answer these directly:

1. Does the current inner model/tool loop stay plain Python? Proposed: yes.
2. Is LangGraph mandatory for Plan 007? Proposed: no, unless the owner names a
   concrete need beyond wrapping one function.
3. If added later, what may it own? Proposed: outer conversation transitions
   and resumable conversation coordination only.
4. What may it never own? Proposed: tool behavior, library rules, semantic
   memory, source validation, provider types, or public UI contracts.
5. Can LangGraph checkpoint state become Weaver memory? Proposed: no.
6. Can a future background pipeline use LangGraph? Proposed: only under its own
   admitted plan and only if the owner expands the boundary.

The owner may change these answers at the learning gate. Do not implement an
unconfirmed interpretation.

## Scope

### In scope

- `docs/decisions/006-langgraph-boundary.md` (new canonical decision)
- `WEAVER_PI_LANGGRAPH_COMPARISON.md`
- `plans/002-trusted-shadow-slave-library.md`, wording only
- `plans/007-minimal-conversation-entrypoint.md`, only if the owner-confirmed
  decision changes its stated runtime boundary
- `plans/README.md`
- Plan 006 deliverables
- `deliverables/006-settle-langgraph-boundary/architecture.drawio`
- `deliverables/006-settle-langgraph-boundary/architecture.png`

### Out of scope

- Python source or tests;
- dependency changes;
- adding LangGraph or LangChain agent helpers;
- implementing a graph;
- durable events, checkpointing, memory, retrieval, or chat;
- private library or generated state;
- deciding future background-workflow runtimes beyond the recorded boundary.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Contradiction scan | `rg -n "LangGraph|imperative|conversation loop|background workflow" plans/002-trusted-shadow-slave-library.md plans/007-minimal-conversation-entrypoint.md WEAVER_PI_LANGGRAPH_COMPARISON.md docs/decisions/006-langgraph-boundary.md` | Every match agrees with the accepted boundary |
| Import scan | `rg -n "langgraph" src tests pyproject.toml` | No runtime import or dependency added by this plan |
| Full tests | `uv run pytest -q` | Existing tests still pass |
| Diff scope | `git status --short` | No Python, dependency, or private file changed by Plan 006 |

## Steps

### Step 1: Confirm the learning note

The owner reviews the six decision questions in `learning.md`. Record any
correction before editing architecture documents.

**Verify:** the learning note has an owner confirmation date and exact accepted
answers.

### Step 2: Write the canonical decision

Create `docs/decisions/006-langgraph-boundary.md` with:

- status and date;
- context;
- accepted decision;
- allowed responsibilities;
- forbidden responsibilities;
- consequences;
- conditions that justify revisiting the decision;
- examples for Plan 007, a future memory job, and a library refresh.

Use Weaver-owned names. Do not describe framework objects as domain records.

**Verify:** a fresh reader can answer all six decision questions from this file
alone.

### Step 3: Reconcile existing documents

Update the Plan 002 paragraph and the comparison's executive decision, decision
table, target architecture, and bottom line. Keep useful source evidence from
the comparison. Remove or label any recommendation rejected by the owner.

Do not rewrite unrelated Plan 002 results.

**Verify:** contradiction scan returns only consistent statements.

### Step 4: Draw the boundary

Create one diagram showing:

```text
UI -> outer conversation coordinator -> custom ConversationRunner
                                      -> Weaver ToolRegistry
                                      -> Weaver memory and library services
```

If LangGraph is conditional, show it as a replaceable outer adapter, not a box
around the whole system. Render PNG and inspect it visually.

**Verify:** source and rendered diagram exist and use no private data.

### Step 5: Independent architecture review

Ask one fresh reviewer to find contradictions and accidental framework
ownership. Ask another to check whether Plan 007 can be executed without
guessing.

Record findings, apply one wording repair pass, then recheck.

## Test plan

This plan has no new runtime tests. Verification is:

- text consistency scans;
- full regression suite;
- diff-scope inspection;
- two cold-read reviews;
- visual diagram inspection.

## Independent review

1. An architecture reviewer checks that every document gives LangGraph the same
   allowed and forbidden responsibilities.
2. A fresh executor reads Plan 007 without prior conversation context and
   reports any runtime choice it still has to guess.
3. Record both reviews in the Plan 006 ledger.
4. Apply one wording repair pass.
5. Both reviewers recheck the same document set.

## Done criteria

- [ ] The owner confirmed Plan 006 `learning.md`.
- [ ] Plan 005 is accepted.
- [ ] One canonical LangGraph decision exists.
- [ ] Plan 002, the comparison, and Plan 007 agree.
- [ ] Allowed and forbidden framework responsibilities are explicit.
- [ ] No source, dependency, library, or private state changed.
- [ ] The diagram source and PNG agree.
- [ ] Two reviewers can explain the same boundary.
- [ ] The owner recorded Plan 006's final decision.

## STOP conditions

Stop and report if:

- Plan 005 is not accepted;
- the owner has not confirmed the decision questions;
- reconciling the docs requires choosing between two unconfirmed meanings of
  "conversation loop";
- the plan starts adding packages or runtime code;
- the decision would make LangGraph checkpoint state canonical Weaver memory;
- any diagram or report includes private library content.

## Maintenance notes

Any future plan that adds LangGraph must cite this decision and name the exact
responsibility it needs. "Agent framework" is not enough.

If later evidence shows the plain Python loop cannot meet a confirmed
conversation requirement, write a new decision amendment. Do not quietly grow
the framework boundary.
