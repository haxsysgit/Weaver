# Plan 030 Learning Note

## Gate status

**Drafted, not admitted.** Plan 030 waits for Plans 028 and 029 to close. If
side UI Plan 029.5 is admitted, it must also close before qualification.

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
  default release path.
- The owner alone accepts the allowance, Reader Trials, launch, and closure.

## Hypotheses, not decisions

1. The accepted DeepSeek model can pass the finished Plan 029 system within a
   predictable complete-turn cost.
2. Median, p95, maximum, and full failure-denominator measurements can support
   an honest daily allowance and global ceiling.
3. The Plan 028 reservation ledger can keep the global ceiling hard under
   parallel traffic, restarts, cancellation, and abuse attempts.
4. The existing v1 release path can carry v2.0.0 after migration, load, and
   rollback proof without new AWS architecture.

## Owner gates after admission

1. Confirm the frozen release candidate and live evaluation budget.
2. Review DeepSeek quality, complete-turn cost, latency, and failure evidence.
3. Set the production reader allowance, global daily ceiling, maximum turn
   shape, and wallet amount.
4. Approve the exact release candidate and rollback evidence.
5. Accept or reject each Foundational Reader Trial in a fresh session.
6. Authorize public v2.0.0 release.
7. Record the final launch accept, reject, or scope-cut decision.
