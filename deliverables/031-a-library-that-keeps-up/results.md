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

## Slice 3: one shelf edge (commit `0c86871`)

- **Edge:** `src/weaver/shelf.py` reads the last chapter file on disk
  (30 s cache). Fake mode or no shelf means no ceiling.
- **Server:** `GET /api/library` (local-host guarded) returns
  `{last_chapter, search_through, refresh}`. `PUT /api/preferences`
  refuses a boundary above the edge with a 422 that names it. Live check:
  `{"last_chapter": 3232, "search_through": 3127, ...}`; a foreign Host
  gets 403.
- **Volumes:** the last volume is open-ended (judge and frontend), so a
  chapter after 3127 lands in volume 13 instead of failing.
- **Prompt:** one line names the shelf edge and how far search reaches. The
  prompt is rebuilt only when the edge moves, so the provider's prompt
  cache stays warm between refreshes.
- **Search coverage, measured:** the semantic index holds distinct
  chapters 1 to 3127 (`.weaver/retrieval/coverage.json`, written by
  `scripts/build_library_index.py`). Chapters past that are reachable by
  direct reading and exact find, not by semantic search. Re-indexing is
  out of scope (Plans 032/033).
- **Frontend:** the slider max, "+10" clamp, chapter mention offer, and
  volume label all follow `/api/library`. No 3160 ceiling remains in `src`
  (`rg 3160 src`: four comments only).

## Slice 4: debris on read (commit `3ec8edd`)

- **Bounded read:** two scrape lines, matched case-insensitively as whole
  lines. The ad-blocker notice (chapters 3047 to 3151, sometimes in the
  middle of a chapter) and the "if you find any errors" footer (186
  chapters, 3047 to 3232; the new host still serves it).
- **Fix:** dropped at fetch time; blanked on read in
  `ChapterIndex._read_path`, which keeps every line number so citations
  do not move. Raw files are untouched (`novels/` is immutable).
- **Cost:** a whole-library search went from 0.55 s with the filter alone
  to 0.37 s with a cache keyed on path, mtime, and size (1.08 s cold).
- **Tests:** `tests/test_debris_filter.py`.

## Slices 5 and 6: weekly refresh and alerts (commit `8f7b9d7`)

- **Command:** `weaver refresh --scheduled` previews first and applies
  only when every action is an append (probe, save missing, keep valid,
  fetch). Anything else (a replace, a gap, a numbering change) is recorded
  as `needs_owner` and nothing is written. A lock stops two runs at once
  (stale after 2 hours).
- **Status record:** `.weaver/corpus/shadow-slave/library-status.json`
  (metadata only) plus a one-line-per-run `scheduled.log`.
- **Alerts:** a Windows notification on a failure (naming the moved
  address when that is the cause), on `needs_owner`, and when no new
  chapter has arrived for more than 9 days. Settings shows a note when the
  weekly check has not run for 8 days.
- **Schedule:** `weaver schedule install|remove|status` registers the
  Task Scheduler task "Weaver library refresh": every Saturday at 10:00
  local time, as the signed-in user (no admin), runs on the next start if
  the PC was off. Installed on this machine; next run Saturday 7 November
  2026 at 10:00.
- **Stubbed failures (floor item 6):** a failing fetch records `failed`,
  raises the alert, and leaves the shelf unchanged (tests in
  `tests/test_scheduled_refresh.py`, 8 tests; `test_schedule_windows.py`,
  3 tests). Screenshots of the failure note in `.weaver/visual/031/failure/`.
- **Real runs:** one from the CLI (`up_to_date`, 15 s) and one started by
  Task Scheduler itself (last result 0, log line written).
- **Settings:** a Library section after the spoiler boundary: "Chapters 1
  to 3232. Weaver looks for new ones every Saturday." plus the last check.
  Desktop and mobile screenshots in `.weaver/visual/031/` (private).

## Slice 7: close

### Live smoke turn (floor item 8)

One fresh device, no boundary, one question about chapter 3200, deepseek
flash, in-process. Completed in 4 model calls: Weaver read chapter 3200 in
three passes and loaded the quick-recall skill. The answer (548
characters) cites chapter 3200, and every capitalised name in it appears
in that chapter. Tokens: 22,528 cache hit, 8,173 miss, 301 out. Cost
$0.0029 against the $0.10 cap. The transcript stays private.

### Verification floor

| Check | Result |
|---|---|
| `uv run pytest -q` | 815 passed, 4 skipped (Windows-only skips), after the review fixes |
| `npx vitest run` | 183 passed (25 files) |
| `tsc --noEmit` | clean |
| `npm run build` | builds; served bundle has no drift |
| ruff on changed files | 19 findings, all present before the plan (baseline 21); new files clean |
| `rg 3160 src` | comments only |
| Gaps 1 to 3232, validation, receipts | clean (slice 2) |
| Screenshots desktop and mobile | taken (private) |

### Independent review

No blockers; two major and five minor findings fixed test-first. See
`review-ledger.md`.

### Observations, not fixed here

- **Search reach:** semantic search covers 1 to 3127; notebook statements
  in the index stop at 1000; notebook files run to 3160. For Plans 032/033.
- **Mobile Settings:** the threads sheet text shows through the Settings
  panel on mobile.
- **Empty first turn:** creating a conversation queues an empty owner turn
  (`start_conversation("")` in the create route, since `c69d119`, August).
  Pre-existing; harmless so far.

### Measured budget

- **Network:** 72 chapter fetches plus header-only and parity probes; two
  real scheduled checks. No paid service.
- **Live model:** $0.0029 (one smoke turn).
- **Agent context:** within the 400k to 700k estimate across the
  checkpoint and seven slices (not metered to the token).
