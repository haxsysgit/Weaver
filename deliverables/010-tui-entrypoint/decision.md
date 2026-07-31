# Owner Decision: TUI entrypoint

- **Owner choice:** Accepted
- **Date:** 2026-07-31
- **Admission:** Plan 010 implemented and accepted by owner (closing
  instruction: "finish up and close plan 10"). Includes the two
  owner-directed corrections: live-by-default with `--fake` opt-in, and
  startup config loading (`.env` + `.weaver/config.toml`).
- **Corrections:** none.
- **Evidence:** 194 tests green, ruff clean, `uv pip check` clean; two
  independent reviews with rechecks clean after both owner-directed
  correction rounds; verification floor documented in `results.md`.

## Reopen addendum (2026-07-31)

Owner reopened this plan for UI sharpening ("keep it open, i'll probably be
in plan 10 for a while"). The acceptance above stands for the shipped chat
core; new UI phases (A-D roadmap) amend the plan and require their own
review and a fresh owner decision per phase. TUI stays the surface; web UI
is deferred with explicit triggers recorded in the plan.
