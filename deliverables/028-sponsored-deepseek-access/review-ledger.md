# Plan 028 Review Ledger

## Status

Complete 2026-10-02. Both independent reviews returned findings. Every P1 and
P2 finding was repaired and rechecked before the final floor.

## Review one: financial safety, privacy, and concurrency

Result: pass after repair.

- **P1, restart accounting:** a quick process restart could leave a
  provider-started row active until the stale timeout. Startup recovery now
  marks every `started` row uncertain immediately; only pre-provider reserved
  rows use the stale cutoff. A +10 second restart test proves the charge is
  retained.
- **P1, committed bundle:** the first review saw an older `dist/`. The root
  build refreshed the shipped bundle after all source repairs.
- **P2, call envelope:** the original call counter could permit eight
  answer-sized calls. A sponsored turn now permits at most seven tool-capable
  search calls and one answer call. A focused rejection test covers a second
  answer attempt.
- **P2, pass transport:** the signed anonymous pass now carries `Secure` as
  well as HttpOnly and SameSite=Strict. HTTPS web tests assert the cookie.
- **P2, BYOK retention:** browser-key clients were cached by raw key for the
  process lifetime. Reader clients are now created per model call and closed
  on success or failure; the server client remains reusable. Tests prove the
  boundary.

## Review two: reader experience, failure truth, and shutdown

Result: pass after repair.

- **P1, access truth:** the UI could imply shared capacity before consent and
  could leave the composer usable when the sponsor was disabled, out of
  balance, or globally full. `/api/access` now reports global availability;
  the UI distinguishes consent-required, available, exhausted, unavailable,
  BYOK, and development fake-mode states and blocks only the unusable live
  paths.
- **P1, failure truth:** `network_busy` blamed DeepSeek although Weaver's own
  coarse network bucket rejected the request. The copy now identifies the
  local shared-thread pressure without blaming the provider.
- **P1, stale floor expectations:** receipt model ids and privacy-copy tests
  still expected retired text. Expectations now match the accepted
  `deepseek-flash` contract and privacy disclosure.
- **P2, frontend timing:** the complete isolated UI suite exceeded Vitest's
  five-second default under normal machine load while individual files passed.
  The existing suite timeout is now ten seconds; production behavior is
  unchanged.

## Repair and recheck ledger

All findings above are closed.

- `uv run ruff check src/weaver tests`: passed.
- Focused Python recheck: 126 passed.
- Focused app-flow recheck: 35 passed.
- `npm test`: 21 files and 131 tests passed.
- `uv run pytest -q`: 573 passed.
- `npm run build`: passed and refreshed the committed bundle.

No review requested a scope expansion, additional provider, automatic top-up,
or a second live proof. No such work was added.
