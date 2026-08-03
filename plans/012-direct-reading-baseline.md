# Plan 012: Lore graph build (Shadow Slave, chapters 1-100)

> **Executor instructions:** Plan 011 is accepted. The owner re-scoped this
> plan on 2026-08-03: it is no longer a Weaver codebase experiment. It is an
> agent-executed reading build. The executing agent reads Shadow Slave
> chapters 1-100 directly from `novels/shadow-slave/0001-0100/` with two
> fresh-context reader subagents and builds an interconnected knowledge base
> (lore graph). Weaver is not the reader and is not touched. Do not modify
> any file under `novels/`. Do not commit any knowledge base content. The
> owner's wording: "we will build lore graph, find and research how to
> enable or implement fictional understanding for agents and a lot of
> things".
>
> This plan is **harness-agnostic**: it must run the same under pi, Codex,
> or any capable agent harness. Roles and discipline are the contract;
> per-harness bindings (which tool spawns a fresh-context subagent, how to
> pass file paths) live in the harness appendix of
> `docs/process/subagent-fleet.md`. There are no harness-specific patterns
> in this plan (no fork, no agent-name-specific tooling).

## Status

- **Tooling:** `uv` for repo commands; the reading itself uses the harness's
  native tools (read files, run commands, spawn fresh-context subagents).
- **State:** Pilot approved by owner 2026-08-03; full run 1-100 in progress
- **Priority:** P2
- **Effort:** L (100 chapters, multi-eye reading)
- **Risk:** Medium (private source material; long-running careful build)
- **Depends on:** Plan 011 accepted 2026-08-03
- **Category:** Agent reading and knowledge base
- **Planned at:** commit `e523383`, 2026-07-30 (as a Weaver experiment);
  re-scoped by owner 2026-08-03
- **Learning gate:** `deliverables/012-direct-reading-baseline/learning.md`
- **Final decision:** pending

## Current stop

The owner approved the pilot (chapter 1, three eyes) and the loop on
2026-08-03, with two binding rules:

1. **Fresh-context subagents** — every reader subagent starts with a clean
   context containing only its task prompt and the file path(s) it must
   read. No session inheritance, no repo browsing, no knowledge base access.
2. **Read exactly the assigned chapter(s)** — the only file a reader
   subagent may open is the novel chapter file (or chapter files) it is
   assigned. Nothing else: no plans, no code, no other chapters, no KB.

The orchestrating agent is the **sole writer** of the knowledge base.

## Goal

Read Shadow Slave chapters 1-100 from the start and build an interconnected
knowledge base (lore graph) from pure reading. The orchestrating agent reads
each chapter itself and, for every chapter, dispatches two fresh-context
reader subagents (different lenses) so each chapter gets three eyes. The
analyses build on each other through the shared knowledge base, which the
orchestrator alone writes. The accumulated output IS the deliverable. No
vector database (Qdrant), RAG, or retrieval machinery in this plan; later
plans build on top of the graph. The plan also researches how agents can
implement fictional understanding.

## Why this matters

This is the first time the agent stack actually reads the novel. The lore
graph is the seed data for Weaver's future reading capabilities and for any
later retrieval, and it is built the careful way: chapter by chapter, three
eyes per chapter, every new analysis grounded in what the graph already
knows. Weaver itself cannot do this yet (no subagents, no orchestration, no
read/bash tools) and stays untouched.

## Discipline

- `novels/` is immutable private source: read-only, never modified.
- Reader subagents open only their assigned chapter file(s) — no other
  files, ever.
- Reader subagents run with fresh context: their task prompt is the only
  context they see. Constraints live in the prompt because they cannot see
  the parent session.
- The orchestrating agent is the sole writer. Subagents return analysis
  text; they never write files, never touch the knowledge base, never touch
  the repo.
- The knowledge base lives at `.weaver/knowledge/shadow-slave/` with
  owner-only permissions and is never committed.
- No chapter prose, raw reasoning traces, or credentials enter any
  committed file; the knowledge base holds short quoted passages only where
  needed for verification.
- Every per-chapter analysis builds on the accumulated graph; nothing is
  written from a cold context when the graph already covers the ground.
- A passing pilot is not a done plan: the owner records the final decision
  after the full run and independent review.

## Roles

| Role | Who | Contract |
| --- | --- | --- |
| Orchestrator | the executing agent (pi or Codex) | reads every chapter directly; dispatches the two readers per chapter; merges their analyses with its own read; sole writer of the KB |
| Reader A | fresh-context subagent | plot/causality lens; reads the assigned chapter file only; returns structured analysis text only |
| Reader B | fresh-context subagent | characters/worldbuilding lens; reads the assigned chapter file only; returns structured analysis text only |

Fresh-context dispatch follows `docs/process/subagent-fleet.md` (roles,
isolation, orchestration shapes); per-harness bindings are in its appendix.
The two readers run in parallel per chapter. Analysis that contradicts the
source is adjudicated by the orchestrator re-reading the chapter.

## Knowledge base structure

```
.weaver/knowledge/shadow-slave/
  README.md            map + conventions + reading status
  lore-graph.jsonl     canonical graph records: entities + edges + threads
  chapters/0001.md     per-chapter analysis (one file per chapter)
  threads.md           narrative threads ledger (setups, mysteries, payoffs)
  timeline.md          event timeline with chapter references
  method.md            fictional-understanding research notes
```

Conventions: entities are tagged `@id` (e.g. `@sunny`), chapters are
referenced `[[0001]]`, relations are stored on the source entity with a
target, relation type, and chapter evidence. Entity ids are stable from
first appearance.

## Scope

### In scope

- Reading chapters 1-100 (pilot approved; batches continue).
- Per-chapter analysis files, entity/edge graph records, threads and
  timeline ledgers.
- Web research on fictional understanding / lore graphs → `method.md`.
- Plan 012 deliverables (learning.md, results.md, decision.md) and
  `plans/README.md`.

### Out of scope

- Weaver codebase changes (`src/weaver/`, `conversation/`, `agent/`,
  `model_layer/`, `corpus/`).
- Real model API arms: the flash/Terra comparison becomes subordinate
  opinions inside the fleet; a GPT-5.6 Terra/Codex reader may join later.
  No API keys are needed or used by this plan.
- Vector database (Qdrant), RAG, retrieval, compiled memory.
- Committing any knowledge base content.

## Steps

### Slice 0: Pilot (done, approved 2026-08-03)

Chapter 1 read with three eyes (orchestrator + two readers) and merged into
the graph. Owner approved the format and the loop with the two binding rules
above. Lesson recorded: readers must be fresh-context subagents (not
session-inheriting processes) and must never write files — the orchestrator
merges.

### Slice 1: Method research (done)

Fictional-understanding research recorded in
`.weaver/knowledge/shadow-slave/method.md` (Narrative World Model, ReadAgent,
STAGE, ReverieMem, story-bible tools). No novel text in that file.

### Slice 2: Main run, chapters 1-100

- Read in batches (e.g. 10 chapters per pass). Per chapter: orchestrator
  reads it, dispatches Reader A (plot/causality) and Reader B
  (characters/worldbuilding) in parallel with the exact chapter file path
  and the analysis template; both return analysis text only.
- Orchestrator merges its own read with both analyses into
  `chapters/NNNN.md` and updates the graph, threads, and timeline.
- Each batch starts from the accumulated graph (passed to the orchestrator's
  own context), so analyses build on each other.
- Track entity continuity: same entity across chapters keeps one id;
  aliases recorded; state changes appended to the entity record.
- Verify the orchestration once per batch: confirm the readers returned
  analysis (not file writes) and that no KB file changed except by the
  orchestrator.

### Slice 3: Review and decision

- Independent review of graph consistency: entity continuity, thread
  tracking, no contradictions with the source chapters (spot-check by
  re-reading sampled chapters), format quality.
- Owner records the final decision in `decision.md`; results recorded in
  `results.md`.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Full-suite guard | `uv run pytest -q` | Unchanged suite passes (no repo code changed) |
| Lint guard | `uv run ruff check src/weaver tests` | Clean (unchanged) |

## Done criteria

- [ ] Pilot approved by owner (format + loop) — done 2026-08-03.
- [ ] All 100 chapters read with three eyes; `chapters/` complete.
- [ ] `lore-graph.jsonl` holds stable entity/edge/thread records built
  cumulatively; threads ledger tracks setups and payoffs.
- [ ] Method research recorded in `method.md`.
- [ ] Independent review of graph consistency has no open blocker.
- [ ] No novel file modified; no knowledge base content committed; no
  reader subagent wrote files.
- [ ] Owner records Plan 012 final decision.

## STOP conditions

Stop and report if:

- The owner changes the chapter scope (e.g. extends past 100);
- a reader subagent writes a file, touches the KB, or opens anything other
  than its assigned chapter file (revert any stray writes, report, re-run
  that chapter);
- a reader's analysis contradicts the source (orchestrator re-reads the
  chapter to adjudicate);
- a novel file is accidentally modified (restore from git, report);
- knowledge base content risks entering a commit;
- the batch verification shows readers are not fresh-context (session
  inheritance leaks).

## Deferred work

- GPT-5.6 Terra/Codex reader joining the fleet (272K window noted).
- Retrieval over the graph: Qdrant, RAG, or other machinery (later plan).
- Weaver gaining its own subagents/orchestration/read tools to do this
  itself (later milestone).
