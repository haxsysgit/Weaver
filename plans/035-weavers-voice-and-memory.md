# Plan 035: Weaver's voice and memory

> **Executor instructions:** Make Weaver a character worth coming back to: a
> voice the owner recognises, opinions it keeps, a memory of each reader on
> their device, and a fanfic voice that holds for a whole thread. The voice
> is shown to the owner as samples before anything is built; memory writes
> are scanned before they are kept.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff), `npx vitest run`,
  `npx tsc --noEmit`, `npm run build`.
- **State:** admitted 2026-11-16 on the owner's word ("then we move on to
  plan 035, we will always do the plans in order") under the standing
  directive of 2026-11-14. Goal and success criteria come from the owner's
  draft in `handoff/plans/035-weavers-voice-and-memory.md` (2026-11-06).
  Slices 1 to 10 done 2026-11-17 (lorekeeper chosen; memory store, tools
  and the after-turn memory step built, reviewed and live-run). Waiting on
  the owner: a twelve-trial re-run on the final build, then the decision.
- **Depends on:** Plan 034, closed 2026-11-16. The reader card is where
  opinions and the reader profile plug in.
- **Priority:** P1. The trials judge whether a reader would keep talking.
- **Effort:** L.
- **Risk:** Medium. The voice touches every answer, and memory puts reader
  input into the prompt of later turns (a poisoning path). Deterministic
  tests cover each write path; one full trial run covers the whole.
- **Budget:** agent-context work, estimate 250k agent tokens (about $1.80).
  Live: voice samples through the product (about $0.10), one twelve-trial
  run (about $0.55), one re-run of affected trials if the owner approves
  (about $0.30). Total estimate $2.75, cap $3.50. Fake mode for every slice
  except the samples and the trial run.

## Owner direction (locked decisions)

1. 2026-11-06: the 035 goal is the owner's handoff draft: the voice,
   opinions Weaver keeps, a memory of the reader, the storyteller voice per
   fanfic thread.
2. 2026-08-10: the memory shape follows the Hermes pattern: SOUL (persona,
   owner-curated), MEMORY (Weaver's notes, hard cap about 2,200
   characters), USER (the reader's profile), injected as a frozen snapshot
   per turn, every write scanned first, corrected once is a note and
   corrected repeatedly is a hard rule.
3. 2026-11-06: discuss before designing anything voice or visual. Voice
   samples go to the owner before the build (show before build).
4. 2026-11-16: plans run strictly in number order.

## Open questions for the learning gate (slice 3)

- **Voice direction.** Today's voice is the buddy (a friend from the
  subreddit: lowercase, "nah", receipts). The draft asks for a lorekeeper
  with life and imagery. Keep and sharpen the buddy, move to the lorekeeper,
  or blend (buddy in chat, lorekeeper when retelling)?
- **Weaver's favourite character.** Emergent from its reading, or seeded by
  the owner? Evaluator's recommendation: emergent, recorded by the opinion
  tool with its chapters, owner may veto.
- **A reader's correction.** Stored with a status (reader said, checked in
  the chapters, disputed) and pushed back on when the chapters disagree?
  Evaluator's recommendation: yes; never store an unchecked claim as canon.
- **Opinion categories.** Proposed: favourite character, most underrated,
  best fight, most painful scene, strongest at a named point in the story,
  best arc, ship take. The owner adds or cuts.

## Scope

- **The voice.** Five to eight sample answers across the trial shapes (a
  vibe check, a hot take, a "huh?", a retelling, a correction, a fanfic
  opener), produced through the product, shown to the owner; the chosen
  direction then rewritten into `prompts/voices/`. No essay shape, no
  generic assistant phrasing, short when the question is short.
- **Opinions Weaver keeps.** A narrow tool records an opinion in an agreed
  category, with its reason and chapters, when Weaver states one with
  conviction. It cannot write anything else. Stored per device, server side,
  beside the device preferences. Fed back every turn through the reader
  card; a change of mind is announced with its reason and the record
  updates.
- **The reader's profile (USER).** Per device: the name if given, reading
  progress, favourite characters, how they like to talk. Written only
  through a narrow tool, from what the reader said, never from a guess.
- **Weaver's notes (MEMORY).** Corrections with their status and learned
  conventions, capped at about 2,200 characters, curated on overflow.
- **The write scan.** Every opinion, profile and note write passes a
  deterministic scan first: instructions, role or system talk, links, code,
  secrets, other readers' data, oversize text. A refused write is recorded,
  never silently dropped.
- **The fanfic thread's voice.** Point of view, tense, invented details and
  canon anchors are fixed by the first scene and carried for the thread.
  Invention stays labelled; canon characters are not swapped.
- Deterministic tests for every tool and every write path, red first,
  including hostile inputs.

## Out of scope

- Full-text recall of past conversations (SQLite FTS5). Moves to the
  backlog; the profile and notes come first.
- A reader-facing memory panel or Memories vault (038 or the backlog).
- Accounts and cross-device sync.
- Retrieval depth and the check set (039.1).

## Deterministic proof / verification floor

1. `uv run pytest -q` passes: at least 1008 passed, 4 skipped at the 034
   close, plus this plan's tests.
2. `uvx ruff check` adds no finding on changed files.
3. `npx vitest run`, `npx tsc --noEmit`, `npm run build` pass.
4. One device's opinions, profile and notes never reach another device's
   prompt (tested).
5. Hostile writes never reach storage or the prompt (tested from real
   injection shapes).
6. A fresh reviewer agent reads the diff before the live run; findings
   repaired or recorded.
7. The live run reads every transcript: the vibe check, hot take, emotional
   favourite, long thread and fanfic spark pass, and no trial regresses.

## STOP conditions

- The owner has not chosen the voice direction from the samples.
- A memory write path accepts free text that reaches the prompt unscanned.
- A fix keys on a trial's wording or a specific character.
- Any test needs the real `.env` or a live model.
- Metered spend would pass the $3.50 cap.

## Slices

1. **Plan and admit** - this doc, learning note, index row, deliverables,
   admission commit.
2. **Voice samples** - five to eight answers through the product in the
   current voice and in the proposed one, side by side, shown to the owner.
   Show before build.
3. **Learning gate** - the owner picks the voice direction and answers the
   open questions. Recorded in `learning.md` before any build.
4. **The voice** - rewrite `prompts/voices/` to the chosen direction; tests
   for the shape rules that can be checked (no em dash, no headings in a
   chat answer, no generic phrasing). Floor. Commit.
5. **The write scan and the per-device store** - the store for opinions,
   profile and notes, and the scan in front of it. Red tests from hostile
   inputs first. Floor. Commit.
6. **Opinions** - the narrow tool, the categories, the feed-back through the
   reader card, the change-of-mind rule. Floor. Commit.
7. **The reader's profile and Weaver's notes** - the two narrow tools, the
   cap and curation, the correction status. Floor. Commit.
8. **The fanfic thread's voice** - the thread's fixed point of view, tense
   and invented details carried turn to turn. Floor. Commit.
9. **Review** - independent reviewer, repairs, floor.
10. **Use** - one live twelve-trial run, server stopped, transcripts read,
    quotes checked. Record.
11. **Close** - measured budget, owner decision, `HANDOFF.md` and
    `TODO_future.md` updated.
