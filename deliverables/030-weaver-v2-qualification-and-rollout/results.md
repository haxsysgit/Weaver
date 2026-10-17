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

### Cost and allowance

- Owner decision 2026-10-17: keep three questions per reader per UTC day, the
  `$1` global daily ceiling, and the `$10` wallet.
- CP3 live spend: `$0.503755` of `$5.00`.
  - sponsored: `$0.008077` + `$0.011451` + `$0.014149` + `$0.017531` +
    `$0.026748` = `$0.077956`;
  - held-out: `$0.199925` + `$0.225874` = `$0.425799`.
- Complete sponsored turn: `$0.009` to `$0.014`; the clean-turn average is
  `$0.008916`.
- The three-question reader limit is the binding constraint. The `$1` global
  ceiling supports about 23 to 37 readers per day at the measured cost. The
  `$0.37` reservation is conservative.
- The production price default is still stale. A fresh price version and
  valid-until remain a CP7 preflight item.

## DeepSeek qualification

The held-out rerun is complete. Eight of ten turns completed. `version-01`
and `correction-01` failed closed; `version-02` and `boundary-01` returned the
safe spoiler boundary. The version-comparison and correction quality defect is
carried to CP4. Full versioned qualification and the production execution
profile remain CP6.

## Capacity and allowance

Measured complete sponsored turn: `$0.009` to `$0.014`. The three-question
reader limit is the binding constraint; the `$1` global ceiling supports about
23 to 37 readers per day at the high end. The owner confirmed the three
questions, `$1` global ceiling, and `$10` wallet on 2026-10-17.

## Release candidate

Pending version, migration, backup, restore, bundle, image, load, device,
privacy, security, and rollback evidence.

## Foundational Reader Trials

Pending the owner's separate fresh-session accept or reject record for canon
reconstruction, time-aware comparison, and canon-grounded what-if, including
their follow-up conversations.

## v2.0.0 rollout

Pending tag, exact artifact, deployment, public health, safe launch metrics,
incidents, rollback status, and measured plan budget.
