# Plan 030 Learning Note

## Gate status

**Admitted 2026-10-17.** Plans 028 (closed 2026-10-02) and 029 (closed
2026-10-17) are owner-accepted. Side UI Plan 029.5 is not admitted and does
not block. The 2026-10-17 read-only audit is complete in
[`draft-audit.md`](draft-audit.md). It is audit evidence, not an independent
review and not an acceptance decision. Checkpoint cadence and the local access
path are pending owner decisions at the checkpoint 1 gate.

## Owner-confirmed direction

- Plan 030 is the final qualification, rollout, and launch plan for v2.0.0.
- Weaver remains DeepSeek-only for this release.
- Normal readers use the owner-funded shared daily allowance. Optional direct
  DeepSeek BYOK remains under Advanced.
- The Plan 028 starting limits are three sponsored questions per reader per
  UTC day, one active turn, a $1 global daily ceiling, and a manually funded
  $10 wallet.
- Production limits may change only after complete-turn measurement and owner
  approval.
- Accounts, subscriptions, reader payments, donations, ads, automatic top-up,
  and silent model fallback remain out.
- The current EC2, Compose, GitHub Actions SSH, and Funnel path remains the
  default release path, with the bounded pipeline repairs listed in the plan.
- The owner alone accepts the allowance, Reader Trials, launch, and closure.
- (2026-10-17) The semantic claim inspector is a private qualification tool.
  It is not an always-on production call and cannot decide canon.
- (2026-10-17) The compact turn brief remains the production design. The
  reading loop resolves ambiguous referents, aliases, character versions, and
  timelines from direct source evidence; Plan 030 owns the held-out proof.
- (2026-10-17) The live public surface is v1.2.1. The v2 deploy is the first
  sponsored deployment and the first deployment of the Plan 029 system.
- (2026-10-17) Plan 030 is admitted. Execution, paid qualification, deploy,
  tag, and release happen only inside this admitted plan and its owner gates.
- (2026-10-17) The release branch carries Plan 030 work. No push to `main`
  before the launch gate.

## Hypotheses, not decisions

1. The accepted DeepSeek model can pass the finished Plan 029 system within a
   predictable complete-turn cost.
2. Median, p95, maximum, and full failure-denominator measurements can support
   an honest daily allowance and global ceiling.
3. The Plan 028 reservation ledger can keep the global ceiling hard under
   parallel traffic, restarts, cancellation, and abuse attempts.
4. The existing v1 release path can carry v2.0.0 after migration, load,
   rollback, and pipeline repairs without new AWS architecture.
5. A release branch plus a retained previous image can make the deploy gate
   and the v1.2.1 rollback real.
6. The Funnel client address can be trusted through the configured proxy
   header, or a different abuse control is needed.

## Owner gates after admission

1. Confirm the frozen release candidate and live evaluation budget.
2. Review DeepSeek quality, complete-turn cost, latency, and failure evidence.
3. Set the production reader allowance, global daily ceiling, maximum turn
   shape, and wallet amount.
4. Approve the sponsored production preflight and the release branch.
5. Approve the exact release candidate and rollback evidence.
6. Accept or reject each Foundational Reader Trial in a fresh session.
7. Authorize public v2.0.0 release and the launch merge.
8. Record the final launch accept, reject, or scope-cut decision.
