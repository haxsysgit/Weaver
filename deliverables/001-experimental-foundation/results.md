# Results — Experimental Foundation

## Status

Implementation and the synthetic live smoke completed on 2026-07-28.
Independent reviews and the owner's final decision remain pending.

## Hypotheses

- A thin custom boundary will expose DeepSeek behavior with less experimental
  ambiguity than framework orchestration.
- The deterministic fake will exercise every receipt and normalization path
  needed by the synthetic smoke.
- Repeating an identical Flash prefix may produce cache-hit tokens, but a hit
  is not required because DeepSeek documents caching as best-effort.
- A named forced Pro function call will return a normalizable tool call whose
  argument string can be preserved byte-for-byte.

## Deterministic observations

- `uv lock --check` passed with 60 resolved packages.
- `uv run pytest -q` passed: 14 tests, including receipt-parent permissions and
  path-traversal rejection.
- `uv run python -m compileall src tests` passed.
- `uv run weaver --help` exposed only `doctor` and the admitted experiment
  command.
- `uv run weaver doctor` passed all required checks and made no network call.
- `uv run weaver experiment model-smoke --fake` completed three deterministic
  calls without constructing a live client.
- The fake receipt contained exactly the five required files. Its run directory
  was mode `0700`; files were mode `0600`; no API-key or
  `reasoning_content` field appeared.
- Visual inspection caught and corrected a broken first PNG render before the
  diagram was accepted.

## Live observations

One explicit, no-retry, synthetic suite completed:

| Call | Requested/returned model | Finish | Latency | Usage | Cache |
| --- | --- | --- | ---: | --- | --- |
| Flash JSON | `deepseek-v4-flash` | `stop` | 2861.283 ms | 79 prompt, 17 completion, 96 total | 0 hit, 79 miss |
| Repeated Flash JSON | `deepseek-v4-flash` | `stop` | 878.719 ms | 79 prompt, 17 completion, 96 total | 0 hit, 79 miss |
| Forced Pro tool | `deepseek-v4-pro` | `tool_calls` | 1462.902 ms | 344 prompt, 56 completion, 400 total | 0 hit, 344 miss |

Both Flash responses parsed to the requested JSON object. The Pro response
contained exactly one normalized `record_synthetic_marker` call with the
expected arguments. The argument string was preserved before validation.

The repeated Flash prefix produced no cache hit. This is an observation, not a
failure: DeepSeek documents cache matching as best-effort. Reasoning token
fields were absent (`null`) because the suite explicitly disabled thinking.

The live receipt contained the five required files with `0700/0600`
permissions and no credential or raw reasoning fields.

Private receipt:
`.weaver/runs/model-smoke-20260728T201616-639a074de9c1`

## Staged-file audit

Before both checkpoint commits, the staged path list was inspected and excluded
`.env`, `temp.md`, `.firecrawl/`, `.weaver/`, `.vscode/`, and `novels/`.
Credential-shaped-value scans over the staged diff returned no match. Plan 001
did not open novel files or copy novel source text into candidate files.

## Known limits

No result from this slice may be used as evidence of narrative or literary
quality.
