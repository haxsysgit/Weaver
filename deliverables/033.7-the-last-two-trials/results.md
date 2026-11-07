# Results

## Status

In progress. Admitted 2026-11-07.

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

## Floors

- `uv run pytest -q`: **941 passed, 4 skipped** on the second run.
  - The first run was 940 passed, 1 failed: `tests/test_web_server.py::test_fake_stream_can_be_stopped_after_the_first_visible_delta`
    (`48 < 86 // 4`), a stop-after-first-delta timing assertion under full
    suite load, in a file this plan does not touch. It passed alone and as a
    file (12 passed) twice, and passed in the second full run. Recorded as a
    load flake, not a regression.
- Baseline was 934 passed, 4 skipped at the 033.6 close; this plan adds seven
  passing tests (934 + 7 = 941).
- `uvx ruff check` on the changed files: 15 findings, the same set and codes
  as `HEAD` (16 in the temp copy counts one shebang artifact). No new
  finding on a changed line.
- `npx vitest run`: 185 passed. `npx tsc --noEmit`: no output. `npm run
  build`: built.
