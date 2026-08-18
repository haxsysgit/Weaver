# Plan 029: Hidden Thread integration and phone trial

> **Executor instructions:** Join the accepted Hidden Thread surfaces, prove the
> whole fake-mode journey across the mobile matrix, the Redmi Note 14, and
> desktop, then stop for the
> owner's release decision. This plan may repair integration defects with a
> failing regression test first. It may not deploy, add a new product surface,
> or spend a DeepSeek token.

## Status

- **Tooling:** root `npm` scripts for TypeScript, Vite, and Vitest; repo
  commands through `uv` for pytest and the fake web server; browser developer
  tools, phone accessibility tools, and the accepted Plan 025 performance
  probes.
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plans 022 through 028 closed with owner decisions recorded.
  Plan 029 integrates accepted work; it cannot decide unfinished lore, visual,
  API, rite, chamber, or archive questions on their behalf.
- **Priority:** P1. This is the release gate for the complete Hidden Thread
  experience.
- **Effort:** M.
- **Risk:** High. Unit tests can all pass while safe areas, browser restoration,
  focus, animation cost, service-worker state, or the rite-to-chat handoff fails
  on an actual phone.
- **Budget:** about 30k to 50k agent-context tokens for one executor and two
  independent reviewers, estimated $0.35 to $1.75 depending on the executor.
  Product execution is fake-only with $0 DeepSeek spend. No live model call,
  real API key, deployment, AWS change, or external write is allowed.

## Owner direction (locked decisions)

1. (2026-08-18) The final Shadow Slave surface keeps three visible depths:
   distant stars and cosmic scale, sharp intentional Spellweave threads, and
   foreground rune fragments tied to controls and conversation events.
2. (2026-08-18) The full journey stays inside one scene: Hidden Thread rite,
   appraisal, conversation chamber, and Thread Archive.
3. (2026-08-18) Phone is the primary immersive surface. Browser evidence uses
   320 x 568, 360 x 800, 390 x 844, and 412 x 915 CSS viewports. The complete
   journey also runs in both orientations on the owner's Redmi Note 14; record
   its browser and actual CSS viewport. Desktop receives its own 1440 x 900
   composition in the same gate.
4. (2026-08-18) Shadow Slave is the only current Edition. The UI may carry
   `edition_id` internally and must not advertise unsupported books.
5. (2026-08-18) Silver carries interaction, old gold carries appraisal and
   Memory-like emphasis, and crimson is reserved for corruption, failure, and
   destructive action.
6. (2026-08-18) Key state remains browser-local. Conversation metadata remains
   server-backed and device-scoped. The product keeps its no-log and private
   source boundaries.
7. (2026-08-18) Full verification, independent review, Redmi Note 14 use, and the
   owner's dated release decision are required. The owner deploys later; this
   plan does not deploy.

## Scope

- Read every accepted decision and open finding from Plans 022 through 028.
  Build a release matrix at
  `deliverables/029-hidden-thread-integration-and-phone-trial/release-matrix.md`
  that maps each locked decision to a test, browser check, phone check, or owner
  check.
- Add
  `src/weaver/web/frontend/components/HiddenThreadIntegration.test.tsx` with a
  deterministic in-memory `ChatApi` that behaves like server persistence. Cover
  the rite handoff, empty chat, send and stream, safe Markdown, chapter knots,
  failure and retry, archive actions, active-thread recovery, and browser
  remount.
- Run the complete frontend and Python floors. Any defect found during this
  plan gets a failing regression test in its owning existing test file before a
  narrow repair.
- Inspect the built `src/weaver/web/dist/` output, manifest, viewport metadata,
  service-worker registration, and browser restart behavior.
- Run the built app in deterministic fake mode with
  `uv run weaver web --fake --host 0.0.0.0 --port 8029`. No live fallback is
  permitted.
- Test the full journey across the four mobile matrix viewports, on the Redmi
  Note 14, then at 1440 x 900 desktop. Use fresh site data for
  first-run checks and retained site data for restart checks.
- Verify the accepted numeric Plan 025 performance limits on the Redmi Note 14
  during idle, rite,
  archive scroll, composer focus, send, streaming, completion, and failure.
  Record the device, browser, asset sizes, frame measurements, and any long task
  in `deliverables/029-hidden-thread-integration-and-phone-trial/results.md`.
- Verify keyboard-only navigation, visible focus, semantic roles, 200 percent
  text zoom, phone text scaling, VoiceOver or TalkBack reading order, reduced
  motion, contrast, touch sizes, safe areas, and software-keyboard resizing.
- Keep screenshots, recordings, performance traces, and device logs under
  `private/design-evidence/029/`. Public deliverables contain measurements and
  descriptions only, with no chats, chapter prose, key material, or device ids.
- Rebuild and stage changed shipping files under `src/weaver/web/dist/` if the
  root build changes them.

## Out of scope

- Deployment, pushing a release, changing AWS, Tailscale, CI secrets, domains,
  server environment, or production state.
- Live DeepSeek calls, real keys, live Reader Trials, or judging answer quality.
- New lore, a new visual direction, new backend fields, new routes, a second
  Edition, accounts, billing, search, memory, or another archive feature.
- Large refactors or a new animation engine. Repairs stay inside the accepted
  022 through 028 contracts. A larger defect returns to its owning plan area or
  gets a fresh numbered plan.
- Committing phone captures, private conversations, chapter text, model output,
  traces, receipts, `.env`, `config.toml`, `novels/`, or `.weaver/`.
- Owner acceptance by a test, reviewer, Lighthouse score, or agent. Only the
  owner makes the release decision.

## Deterministic proof / verification floor

1. `npm run build` passes from the repository root and produces the committed
   `src/weaver/web/dist/` bundle.
2. `npm test` passes, including the complete deterministic Hidden Thread
   integration journey and all component regressions from Plans 023 through
   028.
3. `uv run pytest` passes in full, including device-scoped conversation
   metadata, private key handling, safe transcript return, and restart
   persistence.
4. A staged-file audit shows only Plan 029 repairs, tests, deliverables, and
   changed `dist/` files. It finds no key material, `.env`, `config.toml`,
   private chapter text, chat transcript, screenshot, receipt, or unrelated
   drift.
5. Fresh-site and retained-site journeys pass across the four mobile matrix
   viewports and on the Redmi Note 14. They cover rite entry and
   defer paths, appraisal reveal, chat send,
   streaming, stop, failure and retry, settings, archive rename/archive/restore/
   pin/delete, software keyboard, orientation change, reload, and full browser
   restart.
6. The 1440 x 900 desktop journey passes with persistent and collapsed archive
   modes, readable long answers, composer context, selection quoting, keyboard
   navigation, zoom, and restart restoration.
7. Default and reduced-motion runs stay within the accepted Plan 025 object,
   pixel-ratio, asset, frame, and long-task limits. Any miss is recorded as a
   failure, even if the screen looks good.
8. Accessibility checks pass for focus order, focus trapping, focus return,
   labels, status announcements, contrast, 200 percent zoom, phone text
   scaling, 48px phone controls, VoiceOver or TalkBack order, and no horizontal
   page overflow.
9. Two independent reviews report against the release matrix: one for behavior,
   privacy, and persistence; one for visual match, phone use, accessibility,
   and motion. Reviewers cannot accept the release.
10. The owner uses the result on the Redmi Note 14 and records a dated accept or
    reject decision. No deployment happens in this plan.

## STOP conditions

- If any plan from 022 through 028 is still open, STOP. Integration begins from
  accepted decisions only.
- If the Redmi Note 14 is unavailable, STOP at the real-device usability gate.
  Responsive evidence cannot replace real touch, safe-area, keyboard,
  accessibility, and performance use.
- If fake mode attempts a live model request or asks for a real key, STOP,
  preserve the failure, and fix the mode boundary before continuing.
- If a defect requires a new backend field, route, state migration, lore
  decision, component family, or visual direction, STOP. Bring the issue to the
  owner and route it to a fresh plan or the owning plan record.
- If a performance limit fails, do not hide it with lower test settings or an
  unrecorded retry. Save the trace privately, record the failure, and repair the
  owning event or visual layer.
- If reduced motion leaves timed transitions, hidden controls, or a blocked
  rite state, STOP and repair it before owner review.
- If Markdown becomes HTML, key material appears outside local browser storage
  and request headers, metadata loses device scope, or chapter prose reaches a
  browser response, STOP immediately and rewind the offending change.
- If service-worker or browser-restart behavior serves an old mixed UI, STOP
  and repair the update path before recording visual evidence.
- If private material or unrelated work enters staging, STOP and unstage only
  the affected paths without discarding the owner's work.
- If either independent review has an unresolved blocking finding, STOP before
  the owner release gate.

## Slices

1. **Plan and admit**
   - Review this doc, its fake-only budget, device requirements, and
     `learning.md` with the owner.
   - Admit Plan 029 only after Plan 028 closes and the owner chooses this as the
     next plan.
   - Audit staged paths, then commit admission records with
     `Plan 029: admit Hidden Thread release trial`.

2. **Freeze the accepted release matrix**
   - Read the decision, results, and review ledger for Plans 022 through 028.
   - Create `release-matrix.md` with one row per owner decision, its owning
     surface, required proof, viewport, and expected state.
   - Mark unresolved findings as blockers. Do not rewrite an earlier decision
     inside this plan.
   - Commit the matrix with `Plan 029: lock the Hidden Thread release matrix`.

3. **Prove the complete fake journey**
   - Create `HiddenThreadIntegration.test.tsx` with an in-memory API whose
     conversations and metadata survive component remount.
   - Cover the rite-to-chat handoff, empty and active threads, send and stream,
     chapter knot, safe raw HTML, failure and retry, rename, pin, archive,
     restore, active-thread fallback, and browser-local key status.
   - Run `npm test`. Record each failure without retrying it away.
   - Repair only accepted integration behavior. Add a failing test before every
     repair in the closest existing test file.
   - Run `npm test`, audit staged paths, and commit with
     `Plan 029: prove the complete fake journey`.

4. **Build and inspect the shipping bundle**
   - Run `npm run build` and inspect the generated file list and asset sizes in
     `src/weaver/web/dist/`.
   - Confirm `viewport-fit=cover`, manifest links, theme colour, service-worker
     registration, and current cache names in the built output.
   - Start the exact fake server command from Scope. Open it with fresh site
     data, reload it, close the browser, reopen it, and confirm one current UI
     version returns.
   - Add a failing regression before any service-worker or shell repair.
   - Commit the test, repair, and changed dist files with
     `Plan 029: verify the Hidden Thread shipping shell`.

5. **Run the responsive mobile matrix**
   - Use fresh site data for first-run entry and defer paths.
   - Run the complete release matrix with touch, the software keyboard, phone
     text scaling, orientation change, reduced motion, reload, and browser
     restart.
   - Repeat the full matrix at 320 x 568, 360 x 800, 390 x 844, and 412 x 915.
     Pay special attention to rite height, archive actions, composer plus
     keyboard height, safe-area fallbacks, and long messages.
   - Capture private screenshots, video, and responsive observations under
     `private/design-evidence/029/`.
   - Record every failure before repair. Add a regression test first where the
     behavior is automatable.

6. **Run the Redmi Note 14 usability trial**
   - Record the device model, browser, operating system, and actual CSS
     viewport without recording a persistent device id.
   - Repeat the full release matrix with touch, software keyboard, phone text
     scaling, orientation change, safe areas, screen reader, reload, and
     browser restart.
   - Run the accepted Plan 025 performance traces in default and reduced-motion
     modes. Record failures independently from responsive-mode results.

7. **Run desktop and accessibility trials**
   - Run the matrix at 1440 x 900 with archive open and collapsed, long reply,
     selection quoting, keyboard-only navigation, 200 percent zoom, reduced
     motion, reload, and browser restart.
   - Check VoiceOver or TalkBack on a phone and the available desktop screen
     reader for heading order, modal names, live status, reply reading order,
     composer context, and archive actions.
   - Repair only tested integration defects. Every repair commit starts
     `Plan 029:`.

8. **Run full verification and two independent reviews**
   - Run `npm run build`, `npm test`, and `uv run pytest` with no live fallback.
   - Give the release matrix, diffs, test output, and public-safe results to a
     behavior/privacy reviewer and a visual/accessibility reviewer.
   - Record findings and rechecks in `review-ledger.md`. Add a failing test
     before each repair that can be automated.
   - Repeat the affected real-device step after every phone or motion repair.

9. **Audit and stop for the owner release decision**
   - Inspect `git status`, then inspect the staged file list and staged diff.
     Stage exact files only. Never use `git add -A`.
   - Scan staging for credentials, key-shaped strings, `.env`, `config.toml`,
     chapter prose, chats, screenshots, receipts, private paths, and unrelated
     drift.
   - Present test counts, device results, performance measurements,
     accessibility findings, review status, files changed, and all deviations
     to the owner.
   - STOP. The owner records the dated accept or reject reason in `decision.md`.
   - If accepted, commit records and shipping files with
     `Plan 029: close Hidden Thread release trial`. Do not deploy.
