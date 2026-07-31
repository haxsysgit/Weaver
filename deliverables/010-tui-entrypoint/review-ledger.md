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

## Phase B review (streaming deltas, commits d135ac6 + 067722a)

Review 1 (seam/cancellation/persistence): PASS, no blockers. The seam is
minimal (3 source files, agent/session.py untouched); _complete_streaming
mirrors ModelLayer.complete validation exactly; on_delta=None preserves
buffered behavior (214-suite proof); zero new persistence writes; no
task.cancel; stream area hidden Static with finally-block cleanup. NITs:
deep-module ModelProtocolError import (cosmetic), 50ms settle sleep in
the chunk test, and no test for the swallowed failing callback.

Follow-ups in 067722a: added test_send_on_delta_raising_callback_does_not_fail_turn.

## Phase D review (observability, commits 0ec98fb + 067722a)

Review 2 (assembler/TurnResult/history/TUI/secrets): PASS, no blockers.
Count-only mode truncates nothing and budgeted chats unchanged (Plan 009
tests green); TurnResult 0-defaults break nothing; list_recent_turns
status mapping covers all five coordinator phases; ctrl+h is non-priority
so typing is safe; RunHistoryScreen is a dumb view; the meter attribute
is _meter, not _context (root-cause claim verified against installed
Textual source); secrets clean. Notes: dead `if self._assembler is not
None:` guard (removed in 067722a), ctx_text can render >100% on
pin-only overflow (informative by design), history shows empty owner
text for continued runs (display corner, not in the send path).

## Phase C review (multi-line input, markdown, resume, commit 2a8be00)

Review 1 (input/regressions): PASS, no blockers. Enter-vs-shift+enter
resolution verified against Textual 8.2.8 source: ChatInput
prevent_default() suppresses TextArea's newline handler in the MRO
dispatch, the non-priority app binding fires on bubble, and the picker's
ListView enter binding wins focused-first; pilot.press tests exercise the
real dispatch. No new persistence writes; deltas still preview-only;
cancellation contract intact; ruff clean; credential grep 0. NITs: JSON
body decode could raise AttributeError on non-object JSON (theoretical,
every writer emits {"content": ...}), and ^n leaves a queued opener run
shown as '—' in history (anticipated).

Review 2 (UX/scope): PASS, no blockers. Focus management correct (mount,
post-turn refocus, picker on_mount focus); busy guard preserves typed
text; no ^r/^n/^h collisions with TextArea bindings; empty submits and
welcome-clear correct; multi-line submit strips trailing newlines; no
'corpus' wording. 1 MINOR (fixed in 3aa695f): architecture.drawio/svg
still showed the pre-Phase-A Header/Input/Footer design and
on_input_submitted; redrawn for the current screen (no Header, StatusBar,
stream area, ChatInput, markdown replies, ^r/^n/^h, ctx meter). NITs:
no test for focus-return after picker close, no test pressing enter on
the history screen (guard verified by inspection).

## Phase A reviews (pi-shaped screen, commit 6892a90)

Review 1 (bindings/spinner/scope): PASS, no blockers. Priority binding
verified against installed Textual 8.2.8 (Input binds ctrl+c -> copy,
non-priority, so the app's priority cancel wins); cooperative cancel
never task.cancel; spinner interval started/stopped without leaks; diff
scoped to tui/, cli.py, tests.

Review 2 (separation/pi-mirror): PASS, 1 MINOR + 2 NITs. MINOR: the
first commit shipped docs only, leaving the Phase A code uncommitted in
the working tree; fixed by re-committing code + docs together as
6892a90. NIT (fixed): docs said "state dir" where the code prints the
sqlite path. NIT (kept): the spinner test probes private `status._busy`
as a secondary assert behind the observable `status.content` check.

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
