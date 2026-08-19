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
390 x 844 and 320 x 568, plus the shared desktop component at 1440 x 900.
Private evidence covers all four acts and the real chat after the mantle reveal.

The first walkthrough exposed and repaired three visual defects:

- the original mask impression needed stronger plates, mantle geometry, and
  surrounding web nodes;
- the new-tab accessibility note leaked into visible link copy because the
  inherited `sr-only` class had no active rule;
- the appraisal inherited the key-entry scroll position after act three.

The repeated captures show the repaired link, full appraisal header, settled
Glorious mark, narrow binding layout, and continuous real-chat reveal.
