# Plan 031 learning note

## Gate status

**Drafted 2026-11-01, unadmitted.** No work on the plan has started. The
owner's answers on proposals 5 to 9 in the plan doc are the admission
questions.

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

## Owner questions for admission

Proposals 5 to 9 in the plan doc:

5. Should scheduled runs append on their own?
6. Where do alerts go?
7. How often should the schedule run?
8. Should Volume 13 stay open-ended?
9. Filter the footer on read, or cut it from the files?
