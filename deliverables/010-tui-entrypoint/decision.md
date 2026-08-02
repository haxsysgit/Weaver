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

## Phase A acceptance addendum (2026-07-31)

Owner accepted Phase A (pi-shaped screen) on 2026-07-31: "okay i accept
it". Commits 6892a90 (code + docs) and a0d5cf7 (review ledger). Decision
recorded after two independent PASS reviews. Phase B (streaming deltas)
starts on the owner's word.

## Phase B + D acceptance addendum (2026-07-31)

Owner directed: "start and when you're done continue to phase D, but make
sure you do it properly 1 by 1, then at the end i accept them all."

Phase B (streaming deltas, d135ac6) and Phase D (observability,
0ec98fb, 067722a) were implemented one at a time, each with its own
independent review (both PASS, no blockers), and are accepted per the
owner's advance instruction. Commits pushed as 18e6d3e. Suite 215 green,
ruff clean. Phase C (multi-line input, Markdown replies, conversation
resume) was later implemented, reviewed, and included in the final acceptance.

## Final developer-console gate (2026-08-02)

The final repair candidate adds the 3 to 8 row composer, terminal-safe keymap,
filtered transcript reload, correct new/switch chat redraw, compact overlays,
F1 help, explicit cancellation recovery, distinct OWNER and WEAVER transcript
blocks, safe Markdown wrapping, and readable heading colours. The command
floor and every independent recheck passed.

The owner directed the final layout repair and official closure on 2026-08-02.
The recorded decision is:

> Accepted as Weaver’s developer and debugging console. No further product polish.

Plan 010 is closed. Maintenance bug fixes remain allowed, but the TUI is no
longer a product surface.
