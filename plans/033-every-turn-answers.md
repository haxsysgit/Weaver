# Plan 033: Every turn answers, then the vector test

> **Executor instructions:** First make sure a reader never gets nothing
> back: find which check kills the silent turns, give every turn that read
> an honest answer, and stop Weaver presenting the wrong scene when it
> cannot find the right one. Then settle, on fresh held-out questions,
> whether vector search earns its keep. The rule that governs it: every
> code change starts from a pre-tested patch script and must pass the full
> floor, and the decision rule is fixed here, before any run.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff), `npx vitest`, `npx
  tsc`, `npm run build` (root). Every `uv` command on this Windows checkout
  needs `UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python`.
- **State:** admitted 2026-11-03 (owner: "I admit Plan 033 as drafted").
- **Depends on:** Plan 032 closed (2026-11-03, accepted). Its decision sets
  this plan's order: fix no-answer turns first, then a held-out paraphrase
  test before extending vector search.
- **Priority:** P1 (the 032 decision blocks any change to the reading
  pipeline until this verdict).
- **Effort:** M
- **Risk:** Medium. The gap answer changes what readers see on a failing
  turn; the prompt rule touches every answer (a shared path); a weaker
  executor runs most slices, so every step is scripted and gated.
- **Executors:** `deepseek-flash` in the DeepSeek harness runs slices 1 to
  6 and 9 from the brief in `deliverables/033-every-turn-answers/runbook.md`,
  with the judgement to fix and decide inside its slices (direction 8). The
  planning agent (Opus) runs slices 7, 8 and 10. The owner gates
  admission, the five sample questions, and the close.
- **Budget:**
  - Live model, product harness (`deepseek-flash`, metered per answer):
    diagnosis 66 answers (about $0.36), regression 66 (about $0.36), check
    set 18 (about $0.11), held-out 90 (about $0.50). Estimate **$1.35**;
    hard cap **$3.00** on the meter.
  - Executor context (`deepseek-flash` agent, billed to the owner's key):
    about 3M to 6M tokens, mostly cache hits; estimate $1 to $3. Judging
    108 answers is most of it.
  - Planning agent (Opus): diagnosis review about 0.1M tokens; writing 15
    questions from bounded reads about 0.4M to 0.6M; review about 0.2M.
  - Network: none. No re-embedding (that is Plan 033.5's, if the verdict
    says extend).
  - Measured numbers go in `results.md` at close.

## Owner direction (locked decisions)

1. (2026-11-03, Plan 032 decision) Retire nothing now; extend nothing
   until a held-out test settles the paraphrase effect. Order: fix turns
   that end with no answer, then the held-out test.
2. (2026-11-03) Plan 033 stops at the verdict. The extend-or-retire work
   (re-embedding into the weekly refresh, or removing vector search) is a
   follow-up plan, 033.5 "The knowledge pipeline".
3. (2026-11-03) The planning agent (Opus) writes the 15 held-out questions
   and their keys; the owner approves five samples before the rest.
4. (2026-11-03, amended 2026-11-04 by direction 8) `deepseek-flash`
   executes slices 1 to 6 and 9; it does not interpret the held-out
   verdict.
5. **The gap answer** (approved by admitting this plan as drafted): a turn
   that read but could not publish answers exactly:
   "I couldn't pin that down in the chapters I opened, and I'd rather not
   guess. Tell me roughly when it happens, or a name from the scene, and
   I'll look again."
6. **Decision rule, fixed before the first run.** On the 15 held-out
   questions, three runs per arm: **extend** vector search when arm A's
   mean correct per run beats arm D's by at least **2.0 of 15**, A's
   pass^3 is at least D's, and A has no more quote misses than D;
   otherwise **retire** it. The bands (chapters 1 to 1000, where notebook
   statements are indexed, and 1001 to 3127, passages only) are reported
   separately. The owner decides.
7. Live cap $3.00 on the meter. No tuning of the held-out test: once its
   first answer runs, product, prompts, and questions are frozen until all
   90 are in.
8. (2026-11-04) The executor gets goals and judgement, not a script: it
   fixes failing tests, builds, and patches itself (never by weakening a
   test), may fix the dominant failure site after the diagnosis
   (test-first), may re-run a command once after an environment crash
   (never to re-sample a model answer), and records every decision in its
   report. It stops only for the hard rules in the brief.

## Scope

- **Small fixes (test-first):** `ChatRuntime.close()` releases the
  embedded search index; volume 13 ends at chapter 3160 and volume 14 is
  the open one (Python and TypeScript tables); the shipped
  `semantic_search` description gets its missing word.
- **Failure sites:** each of the nine checks that end a turn with "The
  model returned an unsafe response." (or no accepted answer) records its
  own `error_category`; the harness saves it per answer.
- **Diagnosis:** re-run the 33 question-and-arm pairs that gave no answer
  in Plan 032, twice each, and count failures by site.
- **The gap answer:** `run_turn(gap_answer=...)`, on in the product: a
  turn that would fail on a protocol check or a step limit publishes the
  gap answer instead. Provider, persistence, interruption, and wrong-model
  failures still fail.
- **Missed scenes:** a `<when_you_cannot_find_it>` prompt block: say the
  scene was not found; never present another scene as the answer.
- **Regression:** the same 33 pairs again (no answer must be gone), plus
  a check set: three scene questions where Plan 032 saw substitution and
  the three Foundational Reader Trials, arm A, three runs.
- **The held-out test:** 15 new "find the scene I describe" questions
  (Opus), arms A and D, three runs each, judged blind, the rule above.

## Out of scope

- Extending or retiring vector search, notebook-statement indexing past
  1000, and the updater pipeline: Plan 033.5, after this verdict.
- A targeted fix for the dominant failure site beyond the gap answer,
  unless the slice 7 review finds a one-line cause; anything larger is
  recorded for 033.5 or later.
- Re-running the twelve Reader Experience Trials. The prompt rule touches
  every answer, so they must re-run before the next release (Plan 039 at
  the latest); this plan runs the three Foundational Reader Trials as its
  regression. Recorded in `TODO_future.md`.
- Arm B's prompt still naming notebook statements (evaluation-only arm,
  unused here).
- Any UI change. The volume number shown for chapters after 3160 changes
  from 13 to 14; no layout changes.

## Deterministic proof / verification floor

1. `uv run pytest -q`: 854 passed, 4 skipped after slice 5 (839 before;
   +3 slice 2, +4 slice 3, +8 slice 5). Zero failures at every slice.
2. `npx vitest run`: 185 passed (183 before; +2 volume cases).
3. `npx tsc --noEmit` exits 0; `npm run build` succeeds and the rebuilt
   `src/weaver/web/dist` is committed with slice 2.
4. `uv run --with ruff ruff check` on `scripts/retrieval_verdict.py`, the
   new test files, `deliverables/033-every-turn-answers/patches/`, and
   `deliverables/033-every-turn-answers/tools/`: clean.
5. Each patch script prints `OK` and exits 0; re-running it refuses.
   (Pre-tested 2026-11-03 in a throwaway worktree: all three applied, 854
   passed, 4 skipped, vitest volume file 10 passed, tsc clean.)
6. Regression gate (slice 6): no answer anywhere in the 66 regression
   answers carries a `protocol_` site, and at most 2 answers have no
   answer at all (provider errors); `check_summary.py` prints `GATE pass`.
7. Held-out: `analyze_heldout.py` runs with every question judged three
   times per arm and prints the rule outcome.
8. No staged file outside each slice's list; no secrets, chapters,
   question text, or answers in any commit.

## STOP conditions

The executor stops only for the brief's hard rules (section 1 of the
runbook):

- anything that would change the held-out test once it has started, or
  re-sample a model answer;
- judging that would see a set's key or run records;
- the meter above $2.70 before a live command (cap $3.00);
- a commit that would carry the key, private text, or the owner's
  unrelated work; any push, merge, tag, stash, reset, or force;
- the server running on port 8016 (ask the owner);
- weakening a test to get green;
- a change to what readers see beyond the plan, wider scope, deleting
  data, or spend past the cap (owner decisions).

Everything else (a failing patch, test, build, or harness crash; a missed
regression target, after one fix round) is fixed by the executor and
recorded.

## Slices

1. **Plan and admit.** This doc, the runbook, the pre-tested patches and
   tools, the index rows, the deliverable scaffold; then the owner's
   admission, recorded by the executor (runbook step 1).
2. **Small fixes.** Patch 1; full floor; rebuild the bundle; commit.
   Done when floor items 1 to 4 hold at 842 backend and 185 frontend.
3. **Failure sites.** Patch 2; floor; commit. Done at 846 backend.
4. **Diagnosis (live).** The 33 pairs twice (runs 4 and 5) in their own
   arms, product without the gap answer; `diag.py` counts failures by
   site. Done when every failed answer has a site. Private output only.
5. **The gap answer and missed scenes.** Patch 3; floor; commit. Done at
   854 backend.
6. **Regression (live).** The 33 pairs again (runs 6 and 7) and the check
   set (arm A, runs 1 to 3), judged blind; the regression gate. The
   executor writes `EXECUTOR_REPORT_1.md` (private) and stops.
7. **Review of Part 1 (Opus).** Read the diagnosis, any fix the executor
   made, and the regression; show the owner three answers: one gap answer
   and two missed-scene answers.
8. **The held-out questions (Opus).** Recipe below; five samples to the
   owner first; then all 15 frozen in `.weaver/evaluation/plan033/
   questions.json` (private) before any held-out run.
9. **The held-out runs (live) and blind judging.** Arms A and D, three
   runs each; prep, judge, analyse. The executor writes
   `EXECUTOR_REPORT_2.md` and stops.
10. **Independent review (Opus).** Audit 20 judged answers (seeded) against
    the key and chapters; if more than 3 of 20 disagree on correct or not,
    re-judge all 90. Write `results.md`, `learning.md`, the review ledger;
    the recommendation per the rule.
11. **Close.** The owner's decision in `decision.md`; HANDOFF,
    TODO_future, and the index updated; Plan 033.5 rescoped to the
    verdict. No merge, tag, or deploy without the owner.

### Question recipe (slice 8, Opus)

- 15 questions, ids `h01` to `h15`, kind `scene_paraphrase`.
- Chapters drawn with `random.Random(33033)`: 5 from 1 to 1000 and 10
  from 1001 to 3127 (inside vector reach, where the test means
  something), excluding any chapter within 15 of an expected chapter in
  Plan 032's question set (which holds Plan 029's reused set). A draw
  that lands in a recap or interlude moves to the next chapter with a
  distinct scene; the move is recorded.
- Each question describes one scene in plain words, the way a reader half
  remembers it: no run of four or more words from the chapter (checked
  with exact search), at most one proper name, and it asks for one
  concrete outcome (who, what, or why) answerable from one or two
  chapters.
- Each key: `expected_chapters` and 2 to 4 `required_facts`, F1 the core
  fact, every fact checked against the chapter text. The notebook may
  only point at candidate chapters.
- Same file shape as Plan 032 (`status`, `questions` with `id`, `source`,
  `kind`, `volume`, `text`, `expected_chapters`, `required_facts`).
