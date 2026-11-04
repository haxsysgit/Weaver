# Plan 033 brief for the executor (`deepseek-flash`)

Rewritten 2026-11-04 at the owner's direction: the executor gets the goal
and the judgement to reach it, not a script. The plan is
`plans/033-every-turn-answers.md`. Read it first; this brief tells you
what each slice is for, what "done" means, and what has been prepared.

You are a capable engineer. Fix what breaks, make reasonable calls, keep
going, and write down what you decided and why. Stop only for the hard
rules below.

---

## 1. Hard rules (these protect the experiment and the owner's repo)

1. **No tuning the held-out test.** Once the first held-out answer runs
   (slice 9), the product code, prompts, and questions do not change until
   all 90 held-out answers are in. Never re-run a held-out answer to get a
   different result. Never change a verdict after the analysis has run.
2. **Blind judging.** While judging a set, do not open its key file, its
   run-record folder, or its logs. Judge from the packet, the rubric, and
   the chapters.
3. **Spend.** Live spend is metered by the harness. Hard cap $3.00. Do not
   start a live command when the meter is above $2.70.
4. **Private stays private.** Never print, copy, or commit the DeepSeek key;
   never open `.env`. No question text, answer text, or novel text in any
   committed file. Run records, judgements, and reports live in
   `.weaver/evaluation/plan033/` (not committed).
5. **Git.** Commit with the prefix `Plan 033: ` and no trailer lines of any
   kind (no Co-Authored-By, no "Generated with"). Stage files by name.
   Never stage the owner's unrelated uncommitted work (`uv.lock`,
   `package.json`, `package-lock.json`, `.agents/`, `docs/`, `vision.md`,
   `scripts/build_prod_bundle.py`, `deliverables/015-*`, `deliverables/019-*`).
   Never push, merge, tag, stash, reset, amend, or force anything.
6. **One process on the search index.** Never start the Weaver server.
   Run live harness commands one at a time.
7. **Tests mean something.** Do not weaken or delete a test to get green.
   Change a test's expectation only when this plan intends that behaviour
   change (for example, chapter 3200 is now volume 14), and say so in the
   commit message.
8. **Owner-only decisions.** Anything that changes what readers see beyond
   the plan (new copy, UI changes), widens the scope, deletes data, or needs
   spend past the cap: stop and ask.

## 2. Your freedom

- If a patch script does not apply, or a test, type check, lint, or build
  fails, find the cause and fix it, test-first where it is code. You may
  edit any file the plan's scope touches.
- The patch scripts are pre-tested starting points, not the only way.
  Change them, or make the change directly, if that is cleaner.
- After the diagnosis (slice 4), if one failure site dominates and you can
  see its cause, fix it properly (test-first) before the regression run.
  The gap answer stays as the safety net either way.
- If a live command crashes for an environment reason (harness error, lock,
  network) rather than a model outcome, fix the cause and re-run that
  command once. Record it. A model answer that failed or came out wrong is
  data: never re-sample it.
- Batch, background, and order work as you see fit, within the hard rules.
- Use judgement when judging, inside the rubric (Appendix A). Read the
  chapters whenever a claim is uncertain.
- Record every decision, deviation, and surprise in your report. That
  record replaces asking.

## 3. Setup

```bash
cd /c/Users/haxsy/weaver
export UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python   # every uv command needs it
P=.weaver/evaluation/plan033
Q32=.weaver/evaluation/plan032/questions.json
```

Before live work: the server must not be listening on port 8016, and no
other `retrieval_verdict` process may be running. If the server is up, ask
the owner to stop it (hard rule 6).

The floor at every code slice: `uv run pytest -q`, `npx vitest run`,
`npx tsc --noEmit`, `npm run build` when frontend files changed (and commit
`src/weaver/web/dist`), and `uv run --with ruff ruff check` on the files
you added or changed (much of the existing product code already fails
ruff; do not reformat it).

The live harness: `scripts/retrieval_verdict.py`. A useful shape:

```bash
uv run python scripts/retrieval_verdict.py --questions FILE --out DIR --live --cap 3.0 \
  --arm A --run N --spent LAST_SPENT [--only QID ...] > LOG 2>&1
```

Each log ends with a `{"spent_usd": ...}` line; pass it as `--spent` to
the next command. Each answer line names the question, the exit, and
(after slice 3) ` SITE ...` when a check failed it or the gap answer
rescued it. Arms that search (A, C) print `search probe ok (N hits)` first;
no probe line, or `TOOL ERRORS`, means search is broken: fix that before
spending more.

## 4. Part 1 (slices 3 to 6)

**Status at 2026-11-04:** slice 1 (admission, c97a0bb) and slice 2 (small
fixes, ecdd403) are done. Start at slice 3.

### Slice 3: name the check behind every failed turn

- **Goal:** every turn that ends with "The model returned an unsafe
  response." (or no accepted answer) records which of the nine checks in
  `run_turn` stopped it, in `error_category`; the harness saves it per
  answer (`run_body`, `site`).
- **Prepared:** `patches/p2_failure_sites.py` (tags the nine sites, adds
  `read_run_body` and `failure_site` to the harness, and two test files).
- **Done when:** the floor is green (about 846 backend tests) and it is
  committed.

### Slice 4: the diagnosis run (live, before the fix)

- **Goal:** learn which checks kill the silent turns. Re-run the 33
  question-and-arm pairs that gave no answer in Plan 032, twice each (runs
  4 and 5), each pair in its own arm, using `$Q32`, output `$P/runs`.
- **The pairs:**
  - A: n01 n04 n07 n13 r20 r30 t2
  - B: n05 n07 n12 n13 r05 r14 r15 r16 r30 r38 t2 t3
  - C: n13 r14
  - D: n05 n13 n14 n16 n17 r14 r15 r16 r30 r35 r38 t2
- **Summary:** `uv run python deliverables/033-every-turn-answers/tools/diag.py $P/runs 4 5 > $P/diag_before.txt`
- **Done when:** 66 answers are in and every no-answer turn has a run
  body (if the harness cannot read why turns failed, fix that first).
- **Then decide:** if one site dominates and its cause is clear, fix it
  (allowed by section 2) and note it for the report.

### Slice 5: the gap answer and missed scenes

- **Goal:** a turn that read but could not publish answers the reader with
  the owner-approved gap answer (exact wording in the plan, direction 5);
  provider, persistence, interruption, and wrong-model failures still
  fail. The web prompt tells Weaver to say first when it cannot find a
  described scene and never to present a different scene as the answer.
- **Prepared:** `patches/p3_gap_answer.py` (opt-in `gap_answer` on
  `run_turn`, on in the product runner; `rescued_from` recorded in the run
  reading; the `<when_you_cannot_find_it>` prompt block; tests).
- **Done when:** the floor is green (about 854 backend, 185 frontend) and
  it is committed.

### Slice 6: regression and the check set (live)

- **Regression:** the same 33 pairs again (runs 6 and 7). Summarise with
  `diag.py $P/runs 6 7 > $P/diag_after.txt`.
  **Target:** no no-answer turn at a `protocol_` site, and at most 2
  no-answer turns in total (provider errors).
- **Check set:** arm A, runs 1 to 3, questions r15 r35 n18 (Plan 032 saw
  another scene presented as the answer) and t1 t2 t3 (the Foundational
  Reader Trials), from `$Q32`, output `$P/check`.
- **Judging tools:** copy Plan 032's private tools and point them at new
  folders:

  ```bash
  mkdir -p $P/q032 $P/tools
  cp $Q32 $P/q032/questions.json
  for f in judge_prep.py judge.py packet.py chapter.py; do
    sed 's#evaluation/plan032#evaluation/plan033/q032#' .weaver/evaluation/plan032/$f > $P/q032/$f
    sed 's#evaluation/plan032#evaluation/plan033#' .weaver/evaluation/plan032/$f > $P/tools/$f
  done
  PREFIX=x_ PATTERN="A/*.json" SEED=3311 uv run python $P/q032/judge_prep.py $P/check
  PREFIX=x_ WIDTH=8000 uv run python $P/q032/packet.py r15          # one question's blind packet
  PREFIX=x_ python $P/q032/judge.py r15 b004:declined:not-found ...  # record its verdicts
  uv run python $P/q032/chapter.py 871 --grep Belle                  # read or search a chapter
  ```

  Always set `PREFIX=x_` for these: without it `judge.py` writes to the
  default file. Earlier rulings for these questions are in
  `.weaver/evaluation/plan032/rulings.md`.
- **Gate:** `uv run python deliverables/033-every-turn-answers/tools/check_summary.py`
  must print `GATE pass`: at most 1 of the 9 scene answers presents
  another scene (note `substitutes-scene`), and at least 6 of the 9 trial
  answers are correct.
- **If a target or the gate misses:** you may diagnose and fix the cause
  (it is still Part 1; the held-out set has not run), then re-run the
  regression and the check set as new runs (8 and 9 for the pairs, 4 to 6
  for the check set), keeping the earlier runs as evidence. One fix round;
  if it still misses, write the report and say so.

### End of Part 1

Write `$P/EXECUTOR_REPORT_1.md` (Appendix B) and tell the owner it is
ready. Part 2 needs the held-out questions, which the planning agent
writes; if `$P/questions.json` already exists with a status starting
`frozen`, carry straight on to Part 2.

## 5. Part 2 (slice 9): the held-out test

- **Precondition:** `$P/questions.json` exists, its status starts with
  `frozen`, and it holds 15 questions. Never open it except through
  `packet.py` once judging starts.
- **Runs:** arms A and D, runs 1 to 3, all 15 questions, output
  `$P/heldout` (90 answers). Product code frozen for the duration
  (hard rule 1).
- **Judging:**
  `PREFIX=h_ PATTERN="[AD]/*.json" SEED=33033 uv run python $P/tools/judge_prep.py $P/heldout`,
  then `PREFIX=h_` with `$P/tools/packet.py` and `$P/tools/judge.py` for
  h01 to h15. Keep labels consistent within each question.
- **Analysis:** `uv run python deliverables/033-every-turn-answers/tools/analyze_heldout.py > $P/heldout_analysis.txt`
  and `diag.py $P/heldout 1 2 3 > $P/heldout_diag.txt`. The rule outcome
  it prints is the plan's fixed rule; report it, do not argue it.
- Write `$P/EXECUTOR_REPORT_2.md` and tell the owner it is ready.

---

## Appendix A. The rubric

F1 is the core fact. Apply in order; the first row that fits wins.

| If the answer... | Verdict |
|---|---|
| is empty | `none` |
| only says it cannot find or confirm it, committing to no answer (the gap answer counts here) | `declined`, note `not-found` |
| presents a different scene as the answer to the one asked about | `wrong`, note `substitutes-scene` |
| states something false about what was asked (key or chapters contradict it) | `wrong` |
| misses or contradicts F1 | `wrong` |
| has F1 and enough facts: 1 of 1, 2 of 2, 2 of 3, 3 of 4 | `correct` |
| has F1 but too few facts | `partial` |

- A fact counts in any words; a later name for the same thing is the same
  fact. A hedged answer is judged on what it commits to. A small false side
  detail that does not change the answer is noted, not punished. Never call
  a claim false from memory: check the chapter. Same content, same verdict.
- Notes: short lowercase labels with hyphens. Note every verdict that is
  not `correct`.

## Appendix B. What the reports contain

Facts, not conclusions:

- what ran (commits with their floor results; each live command with its
  answer count and spend after);
- the `diag.py`, `check_summary.py`, and analysis outputs in full;
- every decision you made under section 2 (what, why, and the evidence),
  every fix, every re-run and its reason;
- answers you found hard to judge (blind id, question id, why; no answer
  text);
- the spend ledger and anything unusual.
