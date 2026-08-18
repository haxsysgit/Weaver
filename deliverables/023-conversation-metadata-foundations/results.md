# Results

## Status

## Deterministic results

- `uv run pytest tests/test_conversation.py -q`: 46 passed.
- The independent review's combined conversation and web run collected 102
  tests and passed.
- `uv run pytest tests/test_prefs.py -q`: 7 passed.
- The focused post-review web repair set passed: device isolation, metadata
  PATCH, invalid body validation, missing-header ownership, and generated
  naming persistence.
- `uv run ruff check src/weaver/conversation/schema.py src/weaver/conversation/repository.py src/weaver/conversation/session.py src/weaver/prefs.py src/weaver/web/app.py tests/test_conversation.py tests/test_web.py`:
  all checks passed.

## Verification floor

The owner approved the narrow doctor repair needed to unblock the full suite.
It keeps the intentional flash startup alias and verifies both selectable v1
model ids, flash and Pro. The doctor still makes no network call.

`uv run pytest` completed with 528 passed in 546.54 seconds on 2026-08-18.
No product model call or DeepSeek key was used.
