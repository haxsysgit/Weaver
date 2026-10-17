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

| Item | Frozen value |
| --- | --- |
| Source commit | `1d32797` |
| Branch | `plan-030` |
| Model | `deepseek-flash` (DeepSeek V4.1 Flash alias) |
| Price version | `deepseek-flash-2026-09-10-peak` |
| Price valid until | `2026-10-10T00:00:00+00:00` (expired, must refresh) |
| Prompt resources | `src/weaver/prompts/identity.md`, `src/weaver/prompts/soul.md` |
| Local library | chapters 1 to 3160 |
| Local retrieval index | chapters 1 to 3127 (Plan 018.5 scope cut) |
| Conversation schema | version 3 |
| Frontend assets | `weaver--NzoW5Us.js`, `weaver-BOySgbSR.css` |
| Live deployment | v1.2.1, `weaver-D01JqGeM.js`, `weaver-BfjopLb8.css`, `/api/access` 404 |
| Box state bundle | unknown, must be recorded before deploy |
| Live provider spend | none in this checkpoint |

Owner decisions pending at the checkpoint 1 gate:

1. Checkpoint cadence: 7 or 5.
2. Local access path: loopback developer voice, honest rite to BYOK, or local
   sponsored ledger.
3. Live v1.2.1 exposure: leave public, restrict, or take down before the v2
   deploy.

## DeepSeek qualification

Pending versioned quality and operations evidence, full failure denominator,
owner qualification, and the exact production execution profile.

## Capacity and allowance

Pending complete-turn request, token, and dollar cost, concurrency, hard-budget
evidence, allowance options, and owner decision.

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
