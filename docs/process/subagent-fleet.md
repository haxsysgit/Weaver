# Subagent fleet and orchestration playbook

Standing workflow for Weaver (checkpoint ritual, after every 10 plans).
**Harness-agnostic**: the roles, rules, and shapes below apply in any
harness that can spawn a subagent (pi, Claude Code, Codex, opencode,
others). Harness bindings live in the appendix — the contract never
changes because you switched tools.

The product of orchestration is context isolation: each subagent gets a
clean, purpose-built window and hands back only the summary the next
stage needs.

## Roles

The contract is the role, not the harness name. Define each role in
whatever file your harness uses for subagents (see appendix).

| Role | Job | Tool constraints | Verdict shape |
|---|---|---|---|
| Scout | Discovery: what exists, what's stale, what's missing | read-only | findings table |
| Researcher | Web/deep research with sources | read-only | findings + sources |
| Planner | Design/architecture from an approved brief | read-only | plan, not code |
| Worker | Implementation | write allowed (single writer per slice) | diff + test output |
| Reviewer | Independent verify against contract + runtime checks | read-only | pass \| fix + findings |
| Oracle | Adversarial edge-case check: concurrency, bad input, partial state | read-only | pass \| fix + findings |

## Rules

- One writer per worktree at a time; reviews are read-only and never edit.
- Every subagent starts blank: constraints (paths, contracts, house
  style) go in the task prompt, explicitly. A subagent cannot see the
  parent conversation.
- Verdicts are structured so the parent can branch mechanically;
  reviewers run the verify commands themselves.
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

## Appendix: expressing the fleet in each harness

The same six roles, named and constrained per harness. Where the harness
supports allowlists, enforce the tool constraints mechanically; where it
does not, state them in the task prompt.

### pi

Builtin agents: `scout`, `researcher`, `planner`, `worker`, `reviewer`,
`oracle` map 1:1 to the roles. Fresh-context isolation via
`context: "fresh"`; chains and parallel fan-out native; worktrees for
parallel writers; structured verdicts via `outputSchema` or prose
tables; acceptance levels up to `verified` (requires runtime verify
commands). Subagent id: `reviewer` (the registry does not include a
`code-review` agent).

### Claude Code

Custom subagents are Markdown files with YAML frontmatter:
`.claude/agents/<name>.md` (project) or `~/.claude/agents/<name>.md`
(user). `AGENTS.md` is not the subagent location.

```md
---
name: reviewer
description: Independent verify against contract + runtime checks
tools: Read, Grep, Glob, Bash
model: sonnet
---

Review the diff against the stated requirements. Run the verify
commands. Return pass|fix plus a findings table.
```

- `tools` is an allowlist; omit to inherit everything (including MCP).
  `disallowedTools` is the denylist; deny wins when both exist.
- `model`: `sonnet`, `opus`, `haiku`, a full model ID, or `inherit`
  (default). Resolution: `CLAUDE_CODE_SUBAGENT_MODEL` env → per-invocation
  override → frontmatter → main model.
- Restrict what a main-thread agent may spawn: `tools: Agent(worker,
  researcher), Read, Bash`. Subagents cannot spawn nested subagents.

### OpenAI Codex

- Layered instructions: `~/.codex/AGENTS.md` (global) + project
  `AGENTS.md` files from repo root to cwd; closer wins. This repo's
  `AGENTS.md` and `docs/process/` are the instruction source.
- Skills: a directory with `SKILL.md` (name + description) plus optional
  scripts/references/assets; invoked explicitly (`/skills`) or implicitly
  when a task matches. To make a role a skill, wrap this playbook's role
  section in a `SKILL.md`.
- Subagents: Codex runs specialized agents in parallel and aggregates,
  when explicitly requested or when AGENTS.md/skill instructions ask for
  delegation. Use parallel subagents for independent read-heavy work;
  coordinate write-heavy work cautiously (no parallel edits to
  overlapping files).

### opencode

- Primary agents delegate via the `Task` tool; invoke a subagent manually
  with `@agent-name`. Builtins: `general` (multi-step, full access),
  `explore` (read-only search), `scout` (read-only external research).
- Custom subagents: `.opencode/agents/<name>.md` (or user config) with
  `mode: subagent` and a `permission` block (`bash`, `read`, `edit`,
  `glob`, `grep`, `webfetch`, `task`, `websearch`).
- Spawn control: `permission.task` glob rules, e.g. allow `docs-writer`
  and `explore` but deny everything else; last matching rule wins.

### Any other harness

Name the roles in the task prompt (they are prose contracts): "You are
the reviewer. Read-only. Here are the diff and requirements. Return
pass|fix with a findings table." Isolation is the point — never inherit
the author's context for a critic.

## Sources

- Simon Willison, "Red/green TDD" (agentic engineering patterns)
- AgentsCamp, "Multi-Agent Orchestration"
- Addy Osmani, "The Code Agent Orchestra"
- AgentPatterns.ai, "Test-Driven Agent Development"
- Official docs, verified 2026-07-31: code.claude.com/docs/en/sub-agents,
  developers.openai.com/codex (AGENTS.md, skills, subagents),
  opencode.ai/docs/agents
