# TDD workflow for plan slices

The default way of doing code work in Weaver, from the checkpoint
ritual. **Harness-agnostic**: the loop is pure discipline — write the
test, watch it fail, implement, verify mechanically — and works identically
in any coding harness, with or without subagents. The critic step uses
whatever independent-review mechanism the harness provides (see
subagent-fleet.md). Test-first: the test is a contract the agent cannot
fake.

## The loop

1. **Red** — write the failing test that defines the required behavior.
   RUN it and record the failure. A test that passes before any code
   exists proves nothing (it may already pass against current behavior).
   Skipping red is a recorded failure, not a shortcut.
2. **Green** — implement the minimum code that makes the test pass.
   Never edit the test. The agent cannot quietly delete an assertion or
   write a test that validates its own broken logic — the test is owned
   first.
3. **Refactor** — clean up against the now-green suite.
4. **Mechanical gate** — ruff, focused tests, then the full suite. The
   machine has the last word: agents report success on code that does
   not compile.
5. **Critic** — a fresh-context independent review (see
   subagent-fleet.md) that sees the diff + requirements only, with
   structured verdicts and runtime verify commands. Any harness: spawn
   a read-only reviewer with the diff and the requirements, never the
   author's reasoning.
6. **Record** — outcomes and failures in the deliverable's results.md
   and review-ledger.md. Failures are evidence, not embarrassments.

## Anti-patterns (all recorded as failures)

- Skipping red (implement-then-test, or never confirming the fail)
- Editing the test to make it pass
- A test that passes against pre-existing behavior (never exercises the
  new code)
- Trusting the worker's report over the mechanical gate
- Reviewers inheriting the author's context (rubber-stamps the work)

## Sources

- Simon Willison, "Red/green TDD" (agentic engineering patterns)
- AgentsCamp, "TDD with AI Agents: Red-Green as an Agent Loop"
- AgentPatterns.ai, "Test-Driven Agent Development" / "Red-Green-Refactor with Agents"
