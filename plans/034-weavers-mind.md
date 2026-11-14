# Plan 034: Weaver's mind

> **Executor instructions:** Give Weaver an honest, always-current picture of
> its own situation (the reader card), a fast way to look things up (a
> chapter-derived name index behind `who_is`), an arc map with chapter
> ranges, and a prompt restructured for the large window. Deterministic
> tests first; live only for the final trial run. If the lookup, map, or
> prompt work grows past the budget, propose 034.5 rather than growing this
> plan.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff), `npx vitest run`,
  `npx tsc --noEmit`, `npm run build`.
- **State:** admitted 2026-11-14 under the owner's standing directive of the
  same day (stop being stuck on the 033 family, move on, no approval
  prompts). The goal and success criteria were drafted by the owner in
  `handoff/plans/034-weavers-mind.md` on 2026-11-06.
- **Depends on:** Plan 033.7, closed 2026-11-14. Inherited defect: Trial
  11's fit follow-up returns the gap answer when the publication repair
  fails. Slice 6 fixes it because this plan's gate needs the twelve.
- **Priority:** P1. The first reader-facing plan after the 033 family.
- **Effort:** L.
- **Risk:** Medium. The reader card and the prompt restructure touch every
  turn, and the name index touches the reading tools. Deterministic tests
  cover each; one full trial run covers the whole path.
- **Budget:** mostly deterministic agent-context work. Estimate 200k agent
  tokens (about $1.50 at current flash prices), one live twelve-trial run
  (about $0.51 at the 033.7 measurement), the check set (about $0.12), and
  one reviewer. Total estimate $2.20, cap $3.00. Fake mode for every slice
  except slice 8.

## Owner direction (locked decisions)

1. 2026-11-06: the 034 goal is set in the handoff draft: the reader card in
   every turn, a lookup tool, an arc map, and the system prompt for the
   large window.
2. 2026-11-14: stop being stuck on the 033 family and move on without
   approval prompts. Recorded here as this plan's admission; every gate
   still gets a dated record.
3. 2026-11-06: discuss before designing anything visual. This plan is text
   and data only. The card and map are shown in their slices before they
   ship.

## Scope

- **The reader card, every turn.** One short block, computed fresh from real
  state: the reader's boundary or that none is saved, the spoiler mode in
  force and what it means, the shelf edge and the date of the last refresh,
  what each finder reaches (chapters, meaning search, notebook), and the
  thread kind. Plain words, Weaver language, no reader text, no private
  prose.
- **A chapter-derived name index behind `who_is`.** Canonical names,
  nicknames, titles and misspellings; first appearance, notable chapter
  ranges and last appearance; the reader's boundary respected; no model
  call. The close-spelling hint deferred from 033.6 lives here.
- **An arc map.** Volumes and arcs with chapter ranges, built from chapter
  titles, volume breaks and where each arc begins and ends, checked against
  the chapters. Used to place a scene and size a read, and extended by the
  weekly refresh.
- **The prompt, restructured for the large window.** One stable, cacheable
  prefix (identity, rules, arc map), then the reader card, then the thread,
  then the turn. A chapter reread budget set on evidence. Tokens, cache hit
  rate, cost and latency measured before and after.
- **The repair fallback.** When the publication repair fails on a citation
  or a quote, trim the offending claim instead of replacing the whole
  answer with the gap answer. Diagnosis first, from the 033.7 fanfic turn.
- **The Plan 033 check set.** Six questions times three runs reaches its 6
  of 9 gate, or the record says why not.
- Deterministic tests for each, written red first.

## Out of scope

- Weaver's voice, opinions and memory (035).
- Any UI beyond showing the card's facts where they already appear (header,
  Settings).
- The 3D Spell and the Soul Sea (036, 037).
- Accounts, cross-device sync, deploy, tag, push, merge.

## Deterministic proof / verification floor

1. `uv run pytest -q` passes: at least 945 passed, 4 skipped at the 033.7
   close, plus this plan's new tests.
2. `uv run ruff check` adds no finding on changed files.
3. `npx vitest run` (185 tests), `npx tsc --noEmit`, `npm run build` pass.
4. A fresh reviewer agent with no part in the build reads the diff; its
   findings are repaired or recorded in `review-ledger.md`.
5. The live run records build hash, per-trial spend, both axis verdicts and
   the quotes it checked.
6. The card, the index and the map have deterministic tests; the index and
   the map live under `.weaver/` and never enter a commit.

## STOP conditions

- A new test needs the real `.env` or a live model.
- A fix keys on the trial wording, a specific fight, or a specific
  character.
- Metered spend would pass the $3.00 cap.
- The prompt restructure raises per-turn cost without an offsetting win.
- Two consecutive trial failures share a cause after a fix.
- The lookup or arc map work grows past the budget. Propose 034.5.

## Slices

1. **Plan and admit** - this doc, learning note, index row, deliverables
   scaffold, admission commit.
2. **The reader card** - build the block from real state and inject it every
   turn. Red tests: boundary saved, no boundary, shelf edge and refresh
   date, finder reach, fanfic thread. Floor. Commit.
3. **The name index and `who_is`** - build the chapter index; resolve
   misspellings, nicknames and titles; respect the boundary; no model call.
   Red tests from real reader phrasing and the 032/033 misses. Floor.
   Commit.
4. **The arc map** - volumes and arcs from titles and breaks, checked
   against the chapters; boundary-aware placement; the refresh extends it.
   Red tests. Floor. Commit.
5. **The prompt restructure** - stable prefix, card, thread, turn; measure
   tokens, cache hit rate, cost and latency; reread budget on evidence.
   Floor. Commit.
6. **The repair fallback** - reproduce the 033.7 fanfic failure
   deterministically, then trim the offending claim instead of replacing the
   answer. Red test. Floor. Commit.
7. **Review** - independent reviewer on the diff; repair findings; floor.
   Commit.
8. **Use** - one live twelve-trial run, one process each, server stopped,
   plus the check set. Record verdicts, spend and quotes. Commit.
9. **Close** - measured budget in `results.md`, owner decision in
   `decision.md`, `HANDOFF.md` and `TODO_future.md` updated. The owner
   accepts or rejects; no merge, tag or deploy without that record.
