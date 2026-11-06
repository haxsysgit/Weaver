# Draft: Plan 034, Weaver's mind

Status: drafted 2026-11-06 in the handoff folder. Not admitted.
Depends on: Plan 033.7 closed (the answer path must be stable first).

## Goal

Give Weaver a clear picture of where it is and what it knows, on every turn:
who it is talking to and how far they have read, how far its own library
reaches, how the novel is laid out, and a fast way to look things up. Then
restructure the system prompt so all of this fits the model's large context
window well and cheaply.

## Why it matters

Most of Weaver's worst answers so far came from not knowing its own
situation: answering past a reader's boundary, citing chapters it had not
opened, not knowing that a fight runs ten chapters, missing a misspelled
name, not knowing that its notebook stops earlier than its shelf. A reader
should never have to tell Weaver things it could already know.

## What we want to achieve

### 1. The reader card, in every turn

A short, always-present block that tells the model, in plain words:

- The reader's spoiler boundary (the chapter they have read up to), or that
  no boundary is saved and Weaver does not know where they are. (This
  replaces scattered handling; the "No boundary saved" behaviour from the
  Plan 030 audit stays.)
- The spoiler mode in force and what it means for this answer.
- The library edge: the shelf ends at the latest chapter (3232 today, and it
  grows weekly), the date of the last refresh, and that the novel is still
  being written.
- What Weaver can and cannot see: chapters on the shelf (all of them, by
  reading), meaning and word search (whole shelf), notebook files (to 3160),
  notebook statements in search (to 1000). The card states these limits
  honestly so Weaver does not over-trust the notebook past its reach.
- The thread kind (chat or fanfic) and anything else that changes how
  Weaver should behave this turn.

The card is computed fresh each turn from real state, never typed by hand,
and never contains reader text or private chapter text beyond what a turn
already allows.

### 2. A lookup tool

A narrow tool the model can call to answer "who or what is X" quickly and
safely:

- Takes a name or term, including misspellings, nicknames, titles and
  aliases (the close-spelling hint deferred from 033.6 lives here). Returns
  the canonical name and close matches.
- Returns where the name appears: first appearance, notable chapter ranges,
  last appearance on the shelf, each with chapter numbers so Weaver can open
  them.
- Respects the reader's boundary: nothing past it is returned unless the
  reader has asked for spoilers.
- Built from the chapters themselves (an index of names and where they
  occur), not from memory and not from an outside wiki. The notebook may
  enrich it where it reaches.
- Fast and local: no model call.

### 3. An arc map

A map of the novel's volumes and arcs with chapter ranges, built from reading
the chapters (chapter titles, volume breaks, and where each arc begins and
ends), and checked against the source:

- Weaver can place any chapter or scene ("that's in the arc where..., around
  chs. X to Y") and can tell a reader roughly where a scene sits relative to
  their boundary without spoiling it.
- It helps the reading: a question about a fight or an event points Weaver at
  the right span to read, and tells it how long that span is.
- It updates when the weekly refresh adds chapters (new chapters extend the
  current arc until the owner or a later read marks a new one).
- Arc names follow the novel's own words where the novel names them; where it
  does not, the name is plain and descriptive and marked as Weaver's label.

### 4. The system prompt, restructured for the large window

- One stable, cacheable prefix (who Weaver is, the rules, the arc map),
  then the reader card, then the thread, then the turn. Stable parts never
  change between turns, so the provider's prompt cache can serve them.
- Room for large rereads of chapters, since direct rereading is what made
  answers good. The budget for chapter text per turn is set on evidence.
- Every rule in the prompt is either still needed or removed. No duplicated
  or contradicting instructions.
- Measured before and after: tokens per turn, cache hit rate, cost per turn,
  latency per turn.

## What success looks like

- A reader never has to tell Weaver its own limits. In a sample of real
  conversations, Weaver correctly states the library edge, its reach, and the
  reader's boundary when asked, and never answers past the boundary.
- The lookup tool finds the right person or term for misspelled names,
  nicknames and titles in a test set built from real reader phrasing
  (including the misses seen in Plans 032 and 033), and respects the
  boundary in every case.
- The arc map's ranges are checked against the chapters (spot-checks with
  quotes of the opening and closing chapter of each arc), and Weaver uses it
  to place scenes correctly.
- The check set reaches its own gate (6 of 9 correct on the trial answers) or
  the plan records clearly why not.
- The restructured prompt costs no more per turn than before (ideally less,
  through caching), and latency does not rise.
- All twelve Reader Experience Trials still pass (one run, owner approval for
  spend). None regresses.
- Floors hold or rise; deterministic tests for the card, the tool and the map;
  a fresh reviewer before the live run.
- The owner accepts.

## Out of scope

- Weaver's voice, opinions and memory (035).
- Any UI beyond showing the reader card's facts where they already appear
  (header, Settings).

## Constraints

- The map and the name index are built from the chapters. Reading them is
  the work; checkers only check format.
- Private material stays private: the index and map live under `.weaver/`
  and never enter a commit. Only code and tests are committed.
- Weaver language in anything the model or reader sees (`library`,
  `chapters`, `shelf`), never "corpus".

## Open questions for the owner

- Should the arc map be visible to readers (a chapter guide in the app), or
  stay Weaver's private knowledge for now?
- How much of the context window should chapter rereads use per turn (a cost
  trade-off)?
