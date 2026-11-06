# Draft: Plan 036, The Spell in 3D

Status: drafted 2026-11-06 in the handoff folder. Not admitted.
Depends on: Plan 035 closed (the product's mind and voice come before its
look).

## Goal

Build the 3D engine Weaver's interface will use from now on, and use it to
show the Nightmare Spell the way the novel describes it. Set the performance
budget first, prove the engine on real phones, then make the art.

## Why it matters

Weaver is themed on the Spell (canon: Weaver wove the Nightmare Spell, a
spellweave of Strings of Fate, ch. 3109). Readers are mostly on phones. A
beautiful scene that stutters on a mid-range phone is a failure; a fast
scene that looks generic is also a failure. The current Star Web uses raw
Three.js; the owner wants a proper toolchain for richer, authored scenes.

## What we want to achieve

### 1. Read how the novel shows the Spell, first

- Before any design: find and read the passages where the novel shows the
  Spell, its threads, the runes, the Nightmare gates, and the Spellweave
  (start with ch. 3109 and the chapters it points to; use exact search on
  the shelf).
- Quote the key lines back to the owner and agree a visual direction with
  them. No design from memory, no guessed theme. (Owner directive
  2026-08-08: discuss creative and visual work before building.)

### 2. The engine and the toolchain

- React Three Fiber, drei, postprocessing, Theatre.js for authored motion,
  glTF assets compressed with meshopt and KTX2 textures, modelled in Blender
  (the Blender connection exists in this environment).
- One way to load, render and animate scenes, shared by later plans (037
  builds the Soul Sea and the themes on it).
- Loads after the chat is usable: the 3D scene never blocks the first
  message.
- A WebGL-free fallback and a reduced-motion state that is complete and
  beautiful, not an afterthought.

### 3. A performance budget before any art

- Agreed numbers before art: frame time on a mid-range Android phone and on
  desktop, a background frame cap (the current 30 FPS cap stays the floor),
  download size of 3D assets, memory, time to first message, battery impact
  when idle.
- Measured on real hardware (the owner's phones and desktop), not estimated.
- The budget is a gate: art that breaks it is cut or simplified.

### 4. The Spell scene

- The Spell rendered in the agreed direction, alive but quiet behind the
  conversation, never competing with the text.
- Keeps every accepted part of the UI: the conversation chamber, the rail,
  the composer, the archive, the First Nightmare, the settings.

## What success looks like

- The owner approved the visual direction from quoted canon before the art
  was made, and accepts the result in screenshots and on their own phone.
- The performance budget is written down and met on real hardware, with
  measurements recorded at desktop and mobile.
- Reduced motion and no-WebGL readers get a complete experience.
- The chat is usable before the 3D scene loads; time to first message does
  not get worse.
- Real browser screenshots at desktop and mobile for every visible change;
  jsdom tests are not layout evidence.
- Frontend floors hold or rise; tests for loading order, fallback and
  reduced motion.
- The owner accepts.

## Out of scope

- The Soul Sea redesign and the themes (037).
- Model, retrieval or prompt changes.

## Constraints

- Fake mode is enough for all of this work; no live spend.
- Asset files must be licensed for use or made for Weaver; no ripped game
  assets.
- No em dashes in UI copy.

## Open questions for the owner

- Which phones are the reference devices for the budget?
- Should the Spell scene replace the Star Web, or sit alongside it?
