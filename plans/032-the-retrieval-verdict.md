# Plan 032: The retrieval verdict

> **Executor instructions:** Answer the same held-out questions four ways,
> from the full toolset down to chapters and exact search only, judge every
> answer against the chapters, and recommend what Weaver's reading pipeline
> keeps. The rule that governs it: the decision rule is written down before
> the first live run, and the evaluator never tunes the product or the
> questions between arms.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff), `npx vitest`, the
  root production build. Every `uv` command on this Windows checkout needs
  `UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python`.
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plan 031 closed (2026-11-01, accepted): the shelf reaches
  3232, so the question set can include the newest chapters.
- **Priority:** P1 (second plan of the owner's 031-040 roadmap; Plan 033
  waits on its verdict).
- **Effort:** M
- **Risk:** Medium. Small samples can mislead (one pass is one sample);
  the evaluator writes and judges the questions, so bias must be designed
  out; the arm switch must never reach readers.
- **Budget:**
  - Agent context: about 0.8M to 1.4M tokens, agent-executed. Most of it
    is reading source passages to write the new questions (about 40
    chapters, bounded) and judging about 220 answers against their
    passages.
  - Live model: about 200 to 240 answers on `deepseek-flash` through the
    product harness. Estimate $2.50 to $4.00 at the dated price table;
    hard cap **$5.00**, metered from token usage before each call.
    (Plan 030's twelve trials cost about $0.72; Plan 031's smoke turn
    $0.003.)
  - Network: none. No re-embedding (about 5 hours on this CPU, Plan
    018.5); that is Plan 033's if the verdict keeps vector search.
  - Measured numbers are recorded in `results.md` at close.

## Owner direction (locked decisions)

1. (2026-10-31) Plan 032 is "the retrieval verdict": the same questions
   answered four ways (normal, no vector search, no notebook, chapters and
   exact search only), judged on accuracy and citations. Decide what the
   pipeline keeps.
2. (2026-10-31) It absorbs the three Foundational Reader Trials as a
   retrieval regression: Ariel, the Unholy Titan, and the Tomb of Ariel;
   current Sunny against prime Azarax; Anvil of Valor against Azarax of
   Effie's Fourth Nightmare.
3. (2026-10-31, measured) Weaver opens chapters far more than it searches:
   1,378 chapter reads to 414 vector searches across 554 turns.
4. (standing, `AGENTS.md`) `read`, `grep`, and `glob` style tools are
   baselines; no agent may claim they are sufficient without evidence.
   This plan produces that evidence, either way.

Proposed for the owner to confirm at admission:

5. **The four arms**, defined by the tools the model gets:
   - **A, normal:** all six reading tools plus skills, as shipped.
   - **B, no vector search:** `semantic_search` removed.
   - **C, no notebook:** `semantic_search` limited to novel passages
     (no notebook statements); `who_is` and `lore_path` removed, since
     both read the notebook's story map.
   - **D, chapters and exact search:** `read_chapters`, `find_text`,
     `browse_chapters` only.
   Each arm gets a system prompt and skill text that name only its own
   tools, built by one function, so a missing tool is never a harness
   artifact.
6. **The question set: 40 held-out questions.**
   - 20 reused from `questions-v2` (Plan 014 era, chapters 17 to 2976),
     each re-checked against its chapter before use. Any wrong one is
     fixed or dropped, and the change is recorded.
   - 20 new ones, written from bounded chapter reads, so that at least 8
     sit after chapter 3127 (past the vector index today) and every
     volume has at least one.
   - Five kinds, at least 6 of each: find a scene from a paraphrase, an
     exact name or quote, how two things connect, who someone is (aliases
     and versions), and a time-aware fact ("at chapter N, what...").
   - The three Foundational Reader Trials as the opening question of each,
     run in every arm.
   - Each question records its expected chapters and the facts a correct
     answer must contain, written before any live run.
7. **Runs:** every question once per arm (about 172 answers). Then every
   question where the arms disagree runs twice more in the arms that
   disagree (pass^3 on the contested ones, about 40 to 70 more answers).
   Fresh device and session per answer, spoilers allowed, no reader
   boundary.
8. **Judging, blind to the arm:**
   - **Accuracy:** each required fact present and correct (full, partial,
     wrong), judged against the source passage, not memory.
   - **Citations:** every cited chapter contains the claim it supports
     (checked against the chapter text, automatically where a quote is
     given).
   - **Cost and speed:** tokens, dollars, wall time, and tool calls per
     answer, from the run record.
   - The answers are shuffled and stripped of tool traces before judging;
     the arm label is joined back afterwards. The owner spot-checks 10
     answers chosen at random.
9. **Decision rule, fixed before the first run:** a component is kept if
   removing it costs at least **3 of 40** correct answers, or any
   citation honesty, or it saves at least 30% of cost or time per answer
   at equal accuracy. A component that costs nothing measurable when
   removed is proposed for retirement. Late-chapter questions (after
   3127) are reported separately, since vector search cannot see them
   yet. The recommendation goes to the owner; the owner decides.

## Scope

- A private evaluation switch that opens the chat runtime with one arm's
  tools, prompt, and skill text. Harness only: no route, setting, header,
  or model tool can reach it.
- The held-out question set and its answer key (private, under
  `.weaver/evaluation/plan032/`).
- The run harness: four arms, fresh state per answer, metered spend, a
  hard cap, and run records with metadata only in `results.md`.
- Blind judging, the comparison tables, and the recommendation.
- The retrieval regression: the three Foundational Reader Trials in every
  arm.

## Out of scope

- Changing the shipped pipeline. Retiring or rebuilding anything is Plan
  033's work, after the owner's decision here.
- Re-embedding the index to 3232, notebook pages past 3160, or reloading.
  Plan 033.
- Voice, the reader card, the lookup tool, or the 1M context window.
  Plan 034.
- The twelve Reader Experience Trials. They stay the product gate (Plan
  040).
- Other models. The arms run on `deepseek-flash`, the production model.

## Deterministic proof / verification floor

1. `uv run pytest -q` passes (815 or more), including new tests for:
   - each arm exposing exactly its tools, and the prompt and skill text
     naming no tool the arm lacks;
   - the arm switch being unreachable from every web route (browser-shaped
     requests, `tests/test_web_request_shapes.py`);
   - the harness refusing to start a call past the spend cap;
   - the answer shuffle and the arm join being exact.
2. `npx vitest run` (183 or more), `tsc`, and the root build stay green
   (no frontend change expected).
3. `uv run ruff check` adds no findings on changed files.
4. A fake-mode dry run of the whole harness (all arms, all questions)
   before any live call.
5. The answer key exists and is committed to `learning.md` as counts and
   kinds only (no question text with spoilers, no chapter text) before the
   first live run.
6. `results.md` holds metadata only: scores, costs, counts, chapter
   numbers. No novel prose, no transcripts.
7. A staged-file audit for secrets and chapter text before every commit.

## STOP conditions

- Live spend would pass $5.00.
- A question in the answer key turns out wrong after a run has used it:
  stop, record it, and re-judge every arm on the corrected key (never one
  arm only).
- A run record shows a call to a tool its arm does not have (an arm
  switch leak): stop and discard that arm's runs.
- The arm switch is reachable from a route or a model tool.
- Any finding tempts a product fix mid-run. Record it; fixes wait for the
  verdict and Plan 033.
- A decision items 1 to 9 do not cover.

## Slices

1. **Plan and admit.** This doc, items 5 to 9 confirmed or changed, the
   index rows, the deliverable scaffold, and the admission commit.
2. **The arm switch.** Test-first: one function builds each arm's tool
   registry, prompt, and skill text; private to the harness; the web
   route tests prove it unreachable.
3. **The question set.** Re-check the 20 reused questions against their
   chapters; write 20 new ones from bounded reads; write the answer key
   (expected chapters and required facts) for all 40 plus the three
   Foundational Reader Trials. Record counts and kinds in `learning.md`.
   Show the owner five sample questions with their keys before the rest
   are written.
4. **The harness and a dry run.** Run every arm on every question in fake
   mode; check records, the shuffle, and the cap. Then one live question
   per arm as a smoke test.
5. **The live runs.** Every question once per arm; then pass^3 on the
   contested ones. Meter spend after each answer.
6. **Blind judging.** Shuffle, judge accuracy and citations against the
   source, join the arms back, build the tables, and apply the decision
   rule from item 9. The owner spot-checks 10 answers.
7. **Close.** The recommendation per component (vector search, notebook
   statements, story map) with its evidence; an independent review; the
   measured budget in `results.md`; the owner's decision in
   `decision.md`; HANDOFF and TODO_future updated, with Plan 033 rescoped
   to the verdict.
