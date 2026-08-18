# Plan 025: Spellweave visual foundation

> **Executor instructions:** Build the shared responsive visual foundation that
> every Hidden Thread surface will use. Start each behavior with a failing test,
> preserve the current cosmic depth, and rebuild only the visual rules accepted
> in Plan 024.

## Status

- **Tooling:** React 19, TypeScript, Three.js, inline SVG, CSS custom properties,
  Vitest, Testing Library, Vite, and the root Python test suite.
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plan 024 closed with the owner's accepted mobile and desktop
  visual rules. Plan 025 copies no prototype code. It has no backend dependency;
  Plan 028 reconciles the later archive client with Plan 023's accepted API.
- **Priority:** P1. Plans 026 to 028 depend on these shared layers and tokens.
- **Effort:** L.
- **Risk:** High. Three.js pixel density, layered transparency, responsive
  geometry, and continuous motion can hurt battery, readability, or accessibility
  on a phone.
- **Budget:** about 45k to 70k agent tokens for an executor plus independent
  frontend review, estimated $0.60 to $2.25 in agent-context spend. Product
  execution is fake-only. No model request, API key, live provider spend, or
  deployment is allowed.

## Owner direction (locked decisions)

1. (2026-08-18) The main setting is the Spellweave. The Soul Sea stays outside
   the main conversation background and remains available as a reader/settings
   space.
2. (2026-08-18) The background has three readable depths:
   - distant: the current stars, galactic haze, divine lights, and cosmic scale;
   - middle: sharp deterministic silver Spellweave geometry composed for portrait
     and desktop;
   - foreground: event-driven threads and rune fragments connected to the header
     seal, Weaver response spine, composer, and current activity.
3. (2026-08-18) Rendering uses `min(devicePixelRatio, 2)`. Mobile earns the
   sharper pixels through lower star and segment budgets.
4. (2026-08-18) Silver carries interaction, old gold carries appraisal and
   Memory meaning, and crimson is reserved for corruption, danger, failed
   bindings, and destructive actions.
5. (2026-08-18) Polished black wood is the strong interface material. It is used
   with restraint for objects such as the composer, seals, and archive controls.
6. (2026-08-18) Phone and desktop share components and tokens. Each gets a
   deliberate composition rather than a stretched or cropped version of the
   other.
7. (2026-08-18) New interface transitions use the existing
   `--motion-fast`, `--motion-smooth`, and `--ease-weave` tokens. Reduced motion
   removes travel, gathering, parallax, and repeated pulses while keeping state
   changes clear.
8. (2026-08-18) The approved board controls mood and material. The production
   work uses original code-native geometry and does not ship the reference image.

## Scope

- Add one tested render-profile helper at
  `src/weaver/web/frontend/lib/spellRenderProfile.ts` with tests in
  `src/weaver/web/frontend/lib/spellRenderProfile.test.ts`.
- Add deterministic, normalized thread geometry at
  `src/weaver/web/frontend/lib/spellGeometry.ts` with tests in
  `src/weaver/web/frontend/lib/spellGeometry.test.ts`.
- Refactor `src/weaver/web/frontend/components/SpellBackground.tsx` into the
  distant cosmic layer. Keep the existing star, divine-light, and haze language;
  apply the tested DPR and device budgets.
- Create `src/weaver/web/frontend/components/SpellweaveBackdrop.tsx` as the
  shared layer coordinator, with tests in
  `src/weaver/web/frontend/components/SpellweaveBackdrop.test.tsx`.
- Create `src/weaver/web/frontend/components/SpellweaveField.tsx` for the
  decorative, pointer-transparent SVG middle and foreground layers.
- Create `src/weaver/web/frontend/styles/spellweave.css` for layer order,
  original black-wood texture, semantic materials, responsive geometry, event
  states, and reduced motion.
- Update `src/weaver/web/frontend/styles/tokens.css` with semantic aliases for
  interaction silver, appraisal gold, corruption crimson, black wood, depth,
  and line contrast. Existing token values remain the base palette.
- Replace the directly mounted background pieces in
  `src/weaver/web/frontend/components/SpellSurfaceChatApp.tsx` with
  `SpellweaveBackdrop`.
- Update `src/weaver/web/frontend/components/SpellSurfaceSettings.tsx` and
  `src/weaver/web/frontend/components/SpellSurfaceSoulSea.tsx` so the Soul Sea
  remains a restrained reader/settings space after it leaves the main chat.
- Update `src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx` to
  prove the shared backdrop is mounted and decorative layers cannot capture
  focus or pointer input.
- Remove superseded background and Soul Sea main-surface rules from
  `src/weaver/web/frontend/styles/spell-surface-lab.css`. Preserve unrelated
  owner changes in the same file.
- Rebuild and commit `src/weaver/web/dist/` because the root Vite build is what
  ships.
- Capture private visual evidence at 320 x 568, 360 x 800, 390 x 844,
  412 x 915, and 1440 x 900. Capture real-device visual and performance
  evidence on the Redmi Note 14 at its measured CSS viewport under
  `private/design-evidence/025/`.
- Before implementation passes the learning gate, record owner-accepted numeric
  budgets in `learning.md`: capped DPR, render-object counts per profile,
  built asset bytes, measured frame-time target for named interactions, and
  allowed long tasks during the named trace window. Record both the limits and
  the final measurements in `results.md` so Plan 029 has an executable
  performance contract.

## Out of scope

- The four-act rite, reply layout, composer rebuild, Thread Archive, and their
  final animations. Plans 026, 027, and 028 own those surfaces.
- Conversation metadata, routes, persistence, state schemas, provider behavior,
  key storage, retrieval, prompt changes, or model calls.
- A LOTM visual edition or a general theme marketplace.
- New dependencies, image assets, custom fonts, audio, haptics, or WebGL for
  foreground controls.
- Reusing prototype HTML/CSS. The prototype supplies accepted rules only.
- Changing the existing motion-token durations or easing curve.

## Deterministic proof / verification floor

1. `npm test -- --run src/weaver/web/frontend/lib/spellRenderProfile.test.ts`
   passes and proves DPR never exceeds 2, phone budgets are below desktop
   budgets, and reduced motion selects a static profile.
2. `npm test -- --run src/weaver/web/frontend/lib/spellGeometry.test.ts` passes
   and proves geometry is deterministic, normalized, bounded, and different for
   portrait and desktop profiles.
3. `npm test -- --run src/weaver/web/frontend/components/SpellweaveBackdrop.test.tsx`
   passes and proves layer order, decorative accessibility, event states, pause,
   and reduced-motion behavior.
4. `npm test -- --run src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx`
   passes after the shared backdrop replaces the old mounts.
5. `npm run build`, `npm test`, and `uv run pytest` all pass from the repository
   root.
6. `git diff --check` passes. `rg -n "devicePixelRatio|setPixelRatio|prefers-reduced-motion|motion-smooth|ease-weave"`
   across the changed frontend files shows the intended DPR, motion, and reduced
   motion paths.
7. Browser evidence across the four mobile matrix sizes and 1440 x 900 proves
   crisp threads,
   readable text, correct safe areas, no clipped geometry, and no visual drift
   between phone and desktop.
8. On the Redmi Note 14, an idle 60-second observation and repeated send/reply-state
   simulation show no obvious stutter, touch blockage, runaway animation after
   backgrounding, or unreadable contrast. Record device and browser. Do not
   invent a frame-rate number without a profiler capture.
9. Before the learning gate closes, a profiler capture supplies concrete
   object, pixel-ratio, asset, frame-time, and long-task limits. The owner
   accepts or adjusts those numeric limits, and `results.md` records the final
   measured values for Plan 029.
10. The owner reviews the three depths on phone and desktop. Automated tests
   cannot accept the visual result.

## STOP conditions

- If Plan 024 is not closed, STOP.
- If the accepted Plan 024 direction cannot be built from original CSS, SVG,
  canvas, and shader code, STOP before adding or tracing an image asset.
- If this plan needs a backend, persistence, API, service-worker, identity,
  first-run, or key-storage change, STOP and return it to the owning plan.
- If any measured device requires DPR above 2 for acceptable output, or DPR 2
  cannot stay responsive under the phone budget, STOP and present both captures.
- If the middle weave cannot remain deterministic across resize and remount,
  STOP before adding random geometry as a fallback.
- If removing the Soul Sea from chat breaks its reader/settings use, STOP and
  repair the boundary without deleting that feature.
- If foreground SVG or CSS blocks pointer input, enters the accessibility tree,
  or drops text contrast below WCAG AA, STOP.
- If reduced motion still travels, gathers, parallax-shifts, or loops decorative
  pulses, STOP.
- If `npm run build` changes files outside the expected dist bundle, STOP and
  audit the build before staging.

## Slices

1. **Plan and admit**
   - Confirm Plan 024 is closed and the accepted prototype rules are
     copied into `learning.md`.
   - Review scope, file ownership, and budget with the owner.
   - Admit and commit records with
     `Plan 025: admit Spellweave visual foundation`.

2. **Freeze the current visual baseline**
   - Capture the current production surface across the four mobile matrix sizes
     and 1440 x 900 before edits.
   - Inspect the current Three.js lifecycle, `setPixelRatio(1)`, star and segment
     counts, resize cleanup, visibility handling, Soul Sea mount, layer order,
     CSS breakpoints, and reduced-motion rules.
   - Record current observations and the accepted Plan 024 deltas. Do not edit
     code in this slice.
   - Capture the named idle and activity traces on the owner phone. Propose
     numeric object, asset, frame-time, and long-task limits from that evidence,
     then STOP until the owner accepts or changes them in `learning.md`.

3. **Prove render profiles with a red/green loop**
   - Write failing `spellRenderProfile.test.ts` cases for capped DPR, phone and
     desktop budgets, reduced-motion static mode, and narrow landscape.
   - Run the targeted test and record the expected failure.
   - Add the smallest typed helper in `spellRenderProfile.ts`.
   - Run the targeted test and record the pass.
   - Commit exact files with
     `Plan 025: add tested Spellweave render profiles`.

4. **Prove deterministic geometry with a red/green loop**
   - Write failing `spellGeometry.test.ts` cases for stable seed output,
     normalized coordinates, bounded connection counts, portrait anchors, and
     desktop anchors.
   - Run the targeted test and record the expected failure.
   - Add pure geometry functions with no DOM or Three.js dependency.
   - Run the targeted test and record the pass.
   - Commit exact files with
     `Plan 025: add deterministic Spellweave geometry`.

5. **Sharpen the distant cosmic layer**
   - Refactor `SpellBackground.tsx` to consume the tested render profile.
   - Set renderer DPR from the capped profile and update shader uniforms after
     resize or profile change.
   - Keep desktop's current cosmic density. Reduce phone stars and thread
     segments enough to pay for DPR 2.
   - Pause animation when hidden, explicitly paused, or reduced motion is
     active. Dispose every Three.js resource and listener on unmount.
   - Extend tests around the pure profile rather than snapshotting WebGL output.
   - Commit exact files with
     `Plan 025: sharpen the distant Nightmare Spell field`.

6. **Build the tested middle and foreground layers**
   - Write failing component tests for layer order, `aria-hidden`, pointer
     transparency, portrait/desktop profile markers, and activity states.
   - Add `SpellweaveField.tsx`, `SpellweaveBackdrop.tsx`, and
     `spellweave.css` using normalized SVG geometry.
   - Tie foreground state names to existing activity only: idle, reaching,
     reading, answering, complete, and failed. This plan draws the shared
     response; later surfaces decide when to send each state.
   - Add reduced-motion CSS using existing motion tokens for state transitions
     and no decorative travel.
   - Run the component test and commit exact files with
     `Plan 025: add shared Spellweave layers`.

7. **Install semantic materials and responsive composition**
   - Add semantic aliases to `tokens.css`. Keep direct crimson use limited to
     failure, corruption, danger, and destructive controls.
   - Add the original black-wood material as layered CSS gradients with no
     downloaded texture.
   - Compose portrait and desktop anchor layouts in `spellweave.css`.
   - Search changed CSS for hard-coded transition durations and replace new UI
     durations/easings with the existing motion tokens.
   - Commit exact files with
     `Plan 025: add responsive Spellweave materials`.

8. **Integrate the shared backdrop**
   - Write failing live-surface tests for the shared backdrop mount and
     decorative behavior.
   - Replace direct background pieces in `SpellSurfaceChatApp.tsx` with the
     coordinator. Move the existing Soul Sea presentation into the reader/settings
     surface and prove that path through the live-surface test.
   - Remove only superseded rules from `spell-surface-lab.css`.
   - Run the targeted tests, then `npm test`.
   - Commit exact files with
     `Plan 025: connect the live surface to Spellweave`.

9. **Phone and desktop inspection**
   - Run the build, serve locally, and capture all three target sizes.
   - Inspect DPR, resize, scroll, keyboard, background/foreground recovery,
     200 percent zoom, high contrast, reduced motion, and tab order.
   - Run the Redmi Note 14 idle and activity-state pass in portrait and
     landscape. Record failures before any repair.
   - Ask the owner to confirm depth, sharpness, material, and responsive
     composition before closure.

10. **Independent review, full floor, and owner decision**
    - Give an independent frontend reviewer the plan, changed-file list, test
      output, and private captures. The reviewer checks code cleanup, rendering
      disposal, accessibility, performance claims, and scope.
    - Repair findings with the same targeted red/green loop, then rerun the full
      floor.
    - Build the committed dist, run `git status`, stage only Plan 025 files, and
      audit staged content for keys, private images, chapter text, and unrelated
      worktree changes.
    - Record the accepted numeric performance limits, final measurements,
      measured agent usage, and the owner's dated accept/reject reason.
    - Commit closure with
      `Plan 025: close Spellweave visual foundation`.
