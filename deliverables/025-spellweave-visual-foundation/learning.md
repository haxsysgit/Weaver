# Plan 025 learning note

## Gate status

**Unadmitted.** Plan 024 closed rejected on 2026-08-18. The owner directed this
visual foundation to begin from the accepted v1 interface. This plan has no
backend dependency.

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

## Hypothesis

A tested render profile plus deterministic normalized geometry can make the
Spell background sharp at DPR 2 while reducing phone GPU work. A shared
coordinator can keep the three depths, event state, accessibility, and responsive
composition consistent across Plans 026 to 028.

## Learning gate

Pending. Capture the v1 baseline with a profiler, then record concrete proposed limits for
capped DPR, render objects per profile, built asset bytes, frame time during
named interactions, and long tasks during the named trace window. The owner
confirms or changes those numeric limits, the v1-preserving layer meanings, and
responsive composition before production code begins. Plan 025 cannot close
until its results record both the accepted limits and final measurements for
Plan 029.
