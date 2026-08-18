# Plan 024: Hidden Thread responsive prototype

> **Executor instructions:** Build a disposable browser lab for the Hidden
> Thread direction and put it on a real phone before any production UI work.
> Keep every prototype file under `private/design-labs/024-hidden-thread-responsive/`;
> production frontend files are read-only in this plan.

## Status

- **Tooling:** root `npm` scripts for regression checks, Node's built-in test
  runner for the private lab state, a local static server, browser responsive
  mode, and a real phone on the same local network.
- **State:** admitted 2026-08-18 (owner direction).
- **Depends on:** Plan 022 closed with the Hidden Thread canon and identity
  record accepted. The prototype uses Plan 023's locked draft metadata shape
  as a disposable fixture, but does not depend on Plan 023 implementation or
  closure.
- **Priority:** P1. This is the cheap visual rejection point before production
  work starts.
- **Effort:** M.
- **Risk:** Medium. A screenshot can look right while the transition, thumb
  reach, text density, or desktop composition still feels wrong.
- **Budget:** about 25k to 40k agent tokens for one executor and one independent
  visual reviewer, estimated $0.25 to $1.25 in agent-context spend. Product
  execution is fake-only. No DeepSeek request, live model call, private key, or
  deployment is allowed.

## Owner direction (locked decisions)

1. (2026-08-18) The approved board at
   `private/design-references/hidden-thread-mobile-approved.png` locks the
   composition, silver thread language, black-wood material, typography mood,
   mask silhouette, restrained old gold, user-message shards, and Weaver reply
   spine.
2. (2026-08-18) The approved board's flat black field is incomplete. The lab
   must preserve the current Nightmare Spell feeling: distant stars and cosmic
   depth, a sharp intentional Spellweave, and foreground rune fragments tied to
   the interface.
3. (2026-08-18) The setup becomes a full-screen rite. The user stays inside one
   visual scene while the rite opens into the conversation.
4. (2026-08-18) The lab covers three scenes: the four-act rite, empty and active
   conversation, and the Thread Archive.
5. (2026-08-18) Mobile support is judged across 320 x 568, 360 x 800,
   390 x 844, and 412 x 915 CSS viewports, plus portrait and landscape use on
   the owner's Redmi Note 14. Record the phone's actual browser CSS viewport;
   its 1080 x 2400 physical display is not treated as a CSS viewport. Desktop
   is judged at 1440 x 900 during the same plan.
6. (2026-08-18) The mask must be an original code-native interpretation. The
   approved image and supplied cover art remain private visual references. No
   traced or extracted pixels ship.
7. (2026-08-18) The owner makes the visual call on a real phone before Plan 025
   may be admitted.

## Scope

- Read the accepted Plan 022 identity record and inspect the current production
  surface before drawing: `SpellBackground.tsx`, `SpellSurfaceChatApp.tsx`,
  `SpellSurfaceRail.tsx`, `FirstNightmareSetup.tsx`, `FirstNightmareRunes.tsx`,
  `tokens.css`, and `spell-surface-lab.css`.
- Build a standalone prototype at these exact paths:
  - `private/design-labs/024-hidden-thread-responsive/index.html`
  - `private/design-labs/024-hidden-thread-responsive/prototype.css`
  - `private/design-labs/024-hidden-thread-responsive/prototype.mjs`
  - `private/design-labs/024-hidden-thread-responsive/prototype-state.mjs`
  - `private/design-labs/024-hidden-thread-responsive/prototype-state.test.mjs`
- Let the owner switch between rite, empty chat, active chat, and Thread Archive
  without a server or model call.
- Prototype the full scene change from Glorious appraisal into the live
  conversation. This interaction is the main question the lab must answer.
- Compose a portrait Spellweave across the mobile matrix and a wider reading
  chamber for desktop. The same visual rules must survive all three sizes.
- Use safe fixture copy. Any answer text is visibly labelled visual filler and
  makes no canon claim.
- Record the owner's observations and final accept/reject decision in the plan
  deliverables. Keep screenshots and recordings under `private/design-evidence/024/`.

## Out of scope

- Any edit to `src/weaver/web/frontend/`, `src/weaver/web/dist/`, backend code,
  routes, persistence, schemas, `novels/`, `.weaver/`, configuration, or secrets.
- Production component architecture, final animation code, final shader work,
  asset export, service-worker changes, or deployment.
- Copying prototype markup or CSS into production. Plan 025 rebuilds the
  accepted visual rules against the real component boundaries.
- A LOTM skin, real book switching, accounts, or new assistant behavior.
- Proving canon. Plan 022 owns canon and product fan-fiction boundaries.

## Deterministic proof / verification floor

1. `node --test private/design-labs/024-hidden-thread-responsive/prototype-state.test.mjs`
   passes. It covers scene order, reduced-motion state, and viewport profile
   selection.
2. `node --check private/design-labs/024-hidden-thread-responsive/prototype.mjs`
   and `node --check private/design-labs/024-hidden-thread-responsive/prototype-state.mjs`
   pass.
3. `npm run build` and `npm test` pass from the repository root, proving the
   read-only production surface did not regress.
4. The lab is served with
   `uv run python -m http.server 4174 --directory private/design-labs/024-hidden-thread-responsive`.
5. Browser evidence covers the four mobile matrix sizes and 1440 x 900. Each capture
   includes rite start, key-binding act, appraisal-to-chat reveal, active chat,
   and Thread Archive.
6. A Redmi Note 14 check records its actual CSS viewport and covers portrait,
   landscape, safe areas, keyboard opening, 200 percent text
   zoom, thumb reach, archive scrolling, reduced motion, and the full rite-to-chat
   transition.
7. The owner records an explicit visual decision. Passing commands cannot
   accept the design.

## STOP conditions

- If Plan 022 is still open, STOP. Its accepted identity is an input to this
  lab. If Plan 023's locked draft shape changes, update the disposable fixture
  before review; do not block the visual lab on backend implementation.
- If the lab requires an edit outside
  `private/design-labs/024-hidden-thread-responsive/` or this plan's
  deliverables, STOP and reduce the prototype.
- If the visual direction needs unlicensed cover pixels or a traced mask, STOP
  and replace it with original vector geometry.
- If the Redmi Note 14 is unavailable, STOP at the real-device usability gate.
  Responsive mode cannot prove touch, keyboard, GPU, or screen-reader behavior.
- If the cosmic background makes text contrast fail, causes obvious frame
  drops, or hides the thread hierarchy, STOP and present the failed capture.
- If mobile and desktop need separate component ideas rather than responsive
  compositions of the same scene, STOP and show the owner both options.
- If the owner rejects the continuous reveal, mask treatment, background depth,
  archive model, or chat composition, record the rejection. Do not quietly
  revise and call it accepted.

## Slices

1. **Plan and admit**
   - Review this doc, its budget, and `learning.md` with the owner.
   - Admit Plan 024 only after Plan 022 is closed and Plan 023's draft summary
     shape has been cross-checked.
   - Audit staged paths, then commit the admission records with
     `Plan 024: admit responsive Hidden Thread prototype`.

2. **Inspect the accepted inputs**
   - Read the Plan 022 identity record and Plan 023 API result.
   - Read the exact production files listed in Scope. Record what the prototype
     must preserve, especially current cosmic depth, first-run state, key
     privacy, focus behavior, and archive actions.
   - Confirm the approved image remains ignored by git and reference-only.
   - STOP and show the owner any conflict between the accepted lore, API, and
     visual board.

3. **Write the lab interaction contract first**
   - Create `prototype-state.test.mjs` with failing tests for the allowed scene
     sequence, viewport profiles, and reduced-motion behavior.
   - Run the targeted Node test and record the expected failure.
   - Create the smallest `prototype-state.mjs` that passes those tests.
   - Run the targeted test again and record the pass.
   - Commit only the plan-owned record with
     `Plan 024: prove prototype scene states`. The private lab remains untracked.

4. **Build the three responsive scenes**
   - Create the static HTML, CSS, and module files under the private lab path.
   - Build the rite first, including mask manifestation, key explanation,
     binding line, appraisal sequence, and continuous reveal.
   - Add empty and active chat with a Weaver reply spine, compact user shards,
     current book/chapter context, and the black-wood composer.
   - Add the full-screen mobile Thread Archive and persistent desktop archive
     composition using fixture conversations from Plan 023's accepted shape.
   - Add the three background depths. Distant stars establish scale, middle
     threads form the Spellweave, and foreground fragments connect to controls.
   - Use CSS and inline SVG built for this lab. Do not import production code.

5. **Run the desktop review before phone review**
   - Serve the lab locally and capture 1440 x 900.
   - Check reading width, archive persistence, line length, thread continuity,
     composer position, focus order, and 200 percent text zoom.
   - Repair only lab files. Record every failed observation before the repair.

6. **Run the Redmi Note 14 usability gate**
   - Open the same lab on the owner's Redmi Note 14. Record its actual CSS
     viewport, browser, operating system, orientation, and text scaling.
   - Verify 320 x 568, 360 x 800, 390 x 844, and 412 x 915 in responsive mode.
   - Let the owner use every transition with touch and the software keyboard.
   - Ask for one decision covering mask, depth, motion, rite reveal, active chat,
     archive, and desktop composition.
   - Record accepted rules and rejected details in `learning.md`. Plan 025 may
     use only accepted rules.

7. **Inspect, review, and close**
   - Run the full verification floor.
   - Use an independent visual reviewer to compare the lab against this plan,
     the Plan 022 identity record, and the approved board. The reviewer cannot
     accept the direction.
   - Audit staged files for private images, keys, chapter text, and lab files.
   - Record the owner's dated accept/reject reason in `decision.md`.
   - Commit closure records with
     `Plan 024: close responsive Hidden Thread prototype`.
