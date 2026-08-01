# Checkpoint 001-010 (2026-08-01)

**Status: complete.** Standing ritual after every 10 plans: walk plans
001-010, audit the codebase against what each plan specified, correct
what does not align. See checkpoints.md for the ritual.

## Method

Ten read-only spec-vs-code audits (the fleet, fan-out), one per plan:
each extracted every specifiable claim from the plan (functions,
signatures, invariants, file paths, verification floors) and verified
each against the live code, with the verification floor re-run. The
parent reconciled the findings, applied code fixes, and corrected the
plan documents.

## Alignment summary

| Plan | Claims | Aligned | Partial | Missing | Code bugs | Disposition |
|---|---|---|---|---|---|---|
| 001 foundation | 33 | 30 | 3 | 0 | none | doc corrections (boundary name, model-id claim) |
| 002 shadow-slave library | 31 | 29 | 2 | 0 | none (1 perms drift) | doc corrections + perms fix |
| 003 tool protocol | 24 | 22 | 2 | 0 | none in scope | doc corrections (dispatch order, rejection site) |
| 004 cancellation/effects | 26 | 24 | 2 | 0 | **1 hard-invariant violation** | **fixed** (replay truth) + docs |
| 005 provider-tool-contract | 30 | 28 | 2 | 0 | none in scope | doc corrections (key floor superseded) |
| 006 durable conversation | 26 | 17 | 6 | 3 | **1 significant gap** | deferred (startup recovery) + docs |
| 007 restart proof | 17 | 11 | 6 | 0 | none | doc corrections (crash table overstates) |
| 008 wire the loop | 13 | 13 | 0 | 0 | none | doc corrections + missing test added |
| 009 context assembler | 18 | 17 | 1 | 0 | **1 low bug** | **fixed** (empty-input crash) + docs |
| 010 TUI entrypoint | 26 | 24 | 2 | 0 | **1 reproducible bug** | **fixed** (fake+pro) + docs |
| **Total** | **244** | **215** | **24** | **3** | **3 fixed, 1 deferred** | |

The three "missing" plan-006 claims (startup recovery, FIFO/steering
turns, approvals/memories tables) are future contracts the plan itself
never built — recorded as deferred, not silently accepted as done.

## Code fixes (all red-green with tests, full suite 228 green)

1. **Plan 004 invariant — replay truth (9ffb0ab).** The durable mapping
   wrote only `result` for tool_result items, so cancelled, blocked, and
   failed calls replayed as clean successes ("Tool execution failed.")
   on resume/replay. The mapping now persists failure metadata and reads
   legacy rows as successes. In-memory evidence was always correct.
2. **Plan 009 — empty-input crash (9ffb0ab).** `assemble([])` with a
   budget below the system prompt raised IndexError on the pin fallback.
   Returns a sane snapshot now.
3. **Plan 010 — fake chat with a configured pro model (9ffb0ab).**
   `weaver chat --fake` with `[chat] model = pro` failed every turn with
   MODEL_FAILED (scripted response pinned to flash). The fake now stands
   in for the requested model.
4. **Plan 002 — private parent chain (ed19d30).** `.weaver/corpus` sat
   at 775 (mkdir umask on a parent dir); the hardening now chmods the
   layout root's parent to 700. Live dir fixed too.
5. **Coverage (9ffb0ab).** Plan 008 test-plan item 3
   (PERSISTENCE_FAILED -> interrupted run) was untested; the behavior
   was already correct, now locked.

## Plan corrections

Every plan file gained a "Checkpoint audit corrections (2026-08-01)"
section with its findings and disposition (FIXED / DOC / DEFERRED).
Highlights: 006's startup-recovery gap is the most significant open
item (a hard kill mid-turn silently starts a fresh model call on the
next send; recovery wiring is a future plan); 007's crash table now
says recovery is exercised only for explicitly marked-interrupted runs;
005's missing-key floor is annotated as superseded by Plan 010's
startup config.

## What this checkpoint proved

The fleet + TDD workflow works at repo scale: ten parallel read-only
auditors each returned a claim-vs-code table, and the reconciliation
found and fixed three real bugs plus one permissions drift that no
single-context pass would have surfaced. The red/green loop held (each
fix started as a failing test).
