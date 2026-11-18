---
name: arinze-plans
description: Use when drafting, admitting, executing, or closing a numbered plan, planning a roadmap or plan order, scoping or rescheduling plans, deciding whether plans may run in parallel, or creating plan documents, deliverables, and status records in Arinze's projects.
---

# Arinze Plans

The numbered-plan system for Arinze's projects: every piece of work is one
numbered plan with a lifecycle, owner gates, deliverables, a budget, and a
roadmap slot. Work moves idea → drafted → admitted → closed. Sequence is
decided by dependency: a plan that uses another plan's output runs after it,
independent plans may run at the same time under guardrails they declare.

**The plan is the product (2026-11-18).** A drafted plan must be runnable by
an agent that never saw the session that wrote it, including a cheaper model.
That is the whole point of the two-model handoff: the expensive, capped model
(Claude Opus) thinks and drafts, the cheap, pay-as-you-go model (DeepSeek in
DSH) executes. A plan that needs the drafting conversation is broken.

## When to use

- Any work that gets a plan number: features, experiments, reading runs,
  deployment prep.
- Brainstorming a plan before it is drafted (discussion doc, see below).
- Roadmap and plan-order decisions (what comes next, what is deferred, what
  a renumbering changes).
- Creating or updating plan docs, status rows, deliverables, decision
  records.
- Deciding whether two plans may run at the same time, and what isolation
  they need.
- Version and release questions (which plan ships `vX.Y.Z`, what git does).

When NOT to use: small in-session fixes that follow the normal workflow
without a plan number; checkpoints and standing rituals (they are not
plans).

## The lifecycle

Learn → Analyze → Confirm → Hypothesis → Human gate → Build → Test → Use →
Inspect → Independent review → Human decision → Record.

Never advance past a learning or final decision gate automatically. Record
failures as evidence; no silent retries.

## The four states

- **idea**: brainstormed but not committed. Lives in `plans/discussion/`
  with a provisional number, no template, no deliverables, no budget, and
  no runner. Direction is allowed to be wrong here.
- **drafted**: the plan doc exists in `plans/` with its six deliverables in
  `deliverables/`, not yet approved. **The direction is frozen at this
  point** (see Amend or split).
- **admitted**: the owner approved it at the admission gate. The number is
  permanent from here. Implementation and review happen inside admitted;
  there are no separate states for them.
- **closed**: the owner recorded the final accept/reject decision;
  deliverables complete.

Caps (owner, 2026-11-18):

- **At most 3 plans in `drafted` at once.** The repo changes in every plan,
  so a plan drafted five plans ahead describes a repo that no longer exists.
  Example: the 2026-11-06 drafts of 037 to 040 in `handoff/plans/` were
  written before 034, 035 and 035.5 landed, so plans from 037 onward
  described a repo that had already moved. A fourth plan waits in discussion,
  where being stale costs nothing.
- **At most 2 plans running at once** (one per lane), and only under the
  guardrails below.
- Discussion docs are cheaper: at most 5 open.

Numberless plans (owner's call, e.g. "v1") go through the same states and
gates; the roadmap records them without a number. Prefer a decimal now;
numberless is for release-shaped plans the owner names himself.

## Discussion before draft

The pre-draft stage, and the reason `handoff/plans/` is retired
(2026-11-18).

- **Where:** `plans/discussion/NNN-slug.md`, created with
  `uv run python scripts/scaffold_plan.py NNN slug --discussion`, which
  makes the folder if it is missing.
- **Number:** provisional. It may move; the doc header says so.
- **Shape:** one short page. Status `idea`, the owner's direction, open
  questions, candidate directions, and what would have to be true to close
  them. No slices, no budget, no deliverables, no runner.
- **Freedom:** the doc is allowed to be wrong. Nothing runs from it.
- **Promotion:** `uv run python scripts/scaffold_plan.py NNN slug`, write
  the plan from the template using the discussion as notes, delete the
  discussion doc in the same commit. Git keeps the history.
- **Why the cap is on drafted plans and not here:** a stale discussion doc
  costs nothing; a stale drafted plan costs a drafting session, six
  deliverable files and a place in the roadmap.
- **The two-model handoff.** Discuss and draft with the expensive, capped
  model; execute with the cheap one. The discussion doc is where the
  expensive thinking is kept, so the executor never needs the Opus session.
- `handoff/plans/` (2026-11-06) stays as the record of one such handoff.
  New pre-draft work goes in `plans/discussion/`.

## Sequencing: what the number means

- Numbers are execution order. A reader follows how the project grew by them.
- **Sequential is required only along a declared dependency.** A plan that
  uses another plan's output (files, schema, engine, API, an accepted
  decision) runs after it. That is written in Status as `Depends on:`.
- **Independent plans may run at the same time**, in separate sessions or
  worktrees, when the plan says `Lane: parallel` and declares its write-set.
  Same-lane work is never concurrent.
- Default is one plan writing to the repo at a time. Concurrency is a
  declared property of a pair of plans, decided while drafting, never
  assumed mid-run (owner, 2026-11-18).
- Order is the owner's. The executor may propose a reorder; only the owner
  changes it.

## Plan numbers and order

Execution order is the thing to protect; a name is only as fixed as the
plan's state (owner, 2026-11-04).

- **Admitted and closed plans keep their number for good.** Commits,
  deliverables and logs point at it (`Plan 005: ...`,
  `deliverables/005-slug/`).
- **Idea and drafted plans may be renumbered** so the numbers keep matching
  execution order. Rename the file, the deliverables folder if it exists,
  and the index row together, and note the change in the index (old number,
  new number, date, the owner's words).
- **Never** renumber an admitted or closed plan, reuse a number, or leave a
  gap to fill later. If an admitted plan is dropped, close it as Rejected
  with the reason.

### Inserting work

1. **Decimal, preferred.** New work that must run after closed 033 and
   before drafted 034 becomes 033.5; if 033.5 already exists it becomes
   033.6, and work between the two becomes 033.55. Format: three-digit
   parent, a dot, then digits; folder `deliverables/033.5-slug/`; commit
   prefix `Plan 033.5: ...`. Nothing else moves, and a decimal plan is a full
   plan: same gates, deliverables and budget.
2. **Shift the drafted chain, only when the new work owns the next free slot
   and every plan after it is drafted, never admitted.** Renumber the drafts
   up by one, highest first, in one commit (`Plans: renumber drafted 037-039
   to 038-040`). Round numbers only.
3. Anything else waits in discussion.

Renumbering bookkeeping: fix forward references (`TODO_future.md`,
`HANDOFF.md`, the discussion doc, the plan's own `Depends on` lines), never
rewrite a closed record or decision, and let the index carry old → new with
the date. A renamed plan says "formerly 039.1" in its Status. Numbers sort
numerically: 33.5 < 33.51 < 33.55 < 33.6.

Worked example (owner's own, 2026-11-18): pull the web-hosting plan earlier
and let the drafted check-set plan take the freed number. Two legal shapes:

| Owner's call | Renamed | Execution order after |
| --- | --- | --- |
| Keep Echoes before infra | 039 → 038.5; 039.1 → 039 | 037 Soul Sea, 038 Echoes, 038.5 Hosting, 039 Check set, 040 |
| Infra before Echoes | 039 → 038; 038 → 038.5; 039.1 → 039 | 037 Soul Sea, 038 Hosting, 038.5 Echoes, 039 Check set, 040 |

Plan 034's decision says "check set moves to 039.1". That record stays as
written; the index notes 039.1 → 039 (2026-11-18).

## Gates

1. **Draft gate** (idea → drafted): the owner says draft it, or drafts it
   himself. Drafting is the commitment; the direction is fixed from here and
   the plan counts against the three-draft cap.
2. **Admission gate** (drafted → admitted): the owner approves the drafted
   plan. No work on the plan before this. Before asking, the executor
   **re-vets** the plan against the live checkout: re-read every file, path
   and line the plan names, update what moved, and set
   `Verified at: <commit sha>`. A plan whose assumptions moved is amended
   (slices only) or sent back to discussion.
3. **Learning gate**: for learning slices, the owner confirms the
   hypothesis and locked decisions before the expensive part.
4. **Final decision gate** (admitted → closed): the owner accepts or
   rejects; recorded in `deliverables/NNN-slug/decision.md` with date and
   reason.

Gate violations (all mean STOP and rewind):

- Starting implementation before admission
- Declaring a plan done without the owner's recorded decision
- Auto-advancing past a learning gate
- "The owner said yes to the idea, so the plan is admitted" (admission is
  per-plan)
- Closing a plan whose deliverables are incomplete
- Drafting a fourth plan while three are drafted
- Admitting a plan whose `Verified at` is behind HEAD and was not re-read
- Changing a drafted plan's goal instead of writing a successor
- Running two plans at once without a declared write-set

## Plan anatomy

Every plan doc has these sections, in order:

- **Status**:
  - state (drafted/admitted/closed)
  - tooling
  - depends on: the plans whose output this one uses, or "none"
  - lane: `single` or `parallel`, and when parallel, the **write-set** (the
    paths this plan may write)
  - priority, effort, risk
  - budget: tokens and cost, fake or live, and who executes
  - release: `none`, or `vX.Y.Z` when this plan ships a version
  - verified at: the commit sha the plan's file references were checked
    against (set by the re-vet before admission)
  - drafted in / executed in: which model and harness, so the two-model
    handoff and the budget are visible
- **Owner direction (locked decisions)**: what the owner decided, with
  dates; recipes, not vague wishes
- **Scope**: what this plan does
- **Out of scope**: what it explicitly does not do (deferred items live in
  the project's future/backlog doc)
- **Deterministic proof / verification floor**: commands and checks that
  must pass
- **STOP conditions**: when to stop and ask instead of pushing on
- **Slices**: the execution order, one step per numbered slice

**Self-contained is a hard rule.** The executor has not seen the drafting
session. No "as discussed", no unstated assumption, no reliance on this
conversation. Name files and lines. A cheaper model must be able to run it.

**Slices are the unit of work and of the commit.** A commit that closes one
slice reads `Plan NNN - Slice K: ...`; a cross-slice, gate or record commit
reads `Plan NNN: ...`.

Copy `references/plan-template.md` in this skill, or the repo's
`plans/_TEMPLATE.md` if present. Use the scaffold script if present
(`uv run python scripts/scaffold_plan.py NNN slug`), which creates the
plan doc and the deliverables set.

## Commits

Every commit starts with a prefix. Five are legal, nothing else is:

| Prefix | Use |
| --- | --- |
| `Plan NNN - Slice K: ...` | one slice's work (`Plan 033.5 - Slice 2: ...`) |
| `Plan NNN: ...` | cross-slice, gate, record and close commits |
| `Discussion NNN: ...` | a discussion doc |
| `Checkpoint MMM: ...` | the every-ten-plans ritual |
| `Plans: ...` | changes to this planning system itself |

Generic prefixes (`fix:`, `chore:`, `refactor:`, `feat:`) are never used in
plan-driven work. The prefix is the trace: any commit maps back to the plan,
and to the slice when one is named.

## Versions, releases and git

Three axes, never mixed:

- **Plan number**: execution order of work. Internal. Never a version, never
  in a package version, never in a public PR title.
- **Release version**: semver for readers (`v3.0.0`). Created only by a plan
  whose Status says `Release: vX.Y.Z`, and only when that plan closes
  accepted.
- **Git**: one branch and one worktree per lane, tags only per release.

Rules:

- Branch `plan/036-into-the-spell`. Merge to `main` in plan-number order; the
  plan that closes re-runs the floor on merged `main`.
- Tag annotated, `vX.Y.Z`, and the message names the plan
  (`Plan 040: v3.0.0`). **No plan, no tag.** A plan never bumps a version on
  its own; a release plan ships one.
- Major for a gate-level product change, minor for a feature the owner
  publishes, patch for a fix.
- A project with strict semver (a library) still runs plan numbers
  internally. Its release plan updates `CHANGELOG.md` at close, with the
  plan number as the cause of the entry.
- A new repo copies `plans/`, `plans/discussion/`,
  `scripts/scaffold_plan.py` and this skill. Plan numbers are per repo,
  versions are per repo, and numbers are never shared across repos. If
  nothing ships, `Release: none`.
- Weaver today: `v1.0.0` to `v2.0.0` are tagged, `v3.0.0` is Plan 040, and
  `main` does not auto-deploy.

## Budget awareness

Every plan carries a **Budget** in its Status block: estimated tokens and
cost, and whether it runs fake or live (model calls). Rules:

- Deterministic tests and fake-mode runs before any live call
- Live access is explicit; never fall back silently between fake and live
- Subagent fleets multiply cost: the budget estimates the whole fleet, not
  one agent
- The drafting session is spend too: the discussion and the draft cost the
  expensive model's allowance, so they belong in the estimate
- On a tight budget, run sequential and solo. Subagents are the default
  executor where available; solo is the fallback, not the other way around

## Cache-hit doctrine

Plan executors are agents (Claude Code on Opus, DSH on deepseek-flash,
codex, cursor, ...), and the executing agent's own model IS billed to the
provider: per token on DeepSeek, against a capped allowance on Claude.
**Agent-executed does not mean free; it means the cost is the agent's
context, and it must be budgeted and measured like any other live spend.**
Every plan's Budget must say which kind of usage each slice has, with an
estimate, and close with the measured number the harness records.

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

Default: one plan writing to a repo at a time. Concurrency is declared
while drafting, never discovered mid-run.

Two plans may run at once when **all** of these hold:

1. **Declared write-sets, disjoint.** Each plan lists the paths it may
   write under `Lane: parallel`. Any overlap means serialize. If the
   write-set cannot be stated as paths, the lane is not parallel.
2. **Shared files are gate-moment only.** `plans/README.md`,
   `TODO_future.md`, `HANDOFF.md`, `AGENTS.md`, `.agents/skills/*`,
   lockfiles, migrations and route registries are written only by the plan
   that owns that gate moment, never by a lane mid-run.
3. **Isolation per lane.** Its own git worktree, its own port, its own data
   paths. For Weaver specifically: one Qdrant path and one server per lane,
   because the store holds a lock.
4. **Gates stay per plan.** Two lanes still mean two admissions and two
   final decisions, each recorded on its own plan.
5. **Merge in number order.** The later lane rebases on merged `main` and
   re-runs the full floor before its own close. Green before merge is not
   green after.
6. **Budget cap.** Concurrent budgets sum; the owner sets the cap; over it,
   one lane waits.

Same-lane work (both plans touch the same tree) is never parallel. A plan
that cannot say what it owns is sequential.

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
An `idea` has no deliverables: its discussion doc is the whole record.

## Index and roadmap

- `plans/README.md`: one row per plan (number, status, depends-on, scope),
  in execution order with decimal plans in place. Status uses the four
  states: an idea row reads `Idea (provisional)` and links its discussion
  doc; `Drafted`, `Admitted`, `Closed` carry the date. Renumbered plans are
  noted there (see Plan numbers and order).
- The future/backlog doc (TODO_future.md): the roadmap (plan order),
  deferred items, standing series. Owner-set; update when the owner
  changes the order.
- The index is written only at gate moments (idea opened, draft, admit,
  close, rename) by the person or agent who owns that moment. A running
  lane never edits it.
- At most one plan is running per lane; see Sequencing and the lane
  guardrails.

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

Drafting freezes the direction (owner, 2026-11-18). After that:

- **Slices may be added** inside the plan while the goal is unchanged.
  Record the addition in the plan and in `learning.md` with its date.
- **The goal may not change.** A direction change means a successor plan:
  the current one closes, accepted or rejected, and the successor states
  what it inherits.

When the owner changes a plan's direction mid-flight, record the amendment
with its date in `learning.md`. If the change alters the plan's goal, or
adds more than a slice's worth of new work, propose a successor plan instead
of growing the current one. Plan 030 grew from seven checkpoints to 55
commits (a voice rewrite, a trial contract rewrite, a UI redesign) and
closed with a scope cut. That is the failure this rule exists to stop.

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
2. A tag exists only if this plan's Status says `Release: vX.Y.Z`. If it
   does not, the plan closes with no tag and no version bump.
3. The owner chooses: release only, or release and deploy.
4. Audit staged files for secrets and private text.
5. Update `HANDOFF.md` and `TODO_future.md`.
6. If the next plan crosses a 10-plan boundary, the checkpoint is next.

## Common mistakes

| Mistake | Fix |
|---|---|
| Drafting far ahead of execution | At most 3 drafted; brainstorm in `plans/discussion/` until then |
| A plan written for the session that drafted it | Self-contained: name files, paths and lines; a cheaper model must run it |
| Admitting a plan written against an older repo | Re-vet against HEAD before the gate; set `Verified at` |
| Growing a drafted plan's goal | Slices may be added; a new goal is a successor plan |
| Status drift ("implementing", "review" mixed in) | Only idea / drafted / admitted / closed |
| Plan doc written from memory | Copy the template, fill every section |
| Parallel plans sharing files | Declared write-sets; any overlap serializes |
| Both lanes editing the index or roadmap | Gate moments only, by the plan that owns them |
| Reusing a number, or renumbering an admitted plan | Decimal insert; shift drafts only, highest first |
| A plan bumping a version by itself | Release plan ships `vX.Y.Z`; no plan, no tag |
| Budget only counts the orchestrator | Count the fleet (subagents) and the drafting session |
| Decision recorded without date/reason | decision.md: status, date, reason |
| Checkpoint missing from a close-out sequence | List it before plan N1, every time |
| Assuming a merge deploys (or doesn't) | Read plan status and workflow state first |
| A full build of a guessed look or voice | Show a small sample first |
| Tuning until a held-out set passes | Stop when failures move; use the real gate |
