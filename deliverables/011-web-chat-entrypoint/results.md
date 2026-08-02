# Results: Local browser chat entrypoint

## Status

Gate 1 appraisal is complete and accepted by the owner 2026-08-02: the
design reference was produced from the owner's captures and a dev-style
extraction of the signed-in profile, and the behaviour decisions are
recorded in decision.md. Browser implementation is admitted and in
progress (shared runtime extracted; server and page next).

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
  passed after the automation-fingerprint fix). The staged probe checklist
  was a dead end (wrong role names: composer is a textbox "Chat with
  ChatGPT", "New chat" is a link), so the design reference was built from
  the owner's screenshots plus a dev-style extraction from the live
  signed-in page (computed styles, rects, CSS variables, font stack) in
  dark theme.
- The design reference
  (`deliverables/011-web-chat-entrypoint/chatgpt-ui-design-reference.md`)
  carries measured values: 260 px sidebar, 768 px column, composer 28 px
  radius `#212121`, slash menu and settings modal 16 px radius with the
  layered popover shadow, system-ui font stack with the "Circle" webfont
  on top, dark palette from CSS variables.
- The appraisal tooling (probe command, extractor, tests,
  playwright-contracts.md, Playwright dev dependency) was retired on
  2026-08-02; raw captures stay owner-only under
  `.weaver/research/chatgpt-ui/` (never committed).

## Pending

- Owner decision on adopted behaviours (the adopt/skip list at the end of
  the design reference); only then is Gate 2 admitted.

## Gate 2 build (2026-08-02)

- Shared runtime extracted from cli.py with `open_chat_runtime(state_dir,
  *, live, surface)`: developer and web profiles, no-conversation-on-open,
  missing live credentials raise before any state dir exists.
- FastAPI app: conversation create/list, filtered transcript, SSE turns,
  cooperative cancel, owned turn tasks with per-stream asyncio queues,
  settlement on disconnect and shutdown (cancel event, never task.cancel
  on model work), 422 blank/over-32000-char, 404 unknown conversation,
  409 second active turn.
- Plain HTML/CSS/JS page: textContent rendering, same-origin assets, no
  CDN or framework. Real ephemeral uvicorn proof: create → list → stream
  (delta before completed) → transcript → reload with no duplicates; no
  private canaries in HTML/JSON/SSE/JS/logs.
- Width inspection (headless Chromium, direct binary, no Playwright):
  desktop 1440x900 capsule centered in the 768 px column with black
  gutters; phone 390x844 capsule spans near full width with the accent
  send button. Evidence: `evidence/web-desktop-1440x900.png`,
  `evidence/web-phone-390x844.png`.
