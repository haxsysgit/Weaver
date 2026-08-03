# Plan 012: Lore graph build (Shadow Slave, chapters 1-100)

> **Executor instructions:** Plan 011 is accepted. The owner re-scoped this
> plan on 2026-08-03: it is no longer a Weaver codebase experiment. It is an
> agent-executed reading build. The coordinator reads Shadow Slave chapters
> 1-100 directly from `novels/shadow-slave/0001-0100/`, dispatches two
> fresh-context reader subagents per chapter, and builds an interconnected
> knowledge base (lore graph). Weaver is not the reader and is not touched.
> Do not modify any file under `novels/`. Do not commit any knowledge base
> content. The owner's wording: "we will build lore graph, find and research
> how to enable or implement fictional understanding for agents and a lot of
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
- **State:** Pilot executed early (chapter 1), accepted by owner 2026-08-03;
  full run 1-100 in progress
- **Priority:** P2
- **Effort:** L (100 chapters, multi-eye reading)
- **Risk:** Medium (private source material; long-running careful build)
- **Depends on:** Plan 011 accepted 2026-08-03
- **Category:** Agent reading and knowledge base
- **Planned at:** commit `e523383`, 2026-07-30 (as a Weaver experiment);
  re-scoped by owner 2026-08-03
- **Learning gate:** `deliverables/012-direct-reading-baseline/learning.md`
- **Final decision:** pending

## Gate history (honest record)

1. 2026-07-30: plan drafted as a Weaver experiment comparing
   `deepseek-v4-flash` vs `deepseek-v4-pro` on one novel packet.
2. 2026-08-03: owner re-scoped the plan to an agent-executed lore-graph
   build (pure reading, no vector DB/RAG, chapters 1-100 from the start).
3. 2026-08-03 (early pilot): chapter 1 was read and merged into the graph
   before the gate record was formalized. The pilot used session-inheriting
   readers that wrote files against instruction; the output was verified
   against the source and accepted, and the process lesson was recorded.
4. 2026-08-03: owner approved the pilot format and the loop with two
   binding rules (fresh-context readers; readers open only their assigned
   chapter file). This commit records that acceptance and brings every
   deliverable onto the lore-graph scope per independent review.

## Current stop

Pilot (chapter 1, three eyes) approved by owner 2026-08-03 with binding
rules. The graph write contract, independent-reader loop, checkpointing,
validation, and recovery rules are defined below (this commit). Running
chapters 2-100 in restart-safe batches of 10.

## Goal

Read Shadow Slave chapters 1-100 from the start and build an interconnected
knowledge base (lore graph) from pure reading. The coordinator reads each
chapter itself and, for every chapter, dispatches two fresh-context reader
subagents (different lenses) so each chapter gets three eyes. The analyses
build on each other through the shared knowledge base, which the coordinator
alone writes. The accumulated output IS the deliverable. No vector database
(Qdrant), RAG, or retrieval machinery in this plan; later plans build on top
of the graph. The plan also researches how agents can implement fictional
understanding.

## Why this matters

This is the first time the agent stack actually reads the novel. The lore
graph is the seed data for Weaver's future reading capabilities and for any
later retrieval, and it is built the careful way: chapter by chapter, three
eyes per chapter, every new analysis grounded in what the graph already
knows. Weaver itself cannot do this yet (no subagents, no orchestration, no
read/bash tools) and stays untouched.

## Roles

The contract names roles only. Harness and model bindings are recorded
separately (subagent-fleet appendix) and are not part of this plan. Context
window claims (1M for flash, 272K for Terra) are owner-stated, unverified in
committed evidence, and unnecessary for per-chapter reading; they are not
relied on.

| Role | Contract |
| --- | --- |
| Coordinator and graph writer | reads every chapter directly; curates the accepted-knowledge digest; dispatches the two readers per chapter; reconciles their analyses with its own read; sole writer of the KB; runs validation per batch |
| Plot and causality reader | fresh-context subagent; reads the assigned chapter file only; returns structured analysis text only |
| Character and world-state reader | fresh-context subagent; reads the assigned chapter file only; returns structured analysis text only |
| Independent reviewer | fresh-context subagent, post-run; checks entity continuity, thread tracking, and graph-vs-source consistency on sampled chapters; never edits |

Fresh-context dispatch follows `docs/process/subagent-fleet.md`. The two
readers run in parallel per chapter.

## Reader independence (mandatory)

1. Both readers receive the same three things and nothing else: the
   coordinator's accepted-knowledge digest of prior chapters, their lens
   instructions, and the exact chapter file path. Fresh context — no session
   inheritance, no repo browsing, no KB access.
2. Readers analyse the current chapter independently. They never see each
   other's current-chapter conclusions before reconciliation.
3. The coordinator reconciles the two analyses with its own read into the
   chapter note. Disagreements are adjudicated against the source text by
   the coordinator re-reading the chapter.
4. Without independence, three readers become one opinion repeated three
   times. Violations are STOP conditions.

## Discipline

- `novels/` is immutable private source: read-only, never modified.
  **Git tracks zero files under `novels/` (verified 2026-08-03), so git can
  never restore them.** If a novel file is ever accidentally modified or
  deleted: restore from the known private backup, or re-fetch via the
  admitted Plan 002 library tools (`corpus` fetch/update). Report the
  incident in results.md.
- Reader subagents open only their assigned chapter file(s) — no other
  files, ever. They return analysis text; they never write files.
- The coordinator is the sole writer of the knowledge base.
- The knowledge base lives at `.weaver/knowledge/shadow-slave/` with
  owner-only permissions and is never committed.
- Deliverables in `deliverables/012-direct-reading-baseline/` contain no
  novel prose, no story-derived knowledge, no credentials, no raw reasoning.
- The private `method.md` stays private; the committed evidence is a
  sanitized research summary with no story-derived content.
- Every per-chapter analysis builds on the accepted-knowledge digest;
  nothing is written from a cold context when the graph already covers the
  ground.

## Graph write contract

All writes go through the coordinator, per chapter, atomically.

### Files

```
.weaver/knowledge/shadow-slave/
  README.md            map + conventions + reading status
  lore-graph.jsonl     canonical graph: entity/edge/thread/checkpoint records
  chapters/0001.md     per-chapter analysis (one file per chapter)
  threads.md           narrative threads ledger (setups, mysteries, payoffs)
  timeline.md          event timeline with chapter references
  method.md            private fictional-understanding research notes
```

### Record types (lore-graph.jsonl, one JSON object per line)

- `entity`: `id` (stable slug, e.g. `sunny`), `type`
  (character|location|item|concept|faction|event), `name`, `aliases[]`,
  `first_chapter`, `last_chapter`, `status`, `summary`, `confidence`
  (observed|inferred|rumor|theory), `chapters[]`.
- `edge`: `source`, `rel`, `target`, `chapter`, `note?`, `confidence`
  (observed|inferred), `verification` (stated|character-sourced|implied|
  contested). Edges always reference existing entity ids.
- `thread`: `id` (TH-NNN), `title`, `status` (open|paid_off|dropped|
  contested), `opened_chapter`, `payoff_chapter?`, `notes`.
- `checkpoint`: `chapter`, `sha256` (of the source chapter file), `status`
  ("complete"), `written_at` (ISO), `files` (the KB files written for this
  chapter).

### Behaviour

- **Append-only.** New records append; existing records are never rewritten
  or deleted. Corrections append (e.g. an entity status change is a new
  entity record with the same `id` and a later `last_chapter`).
- **Atomic per-chapter batch.** For one chapter: write chapter note,
  graph records, thread updates, timeline entries, then the checkpoint
  record, in one batch. The batch is complete only when the checkpoint
  exists. Write temp files in the same directory, then rename over the
  targets (no partial states on interrupt).
- **Stable IDs and aliases.** An entity keeps one id from first appearance;
  new names in later chapters become aliases on a new entity record, never
  a new id.
- **Confidence and verification.** Observed facts vs inference vs rumor vs
  unresolved theory are marked per record. Character-sourced claims are
  marked `character-sourced` and stay flagged until the text confirms them.
- **Validation per batch.** Parse every JSONL line; unknown `kind`, missing
  required fields, or malformed JSON stop the batch. Edges whose source or
  target has no entity record are dangling and stop the batch.
- **Restart safety.** Resume from the last checkpoint chapter (highest
  complete `checkpoint.chapter`). Duplicate detection: before writing an
  entity/edge/thread for chapter N, confirm no record with the same
  (`kind`, `id`, `chapter`) exists. A re-run of a checkpointed chapter is a
  STOP condition (report, investigate, do not silently overwrite).
- **Completion markers.** One checkpoint record per chapter, with the
  source file's sha256 so a chapter's note can be traced to the exact file
  that was read.

## Knowledge base structure

See the Graph write contract above. Conventions: entities are tagged `@id`,
chapters are referenced `[[0001]]`, relations are stored on the source
entity with a target, relation type, and chapter evidence.

## Scope

### In scope

- Reading chapters 1-100 (pilot accepted; batches continue).
- Per-chapter analysis files, entity/edge graph records, threads and
  timeline ledgers.
- Web research on fictional understanding / lore graphs → private
  `method.md`; a sanitized research summary → deliverables.
- Plan 012 deliverables (learning.md, results.md, decision.md, rubric.md,
  review-ledger.md, README.md, architecture diagram) and `plans/README.md`.

### Out of scope

- Weaver codebase changes (`src/weaver/`, `conversation/`, `agent/`,
  `model_layer/`, `corpus/`).
- Real model API arms: a GPT-5.6 Terra/Codex reader may join later. No API
  keys are needed or used by this plan.
- Vector database (Qdrant), RAG, retrieval, compiled memory.
- Committing any knowledge base content or story-derived knowledge.

## Steps

### Slice 0: Pilot (done, accepted 2026-08-03)

Chapter 1 read with three eyes (coordinator + two readers) and merged into
the graph. Owner approved the format and the loop with the binding rules.
Lessons recorded: readers must be fresh-context subagents and must never
write files; the coordinator merges.

### Slice 1: Method research (done)

Fictional-understanding research recorded in private
`.weaver/knowledge/shadow-slave/method.md` (Narrative World Model, ReadAgent,
STAGE, ReverieMem, story-bible tools). A sanitized research summary with no
story-derived content is the committed evidence in this plan's deliverables.

### Slice 2: Main run, chapters 2-100

- Batches of 10 chapters. Per chapter: coordinator reads it, curates the
  accepted-knowledge digest, dispatches the two readers in parallel with
  the exact chapter file path and the analysis template; both return
  analysis text only.
- Coordinator reconciles its own read with both analyses into
  `chapters/NNNN.md` and updates the graph, threads, and timeline per the
  write contract; checkpoint per chapter.
- Restart from the last checkpoint chapter; duplicate detection per the
  write contract.
- Track entity continuity: same entity across chapters keeps one id;
  aliases recorded; state changes append.

### Slice 3: Review and decision

- Independent reviewer (fresh-context, post-run): entity continuity, thread
  tracking, graph-vs-source consistency on sampled chapters, format
  quality. The reviewer never edits.
- Owner records the final decision in `decision.md`; results recorded in
  `results.md`.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Full-suite guard | `uv run pytest -q` | Unchanged suite passes (no repo code changed) |
| Lint guard | `uv run ruff check src/weaver tests` | Clean (unchanged) |
| Graph validation | coordinator's per-batch validation (write contract) | All records parse; no dangling edges |

## Done criteria

- [ ] Pilot accepted by owner (format + loop) — done 2026-08-03.
- [ ] All 100 chapters read with three eyes; `chapters/` complete.
- [ ] `lore-graph.jsonl` holds stable entity/edge/thread/checkpoint records
  built cumulatively; threads ledger tracks setups and payoffs.
- [ ] Sanitized research summary recorded in deliverables.
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
- readers are not independent (session inheritance, or they see each
  other's current-chapter output);
- a reader's analysis contradicts the source (coordinator re-reads the
  chapter to adjudicate);
- a novel file is modified or lost (recovery: private backup or Plan 002
  corpus tools; git cannot restore — verified 0 tracked files);
- graph validation fails (malformed record, dangling edge, duplicate
  record);
- knowledge base content risks entering a commit.

## Deferred work

- GPT-5.6 Terra/Codex reader joining the fleet (owner-stated 272K window,
  unverified, not relied on).
- Retrieval over the graph: Qdrant, RAG, or other machinery (later plan).
- Weaver gaining its own subagents/orchestration/read tools to do this
  itself (later milestone).
