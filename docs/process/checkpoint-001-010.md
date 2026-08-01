# Checkpoint 001-010 (2026-07-31)

Ritual run after plans 001-010, before plan 011. See checkpoints.md.

## 1. Walkthrough of plans 001-010

Verified against the live repo (HEAD `3789d00` at walkthrough time, full
suite 223 passed):

| Plan | State | Owner decision | Deliverables |
|---|---|---|---|
| 001 experimental-foundation | Accepted 2026-07-29 | Accepted | full set |
| 002 trusted shadow-slave library | Accepted 2026-07-30 | Accepted | full set |
| 003 preserve-tool-protocol | Accepted and closed | Accepted | full set |
| 004 cancellation-and-side-effects | Accepted and closed | Accepted | full set |
| 005 provider-tool-contract | Accepted 2026-07-30 | Accepted | full set |
| 006 durable-conversation-architecture | Accepted | Accepted | full set + research docs |
| 007 restart-safe-conversation-proof | Implemented + repair | Accepted | full set (no diagram; contract did not demand one) |
| 007.5 audit-repair | Working plan | — | no deliverable set (working plan) |
| 008 wire-conversation-loop | Accepted, pushed d6bf9f8 | Accepted | full set |
| 009 context-assembler | Accepted, pushed 39899bd | Accepted | full set |
| 010 tui-entrypoint | Accepted; reopened for UI sharpening; phases A-D accepted; label cleanup at HEAD | Accepted + phase addenda | full set incl. analysis + deep-dive |

Gaps: none blocking. plans/README rows match plan states.

## 2. Knowledge update (web research)

Sources: Simon Willison "Red/green TDD"; AgentsCamp "Multi-Agent
Orchestration" and "TDD with AI Agents: Red-Green as an Agent Loop";
AgentPatterns.ai "Test-Driven Agent Development"; Addy Osmani "The Code
Agent Orchestra".

What we took from it:

- **Red/green TDD**: write the test, confirm it fails (red), implement
  until green, never edit the test. Skipping red risks a test that
  already passes. The test is a contract the agent cannot fake.
- **Context isolation is the product**: subagents get clean windows and
  return summaries; constraints go in the task prompt; two agents
  agreeing from separate contexts is real corroboration.
- **Four shapes**: fan-out (parallel independent), pipeline (ordered
  with narrowing and gates), orchestrator-worker (process owner, no edit
  tools), verify/critic (fresh-context, structured ship|fix). Default to
  one thread; promote only when a shape fits.
- **Mechanical checks close every run** — agents report success on code
  that doesn't compile.

What changed in this repo: we already ran the verify/critic shape
(fresh-context reviews with runtime verify commands) and pipeline gates
(learning gate -> build -> review -> owner gate). New: test-first
discipline with recorded red runs for future slices, the fleet role map
onto pi's builtin agents, and promotion guidance. The docs were
generalized to be harness-agnostic right after this checkpoint (roles
are the contract; pi, Claude Code, Codex, and opencode bindings live in
the appendix of subagent-fleet.md). See subagent-fleet.md and
tdd-workflow.md.

## 3. Codified

- `docs/process/subagent-fleet.md` — roles, isolation rules, playbook.
- `docs/process/tdd-workflow.md` — the red/green/refactor/gate/critic loop.
- `docs/process/checkpoints.md` — the ritual itself.

## 4. Proof run: turn separator (TDD red -> green)

Feature: with speaker labels gone, consecutive turns blur together. A
dim separator line opens each turn so turns read as blocks.

- **Red**: `test_pilot_turn_separator_between_turns` written first —
  FAILED with `ImportError: cannot import name 'TURN_SEPARATOR'`
  (the feature did not exist).
- **Green**: `TURN_SEPARATOR = "────"` added to widgets.py; the
  separator is logged before each user line in app.py. Test passes.
- **Mechanical gate**: `tests/test_tui_widgets.py` 22 passed; full suite
  224 passed; ruff clean.
- Verdict: the loop works in this repo; it is now the standing workflow.
