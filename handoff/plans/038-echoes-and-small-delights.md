# Draft: Plan 038, Echoes and small delights (optional)

Status: drafted 2026-11-06 in the handoff folder. Not admitted. Optional:
the owner may let it slip past v3.0.0.
Depends on: Plan 037 closed.

## Goal

Add a few small features that make readers smile and come back, each one
cheap, optional and themed on the novel.

## What we want to achieve

- **An Echo companion.** A small animated companion in the interface,
  themed on the novel's Echoes, that reacts to the conversation (thinking,
  answering, idle). Built with Rive or a small model on the 036 engine,
  inside the performance budget. Canon first: read how the novel describes
  Echoes and agree the design with the owner.
- **Memories as saved answers.** A reader can save an answer they loved as a
  "Memory", themed on the novel's Memories, and find it later. Quote-sized
  only: no bulk reproduction of chapter text (product rule).
- **Spoiler fog.** Anything past the reader's boundary that has to be
  mentioned at all (for example, a chapter range) is visibly fogged, and the
  reader can choose to reveal it.
- **"I just read chapter N".** A one-tap way to move the boundary forward
  (the Plan 030 audit already offers this when the reader says it in chat;
  this makes it a first-class action) and a short, spoiler-safe reaction
  from Weaver about what they just read.

## What success looks like

- Each feature is small, can be turned off, and costs nothing when unused.
- The owner approves each design from canon quotes and accepts it in
  screenshots and on their phone.
- Spoiler fog never reveals text past the boundary without the reader's
  tap; tested deterministically.
- Memories store only the answer the reader saved, per device, never chapter
  text in bulk.
- The 036 performance budget still holds; Reader Trials unaffected.
- The owner accepts, or explicitly defers any piece past v3.

## Constraints

- Fake mode for UI work; live spend only if the "just read" reaction needs
  checking, under a cap.
- No em dashes in UI copy.
