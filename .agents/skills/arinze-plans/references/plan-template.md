# Plan Template

Copy this skeleton for every new numbered plan. Fill every section. Keep
the section order. `{{NAME}}` and `{{SLUG}}` are placeholders; the
scaffold script replaces them.

```markdown
# Plan {{NNN}}: {{Title}}

> **Executor instructions:** One or two sentences: what this plan does, in
> plain terms, and the one rule that governs how it must be run.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, ...).
- **State:** drafted / admitted / closed (one of the three).
- **Depends on:** plans that must be closed before this one, with reason.
- **Priority:** P1/P2/P3
- **Effort:** S/M/L
- **Risk:** Low/Medium/High (and why)
- **Budget:** estimated tokens + cost, fake vs live

## Owner direction (locked decisions)

1. One locked decision per numbered line, each with a date. These are
   recipes, not vague wishes: state exactly what must happen and what must
   not.

## Scope

- What this plan does, as concrete bullets. Enough that an executor with
  zero context can start.

## Out of scope

- What it explicitly does not do. Deferred items live in TODO_future.md;
  do not duplicate the backlog here.

## Deterministic proof / verification floor

1. Commands and checks that must pass before the plan can close. Numbered.
   Examples: `uv run pytest`, a checker, a grep guard, a fake-mode turn.

## STOP conditions

- When to stop and ask the owner instead of pushing on. Examples: scope
  change, a gate the owner must decide, a contradiction that cannot be
  reconciled, private content risking a commit.

## Slices

1. **Plan and admit** — this doc, learning gate, index rows, deliverable
   scaffold, admission commit.
2. ... one slice per execution step, in order. Each slice is closeable and
   reviewable on its own.
