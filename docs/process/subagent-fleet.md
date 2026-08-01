# Subagent fleet and orchestration playbook

Standing workflow for Weaver (checkpoint ritual, after every 10 plans).
Maps the fleet onto pi's builtin agents and the four research-backed
orchestration shapes. The product of orchestration is context isolation:
each subagent gets a clean, purpose-built window and hands back only the
summary the next stage needs.

## Roles

| Role | pi agent | Job |
|---|---|---|
| Scout | `scout` | Discovery: what exists, what's stale, what's missing. Read-only. |
| Researcher | `researcher` | Web/deep research with sources. Read-only. |
| Planner | `planner` | Design/architecture decisions from an approved brief. Read-only. |
| Worker | `worker` | Implementation. The single writer for its slice. |
| Reviewer | `reviewer` | Independent verify against the contract + runtime checks. Read-only. |
| Oracle | `oracle` | Adversarial edge-case check: what breaks under concurrency, bad input, partial state. Read-only. |

## Rules

- One writer per worktree at a time; reviews are read-only and never edit.
- Every subagent starts blank: constraints (paths, contracts, house
  style) go in the task prompt, explicitly. A subagent cannot see the
  parent conversation.
- Verdicts are structured (`pass | fix` + findings table) so the parent
  can branch mechanically; reviewers run the verify commands themselves.
- Persist durable facts to a file (results.md, review-ledger.md) —
  summaries drop detail over long runs.
- Close every non-trivial run with mechanical checks (pytest, ruff) and
  a fresh-context critic. Never trust a worker's own say-so.

## The four shapes

1. **Fan-out** — parallel independent slices, merge at the end. Parallelize
   reads and analysis freely; serialize writes to shared files.
2. **Pipeline** — ordered stages with narrowing: stage N+1 sees only stage
   N's artifact, never its transcript. Gate every boundary; error
   compounds down the chain.
3. **Orchestrator-worker** — one process owner (no edit tools), many
   interchangeable task workers. Only for dynamic decomposition.
4. **Verify/critic** — fresh-context adversarial check. The critic sees
   the diff + requirements only, never the author's reasoning. Combine
   with mechanical checks.

## When to promote from a single thread

Default is one sequential thread. Promote only when a shape clearly fits:

- independent slices -> fan-out
- ordered stages with clean hand-offs -> pipeline
- dynamic repeated decomposition -> orchestrator-worker
- anything you need to trust -> verify/critic

More agents is more coordination surface, not more capability. When the
coordination costs more than the slices, collapse back to one thread.

## Sources

- Simon Willison, "Red/green TDD" (agentic engineering patterns)
- AgentsCamp, "Multi-Agent Orchestration"
- Addy Osmani, "The Code Agent Orchestra"
- AgentPatterns.ai, "Test-Driven Agent Development"
