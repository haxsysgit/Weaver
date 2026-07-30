# Results: Weaver model layer and preserved tool protocol

## Status

Implementation and the one accepted repair pass are complete.

The repaired candidate is `16957e2` with tree
`7d9e5951a95cd29bd233cd063896b21385de4a50`. Runtime repairs landed in
`d8a04a2`; `16957e2` corrects the direct reasoning-path test. Both reviewer
rechecks passed with no open blocker. The owner's final decision remains
pending.

## Hypothesis

A small Weaver-owned model layer plus lossless message projection can remove
provider knowledge from the agent and preserve exact tool exchanges without
adding a framework.

## Observations

1. Exact `(provider_id, model_id)` lookup routes models without putting model
   selection in `ModelRequest`.
2. Two providers can register the same model ID without collision.
3. One final `ModelResponse` owns assistant text and grouped tool calls.
4. DeepSeek translates its payload and ending inside its adapter.
5. Exact text JSON stays unchanged. Structured arguments become stable JSON.
6. The agent waits for the final response before validating or dispatching.
7. Call IDs must be non-empty and unique across the full saved conversation.
8. Canonical projection ignores individual call-evidence records, so one model
   step stays one assistant message.
9. Active dispatch checks registration, activity, JSON syntax, and object
   shape before handler execution.
10. Empty successful dictionaries reach the next model request as `{}`.
11. `length`, `error`, and `aborted` do not become completed answers.
12. Fake mode never constructs the live provider.

## Baseline

| Check | Exit | Observation |
| --- | ---: | --- |
| Focused tests before implementation | 0 | 15 passed |
| Full suite before implementation | 0 | 73 passed |
| Old scoped lint | 1 | 8 existing errors |
| Recorded source hashes | 0 | All seven matched |
| Plan 002 owner decision | 0 | Accepted and closed |

## Red-stage and intermediate failures

Failures were kept as evidence. No red stage made a network call.

| Stage | Exit | Observation |
| --- | ---: | --- |
| New model-layer tests before code | 2 | 2 collection errors because `weaver.model_layer` did not exist |
| First agent test draft | 1 | 26 failed and 1 passed; the draft also exposed missing `self` arguments and one helper named like a test |
| Corrected agent tests before migration | 1 | 26 failed on the old `run_turn()` and `AgentSession` signatures |
| Active-dispatch tests before enforcement | 1 | 10 failed because `active_names` was not accepted |
| First full suite after message migration | 1 | 99 passed and 1 old schema-field assertion failed |
| First privacy-scan shell form | 1 | zsh rejected the quoted pattern before scanning content |
| First repair test run | 1 | 57 passed and 1 test import was missing; runtime code was not implicated |

The schema assertion moved from the removed `input_schema` field to
`ModelToolSchema.parameters`. The privacy scan was rerun with a simple safe
pattern. The repair test import was added, then the full floor was rerun.

## Final verification record

| Command | Exit | Result |
| --- | ---: | --- |
| `uv run pytest -q tests/test_model_layer.py tests/test_deepseek_provider.py tests/test_agent_turn.py` | 0 | 58 passed in 0.86s |
| `uv run pytest -q` | 0 | 116 passed in 2.88s |
| Planned scoped `uv run ruff check ...` | 0 | All checks passed |
| `uv pip check` | 0 | 64 packages compatible |
| `git diff --check` | 0 | No whitespace errors |
| Shared-core provider-name search | 1 | No matches, expected exit 1 |
| Old-import search | 1 | No matches, expected exit 1 |
| Changed-path search for `novels/` | 1 | No matches, expected exit 1 |

The final tests are deterministic and offline. No live model request ran.

## Privacy and scope inspection

- No tracked file under `novels/` changed.
- No raw private novel file was opened during implementation or review.
- Full tests use synthetic temporary fixtures.
- No credential-shaped addition was found.
- Test credentials are explicit placeholders.
- Added `reasoning_content` references are one adapter field lookup and one
  stub field. No reasoning text enters a response, receipt, report, or log.
- The receipt regression checks owner-only permissions and reasoning removal.
- The old model modules were deleted with no compatibility wrappers.
- No library behaviour changed. Only accepted registry callers now pass their
  active names and read `ModelToolSchema.parameters`.
- The untracked `tempplan.md` appeared after the clean baseline, stayed
  untouched, and is not part of any candidate commit.

## Initial independent-review findings

Reviewer 1 found two protocol blockers:

1. call IDs were unique only inside one response;
2. a second terminal stream response was exposed before the layer raised.

Reviewer 2 found two evidence gaps:

1. results and rubric records were still pending;
2. provider timeout, connection, usage, and ephemeral-reasoning branches had
   lost direct regression tests.

The first evidence recheck found that the reasoning-only stub chunk was being
dropped by its test helper. The test passed without exercising the intended
branch, so its claim was not accepted.

## Accepted repair pass

Commit `d8a04a2`:

- rejects call-ID reuse across later model steps and later user turns;
- rejects a second terminal response before yielding it;
- adds direct tests for both protocol findings;
- restores timeout, connection, usage, and ephemeral-reasoning tests;
- raises the focused count from 52 to 58 and the full count from 110 to 116.

Commit `16957e2` completes the same repair pass:

- lets the stub emit a reasoning-only chunk;
- proves one reasoning delta exists in the ephemeral stream;
- proves that text is absent from the authoritative final response.

No second repair pass is admitted.

## Final review outcome

- Protocol reviewer: pass; both runtime findings closed
- Evidence reviewer: pass; both evidence findings closed
- New blockers from the repair: none
- Owner acceptance: pending

## Runtime and test hashes

```text
131a6ec4b80e03326ce1bfa5f3a73c08b8516cc8c0f763bfc7eb8f5917bc1fc4  src/weaver/__init__.py
c4fe0fd315b950c6dde8fb5a9cdab7a4467c7a46a25aa8dc5ebc26819b9c0e4a  src/weaver/agent/errors.py
a68d8d40a490f7066503ee01fc00bab5cf4779f89f596fce3e87275392508d2a  src/weaver/agent/messages.py
778f25b347f7fb7a79bad749335f83be82975e73eb73cf5fd8cdf6908504e8c8  src/weaver/agent/session.py
285c48bafeaa3884a1298041e4521e2b9604da8a0ec00667814a2a56193249cb  src/weaver/agent/tools.py
a14fd64b2a997925b64c8d3d6fbdcc1748355ce611a66a4fe0eacf58722dfe70  src/weaver/agent/turn.py
61039818940386af28b0c83996fc097712d567bfc9ae0c927f86a884540b783d  src/weaver/cli.py
7927c012aaff55431930f2882b6757a89a9757f0cadb01bbcc07649f566d42c4  src/weaver/doctor.py
dbbe48ef4ea36037b27296e4e99beb9fd2d135bab37ea1a6929c64cdabc5d85f  src/weaver/experiment.py
ac5803292f0559bd2427960ef5499ca44244e4977d8f593f5cbbe7a0276fda81  src/weaver/model_layer/__init__.py
48fc2d26a0eee2bebde7c5e9761d9a29c583c5c92448976fac306bd7e23ecdbd  src/weaver/model_layer/deepseek.py
5632946ae85702614955c181295692a0b577de7e418bc564e656eae015f4c242  src/weaver/model_layer/fake.py
45f5b52fe9f7a6969d23e77007c771edef976e3668c521575932348ce2d18121  src/weaver/model_layer/layer.py
85eabe7aeedb9118f0288c3a39e57e35f288840ed60e40eea8301cd68fb46c6a  src/weaver/model_layer/provider.py
a014bb5b7a5e44e6015a418be819c82e3c0a86aff20daad8d910fe129eddbf43  src/weaver/model_layer/types.py
720204656cef72c20028bb797d293a2edc6a2688833e5c6cfc38cdde0b3195ff  tests/test_agent_turn.py
8f27e6f8308d39c095a8c496f8e61e9b780f35d02e911d5d12dd6f9c4deb3f43  tests/test_cli.py
5455c1573692fa1a6d060bfc95ec3eb3ccf53bba05f9abb849f25bd6094b1b76  tests/test_config_and_fake.py
c1a906e44ea9e9eee492581bd10ebdf2f0cea635342c3b324d465b96c8148565  tests/test_corpus_outputs_and_agent.py
dedccce0b97d387092237bd037d8589441160bb6b309b1b8c1aee4d729263964  tests/test_deepseek_provider.py
93c94f72a6e08ce7240864f0964c665479bd16e1b2de01940544a7ec91078588  tests/test_model_layer.py
31057311c23cb09cdb7ca6a1eb5575497b9c30517ed83a089edee406673cef8a  tests/test_receipts.py
```

Deleted runtime files:

```text
src/weaver/client.py
src/weaver/deepseek.py
src/weaver/fake.py
src/weaver/model.py
tests/test_deepseek.py
```
