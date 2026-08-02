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

## Appraisal evidence (2026-08-02)

- Owner signed in personally through the persistent profile (Cloudflare
  passed after the automation-fingerprint fix). Screenshots and
  dev-accurate extractions captured; the probe checklist was a dead end
  (wrong role names, mismatch with real UI) and was replaced by a
  dev-style extractor (`src/weaver/chatgpt_extract.py`) that pulls
  computed styles, rects, CSS custom properties, and font stacks from the
  live signed-in page in dark theme.
- The design reference
  (`deliverables/011-web-chat-entrypoint/chatgpt-ui-design-reference.md`)
  is now built from measured values: 260 px sidebar, 768 px column,
  composer 28 px radius `#212121`, slash menu and settings modal 16 px
  radius with the layered popover shadow, system-ui font stack with the
  "Circle" webfont on top, dark palette from CSS variables.
- Raw captures live owner-only under `.weaver/research/chatgpt-ui/`
  (never committed).

## Pending

- Owner decision on adopted behaviours (the adopt/skip list at the end of
  the design reference); only then is Gate 2 admitted.
