# Plan 018.5 results

## Slice 2 - refresh stabilization (2026-08-15)

- Source retries: transient (timeout/provider/429) retried with backoff
  up to max_attempts=3; hard errors (auth/config/not-found/security)
  raise immediately (src/weaver/corpus/source.py).
- CLI reports `last known chapter: N-1` after a first-404 stop.
- Tests: 5 new (retry-then-succeed, give-up-after-max, no-retry-on-hard,
  probe-composes-with-retries, persistent-failure-keeps-saves-and-resumes).

## Slice 2.5 - direct HTTP source (2026-08-15)

- Firecrawl transiently redirected chapter 3152 to novelphoenix.com; the
  final_url_mismatch guard stopped the run (correct). Direct probing
  proved the site itself serves the real article to a browser UA, so the
  redirect was site-side bot detection, not a domain move.
- Built DirectHttpChapterSource: httpx (already a transitive dep) with a
  desktop-Chrome header set over HTTP/2, same retry contract, $0.
  CLI flag `--source direct|firecrawl`.
- LIVE PROOF (slice 4 work): `weaver refresh --apply --source direct`
  saved chapters 3152-3160 (9 chapters, all real prose) and stopped at
  3161 on the same conditional redirect the guard caught. Shelf now
  current to chapter 3160. No firecrawl credits spent.
- Direct is now the default source; firecrawl stays as fallback
  (owner-approved 2026-08-15: weaver self-served except the model).

## Slices 5-9 - not started
