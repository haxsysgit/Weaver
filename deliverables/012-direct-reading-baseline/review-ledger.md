# Review Ledger: Lore graph build (Shadow Slave 1-100)

## Status

Review 1 (independent doc/contract review by Codex) complete 2026-08-03;
all findings fixed in commit `98ee0ef` (docs). Post-run Review 2 (graph
consistency) pending.

## Review 1: Plan and contract review (2026-08-03, Codex)

Verdict: not ready as written; the goal was endorsed. Eight findings, all
fixed:

1. **Learning gate crossed early.** The plan said the pilot awaited owner
   approval while results said chapter 1 was already read. Fixed: gate
   history recorded honestly (early pilot, accepted), every record now
   agrees.
2. **Records still described the old Flash-vs-Pro experiment.** README,
   rubric, review ledger, decision record, and plans/README rewritten to
   the lore-graph scope; superseded learning-note material removed.
3. **Required diagrams missing.** `architecture.drawio` and
   `architecture.svg` created, linked, validated, and rendered.
4. **Wrong agent identity.** Plan named "pi running as deepseek-v4-flash".
   Fixed: the contract names roles only (coordinator and graph writer; plot
   and causality reader; character and world-state reader; independent
   reviewer); harness and model bindings are recorded separately; the 1M
   and 272K context claims are marked owner-stated, unverified, and
   unnecessary for per-chapter reading.
5. **Contradictory commit instruction for the private method file.** Fixed:
   private `method.md` stays private; the committed evidence is a sanitized
   research summary with no story-derived content.
6. **No durable graph write contract.** Fixed: full write contract added
   (record types and required fields; append-only vs replacement; stable
   ids and aliases; confidence and verification; source chapter; atomic
   writes; per-chapter checkpoint records with source sha256; restart
   without duplicates; dangling/malformed detection).
7. **Reader independence unspecified.** Fixed: readers receive the same
   accepted-knowledge digest, analyse the current chapter independently,
   and never see each other's current-chapter conclusions before
   reconciliation.
8. **Invalid recovery instruction.** The plan said restore a modified novel
   file from git; git tracks zero files under `novels/` (verified). Fixed:
   recovery via known private backup or the admitted Plan 002 library
   tools; incident logged.

## Review 2: Graph consistency (post-run, pending)

- Reviewer: pending
- Frozen candidate: pending
- Findings: pending
- Verdict: pending
