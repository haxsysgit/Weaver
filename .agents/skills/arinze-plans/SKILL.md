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

## Cache-hit doctrine

Plan executors are agents (pi, codex, claude code, cursor, ...), and
the executing agent's own model IS billed to the provider — pi runs on
the DeepSeek API with the owner's key. **Agent-executed does not mean
free; it means the cost is the agent's context, and it must be
budgeted and measured like any other live spend.** Every plan's Budget
must say which kind of usage each slice has, with an estimate, and
close with the measured number (pi session files record per-call
usage + cost).

1. **Agent-context work** — the default. The agent does the work in
   its own context; the provider bills every call. Rules:
   - Deterministic prep first: grep / digest / extract locally BEFORE
     the agent reads raw source. Feed digests, not whole corpora —
     context is the cost.
   - Stable shared instructions: identical system/standard block first;
     only the per-request payload varies. Keeps the agent's context
     reusable across a batch (cache hits are ~50x cheaper than misses).
   - Batch same-type work in one session; don't spread one batch over
     days (provider caches live hours-to-days).
   - Measure per slice: read the run's usage block (input / output /
     cacheRead / cost) and record it in results.md. Verified scale
     from the 019 reading: ~$0.01-0.05 per 10-chapter agent batch on
     deepseek-v4-flash (now the retired alias of `deepseek-flash`; price
     tables are dated and expire, so re-check before a live batch).

2. **Agent-executed, live via the product's own harness (weaver)** —
   the agent calls the provider THROUGH the product's harness: tool
   calling, context engine, receipts, scope boundary. The key goes to
   the agent, never to a raw request. This is how reading runs and
   evals work. Same cache rules as above:
   - Byte-identical shared prefix from token 0; dynamic content after.
   - Record `prompt_cache_hit_tokens` / `prompt_cache_miss_tokens`
     (or provider equivalent) in receipts; prove the hit rate.
   - Check billing windows: peak/off-peak and scheduled price changes
     move the numbers; the Budget states the assumed window.

3. **Direct raw API (measurement-only, rarely justified)** — a bare
   request with no agent harness. Legitimate ONLY when the agent would
   mask what is being measured (e.g. an eval that isolates retrieval
   quality, where agent tool use papers over index gaps). Never a
   product path; if a plan proposes it, say why the agent cannot do
   the job. Default: everything goes through agents.

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

- **It is a step in every sequence that crosses a boundary.** When a
  close-out, roadmap, or handoff lists what comes after plan N0, the
  checkpoint is listed before plan N1. The owner should never have to
  remind the executor (forgotten at 030→031).
- **Walk:** read each plan's `decision.md` and `learning.md`, plus the git
  log by prefix. Look for repeats: owner rejections, reverts, regressions,
  process slips, methods that worked.
- **Web refresh:** only on methods the walk flagged. Primary sources; cite
  them in the record.
- **Codify:** edit this skill, `AGENTS.md`, and the plan template. Fix
  stale facts (model names, prices) found on the way.
- **Prove:** one real slice of product work that uses a codified method
  and lands a real change, test-first.
- **Record:** `docs/checkpoints/NNN-MMM.md` (walk, sources, what changed,
  the proof). Commits use the prefix `Checkpoint MMM: ...`, where MMM is
  the last closed plan (for example `Checkpoint 030:`).

## Show before build

Voice, visual, and motion work is shown to the owner as a small sample
before it is built at full scale: two or three example answers, one
screenshot, one short clip. Evidence from 021-030: the fully built Plan
024 prototype, the Plan 026 geometric mask, the Plan 029 witness voice,
and the Plan 030 essay voice and loaders were all rejected after the
build. The Plan 029 answer shapes, accepted from five short examples
first, held.

## Amend or split

When the owner changes a plan's direction mid-flight, record the
amendment with its date in `learning.md`. If the change alters the plan's
goal, or adds more than one checkpoint, propose a successor plan instead
of growing the current one. Plan 030 grew from seven checkpoints to 55
commits (a voice rewrite, a trial contract rewrite, a UI redesign) and
closed with a scope cut.

## Live evaluation (model-backed trials)

- **Clean state per trial:** a fresh device or session, and its own
  process when the store holds a lock. Leftover state makes failures
  correlated and scores flattering.
- **Meter from token usage** at the dated price table, with a hard cap
  checked before each call. A provider balance can lag for hours.
- **Read the transcripts.** An exit code or a checker PASS is not a
  verdict. Verify quotes against the source automatically where possible.
- **Re-run the full suite after any fix to a shared path** (prompt,
  answer checks, router). Targeted fixes for one trial broke another in
  Plan 030.
- **One pass is one sample.** A claim of consistency needs repeated runs
  (pass^k: every one of k runs passes). Say how many runs back a verdict.
- **Stop tuning when failures move between runs.** That is overfitting
  the diagnostic set; keep it held out and move to the real gate.
- **Turn real failures into regression cases** (deterministic where the
  failure allows it).

## Close-out and release

Before any merge to `main`, tag, release, or deploy:

1. Read the current plan's status and the deploy workflow's state. Never
   assume `main` auto-deploys (it was disabled at 030 close).
2. The owner chooses: release only, or release and deploy.
3. Audit staged files for secrets and private text.
4. Update `HANDOFF.md` and `TODO_future.md`.
5. If the next plan crosses a 10-plan boundary, the checkpoint is next.

## Common mistakes

| Mistake | Fix |
|---|---|
| Drafting the next plan while one is in flight | Finish and close the current plan first |
| Status drift ("implementing", "review" mixed in) | Only drafted / admitted / closed |
| Plan doc written from memory | Copy the template, fill every section |
| Parallel plans sharing files | Serialize; one waits for close |
| Budget only counts the orchestrator | Count the fleet (subagents) |
| Decision recorded without date/reason | decision.md: status, date, reason |
| Checkpoint missing from a close-out sequence | List it before plan N1, every time |
| Assuming a merge deploys (or doesn't) | Read plan status and workflow state first |
| A full build of a guessed look or voice | Show a small sample first |
| Tuning until a held-out set passes | Stop when failures move; use the real gate |
