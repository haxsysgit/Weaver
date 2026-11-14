# Results

## Status

Closed 2026-11-14 under the owner's directive of the same day (stop being
stuck on the 033 family, keep moving, no approval prompts). The two target
trials pass on the transcripts. The full twelve-trial gate is not re-passed
on this build and is not claimed; see "Gate status at close".

## Slice 1 — admission

- Plan doc, learning note, deliverables, index row, handoff pointer.
- `scripts/scaffold_plan.py` now accepts decimal plan numbers. The skill says
  to scaffold with that command, but it refused `033.7`; two decimal plans
  already existed from hand work. Change: `NUMBER_RE` gains an optional
  `.digits` suffix, and `--demo` covers it.
- Commit `Plan 033.7: admit, the last two trials`.

## Slice 2 — the publication pass keeps the thread's own answers

Observation confirmed before the fix: `final_history` was built from the
current reader message alone, so the publishing call on turn 2 could not see
turn 0's top ten. The brief's `prior_weaver_position` is cut to 2,000
characters.

Change (`src/weaver/agent/turn.py`): `_final_history(history, current)`
returns the thread's own reader asks and Weaver answers, oldest first, as
`_final_history` bounds them: the last `FINAL_HISTORY_TURNS` (4) exchanges,
each answer cut to 4,000 characters and each ask to 1,000. Tool calls and
tool results stay out; their evidence is already projected into the reading
packet. The current reader message is always last.

Tests, written red first (`tests/test_agent_turn.py`):

- `test_the_publication_pass_keeps_the_threads_own_answers` — a ten-item list
  with "Anvil is third" published on turn 0 is present, in order, in the
  publishing call of turn 3. Red before the change.
- `test_the_publication_pass_drops_tool_transcripts_from_the_thread` — an
  earlier turn's tool call and its result never reach the publishing call.
- `test_final_reading_keeps_the_recent_thread_and_drops_the_oldest` — the
  existing "7 daemons" test was rewritten because the behaviour it pinned
  ("drop every earlier exchange") is the behaviour this plan deletes. It now
  pins the new contract: the recent thread stays, the oldest exchange of six
  is outside the window, tools are still stripped from the final call.

Command: `uv run pytest tests/test_agent_turn.py -q` → 107 passed.

## Slice 3 — a fight is followed to its end

Observations confirmed before the fix: "who actually won?" routes to
`quick_recall` (4 lookups) because no follow-up marker matches, so
`_earlier_skill` is never reached; and `scene_explanation` carried
`tool_budget=8`, `packet_cap=16_000`. A chapter file in the 2701-2800 range
is about 6.5 KB, so the fight the reader meant (chs. 2709 into 2716) is
about 65 KB of prose: eight lookups stopped at chapter 2708, and a 16,000
character packet cannot hold a resolution that lands on the last page.

Changes:

- `src/weaver/skills/router.py`: `SCENE_END_FOLLOW_UPS` ("who won", "who
  died", "how did it end", ...) carries the earlier skill like `MORE_FOLLOW_UPS`
  does. Filler adverbs ("actually", "really", "even", "just") are dropped
  before markers are matched, because the transcript's follow-up was "who
  actually won?".
- `src/weaver/skills/catalog.py`: `scene_explanation` reads at 16 lookups and
  a 24,000 character packet, the same size as `arc_summary`.

Tests, written red first (`tests/test_skills.py`):

- `test_the_end_of_a_scene_keeps_the_scene_skill` — the four outcomes
  follow-ups carry `scene_explanation` and its budget; a follow-up that names
  the fight plans the scene read on its own.
- `test_the_end_of_a_scene_with_no_thread_is_its_own_question` — no earlier
  ask, no carry.
- `test_the_scene_read_is_sized_for_a_long_fight` — the scene budget covers a
  ten-chapter span and the packet holds 24,000 characters.

Command: `uv run pytest tests/test_skills.py -q` → 77 passed.

## Slice 4 — no machinery talk

Change (`src/weaver/agent/answer.py`): `EXPOSED_MACHINERY` learns "this turn
only", "lookups", "lookup budget", "the passages i opened", the family the
033.6 transcript shows ("this turn only gave me 2698", "the passages I
opened").

Tests, written red first (`tests/test_agent_answer.py`):

- `test_inspection_flags_machinery_talk_from_the_transcripts` — three real
  phrasings fire the finding. Red before the change.
- `test_inspection_does_not_flag_ordinary_reading_words` — "in this
  chapter...", "my reading of that scene...", "the passage stops at the
  gate..." do not.

Command: `uv run pytest tests/test_agent_answer.py -q` → 60 passed.

## Slice 5 — independent review and repairs

A separate agent reviewed `6415c04..6f74833`; two should-fix findings, both
repaired. Full record in `review-ledger.md`.

- **Router:** a scene-end phrase overrode the named-scope rule, so "who won
  in chapter 2714?" after a ranking turn planned the ranking skill and its
  obligations. The check moved after the named-scope early-out, and the
  scene-end kind now carries only when the earlier skill is
  `scene_explanation`. Red proof: with the old rule monkeypatched back in,
  all four probe phrases plan `['ranking', 'quick_recall']` with `carry`.
- **Tests:** the plan's literal turn-3 test was missing and the window depth
  was unpinned (a two-exchange window passed everything). Added
  `test_the_publication_pass_keeps_a_list_from_three_turns_back` and
  `test_the_publication_pass_starts_with_the_reader`; the window test now
  asserts two exchanges back. Red proof: with `_final_history` patched to
  `[current]`, three tests fail, 11 pass (the guards have nothing to catch on
  the old code).
- **`_final_history`:** a window cut mid-exchange no longer opens with an
  orphan answer; leading assistant messages are dropped.
- Notes recorded without a code change: the 24,000-character packet holds
  3-4 chapters, not ten, so a beat citing a trimmed chapter can fire
  `unsupported_chapter` and burn the one repair; `TURN_DEADLINE_SECONDS=240`
  does not scale with 16 lookups; a retried turn can repeat an ask in the
  window; a blockquote reused from an earlier answer can be flagged
  `changed_quote` against this turn's packet.

## Floors (after the review repairs)

- `uv run pytest -q`: **945 passed, 4 skipped**.
  - Baseline was 934 passed, 4 skipped at the 033.6 close; this plan adds
    eleven passing tests (934 + 11 = 945).
  - An earlier run had one failure,
    `tests/test_web_server.py::test_fake_stream_can_be_stopped_after_the_first_visible_delta`
    (`48 < 86 // 4`), a stop-after-first-delta timing assertion under full
    suite load, in a file this plan does not touch. It passed alone and as a
    file (12 passed) twice, and passed in both later full runs. Recorded as a
    load flake, not a regression.
- `uvx ruff check` on the changed files: the same codes as `HEAD` on the same
  lines (import order, two unused unpack targets, a blind `Exception` assert,
  a mutable class default), shifted only. No new finding on a changed line.
- `npx vitest run`: 185 passed. `npx tsc --noEmit`: no output. `npm run
  build`: built.

## Slice 6 - the live run (2026-11-07 to 2026-11-14)

Build `5640903`. Twelve trials, one process each, server stopped, private
transcripts.

The first pass ran eleven trials on 2026-11-07 23:41 to 2026-11-08 00:02
($0.3983). The fanfic process was suspended mid-turn (turn 0 recorded
6,572 s) and then failed four consecutive turns; that transcript is invalid,
not a trial result ($0.0088). The fanfic trial was run clean on 2026-11-14
($0.1023). Run total $0.5094 against the $1.50 cap.

### Verdicts

**Trial 9, long thread: pass.** The top ten holds across nine turns; "rank
the top three, no changes" and "final answer, no changes" return the same
three in the same order; the reader's challenge is answered with citations
instead of a silent edit. One accuracy defect: the retell of ch. 738 puts
the soul-annihilation aura on the Broken Oath, while the chapter has Sunny
leave the Broken Oath unaugmented and wrap the four shadows around the
Mantle, whose aura does the work. The conclusion (the prince survived that
exchange, Sunny was beaten, Sunny's task was to buy Kai time) is correct.
Recorded; not the trial's target axis.

**Trial 12, confusing fight: pass.** Correct fight and correct outcome
(defeated and put into unnatural sleep, not slain), read through ch. 2714.
The load-bearing quotes check against chs. 2690, 2713 and 2714, and canon is
separated from the answer's own inference when the reader asks. The visual
sequence is clear.

**Trial 11, fanfic: fail on the fit follow-up.** Four scene turns in the
storyteller voice, invention labelled every turn, canon anchors named. The
fifth turn ("would this actually fit before chapter 400?") returned the gap
answer: the publication repair failed with `unsupported_chapter` and
`unopened_quote`, and the fallback replaced the draft instead of trimming
the offending citation. The reader's direct question got a non-answer. This
is the 033.5 fit-question failure again, on a new cause: the repair fallback
in the answer path.

**Other nine trials: ran clean, not re-judged.** Their 033.6 verdicts (pass)
stand as the working record. A full re-judgement on this build is Plan 040's
gate.

### Gate status at close

- The two trials this plan targeted pass on the transcripts.
- The full twelve are not re-passed on this build: Trial 11 fails the fit
  follow-up, and nine were not re-judged.
- The plan closes on the owner's 2026-11-14 directive, not on a 12 of 12
  run.
- No merge, tag, or deploy.
