# Plan 025 learning note

## Gate status

**Admitted 2026-08-18.** Plan 024 closed rejected. The owner directed this
visual foundation to begin from the accepted v1 interface. Research and v1
baseline inspection are in progress; the learning gate remains pending before
production code.

## Confirmed owner direction

- The production background keeps the current Nightmare Spell cosmic scale and
  adds sharper, intentional layers.
- Distant stars and haze, middle Spellweave geometry, and foreground
  interface-bound threads have separate jobs.
- DPR is capped at 2. Phone particle and segment budgets pay for the sharper
  output.
- Silver means interaction. Old gold means appraisal or Memory. Crimson means
  corruption, danger, failed binding, or destructive action.
- Black wood is a restrained physical material for strong controls.
- Mobile and desktop use shared components with separate compositions.
- Existing motion tokens govern new interface transitions. Reduced motion keeps
  state legible without decorative travel or repeated pulses.
- The approved reference image never ships.
- v1 is the source surface. Its current star web, chat mechanics, composer,
  transcript, rail, first-run behavior, and tests survive the visual pass.
- The rejected Plan 024 lab is not a visual source. It created a parallel,
  generic chat composition instead of extending v1.
- The generic frontend-design workflow is excluded from this lane.
- Three.js and motion research must come from current primary sources. Motion
  should make the Spell feel alive through meaningful product events while
  keeping the reading and chat controls obvious.
- The approved board locks the Shadow Slave Edition's colour mood. The main
  chat moves away from v1's ambient crimson and purple cast toward near-black
  depth, cold silver structure, warm ivory text, and rare muted old gold.
  Crimson communicates corruption, danger, failure, or destructive action.

## Current code observations

- `SpellBackground.tsx` currently forces `renderer.setPixelRatio(1)`, which is a
  likely cause of softness on high-density phone screens.
- The current background already contains a large star field, silver thread
  segments, divine lights, and a galactic CSS layer. Those supply useful depth
  and should be refined rather than discarded.
- `SpellSurfaceChatApp.tsx` mounts the background, galactic band, purple depth,
  star flares, activity wake, and Soul Sea as separate siblings. Plan 025 must
  relocate the Soul Sea presentation into the reader/settings surface before
  removing that sibling.
- `tokens.css` already defines `--motion-fast`, `--motion-smooth`, and
  `--ease-weave`. The plan does not need a second timing system.
- `spell-surface-lab.css` contains several mobile and reduced-motion sections,
  so edits must be narrow and preserve unrelated owner work.

## Primary-source animation research

Research date: 2026-08-18.

- Three.js recommends `WebGLRenderer.setAnimationLoop()` over a hand-written
  `requestAnimationFrame()` loop for renderer compatibility. Its
  `renderer.info` counters expose draw calls, points, lines, programs,
  geometries, and textures for the measured contract this plan needs.
  Source: <https://threejs.org/docs/pages/WebGLRenderer.html>.
- Three.js treats CSS canvas size and the physical drawing buffer as separate
  concerns. DPR therefore belongs in a measured render profile, alongside a
  resize check, rather than as an unconditional visual setting.
  Source: <https://threejs.org/manual/en/responsive.html>.
- Three.js GPU resources require explicit disposal. The current v1 scene
  already disposes its geometries, materials, renderer, listener, and animation
  frames. The refactor must retain that ownership and add an inspection path
  through `renderer.info`.
  Source: <https://threejs.org/manual/en/how-to-dispose-of-objects.html>.
- Three.js recommends reducing object and draw-call overhead through shared or
  merged geometry. The v1 field is already close to the right shape: one
  `Points` object for stars, one for divine lights, and one `LineSegments`
  object for the web. Plan 025 should deepen those shaders and buffers instead
  of creating hundreds of scene objects.
  Source: <https://threejs.org/manual/en/optimize-lots-of-objects.html>.
- Motion for React links animation to React state and supports interruptible
  transitions, exit choreography, layout transitions, and touch gestures. Its
  own guide recommends CSS for simple self-contained effects. That matches the
  Weaver split: CSS tokens for small control feedback, Motion for coordinated
  surface changes, and Three.js for the Spell world.
  Source: <https://motion.dev/docs/react>.
- `LazyMotion` can load a smaller DOM animation feature set, while
  `MotionConfig reducedMotion="user"` applies the device preference across the
  React animation tree. `useReducedMotion` can also replace travel with opacity
  or disable parallax at the interaction source.
  Sources: <https://motion.dev/docs/react-reduce-bundle-size>,
  <https://motion.dev/docs/react-motion-config>, and
  <https://motion.dev/docs/react-use-reduced-motion>.
- GSAP has sound React cleanup and media-query support through `useGSAP()` and
  `gsap.matchMedia()`. Its imperative timeline model is useful for long,
  precisely authored sequences. The current lane mostly needs state-driven,
  interruptible transitions across React surfaces, so GSAP would introduce a
  second orchestration model without a demonstrated advantage.
  Sources: <https://gsap.com/resources/React/> and
  <https://gsap.com/docs/v3/GSAP/gsap.matchMedia()>.
- The browser's `prefers-reduced-motion` media feature is widely available and
  is the baseline even when a library also observes it.
  Source: <https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion>.

## Proposed Weaver motion system

Three.js owns the living Nightmare Spell environment:

- a slow autonomous star field and distant haze;
- deterministic middle-depth Spellweave geometry;
- foreground rune fragments and light pulses that travel through the same web;
- subtle depth or focal changes driven by product state, never cursor chasing;
- one batched scene with a small, measured draw-call count and no default
  bloom or post-processing pass.

The DOM owns every readable or operable surface. Motion for React coordinates
surface changes that need mount, exit, interruption, or shared state. Existing
CSS tokens continue to handle short hover, focus, colour, and press feedback.

Every animation has one plain product meaning:

| State | Spell response | What the reader learns |
| --- | --- | --- |
| idle | distant drift and rare quiet glints | the world is awake and waiting |
| focus | two nearby threads settle toward the composer | the question has a binding point |
| sending | one pulse carries the question into the web | the question left the composer |
| reading | nearby knots illuminate in sequence | Weaver is searching its library |
| answering | a single response thread grows with the reply | the answer is arriving |
| complete | the active thread settles and leaves one gold glint | the response is complete |
| failed | the active thread breaks once with restrained crimson | the action failed and needs attention |

The complexity rule is one ambient motion plus one event response at a time.
Controls stay immediately usable. Decorative movement cannot delay navigation,
text, focus, sending, or cancellation. Reduced motion removes camera travel,
parallax, gathering fragments, travelling pulses, and repeated loops while
retaining immediate opacity and colour state changes.

## Library recommendation pending owner gate

Add Motion for React as the single DOM choreography dependency, loaded through
`LazyMotion` with the DOM animation feature set and wrapped in
`MotionConfig reducedMotion="user"`. Keep Three.js as the only scene engine.
Keep simple control transitions in CSS. Do not add GSAP, React Spring, a
post-processing stack, or a second canvas renderer in this lane.

This requires an admitted-plan amendment because new dependencies are currently
out of scope. No package or production source has been changed. The owner must
accept or reject this recommendation at the learning gate.

## Frozen v1 baseline

The untouched production surface was captured at 320 x 568, 360 x 800,
390 x 844, 412 x 915, and 1440 x 900 under
`private/design-evidence/025/v1-baseline/`.

The captures confirm the parts that survive:

- chat surfaces remain transparent enough for the Spell to occupy the screen;
- the star web carries the strongest product identity on both phone and desktop;
- the mobile composer stays reachable and the desktop rail remains useful;
- the empty state stays visually integrated with the field;
- the current field is soft at DPR 1, yet its scale, density, and visual rhythm
  are the accepted starting point.

The current WebGL scene uses three batched render objects: 4,500 star points,
91 divine-light points, and up to 3,400 line segments. The shipped main assets
are 875,344 bytes of JavaScript and 136,393 bytes of CSS, or 237,920 and 25,245
bytes respectively when measured with gzip locally.

## Approved tonal correction

The reference image was sampled only to understand its tonal distribution. Its
dominant field sits around near-black `#050505`, with cool raised blacks around
`#1e1f20`, middle silver-grey around `#8e8d8d`, and bright cold silver around
`#cbcccc`. These are measurement anchors, not an instruction to ship or trace
the image.

Plan 025 will create Edition-specific semantic aliases instead of changing
every global base token. The intended roles are:

| Role | Target character | Use |
| --- | --- | --- |
| Spell void | near-black with almost no hue | dominant background and depth |
| black wood | slightly warm raised black | composer and strong physical controls |
| thread silver | crisp cool silver | active web, focus, binding, send, answer |
| quiet silver | low-contrast neutral grey | distant web and secondary interface |
| reader ivory | warm off-white | headings and long-form answer text |
| old gold | desaturated aged gold | appraisal, Memories, rare completion marks |
| corruption crimson | restrained dark red | failure, danger, corruption, destructive actions |

The atmospheric crimson radial gradients and purple depth wash currently seen
in v1 will not define the main chat after this plan. Depth will come from value,
line density, sharpness, controlled haze, and the three Spellweave layers.

## Hypothesis

A tested render profile plus deterministic normalized geometry can make the
Spell background sharp at DPR 2 while reducing phone GPU work. A shared
coordinator can keep the three depths, event state, accessibility, and responsive
composition consistent across Plans 026 to 028.

## Learning gate

Pending. The visual baseline and primary-source research are recorded. The
remaining evidence is the Redmi Note 14 profiler capture. It must measure the
untouched v1 idle field and one activity simulation before this note proposes
numeric phone frame-time and long-task limits. The owner also decides whether
to amend Plan 025 with the recommended Motion for React dependency and accepts
or changes the Weaver motion system above. Production code remains blocked
until those decisions are recorded.
