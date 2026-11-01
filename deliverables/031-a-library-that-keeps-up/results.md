# Plan 031 Results

## Slice 2: catch-up (2026-11-01)

### First run: the source had moved

`weaver refresh --apply` at 14:45 UTC stopped at chapter 3161 with
`validation / final_url_mismatch` and saved nothing. A header-only check
(no page bodies) showed that every novelfire.net chapter URL, old and new,
answered `302` to `readnovel.site`. That site serves a 2,334-byte
"Loading..." page whose script forwards the browser to `novelphoenix.com`.
The validator refused the redirect, as Plan 002 intends.

### Parity proof for the new host (read-only, nothing written)

The shelf's own extractor (`clean_fetched_page`, unchanged selectors) ran
in memory on the new host's pages, comparing hashes only:

| Chapter | Result |
|---|---|
| 3158 | byte-identical to the shelf file (8,945 bytes) |
| 3160 | byte-identical to the shelf file (13,287 bytes) |
| 3150 | differs by one line *on the shelf*: an ad blocker's notice, "This page has been blocked by an extension", left by an earlier scrape; the new host's copy is clean |
| 3232 | extracts and validates (10,220 bytes, 73 paragraphs) |
| 3233 | the host answers 200 with a page titled "Page Chapter Not Found" |

Decision (executor, under the owner's 2026-11-01 instruction to run every
slice without waiting): switch the source to `novelphoenix.com`. See the
amendment in `learning.md`.

### Code change, test-first

`tests/test_corpus_source_move.py`: 4 red, then green.

- **Address:** `ShadowSlaveSpec` fetches from
  `https://novelphoenix.com/novel/shadow-slave/chapter-{chapter}`.
- **Ledger:** the old address is kept in `legacy_url_templates`, so the
  ledger's 3,160 old lines stay byte-identical and still parse.
- **End of the source:** the "Page Chapter Not Found" page raises
  `NOT_FOUND / missing_chapter_page`. Probing stops on it exactly as it
  did on a 404.
- **Debris:** known scrape lines are dropped on fetch (`debris_lines`).
- **Referer:** the direct fetcher's Referer follows the spec's domain.

### Second run

- **Run:** 14:49:58 to 14:53:42 UTC (3 min 44 s). Saved 72, replaced 0,
  skipped 0. Stopped at 3233 (`first_404`, the missing-chapter page).
- **Gap check:** no missing chapter file from 1 to 3232.
- **Untouched:** no file for chapters 1 to 3160 was modified during the
  run (mtime check).
- **Validation:** all 72 new chapters pass `validate_local_bytes`. Sizes
  run 6,013 to 17,858 bytes (median 10,220), 759,007 bytes in total.
- **URL ledger:** last chapter 3232, 3,232 valid URLs, no gaps, no
  duplicates, no malformed lines.
- **Receipt:** `metadata_only: true`, with per-action metadata fields and
  no chapter text.
