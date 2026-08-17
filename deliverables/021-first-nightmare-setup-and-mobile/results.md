# Results

## Status

Slices 2-5 are implemented. Slice 6 is blocked at the full Python verification
floor by one stale backend test outside this frontend-only plan. The owner's
real-phone review and final decision are still pending.

## What changed

- Added the approved four-step First Nightmare setup, browser-local first-run
  state, deferred entry, masked DeepSeek key storage through the existing
  identity helper, and persistent missing/stored key status.
- Added a setup-specific particle-fragment rune sequence. Fragments gather,
  fate threads bind, and the appraisal resolves through Good, Exceptional,
  Remarkable, and Glorious using the existing motion tokens.
- Repaired the mobile drawer with a solid scrim, body scroll lock, inert chat
  content, focus restoration, Escape and scrim close, safe-area padding, and
  the existing weave easing token.
- Raised mobile touch targets and field font sizes, retained the existing
  viewport-fit metadata, and provided reduced-motion behavior.
- Updated the old Settings key hint so it no longer claims that an empty field
  uses a server key.

## Deterministic evidence

The implementation began with an expected red test: the focused first-run test
could not import `firstNightmare.ts` before that module existed.

`npm run build`

- PASS, 60 modules transformed.
- Regenerated the committed production bundle under `src/weaver/web/dist/`.
- Vite retained its existing warning that the main JavaScript chunk is larger
  than 500 kB after minification.

`npm test -- --reporter=dot`

- PASS, 9 files and 41 tests.
- Existing jsdom canvas warnings remain in legacy ChatApp tests; they do not
  fail the suite.

`uv run pytest`

- FAIL, 515 passed and 1 failed out of 516 tests in 19m 25s.
- Failure: `tests/test_corpus_outputs_and_agent.py::test_live_environment_service_requires_firecrawl_key`.
- Observation: the test expects `service_from_environment(live_source=True)`
  to require Firecrawl. Plan 018.5 changed the function's default source to
  `direct`, which correctly does not require a Firecrawl key, while this older
  backend test was not updated.
- The test and implementation are outside Plan 021's strict frontend scope, so
  no backend or backend-test change was made and the failure was not retried or
  hidden.

No live model call, DeepSeek key, deployment, private novel text, or private
generated state was used.
