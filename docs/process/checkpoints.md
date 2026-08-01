# Checkpoints: every 10 plans

A standing ritual, not a numbered plan. After every 10 plans — after
plan 010 before 011, after 020 before 021, and so on until the product
is fully built — do this before moving to the next plan:

1. **Walk plans 001..N in order.** Read each plan's contract: named
   functions and signatures, behaviors, invariants, file paths, and
   verification floors.
2. **Audit the codebase against what the plans specified.** For every
   specifiable claim, check the actual code and score it
   (aligned / partial / missing) with evidence. Run the verification
   floors. This is the duty: how well does the codebase align with the
   plans.
3. **Correct what does not align.** Real bugs get fixed red-green with
   tests. Doc drift gets a corrections section appended to the plan.
   Future-contract gaps get recorded as deferred, never silently
   accepted as done.
4. Record the audit matrix and dispositions in a dated file in this
   directory.

The fleet (subagent-fleet.md) is the audit engine: parallel read-only
auditors, one per plan, claim-vs-code tables, parent reconciliation.
The TDD loop (tdd-workflow.md) is how corrections land.

## Checkpoints

- [001-010 (2026-08-01)](checkpoint-001-010.md) — before plan 011:
  first checkpoint. Ten parallel spec-vs-code audits (244 claims),
  four code fixes (replay truth, empty-input crash, fake+pro, private
  perms), corrections appended to all ten plans, startup recovery
  recorded as the top deferred gap.
