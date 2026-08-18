# Plan 023: Conversation metadata foundations

> **Executor instructions:** Move conversation-owned metadata into the existing
> device-scoped SQLite and FastAPI boundary using red-green tests. Keep the
> DeepSeek key browser-local, keep Shadow Slave as the only Edition, and make no
> visual or layout changes.

## Status

- **Tooling:** Python 3.11, SQLite via `aiosqlite`, FastAPI, Pydantic, pytest,
  ruff, fake-mode web runtime.
- **State:** closed 2026-08-18 (owner accepted).
- **Depends on:** Plan 022 must close with accepted identity terms and the
  stable `shadow-slave` Edition id.
- **Priority:** P1. Plan 028 needs durable rename, archive, and pin controls.
- **Effort:** M.
- **Risk:** Medium. This changes the durable conversation schema and must carry
  existing generated titles forward without weakening device isolation.
- **Budget:** 90k-160k agent-context tokens across implementation, tests, and a
  fresh independent review. Estimated agent cost is $0.20-$1.00, with a hard
  cap of $2. Agent-context work is live and billed. Product execution is
  fake-only, makes no provider call, and uses no DeepSeek key. Record measured
  usage in `results.md` at close.

## Owner direction (locked decisions)

1. (2026-08-18) Conversation metadata lives server-side beside the durable
   conversation. Browser-local sets are not the persistence boundary.
2. (2026-08-18) Persist manual title, archived state, pinned state, and
   `edition_id`. Existing generated titles must survive migration and restart.
3. (2026-08-18) `edition_id` defaults to `shadow-slave` on the server, appears
   in every conversation summary, and stays read-only until another Edition is
   actually supported.
4. (2026-08-18) Add
   `PATCH /api/conversations/{conversation_id}` with optional `title`,
   `archived`, and `pinned` fields. It returns the updated conversation
   summary. The existing delete route remains unchanged.
5. (2026-08-18) Every metadata read and write enforces exact device ownership.
   Unknown ids, another device, and a missing header against a non-empty owner
   all return 404. Legacy empty-owner rows remain reachable by empty-header
   clients.
6. (2026-08-18) The DeepSeek key remains in browser storage and per-request
   headers. No key state, key value, or key-derived field enters SQLite or the
   metadata API.
7. (2026-08-18) This plan changes backend persistence and contracts only. The
   current UI redesign, Thread Archive, desktop rail, and `ChatApi`
   `updateConversation(id, patch)` method belong to Plan 028.

## Scope

- Bump the conversation schema from version 2 to version 3 in
  `src/weaver/conversation/schema.py`.
- Add conversation columns with these internal meanings:
  - `generated_title TEXT`: the existing automatic first-turn name.
  - `manual_title TEXT`: the reader's override. `NULL` restores the automatic
    name or last-owner fallback.
  - `archived_at TEXT`: `NULL` means active; a timestamp means archived.
  - `pinned_at TEXT`: `NULL` means unpinned; a timestamp means pinned.
  - `edition_id TEXT NOT NULL DEFAULT 'shadow-slave'`: server-owned Edition.
- Copy existing `conversation_title.title` values into `generated_title` during
  migration, then retire the legacy title table and its methods from
  `src/weaver/prefs.py`. Migration must work when the legacy table does not
  exist and remain safe on repeated startup.
- Add a conversation summary record and metadata methods in
  `src/weaver/conversation/repository.py` and
  `src/weaver/conversation/session.py`.
- Compute the public title in this order: trimmed `manual_title`, stored
  `generated_title`, last owner message limited to 80 characters, then
  `New chat`.
- Keep `GET /api/conversations` newest-first and return every device-owned
  summary with exactly these public fields:

  ```json
  {
    "conversation_id": "...",
    "title": "...",
    "created_at": "...",
    "archived": false,
    "pinned": false,
    "edition_id": "shadow-slave"
  }
  ```

- Add this partial update contract in `src/weaver/web/app.py`:

  ```http
  PATCH /api/conversations/{conversation_id}
  Content-Type: application/json

  {"title": "A new name", "archived": true, "pinned": true}
  ```

  Each field is optional. A string title is trimmed and must contain 1-80
  characters. `title: null` clears the manual override. An empty patch, blank
  title, overlong title, unknown field, or attempted `edition_id` write returns
  422. A successful update returns the full public conversation summary.
- Move `_name_thread()` in `src/weaver/web/app.py` from
  `PreferencesStore.set_title()` to a session method that updates only
  `generated_title`. A late automatic name must never replace a manual title.
- Remove the old `PreferencesStore.clear_title()` call from hard delete. The
  conversation row now owns its title fields and hard delete removes them with
  that row.
- Tighten `SessionWeave.conversation_owned_by()` to exact device-id equality.
  Empty-header clients may reach legacy empty-owner rows, but an empty header
  must not act as a wildcard for a non-empty device owner.
- Preserve hard delete, turn settlement, transcript filtering, no-log behavior,
  host/origin checks, and device-scoped list behavior.
- Add deterministic tests in `tests/test_conversation.py` and
  `tests/test_web.py` before each production change.

## Out of scope

- Any React, TypeScript, CSS, built `dist/`, desktop, mobile, animation, or
  visual change.
- Adding `updateConversation` to `src/weaver/web/frontend/lib/chatApi.ts`.
  Plan 028 owns the browser integration.
- A second Edition, Edition switching, Edition-specific preferences, accounts,
  or cross-device sync.
- Storing, validating, masking, returning, or logging a DeepSeek key.
- Soft delete, archive retention policy, bulk metadata updates, sorting pinned
  rows ahead of newer rows, or search across archived Threads.
- Changing `DELETE /api/conversations/{conversation_id}` or turn routes.
- Live model calls, deployment, novel reads, notebook work, or prompt changes.

## Deterministic proof / verification floor

1. Targeted migration and repository tests pass:

   ```bash
   uv run pytest tests/test_conversation.py -q
   ```

2. Web contract, validation, ownership, and privacy tests pass:

   ```bash
   uv run pytest tests/test_web.py -q
   ```

3. The full Python suite stays green:

   ```bash
   uv run pytest
   ```

4. Ruff passes on every changed Python file:

   ```bash
   uv run ruff check src/weaver/conversation/schema.py src/weaver/conversation/repository.py src/weaver/conversation/session.py src/weaver/prefs.py src/weaver/web/app.py tests/test_conversation.py tests/test_web.py
   ```

5. Tests prove all of these facts:
   - a version-2 database keeps its generated titles and gains
     `edition_id='shadow-slave'`;
   - migration is idempotent and a fresh database needs no legacy title table;
   - manual title, archive, pin, and Edition metadata survive close and reopen;
   - a later generated name never replaces the effective manual title;
   - `GET /api/conversations` returns the locked summary shape;
   - PATCH supports partial updates and title reset;
   - invalid or empty patches return 422;
   - another device and a missing device header both receive 404 for a
     non-empty device owner on messages, turns, PATCH, and DELETE, and change
     no row;
   - a key placed in `X-Weaver-Key` appears in no response or SQLite bytes;
   - hard delete still removes the conversation.
6. Before every commit, inspect the worktree and staged files:

   ```bash
   git status --short
   git diff --cached --name-only
   git diff --cached
   ```

   Never use `git add -A`. The staged set must contain only Plan 023 files and
   no `.env`, private source, database, key string, or unrelated drift.
7. A fresh reviewer checks the migration, device-isolation path, PATCH
   validation, title precedence, and key no-log test. Every valid finding is
   repaired and rechecked before the owner decision.

## STOP conditions

- Plan 022 does not close with `shadow-slave` accepted as the stable Edition
  id.
- The migration cannot preserve an existing generated title exactly.
- The implementation needs a second database, account table, frontend change,
  novel read, prompt change, or key storage.
- Any metadata route bypasses `_own_conversation()` or reveals another
  device's conversation through status code, body, timing branch, or list
  output.
- Exact device matching cannot preserve access to legacy conversations whose
  stored owner is empty when the request id is also empty.
- A manual rename can be replaced by delayed automatic naming.
- Any test performs a live provider call or uses a real DeepSeek key.
- Existing hard delete, transcript privacy, or BYOK no-log tests regress.
- The staged diff contains private data, generated state, credentials, or files
  owned by another active plan.

## Slices

1. **Plan and admit**: after Plan 022 and the active dependencies close, review
   this draft with the owner. Update shared indexes only at admission, stage
   only Plan 023 records, audit them, and commit with
   `Plan 023: admit conversation metadata foundations`.
2. **Migration red test**: in `tests/test_conversation.py`, build a version-2
   database with two conversations, one legacy generated title, and no metadata
   columns. Add assertions for exact title carry-forward, default Edition,
   null archive/pin/manual fields, legacy table retirement, and repeat-open
   safety. Run the named tests and confirm they fail for the missing version-3
   schema.
3. **Migration green implementation**: update
   `src/weaver/conversation/schema.py` with the five columns and guarded legacy
   title copy. Keep each migration step restart-safe and insert version 3 only
   after the copy succeeds. Run `tests/test_conversation.py`, then stage only
   the schema and test file and commit with
   `Plan 023: migrate conversation metadata`.
4. **Repository and session red tests**: add tests for generated and manual
   title precedence, title reset, archive, pin, Edition default, newest-first
   listing, close/reopen persistence, hard delete, and exact device ownership.
   Prove an empty request id matches an empty legacy owner but cannot match a
   non-empty device owner. Confirm the new tests fail before adding methods.
5. **Repository and session green implementation**: add a typed summary record,
   one query that returns the row plus its last owner message, a generated-title
   setter, and one atomic partial metadata update. Expose the smallest matching
   methods through `SessionWeave`. Run the conversation tests, stage only
   `repository.py`, `session.py`, and their test changes, then commit with
   `Plan 023: persist conversation metadata`.
6. **Web contract red tests**: in `tests/test_web.py`, add GET summary-shape and
   PATCH round-trip tests, `title: null` reset, 422 validation cases, cross-device
   404 checks, missing-header 404 checks against a device-owned row for
   messages, turns, PATCH, and DELETE, restart persistence, unchanged delete
   behavior, and a fake key canary scan. Confirm they fail before adding the
   route.
7. **Web contract green implementation**: add a strict Pydantic patch body in
   `src/weaver/web/app.py`, reject an empty field set, call
   `_own_conversation()` before every update, return the full summary, and keep
   `edition_id` out of the writable model. Update listing to use session-owned
   metadata. Run `tests/test_web.py`, stage only the app and web tests, then
   commit with `Plan 023: add conversation metadata api`.
8. **Move automatic naming**: add a failing test proving a delayed generated
   title cannot replace a manual title. Move `_name_thread()` to the session
   generated-title setter, then remove `conversation_title` creation and title
   methods from `src/weaver/prefs.py`. Remove the matching clear-title call from
   hard delete. Run both targeted test files and commit only the touched files
   with `Plan 023: keep thread names with conversations`.
9. **Full verification and private-data audit**: run ruff, targeted tests, and
   `uv run pytest`. Record exact commands and counts in `results.md`. Inspect
   the staged diff for keys, `.env` files, novel text, SQLite files, raw model
   reasoning, and unrelated worktree drift.
10. **Independent review and close**: give a fresh reviewer the locked contract,
    changed files, and test results. Repair and recheck every valid finding,
    then ask the owner for the final decision. Record date and reason before
    committing only Plan 023 files with
    `Plan 023: close after owner decision`.
