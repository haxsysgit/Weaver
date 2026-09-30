# Plan 028 Learning Note

## Gate status

**Admitted 2026-09-30 by owner direction.** The DeepSeek-only sponsored-access
contract is accepted for learning and implementation. Code changes and live
calls still wait for the owner learning gate below.

## Owner-confirmed direction

- Weaver stays DeepSeek-only for this product cycle.
- The owner funds a small shared daily allowance for normal readers.
- Optional direct DeepSeek BYOK remains under Advanced and uses the existing
  browser-local key boundary.
- The shared credential stays server-side and never enters reader-visible or
  persisted data.
- The controlled trial begins with three sponsored questions per reader per
  UTC day, one active sponsored turn, a $1 global daily ceiling, and a manually
  funded $10 wallet.
- Automatic top-up, silent fallback, and retries outside a reservation are
  forbidden.
- Reader copy says **shared daily allowance** and explains the reset and BYOK
  option honestly.
- Plan 028 builds access and financial safety. Plan 029 builds intelligence.
  Plan 030 measures usage, tunes the allowance with the owner, runs Reader
  Trials, and decides v2.0.0.

## Current official observations, 2026-09-23

- DeepSeek's Open Platform terms allow downstream applications for external
  end users and make the application operator responsible for privacy,
  security, user conduct, and AI-output disclosure.
- DeepSeek requires API keys to stay out of browser code and public disclosure.
- DeepSeek bills from prepaid or granted balance and may change prices.
- DeepSeek `user_id` supports opaque user isolation. It is not a spending cap.
- DeepSeek publishes account concurrency limits separately from application
  spending controls. Weaver therefore needs its own one-turn and global cost
  limits regardless of provider concurrency.

These observations must be refreshed from official sources before the owner
learning gate.

Official sources checked on 2026-09-23:

- [DeepSeek Open Platform Terms](https://cdn.deepseek.com/policies/en-US/deepseek-open-platform-terms-of-service.html)
- [DeepSeek models and pricing](https://api-docs.deepseek.com/quick_start/pricing/)
- [DeepSeek rate limits and user isolation](https://api-docs.deepseek.com/quick_start/rate_limit/)

## Hypotheses to prove

1. One atomic ledger can reserve both a reader question and maximum monetary
   exposure before provider work starts.
2. A signed anonymous pass plus a hard global ceiling gives a fan project
   enough protection without requiring reader accounts.
3. Current DeepSeek usage fields are sufficient to reconcile cached input,
   uncached input, reasoning, and output cost after every provider call.
4. A manually funded wallet plus the application ceiling gives two independent
   limits on owner spend.
5. The accepted immersive UI can explain allowance, reset, privacy, and AI
   output truth without becoming a billing dashboard.

## Questions for admitted research

1. Which exact DeepSeek model and API surface should sponsored and BYOK turns
   share?
2. What are the current prices, token fields, terms, retention rules, and
   documented balance signals on the admission date?
3. What maximum provider-call, context, tool-round, reasoning, and output
   ceilings preserve Weaver's answer quality within a calculable reservation?
4. How should stale reservations recover after interruption or process restart?
5. Which coarse network signal can slow obvious abuse without retaining raw IP
   addresses?
6. What exact privacy and AI-output copy fits the accepted product language?

## Owner learning gate

Before code changes or live DeepSeek calls, the owner confirms the refreshed
official evidence, exact model, maximum turn shape, ledger and signed-pass
design, retry accounting, privacy copy, and fixed live request count within the
$0.25 proof ceiling.
