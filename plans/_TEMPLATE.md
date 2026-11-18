# Plan {{NNN}}: {{Title}}

> **Executor instructions:** One or two sentences: what this plan does, in
> plain terms, and the one rule that governs how it must be run. Write it
> for an agent that never saw the drafting session: name files and lines,
> assume no shared context, no "as discussed".

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check).
- **State:** drafted (awaiting owner admission).
- **Depends on:** plans that must be closed before this one, with reason;
  write `none` when independent.
- **Lane:** single. When parallel, the write-set as the paths this plan may
  write, plus its own worktree, port and data paths.
- **Priority:** P1/P2/P3
- **Effort:** S/M/L
- **Risk:** Low/Medium/High (and why)
- **Budget:** estimated tokens + cost, fake vs live; who executes.
- **Release:** none, or `vX.Y.Z` if this plan ships a version.
- **Verified at:** commit sha the plan's file references were checked
  against; `pending` until the re-vet before admission.
- **Drafted in / executed in:** model and harness, for example
  `Claude Code (Opus 5.5)` / `DSH (deepseek-flash)`.

## Owner direction (locked decisions)

1. One locked decision per numbered line, each with a date. Recipes, not
   vague wishes.

## Scope

- What this plan does, as concrete bullets.

## Out of scope

- What it explicitly does not do. Deferred items live in TODO_future.md.

## Deterministic proof / verification floor

1. Commands and checks that must pass before the plan can close.

## STOP conditions

- When to stop and ask the owner instead of pushing on.

## Slices

1. **Plan and admit** — this doc, learning gate, index rows, deliverable
   scaffold, admission commit.
2. ... one slice per execution step, in order. Voice, visual, and motion
   slices show the owner a small sample before the full build.
3. **Close** — measured budget in results.md, owner decision in
   decision.md, plan status and deploy state read before any merge, tag,
   or deploy, HANDOFF and TODO_future updated. If the next plan crosses a
   10-plan boundary, the checkpoint comes next.
