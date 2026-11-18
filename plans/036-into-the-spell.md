# Plan 036: Into the Spell

> **Executor instructions:** Find out what Weaver should look and feel like
> as a portal into the Nightmare Spell, before anything is built. Read the
> novel first, gather real references, make several distinct directions with
> real images at desktop and phone size, and decide with the owner. No
> product code in this plan; the build comes in the plans this one writes.

## Status

- **Tooling:** the library's exact search and chapter reads (bounded packet
  below), web research, Blender 5.3 through the Blender MCP (Cycles on the
  RTX 4060), WebGL prototypes captured in real Chrome, HTML mockups.
- **State:** closed 2026-11-18, accepted by the owner ("alright close 036").
  Admitted 2026-11-18 on the owner's word ("alright i admit
  whatever you want to do"), after the owner set the direction the same day.
- **Depends on:** Plan 035.5, closed 2026-11-18 (the Linux machine this is
  made on).
- **Priority:** P1. It sets the face of the app for every plan after it.
- **Effort:** M (discovery only).
- **Risk:** Medium. A direction picked from thin evidence would waste the
  build plans; the slices put canon, references and real images first.
- **Budget:** agent-context work (Claude Code, not DeepSeek), estimate 600k
  tokens across the slices. No DeepSeek spend. Blender and WebGL renders run
  on this machine.

## Owner direction (locked decisions)

1. 2026-11-18: today Weaver "feels like a generic app with a colorful
   background"; the immersion of the Spell is missing.
2. 2026-11-18: Weaver is a portal into the world of the Spell. The Spell is
   somewhat alive, and Weaver is a digital entity inside it that explores the
   world of Shadow Slave and more. It may stop being only a chat app and
   become a fun fan-made site to explore and interact with, mixing a chat app
   with the Shadow Slave theme.
3. 2026-11-18: the work is "translating text to experience". The site never
   explains in words how the Spell was made, and shows no text that spoils a
   reader. The canon behind it is context for the makers.
4. 2026-11-18: first gather what the world of the Spell is like, then make
   several propositions with images, then brainstorm together, then decide
   how building goes.
5. 2026-11-18: the full immersive experience is for laptops and PCs; phones
   get the best we can do. Most readers use phones, so the chat stays fast
   and one tap away there.
6. 2026-11-18: igloo.inc was one quick example of "immersive", not the
   target; look wider at what designers have made.
7. 2026-11-18: the executor chooses the animation and 3D tools, after a
   direction is chosen.
8. Standing (2026-08-08): read the source text and quote it back before
   designing anything themed.
9. Standing: plans run in number order. If 036 changes what 037 to 040
   should be, the owner renumbers the drafted ones at close.

## Scope

- A bounded reading packet on how the novel shows the Spell and the places
  it reaches.
- A reference board of immersive web work, each with why it matters here.
- Three or four distinct directions, each with images at desktop and phone
  size (Blender renders, WebGL prototypes, mockups) and a sketch of how a
  reader moves through it, including where the chat lives.
- A chosen direction and a written design the build plans can start from.
- Proposed build plans and a renumbered roadmap for 037 onward.

## Out of scope

- Product code, new dependencies in the app, or changes to the shipped UI.
- Model, retrieval or prompt changes.
- Deploying anything.

## The reading packet (bound)

Plan 001 forbids reading novel content unless an admitted plan asks for a
bounded packet. This plan asks for one:

- **What:** passages that show the Nightmare Spell (its voice, threads,
  runes, the Spell's own messages), the space between dream and reality, the
  Dream Realm's places, the Soul Sea, Nightmare gates and the Spellweave.
  Found with exact search on the shelf; read each chapter to its end.
- **How much:** about 60 chapters at most; more needs the owner.
- **Where notes live:** `private/design-references/036/` (never committed).
  Committed deliverables carry chapter numbers and the executor's own
  descriptions, not chapter text.

## Deterministic proof / verification floor

1. Every direction shows images at 1440x900 and 390x844, made on this
   machine, plus the canon lines it draws on (chapter numbers).
2. The owner picks a direction in writing; the design records it.
3. No product file under `src/` changes in this plan.

## STOP conditions

- Any step would write product code or add a dependency to the app.
- The packet needs more than about 60 chapters.
- A direction depends on assets that are not made for Weaver or licensed.
- A direction would put spoiling text in front of a reader.

## Slices

1. **Plan and admit.** This doc, the index row, the deliverables.
2. **Read the Spell.** The bounded packet; quotes back to the owner.
3. **Reference board.** Immersive web work beyond igloo.inc, desktop and
   mobile, each with what to take from it.
4. **Directions.** Three or four distinct directions with images at desktop
   and phone size and a walk-through of each.
5. **Brainstorm.** With the owner, until one direction (or a blend) is
   chosen.
6. **Design.** The written design for the chosen direction, the tools, the
   performance budget, and the build plans; owner approval.
7. **Close.** Results, roadmap renumbering if the owner wants it, decision.
