# Results: Local browser chat entrypoint

## Status

Gate 1 research tooling is built and reviewed 2026-08-02. Appraisal not yet
run (owner signs in personally). Browser implementation not admitted.

## Recorded transition

- Plan 010 is accepted and closed as Weaver's developer and debugging console.
- The existing direct-reading plan moved intact to Plan 012.
- Plan 011 now holds the local browser chat proof and its learning gate.
- No authenticated browser call, live model call, server, API, or browser
  runtime code was created. Appraisal research tooling was built.

## Gate 1 tooling (2026-08-02)

- Playwright contracts verified against the installed 1.62 API and official
  docs: `deliverables/011-web-chat-entrypoint/playwright-contracts.md`.
  Key facts: `page.accessibility` removed since 1.57 (use `get_by_role` +
  `aria_snapshot`); headful viable on this machine (X11); profile dir holds
  cookies and is never read; chromium-1234 installed and launch verified.
- `playwright>=1.62.0` pinned in the dev dependency group (appraisal tooling
  only, never a web-runtime dependency).
- Appraisal command built: `src/weaver/chatgpt_appraisal.py`, runnable via
  `uv run python -m weaver.chatgpt_appraisal`. Visible persistent-context
  Chromium under `.weaver/weaver-chatgpt-appraisal/profile/`, human sign-in
  gate, desktop (1440x900) and mobile (390x844) viewport passes, probes via
  `get_by_role`, captures (screenshot + aria snapshot + manifest) owner-only
  (0600 files, 0700 dirs) under `.weaver/research/chatgpt-ui/<timestamp>/`.
- Fail-visible: unproven required states print to stderr and exit 3.
- Cookie hygiene is structural: `cookies()` / `storage_state()` / HAR /
  tracing are never called, enforced by a source-level test.
- 18 tests green for the command; full suite 263 green; ruff clean.
- Independent review: PASS after one repair pass (fail-visible probe exit
  code, profile dir renamed to match the recorded name, records updated).

## Pending

- The owner runs the appraisal (sign in personally, walk the fixed states).
- Sanitized observation matrix, decision table, and Weaver state map.
- Owner decision on adopted behaviours; only then is Gate 2 admitted.
