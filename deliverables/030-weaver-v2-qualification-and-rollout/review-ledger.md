# Plan 030 Review Ledger

## Status

Closed 2026-11-01. No separate independent reviewer ran. The findings below
come from the evaluator trial runs and the automated checks of 2026-10-29 to
2026-11-01, each with its repair and recheck. The two planned reviews below
were not run; their scope moves to Plans 039 and 040.

## Findings, repairs, and rechecks (2026-10-29 to 2026-11-01)

| Finding | Evidence | Repair | Recheck |
| --- | --- | --- | --- |
| Follow-ups ("prove it", "huh") routed as small talk | Live Trials 8 and 10 | Conversation-aware routing (`e103a1a`, `e058a68`) | Trials 8, 10 pass |
| Weaver withdrew true quotes a turn later | Trial 10, verified against ch. 116 | Earlier claims stand unless a passage contradicts them (`e058a68`) | Trial 10 pass |
| Invented canon detail from memory, unchecked on a search-only turn | Trial 10 | Exact-text and memory-citation checks (`a751cff`) | Trial 10 pass |
| Weaver corrected drafts the reader never saw | Trial 10 | Draft moved to private instructions (`a751cff`) | Trial 10 pass |
| Long passage dropped whole from a small packet, failing as "unsafe response" | Trial 10 confirm run | Shorten to fit (`a751cff`) | Unit test, Trial 10 |
| Preferences read always failed in a real browser (Origin header) | Browser check | Hostname check for reads (`5ce8ff2`) | Browser and tests |
| Fanfic follow-ups failed the new quote check | v2 Trial 11 | Fanfic continuations are prose (`136ba1a`) | Trial 11 pass |
| Ranking dropped, false attributions owned, "no changes" changed | v2 Trial 9 | Challenge routing and `<your_own_words>` (`136ba1a`) | Trial 9 pass with slips |
| Stripped citations left "is." and "(, 593)" | v2 Trials 6 and 8 | Dangling-clause cleanup (`136ba1a`) | Unit tests |

## Review one: intelligence, trial validity, and privacy

Pending. Check DeepSeek qualification, complete denominator, Reader Trial
validity, retrieval evidence, credentials, and private boundaries.

## Review two: cost, concurrency, release, and reader experience

Pending. Check allowance accounting, hard ceilings, parallel reservations,
exact artifact, CI/CD, backup, restore, migration, rollback, devices, PWA
update, reader states, public health, and documentation.

## Repair and recheck ledger

Pending. Each finding records severity, evidence, owner disposition, repair,
verification command, reviewer recheck, and deployed-artifact match.
