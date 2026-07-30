# Plan 006: Design Weaver's durable conversation architecture

> **Executor instructions:** This is a research and architecture decision
> slice. Do not add runtime code, packages, live model calls, or private library
> access. Never pass the learning or final owner gate automatically.

## Status

- **State:** Source study complete; owner confirmation of `learning.md` pending
- **Priority:** P1
- **Effort:** M
- **Risk:** Low code risk; high future-state risk
- **Depends on:** Plan 005 accepted
- **Category:** Research, architecture, and docs
- **Admitted source:** Owner-supplied Plan 006 implementation request,
  2026-07-30
- **Learning gate:** `deliverables/006-durable-conversation-architecture/learning.md`

## Goal

Decide how one continuing Weaver friendship survives across many resumable
conversations, process restarts, failed attempts, long contexts, and later
interfaces.

The plan keeps four kinds of state separate:

1. exact conversation history;
2. model context projections;
3. relationship memory;
4. workflow checkpoints.

Weaver owns canonical state. The architecture hypothesis gives LangGraph one
specific job: coordinate the outer durable run without replacing the existing
Python model/tool loop.

## Gate status

The source study and architecture hypothesis exist. The owner has not confirmed
the learning note yet.

Work must stop after the learning slice until the owner confirms or corrects:

- domain records and identity;
- storage ownership;
- the LangGraph boundary;
- restart and recovery behavior;
- steering and follow-up behavior;
- relationship memory behavior;
- Plan 007's replacement proof.

## Current deterministic baseline

Checked on 2026-07-30:

```text
156 tests pass
ruff passes
64 installed packages are compatible
```

Installed framework state:

```text
langgraph 1.2.9
langgraph-checkpoint 4.1.1
langgraph-checkpoint-sqlite not installed
```

This plan changes no packages.

## Observations

### Weaver runtime

Weaver already owns provider-neutral model types, canonical conversation
messages, exact tool-call evidence, a typed `ToolRegistry`, effect policy,
cancellation, and a readable model/tool loop.

The current `AgentSession` is in-memory and keeps one pending message. It is not
a durable conversation architecture.

### Source study

[`WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md`](../WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md)
compares:

- Pi at `bb226f9c1f38d3c029156a690e97bbfc602336b9`;
- installed Codex `0.145.0` and source tag `rust-v0.145.0`;
- Hermes research snapshot
  `f27d45e2880b46a2239b184ecc8ab88ecfd2843d`;
- the older installed Hermes checkout
  `244a6f2ceb7f58c16b3cb2186584c39524e37874`;
- current LangGraph persistence and interrupt documentation;
- Weaver at commit `a5f8ce2`.

The study uses adopt, adapt, reject, and defer tables for identity, turn
execution, steering, persistence, compaction, memory, events, failure recovery,
and framework coupling.

## Architecture hypothesis

Everything in this section is pending owner confirmation.

### Durable identity

- `Relationship`: the continuing Weaver and owner friendship.
- `Conversation`: one resumable chat within the relationship.
- `Turn`: one owner input and the work it initiates.
- `Run`: one execution attempt for a turn.
- `ConversationItem`: ordered user, assistant, tool-call, tool-result,
  interruption, and context-marker evidence.
- `RunEvent`: sequenced lifecycle evidence for clients and reconnects.
- `ContextSnapshot`: a replaceable context projection derived from exact items.
- `RelationshipMemory`: attributed preferences, theories, disagreements,
  running jokes, Weaver opinions, and unresolved discussions.
- `MemoryChange`: a validated save, correction, pin, supersession, or forget.

One conversation has at most one active turn. Separate conversations may run
independently in a later plan.

Run states:

```text
queued
running
waiting_for_user
completed
interrupted
failed
```

Settled conversation items are immutable. Retry creates a new run without
erasing the failed attempt.

### Storage

```text
.weaver/
  state/
    weaver.sqlite3       canonical conversations, runs, events, context, memory
    workflows.sqlite3    replaceable LangGraph checkpoints
  runs/                  private experiment receipts
  corpus/                existing private library state
```

`weaver.sqlite3` is Weaver's source of truth, with migrations, foreign keys,
WAL, and FTS5 transcript search.

`workflows.sqlite3` belongs to the LangGraph adapter and may be rebuilt without
losing settled chats or relationship memory.

LangGraph `thread_id` equals Weaver `run_id`, not `conversation_id`.

Graph state contains identifiers, workflow phase, and pending recovery or
approval IDs. It does not contain canonical transcripts, relationship memory,
or private library data.

All private directories remain owner-only `700`. Files remain `600`.

### LangGraph boundary

The proposed outer run is:

```text
load conversation
  -> claim run
  -> assemble context
  -> execute existing Weaver model/tool loop
  -> settle durable items
  -> queue memory review
```

LangGraph does not own:

- provider-neutral model messages;
- `ToolRegistry`, tool policy, or cancellation;
- conversation items or relationship memory;
- private library data;
- public CLI, TUI, or web event types.

Startup routes unfinished work to a durable recovery choice. It does not
automatically replay the model/tool node.

Retry creates a new `run_id`. Continue uses confirmed partial evidence.

### Conversation behavior

- Normal input while busy becomes FIFO follow-up.
- Explicit steering targets the active turn.
- Steering is delivered at a safe model/tool boundary.
- Messages are never collapsed or silently dropped.
- A crash preserves confirmed items and records unfinished work as interrupted.
- Long chats keep their full private ledger.
- Context snapshots are inspectable projections with source item IDs.

### Memory behavior

New conversations receive curated relationship memory, relevant Weaver
opinions, and open discussion threads. Old transcript excerpts are retrieved
only when relevant.

Memory uses:

1. a typed remember tool for deliberate in-turn saves;
2. a non-blocking post-turn curator for useful items the live model missed.

Both paths use one validator, provenance rules, idempotency, and visible memory
notices.

User theories remain attributed to the user. Weaver opinions are separate,
revisable records. Correction appends a superseding record. Forgetting removes
a memory from future context; deleting the source chat is separate.

### Future interfaces

Plan 006 documents these names but does not add Python interfaces:

- `ConversationRepository`;
- `RunRepository`;
- `RelationshipMemoryRepository`;
- `ContextAssembler`;
- `ConversationRunner`;
- `RunCoordinator`;
- `RunEventLog`.

## Scope

### In scope

- this numbered plan and Plan 006 deliverables;
- `WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md`;
- `WEAVER_PI_LANGGRAPH_COMPARISON.md`;
- `docs/decisions/006-conversation-architecture.md`;
- roadmap and relevant links in `plans/README.md`, `README.md`, and `weaver.md`;
- Plan 002 wording where it describes the conversation boundary;
- Plan 007 status and replacement proof;
- editable Draw.io source and an SVG or PNG preview;
- source, consistency, privacy, and independent reviews.

### Out of scope

- Python source or tests;
- dependency or lockfile changes;
- adding or removing LangGraph packages;
- live model calls;
- private library reads or changes;
- conversation branching;
- multi-user authentication;
- at-rest encryption;
- implementing Plan 007.

## Work

### Step 1: Source study and learning gate

1. Write `WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md`.
2. Compare Pi, Codex 0.145.0, Hermes `f27d45e`, current LangGraph docs, and
   Weaver.
3. Record that installed Hermes `244a6f2` is older.
4. Record adopt, adapt, reject, and defer choices.
5. Update the learning note with observations, rejected designs, the
   architecture hypothesis, and owner choices from the planning discussion.
6. Run the deterministic baseline.
7. Stop for the owner.

**Current state:** complete, pending owner confirmation.

### Step 2: Record the confirmed architecture

Only after explicit learning confirmation:

1. Create `docs/decisions/006-conversation-architecture.md`.
2. Record ownership, domain records, transitions, storage, context assembly,
   memory lifecycle, event protocol, privacy, and failure handling.
3. Add scenario traces for:
   - restart between turns;
   - crash during a turn;
   - retry;
   - steering;
   - queued follow-up;
   - new-conversation continuity;
   - memory correction;
   - long-context compaction.
4. Update `WEAVER_PI_LANGGRAPH_COMPARISON.md` to point to the decision while
   keeping its useful source evidence.

### Step 3: Reconcile the roadmap

1. Rename this plan file and its deliverable folder around durable conversation
   architecture.
2. Update the plan index and links in `README.md` and `weaver.md`.
3. Mark the current Plan 007 temporary-chat draft superseded.
4. Set Plan 007's next proof:

   > A fake conversation survives process restart with exact ordering and no
   > duplicated turn or tool result.

5. Leave Plan 007 implementation details and its learning gate for a separate
   planning cycle.

### Step 4: Draw and inspect the architecture

Create `architecture.drawio` and a matching SVG preview showing:

- one relationship with many conversations;
- clients and Weaver commands/events;
- the LangGraph run coordinator;
- the existing inner model/tool loop;
- canonical SQLite and replaceable checkpoint SQLite;
- context assembly;
- relationship and opinion memory;
- providers and tools;
- the interrupted-run recovery branch.

Validate the XML and Draw.io structure. Render a capped PNG for visual
inspection when possible. Record a missing exporter if the CLI is unavailable.

### Step 5: Review and final gate

1. One independent review checks source accuracy, framework neutrality, state
   ownership, replay handling, and the Codex/Hermes comparison.
2. A second review checks conversation coherence, privacy, memory controls,
   diagram quality, Plan 007 clarity, and worktree preservation.
3. Allow one repair pass.
4. Both reviewers recheck.
5. Leave final Plan 006 acceptance pending for the owner.

## Verification

Run:

```bash
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
git diff --check
```

Also verify:

- Plan 002, Plan 006, Plan 007, both comparisons, and the final decision agree;
- no Python, dependency, private chat, novel, receipt, or generated memory
  changed;
- no credentials or raw reasoning appear in deliverables;
- deleting checkpoint state cannot erase canonical conversations;
- every context snapshot and relationship memory has source identifiers;
- exact tool-call IDs and arguments remain preserved;
- unfinished runs cannot silently replay a model call or effectful tool;
- steering and follow-up preserve every owner message;
- Draw.io source and preview communicate the same boundary.

## Done criteria

- [x] Plan 005 is accepted.
- [x] The source study is complete.
- [x] The deterministic baseline passes.
- [ ] The owner confirmed Plan 006 `learning.md`.
- [ ] The final architecture decision exists.
- [ ] Plan 002, both comparisons, and Plan 007 agree.
- [ ] Plan 007's replacement proof is clear.
- [ ] Editable Draw.io source and inspected preview exist.
- [ ] Two reviewers completed a first check and recheck.
- [ ] No runtime, dependency, or private state changed.
- [ ] The owner recorded Plan 006's final decision.

## Stop conditions

Stop and report if:

- the owner has not confirmed the learning note;
- the work starts adding runtime code or packages;
- canonical chat or memory depends on LangGraph checkpoint survival;
- recovery would silently replay a model call or effectful tool;
- exact items would be deleted by context compaction;
- any document or diagram contains private library text, private chat, a
  credential, or raw reasoning.

## Assumptions

- Weaver is single-owner and local-first initially.
- `relationship_id` avoids a future schema dead end.
- Conversation branching and multi-user authentication are deferred.
- Filesystem permissions are the first at-rest boundary.
- Encryption is a later decision.
- Passing checks and reviews does not accept Plan 006 until the owner records
  the final choice.
