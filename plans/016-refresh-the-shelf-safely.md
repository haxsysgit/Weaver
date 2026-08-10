# Plan 016: Refresh the shelf safely

> **Executor instructions:** This plan wires the existing Plan 002
> library operations (inspect, fetch, update, build reading packets,
> export editions) into the web Weaver behind safe gates. The operations
> already exist (`src/weaver/corpus/tools.py`); this plan adds
> preview-first, owner confirmation, network and write classification,
> progress, and cancellation. No automatic updating during ordinary
> conversation.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check).
- **State:** Completed and owner-accepted 2026-08-10 (verified, closed).
- **Depends on:** Plan 014 accepted (the reading tools define the tool
  surface this plan extends; the refresh operations live beside them).
- **Priority:** P2
- **Effort:** S
- **Risk:** Medium (network access and private-library writes; must never
  fire during ordinary chat)

## Owner direction (locked decisions)

1. **Preview first.** Any fetch/update operation shows what will change
   (chapters to add, placeholders to replace, hash changes) before any
   network call or write.
2. **Explicit owner confirmation.** No update runs from a normal
   conversation message. The owner confirms each operation explicitly.
3. **Clear classification.** Network calls are `EXTERNAL_EFFECT`;
   library writes are `INTERNAL_WRITE`. The existing effect-policy
   machinery applies unchanged.
4. **Progress and cancellation.** Long fetches show progress and can be
   cancelled cooperatively; cancelled operations leave the shelf
   unchanged.
5. **No auto-update.** Ordinary conversation never triggers a refresh,
   even implicitly.

## Product shape (owner-directed 2026-08-09: CLI command, not UI flow)

- The owner directed a `weaver refresh`-style command that checks the
  source for the newest chapter, previews what is missing, fetches with
  Plan 002 validation, confirms before writing, and can run from a
  cron/reminder. The draft's web-UI flow with a preview token was
  superseded by that directive (corrections below).
- `weaver refresh` (default) — a preview run: reports every missing or
  broken chapter up to the known last chapter plus the probe-next-url
  plan. No network calls, no shelf writes (only a metadata receipt).
- `weaver refresh --apply` — the confirmed run: the owner's explicit
  flag is the human gate. Scrapes consecutive chapter URLs from the
  Plan 002 source until the first non-success, fetches and validates
  each chapter (Plan 002 rules: no overwrite of a valid chapter, atomic
  replace of proven-invalid placeholders), hardens permissions, rewrites
  the manifest, and writes a metadata-only receipt. Exits 2 before any
  call or state creation when no live key exists.
- `weaver refresh --through N` — caps the run at chapter N.
- It is **not a model tool**: no refresh tool exists in any model tool
  registry; ordinary conversation can never trigger a refresh.
- Operation records and receipts store what changed (chapter numbers,
  hashes, counts) and never novel prose or fetched raw text.

## Backend boundary

- Plan 002 corpus tools and the Plan 011 HTTP/SSE contract stay
  unchanged.
- The command calls `update_novel_corpus` (`corpus/service.py`)
  directly; the web profile's tool registry stays exactly as Plan 014
  leaves it (the reading tools only).
- Effect classification: network `EXTERNAL_EFFECT`, writes
  `INTERNAL_WRITE`, previews read-only.

## Out of scope

- Automatic update scheduling or watching.
- Updating during ordinary conversation.
- Changing how the library is stored or validated.
- Any write to `novels/` outside the Plan 002 rules.

## Deterministic proof (CLI shape)

1. `weaver refresh` preview reports exactly what would change (missing
   chapters, invalid placeholders to replace, the probe-next-url plan)
   with no network calls and no shelf writes;
2. `weaver refresh --apply` without a live API key exits 2 before any
   call, receipt, or state dir;
3. a confirmed apply runs the Plan 002 fetch/validate/atomic-commit
   loop, records per-chapter hashes and counts, stops at the first
   404/500, and stores no novel prose in receipts;
4. an interrupt mid-run never leaves a torn chapter (each write is
   individually validated and atomic; the next run resumes from the
   inventory);
5. no refresh tool exists in any model tool registry; ordinary
   conversation never triggers a refresh.

These are locked by tests in `tests/test_cli.py` (refresh tests,
~182-307) and `tests/test_corpus_fetch_update.py` (incl.
`test_mutating_tool_hardens_corpus_and_receipts_are_metadata_only`).

## Verification floor

```sh
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
```

plus the deterministic proof script, plus a staged-diff audit for
credentials, private story text, chats, and generated private state.

## STOP conditions

- An update fires during ordinary conversation, from a model tool call,
  or without the two-step gate (preview run, then the owner's explicit
  `--apply`).
- Network or write happens before preview and confirmation.
- Novel prose or fetched raw text enters durable records.
- The private notebook or `novels/` is modified outside the plan rules.

## Checkpoint audit corrections (2026-08-10)

When this plan was closed the draft's product shape had drifted from
what was actually built, because the owner's 2026-08-09 directive
(`weaver refresh`-style command, preview then confirm, cron-able)
superseded the draft's web-UI wording before admission. Corrections:

1. **DOC** — Product shape rewritten from the web-UI
   `preview_library_update`/`confirm_library_update` endpoints with a
   preview token to the shipped CLI command; the explicit `--apply`
   flag is the human gate and no preview token exists (a terminal
   command only the owner runs needs no token ceremony).
2. **DOC** — Deterministic proof rewritten to the CLI reality; the
   draft's items 2-3 (token refusal) and 5 (cancellation leaves the
   shelf byte-identical) became: missing-key exit 2 before any call,
   and per-chapter atomic validated writes under interrupt with
   resume-from-inventory.
3. **DOC** — Backend boundary updated: the command calls
   `corpus/service.py::update_novel_corpus` directly; there are no UI
   endpoints.
4. **FIXED (pre-existing, 2026-08-10)** — `_CHAPTER_NUMBER` in
   `corpus/text.py` gained typo tolerance (`ch[a-z]*ter`) because
   novelfire.net titled chapter 2843 "Chaoter"; 3 red-first tests lock
   it, all 50 corpus tests green.
5. **VERIFIED** — live run 2026-08-09 fetched chapters 3129-3148 and
   stopped at 3149 (first 404/500), repaired the broken chapter 2843
   file atomically; receipt metadata-only.
