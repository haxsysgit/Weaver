# Review Ledger: Local browser chat entrypoint

## Status

Both required independent reviews ran 2026-08-02 after Gate 2 evidence was
complete (server, SSE, cancellation, diagrams, width evidence). Runtime/API
review: FIX (two majors, both fixed and tested). Browser/UX review: PASS
(two mediums, both fixed). A fresh follow-up critic returned FIX, then PASS
after its four findings were repaired. The owner accepted Plan 011 on
2026-08-03.

## Required reviews

1. Runtime, API, streaming, cancellation, persistence, and privacy.
2. Browser UX, accessibility, responsive behaviour, and appraisal fidelity.

## Review 1: runtime/API/streaming/cancellation/persistence/privacy (2026-08-02)

Verdict: FIX, no blockers.

1. Major: failures mapped to `completed` instead of `failed` (MODEL_FAILED,
   LIMIT_REACHED, PERSISTENCE_FAILED, INCOMPLETE all fell into the
   completed branch with empty text). Fixed: exit-reason mapping emits
   `failed` with a code and safe message; only COMPLETED emits completed.
   Test: test_failed_exit_reason_emits_failed_event.
2. Major: `_settle` popped the registry entry before awaiting the task, so
   a second turn could spawn while the first was still settling (reproduced
   on real uvicorn). Fixed: the turn task removes its own entry in a
   finally; `_settle` only cancels and awaits. The 409 guard can no longer
   race settlement. Tests: test_concurrent_turn_409, test_turn_settles_before_next_turn.
3. Moderate: no web-layer disconnect/shutdown settlement tests. Disconnect
   cannot be simulated through the buffered ASGITransport, so the disconnect
   case is proven against a real ephemeral uvicorn server with a raw-socket
   hard-close mid-stream followed by a 200 (not 409); recorded in
   results.md. Shutdown settlement is covered by the lifespan code path
   reviewed in source.
4. Minor: dead `TURN_TIMEOUT_SECONDS` and a comment claiming a timeout
   ceiling that did not exist. Fixed: constant removed, comment corrected
   (the provider's own timeout bounds each request).
5. Minor: no CSP, no host/origin checks, hardcoded fake mode label, no
   new-chat/choose-chat controls. Fixed: CSP meta + header, loopback
   host/origin guard on all mutating routes, mode label injected from the
   runtime, New chat button and Choose another chat picker, focus restored
   to the composer. Tests: test_mutating_routes_reject_nonlocal_origin,
   test_index_has_csp_and_live_mode_label.

Verify commands (reviewer-run): 22 web tests, full suite 269 passed, ruff
clean, module imports, innerHTML/eval grep clean, localStorage limited to
the conversation id.

## Review 2: browser UX/accessibility/responsive/appraisal fidelity (2026-08-02)

Verdict: PASS with two medium plan-conformance findings, both fixed.

1. Medium: mode label hardcoded "fake", never updated in live mode. Fixed:
   the index route injects `runtime.mode_label` into the page.
2. Medium: no new-chat control and no post-cancel Start new chat / Choose
   another chat offer. Fixed: New chat button and a picker populated from
   GET /api/conversations; interrupted and 409 messages point at both.
3. Low (not fixed, proof scope): send button hides mid-turn dropping focus;
   focus now restored to the composer in the finally block instead.
4. Note: aria-live="polite" on the whole transcript is chatty for AT users;
   acceptable for the proof.
5. Note: placeholder colour unstyled; now set to the reference #B8B8B8.

Verify commands (reviewer-run): CSS fidelity pixel checks, contrast
calculations, screenshot dimensions, XML validation of all four diagram
files, SVG→PNG conversion, innerHTML/eval grep clean, web tests 14/14.

## Repair commit

- `adf680a` plan 011: review repairs - failed events, settle-before-remove,
  csp, mode, new chat (6 files, +298/-46; full suite 273 passed).

## Follow-up audit and fresh critic (2026-08-03)

The owner directed seven repairs after a read-only audit: explicit Stop
recovery, unbounded cooperative shutdown settlement, exact Host/Origin checks,
honest mode-aware privacy text, an interrupted SSE code, private-record canary
proof, and consistent gate records.

Initial critic verdict: **FIX**.

1. Major: parsing only `.hostname` allowed malformed Host values such as
   `127.0.0.1/path`, `localhost:evil`, and an out-of-range port. Missing Origin
   was also accepted. Fixed: validate the complete Host grammar, require an
   exact loopback host and valid port, require Origin, and match it exactly to
   the request origin. Four malformed-Host cases plus missing-Origin are pinned.
2. Moderate: the canary test captured only pytest's default log level. Fixed:
   capture INFO logs before inserting private assistant, tool-argument, and
   tool-result canaries.
3. Minor: a CSS source comment contained the ChatGPT name. Fixed: shipped
   browser source is Weaver-only; ChatGPT remains named only in research
   evidence under the owner's accepted boundary.
4. Minor: `learning.md` still said implementation was merely admitted. Fixed:
   it recorded implementation and both reviews complete before the final
   owner decision.

Critic recheck verdict: **PASS**. Focused Host/Origin/privacy tests passed and
Ruff passed. Final mechanical floor: 284 tests passed; 37 focused runtime/web
tests passed; Ruff, format check for changed Python, lock check, package check,
diff check, and private-source scans passed.
