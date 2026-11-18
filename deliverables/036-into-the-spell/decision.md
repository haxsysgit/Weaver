# Owner Decision

## Status

**Accepted by the owner, 2026-11-18** ("alright close 036"). Admitted,
run and closed on the same day.

## What the owner was asked

Plan 036 was discovery only: read how the novel shows the Spell, gather
immersive references, make directions with images, choose one with the
owner, write the design and the build plans. It delivered a bounded
reading packet (private notes), a reference board, four directions (A to
D) with desktop and phone images, the owner's blend (A, B and D), an
approved design (`design.md`), Plan 037 drafted, and 037.1 and 037.2 as
discussion docs. No product code changed (`src/` untouched by this plan;
the vitest 5 bump in `33427e5` is the owner's own change, committed at
the owner's word).

## Owner decisions taken during the plan

All 2026-11-18; details and quotes in `results.md`.

- Blend A, B and D: the Soul Sea is home, the void is the room, Weaver's
  woven presence is its face and thinking state; place scenes wait for art.
- Weaver opens on the Soul Sea. Chats are memory fragments; fanfic threads
  are weaves.
- Weaver is a lorekeeper beyond Shadow Slave: two layers (Weaver's own
  look, and one world per novel); only Shadow Slave is built now.
- No game layer; the storytelling mode is far future.
- The novel is inspiration, not a blueprint.
- A new face on the same chat engine, with the React scene kit; motion for
  the interface and GSAP for the story moments; one app with quality
  levels, phones optimised as needed.
- The desktop rail is retired; Settings rebuilt from scratch.
- The design is approved. Slices are marked flash (DeepSeek Flash in DSH)
  or claude; Claude reviews every flash slice.
- Plan numbers 037, 037.1, 037.2. Plan 037's admission waits for the
  owner.

## Gaps accepted

- The prototypes and images are throwaway and private
  (`private/design-labs/036/`); they use the owner's saved images as
  stand-in art and are not committed.
- The independent review was one builder check by a subagent on the
  design; no other reviewer ran.
- Budget: the plan estimated 600k agent-context tokens; the session ran
  well past that (several image-heavy captures, Blender spikes and the
  design discussion). Not measured to the token.
