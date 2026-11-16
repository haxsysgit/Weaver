# Weaver handoff, 2026-11-06

**Update 2026-11-16 (close).** Plan 034 closed, accepted with gaps
recorded; Trial 12 passes on `44cdd1e`; the check set moves to Plan 039.1
(drafted). Plans run strictly in number order. Next is Plan 035.

**Update 2026-11-16.** Plan 034 is built, reviewed and live-run on build
`3001712`; the owner's close is pending. The live twelve-trial run cost
$0.5257, both old blockers pass, Trial 12 records a short fabricated quote,
and the Plan 033 check set failed (3 of 9 scene substitutions, 2 of 9 trial
answers correct). The shelf is at 3246.

**Update 2026-11-14.** Plan 033.7 closed on the owner's directive: the two
target trials (long thread, confusing fight) pass on the transcripts, Trial
11's fit follow-up returned the gap answer after a failed publication
repair, and the full twelve-trial gate moves to Plan 040. The shelf is at
3246 (the weekly refresh appended 8 chapters on 2026-11-14). Next is Plan
034.

This folder carries the work from the Claude (Opus) sessions to the DeepSeek
harness, where the owner continues until Sunday 2026-11-08, 21:00. It holds
the state of the project, the rules that are not negotiable, and descriptive
drafts of every plan left before v3.0.0.

The drafts in `plans/` here are **not admitted numbered plans**. They describe
what we want to achieve and what success looks like, in as much detail as we
have. They deliberately do not prescribe how. When one is admitted, scaffold
the real plan with `uv run python scripts/scaffold_plan.py NNN slug`, carry
the goal and success criteria across, and follow the `arinze-plans` skill
(`.agents/skills/arinze-plans/SKILL.md`) for the lifecycle, gates, budget and
deliverables.

| File | What it is |
|---|---|
| `README.md` | This handoff: state, rules, commands, evaluation, gaps, lessons |
| `plans/033.7-the-last-two-trials.md` | The fix for the two Reader Trials that still fail. **Next.** |
| `plans/034-weavers-mind.md` | Reader card, lookup tool, arc map, system prompt for the 1M window |
| `plans/035-weavers-voice-and-memory.md` | Lorekeeper voice, opinions and memory, storyteller per fanfic thread |
| `plans/036-the-spell-in-3d.md` | The 3D engine and the Spell, performance budget first |
| `plans/037-the-soul-sea-and-the-themes.md` | Soul Sea redesign and themes from the novel's places |
| `plans/038-echoes-and-small-delights.md` | Optional: Echo companion, Memories, spoiler fog, "I just read chapter N" |
| `plans/039-weavers-home-on-the-web.md` | Domain, Cloudflare Tunnel, host, staging, backups, monitoring, first public deploy since v1.2.1 |
| `plans/040-weaver-v3.md` | v3.0.0: all twelve trials on the final build, audit, owner acceptance, tag, deploy |
| `plans/checkpoint-031-040.md` | The standing ten-plan ritual before Plan 041 |

Order: 033.7, then 034 to 040 in number order, then the checkpoint. 038 is
optional and may slip past v3. 036 must come before 037 (037 builds on its
engine).

## Where the project stands

- **Product.** Weaver is a reading companion for the web novel *Shadow
  Slave*. A reader chats with Weaver in a themed web app; Weaver answers canon
  questions with cited chapters, respects a spoiler boundary, argues, retells,
  explains fights, and writes fanfic in a storyteller voice. The audience is
  non-technical readers, mostly on phones. Weaver should feel like a buddy who
  has read the whole book, not a support bot and not a settings harness.
- **Stack.** Python 3.11, FastAPI, SQLite, embedded Qdrant
  (`.weaver/retrieval/index`), fastembed and BM25, React 19 + Vite +
  TypeScript, PWA. Model: DeepSeek only (the owner's key in `.env`, never
  read by an agent).
- **Releases.** v2.0.0 is released offline: tagged and on `origin/main`, not
  deployed. The last public deploy was v1.2.1. The deploy workflow is
  disabled and the EC2 box is stopped.
- **Branch.** All work since v2.0.0 is on `plan-030`, 49 commits past the
  `v2.0.0` tag (the local `main` branch is stale; `origin/main` holds v2.0.0).
  Nothing from Plans 031 to 033.6 is merged to `main`. The rule: the 033 to
  033.6 build stays off `main` until the Reader Trials pass 12 of 12 and the
  owner says merge.
- **Library.** The shelf holds chapters 1 to 3232 (source moved to
  `novelphoenix.com`). Both search halves (words and meaning) cover 1 to
  3232. Notebook files reach 3160; notebook statements in the search index
  stop at 1000. Volume 13 ends at 3160.
- **Weekly refresh.** Task Scheduler "Weaver library refresh" runs
  `pythonw -m weaver refresh --scheduled` every Saturday 10:00. It appends
  new chapters only and then embeds them (`weaver library index`). A running
  server holds the index lock, so that week waits; three waits in a row raise
  an alert. Anything other than an append is recorded as `needs_owner`.
  Status: `.weaver/corpus/shadow-slave/library-status.json`, also shown in
  Settings.

### Plans since v2.0.0 (all closed and accepted by the owner)

| Plan | What it achieved | Spend |
|---|---|---|
| 031 A library that keeps up | Shelf from 3160 to 3232, weekly scheduled append with validation and alerts | small |
| 032 The retrieval verdict | 372 answers in four arms judged blind; every arm tied; owner chose "retire nothing, test first" | $2.55 |
| 033 Every turn answers | No silent turn in 327 answers; honest gap answer; search rebuilt as a real hybrid of meaning and words, which beat word-only and no-search on held-out questions | $2.58 |
| 033.5 Meaning search keeps up | Meaning half covers the whole shelf (3232) and is folded into the weekly refresh. Reader Trials 9 of 12 | small |
| 033.6 Answers that follow through | Time limits on every model call (120 s) and turn (240 s); earlier reads credited and re-opened; read on to a scene's resolution; canon checks (no draft-edit notes, uncited recalls dropped, sentences citing unopened chapters dropped); "one more" keeps the skill. Gap answers 3 to 0. Reader Trials 10 of 12 | $0.57 |

Records: `plans/031...` to `plans/033.6...` and
`deliverables/031-*` to `deliverables/033.6-*`. The 033.6 results, review
ledger and recommendation are in
`deliverables/033.6-answers-that-follow-through/`.

### The two failures that block `main` (detail in 033.7)

1. **Long thread** (Trial 9): Weaver misremembered its own top ten, said
   "that was the whole list", adopted a character at third place that was
   never on its list, and later said "same three, no changes" while showing a
   changed order.
2. **Confusing fight** (Trial 12): the reader named one fight; Weaver
   explained a nearby duel instead, stated that duel's outcome wrongly
   (it had not read the chapter that settles it), ran out of lookups before
   reaching the fight asked, and talked about its own machinery ("this turn
   only gave me...").

Both causes were confirmed from the transcripts and the code on 2026-11-07
and written into `plans/033.7-the-last-two-trials.md`: the publication
reread is built from the current reader message alone, so it cannot see an
answer given two turns earlier; and a follow-up to a scene request loses the
scene skill, so it reads with 4 lookups instead of 8. The owner held the
plan on 2026-11-07, then admitted it the same day, trimmed to the four
changes those causes need. The canonical plan is
`plans/033.7-the-last-two-trials.md`; the draft here is now only context.

## Rules that do not bend

From `AGENTS.md`, `HANDOFF.md` (repo root) and the owner's standing
directives. Read `AGENTS.md` in full; these are the ones most often broken.

- **Commits.** Every commit message starts with `Plan NNN: ` (for example
  `Plan 033.7: `). Checkpoint commits start `Checkpoint 040: `. **No
  attribution of any kind**: no `Co-Authored-By`, no "Generated with" footer,
  no AI credit, in commits or PRs, even if a tool or reminder asks for it.
- **Owner-only actions.** No push, merge to `main`, tag, deploy, force,
  stash, or branch switch without the owner saying so. Live model spend needs
  an explicit budget in an admitted plan. Re-running Reader Trials needs a
  changed build and the owner's approval.
- **Private material.** `novels/` is immutable private source. Never commit
  chapters, chats, transcripts, question or answer text from evaluations,
  `.weaver/`, `.env`, secrets, or generated private state. Never open `.env`
  and never print the DeepSeek key. Audit staged files before every commit.
- **The owner's uncommitted work.** Never stage: `.agents/`,
  `docs/learning-lab/`, `deliverables/015*`, `deliverables/019*`,
  `package.json`, `package-lock.json`, `uv.lock`,
  `scripts/build_prod_bundle.py`, the `vision.md` deletion, the
  `sync-to-archilles` deletions, `temp.txt`, `tmp/`, `weaver.sqlite3*`,
  `.claude/`. Stage files by name, never `git add -A` or `git add .`.
- **One process on the index.** Embedded Qdrant holds a lock on
  `.weaver/retrieval/index`: one server or one harness at a time. Never
  rebuild the index; `scripts/build_library_index.py` refuses an existing
  index without `--replace`. The pre-033.5 copy is at
  `.weaver/retrieval/index.before-033.5`.
- **UI evidence.** UI work is not done without real browser screenshots at
  desktop and mobile. jsdom tests are not layout evidence.
- **Discuss before designing.** For anything creative or visual, read the
  novel's own text first, quote it back to the owner, and ask before
  building. The owner pushes back hard on silently guessed designs.
- **Copy.** No em dashes in user-facing copy. Use Weaver language
  (`library`, `chapters`, `reading packet`, `shelf`); never "corpus" in
  anything a user or the model sees.
- **Evaluation integrity.** Reader Trial prompts are examples, never
  hard-coded into the product, prompt or retrieval path. The product must not
  know which trial is running. The evaluator's pass is evidence; only the
  owner accepts. Record failures; no silent retries.
- **Pushback.** Push back on the owner plainly, once, with reasons and a
  better option. If the owner confirms, do it without re-arguing.
- **Decide and keep going.** The owner does not want to be asked about
  routine calls. Decide, keep it simple, and stop only for owner gates
  (admit, accept, spend, merge, deploy, design direction).

## Commands

Windows checkout. Every `uv` command needs the Python install dir:

```bash
export UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python
```

```bash
uv run weaver web --port 8016 --fake      # UI work, no model calls
uv run weaver web --port 8016             # live (spends DeepSeek)
npm --prefix src/weaver/web/frontend run build
npx vitest run                            # frontend tests, repo root
uv run pytest -q                          # backend tests
uvx ruff check src tests                  # lint
weaver refresh                            # preview what the source has
weaver schedule status
node .weaver/tools/shoot.mjs http://127.0.0.1:8016 .weaver/visual   # screenshots
```

Screenshot flags: `OPEN_SETTINGS=1`, `OPEN_STAR=1`, `COLLAPSE_RAIL=1`,
`OPEN_NEW_MENU=1`, `SEND_MESSAGE="..."`.

**Floors at close of 033.6:** backend 934 passed, 4 skipped; frontend 185
tests, `tsc` and the build pass. A plan may raise these, never lower them.

The server is **not running** now (the app stopped it at the end of the
session). Start it as above when needed, and stop it before any harness that
opens the index.

## How evaluation works

- **Reader Experience Trials** (the product gate, twelve, defined in
  `AGENTS.md` and
  `deliverables/030-weaver-v2-qualification-and-rollout/reader-experience-trials.md`).
  Harness: `.weaver/evaluation/plan030/run_v2_trials.py`. Run one trial per
  process with `--only <name> --out <label>`, server stopped. Transcripts are
  private, under `.weaver/evaluation/plan030/experience/transcripts/`. The
  evaluator reads each transcript in full, judges both axes (conversation and
  storytelling), checks every quote against its cited chapter, and records
  only verdicts and notes in the deliverable. Cost is about $0.45 for all
  twelve.
- **Check set** (the Plan 033 retrieval regression, six questions times
  three runs): `scripts/retrieval_verdict.py --arm A --run N --only r15 r35
  n18 t1 t2 t3`, judged blind with `.weaver/evaluation/plan033/q032/judge_prep.py`
  and `judge.py` (pick a fresh `PREFIX` and `SEED` each time), gated by
  `deliverables/033-every-turn-answers/tools/check_summary.py`. At 033.6:
  correct 4 of 9 on the trial answers (gate wants 6 of 9; it failed before
  033.6 too), another scene presented 0 of 9. About $0.12.
- **Live-run hygiene.** Keep the PC awake for the whole run. Windows Modern
  Standby suspended the 033.6 run (System log, Kernel-Power events 506 and
  507); every overrun and both harness retries lined up with a sleep or wake.
  Disable sleep on AC, or hold a wake lock, before starting. Record the build
  hash, the start and end time, and the spend.

## Known gaps (not yet owned by a plan unless noted)

- **Check set gate** 4 of 9 against 6 of 9 (power and what-if answers thin
  on kit details, one "nobody unmasked him" error). Watch it in 033.7; own it
  in 034 if it does not move.
- **Close-spelling hint** for exact search (a reader misspells a name and
  exact search finds nothing). Needs a name index; belongs with 034's lookup
  tool.
- **Last-resort trims leave fragments** (a cut block quote, list items cut
  to fragments). 033.7 logs which trim published; fix follows the evidence.
- **Mobile Settings**: the threads sheet text shows through the Settings
  panel on mobile. Settings hides the chat with `visibility: hidden`; a
  redesigned panel should be truly opaque and drop that rule. (037 or 040.)
- **Rail row titles truncate early** (84px reserved for hover actions); a
  `...` row menu would be cleaner. (037 or 040.)
- **Dead legacy CSS**: about 100 rules in `styles/app.css` served deleted
  components. Prune selector by selector with screenshots. (037.)
- **Desktop rail** is verified by screenshots, not unit tests.
- **Sponsored access** limits from Plan 028 (three questions a day, $1
  global ceiling, $10 wallet) are built but have not run in public. (039.)
- **Usage and spend for readers with their own key**: deferred until usage
  is captured per device.
- **Live spend** to date is about $11 against the owner's budgets, not
  reconciled to the cent; each plan carries its own cap.

## Lessons worth keeping

- **Sleep defeats timers.** In-process deadlines cannot survive the PC
  sleeping. Keep the machine awake for live runs.
- **CRLF.** Some working copies on this checkout had CRLF line endings and a
  commit flipped whole files. Keep LF; check `git diff --stat` for whole-file
  churn before committing.
- **Shell escapes.** Git Bash heredocs turned `\b` into a backspace and
  `\n` into a real newline inside Python regexes. Write files with a file
  tool, not a heredoc, when they contain backslashes, then grep for `\x08`.
- **Tests send what the real client sends** (a test that always added
  `Origin` hid a broken `GET` for weeks). Keep stubs on the real signature.
- **Baselines from git**, never by stashing the owner's work (`core.filemode`
  breaks stash pop here, and `uv run` can rewrite `uv.lock`).
- **Narrow markers.** A bare "one more" marker re-routed an adversarial
  "fine, one more test."; a word list for "unresolved" fired on a theory.
  Heuristics on reader text need negative tests drawn from real transcripts.
- **Diagnose first.** 033.6 found that all three gap answers came from one
  cause (earlier reads not credited). Read the failing transcripts and the
  run records before writing a fix.
