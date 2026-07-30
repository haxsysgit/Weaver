# Review Ledger: Restart-safe conversation proof

## Review 1: Plan 006 deliverables audit

- Reviewer: fresh reviewer subagent
- Frozen candidate: `96e4faf` (Plan 007 implementation)
- Scope: 10 Plan 006 deliverables cross-referenced against source code
- Findings:
  1. `_update_turn_status` at `repository.py:129` references `turn.status` column
     that does not exist in `schema.py` — BLOCKER (dead code, runtime error if called).
  2. `architecture.svg` still referenced in Plan 006 README line 16; only `.png` exists — cosmetic.
  3. `SessionWeave`, `ItemRecord`, `RunRecord`, `EventRecord` implemented but not
     in Plan 006 "future interfaces" list — note for back-linking.
  4. Diagram elements (RelationshipMemory, WeaverOpinion, MemoryChange,
     ContextSnapshot, CompiledKnowledgeProjector) have no code representation —
     expected for architecture doc.
  5. All 7 rejected choices confirmed NOT implemented.
  6. All deferred items confirmed NOT implemented.
- Verdict: No blockers after corrections. One dead-code bug fixed.

## Review 2: Plan 007 implementation audit

- Reviewer: fresh reviewer subagent
- Frozen candidate: `96e4faf` (Plan 007 implementation)
- Scope: 6 Plan 007 deliverables vs. `src/weaver/conversation/` source
- Findings:
  1. G1 (BLOCKER): `_update_turn_status` references non-existent `turn.status` — fixed.
  2. G2: `UNIQUE(id, run_id)` in learning.md but absent from schema — reconciled.
  3. G3: `tool_call_id` does not double as PK per learning.md — reconciled.
  4. G4: `assembling`, `tool_call_pending` phases never used — reconciled.
  5. G5: `run_started`, `run_interrupted`, `item_settled` events never emitted — reconciled.
  6. G6: `turn.status` column claim — reconciled.
  7. G7: Transaction boundaries are correct across all 6 coordinator methods.
  8. G8: SessionWeave wiring correct (repo → coordinator → public API).
  9. G9: Subprocess restart proof is real (separate Python process via subprocess.run).
  10. G10: All run phases exercised in subprocess proof.
- Verdict: No blockers after corrections. All spec drift reconciled.

## Repair pass

Applied in commit `[this commit]`:
1. Removed `_update_turn_status` dead code from `repository.py`
2. Rewrote `learning.md` sections 1--10 to match actual implementation
3. Updated `rubric.md` with current evidence
4. Updated `results.md` with test counts and repair summary
5. Updated `review-ledger.md` (this file) with both reviews

## Recheck

- Review 1 recheck: TBD after commit
- Review 2 recheck: TBD after commit
