# Plan 013: review-ledger

## Status

Both independent reviews returned PASS with findings. All findings fixed;
repair pass complete.

## Review 1: runtime/API/security — PASS with findings

- Reviewer: independent `reviewer` agent, fresh context, read-only
- Verdict: PASS. SSE contract consumption, textContent rendering
  boundary, CSP (style inline for shadow DOM, scripts 'self'), root-scope
  service worker, and private-text hygiene all verified correct.
- **MAJOR (fixed):** Regenerate crossed conversation boundaries —
  `_lastOwnerText` was never reset on conversation switch, so picking
  another chat could re-send the previous chat's last message into it.
  Fix: initialize `_lastOwnerText = null`, reset it in `startNewChat()`
  and `_onPick()`, and show the Regenerate action only on the live turn's
  reply (never on history-loaded messages). Verified live: a picked
  conversation renders 0 regenerate buttons; a fresh turn renders exactly
  1 on the reply.
- MINORs (fixed): `startNewChat` now refreshes the sidebar picker so the
  new conversation appears immediately.
- Notes (accepted): no client-side watchdog for a wedged stream; unbounded
  SSE queue — both acceptable for a local single-user app.

## Review 2: scope/design/reuse — PASS with findings

- Reviewer: independent `reviewer` agent, fresh context, read-only
- Verdict: PASS. All eight deferred behaviours implemented; framework
  decision, Shadow Slave theme, HaxJobs reuse contract verified.
- MINORs (fixed): settings modal gained the missing Personalization row;
  the README now points at the real `scripts/web_live_proof.py` instead
  of a nonexistent artifact.
- Note (accepted): regenerate appends a fresh reply rather than replacing
  in place — matches the design reference and the plan's "new send/cancel
  path" wording.

## Repair pass

- Commits: (review fixes) — regenerated live-proof driver
  `scripts/web_live_proof.py` (reproducible CDP proof, 0 installability
  errors, mobile drawer verified), Personalization row, README fix,
  Regenerate cross-conversation fix.
- Verification: 322 pytest, 19 node tests, ruff clean, uv pip check
  clean, full live proof green.
