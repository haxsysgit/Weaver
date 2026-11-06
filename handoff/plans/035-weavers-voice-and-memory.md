# Draft: Plan 035, Weaver's voice and memory

Status: drafted 2026-11-06 in the handoff folder. Not admitted.
Depends on: Plan 034 closed (the reader card and the restructured prompt are
where voice and memory plug in).

## Goal

Make Weaver a character worth talking to: a lorekeeper with a recognisable
voice, opinions it keeps, a memory of each reader, and a storyteller voice
that stays consistent within a fanfic thread.

## Why it matters

The Reader Trials judge whether a reader would keep talking. Accuracy gets
Weaver to "useful". Voice, opinions and memory get it to "I want to come
back". Today Weaver's voice drifts between turns, it forms opinions and
forgets them, and every new thread starts from zero about the reader.

## What we want to achieve

### 1. The lorekeeper voice

- A voice with life and imagery: the warmth of a friend who has read the book
  many times, quick, specific, sometimes funny, never a lecture.
- No essay shape: no headings and bullet lists for a conversational answer,
  no "In conclusion", no five-paragraph structure, no generic AI phrasing
  ("It's worth noting", "Great question", "delve").
- Short when the question is short; long only when retelling a scene or when
  the reader wants depth.
- **Sample answers go to the owner before anything is built.** Draft five to
  eight sample answers across the trial types (a vibe check, a hot take, a
  retelling, a "huh?"), show them, and get the owner's direction. The owner
  has strong taste here and pushes back on guessed designs.

### 2. Opinions Weaver keeps (per device)

- Weaver forms opinions in defined categories: favourite character, most
  underrated character, best fight, most painful scene, strongest at a given
  point in the story, and similar. The categories are agreed with the owner.
- A narrow tool records an opinion when Weaver states one with conviction,
  with its reason and its chapters. The tool cannot write anything else.
- Recorded opinions are fed back every turn, so Weaver stays consistent
  across threads on the same device. It may change its mind, but says so and
  why, and the record updates.
- Opinions are per device (no accounts exist), stored server-side under the
  device id like the per-device preferences from the Plan 030 audit.

### 3. Memory of the reader (the memory system design)

The design shape was confirmed with the owner on 2026-08-10 (see
`TODO_future.md`, "Weaver memory system"), following the Hermes pattern:

- **SOUL**: Weaver's persona and voice, stable, owner-curated.
- **MEMORY**: Weaver's durable notes (canon corrections with status, learned
  conventions), hard-capped at about 2,200 characters, curated on overflow.
- **USER**: the reader's profile (name if given, reading progress, favourite
  characters, spoiler preference, how they like to talk), per device.
- Injected as a frozen snapshot at the start of each turn.
- Every write passes a security scan first: this is a public app and hostile
  input can try to poison memory that ends up in the prompt.
- Escalation: corrected once becomes a note; corrected repeatedly becomes a
  hard rule.
- Recall of past conversations through full-text search over the reader's
  own history (SQLite FTS5), not by stuffing history into the prompt.

Open questions recorded then, still open: should a reader's correction be
stored with a status (said by the reader / verified in canon / disputed) and
pushed back on when canon disagrees; is Weaver's favourite character emergent
from its reading or seeded by the owner.

### 4. The storyteller voice, per fanfic thread

- A fanfic thread keeps its own voice, point of view, tense, established
  invented details and canon anchors from the first scene to the last.
- Invention is always labelled; canon facts stay canon (033.6 showed a
  swapped character in a fanfic scene; this must not happen).
- Novel-quality prose, in the novel's own register.

## What success looks like

- The owner approves the voice from the samples before it is built, and
  recognises it in the live trials.
- Across threads on one device, Weaver's recorded opinions stay consistent;
  a change of mind is always announced with a reason.
- Weaver remembers a returning reader's progress and preferences without
  being told again, and never leaks one device's memory to another.
- Hostile inputs (prompt-injection attempts, abusive "remember that..."
  messages) never reach the memory files; tested deterministically.
- A fanfic thread keeps its voice and its invented details over at least six
  turns.
- The affected Reader Trials (vibe check, hot take, emotional favourite,
  long thread, fanfic spark, and any that regress) pass in a live run;
  ideally all twelve.
- Floors hold or rise; tests for every tool and every write path; a fresh
  reviewer before the live run; spend within the plan's cap.
- The owner accepts.

## Out of scope

- A user-facing memory panel or Memories vault (038 or the backlog).
- Accounts or cross-device sync.

## Constraints

- Memory and opinions are private reader data: never committed, never in
  logs, never in reports.
- No em dashes in user-facing copy; Weaver language throughout.
- The trial prompts never become part of the product.
