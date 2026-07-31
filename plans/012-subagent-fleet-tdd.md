# Plan 012: Subagent fleet, orchestration, and the TDD workflow

**Priority:** P1 · **Effort:** M · **Risk:** Low
**Depends on:** Plans 001-010 (walkthrough is the learning gate), pi-subagents runtime
**State:** Planned; learning gate required

## Contract

Weaver plans are executed by one agent with occasional reviewer fan-outs.
This plan codifies the standing alternative: a named fleet of subagent
roles, an orchestration playbook built on the four research-backed shapes
(fan-out, pipeline, orchestrator-worker, verify/critic), and a
red/green TDD loop as the default workflow for every future plan slice.
The proof is a pilot run of the fleet + TDD loop on a real slice.

1. Fleet: map each role to a pi builtin agent with a written job
   description, isolation rule (fresh context, constraints passed in the
   task prompt, structured verdict), and when-to-promote guidance.
   Roles: scout (discovery), researcher (web), planner (design),
   worker (implementation), reviewer (independent verify), oracle
   (adversarial edge-case check). One writer per worktree; reviews are
   read-only.
2. Orchestration playbook: the four shapes, when each fits, and the
   hand-off rules (narrow the input between stages, gate between
   pipeline stages, structured ship|fix verdicts from critics, close
   every run with mechanical checks).
3. TDD workflow: red (write the failing test, RUN it and record the
   failure) -> green (implement; never edit the test) -> refactor ->
   mechanical gate (ruff, focused tests, full suite) -> fresh-context
   critic review -> record. Tests are the spec; skipping red is a
   recorded failure, not a shortcut.
4. Pilot: apply fleet + TDD to one real slice (candidates: log turn
   separator, history-screen enter guard, picker q-close test) with the
   red phase recorded as evidence in results.md.
5. Every numbered plan keeps its own deliverables; this plan's docs
   (subagent-fleet.md, tdd-workflow.md) become the standing reference
   the plans/README links to.

## Learning gate (Slice 1)

- Walkthrough of plans 001-010: verify each plan's state, decision,
  deliverables, and the green suite floor; record gaps.
- Web research: red/green TDD for agents (Willison), multi-agent
  orchestration patterns (AgentsCamp), review-synthesis patterns; record
  sources and what changes in this repo.
- Commit: `plan 012: learning gate answers`.

## Slices

- Slice 1: learning gate answers (walkthrough + research) in
  deliverables/012/learning.md; owner confirms; commit.
- Slice 2: docs/subagent-fleet.md (roles, isolation rules, playbook,
  promotion guidance) + docs/tdd-workflow.md (red/green/refactor/gate/
  critic loop); commit `plan 012: fleet and TDD workflow`.
- Slice 3: pilot slice through the full loop with the red phase
  recorded; commit `plan 012: TDD pilot - <name>`.
- Slice 4: deliverables (results, rubric, review-ledger, architecture
  drawio+svg of the fleet and loop), plans/README row; commit
  `plan 012: deliverables and status recorded`.
- Two independent reviews with runtime verify commands; repair pass if
  needed; owner final decision recorded.

## Verification floor

- `uv run pytest -q` (223 baseline; pilot adds tests)
- `uv run ruff check src/weaver tests`
- fleet doc role mapping matches reality: `subagent { action: list }`
- TDD pilot evidence: red run output and green run output both recorded
- docs linked from plans/README.md

## STOP conditions

- pi builtin agents unavailable (subagent list fails)
- fleet doc recommends a pattern the runtime cannot express
  (fresh contexts, chains, parallel, structured verdicts)
- pilot slice has no genuine red phase
- Plan 010 not closed/paused by owner before slice 3 touches tui/

## Out of scope

- Changes to existing plans 001-011; new plan templates; model_layer
  changes; live model calls; corpus tools; TUI features beyond the pilot
  slice; persisting fleet state in the repo (docs only).
