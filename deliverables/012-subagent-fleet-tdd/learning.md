# Plan 012 — Learning gate

**Gate status:** Unadmitted. Owner confirmation required before implementation.
**Date:** 2026-07-31

## 1. Plans 001–010 walkthrough

Verified against the live repo (2026-07-31, HEAD `3789d00`, full suite 223 passed):

| Plan | State | Owner decision | Deliverables |
|---|---|---|---|
| 001 experimental-foundation | Accepted 2026-07-29 | Accepted | full set incl. architecture.png |
| 002 trusted shadow-slave library | Accepted 2026-07-30 | Accepted | full set |
| 003 preserve-tool-protocol | Accepted and closed | Accepted | full set |
| 004 cancellation-and-side-effects | Accepted and closed | Accepted | full set |
| 005 provider-tool-contract | Accepted 2026-07-30 | Accepted | full set |
| 006 durable-conversation-architecture | Accepted | Accepted | full set + research docs |
| 007 restart-safe-conversation-proof | Implemented + repair | Accepted | full set (no diagram; audited) |
| 007.5 audit-repair | Working plan, no deliverables dir | — | not a numbered deliverable plan |
| 008 wire-conversation-loop | Accepted, pushed d6bf9f8 | Accepted | full set |
| 009 context-assembler | Accepted, pushed 39899bd | Accepted | full set |
| 010 tui-entrypoint | Accepted; reopened for UI sharpening; phases A–D accepted; phase C landed; label fix HEAD | Accepted (+ phase addenda) | full set incl. analysis + deep-dive |
| 011 direct-reading-baseline | Planned; learning gate required | — | placeholder deliverable set |

Gaps found: none blocking. Plan 007's deliverables lack a diagram (it was
a proof plan; its contract did not demand one). Plan 007.5 has no
deliverable set (working plan). Everything else has accepted decisions
recorded, results/rubric/ledger present, and the aggregate test floor
(223) green at walkthrough time. Plans/README.md rows match plan states.

## 2. Web research: TDD and orchestration for coding agents

Sources (fetched 2026-07-31):

1. Simon Willison, "Red/green TDD" (agentic-engineering-patterns) —
   https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/
2. AgentsCamp, "Multi-Agent Orchestration" —
   https://agentscamp.com/guides/advanced/multi-agent-orchestration
3. AgentsCamp, "TDD with AI Agents: Red-Green as an Agent Loop" —
   https://agentscamp.com/guides/testing/tdd-with-ai-agents
4. AgentPatterns.ai, "Test-Driven Agent Development" / "Red-Green-Refactor
   with Agents" — https://agentpatterns.ai/verification/tdd-agent-development/
5. Addy Osmani, "The Code Agent Orchestra" —
   https://addyosmani.com/blog/code-agent-orchestra/

### What I understood (TDD)

- The most disciplined form is test-first: write the test, **confirm it
  fails** (the red phase), then implement until green. Skipping red risks
  a test that already passes and never exercises the new code — that
  failure mode is called out by every source.
- For agents the test is a contract the agent cannot fake: the agent
  cannot quietly delete an assertion or write a test that validates its
  own broken logic, because the test is written (and owned) first.
- The loop is red → green → refactor, run as **separate invocations**
  with distinct instructions and exit conditions; the implementer never
  edits the test.
- Close the loop with mechanical checks (build, lint, tests) — agents
  report success on code that doesn't compile, so the machine must have
  the last word.

### What I understood (orchestration)

- Multi-agent orchestration buys one thing: **context isolation**. Each
  subagent gets a clean, purpose-built window and returns only a summary;
  a reviewer that sees only the diff and a checklist can't be distracted
  by implementation chatter, and two agents agreeing from separate
  contexts is genuine corroboration.
- Four shapes, chosen from the work:
  1. **Fan-out** — parallel independent slices; merge at the end;
     parallelize reads, serialize writes to shared files.
  2. **Pipeline** — ordered stages with **narrowing** between them (stage
     N+1 sees only stage N's artifact, not its transcript); gate every
     boundary because error compounds down the chain.
  3. **Orchestrator-worker** — one process owner (no edit tools), many
     interchangeable task workers; only for dynamic decomposition.
  4. **Verify/critic** — fresh-context adversarial check with a
     structured `ship | fix` verdict; the critic must never see the
     author's reasoning; combine with mechanical checks.
- Constraints must be written into every task prompt — a subagent cannot
  see the parent conversation. Persist durable facts to a file because
  summaries drop detail over long runs.
- Default to a single thread; promote only when a pattern clearly fits.
  "More agents" is more coordination surface, not more capability.

### What changes in this repo

- Weaver already runs the verify/critic shape (fresh-context independent
  reviews with runtime verify commands, structured verdicts in the
  review ledger) and pipeline stages (learning gate → build → review →
  owner gate). Plan 012 codifies this as the standing workflow, adds the
  missing red/green discipline (test-first with recorded red runs) and
  the fleet role map onto pi's builtin agents (scout, researcher,
  planner, worker, reviewer, oracle), plus the promotion guidance so we
  stop defaulting to single-thread when a fan-out or critic clearly fits.
- The TDD loop becomes the required workflow for future plan slices:
  red run recorded → green → mechanical gate → critic → owner.

## Open questions for the owner

1. Pilot slice choice: log turn separator (visible change, addresses the
   "TUI looks the same" complaint), or a pure test contract (history
   screen enter guard)? Default: turn separator.
2. Should the fleet docs live under docs/ (public repo) or .agents/
   (private)? Default: docs/ — they are workflow, not secrets.
