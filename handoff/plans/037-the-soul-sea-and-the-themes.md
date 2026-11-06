# Draft: Plan 037, The Soul Sea and the themes

Status: drafted 2026-11-06 in the handoff folder. Not admitted.
Depends on: Plan 036 closed (its engine and performance budget).

## Goal

Redesign the Soul Sea and give Weaver themes drawn from the novel's own
places, built on 036's engine and inside its performance budget. Clean up the
UI debts that a redesign touches anyway.

## Why it matters

The Soul Sea is the most personal place in the novel for a reader and the
place Weaver's look can make them feel at home. Themes from real places in
the story make the app feel like it belongs to the book, not like a generic
dark chat skin.

## What we want to achieve

### 1. Read the places first

- Read how the novel describes the Soul Sea and each candidate place for a
  theme. Quote the key lines to the owner, propose a short list of places,
  and let the owner choose. No guessed themes.

### 2. The Soul Sea redesign

- A Soul Sea that matches the novel's description, alive and quiet behind the
  conversation, inside 036's budget on real phones.
- Accessible: text contrast meets WCAG AA over every state of the scene.

### 3. Themes from the novel's places

- Each theme carries a palette, a scene on the 036 engine, and typography
  choices that keep reading comfortable for long answers.
- A reader picks a theme simply; the choice is saved per device.
- Every theme works at desktop and mobile, in reduced motion and without
  WebGL.

### 4. UI debts to settle while here

- Mobile Settings: the threads sheet text shows through the Settings panel.
  Make the panel truly opaque and remove the `visibility: hidden` rule that
  hides the chat.
- Rail row titles truncate early because 84px is reserved for hover actions;
  a `...` row menu is the likely better design (confirm with the owner).
- About 100 dead rules in `styles/app.css` from deleted components: prune
  selector by selector, with screenshots before and after.

## What success looks like

- The owner chose the places from quoted canon and accepts the Soul Sea and
  each theme in screenshots and on their phone.
- Every theme meets the 036 performance budget on the reference devices,
  with measurements recorded.
- Text contrast passes WCAG AA in every theme.
- The three UI debts above are closed with before and after screenshots.
- No visual regressions in the accepted parts of the UI (chamber, rail,
  composer, archive, First Nightmare, Settings).
- Frontend floors hold or rise.
- The owner accepts.

## Out of scope

- Echo companion and Memories (038).
- Model or retrieval changes.

## Constraints

- Fake mode is enough; no live spend.
- Discuss before designing; screenshots before claims.
- No em dashes in UI copy.
