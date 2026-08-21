# Plan 026: Hidden Thread initiation rite

> **Executor instructions:** Replace the generic first-run card with the accepted
> four-act Hidden Thread rite on the shared Plan 025 foundation. Preserve the
> existing browser-local key and first-run behavior exactly, then prove the whole
> rite on phone and desktop before closure.

## Status

- **Tooling:** React 19, TypeScript, CSS, original generated raster art, Vitest,
  Testing Library, Vite, and the root Python test suite.
- **State:** closed 2026-08-21; owner accepted for the 1.1.0 release.
- **Depends on:** Plan 022 closed for accepted lore and copy boundaries; Plan 025
  closed for the responsive Spellweave layers, materials, render profiles, and
  motion rules. The rite preserves the existing conversation handoff and has no
  dependency on Plan 023's later archive metadata contract.
- **Priority:** P1. This is the reader's first contact with Weaver.
- **Effort:** L.
- **Risk:** High. The rite touches first-run storage, BYOK entry, focus control,
  keyboard layout, motion, and the handoff into the real chat.
- **Budget:** about 40k to 65k agent tokens for an executor plus accessibility
  and visual review, estimated $0.50 to $2.00 in agent-context spend. Product
  execution is fake-only. No key validation call, model request, live provider
  spend, or deployment is allowed.

## Owner direction (locked decisions)

1. (2026-08-18) Keep the accepted process and wording. Change the card-shaped UI,
   transitions, motion, and materials so the lore controls the experience.
2. (2026-08-18) The rite fills the whole viewport. There is no rounded onboarding
   card floating above the app.
3. (2026-08-18) Act one begins nearly black. A silver thread and rune fragments
   gather into an original, temporary impression of Weaver's horned mask and
   dark priestly mantle. It is atmospheric, not a permanent character portrait.
4. (2026-08-18) Act two unweaves the first inscription and carries its fragments
   along the same thread into the plain DeepSeek explanation and platform link.
5. (2026-08-18) Act three binds the browser-local key through a masked input cut
   into black wood. Each typed character adds a restrained light bead and a
   stored value closes into a sealed knot. The UI never says the key was tested
   or accepted by DeepSeek.
6. (2026-08-18) `Enter later` remains available before completion. Deferring
   leaves the conversation usable and shows `[The voice remains unbound.]` near
   the composer until a key is present and enabled.
7. (2026-08-18) Act four replaces each appraisal tier in order: Good,
   Exceptional, Remarkable, then Glorious. Glorious leaves an old-gold mark.
8. (2026-08-18) The rite does not close like a modal. The dark mantle parts,
   the thread extends into the response spine and composer, and the existing
   conversation is revealed as the same scene.
9. (2026-08-18) Mobile and desktop use the same component and state machine.
   Their compositions differ only through responsive layout.
10. (2026-08-18) The approved board is private reference material. The mask,
    threads, fragments, seals, and wood are original code-native work.
11. (2026-08-19) Owner visual review rejected the geometric mask. One original
    generated mask image is allowed after rereading the bounded novel and
    private identity records. This narrowly overrides decision 10 for the mask
    asset only. Supplied cover, board, and mask pixels remain reference-only.
12. (2026-08-19) The same distinct mask identity replaces the temporary
    appraisal seal and spider marks at suitable hero, seal, and navigation
    sizes. Threads, fragments, and motion stay code-native.
13. (2026-08-19; amended 2026-08-21) The replay-only fake appraisal path was
    temporary. Before the owner-approved 1.1.0 release, it and its completion
    copy were removed. Replay remains available without changing saved
    first-run state.
14. (2026-08-19) Pin-button failure and weak archived-state distinction are
    accepted user feedback for Plan 028. Plan 026 may inspect and record the
    current fault but does not change archive behavior.
15. (2026-08-21) Owner review keeps the mask scene present through all four
    acts. It fits fully inside each viewport during awakening, recedes into a
    distant background for initiation, binding, and appraisal, then gives way
    to the live Spellweave during reveal. Mask identity marks have no visible
    circle, badge, or frame. The top-left `First Nightmare` label is removed.
16. (2026-08-21) The decorative rite artwork never receives pointer or drag
    input. Reload work must remove measured startup waste without weakening the
    live Spellweave, reduced-motion behavior, offline shell, or shared chat.
17. (2026-08-21) The original small Weaver mask mark is the browser and PWA
    icon. One matching static route is allowed so the production app can serve
    its WebP favicon. This is the sole backend-route exception for this plan.

## Scope

- Preserve `src/weaver/web/frontend/lib/firstNightmare.ts` behavior and its tests:
  a fresh browser opens the rite; `deferred` and `completed` keep it closed on
  later visits.
- Preserve `src/weaver/web/frontend/lib/identity.ts` as the only key store. The
  rite calls the existing `setApiKey()` and reads the existing enabled/disabled
  state. No key value enters component logs, errors, snapshots, or fixtures.
- Refactor `src/weaver/web/frontend/components/FirstNightmareSetup.tsx` into the
  full-screen four-act state owner. Keep the current public prop contract unless
  a failing integration test proves a small typed change is necessary.
- Replace the rejected geometric mask with one original generated raster asset
  informed by a bounded reread of the novel and private identity record. Use a
  responsive image component with useful crops for awakening, appraisal seal,
  and small Weaver marks.
- Refine `src/weaver/web/frontend/components/FirstNightmareRunes.tsx` for the
  accepted fragment, thread, binding, and appraisal states.
- Create `src/weaver/web/frontend/components/FirstNightmareSetup.test.tsx` for
  the rite's state, focus, keyboard, storage error, and motion-safe behavior.
- Update `src/weaver/web/frontend/components/SpellSurfaceChatApp.tsx` so the
  rite's completion state drives `SpellweaveBackdrop` into a continuous reveal
  and focuses the composer only after the reveal settles.
- Update `src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx` for
  fresh-run gating, defer, key round-trip, reveal handoff, honest unbound status,
  Escape behavior, and no modal-shaped wrapper.
- Create `src/weaver/web/frontend/styles/hidden-thread-initiation.css` for the
  full-screen responsive composition, mask, fragments, black-wood inscription,
  binding beads, appraisal, mantle reveal, safe areas, keyboard constraints, and
  reduced motion.
- Remove superseded `.first-nightmare-*` card styles and keyframes from
  `src/weaver/web/frontend/styles/spell-surface-lab.css` without touching
  unrelated work.
- Update `src/weaver/web/frontend/components/Composer.tsx` and
  `src/weaver/web/frontend/components/Composer.test.tsx` only for the honest
  bound/unbound inscription in this plan's owner direction. Its state comes
  from `identity.ts`; the composer rebuild itself belongs to Plan 027.
- Rebuild and commit `src/weaver/web/dist/` because the root build is the shipped
  frontend.
- Save phone and desktop captures under `private/design-evidence/026/`.
- Measure a throttled fresh load and reload, keep the distant Three.js renderer
  unmounted while the full-screen rite hides it, and record the before/after
  startup evidence under `private/design-evidence/026/`.
- Use the original small Weaver mask mark for the favicon and PWA manifest,
  including the one static serving route required by the production app.
- Inspect the current pin and archived-state behavior read-only, then record the
  reproduction and Plan 028 handoff without editing that surface.

## Out of scope

- Validating a key against DeepSeek, making a model call, changing BYOK headers,
  storing keys on the server, accounts, billing, or pooled keys.
- Changing device ID behavior, chat privacy, markdown rendering, assistant
  prompts, backend routes beyond the owner-approved static favicon route,
  persistence, schemas, retrieval, or novel data.
- The final response-spine layout, user-message shard styling, composer rebuild,
  or Thread Archive. Plans 027 and 028 own those surfaces.
- Shipping the approved image, supplied cover art, downloaded texture, custom
  font, audio, or haptics. The single original generated mask approved in owner
  direction 11 is the only raster-art exception.
- New appraisal copy or new canon claims. Plan 022's accepted record controls
  every lore-facing line.
- A separate mobile component tree or a desktop-only follow-up pass.

## Deterministic proof / verification floor

1. `npm test -- --run src/weaver/web/frontend/lib/firstNightmare.test.ts` passes
   with the existing first-run state contract.
2. `npm test -- --run src/weaver/web/frontend/lib/identity.test.ts` passes and
   proves trim, clear, disable, and header behavior remain unchanged.
3. `npm test -- --run src/weaver/web/frontend/components/FirstNightmareSetup.test.tsx`
   passes. It covers four-act order, Back, Enter later, masked entry, storage
   failure, focus containment, Escape, appraisal replacement, reduced motion,
   and completion callback timing.
4. `npm test -- --run src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx`
   passes. It covers fresh-run gating, deferral, key round-trip, unbound status,
   continuous reveal, composer focus, and existing mobile archive behavior.
5. `npm test -- --run src/weaver/web/frontend/components/Composer.test.tsx`
   passes, including the honest bound/unbound inscription.
6. `npm run build`, `npm test`, and `uv run pytest` all pass from the repository
   root.
7. `git diff --check` passes. Searches across changed files find no imported
   private reference or cover image, no literal key fixture shaped like a real
   credential, no new hard-coded transition timing, and no key-validation
   network path.
8. Across 320 x 568, 360 x 800, 390 x 844, and 412 x 915 browser viewports,
   evidence uses DPR 2, touch emulation, and CPU throttling to cover all four
   acts, software keyboard open/close, safe areas, 200 percent text zoom, Back,
   Enter later, storage failure, completion, and reduced motion.
9. At 1440 x 900, evidence covers the same component with the wide mask/thread
   composition, readable line length, keyboard navigation, and continuous chat
   reveal.
10. The owner reviews the phone-matrix and desktop evidence. Passing tests
    cannot accept the visual or emotional result.

## STOP conditions

- If Plans 022, 023, or 025 are not closed, STOP.
- If the accepted Plan 022 copy conflicts with any line proposed for the rite,
  STOP and show the owner the exact conflict before editing copy.
- If the implementation needs a backend route other than the owner-approved
  static favicon route, schema change, provider call, key validation, or
  server-side key state, STOP.
- If any key value would enter logs, test snapshots, error reporting, HTML
  attributes, analytics, or a committed fixture, STOP and remove it.
- If the generated mask copies a supplied composition, traces or extracts
  pixels from the approved board or cover art, or cannot be clearly described
  as original, STOP and reject the asset.
- If the 320 x 568 keyboard-open state cannot keep the active input and primary
  action reachable, STOP and bring the layout tradeoff to the owner.
- If reduced motion removes information, focus becomes trapped after completion,
  Escape bypasses the stored deferral state, or the background receives input,
  STOP.
- If the continuous reveal requires duplicate chat trees or a fake conversation
  surface, STOP and repair the shared-component boundary.
- If the owner rejects mask scale, thread motion, appraisal pace, wood material,
  or reveal in the phone-matrix evidence, record the failed result. Do not close
  the plan.

## Slices

1. **Plan and admit**
   - Confirm Plans 022, 023, and 025 are closed.
   - Review the locked copy, key boundary, component paths, visual evidence, and
     budget with the owner.
   - Admit and commit records with
     `Plan 026: admit Hidden Thread initiation rite`.

2. **Inspect and freeze existing behavior**
   - Read `FirstNightmareSetup.tsx`, `FirstNightmareRunes.tsx`,
     `SpellSurfaceChatApp.tsx`, `Composer.tsx`, `firstNightmare.ts`, `identity.ts`,
     their tests, the Plan 022 copy record, and the Plan 025 visual contract.
   - Run the targeted first-run, identity, composer, and live-surface tests before
     changes. Record their counts and current behavior.
   - Capture the current card UI on all three target sizes as comparison evidence.

3. **Write the four-act contract as failing tests**
   - Create `FirstNightmareSetup.test.tsx` with one focused test per act and one
     for each escape/error path.
   - Assert that only the current appraisal tier is visually current, with
     Glorious remaining at the end.
   - Assert that reduced motion reaches the same states without travel delays.
   - Run the targeted test and record the expected failures before production
     changes.
   - Commit the failing contract with
     `Plan 026: define the initiation rite contract`.

4. **Build act one and the original mask**
   - Create `HiddenThreadMask.tsx` from original inline SVG paths and CSS. Keep it
     decorative, labelled out of the accessibility tree, and pointer-transparent.
   - Refactor step one into a full-viewport scene with the accepted hidden-thread
     inscription, title, primary thread action, and Enter later action.
   - Make the mask temporary and subordinate to the copy at phone and desktop
     sizes.
   - Pass the act-one and focus tests, then commit exact files with
     `Plan 026: build the hidden thread awakening`.

5. **Build act two as an unweaving transition**
   - Reuse the same thread and fragments while replacing the inscription with
     the plain DeepSeek explanation.
   - Keep the external platform link safe with `target="_blank"` and
     `rel="noreferrer"`, and keep its accessible new-tab note.
   - Preserve Back, Enter later, tab order, and focus movement.
   - Pass the act-two tests, then commit exact files with
     `Plan 026: reveal the DeepSeek key step`.

6. **Build act three and preserve BYOK**
   - Bind the masked input to existing `getApiKey()` and `setApiKey()` only.
   - Derive decorative bead count from input length without placing characters
     in DOM attributes or CSS variables.
   - Show the sealed knot only after local storage succeeds. Keep the existing
     honest storage failure and disabled submit behavior.
   - Do not validate the key or imply validation.
   - Pass storage, keyboard, error, and privacy tests, then rerun
     `identity.test.ts`.
   - Commit exact files with
     `Plan 026: bind the browser-local voice key`.

7. **Build act four and the continuous reveal**
   - Replace appraisal tiers in the accepted order using the Plan 025 gold
     semantic token only for the final mark.
   - Add a typed completion/reveal state to `FirstNightmareSetup.tsx` and
     `SpellSurfaceChatApp.tsx`. Keep the real chat mounted once and reveal it
     through the shared backdrop.
   - Restore focus to the composer after the reveal settles. Reduced motion
     performs an immediate state change with the same focus result.
   - Pass appraisal, callback, reveal, and focus tests.
   - Commit exact files with
     `Plan 026: open the rite into the conversation`.

8. **Add the honest unbound state**
   - Write failing composer/live-surface tests for no key, disabled key, and
     enabled key.
   - Show `[The voice remains unbound.]` near the composer when no enabled key is
     available. Remove it as soon as the existing identity state becomes bound.
   - Keep API headers and settings behavior unchanged.
   - Pass composer, identity, and live-surface tests.
   - Commit exact files with
     `Plan 026: show honest voice binding state`.

9. **Responsive styling and reduced motion**
   - Create `hidden-thread-initiation.css` and import it from the rite component.
   - Use safe-area insets, minimum 44px actions, at least 16px input text,
     keyboard-safe viewport sizing, and readable line lengths.
   - Use Plan 025 semantic materials and existing motion tokens. Remove
     superseded card rules from `spell-surface-lab.css`.
   - Add the reduced-motion path and verify every act remains understandable.
   - Run all targeted tests and commit exact files with
     `Plan 026: finish the responsive initiation surface`.

10. **Phone and desktop owner gate**
    - Build and serve the app with fake chat behavior. Never enter or use a real
      DeepSeek key.
    - Record every required state across the four mobile matrix sizes and
      1440 x 900.
   - Test touch, keyboard, safe areas, rotate/resize, 200 percent zoom, reduced
     motion, storage denial, defer, refresh, and completion across the mobile
     matrix and narrow landscape.
    - Ask the owner to judge mask, depth, transition language, appraisal, and
      the final reveal. Record failures before repair.

11. **Independent review, full floor, and owner decision**
    - Give an independent reviewer the plan, accepted Plan 022 copy, changed
      files, tests, and private captures. Review accessibility, privacy, cleanup,
      originality, and scope.
    - Repair findings through targeted failing tests, then rerun the full floor.
    - Build dist, run `git status`, stage only Plan 026 files, and audit staged
      content for credentials, private images, chapter text, raw reasoning, and
      unrelated worktree changes.
    - Record measured agent usage and the owner's dated accept/reject reason.
    - Commit closure with
      `Plan 026: close Hidden Thread initiation rite`.

12. **Owner-rejected mask and review repair**
    - Read the bounded mask passages and private product-identity notes before
      prompting image generation. Record short public-safe visual constraints,
      never novel prose.
    - Generate one original mask asset, inspect it against the accepted tone and
      originality boundary, then integrate responsive hero, seal, and small-mark
      variants from that same source.
    - Keep random fake appraisal selection replay-only and direct. Prove it never
      stores a key or changes first-run state.
    - Record the pin/archive reproduction for Plan 028 without changing its
      files or behavior.
    - Repeat the phone and desktop visual gate before final review.
