# Cleanup wave execution pattern

How to execute multiple improve plans as a single "cleanup wave" — proven on
the HaxJobs 9-plan sweep (2026-06-27).

## Phase order

1. **Restore verification baseline first** — no other plan starts until
   pytest, compile, lint, typecheck, and build are green. A red baseline
   means executors can't distinguish new regressions from old noise.

2. **Security before correctness** — lock down API/auth/CORS/path traversal
   before fixing data flows that depend on those boundaries.

3. **Data integrity before product features** — fix company names, pack
   directories, approval gates before adding batch queries or docs.

4. **Tests before refactors** — characterize evaluator parsing and DB
   writeback before attempting SQLite source-of-truth migration or intake
   cleanup.

5. **Docs last** — agent guides, stale stack docs, runtime wording. These
   are low-risk and depend on code being stable.

## Execution rhythm

For each plan:
- Read the plan, run drift check
- Implement the steps in order
- Verify at each step
- Mark the plan DONE in `plans/README.md`
- Move to next plan

## After all plans: cross-check

Run a comprehensive bash script that checks each plan's done criteria
against actual code — grep for SQL columns, function signatures, new
test files, removed functions. This catches gaps that individual plan
verification misses.

From the HaxJobs sweep: `list_outreach_drafts` SQL was missing `pack_dir`
even though `list_outreach_jobs` had it. 199 tests passed but the data
wasn't flowing. Caught by cross-check grep, not by test suite.

## Git workflow

- Commit after each plan or after groups of related plans
- Keep personal data in the deploy repo, not the engine
- Plans live under `plans/`, engines live under `~/<project>_prod/`

## Pitfalls

- **Don't trust `replace_all` blindly.** When two function signatures look
  similar (e.g. `list_outreach_jobs` and `list_outreach_drafts` both have
  `j.outreach_status, j.pack_status`), `replace_all` may not catch both
  call sites if the context strings differ slightly.
- **Verify both call sites when a function has two callers.** In
  `generate_ready_packs.py`, `update_job_pack_status` was called from both
  `generate_pack_for_job()` and `generate_ready_packs()`. Both needed the
  `pack_dir=...` argument.
- **Response dict fields need corresponding SQL columns.** Adding
  `"packDir": r["pack_dir"]` to a response dict doesn't help if the SQL
  query doesn't select `pack_dir`.
