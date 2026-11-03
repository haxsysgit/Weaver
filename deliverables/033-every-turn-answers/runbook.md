# Plan 033 runbook (executor: `deepseek-flash`)

Written 2026-11-03 by the planning agent. The plan is
`plans/033-every-turn-answers.md`; this file is how you carry out your
part of it. Follow every step in order and do exactly what it says. When a
step says **STOP**, stop the whole runbook, write the report it names, and
do nothing else.

You run two parts:

- **Part 1** (steps 1 to 8): admission, three code patches, a diagnosis run,
  a regression run, judging a small check set. Ends with
  `EXECUTOR_REPORT_1.md`.
- **Part 2** (steps 9 to 12): the held-out runs and their judging. Start
  Part 2 only when the owner tells you to, AND step 9's check passes.

The planning agent (Opus) does the work between the two parts and after
Part 2. You never write a fix, change a prompt, design a question, or
interpret a result.

---

## 0. Rules (read all of them first)

1. Work from the repository root: `/c/Users/haxsy/weaver` (Git Bash).
   Every command below assumes it. Start every new shell with:

   ```bash
   cd /c/Users/haxsy/weaver
   export UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python
   P=.weaver/evaluation/plan033
   Q32=.weaver/evaluation/plan032/questions.json
   ```

2. **Code changes only through the patch scripts** in
   `deliverables/033-every-turn-answers/patches/`. Never edit a source or
   test file by hand. If a patch prints `ERROR`, **STOP**.
3. You may create files only inside `.weaver/evaluation/plan033/`, plus
   what the patch scripts and `npm run build` write. Never edit anything
   else.
4. **Git:** only the commands in Appendix C. Never `git add -A`,
   `git add .`, `git stash`, `git checkout`, `git reset`, `git push`, or
   `git commit --amend`. Never stage `uv.lock`, `package.json`,
   `package-lock.json`, `.agents/`, `docs/`, `vision.md`, or
   `scripts/build_prod_bundle.py`: they are the owner's uncommitted work.
5. Commit messages are exactly the ones given. **No trailer lines** of any
   kind (no "Co-Authored-By", no "Generated with").
6. Never print, copy, or write the DeepSeek key. Never open `.env`; the
   only allowed check is in step 2.
7. Never re-run a live command that already ran, even if it failed. A
   failure is evidence: **STOP** and report it.
8. Never start the Weaver server. One process may open the search index.
9. Live spend cap: **$3.00** on the meter. Before each live command, if
   the last `spent_usd` is above **2.70**, **STOP**.
10. Every `judge.py`, `packet.py` and `judge_prep.py` command starts with
    the `PREFIX=` shown. Copy commands exactly.
11. A failing test, type check, build, or lint after a patch: **STOP**. Do
    not fix it.
12. Never put question text, answer text, or novel text in any committed
    file. Your reports live in `.weaver/evaluation/plan033/` (private).

---

## 1. Record the admission (only once)

Do this only if the owner's message says, in their words, that they admit
Plan 033 as drafted. If it does not, **STOP** and ask.

```bash
uv run python deliverables/033-every-turn-answers/patches/p0_admit.py $(date +%F)
```

Expected: `OK 4 edits, 0 new files`. Then commit (Appendix C) with files:

```
plans/033-every-turn-answers.md
deliverables/033-every-turn-answers/learning.md
deliverables/033-every-turn-answers/README.md
plans/README.md
```

Message: `Plan 033: admit the plan`

---

## 2. Preflight (at the start of every session)

```bash
mkdir -p $P
git status --porcelain > $P/git_before_$(date +%H%M).txt
git log --oneline -1
grep -c '^DEEPSEEK_KEY=' .env
netstat -ano | grep ":8016 " | grep LISTENING
```

- `grep -c` must print `1`. If `0`: **STOP** (no key).
- `netstat` must print nothing. If it prints a line, the server is
  running: **STOP** and ask the owner to stop it.
- Check no evaluation is already running:

  ```powershell
  Get-CimInstance Win32_Process -Filter "name='python.exe'" | Select ProcessId, CommandLine | Format-List
  ```

  If a command line contains `retrieval_verdict` or `weaver web`: **STOP**.
- Create the spend ledger if it does not exist: `touch $P/spend.txt`.

---

## 3. Slice 2: small fixes (patch 1)

> **Done (ecdd403).** The executor's floor caught one frontend test the
> pre-test missed (`SpellSurfaceSettings.test.tsx` expected "Volume 13"
> for chapter 3200) and stopped, as it should. The planning agent changed
> that expectation to "Volume 14" (the intended change), re-ran vitest
> (185 passed) and tsc, and committed the slice. Resume at step 4.

```bash
uv run python deliverables/033-every-turn-answers/patches/p1_small_fixes.py
```

Expected last line: `OK 12 edits, 1 new files`.

The floor:

```bash
uv run pytest -q 2>&1 | tail -3
npx vitest run 2>&1 | grep -E "Test Files|Tests "
npx tsc --noEmit; echo "tsc exit $?"
npm run build 2>&1 | tail -3; echo "build exit $?"
uv run --with ruff ruff check tests/test_plan033_small_fixes.py deliverables/033-every-turn-answers/patches deliverables/033-every-turn-answers/tools
```

Expected: pytest `842 passed, 4 skipped`; vitest `Tests  185 passed`;
`tsc exit 0`; `build exit 0`; ruff `All checks passed!`. Anything else:
**STOP**.

Commit (Appendix C). Files:

```
src/weaver/chat_runtime.py
src/weaver/spoilers/judge.py
src/weaver/web/frontend/lib/volumes.ts
src/weaver/web/frontend/lib/volumes.test.ts
tests/test_spoilers.py
tests/test_shelf_edge.py
src/weaver/retrieval/tools.py
tests/test_plan033_small_fixes.py
src/weaver/web/dist
```

(`src/weaver/web/dist` is a folder: `git add src/weaver/web/dist` stages
the rebuilt bundle, including renamed asset files. In the staged-name
check, every `dist` line is expected.)

Message: `Plan 033: close the search index, volume 13 ends at 3160, search description`

---

## 4. Slice 3: failure sites (patch 2)

```bash
uv run python deliverables/033-every-turn-answers/patches/p2_failure_sites.py
```

Expected: `OK 13 edits, 2 new files`.

The floor:

```bash
uv run pytest -q 2>&1 | tail -3
uv run --with ruff ruff check scripts/retrieval_verdict.py tests/test_turn_failure_sites.py tests/test_plan033_harness.py
```

Expected: `846 passed, 4 skipped`; ruff clean. Else **STOP**.

Commit. Files:

```
src/weaver/agent/turn.py
scripts/retrieval_verdict.py
tests/test_turn_failure_sites.py
tests/test_plan033_harness.py
```

Message: `Plan 033: name the check behind every failed turn`

---

## 5. Slice 4: the diagnosis run (live, before the fix)

These re-run the 33 question-and-arm pairs that gave no answer in Plan
032, twice each (runs 4 and 5). Eight commands, **one at a time**. Each
takes 2 to 6 minutes. If your shell tool has a short time limit, start
each with `nohup ... &` exactly as shown and check its log every 2
minutes with `tail -3`. A command is finished when the last line of its
log starts with `{"spent_usd"`.

Shared prefix for this step:

```bash
H="uv run python scripts/retrieval_verdict.py --questions $Q32 --out $P/runs --live --cap 3.0"
```

Replace `SPENT` with the last `spent_usd` (start with `0`).

**Run the commands one at a time, never together.** Start one line, wait
until its log's last line starts with `{"spent_usd"`, run the checks
below, append the ledger, and only then start the next line with the new
`SPENT`. Two at once would fight over the search index and the spend
cap.

```bash
nohup $H --arm A --run 4 --spent SPENT --only n01 --only n04 --only n07 --only n13 --only r20 --only r30 --only t2 > $P/diag_A4.log 2>&1 &
nohup $H --arm B --run 4 --spent SPENT --only n05 --only n07 --only n12 --only n13 --only r05 --only r14 --only r15 --only r16 --only r30 --only r38 --only t2 --only t3 > $P/diag_B4.log 2>&1 &
nohup $H --arm C --run 4 --spent SPENT --only n13 --only r14 > $P/diag_C4.log 2>&1 &
nohup $H --arm D --run 4 --spent SPENT --only n05 --only n13 --only n14 --only n16 --only n17 --only r14 --only r15 --only r16 --only r30 --only r35 --only r38 --only t2 > $P/diag_D4.log 2>&1 &
```

Then the same four with `--run 5` and logs `diag_A5.log`, `diag_B5.log`,
`diag_C5.log`, `diag_D5.log`.

### After every live command: check its log

```bash
L=$P/diag_A4.log      # the log you just made
grep "search probe" $L
grep -cE "^[ABCD] [0-9]+/" $L
grep -E "STOP|TOOL ERRORS|Traceback" $L
tail -1 $L
```

- Arms A and C must show `search probe ok (N hits)` with N above 0. If
  missing: **STOP**. (B and D do not search; no probe line.)
- The answer count must be: A 7, B 12, C 2, D 12.
- The `STOP|TOOL ERRORS|Traceback` line must print nothing, else **STOP**.
- Lines ending in `failed, ...` (sometimes with ` SITE ...`) are expected
  here: they are what this step measures.
- Append the summary to the ledger and use it as the next `SPENT`:

  ```bash
  echo "$(basename $L) $(tail -1 $L)" >> $P/spend.txt
  ```

### The diagnosis summary

```bash
uv run python deliverables/033-every-turn-answers/tools/diag.py $P/runs 4 5 | tee $P/diag_before.txt
```

- `no-answer turns with no run body` must be `0`, else **STOP** (the
  harness could not read why turns failed).
- Copy the whole output into the report. Do not interpret it.

No commit: the run records are private.

---

## 6. Slice 5: the gap answer and missed scenes (patch 3)

```bash
uv run python deliverables/033-every-turn-answers/patches/p3_gap_answer.py
```

Expected: `OK 11 edits, 1 new files`.

The floor:

```bash
uv run pytest -q 2>&1 | tail -3
npx vitest run 2>&1 | grep -E "Test Files|Tests "
uv run --with ruff ruff check tests/test_turn_gap_answer.py
```

Expected: `854 passed, 4 skipped`; `Tests  185 passed`; ruff clean.
Else **STOP**.

Commit. Files:

```
src/weaver/agent/turn.py
src/weaver/conversation/runner.py
src/weaver/chat_runtime.py
tests/test_agent_turn.py
tests/test_turn_gap_answer.py
```

Message: `Plan 033: a turn that read always answers, and admits a scene it cannot find`

---

## 7. Slice 6: regression (live) and the check set

### 7a. The same 33 pairs again (runs 6 and 7)

Exactly the eight commands from step 5, with `--run 6` and `--run 7`
instead of 4 and 5, and logs `regr_A6.log` ... `regr_D7.log`. Same
checks after each. Lines ending in `failed` should now be rare; lines
with ` SITE ...` on a `completed` answer are rescued turns (expected).

```bash
uv run python deliverables/033-every-turn-answers/tools/diag.py $P/runs 6 7 | tee $P/diag_after.txt
```

**Regression gate:** `no-answer turns at a protocol check` must be `0`,
and the `with no answer` total at most `2`. Else **STOP**.

### 7b. The check set (arm A, runs 1 to 3)

Three scene questions where Plan 032 saw a different scene presented as
the answer (r15, r35, n18), and the three Foundational Reader Trials.

```bash
nohup uv run python scripts/retrieval_verdict.py --questions $Q32 --out $P/check --live --cap 3.0 --arm A --run 1 --spent SPENT --only r15 --only r35 --only n18 --only t1 --only t2 --only t3 > $P/check_1.log 2>&1 &
```

Then the same with `--run 2` (`check_2.log`) and `--run 3`
(`check_3.log`). Checks after each: probe line present, 6 answers, no
`STOP|TOOL ERRORS|Traceback`, ledger appended.

### 7c. Judging tools for the check set

```bash
mkdir -p $P/q032 $P/tools
cp $Q32 $P/q032/questions.json
for f in judge_prep.py judge.py packet.py chapter.py; do
  sed 's#evaluation/plan032#evaluation/plan033/q032#' .weaver/evaluation/plan032/$f > $P/q032/$f
  sed 's#evaluation/plan032#evaluation/plan033#' .weaver/evaluation/plan032/$f > $P/tools/$f
done
grep -c "plan033" $P/q032/judge_prep.py $P/q032/judge.py $P/q032/packet.py $P/tools/judge_prep.py $P/tools/judge.py $P/tools/packet.py
```

Each count must be at least `1`. Then prepare the blind packets:

```bash
PREFIX=x_ PATTERN="A/*.json" SEED=3311 uv run python $P/q032/judge_prep.py $P/check
```

Expected: `18 answers, ...`. Write the line down.

### 7d. Judge the check set (blind)

While judging, you may open only: `packet.py` output,
`.weaver/evaluation/plan032/rulings.md`, and `chapter.py` output. You must
not open `$P/check/`, any `*key.json`, any `*.log`, or `$P/runs/`.

For each question in this order: `r15 r35 n18 t1 t2 t3`

```bash
PREFIX=x_ WIDTH=8000 uv run python $P/q032/packet.py r15
```

Judge every answer with the rubric (Appendix A), then record all of that
question's verdicts in one command:

```bash
PREFIX=x_ python $P/q032/judge.py r15 b004:declined:not-found b011:wrong:substitutes-scene b016:correct
```

**The substitution label** (this check's purpose): if an answer presents
a different scene from the one asked about as if it were the answer, its
verdict is `wrong` and its note is exactly `substitutes-scene`. If it says
it could not find the scene (including the gap answer, "I couldn't pin
that down..."), its verdict is `declined` and its note is `not-found`,
even if it then offers a guess that it labels as a guess. A labelled
guess that turns out to be the right scene is judged on its facts.

Chapters: `uv run python $P/q032/chapter.py 871 --grep Belle` prints the
matching paragraphs; without `--grep`, the whole chapter.

### 7e. The check gate

```bash
uv run python deliverables/033-every-turn-answers/tools/check_summary.py | tee $P/check_summary.txt; echo "exit $?"
```

`exit 0` is a pass. `exit 2` is a fail: **STOP** (do not change any
verdict). `exit 1`: finish judging.

---

## 8. Report 1, then STOP

Prove nothing else changed:

```bash
git status --porcelain > $P/git_after_part1.txt
git log --oneline -6
```

Write `$P/EXECUTOR_REPORT_1.md` (Appendix B, template 1). Then reply to
the owner only: "Plan 033 Part 1 finished. Report:
.weaver/evaluation/plan033/EXECUTOR_REPORT_1.md". Stop.

---

## 9. Part 2 precondition

Start only when the owner says to start Part 2. Then:

```bash
python -c "import json;d=json.load(open('.weaver/evaluation/plan033/questions.json',encoding='utf-8'));print(d['status'][:40]);print(len(d['questions']))"
```

It must print a status starting with `frozen` and `15`. Else **STOP**.
Run step 2 (preflight) again.

---

## 10. Slice 9: the held-out runs (live)

Six commands, one at a time, same checks as step 5 (arm A shows a probe;
15 answers each; nothing from `STOP|TOOL ERRORS|Traceback`; ledger
appended).

```bash
nohup uv run python scripts/retrieval_verdict.py --questions $P/questions.json --out $P/heldout --live --cap 3.0 --arm A --run 1 --spent SPENT > $P/held_A1.log 2>&1 &
nohup uv run python scripts/retrieval_verdict.py --questions $P/questions.json --out $P/heldout --live --cap 3.0 --arm D --run 1 --spent SPENT > $P/held_D1.log 2>&1 &
```

Then A and D with `--run 2` (`held_A2.log`, `held_D2.log`) and `--run 3`
(`held_A3.log`, `held_D3.log`).

```bash
ls $P/heldout/A/*.json | wc -l    # expect 45
ls $P/heldout/D/*.json | wc -l    # expect 45
```

---

## 11. Slice 9: blind judging of the held-out answers

```bash
PREFIX=h_ PATTERN="[AD]/*.json" SEED=33033 uv run python $P/tools/judge_prep.py $P/heldout
```

Expected: `90 answers, ...`. Write the line down.

While judging, you may open only `packet.py` output and `chapter.py`
output. You must not open `$P/heldout/`, any `*key.json`, any `*.log`,
any `*joined.json`, or `$P/questions.json` directly (the packet shows the
question and its facts).

For each question `h01` to `h15`, in order:

```bash
PREFIX=h_ WIDTH=8000 uv run python $P/tools/packet.py h01
PREFIX=h_ python $P/tools/judge.py h01 b003:correct b017:partial:no-outcome ...
```

Use the rubric (Appendix A) and the substitution label from step 7d.
There are no earlier rulings for these questions; keep your own labels
consistent across a question's six answers.

Check you judged all 90:

```bash
python -c "import json;k=json.load(open('.weaver/evaluation/plan033/h_key.json'));j=json.load(open('.weaver/evaluation/plan033/h_judgements.json'));print(len(j),'of',len(k));print(sorted(set(k)-set(j)))"
```

It must print `90 of 90` and `[]`.

---

## 12. The analysis, report 2, STOP

```bash
uv run python deliverables/033-every-turn-answers/tools/analyze_heldout.py | tee $P/heldout_analysis.txt
uv run python deliverables/033-every-turn-answers/tools/diag.py $P/heldout 1 2 3 | tee $P/heldout_diag.txt
git status --porcelain > $P/git_after_part2.txt
```

Write `$P/EXECUTOR_REPORT_2.md` (Appendix B, template 2). Do not write
any conclusion. Reply to the owner only: "Plan 033 Part 2 finished.
Report: .weaver/evaluation/plan033/EXECUTOR_REPORT_2.md". Stop.

---

## Appendix A. The rubric

F1 is the core fact: the main thing the question asks for. Apply in this
order and stop at the first row that fits:

| Step | If the answer... | Verdict |
|---|---|---|
| 1 | is empty or shows `(NO ANSWER)` | `none` |
| 2 | only says it cannot find or confirm it, and commits to no answer | `declined` |
| 3 | presents a different scene as the answer to the one asked about | `wrong` (note `substitutes-scene`) |
| 4 | states something false about what the question asks (contradicted by the key or the chapters), even with the right facts too | `wrong` |
| 5 | misses F1, or contradicts F1 | `wrong` |
| 6 | has F1 and enough of all the facts (table below) | `correct` |
| 7 | has F1 but not enough facts | `partial` |

Facts needed for `correct` (F1 counts as one): 1 fact: 1; 2 facts: 2;
3 facts: 2; 4 facts: 3.

- A fact counts if stated clearly, in any words. A later or different
  name for the same person, item, or place is the same fact.
- An answer that hedges but commits is judged on what it commits to.
- A small false side detail that does not change the answer is not
  material: note it (`correct:minor-side-error`).
- Never judge a claim false from memory: check the chapter. If you still
  cannot tell, do not call it false.
- Two answers with the same content get the same verdict. Compare a
  question's answers side by side before recording.
- Notes: short lowercase labels with hyphens, no spaces or colons. Give a
  note on every verdict that is not `correct`.
- To correct a verdict before the gate or the analysis, run `judge.py`
  again for that blind id; the newest counts. Never after.

## Appendix B. Report templates

### Template 1: `EXECUTOR_REPORT_1.md`

```markdown
# Executor report, Part 1

## Outcome
Finished steps 1 to 8 / Stopped at step N because ...

## Preflight
(results of each check)

## Commits
(git log --oneline -6, and for each commit the floor results: pytest,
vitest, tsc, build, ruff)

## Diagnosis (runs 4 and 5)
| Log | Answers | Failed lines | spent_usd after | Probe |
(one row per log)
(paste diag_before.txt in full)

## Regression (runs 6 and 7)
| Log | Answers | Failed lines | spent_usd after | Probe |
(paste diag_after.txt in full; regression gate: pass or fail)

## Check set
(the judge_prep line; per-question verdict counts; paste
check_summary.txt; gate result)
- Answers you found hard, by blind id and question id, and why (no
  answer text)

## Spend
(the whole spend.txt)

## Anything unusual
(errors, surprises, deviations from this runbook, or "none")
```

### Template 2: `EXECUTOR_REPORT_2.md`

```markdown
# Executor report, Part 2

## Outcome
Finished steps 9 to 12 / Stopped at step N because ...

## Held-out runs
| Log | Answers | Failed lines | spent_usd after | Probe |

## Judging
- judge_prep line:
- Judged: N of 90
- Chapters read or grepped: (list)
- Answers you found hard, by blind id and question id, and why (no
  answer text)

## Analysis
(paste heldout_analysis.txt and heldout_diag.txt in full)

## Spend
(the whole spend.txt)

## Anything unusual
```

## Appendix C. How to commit

```bash
git add FILE1 FILE2 ...                 # exactly the slice's files
git diff --cached --name-only           # must list only those files
git diff --cached | grep -nE "DEEPSEEK_KEY=[^\"' ]|sk-[A-Za-z0-9]{20}" ; echo "secret check exit $?"
git commit -m "MESSAGE"
git log --oneline -1
```

- The staged list must match the slice's list (for slice 2, plus any
  `src/weaver/web/dist/...` lines). If any other file is staged: **STOP**.
- `secret check exit` must be `1` (grep found nothing). If `0`: **STOP**.
- Message exactly as given, no trailer lines.
