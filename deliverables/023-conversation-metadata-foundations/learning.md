# Plan 023 learning note

## Gate status

**Admitted 2026-08-18.** Plan 022 closed with the accepted `shadow-slave`
Edition id. Implementation, independent review, and the verification floor are
complete. The final owner decision is pending.

## Owner-confirmed direction

Recorded from the owner's 2026-08-18 direction:

- Conversation metadata is durable server state.
- The writable metadata fields are manual title, archived, and pinned.
- `edition_id` is server-owned, defaults to `shadow-slave`, and remains
  read-only while Shadow Slave is the only supported Edition.
- The update contract is
  `PATCH /api/conversations/{conversation_id}` and returns a full conversation
  summary.
- Existing hard delete stays.
- Device ownership applies to every metadata read and write.
- The DeepSeek key remains browser-local and never becomes conversation
  metadata.
- Browser wiring and the Thread Archive UI wait for Plan 028.

## Repo observations

- `src/weaver/conversation/schema.py` is at schema version 2. The
  `conversation` table currently stores id, relationship id, device id, and
  creation time.
- `src/weaver/prefs.py` creates a separate `conversation_title` table in the
  same `weaver.sqlite3` file and exposes `set_title()`, `clear_title()`, and
  `titles()`.
- `src/weaver/web/app.py` combines those stored titles with the last owner
  message while listing conversations. Its automatic naming call writes
  through `PreferencesStore`.
- `src/weaver/web/app.py` centralizes targeted device checks in
  `_own_conversation()` and returns 404 on failure.
- `SessionWeave.conversation_owned_by()` currently treats an empty request
  device id as a wildcard. Plan 023 must tighten this to exact equality so a
  missing header cannot update a conversation owned by a non-empty device id.
  The same repair protects current messages, turns, and delete routes.
  Empty-header clients still match legacy rows whose stored owner is empty.
- `src/weaver/web/frontend/components/SpellSurfaceChatApp.tsx` currently keeps
  manual names, archived ids, and pinned ids in React state. Reloading loses
  them.
- `src/weaver/web/frontend/lib/chatApi.ts` has list, create, load, stream,
  cancel, and delete methods. It has no metadata update method yet.
- Existing tests in `tests/test_conversation.py` cover migration idempotence,
  newest-first listing, and durable restart. `tests/test_web.py` covers list,
  delete, device isolation, BYOK no-log, and private-protocol canaries.

## Working hypothesis

Schema version 3 can own conversation metadata with separate generated and
manual title columns. That split prevents a delayed automatic title from
overwriting the reader's rename. Nullable timestamps preserve archive and pin
state without inventing a second table. One server-owned `edition_id` column
creates the future seam while allowing only `shadow-slave` today.

The migration can copy legacy generated titles because `PreferencesStore` and
`SessionWeave` already use the same SQLite file. Tests must cover the case where
the legacy table is absent and repeated startup after migration.

The architecture is implemented with deterministic migration, session, API,
and privacy coverage. The doctor expectation was aligned with the shipped v1
model catalogue, then the full suite passed.

## Pending owner gates

1. Record the final accept or reject decision.
