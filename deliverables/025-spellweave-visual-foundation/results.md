# Results

## Status

Implementation, device-neutral inspection, and the full verification floor are
complete. Independent review and the owner's visual decision remain before
closure.

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

## Slice 9 live-surface integration

- Red: the live-surface test failed because the app still mounted the old
  background siblings and main-chat Soul Sea.
- Green: 10 backdrop and live-surface tests passed after integration.
- `SpellSurfaceChatApp` now mounts one `SpellweaveBackdrop` around the existing
  v1 chat, rail, transcript, composer, setup, and settings components.
- Existing chat activity drives reaching, reading, answering, complete, and
  failed backdrop states.
- The main-chat Soul Sea mount was removed. The existing Soul Sea inside the
  settings dialog remains visible and is now asserted by the live-surface test.
- The first green test used a stale exact placeholder string. The backdrop
  assertions had passed, the control-preservation assertion was changed to the
  textbox role, and the rerun passed all 7 live-surface tests.

## Throttled performance failure and boundary check

The first 390 x 844, DPR 2, touch-emulated, 4x CPU activity trace failed the
proposed limit. Even after the renderer selected its static constrained profile,
the full fake message-send path produced five long animation frames and peaked
at 255.2ms.

Two isolation traces established ownership:

- Directly setting the new foreground Spellweave to `answering` for ten seconds
  produced one 55.5ms long animation frame and no long tasks. It stayed within
  the Plan 025 visual-engine budget.
- Hiding the complete Spellweave backdrop and disabling every CSS animation and
  transition did not remove the fake-streaming cost. The unchanged v1 message
  path produced five long animation frames, peaked at 225.3ms, and produced six
  long tasks.

Plan 025 therefore measures its visual activity state directly and preserves the
fake message-send trace as a baseline for Plan 027, which owns reply rendering.
Changing transcript streaming here would cross the admitted scope.

## Device-neutral responsive evidence

Final production captures cover 320 x 568, 360 x 800, 390 x 844, 412 x 915,
800 x 360 narrow landscape, and 1440 x 900. They are private, ignored evidence
under `private/design-evidence/025/implemented/` and are not production assets.

| Viewport | Profile | DPR | Stars | Segments | Draw calls | Horizontal overflow |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| 320 x 568 | compact | 2 | 1,800 | 900 | 3 | none |
| 360 x 800 | phone | 2 | 2,600 | 1,600 | 3 | none |
| 390 x 844 | phone | 2 | 2,600 | 1,600 | 3 | none |
| 412 x 915 | phone | 2 | 2,600 | 1,600 | 3 | none |
| 800 x 360 | compact | 2 | 1,800 | 900 | 3 | none |
| 1440 x 900 | desktop | 2 | 4,500 | 3,400 | 3 | none |

An early matrix run exposed a false adaptation: initial page-load stalls were
counted as sustained rendering pressure, causing normal devices to downshift.
The repaired detector ignores the four-second warm-up period and adapts only
compact and phone profiles. A six-second settled inspection then held every
normal profile at DPR 2. Under 4x CPU throttling the phone profile still reached
the level-two static fallback at DPR 1 with 1,200 stars and 600 segments.

Reduced-motion emulation selected the static profile at DPR 2 with 1,200 stars,
600 segments, and three draw calls. The foreground event thread reported no CSS
animation, and its state remained visible without decorative travel.

After the throttled phone reached its static fallback and settled, the required
60-second idle trace reported zero long tasks and zero long animation frames.
A following ten-second direct `answering` state trace also reported zero long
tasks and zero long animation frames. The browser was Chrome 148.0.7778.167
running headless with SwiftShader on the development host, so these figures are
comparative browser evidence rather than a claim about every phone GPU.

At 200 percent page scale the visual viewport reduced to 195 x 422 while the
390px layout retained its width without document overflow. A 390 x 500
keyboard-height approximation kept the composer fully visible from y=395 to
y=474 and produced no horizontal overflow. A freeze/active lifecycle pass kept
the canvas and composer mounted; source inspection confirms hidden documents
skip frame work and the existing single renderer loop remains the resume path.

The captures preserve the existing v1 transcript, composer, mobile navigation,
and desktop rail. The main surface uses near-black depth, cold silver structure,
warm ivory text, muted old-gold lights, black wood, and a neutral silver Weaver
seal. Normal chat no longer uses the old crimson seal.

## Final asset measurements

| Asset | Raw bytes | Local gzip bytes |
| --- | ---: | ---: |
| Main JavaScript | 909,167 | 249,504 |
| Lazy Motion feature chunk | 41,223 | 15,604 |
| Main CSS | 143,514 | 26,533 |

Combined JavaScript is 265,108 gzip bytes, below the accepted 275 KiB limit.
CSS is 26,533 gzip bytes, below the accepted 30 KiB limit. The final build after
any owner-review repair must remeasure these hashed artifacts before closure.

## Full verification floor

- `npm run build`: passed; 470 modules transformed and the committed production
  bundle rebuilt.
- `npm test`: 59 passed across 13 files.
- `uv run pytest`: 528 passed in 451.52 seconds on Python 3.11.13.
- `git diff --check` across authored source and records: passed. The unrestricted
  staged check reports whitespace inside Three.js GLSL template strings in the
  newly hashed generated bundle. The dist artifact remains byte-for-byte equal
  to `npm run build` instead of being edited after generation.

The first full frontend run passed but logged repeated jsdom WebGL errors before
the renderer's existing fallback caught them. A capability check now returns
before Three.js construction when neither WebGL interface exists. The targeted
20 chat tests and the repeated full 59-test suite passed without that stderr.
