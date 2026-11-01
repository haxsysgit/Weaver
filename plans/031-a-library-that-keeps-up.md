# Plan 031: A library that keeps up

> **Executor instructions:** Bring Weaver's shelf from chapter 3160 to the
> novel's latest chapter, then keep it there on a schedule with validation
> and failure alerts, and make every part of the app read one shelf edge
> instead of a hard-coded 3160. The rule that governs it: the existing
> Plan 002 and Plan 016 shelf rules stand (append or replace only after
> validation, never overwrite a valid chapter, receipts carry metadata
> only), and nothing here may fire from a conversation.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check), `npx vitest`,
  the root production build. Every `uv` command on this Windows checkout
  needs `UV_PYTHON_INSTALL_DIR=$USERPROFILE/.uv/python`.
- **State:** admitted 2026-11-01 (owner: "Admit as drafted").
- **Depends on:** Plan 030 closed (2026-11-01, v2.0.0 released offline);
  checkpoint 021-030 done (2026-11-01). Builds on Plan 002 (shelf rules)
  and Plan 016 (`weaver refresh`).
- **Priority:** P1 (owner priority on the 031-040 roadmap).
- **Effort:** M
- **Risk:** Medium. Unattended network writes to the private shelf; the
  source sits behind Cloudflare and can block the direct fetcher; the edge
  touches spoiler validation on both server and frontend.
- **Budget:**
  - Agent context: about 400k to 700k tokens across the slices
    (estimate), agent-executed.
  - Network: about 72 chapter fetches for the catch-up through the
    `direct` source (no paid service), then one small check per
    scheduled run. Firecrawl (paid) only with the owner's go.
  - Live model: one smoke turn about a new chapter, capped at $0.10.
    Everything else runs in fake mode.
  - Measured numbers are recorded in `results.md` at close.

## Owner direction (locked decisions)

1. (2026-10-31) Plan 031 is the first plan of the 031-040 roadmap and the
   owner's priority: fetch from 3161 to the novel's latest chapter,
   scheduled checks for new chapters, validation, failure alerts.
2. (2026-10-31) Only raw chapters are needed for this plan. Weaver opens
   chapters far more than it searches (1,378 chapter reads to 414 vector
   searches across 554 turns). Notebook pages, embeddings, and the
   knowledge pipeline belong to Plans 032 and 033.
3. (2026-08-10, Plan 016, still standing) No refresh tool exists in any
   model tool registry; ordinary conversation never triggers a refresh.
   Receipts store metadata only, never chapter text.
4. (Plan 002, still standing) `novels/` changes only through the corpus
   tools: append a validated missing chapter, or atomically replace a
   proven-invalid placeholder. Never overwrite a valid chapter.

Confirmed by the owner at admission (2026-11-01, "Admit as drafted"):

5. **Scheduled runs apply appends on their own.** Plan 016 kept
   `--apply` as a manual gate and put scheduling out of scope. A
   scheduled run may now append new validated chapters
   without a person present, because appends cannot overwrite anything.
   Replacing a placeholder, or any other non-append action, still waits
   for the owner's manual `--apply`.
6. **Alerts in two places for now.** A library status in Settings (edge,
   last check, last failure) and a Windows notification on failure. A
   hosted channel waits for Plan 039, when Weaver moves off this machine.
7. **Daily schedule** through Windows Task Scheduler on the owner's
   machine; the schedule moves to the server host in Plan 039.
8. **Volume 13 stays open-ended.** The shelf edge is not a volume end.
   Volume 13 runs to the shelf edge until the owner confirms where a new
   volume starts.
9. **Scraper footers are filtered when read, not cut from files.** Late
   chapter files carry a repeated footer after the story (Plan 029). The
   reading tools drop it on read, and the files stay byte-identical.

## Scope

- **Catch-up:** preview, then an owner-confirmed `weaver refresh --apply`
  from 3161 to the source's latest chapter (3232 on 2026-11-01), with
  every chapter validated and a gap check after.
- **One shelf edge:**
  - The server derives the edge from the shelf files and serves it to
    the frontend.
  - The hard-coded 3160 ceilings go: `weaver.prefs.MAX_CHAPTER`, the
    `reader_chapter` field limit in `web/app.py`, `readerPosition.ts`,
    and the Settings slider and volume table.
  - The two `VOLUME_ENDS` tables (`spoilers/judge.py`,
    `SpellSurfaceChatApp.tsx`) treat the last volume as open-ended.
- **A running server sees new chapters** without a restart: the system
  prompt's chapter count and the reader boundary limit follow the shelf.
- **Honest coverage:** the prompt says which chapters each reading tool
  covers. Opening and exact search reach the shelf edge; meaning search
  and the notebook stop where their index stops, until Plan 033.
- **Scheduled refresh:**
  - A schedule-safe mode of `weaver refresh` applies appends only.
  - A lock file keeps two runs from overlapping.
  - A status record holds the edge, the last check, the last success,
    and the last failure category.
  - It is registered with Windows Task Scheduler, with a documented
    command to remove it.
- **Failure alerts:** the scheduled run alerts on:
  - a fetch failure, or a block by the source;
  - a validation failure;
  - a schedule that has not run for two days;
  - a source with no new chapter for longer than the owner sets.
- **Footer filter on read**, test-first, without touching chapter files.

## Out of scope

- Embeddings, the vector index, and notebook pages for new chapters
  (Plans 032 and 033).
- The reader card and what Weaver says about its own library beyond the
  coverage line (Plan 034).
- Moving the schedule or alerts to a server, a domain, or Cloudflare
  (Plan 039).
- Fetching any other novel, or changing the source site.
- Detecting author edits to chapters already on the shelf.
- Any refresh triggered from chat, or a refresh control in the web UI.

## Deterministic proof / verification floor

1. `uv run pytest -q` passes (779 or more), including new tests for:
   - the shelf-edge endpoint, called the browser way (see
     `tests/test_web_request_shapes.py`);
   - boundary validation above 3160;
   - the open-ended last volume;
   - the appends-only schedule mode refusing any non-append action;
   - the lock;
   - the status record;
   - each alert trigger;
   - the footer filter.
2. `npx vitest run` passes (167 or more), plus `tsc` and the root
   production build.
3. `uv run ruff check` adds no findings on changed files.
4. `rg -n "3160" src` returns only comments and history notes, not
   ceilings.
5. After the catch-up, the shelf has no gaps from 1 to the new edge, every
   new chapter passes `validate_local_bytes`, and the receipts hold no
   chapter text.
6. A scheduled run with the network stubbed to fail raises the alert and
   records the failure, and the shelf is unchanged.
7. Real browser screenshots, desktop and mobile, of the Settings library
   status and the boundary slider above 3160.
8. One live smoke turn asks about a chapter after 3160 and cites it
   (capped at $0.10).
9. A staged-file audit for secrets and chapter text before every commit.

## STOP conditions

- Any path writes to `novels/` outside the Plan 002 rules, or a run would
  overwrite a valid chapter.
- The source blocks the direct fetcher. Stop before switching to Firecrawl
  (paid) without the owner.
- The source's chapter numbering disagrees with the shelf (a skipped,
  duplicated, or renamed chapter).
- A refresh becomes reachable from chat or from a model tool.
- Chapter text appears in a receipt, status record, alert, log, or commit.
- A slice needs a decision that items 1 to 9 do not cover.

## Slices

1. **Plan and admit.** Done 2026-11-01: this doc, items 5 to 9 confirmed,
   index rows, the deliverable scaffold, and the admission commit.
2. **Catch-up.** Run the preview, get the owner's go, apply through the
   source's latest, then the gap and validation checks. Record counts,
   sizes, and timing in `results.md` (no text).
3. **One shelf edge.** Test-first:
   - an edge endpoint, called the browser way;
   - the server and frontend ceilings removed;
   - the open-ended last volume;
   - the running server following the shelf;
   - the coverage line in the prompt.
   Show the owner one Settings screenshot before the UI is finished.
4. **Footer filter.** A bounded read of a few late chapters to pin the
   footer's exact shape, then a test-first filter in the reading path.
5. **Scheduled refresh.** The appends-only mode, the lock, the status
   record, the Task Scheduler registration, and its removal command.
6. **Failure alerts.** The triggers, the Windows notification, and the
   Settings status. Proven with stubbed failures, then with one real
   scheduled run.
7. **Close.** The live smoke turn, the full floor, screenshots, an
   independent review, the measured budget in `results.md`, and the
   owner's decision in `decision.md`. Read the plan status and deploy
   state before any merge, tag, or deploy. Update HANDOFF and
   TODO_future.
