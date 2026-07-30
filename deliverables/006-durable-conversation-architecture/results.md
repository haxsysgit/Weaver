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
- Current commit after this step: to be recorded after the decision commit.
- Exact next action: replace Plan 007 with the restart-safe proof.

## Plan 007 handoff

Pending.

## Diagram inspection

Pending.

## Reviews

Pending.

## Final verification

Pending.

## Owner gate

Open. A passing candidate is not accepted until the owner records the final
decision in `decision.md`.
