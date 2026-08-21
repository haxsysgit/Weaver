# Results

## Status

Implementation in progress.

## Frozen v1 behavior

- Existing first-run, identity, composer, and live-surface tests passed 20/20.
- A fresh browser opens the setup; `deferred` and `completed` keep it closed.
- Escape records deferral, focus stays inside the setup, and unmount restores
  the previous control.
- Key entry uses `identity.ts`, trims before storage, and makes no validation
  request.
- The v1 chat, composer, and Spellweave stay mounted behind the setup.

## Four-act red contract

The new focused rite suite failed as expected: six failed and one existing
Escape path passed. The failures prove the current component still uses a card,
has no act state, mask, binding beads, sealed knot, replacement appraisal, or
continuous reveal state. No production source changed before this red run.

## Production contract

- The full-screen rite now owns four explicit acts: awakening, initiation,
  binding, and appraisal.
- Act one uses an original inline SVG mask impression. No private reference
  image or raster asset enters the bundle.
- Act two keeps the plain DeepSeek explanation, safe platform link, Back, and
  Enter later paths.
- Act three stores through `identity.ts`, masks the input, derives decorative
  beads from length only, and stays on the binding act when storage fails.
- Act four replaces Good, Exceptional, Remarkable, and Glorious in sequence.
  Glorious settles in the existing old-gold token.
- The final mantle split resumes the mounted Spellweave in its reaching state,
  removes the rite after its own animation settles, then focuses the composer.
- Deferred, absent, and disabled keys show `[The voice remains unbound.]`.
  Saving or enabling a key through existing settings removes the inscription.
- Superseded Plan 021 card styles and keyframes were removed.

## Targeted green proof

`npm test -- --run src/weaver/web/frontend/components/FirstNightmareSetup.test.tsx src/weaver/web/frontend/components/Composer.test.tsx src/weaver/web/frontend/components/SpellSurfaceChatApp.test.tsx src/weaver/web/frontend/lib/identity.test.ts src/weaver/web/frontend/lib/firstNightmare.test.ts`
passed 30/30 tests across five files.

`npm run build` passed and rebuilt the committed production bundle. The normal
Vite chunk-size warning remains. `git diff --check` passed.

## Browser walkthrough

The fake app was captured through a DPR 2, touch-enabled browser session at
320 x 568, 360 x 800, 390 x 844, and 412 x 915, plus the shared desktop
component at 1440 x 900. Private evidence covers all four acts and the real
chat after the mantle reveal at every size.

The first walkthrough exposed and repaired three visual defects:

- the original mask impression needed stronger plates, mantle geometry, and
  surrounding web nodes;
- the new-tab accessibility note leaked into visible link copy because the
  inherited `sr-only` class had no active rule;
- the appraisal inherited the key-entry scroll position after act three.

The repeated captures show the repaired link, full appraisal header, settled
Glorious mark, narrow binding layout, and continuous real-chat reveal.

## Repeatable owner review

- Soul Sea settings now exposes `Replay First Nightmare` on phone and desktop.
- Replay always starts at the awakening act and leaves the saved first-run
  state unchanged when the owner exits with Enter later or Escape.
- Settings navigation labels and active markers are centered within each tab.
- Focused setup, settings integration, and theme tests passed 25/25. The
  production build passed and refreshed the committed bundle.
- Private DPR 2 captures at 390 x 844 and 1440 x 900 verify the replay control
  and centered navigation in the rendered app.

## Owner visual rejection and repair

The owner rejected the first binding composition. The permanent centre axis,
double password-like bead rows, missing key visibility control, and generic
model settings made the screen confusing. The owner also clarified that
settings navigation is centered on phone only and keeps its original desktop
alignment.

- The centre axis now exists only during awakening and leaves the DOM when act
  two begins.
- Both key fields retain the `sk-...` placeholder and have accessible show/hide
  controls.
- Binding beads gather as a small secondary knot instead of spanning the input.
- Settings replay exposes `Preview without storing a key`; it runs appraisal
  and reveal without writing a key or changing first-run storage.
- Model settings now use a black-wood binding surface, honest bound state, and
  explicit model choice inscriptions. Phone choices stack in one column.
- Desktop settings labels returned to left alignment. Phone labels and active
  markers remain centered.

At this checkpoint the SVG mask remained rejected and the raster exception
still awaited owner approval. The amendment below resolves that gate.

## Mask reread, 2026-08-19

The owner approved a narrow raster exception and Plan 026 now supersedes its
old code-native mask rule. The bounded reread covered chapters 277 through 279,
1337, and 2589 from beginning to end, then checked the private Weaver's Mask
record and accepted product identity.

Public-safe generation constraints:

- polished black lacquered wood;
- a fearsome, somber, bestial, and regal face;
- fangs, twisting horns, and eye openings lost in darkness;
- seven inner lights connected by an extremely dense spellweave;
- a dark priestly mantle around the mask;
- silver interaction threads and restrained old gold from the Shadow Slave
  Edition identity.

The novel does not prescribe the cover's exact face geometry. The generated
asset must remain original and cannot use supplied cover or board pixels.

The first isolated-mask candidate also failed the composition check. The mask
looked like an inserted emblem and lost the accepted relationship between the
face, central thread, surrounding Spellweave, woven action, and page depth. It
was discarded before commit.

The accepted implementation direction uses one original, text-free portrait
scene. The scene contains the mask, pale mantle, silver web, central thread, and
lower woven altar as one artwork. Accessible HTML supplies every word and
control above it. On phones the scene fills the rite; on desktop it becomes the
left ritual plane while the same live content occupies the right plane. A crop
from the same scene supplies the appraisal and small Weaver identity marks.

## Plan 028 handoff, 2026-08-19

Read-only inspection reproduced both reported thread-management faults:

- `SpellSurfaceChatApp` derives `pinned` and `archived` from component-local
  `Set<string>` state. Pinning only changes the current render order and both
  values disappear when the page reloads.
- Opening Archived only filters the existing rail list and toggles the same
  archive button. The rail has no archive heading, empty-state copy, or other
  strong location cue.

Plan 023 already provides the persistent metadata route. Plan 028 owns wiring
that route into the frontend and giving the Thread Archive an unmistakable
active state; Plan 026 does not alter those controls.

## Continuity repair, 2026-08-21

Owner review found three visual breaks: framed mask marks, oversized awakening
art on desktop, and a blank void after act one. The repair:

- removes the visible badge treatment from sidebar, empty-state, reply, and
  appraisal mask marks;
- changes the awakening artwork from viewport-filling crop to contained fit;
- removes the top-left `First Nightmare` label while retaining the step count;
- keeps the full mask scene behind acts two through four at low opacity and
  shallow blur, then reveals the live Spellweave when the rite parts.

Fresh fake-mode captures cover 320 x 568, 390 x 844, and 1440 x 900. The full
art and both actions remain visible at the smallest size, the desktop artwork
stays within its left ritual plane, and every later act retains the same distant
mask without reducing text contrast.
