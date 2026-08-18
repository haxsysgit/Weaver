# Results

## Status

Slice 2 is in progress. Production code has not started.

## V1 baseline evidence

Captured the untouched v1 production surface in fake mode at:

- `private/design-evidence/025/v1-baseline/320x568.png`
- `private/design-evidence/025/v1-baseline/360x800.png`
- `private/design-evidence/025/v1-baseline/390x844.png`
- `private/design-evidence/025/v1-baseline/412x915.png`
- `private/design-evidence/025/v1-baseline/1440x900.png`

The private captures are git-ignored and contain no novel text, key, chat, or
provider response.

## Measured asset baseline

| Asset | Raw bytes | Local gzip bytes |
| --- | ---: | ---: |
| Main JavaScript | 875,344 | 237,920 |
| Main CSS | 136,393 | 25,245 |
| Whole committed dist directory | 1,026,044 | not measured as one transfer |

## Renderer baseline from the production source

- three batched WebGL render objects;
- 4,500 star points;
- 91 divine-light points;
- up to 3,400 line segments;
- three shader programs implied by the three shader materials;
- DPR fixed at 1;
- manual animation loop capped near 30 renders per second;
- animation skipped while the document is hidden or the canvas is paused;
- geometries, materials, renderer, listener, resize frame, and animation frame
  explicitly cleaned up.

## Device-neutral evidence contract

The owner removed the named-phone gate on 2026-08-18. Plan 025 now validates
the full viewport matrix with DPR 2, touch emulation, and 4x CPU throttling.
The accepted numeric limits are recorded in `learning.md`.

## Slice 3 render-profile proof

- Red: the targeted Vitest run failed because `spellRenderProfile.ts` did not
  exist.
- Green: 4 tests passed after adding the typed profile helper.
- The tests cover capped DPR, compact and phone budgets, desktop density,
  reduced-motion static rendering, and narrow landscape.

## Slice 4 shared motion proof

- Red: the targeted component test failed because `SpellMotionProvider.tsx`
  did not exist.
- Green: the provider test and existing live-surface tests passed, 7 tests in
  total.
- Motion for React 13.1.0 supports the repository's React 19 runtime.
- `LazyMotion` loads the DOM feature set from a separate production chunk.
- The first production build measured 247,935 gzip bytes for the main
  JavaScript and 15,604 gzip bytes for the lazy Motion feature chunk. Their
  combined 263,539 bytes remain under the accepted 275 KiB JavaScript budget.
- CSS remained 25,245 gzip bytes, under the accepted 30 KiB budget.

## Slice 5 deterministic-geometry proof

- Red: the targeted Vitest run failed because `spellGeometry.ts` did not
  exist.
- Green: 4 tests passed after adding the pure geometry helper.
- Geometry is seed-stable, normalized to the viewport, capped below 64
  connections, and composed from different portrait and desktop anchors.

## Slice 6 distant-field rendering

- `SpellBackground` now consumes the tested render profile and caps DPR at 2.
- Compact, phone, desktop, narrow-landscape, and reduced-motion budgets control
  star and line buffers before allocation.
- Reduced motion renders one static frame. Paused and hidden states skip render
  work.
- Three.js owns the animation loop through `setAnimationLoop()`.
- The canvas exposes the active profile, DPR, draw calls, star count, and thread
  budget as inspection-only data attributes.
- Geometry, materials, renderer, resize frame, listener, and animation loop are
  cleaned up on unmount or profile change.
- The render-profile and existing live-surface tests passed, 10 tests total,
  followed by a successful TypeScript and Vite build.

The first later build exposed one remaining `STAR_COUNT` reference in the
spatial-bucket loop. The build failed visibly, the loop was changed to the
active profile count, and the next build passed.

## Slice 7 shared Spellweave layers

- Red: the targeted component test failed because `SpellweaveBackdrop.tsx` did
  not exist.
- Green: 7 geometry and backdrop tests passed.
- The coordinator preserves the v1 Three.js field as the distant depth and adds
  deterministic SVG middle and foreground depths.
- Portrait and desktop compositions share normalized geometry while using
  separate anchors.
- Every decorative layer is `aria-hidden`, unfocusable, and pointer-transparent.
- Reaching, reading, answering, complete, and failed states use the existing
  motion tokens. Reduced motion removes travel and looping state animation.
- The production TypeScript and Vite build passed after the recorded profile
  reference repair.

## Slice 8 materials and palette

- Added Shadow Slave Edition aliases for near-black depth, black wood, reader
  ivory, cold thread silver, quiet silver, muted appraisal gold, and corruption
  crimson.
- The live surface no longer derives its main atmosphere from crimson or
  purple washes.
- Existing global tokens remain available to older surfaces and settings.
- The composer gains a code-native black-wood grain built from layered CSS
  gradients, with no image asset.
- New state animation uses only `--motion-smooth` and `--ease-weave`. Reduced
  motion removes travel and loops.
- The production build measured 25.97 KiB gzip CSS, below the accepted 30 KiB
  limit.
