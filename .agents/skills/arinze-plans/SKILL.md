---
name: arinze-plans
description: Use when drafting, admitting, executing, or closing a numbered plan, planning a roadmap or plan order, scoping or rescheduling plans, deciding whether plans may run in parallel, or creating plan documents, deliverables, and status records in Arinze's projects.
---

# Arinze Plans

The numbered-plan system for Arinze's projects: every piece of work is one
numbered plan with a lifecycle, owner gates, deliverables, a budget, and a
roadmap slot. Default is one plan at a time; parallel only under the rules
below.

## When to use

- Any work that gets a plan number: features, experiments, reading runs,
  deployment prep.
- Roadmap and plan-order decisions (what comes next, what is deferred).
- Creating or updating plan docs, status rows, deliverables, decision
  records.
- Checking whether two plans can run in parallel.

When NOT to use: small in-session fixes that follow the normal workflow
without a plan number; checkpoints and standing rituals (they are not
plans).

## The lifecycle

Learn → Analyze → Confirm → Hypothesis → Human gate → Build → Test → Use →
Inspect → Independent review → Human decision → Record.

Never advance past a learning or final decision gate automatically. Record
failures as evidence; no silent retries.

## Status ladder (three states)

- **drafted**: the plan doc exists, not yet approved
- **admitted**: the owner approved it; implementation and review happen
  here, no separate states
- **closed**: the owner recorded the final accept/reject decision;
  deliverables complete

Numberless plans (owner's call, e.g. "v1") go through the same ladder and
gates; the roadmap records them without a number.

## Gates

1. **Admission gate** (drafted → admitted): the owner approves the drafted
   plan. No work on the plan before this.
2. **Learning gate**: for learning slices, the owner confirms the
   hypothesis and locked decisions before the expensive part.
3. **Final decision gate** (admitted → closed): the owner accepts or
   rejects; recorded in `deliverables/NNN-slug/decision.md` with date and
   reason.

Gate violations (all mean STOP and rewind):

- Starting implementation before admission
- Declaring a plan done without the owner's recorded decision
- Auto-advancing past a learning gate
- "The owner said yes to the idea, so the plan is admitted" (admission is
  per-plan)
- Closing a plan whose deliverables are incomplete

## Plan anatomy

Every plan doc has these sections, in order:

- **Status**: state (drafted/admitted/closed), tooling, depends-on,
  priority, effort, risk, budget
- **Owner direction (locked decisions)**: what the owner decided, with
  dates; recipes, not vague wishes
- **Scope**: what this plan does
- **Out of scope**: what it explicitly does not do (deferred items live in
  the project's future/backlog doc)
- **Deterministic proof / verification floor**: commands and checks that
  must pass
- **STOP conditions**: when to stop and ask instead of pushing on
- **Slices**: the execution order, one step per numbered slice

Copy `references/plan-template.md` in this skill, or the repo's
`plans/_TEMPLATE.md` if present. Use the scaffold script if present
(`uv run python scripts/scaffold_plan.py NNN slug`), which creates the
plan doc and the deliverables set.

## Commits

Every commit message starts with the plan prefix: `Plan NNN: ...`
(for numberless plans: `Plan v1: ...`). No other prefix is acceptable;
generic prefixes (`fix:`, `chore:`, `refactor:`, `feat:`) are never used
in plan-driven work. The prefix is the trace: any commit can be mapped
back to the plan that produced it.

## Budget awareness

Every plan carries a **Budget** in its Status block: estimated tokens and
cost, and whether it runs fake or live (model calls). Rules:

- Deterministic tests and fake-mode runs before any live call
- Live access is explicit; never fall back silently between fake and live
- Subagent fleets multiply cost: the budget estimates the whole fleet, not
  one agent
- On a tight budget, run sequential and solo. Subagents are the default
  executor where available; solo is the fallback, not the other way around

## Parallel and sequential plans

Default: sequential. One plan in flight at a time.

Parallel is opt-in by the owner, and only under all four rules:

1. **Disjoint files**: parallel plans never write the same file or area.
   Shared index files (plans/README.md, the future/backlog doc, roadmap)
   are updated only at admit/close moments by the plan that owns that
   moment, never mid-plan.
2. **Serial gates**: the owner decides one admission and one final decision
   at a time. A parallel plan waits at its gate.
3. **Budget cap**: parallel plans sum their budgets; the owner sets the
   concurrent spend cap; over the cap, plans queue.
4. **One writer per file**: if two plans want the same area, they do not go
   parallel; one waits until the other closes.

Same-lane work (both touch the same tree) is never parallel.

## Deliverables

`deliverables/NNN-slug/` holds:

- `plan.md` (pointer to the canonical plan)
- `README.md` (file table with current state)
- `learning.md` (owner-confirmed decisions + gate status)
- `results.md` (deterministic observations and commands)
- `review-ledger.md` (independent findings, repairs, rechecks)
- `decision.md` (final accept/reject: status, date, reason)

Rules: no private prose, chats, credentials, receipts, generated
knowledge, or raw model reasoning. Checkers validate shape, never content;
the record is wrong if it contradicts the source, not the other way around.

## Index and roadmap

- `plans/README.md`: one row per plan (number, status, depends-on, scope).
  Status uses the three-state ladder.
- The future/backlog doc (TODO_future.md): the roadmap (plan order),
  deferred items, standing series. Owner-set; update when the owner
  changes the order.
- One plan may be active at a time unless the parallel rules apply.

## Checkpoints

Every 10 plans (010→011, 020→021, ...), and after architecture-level
plans (for example a pre-v1 or v1 plan): before the next plan, walk the
last plans, update method knowledge from the web, codify what changed in
the process docs, prove it with one real slice. Standing ritual: no plan
number, no decision gate.

## Common mistakes

| Mistake | Fix |
|---|---|
| Drafting the next plan while one is in flight | Finish and close the current plan first |
| Status drift ("implementing", "review" mixed in) | Only drafted / admitted / closed |
| Plan doc written from memory | Copy the template, fill every section |
| Parallel plans sharing files | Serialize; one waits for close |
| Budget only counts the orchestrator | Count the fleet (subagents) |
| Decision recorded without date/reason | decision.md: status, date, reason |
