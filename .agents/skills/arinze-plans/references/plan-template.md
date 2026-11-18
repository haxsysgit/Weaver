# Plan Template

Copy this skeleton for every new numbered plan. Fill every section. Keep
the section order. `{{NAME}}` and `{{SLUG}}` are placeholders; the
scaffold script replaces them.

```markdown
# Plan {{NNN}}: {{Title}}

> **Executor instructions:** One or two sentences: what this plan does, in
> plain terms, and the one rule that governs how it must be run. Written for
> an agent that never saw the drafting session.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, ...).
- **State:** drafted / admitted / closed (one of the three; `idea` lives in
  `plans/discussion/` and never reaches this template).
- **Depends on:** plans whose output this one uses, with reason; `none` when
  independent.
- **Lane:** `single`, or `parallel` plus the write-set (paths this plan may
  write), worktree, port and data paths.
- **Priority:** P1/P2/P3
- **Effort:** S/M/L
- **Risk:** Low/Medium/High (and why)
- **Budget:** estimated tokens + cost, fake vs live; who executes.
- **Release:** `none`, or `vX.Y.Z` when this plan ships a version.
- **Verified at:** commit sha the file references were checked against;
  `pending` until the re-vet before admission.
- **Drafted in / executed in:** model and harness.

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
   reviewable on its own. Voice, visual, and motion slices show the owner a
   small sample before the full build.
3. **Close** — measured budget in results.md, owner decision in
   decision.md, plan status and deploy state read before any merge, tag,
   or deploy, HANDOFF and TODO_future updated. If the next plan crosses a
   10-plan boundary, the checkpoint comes next.
