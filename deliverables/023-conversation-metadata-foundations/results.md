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

## Full-suite blocker

`uv run pytest` collected 528 tests but did not pass cleanly. Its first
failure was `tests/test_cli.py::test_doctor_has_no_network_requirement`:
`src/weaver/doctor.py` still expects only the flash model alias, while the
already-shipped v1 model catalogue includes Pro. Plan 023 did not modify the
doctor or model catalogue.

The command runner also left long-running notebook-checker child processes
after returning partial output. They were stopped after the failure had been
captured. No source or generated data changed from those runs.

Plan 023's independent review is complete. The full-suite requirement remains
blocked on the unrelated doctor expectation until the owner directs a repair
under an appropriate scope.
