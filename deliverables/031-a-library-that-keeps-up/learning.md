# Plan 031 learning note

## Gate status

**Admitted 2026-11-01.** The owner chose "Admit as drafted", which
confirms items 5 to 9 in the plan doc as written. Slice 2 (the catch-up
fetch) still waits for the owner's go after a fresh preview.

## Observations (2026-11-01, before admission)

- `weaver refresh` (Plan 016) previews with no network and no shelf
  writes. Today's preview reported one action:
  `probe_consecutive_urls_until_first_404` from chapter 3161. The shelf is
  complete from 1 to 3160 with no gaps or placeholders.
- The last refresh receipt is dated 2026-08-15. No refresh has run since.
- The source's book page lists chapter 3232 as the latest, updated about
  12 hours before the check. The gap is 72 chapters.
- The `direct` fetcher (plain HTTP with browser headers) is the default
  and needs no key. Firecrawl is the paid fallback.
- Chapter validation exists: the final URL, a title with the chapter
  number (typo-tolerant since chapter 2843's "Chaoter"), a minimum
  paragraph count, a minimum body length, and placeholder markers.
- The system prompt's chapter count comes from a scan of the shelf files
  when the runtime opens, with 3160 as the fallback when no library is
  present. Opening chapters and exact search read the files directly. So
  new files are readable after a restart, even before any index work.
- These still hard-code the 3160 edge:
  - `weaver.prefs.MAX_CHAPTER`, which the `reader_chapter` field limit in
    `web/app.py` uses;
  - `readerPosition.ts`, and the Settings slider and volume table;
  - the `VOLUME_ENDS` tables in `spoilers/judge.py` and
    `SpellSurfaceChatApp.tsx`, which end Volume 13 at 3160.

  A reader past 3160 cannot save their real position today.
- `notebook/constants.py` caps notebook ranges at 3200. That belongs to
  the notebook and Plan 033, not here.
- Plan 029 recorded a repeated scraper footer after the story ending in
  late chapter files. Its exact shape is not recorded; slice 4 reads a few
  late chapters to pin it down.

## Hypotheses, not decisions

1. The existing refresh machinery can catch up 72 chapters through the
   `direct` source without changes. A Cloudflare block is the main risk.
2. One server-derived shelf edge, served to the frontend, can replace
   every hard-coded ceiling without breaking spoiler protection.
3. Appends-only scheduled runs are safe to run unattended, because the
   Plan 002 rules already forbid overwriting a valid chapter.
4. Filtering the footer at read time removes noise from answers and
   quotes without changing any chapter file.

## Owner-confirmed direction (2026-11-01, at admission)

5. Scheduled runs append new validated chapters on their own. Anything
   other than an append waits for the owner's manual `--apply`.
6. Alerts go to a library status in Settings and a Windows notification.
   A hosted channel waits for Plan 039.
7. The schedule runs daily through Windows Task Scheduler and moves to the
   server host in Plan 039.
8. Volume 13 stays open-ended until the owner confirms where a new volume
   starts.
9. Scraper footers are filtered when chapters are read. Chapter files stay
   byte-identical.

## Amendments (2026-11-01, during execution)

- **Run every slice without waiting.** The owner directed all slices to
  run in order without per-slice permission. The final report covers what
  was done, how, how it fits what was already built, how it makes updates
  easier, and when updates are scheduled.
- **Weekly, not daily (owner).** The author releases Monday to Friday and
  not at weekends. The scheduled run is weekly, on Saturday after the
  week's last chapter, and catches up on the next start if the PC was off.
  The "schedule has not run" alert threshold becomes 8 days.
- **The source moved (executor decision, flagged for the owner).**
  - novelfire.net now forwards every chapter through readnovel.site to
    novelphoenix.com.
  - The plan put changing the source out of scope. But the old source no
    longer serves chapters at all, and the new host reproduced the shelf
    byte for byte (chapters 3158 and 3160).
  - So the spec now fetches from novelphoenix.com and keeps the old
    address as accepted ledger history. Evidence is in `results.md`.
  - Reverting is a one-field change in `corpus/spec.py`.
- **Debris inside chapters, not only footers.** Chapter 3150 on the shelf
  carries an ad blocker's notice as a line of text. Item 9's read-time
  filter covers known debris lines as well as footers, and new fetches
  drop them.
