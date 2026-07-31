# Review Ledger: Context assembler

## Status

Review 1 and Review 2 completed; one repair pass applied; both rechecks
pass with no open blockers.

## Review 1: Token counting and truncation policy

- Reviewer: reviewer subagent (fresh context, review-only)
- Frozen candidate: implementation as of commit `f047f54`
- Findings:
  - Counting formula: correct — system prompt counted once, blocks project
    with empty system prompt, content + tool-call arguments counted, tool
    schemas excluded; drift vs. `project_messages` verified = 0;
    determinism test passes.
  - Exchange atomicity: correct — `_group_blocks` keeps
    assistant(tool_calls)+tool_call+tool_result indivisible; drop loop
    only advances across whole blocks; atomicity test's budget math
    verified to land inside the exchange group.
  - Pin: correct — only blocks older than the pin are droppable; pin alone
    over budget returns it alone with `token_count > token_budget`, no
    raise.
  - Snapshot fields: correct — `first_item_id` None on all-fit, else
    oldest kept block's first item; empty-list edge returns empty without
    crash.
  - `items.py` extraction: pure move — byte-identical bodies after name
    normalization; runner re-imports under Plan 008 private aliases.
  - Nits: corrupt-data edge (lone tool block, no owner → pin_index 0) is
    unreachable per the pinned mapping; snapshot id/created_at
    non-deterministic but the contract pins determinism to selection +
    token_count.
- Verdict: pass

## Review 2: Snapshot, scope, and regression

- Reviewer: reviewer subagent (fresh context, review-only)
- Frozen candidate: implementation as of commit `f047f54`
- Findings:
  - Runner wiring: correct — `token_budget=None` → no assembler, Plan 008
    behavior byte-identical; bounded path filters before `run_turn()`.
    Integration tests prove both paths.
  - Scope fence: full diff `d6bf9f8..f047f54` = 13 files, every one in the
    plan's in-scope list; zero `agent/`, `model_layer/`, `schema.py`, or
    `repository.py` changes.
  - No schema change: `ContextSnapshot` is in-memory only.
  - `items.py` extraction: pure move confirmed by full-file diff.
  - `SessionWeave.token_budget` kwarg: optional, defaults None, does not
    disturb the all-or-nothing model/tool kwarg validation or the
    subprocess path.
  - Minor: plan's "In scope" list omitted `session.py` although Slice 3
    text sanctions the executor choice. **Repaired** in commit `3af68c3`.
  - Nits: missing ponytail markers for the tokenizer approximation, O(n²)
    recount, and the corrupt-data edge. **Repaired** (comments only).
- Verdict: pass-with-fixes (minor + nits, no blockers)

## Repair and recheck

- Repair applied 2026-07-31 (one pass, commit `3af68c3`): plan scope list
  gains `session.py`; three ponytail comments added to `assembler.py`
  (tokenizer approximation, O(n²) recount ceiling, corrupt-data edge).
  Zero executable lines changed.
- Recheck 1: pass — repair diff is exactly 2 files / 13 insertions;
  comments accurate and behavior-neutral; focused tests green.
- Recheck 2: pass — scope list now complete; full diff `d6bf9f8..3af68c3`
  still 13 files, all in scope; full suite 178 passed; ruff clean.
- Final gates: `uv run pytest -q` 178 passed, ruff clean, `uv pip check`
  clean.

## Open items for the owner

- None. Candidate clean; both rechecks pass. Owner decision pending in
  `decision.md`.
