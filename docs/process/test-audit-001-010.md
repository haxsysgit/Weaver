# Test-suite audit 001-010 (2026-08-01)

The owner asked for a real audit of the test suite: are tests stale, or
testing the wrong things? Seven read-only reviewers (the fleet, fan-out)
audited all 19 test files / 190 test functions against the code they
exercise, including mutation checks (would the test fail if the behavior
it claims to verify were broken?).

## Verdict: the suite is mostly mutation-alive

Of 190 functions, roughly 175 are mutation-sensitive on the outcomes that
matter. The durable-storage/replay/assembler core (test_conversation.py),
the dispatch-order and cancellation-race suite (test_agent_turn.py,
test_tool_execution.py), the corpus integrity tests, and the provider
contract tests are genuinely strong. No test file had systematic staleness.

## Defects found and fixed (232 tests green after, up from 228)

### Dead / vacuous tests

1. **test_delete_workflows_db_safe** asserted on a `workflows.sqlite3`
   file nothing in src/ ever creates; it passed with its body deleted.
   Rewritten as `test_open_creates_only_weaver_sqlite` (a real invariant).
2. **test_send_persist_failure_marks_run_interrupted** (added by the
   checkpoint audit) was miswired: `_persist_callback` is a factory
   returning an async closure, but the test monkeypatched it with an
   async function, so the runner received a never-awaited coroutine and
   the test passed via TypeError, not the intended RuntimeError. It would
   pass with the `raise` deleted. Fixed to the correct factory shape;
   mutation-verified (removing the raise now fails the test).
3. **Vacuous assertions removed** (they passed even if the behavior they
   claimed to check were deleted):
   - receipts: `secret not in combined` where the secret was never in any
     payload; reasoning-content absence in fake runs that never produce
     reasoning. Replaced with a real `secrets=` threading + redaction
     test, a Bearer-regex isolation check, and a per-run-dir uniqueness
     check.
   - corpus: `FIRECRAWL_API_KEY not in receipt` with nothing set in env
     (now sets the env var first); `pytest.raises(Exception)` narrowed to
     `CorpusError` + SECURITY category; packet sha256 only compared for
     equality (now pinned against the actual file bytes); txt/md exports
     only checked for ordering (now also body content per chapter).
   - CLI: "four scripted requests" name never asserted the count (now
     pins `manifest.settings.maximum_api_requests == 4`).
   - doctor "no network" test was not falsifiable (the doctor hardcodes
     the label; now socket.connect is patched to raise).

### Weak tests hardened

4. **test_incomplete_or_invalid_call_starts_no_handler**: 6 of its 8
   params survived the removal of their own validation gates because the
   fake provider repeats the last scripted response, masking via the
   known-call-id rejection. A valid follow-up response is now scripted so
   a removed gate makes the turn complete and the asserts fail.
5. **test_repo_load_items_for_run_id**: a single-run conversation made
   the `for_run_id` filter unobservable. A second run is now sent so a
   dropped filter fails the test.
6. **TUI private-attr assertions** (`status._busy`, `app._conv_id`)
   replaced with observable outcomes (spinner frame vs idle dot; submit
   after a conversation switch and assert which conversation receives it).
7. **TUI declarative-only dispatch** hardened: ctrl+c and ctrl+h are now
   real keypresses (proving priority binding beats TextArea's copy and
   proving ctrl+h opens the history screen), not direct action calls.
8. **test_build_chat_session_uses_configured_model** asserted only the
   label derived from the same env var as the model; now also pins the
   session's actual model id.

### Duplicates deleted

9. `test_empty_assistant_text_with_tool_calls_is_preserved` (strict
   subset of the complete-exchange test), `test_unknown_tool_keeps_first_priority`
   (identical scenario to test_agent_turn.py's), and a weak duplicate of
   the live-without-key test (kept the one with the client-construction
   guard, added the guard to the model-smoke variant).

### Hygiene

10. The suite's only warning (a sync test marked `@pytest.mark.asyncio`)
    fixed; the test now imports the canonical `items_to_messages` and the
    runner's stale "kept for existing tests" comment corrected.
11. `EMPTY=` line in a .env test fixture removed (it silently injected
    an empty env var into the process).

## High-value coverage added (safety-critical paths)

12. **Mid-stream cancel closes the SDK stream** (deepseek.py:127):
    a stream that sets the cancel event mid-flight now asserts the stream
    object's `close()` was called.
13. **task.cancel() mid-stream** (deepseek.py:168-176): a hanging stream
    cancelled via task.cancel() still gets closed, and the cancellation
    is converted to an ABORTED terminal response.
14. **`_status_category` map** (401 -> authentication, 429 -> rate_limit)
    was entirely untested except the 500 fallback; params added.
15. **Default stop-reason branch** (unknown/absent finish reason ->
    ERROR with `provider_stop` category) was untested; param added.

## Notes

- 13 no-assert tests in the suite are `pytest.raises` tests; each was
  verified to raise for the right reason with a narrow match.
- `retry_safe` on ToolDefinition is a dormant flag (set but never read);
  the test documenting it stays until a retry mechanism exists.
- 21 other files fail `ruff format --check` in their committed state
  (pre-existing drift, the sanctioned floor is `ruff check`); left
  untouched.
