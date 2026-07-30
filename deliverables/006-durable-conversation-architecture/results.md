# Results: Durable conversation architecture

## Status

Plan 006 documentation is in progress. The learning gate is confirmed. Final
owner acceptance remains open.

## Handoff log

### Research evidence cleanup

- Completed: removed 13 tracked `.pi-subagents/` files (1,768,137 bytes) and
  added `.pi-subagents/` to `.gitignore`.
- Privacy scan before removal: no credential-shaped value, private novel path,
  or chapter-prose heading signal found. Raw reasoning markers existed in all
  three transcripts.
- Corrected: Claude sessions, pinned Codex evidence, Pi session continuity,
  Honcho record distinctions, direct coordinator choice, SQLite cross-database
  limit, and private wiki placement.
- Checks: `git diff --cached --check`, staged scope, ignore rule, credential
  patterns, private-path patterns, raw-reasoning patterns.
- Known failure: the first combined privacy scan did not execute because of a
  shell regex quoting error. It changed nothing. Smaller scans then passed.
- Current commit after this step: `9063f05b3553`
- Exact next action: record the canonical decision and reconcile the roadmap.

## Architecture observations

- Completed: recorded ownership, identity, transactions, recovery, context
  assembly, memory policy, event replay, privacy, adapters, and ten scenario
  traces in the canonical decision.
- Reconciled: confirmed learning record, both comparisons, Plan 002
  coordinator wording, Plan 006 status, plan index, and root README.
- Preserved: the owner's pre-existing `weaver.md` to `vision.md` rename remains
  unstaged and unmodified. The same roadmap point now lives in tracked
  `README.md` and `plans/README.md`; the renamed vision file still needs the
  owner to carry that public-text update into their separate rename.
- Checks before commit: pending staged scope, `git diff --check`, link scan,
  and privacy scan.
- Known failure: the first combined documentation patch was rejected because
  one Plan 002 context line had drifted. It wrote no files. Smaller patches
  then applied cleanly.
- Current commit after this step: `57fa0aab4f20`
- Exact next action: replace Plan 007 with the restart-safe proof.

## Plan 007 handoff

- Completed: renamed the plan and deliverable folder around restart safety.
- Superseded: temporary CLI, live metadata chat, and private-library inspection
  as the first proof.
- Recorded proof: exact fake items survive a subprocess restart, interrupted
  work is visible, continue does not replay a settled tool result, and no turn,
  call ID, result, or event is duplicated.
- Left unadmitted: Plan 007 needs its own learning cycle after Plan 006's final
  owner decision.
- Checks before commit: pending rename, link, scope, and privacy scans.
- Known failures: none in this step.
- Current commit after this step: to be recorded after the Plan 007 commit.
- Exact next action: draw, render, and inspect Plan 006 architecture.

## Diagram inspection

- Completed: created `architecture.drawio` with three swimlanes (Canonical,
  Projections, Run Coordinator) plus optional `workflows.sqlite3` and recovery
  note. Identity hierarchy, ConversationItem, RunEvent, RelationshipMemory,
  WeaverOpinion, MemoryChange, ContextSnapshot, CompiledKnowledgeProjector,
  wiki path, and coordinator flow all match the decision document.
- Validation: `validate.py` returned 0 errors, 0 warnings.
- Preview: rendered via diagrams.net viewer at 2026-07-30 14:33 UTC.
- Repair: removed undocumented "pin" from MemoryChange box. Added "Crash
  during tool execution" scenario trace to the decision document.
- Checks before commit: validation, link scan, verification floor.
- Known failures: none.
- Current commit after this step: pending.
- Exact next action: run two independent reviews.

## Reviews

- Reviewer 1 (architecture/diagram correctness): passed all checks, zero
  blockers. Two notes: "pin" in diagram MemoryChange (fixed in repair),
  and "notebook and working brief" metaphor is decision-only framing
  (consistent, not a factual claim).
- Reviewer 2 (privacy/conversation behavior/scope): passed all checks, zero
  blockers. One note: crash during tool execution not explicitly traced
  (fixed in repair). Privacy scan clean; scope audit found zero runtime
  changes; `.pi-subagents/` is gitignored.
- Repair pass: both issues addressed. Rechecks pending.

## Final verification

Pending.

## Owner gate

Open. A passing candidate is not accepted until the owner records the final
decision in `decision.md`.
