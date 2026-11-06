# Draft: Plan 040, Weaver v3.0.0

Status: drafted 2026-11-06 in the handoff folder. Not admitted.
Depends on: Plan 039 closed (Weaver has a home on the web).

## Goal

Qualify and release Weaver v3.0.0: the final build passes all twelve Reader
Experience Trials, passes a performance and safety audit, is accepted by the
owner, and is tagged and deployed publicly.

## Why it matters

v3.0.0 is the next public release the owner set (2026-10-31). It is the
point where Weaver's mind (034), voice and memory (035), look (036, 037,
optionally 038) and home (039) come together for real readers.

## What we want to achieve

- **All twelve Reader Experience Trials pass on the final build**, run on
  staging, judged on both axes (conversation and storytelling), with every
  quote checked against its chapter. Then the owner runs as many as they
  want by hand.
- **The retrieval regression** (the three Foundational Reader Trials and the
  check set) does not get worse than its best recorded result.
- **A performance audit** at desktop and on the reference phones: time to
  first message, frame times, asset sizes, memory, against the 036 budget.
- **A safety audit**: spoiler boundary under pressure, per-device isolation
  of preferences, opinions and memory, prompt-injection attempts on memory
  writes, sponsored limits and the spend ceiling, secrets.
- **An accessibility pass**: keyboard use, screen reader labels, contrast in
  every theme, reduced motion.
- **Release notes** in plain words for readers.
- **Tag `v3.0.0` and deploy to production**, with the owner's go-ahead.

## What success looks like

- 12 of 12 Reader Trials on the evaluator record, and the owner's own
  acceptance after their hand runs.
- Audits recorded with measurements and screenshots; every blocker fixed or
  explicitly accepted by the owner.
- `plan-030` (or its successor) merged to `main`, tagged `v3.0.0`, deployed
  through staging to production, all with the owner's say-so.
- Weaver works for a reader on a phone at the public domain from the first
  message.
- Then the Checkpoint 031 to 040 runs before Plan 041.

## Constraints

- Only the owner accepts and only the owner says tag and deploy.
- The trial prompts never enter the product; the product never knows a trial
  is running.
- Spend under a cap agreed at admission.
