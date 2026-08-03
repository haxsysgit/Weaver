# Results: Local browser chat entrypoint

## Status

Gate 1 appraisal is complete and accepted by the owner. Gate 2 is implemented,
inspected at desktop and phone widths, independently reviewed, and repaired
after a follow-up audit. The owner accepted Plan 011 on 2026-08-03.

## Recorded transition

- Plan 010 is accepted and closed as Weaver's developer and debugging console.
- The existing direct-reading plan moved intact to Plan 012.
- Plan 011 now holds the local browser chat proof and its learning gate.
- Gate 1 research preceded the shared runtime, local server, API, and browser
  implementation. No live model call was needed for deterministic Gate 2
  verification.

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

## Gate 1 decision

- The owner accepted the adopt/skip list and admitted Gate 2 on 2026-08-02.
- On 2026-08-03 the owner clarified that observed layout, ordinary UI text,
  spacing, and palette values are allowed. OpenAI trademarks, logos, icons,
  and brand assets remain excluded from Weaver.

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

## Review repairs (2026-08-02)

Both independent reviews returned after the width evidence. Runtime/API
review: FIX with two majors; browser/UX review: PASS with two mediums.
All findings fixed and covered by tests:

- Failures now emit the `failed` SSE event: MODEL_FAILED, LIMIT_REACHED,
  PERSISTENCE_FAILED and INCOMPLETE map to `failed` with a code and safe
  message; only COMPLETED emits `completed`. (test_failed_exit_reason_emits_failed_event)
- A turn's registry entry stays until its task finishes: the task removes
  itself in a finally, so a second turn cannot start while the first is
  still settling (plan: settle before removing). The 409 guard no longer
  races the settle window. (test_turn_settles_before_next_turn)
- Real disconnect proof against ephemeral uvicorn: a raw-socket SSE client
  that hard-closes mid-stream is followed by a new turn accepted with 200
  (not 409), proving settlement removed the entry.
- Same-origin CSP: meta tag plus a Content-Security-Policy header on the
  index response; host and origin checks on all mutating routes (403 for
  non-loopback). (test_mutating_routes_reject_nonlocal_origin,
  test_index_has_csp_and_live_mode_label)
- First-page boundary completed: the real mode label is injected into the
  page (no hardcoded fake), New chat control, and a Choose another chat
  picker populated from GET /api/conversations; focus returns to the
  composer after each turn; placeholder colour matches the reference.
- Dead TURN_TIMEOUT_SECONDS constant removed; the module comment no longer
  claims a timeout ceiling that did not exist (the provider's own timeout
  bounds each request).

## Follow-up audit repair (2026-08-03)

The owner-directed repair covers seven findings:

- Stop now calls the cooperative cancel route and an interrupted turn renders
  explicit Start new chat and Choose another chat actions.
- Disconnect and shutdown use the same cancel event and await the owned model
  task without a ten-second escape hatch.
- Mutating routes require an exact loopback Host and a matching Origin when an
  Origin header is present.
- Page privacy text is mode-aware: fake mode states that no model request is
  sent; live mode states that messages go to DeepSeek.
- Interrupted SSE now includes `code: interrupted` and a safe recovery message.
- A web test inserts private assistant, tool-call argument, and tool-result
  canaries into SQLite, then proves they stay out of HTML, JSON, SSE,
  JavaScript, and captured logs.
- The plan, analysis, hypotheses, rubric, results, README, index, learning note,
  and owner decision now agree on the current gate and design boundary.

Red evidence: five focused tests failed before the first implementation change.
The cross-surface canary test passed immediately because Plan 010's typed
transcript filter already enforced that privacy boundary. The fresh critic then
found Host grammar and missing-Origin gaps; four malformed-Host cases and one
missing-Origin test failed before the second repair. The critic recheck passed.

### Repair verification floor

- `uv run pytest -q`: 284 passed in 57.11 seconds.
- `uv run pytest -q tests/test_chat_runtime.py tests/test_web.py
  tests/test_web_server.py`: 37 passed in 13.43 seconds.
- `uv run ruff check src tests`: passed.
- `uv lock --check`: passed, 79 packages resolved.
- `uv pip check`: passed, 78 installed packages compatible.
- `git diff --check`: passed.
- Worktree diff scans: no `novels/` files, credential values, or chapter-like
  private text; browser source uses `textContent`, no `innerHTML`, `eval`, or
  `document.write`; local storage is limited to the active conversation ID;
  shipped Weaver source contains no OpenAI or ChatGPT branding.
- A committed ephemeral Uvicorn test creates a conversation over a real socket,
  receives `delta` before `completed`, reads the filtered transcript, shuts the
  server down, opens a fresh runtime, and proves the owner/Weaver transcript has
  no duplicates.

Two command failures are retained as evidence:

- `uv run ruff check .` entered bundled `.agents/skills/drawio-skill` helper
  scripts and found five pre-existing E731 warnings. Weaver's documented
  `src tests` Ruff scope passed; unrelated skill files were not changed.
- The first combined privacy-scan shell command had an unmatched quote and
  exited before scanning. It was split into simpler commands and all scans
  passed as listed above.
- A follow-up shell-driven Uvicorn probe did not return a reliable completion
  result through the command harness and left its temporary server processes
  running. The exact processes were stopped and the temporary state was
  removed. This run is not counted as evidence; the earlier recorded real
  Uvicorn proof and the deterministic suite remain the accepted server proof.

## Final owner decision (2026-08-03)

Accepted. Plan 011 proved the local browser conversation boundary and is
closed. Plan 012 may enter its learning gate; its implementation remains
unadmitted until the owner confirms that gate.
