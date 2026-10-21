# Plan 030 Results

## Status

Checkpoint 1 in progress. Plan 030 admitted 2026-10-17. Plans 028 and 029 are
closed. The 2026-10-17 read-only audit is recorded in
[`draft-audit.md`](draft-audit.md); it is not qualification evidence and does
not replace this results file.

## Checkpoint 1: admission and live baseline

- Admission: owner admitted Plan 030 on 2026-10-17.
- Release branch: `plan-030`, created from `main` at `1d32797`.
- `main` is 20 commits ahead of `origin/main`. No push was made.
- Deterministic floor on the frozen source: 628 backend tests, 132 frontend
  tests, Ruff, `tsc --noEmit`, and `weaver doctor` all pass.
- Read-only audit: [`draft-audit.md`](draft-audit.md).
- Takedown 2026-10-17: instance `weaver-v1` stopped, its 20 GB data volume
  preserved, the Tailscale Funnel URL no longer answers, and the old GitHub
  Actions deploy workflow disabled. The instance was not terminated.
- Public surface: retired v1.2.1. The Cloudflare launch is CP7 inside Plan
  030, set up with the owner.

| Item | Frozen value |
| --- | --- |
| Source commit | `1d32797` (frozen baseline) |
| Package version | `2.0.0` (bumped 2026-10-17) |
| Branch | `plan-030` |
| Model | `deepseek-flash` (DeepSeek V4.1 Flash alias) |
| Price version | `deepseek-flash-2026-09-10-peak` |
| Price valid until | `2026-10-10T00:00:00+00:00` (expired, must refresh) |
| Prompt resources | `src/weaver/prompts/identity.md`, `src/weaver/prompts/soul.md` |
| Local library | chapters 1 to 3160 |
| Local retrieval index | chapters 1 to 3127 (Plan 018.5 scope cut) |
| Conversation schema | version 3 |
| Frontend assets | `weaver--NzoW5Us.js`, `weaver-BOySgbSR.css` |
| CP2 frontend assets | `weaver-BSzUiTtF.js`, `weaver-BOySgbSR.css` |
| CP4 frontend assets | `weaver-DB3Z825A.js`, `weaver-BiTfvfXz.css` |
| Retired live deployment | v1.2.1, `weaver-D01JqGeM.js`, `weaver-BfjopLb8.css`, `/api/access` 404, stopped 2026-10-17 |
| Current host bundle | on the stopped `weaver-v1` volume, export pending |
| Public surface | Cloudflare launch in CP7 |
| Live provider spend | none in this checkpoint |

Owner decisions at the checkpoint 1 gate:

1. Resolved 2026-10-17: 7 checkpoints.
2. Resolved 2026-10-17: honest rite plus BYOK. Fake mode skips sponsored
   consent; local live without a sponsored ledger routes the reader to BYOK.
3. Resolved 2026-10-17: take the public v1.2.1 site down completely and retire
   the EC2 and Tailscale Funnel path. Done: instance stopped, data volume
   preserved, deploy workflow disabled.
4. Resolved 2026-10-17: the Cloudflare launch is CP7 inside Plan 030. The
   service shape is decided and proven in CP7 with the owner.

## Checkpoint 2: first-run access and held-out set

Status: evidence complete; owner gate pending.

### Implementation

The adopted honest-rite-plus-BYOK path is implemented.

- `FirstNightmareSetup` now receives `sharedStatus` and `voiceBound`.
- Fake mode shows "Continue in fake mode", skips sponsored consent, and goes
  to the appraisal.
- Local live without a sponsored ledger shows "No shared allowance is
  configured on this server", offers no shared-allowance button, and routes
  the reader to BYOK or Enter later.
- An exhausted reader or a closed shared allowance is explained honestly and
  routes to BYOK.
- A reader with a bound key can continue with that key without being sent to
  Settings.
- An access-status failure with no bound key is treated as unavailable, so the
  composer cannot submit into a 503. An API without `getAccess` keeps the
  legacy send path instead of being blocked.
- The typed draft is preserved and only submission is disabled.

### Browser proof

Headless Chrome against the built frontend, 2026-10-17. No live model call.

| Path | Result |
| --- | --- |
| Fake mode | "Fake mode is active", no shared button, appraisal reached, rite completed, send enabled, fake turn returned 2 messages, 0 consent calls |
| Local live without a sponsored ledger | "No shared allowance is configured", no shared button, "Use my own key" opened Settings Advanced, 0 consent calls |
| Local live with a bound key | "Continue with your own key", appraisal reached, 0 consent calls |

### Verification

- `628` backend tests passed.
- `141` frontend tests passed, including 9 new first-run and access regressions.
- Ruff passed.
- `tsc --noEmit` passed.
- The production build passed and is committed in `src/weaver/web/dist/`.
- Final build assets: `weaver-BSzUiTtF.js`, `weaver-BOySgbSR.css`.

### Held-out set

Eight private cases across five capabilities: alias resolution, character
version, timeline boundary, ambiguous referent, and correction.

- Stored at `.weaver/evaluation/plan030/heldout.json` and not committed.
- The manifest stores questions and required behaviors only. It contains no
  expected answers, no novel prose, and no model reasoning.
- Shape validated on 2026-10-17: 8 unique IDs, 5 capabilities, no answer
  fields, no null turn lists.
- Live execution is queued for CP3 under the $5 provider cap. The cases are
  not copied into prompts, retrieval rules, fixtures, or product copy.

## Sponsored preflight and allowance (CP3)

Status: preflight passed after a bounded answer-path fix. The owner confirmed
the allowance on 2026-10-17. The held-out boundary cases were redesigned and
the rerun is recorded below.

### Answer-path fix

The first real sponsored turn failed closed with `answer_call_limit`. The
accepted Plan 029 answer path uses a draft answer, a final reading pass, and
one bounded repair, so the sponsored turn must allow three tool-less calls.

- `SponsoredTurn.MAX_ANSWER_CALLS = 3`; total `MAX_CALLS = 8` is unchanged.
- Tests: three answer calls allowed, a fourth refused, the eight-call total
  still enforced. Commit `9860c96`.
- The `$0.37` reservation covers three `12,288`-token answer calls.

### Preflight

- Provider balance: `$9.32` on 2026-10-17.
- Local sponsored server: enabled, consent accepted, 64-hex pass secret,
  explicit future price valid-until for the test.
- First attempt, one answer call: failed closed, `$0.008077`.
- Second attempt, two answer calls: failed closed, `$0.011451`.
- Third attempt, three answer calls: completed, `2,390` characters, `9`
  citations, `41.0` seconds, `$0.014149`.
- Clean allowance run: three questions completed (`986`, `2,737`, `2,159`
  characters; `36.4`s, `27.4`s, `24.1`s), remaining `2`, `1`, `0`, fourth
  POST `429 reader_exhausted`, cost `$0.026748`.
- No private answer, prompt excerpt, or passage is recorded here.

### Held-out live run

- Eight private cases, nine turns through the server-key metered path.
- Cost `$0.199925`; 90 provider calls.
- Seven turns completed. `version-01` failed closed after `94.3` seconds with
  `model_failed` and "The model returned an unsafe response."
- `timeline-02` (reader chapter 900) and `correction-01` (reader chapter 700)
  completed as the fixed safe spoiler boundary message.
- `referent-01` turn 1 completed in `3,017` characters after a `2,383`
  character first turn.
- Durations: median about `67.7` seconds, p95 about `94.3` seconds, maximum
  `94.3` seconds.
- Private answers: `.weaver/evaluation/plan030/cp3/heldout/answers.json`.
  They are not in this record.

The original run's `version-01` safe failure is a quality risk for the Reader
Trials. The two boundary answers are correct spoiler behavior but do not
answer the case.

### Held-out rerun (redesigned boundary cases)

- The owner selected the redesign option on 2026-10-17.
- `timeline-02` and `correction-01` moved to reader chapter 3160.
- A new `boundary-01` case at reader chapter 900 expects the safe boundary as
  the correct result.
- Nine cases, ten turns, `$0.225874`, 98 provider calls.
- Eight turns completed. `version-01` and `correction-01` failed closed with
  `unsupported_chapter`, `long_quote`, and `changed_quote`.
- `version-02` returned the safe boundary although its question was inside the
  reader boundary. `boundary-01` returned the safe boundary as expected.
- `timeline-02` completed with `4,928` characters and `18` citations.
- `referent-01` turn 1 was `2,836` characters after a `2,470` character first
  turn.
- Private answers: `.weaver/evaluation/plan030/cp3/heldout2/answers.json`.

The rerun confirms a bounded answer-quality defect on version-comparison and
correction answers: unsupported chapters and long or changed quotations
survive the single repair. This is not an allowance or sponsored-path defect.
The proposed CP4 repair is a sharper repair instruction per finding code, with
a held-out rerun before CP5.

### Held-out no-quote repair rerun

- The owner approved a sharper repair instruction, then a no-quote repair on
  quote findings. The repaired answer paraphrases instead of quoting.
- Nine cases, ten turns, `$0.247081`, 101 provider calls.
- Eight turns completed. `correction-01` and `alias-01` now completed.
- `version-02` (time-aware comparison) and `timeline-01` (timeline boundary)
  failed closed with unsupported chapters and long or changed quotations.
- `boundary-01` returned the safe boundary as expected.
- `referent-01` turn 1 was `2,869` characters after a `3,809` character first
  turn, so the follow-up is shorter than the first answer.
- Private answers: `.weaver/evaluation/plan030/cp3/heldout4/answers.json`.

The remaining failures move between runs, which points to stochastic model
compliance rather than one deterministic defect. Further tuning against this
diagnostic risks overfitting it. The Reader Trials remain the real acceptance
gate.

### Cost and allowance

- Owner decision 2026-10-17: keep three questions per reader per UTC day, the
  `$1` global daily ceiling, and the `$10` wallet.
- CP3 and CP4 quality live spend: `$0.990386` of `$5.00`.
  - sponsored: `$0.008077` + `$0.011451` + `$0.014149` + `$0.017531` +
    `$0.026748` = `$0.077956`;
  - held-out: `$0.199925` + `$0.225874` + `$0.239550` + `$0.247081` =
    `$0.912430`.
- Complete sponsored turn: `$0.009` to `$0.014`; the clean-turn average is
  `$0.008916`.
- The three-question reader limit is the binding constraint. The `$1` global
  ceiling supports about 23 to 37 readers per day at the measured cost. The
  `$0.37` reservation is conservative.
- The production price default is still stale. A fresh price version and
  valid-until remain a CP7 preflight item.

## Checkpoint 4: reader, operations, privacy, docs

### Verification floor

- 631 backend tests passed.
- 141 frontend tests passed.
- Ruff, `tsc --noEmit`, and the production build passed.
- Final CP4 assets: `weaver-DB3Z825A.js`, `weaver-BiTfvfXz.css`.

### Reader and operations

- Mobile 390x844: first run, touch send, no horizontal overflow, and a 24px
  privacy link target.
- Offline send: the recovery panel reported "The answering thread lost
  contact."
- The service worker registered and the manifest is present. Installed-PWA
  and real HTTPS checks wait for CP7.
- Focus, labels, and recovery are covered by the frontend suite. Screen
  reader and real-device checks wait for CP7.
- Monitoring, restart, emergency shutdown, and the Cloudflare host checks are
  CP7.

### Privacy and docs

- `/privacy` and `/robots.txt` are served; the footer links to `/privacy`.
- The live footer names the passage transfer to DeepSeek; fake mode stays
  local.
- `README.md`, `CONTRIBUTING.md`, `docs/architecture.md`, `docs/vision.md`,
  `TODO_future.md`, `docs/WEAVER_WEB_PRODUCT_DIRECTION.md`, `.env.example`, and
  `docker-compose.yml` were updated.
- The privacy page and README copy were approved by the owner on 2026-10-17.

### Quality

- The latest held-out run completed 8 of 10 turns for `$0.247081`.
  `version-02` and `timeline-01` failed closed; `boundary-01` returned the safe
  boundary.
- Cumulative CP3 and CP4 quality live spend: `$0.990386` of `$5.00`.
- The failures move between runs. Further tuning against the held-out
  diagnostic risks overfitting; the Reader Trials remain the real gate.

## CP4.5 experience rebuild

- The owner rejected Trial 1 and Trial 2 on voice, structure, and speed and
  approved an amendment inside Plan 030.
- Voice: voice packs live under `prompts/voices/`. `buddy` is the default
  chat register; `storyteller` preserves the literary voice for prose and fan
  fiction and adds a novel-quality storytelling instruction. `WEAVER_VOICE`
  selects the pack at startup. The witness/essay voice is out of chat.
- Voice: the final reading pass may not open with "same answer as before".
- Speed: the web turn now uses an intent profile. Quick turns get 4 tool steps
  and no thinking; discussion gets 8 steps; deep and vs get 12. Packet caps are
  8k, 16k, and 24k. The BYOK model title call is removed and the title is
  derived locally. Quick turns skip the final reading pass when the first
  answer already passes the publication checks; deep and vs keep it.
- VS: a versus response mode adds versions and conditions, both kits, win
  conditions, a labeled fight read, a verdict, confidence, and what flips it.
  `what if` matchups route to versus, and `compare` questions use the same
  deep profile.
- Rail: the clear-night rail is transparent, the star web crosses it, the
  active thread is a gold line rather than a card, and the mobile rail is a
  translucent blurred edge sheet.
- The first speed run was invalid because two web processes shared the Qdrant
  index. The evidence is preserved. The rerun used one process.

### Measured speed

| Shape | p50 | max | Owner target |
| --- | --- | --- | --- |
| Quick | 14.1s | 22.8s | p50 15s, p95 25s |
| Discussion | 18.5s | 26.8s | between quick and deep |
| Deep or vs | 49.8s | 58.6s | p95 60s |

- Quick completed at 6.2s, 14.1s, and 22.8s. The 6.2s turn was clean on the
  first answer; the slower quick turns spent the time on publication findings
  and the final pass.
- The vs turn completed in 58.6s with 2,801 characters and 7 citations. The
  meta opening is gone.
- The comparison turn completed in 41.0s with 2,318 characters and 6
  citations.
- The hybrid improved the deep p50 from 83.5s to 49.8s and the deep max from
  109.3s to 58.6s. The owner revised the target to quick p50 15s/p95 25s and
  deep p95 60s on 2026-10-17; the measured turns are inside it.
- The remaining quick cost is publication repair after a quoted or uncited
  first answer. The remaining deep cost is the two-character evidence loop and
  the kept final pass.
- Test isolation: the full web suite hung because the one-line gated,
  cancel-aware, failing, and slow send stubs did not accept the new
  `final_pass` argument. The concurrent-turn test waited forever for a send
  that had already failed. The stubs accept it now. The focus test also waits
  for the drawer to open before Escape so the full frontend suite is stable.

### Gate

CP4.5 is accepted on 2026-10-17. The owner approved the revised speed target,
the two voice packs selected by config, the vs shape, the clear-night rail,
and the test isolation fix. The floor is 640 backend tests, 141 frontend
tests, Ruff, `tsc`, and the production build. CP5 re-trials are next.

## DeepSeek qualification

The held-out diagnostic is complete through two repair iterations. The latest
run completed eight of ten turns. `version-02` and `timeline-01` failed closed;
`boundary-01` returned the safe boundary; `correction-01` and `alias-01` were
fixed. The remaining failures move between runs, so the diagnostic now shows
stochastic model compliance rather than one deterministic defect. The Reader
Trials remain the real acceptance gate. Full versioned qualification and the
production execution profile remain CP6.

## Capacity and allowance

Measured complete sponsored turn: `$0.009` to `$0.014`. The three-question
reader limit is the binding constraint; the `$1` global ceiling supports about
23 to 37 readers per day at the high end. The owner confirmed the three
questions, `$1` global ceiling, and `$10` wallet on 2026-10-17.

## Release candidate

Pending version, migration, backup, restore, bundle, image, load, device,
privacy, security, and rollback evidence.

## Reader Experience Trials

The owner rejected the three Founder Trials as the final gate on 2026-10-20.
They test retrieval. They do not test whether a reader enjoys the conversation
or whether Weaver can retell, explain, and visualise the novel. The final gate
is now the twelve Reader Experience Trials in
[`reader-experience-trials.md`](reader-experience-trials.md). All twelve must
pass on the conversation and storytelling axes. The old three are retrieval
regression only. CP5 is paused for the owner's contract sign-off.

### Former gate: the three Founder Trials

CP5 paused on 2026-10-17. The owner ran Trial 1 and gave Trial 2 feedback.

#### Trial 1: canon reconstruction

- Not accepted. The owner rejected the tone and response structure: Weaver
  reads as a chatbot and an essay, not a chat buddy. The owner wants an
  interactive, gen-z/reddit register, shorter and less formal.
- The reading and evidence result was not separately accepted.

#### Trial 2: time-aware comparison

- Not accepted. Same tone and structure problem, plus speed. The owner
  reported slow answers and asked for a full pipeline review.
- The private run metadata shows 137.7s and 149.5s turns in the two trial
  conversations. No answers are recorded here.
- Trial 3 was not run.

The owner signed off the twelve-trial contract on 2026-10-20. The evaluator
runs the suite through the API, improves the product, and re-runs. The owner
gives the final acceptance. No Reader Experience Trial is accepted yet.

### Evaluator run 1 (2026-10-20)

- Nine of twelve trials reached. The adversarial trial hung on a versus turn;
  the confusing and fanfic trials did not run.
- 49 turns, 22 failed closed (45%).
- Passed: vibe 5/5, emotional favourite 5/5, low-effort 5/5.
- Failed: first-timer 4/5, hot-take 3/5, vague 3/5, half-memory 2/5, theory
  1/5, long thread 9/9.
- Failure classes: `long_quote`, `missing_direct_evidence`,
  `unsupported_chapter`. The product's publication checks ended normal
  conversation turns.
- The buddy voice lands in the clean turns ("nah, hard disagree", "lol the
  wiki open and close"). The answers are still long, and the first turn
  interviews the reader about their reading position.
- Fixes in the same slice: a quote-strip safety net so a long quote cannot
  kill a turn; a read-every-turn and cite-only-opened rule; a 120-word guide
  for direct recall and discussion; a short voice example; the concurrent-turn
  test stubs now accept the evaluator protocol.
- Private transcripts:
  `.weaver/evaluation/plan030/experience/transcripts/run1/`.
- Verdict: the evaluator is not satisfied. The first pass fails the reader
  gate. A re-run is next; this run is evidence, not an acceptance.

### Evaluator run 2 (2026-10-20)

- 11 of the 12 trials ran; 59 of 60 turns completed. The only failed turn was
  the last first-timer spoiler turn, and the protect-mode safe boundary now
  handles it.
- The long thread went from 9/9 failed to 9/9 completed. The hot take, vague,
  half-memory, theory, low-effort, adversarial, confusing, emotional, and vibe
  trials were clean.
- The fanfic trial still fails: three of five storyteller turns completed with
  an empty answer. The empty final-answer guard is in; the empty candidate and
  persistence path still need the same guard, then the trial re-runs.
- Fixes in run 2: quote stripping, read-every-turn and cite-only-opened rules,
  a 120-word guide for direct recall and discussion, a short voice example, the
  protect-mode safe boundary, and empty final-answer rejection.
- The evaluator is not satisfied yet. The fanfic empty-answer bug is the
  blocker; the first-timer re-run and the judge come after it.

### Re-run blockers (2026-10-20)

- First-timer re-run: turn 0 returned the 187-character safe boundary, turn 1
  failed, and turns 2 to 4 returned `interrupted` immediately. The conversation
  does not recover after a failed turn.
- Fanfic re-run: the empty final and empty persist guards are in, but three of
  five storyteller turns still complete empty. The empty candidate and forced
  answer paths are the blocker.
- The evaluator is not satisfied. The twelve-trial gate is not passed. The next
  fixes are the empty candidate and forced-answer rejection, the post-failure
  conversation recovery, then the fanfic and first-timer re-runs and the judge.

Trial 12 is the retelling and visualisation trial the owner asked for.

### Evaluator run 7 (2026-10-21): the acceptance pass

The twelve trials ran again on the full-bleed build with the real reader
prompts. 65 turns, fresh conversations. One turn failed: theory/4 answered
from notebook leads with no page of prose, and the forced final pass could not
repair it. The packet builder now treats notebook-only evidence as no packet,
so the answer stands. Re-run: 5/5.

- vibe 5/5, hot take 5/5 (pre-FS Sunny), half memory 5/5, first timer 5/5,
  theory 5/5, vague 5/5, emotional 5/5 (the Sunny I loved is dead), low effort
  5/5, long thread 9/9 (top-ten Supremes ranking), adversarial 5/5, confusing
  fight 6/6, fanfic spark 5/5.
- The safety trial is clean on the final build. The model refuses survival
  questions without a hint, never starts a refusal with a bare no, and the
  reading tools cannot open a chapter past the reader: the cap is enforced in
  the tool layer, not just in the prompt.
- The fresh-thread obligation removed the "same list as before" tell.
- The ranking skill carries the long thread: it commits to a top ten, defends
  slots, and answers "you put Mordret third? he lost to Sunny" with a real
  correction.

Verdict: 12 of 12 pass the evaluator. Owner acceptance is still the only
acceptance. The library ends at 3160 while the community is at 3215, so
current readers will hit the edge.


### Reader sample and the immersive shell (2026-10-21)

The owner asked for real reader data to improve Weaver. A bounded sample of
r/ShadowSlave (1,500 posts, the top threads' comments; raw rows deleted) gave
the community's actual activities: reactions, ships, rankings, character-change
arguments, lore compiles, and author criticism. The findings:

- The voice is lowercase, clipped, and meme fluent, but the strongest threads
  are evidence arguments. The buddy soul now carries that register: shorthand
  only when the reader uses it, one meme per answer, argue with receipts,
  allowed to call a popular take boring.
- The community ranks three or more constantly. A `ranking` skill now commits
  to a list, one line per slot, names the closest call, and invites the fight.
- Three trial prompts were replaced with real ones: the hot take ("pre-FS
  Sunny would hate current Sunny"), the emotional favourite ("the Sunny I
  loved is dead"), and the long thread (a top-ten Supremes ranking).
- The subreddit is on chapter 3215. The library ends at 3160. A current reader
  will ask about chapters Weaver does not have. This is a launch blocker for
  credibility.

The chat surface is now full-bleed. The permanent rail is gone. A `+` control
on the composer opens one floating sheet with threads, new weave, fanfic,
archive, reader status, and settings. The header controls are gone. The sheet
is modal with a focus trap, a backdrop, Escape, and it returns focus to the
`+`. 142 frontend tests and the production build pass.


### Evaluator run 5 (2026-10-20)

The skills build, the canon/fanfic split, and the validated-only streaming ran
the twelve trials again, 65 turns, fresh conversations. Six turns failed with
a silent empty answer. The run exposed four defects, all fixed and re-tested:

- The publication fallback broke on a stale `exit_reason is not None` guard,
  which turned any failed repair into a silent empty "completed" turn.
- DeepSeek sometimes labels a tool-call response as `stop`; the turn failed
  the reader instead of running the call.
- The spoiler boundary replaced every answer at `protect` mode, including good
  answers with a citation problem, with one canned refusal.
- Fanfic prose failed the no-em-dash chat rule, and canon-fit questions in a
  fanfic thread were routed back into prose.

Tournament after the fixes (each trial is a fresh conversation; a failed turn
fails the trial):

- 1 vibe: 5/5 completed, 168 to 310 characters, warm, short, asks back. Pass.
- 2 hot take: 5/5, argues with cited scenes, takes the "that's not proof"
  push. Pass.
- 3 half memory: 5/5, corrects the order and even its own chapter number,
  quotes the tomb line. Pass on both axes.
- 4 first timer: 3/5. Turns 1 and 4 (the yes-or-no spoiler probes) fail
  publication: a short answer at the reader's chapter 300 boundary carries no
  evidence and no refusal marker, so the turn fails. Open.
- 5 theory: 4/5. Turn 1 ("what evidence would prove me wrong?") fails with no
  accepted answer; the others engage and label canon, inference, invention.
  Open.
- 6 vague ask: 5/5, one thread at a time, chapter 1488, an invitation. Pass.
- 7 emotional favourite: 5/5, retells the Gateway goodbye with quotes and
  motive, does not lecture. Pass on both axes.
- 8 low effort: 5/5, verdict first ("sunny, high difficulty"), 270 words,
  answers "why", "huh", "prep", "tldr". Pass, length noted.
- 9 long thread: 9/9, holds its own ranking, catches the reader's misremember,
  callbacks land. Pass.
- 10 adversarial: 5/5, accepts the challenge, cites, admits being half wrong.
  Pass.
- 11 fanfic spark: 5/5, 3.5k to 5k characters per scene, labelled, canon
  anchored, keeps Sunny in character, and the fit question routes to
  worldbuilding instead of more prose. Pass on both axes.
- 12 confusing fight: 6/6, reconstructs the Spire fight, answers who won,
  paints the arena, labels the read. Pass on both axes.

### The two open trials, finished (2026-10-20)

- **Theory, 5/5.** The first attempt failed on a dry search whose answer had
  no direct passage. The retry affordance recovered it and the thread ended
  clean. The reader was told the truth when the model changed its own mind
  ("that weakens my origin argument more than yours"). Verdict: pass, with one
  recorded retry.
- **First timer, 5/5 with one weak turn.** The spoiler judge was missing from
  the trial harness, so the earlier first-timer runs never exercised the real
  guarded framing. With the judge wired, the trial refuses the death question
  and the survival probe, answers what it can inside ch. 300, and offers a
  path ("ask me anything else"). Turn 2, "anything to watch at 300", was
  replaced by the safe boundary even though the answer exists inside the
  package, so one refusal is useless. Verdict: safety passes, warmth is
  partial. Open on the conversation axis.

Verdict across the twelve: ten clean, theory passes with a recorded retry,
first timer completes but keeps one useless refusal. The evaluator does not
accept the suite yet.


### Skills, streaming, and domain fix (2026-10-20)

- **Skills (S1).** `src/weaver/skills/` now holds the catalogue: fourteen
  skills across canon (quick recall, plain restatement, scene explanation, arc
  summary, theory, versus, correction, discussion, company, discovery, how it
  works) and fanfic (continuation, missing scene, worldbuilding). The system
  prompt carries one line per skill; the model loads the body and examples
  with `load_skill`, and may load several related skills. Loading a bigger
  skill raises the reading budget mid-turn.
- **Router (S1).** Scope first, intent second. "Summarize the domain war" now
  routes to `arc_summary` with a twenty-call budget and a 600 to 1200 word
  shape, not to quick recall.
- **Streaming (S2).** The raw model preview is gone. The reader sees only the
  validated answer, published once after the reading pass and any repair. The
  duplicate-answer bug in the web stream test is gone.
- **Domain (S3).** Schema v4 stores `domain` and `fanfic_kind` per
  conversation. The thread prompt switches on the domain, the turn profile
  routes the fanfic skills, and writing requests are prose: labelled
  invention, no canon citation required inside the invented text.
- **Recovery.** A failed run is retryable and no longer blocks the next send.
- **Indicator (S4).** The gathering state is three wobbly golden stars joined
  by a flowing thread, replaced by the mode visual at the first streamed word.
- **Live fanfic evidence (S5).** One fanfic thread, two turns, real DeepSeek
  calls. Turn 1 (missing scene): 3,900 characters, opened as "Invented scene",
  cited the canon anchor, real characters and voice, exit completed. Turn 2
  (continuation): 4,152 characters, same version, consistent with the invented
  scene, exit completed. Private transcript:
  `.weaver/evaluation/plan030/transcripts/fanfic-trial/`.
- **Floor.** 686 backend tests and 141 frontend tests pass, Ruff clean, `tsc`
  clean, production build passes.
- **Still open.** The twelve Reader Experience Trials have not been judged
  since this build. The fanfic thread is API-only for now; the sidebar has no
  fanfic entry yet. The continuation ledger is the thread history, not a
  separate durable store; a long fanfic thread will need one.

## v2.0.0 rollout

Pending tag, exact artifact, deployment, public health, safe launch metrics,
incidents, rollback status, and measured plan budget.
