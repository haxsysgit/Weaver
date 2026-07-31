# Review Ledger: TUI entrypoint

## Status

Review 1 (event loop/cancellation) and Review 2 (mode/scope/credentials) both
passed. One repair pass applied (commit `2c0792b`); both rechecks clean.
Open items: none blocking; owner decision pending.

## Review 1: Event-loop integration and cancellation

- Reviewer: independent reviewer 1 (fresh context)
- Frozen candidate: `1edea9a` + `00f10f8` (pre-repair)
- Findings: MINOR-1 (`_build_chat_session` failure after `sw.open()` bypassed
  `sw.close()` — aiosqlite worker lingered on the failure path); NIT-1
  (`_show_result` `(cancelled)` branch dead — interrupted turns always carry
  `safe_failure`); NIT-2 (Ctrl+C with no turn in flight is a silent no-op, by
  design).
- Verdict: **PASS** — all six focus points verified (cancel path never calls
  `task.cancel()`; seam is the only `conversation/` change; single event loop
  for DB + TUI; no leaks on the happy path; input not lost during blocking
  send; cancel test deterministic with zero sleeps).

## Review 2: CLI, credentials, and scope

- Reviewer: independent reviewer 2 (fresh context)
- Frozen candidate: `1edea9a` + `00f10f8` (pre-repair)
- Findings: NIT-A (`register_chat_tools` in `corpus/tools.py` is not literally
  on the plan's in-scope file list — documented owner-authorized design
  correction, not an issue); NIT-B (live-path `ValueError` seam guard
  unreachable via CLI, harmless). No MINORs, no blockers.
- Verdict: **PASS** — fake default never constructs `DeepSeekProvider`; live
  without key exits 2 before any call or receipt with no state dir; tool set
  exactly echo + inspect/build/export with fetch/update never registered; no
  `agent/` or `model_layer/` changes; no "corpus" wording in help, system
  prompt, or TUI copy; `WEAVER_STATE_DIR` honored with `.weaver/state`
  fallback; fake scripted responses never fire a tool call.

## Owner-directed correction rounds

Round 1 (commit `d5fd8b7`, live default): owner asked why chat is fake by
default and directed live-first with `--fake` opt-in, plus verifying the
model id against the DeepSeek API docs (`deepseek-v4-flash` confirmed
current, code already used it). Both reviewers rechecked: PASS, no
blockers; 5 MINOR doc-accuracy items from the find-replace (stale
`--live` mentions, garbled mode-selection prose, wrong commit hash in
results.md) fixed in `d4f37d0`; diagram updated in `fd7b1fc`.

Round 2 (commit `a4267ea`, startup config): owner asked for `.env` support
and a private `.weaver` config (`[api] key`, `[chat] model`). Precedence
real env > `.env` > config file, injected into os.environ so existing
readers are unchanged. The old test pinning ".env must NOT be loaded"
was rewritten to the new contract. Both reviewers rechecked the complete
candidate: PASS, no blockers; 4 MINOR doc-accuracy items (stale pre-flip
prose in results.md and learning.md, missing ledger entries) fixed in the
closing commit.

## Repair and recheck

- Repair commit `2c0792b` (one repair pass, allowed by the plan): MINOR-1
  fixed — `_build_chat_session` closes the session if `start_conversation`
  raises after `open()` (close is idempotent, no double-close); NIT-1 fixed —
  `_show_result` distinguishes a real cancel (`turn_id` set → `(cancelled)`)
  from a refused send (empty `turn_id` → show the refusal message). Diff: 2
  files, +9/-3, no test churn.
- Recheck 1: **PASS**, no blockers. Re-confirmed MINOR-1/NIT-1 addressed.
  NIT: repaired branches have no direct regression test (verified correct by
  inspection; add coverage if this path is touched again). Not blocking.
- Recheck 2: **PASS**, no blockers. Scope clean (`cli.py` + `tui/app.py`
  only), no credentials/private text, 185 tests green, ruff clean. NIT:
  `except Exception` does not catch `asyncio.CancelledError` mid-build —
  pre-existing pattern, out of repair scope. Not blocking.

## Open items

- None blocking. NITs recorded above (regression coverage for repaired
  branches; `CancelledError` mid-build edge; Ctrl+C no-op with no turn in
  flight) are deferred.
- Owner decision pending in `decision.md`.
