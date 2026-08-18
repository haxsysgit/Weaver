# Review Ledger

## Status

Independent review complete and rechecked 2026-08-18. The one test-coverage
repair is complete. Final owner decision remains pending.

## Scope reviewed

- `src/weaver/conversation/schema.py`
- `src/weaver/conversation/repository.py`
- `src/weaver/conversation/session.py`
- `src/weaver/prefs.py`
- `src/weaver/web/app.py`
- `tests/test_conversation.py`
- `tests/test_web.py`

## Confirmed observations

- The v2 to v3 migration adds each new column only when absent, copies legacy
  `conversation_title.title` into `generated_title`, drops the legacy table,
  then records version 3. A restart before the version record safely repeats
  the guarded work. A repeated normal startup leaves the carried title and
  `shadow-slave` Edition intact.
- Conversation list queries filter on exact `device_id`; route reads and
  mutations use `_own_conversation()`, which compares the stored and request
  ids exactly. An empty request id only reaches an empty legacy owner.
- PATCH accepts only title, archived, and pinned; rejects empty, blank,
  overlong, and unknown-field bodies; and returns the locked summary shape.
  `edition_id` has no writable field.
- A manual title wins when `_name_thread()` writes a later generated title;
  clearing the manual title reveals the newest generated title.
- Hard delete removes the conversation row that owns its metadata. The old
  preferences title methods and table creation are gone.
- The fake BYOK canary appears in neither route responses nor SQLite bytes.

## Finding 1: cross-device PATCH lacked direct contract proof

- **Severity:** medium
- **Evidence:** `tests/test_web.py` proves a missing device header gets 404
  for PATCH. Its cross-device test covers messages, turns, cancel, and delete,
  but does not make a PATCH request as the other device or prove that such a
  rejected request leaves metadata unchanged.
- **Why it matters:** the locked Plan 023 verification floor requires both
  another device and a missing header to receive 404 for PATCH, with no row
  changed. The current route appears correct because it calls
  `_own_conversation()` before the update, but the specific regression is not
  protected by a test.
- **Repair:** added the other-device PATCH request to the device-isolation
  test. It asserts 404, then reads the owning device's summary and confirms
  that `archived` remains false.
- **Recheck:** the focused PATCH, device-isolation, missing-header, and
  generated-title tests passed after the repair.

## Commands run

```bash
uv run pytest tests/test_conversation.py tests/test_web.py -q
uv run ruff check src/weaver/conversation/schema.py src/weaver/conversation/repository.py src/weaver/conversation/session.py src/weaver/prefs.py src/weaver/web/app.py tests/test_conversation.py tests/test_web.py
uv run pytest tests/test_conversation.py tests/test_web.py --collect-only -q
uv run pytest tests/test_web.py::test_device_scoping_isolates_conversations tests/test_web.py::test_conversation_metadata_patch_returns_durable_summary tests/test_web.py::test_conversation_metadata_patch_rejects_invalid_body tests/test_web.py::test_missing_device_header_cannot_access_owned_conversation tests/test_web.py::test_generated_thread_name_lives_with_conversation_metadata -q
```

The test command and Ruff command exited cleanly. Collection reported 102
tests.
