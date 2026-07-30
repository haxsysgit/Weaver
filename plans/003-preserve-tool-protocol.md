# Plan 003: Weaver model layer and preserved tool protocol

> **Executor instructions:** Read this whole plan before editing. Follow each
> step in order. Record failures as evidence. Do not touch private novel files
> or make live model calls.

## Status

- **State:** Accepted and closed on 2026-07-30
- **Priority:** P1
- **Effort:** M
- **Risk:** Medium
- **Depends on:** Plan 002, accepted and closed on 2026-07-30
- **Category:** Model boundary, correctness, and security
- **Planned at:** commit `dbe23f8`, clean working tree, 2026-07-30
- **Learning gate:** confirmed in
  `deliverables/003-preserve-tool-protocol/learning.md`
- **Final decision:** accepted on 2026-07-30 after implementation, evidence,
  independent review, and the architecture correction

## Goal

Replace the DeepSeek-shaped model code with a small Python version of Pi's
model-layer pattern.

Weaver speaks one internal protocol. DeepSeek is one provider adapter. A
future GPT, Claude, Grok, or local-model adapter must translate to the same
protocol without changing the agent loop or tools.

Plan 003 remains deterministic and offline. It does not add other live
providers, LangGraph, memory, chat UI, side-effect approval, or new library
behaviour.

## Confirmed baseline

- Repository: clean at `dbe23f8`
- Recorded source hashes: all matched before implementation
- Focused tests: 15 passed
- Full suite: 73 passed
- Existing scoped lint: 8 errors
- Plan 002: accepted and closed
- Owner confirmation: 2026-07-30

## Accepted decisions

1. Weaver owns the shared model protocol.
2. DeepSeek-specific IDs, SDK types, and payload fields stay inside its
   adapter or the CLI edge.
3. `ModelRequest` describes a request. It does not choose a provider.
4. A selected `ModelSpec` supplies the default output-token limit unless the
   caller explicitly overrides it.
5. Tool arguments remain JSON text until validation at dispatch.
6. Exact provider-supplied JSON text is preserved. Structured provider
   arguments become stable JSON text.
7. Blank or malformed JSON is never silently repaired.
8. One final `ModelResponse` is authoritative. Tools never dispatch from
   partial stream events.
9. Reasoning text stays ephemeral and out of messages, receipts, reports, and
   logs.
10. Other live providers are deferred.

## Model-layer contract

Create `src/weaver/model_layer/` with:

- `ModelSpec`: provider ID, exact model ID, API family, default output-token
  limit, and reasoning support.
- `ModelToolCall`: call ID, tool name, and `arguments_json`.
- `ModelMessage`: provider-independent system, user, assistant, and tool
  messages.
- `ModelRequest`: messages, tool schemas, response format, optional token
  override, and reasoning settings.
- `ModelResponse`: one authoritative assistant message plus model metadata,
  usage, normalized stop reason, raw provider stop reason, and safe error
  category.
- `ModelStopReason`: `stop`, `tool_use`, `length`, `error`, or `aborted`.
- `ModelProvider`: the Python protocol implemented by provider adapters.
- `ModelLayer`: provider registration, exact model resolution, streaming, and
  completion.

The shared call shape is:

```python
model = model_layer.get_model("deepseek", "deepseek-v4-pro")
response_stream = model_layer.stream(model, request, cancel_event)
response = await model_layer.complete(model, request, cancel_event)
```

`run_turn()` and `AgentSession` receive both `ModelLayer` and `ModelSpec`. They
do not hardcode DeepSeek, `pro`, `flash`, or provider payload terms.

## Provider rules

Every provider adapter must:

- translate Weaver messages and tool schemas into its wire format;
- assemble the final response after streaming;
- return tool calls through the authoritative final response only;
- normalize its ending into `ModelStopReason`;
- keep the original ending in `raw_stop_reason`;
- preserve exact tool-argument JSON when supplied as text;
- create stable JSON text when arguments arrive as an object;
- reject blank or malformed JSON without repair;
- keep reasoning text ephemeral.

DeepSeek remains the only live provider. Its catalogue contains the admitted
Flash and Pro model IDs. The fake provider stays network-free and can stand in
for any registered provider during tests.

Delete these modules after every caller has moved:

- `src/weaver/model.py`
- `src/weaver/client.py`
- `src/weaver/deepseek.py`
- `src/weaver/fake.py`

Do not leave compatibility wrappers. `weaver.__init__` may export selected
types from the new model layer.

## Tool exchange contract

Canonical projection returns `ModelMessage` objects.

`AssistantMessage` groups all `tool_calls` from one model step:

```text
assistant(content, all tool calls)
tool result linked to call 1
tool result linked to call 2
next assistant response
```

Individual `ToolCallMessage` records remain execution evidence. Projection
ignores them, so they never create duplicate assistant messages.

The loop must:

1. Wait for the final model response.
2. Require non-empty, unique call IDs.
3. Require non-empty tool names.
4. Preserve `arguments_json` exactly.
5. Save the grouped assistant message before execution records.
6. Link every result to the matching call ID.
7. Serialize every non-`None` success, including `{}`.
8. Reject blank, malformed, incomplete, or duplicate calls before handlers
   start.

Terminal rules:

- `stop`: save a completed assistant response and finish.
- `tool_use`: require at least one safe call, then dispatch.
- `length`: save text as interrupted, run no tools, and return `INCOMPLETE`.
- `error`: return `MODEL_FAILED`.
- `aborted`: return `INTERRUPTED`.
- A stop reason that disagrees with the response shape fails as a safe model
  protocol error.

## Active dispatch contract

Active names are a required `dispatch()` argument. Checks happen in this
order:

1. Is the tool registered?
2. Is the registered tool active?
3. Is the argument string valid JSON?
4. Is the decoded value an object?
5. Run the handler.

Expected errors:

- unknown name: `unknown_tool`;
- registered but inactive: `inactive_tool`;
- blank or malformed JSON: `malformed_arguments`;
- valid non-object JSON: `invalid_arguments`.

Inactive handlers stay at zero starts. Accepted library-tool behaviour and
files under `novels/` do not change.

## Implementation slices

### 1. Record the admitted correction

Update this plan, the learning note, deliverables README, and plan index.

Commit: `record plan 003 model layer decisions`

### 2. Build the model layer test-first

Add failing tests for registry behaviour, exact lookup, duplicate IDs across
providers, early unknown-model failures, default tokens, fake determinism,
terminal responses, and normalized versus raw stop reasons.

Build the shared types, provider protocol, registry, fake provider, and
DeepSeek provider with its small catalogue.

DeepSeek ending map:

- `stop` to `stop`;
- `tool_calls` or `function_call` to `tool_use`;
- `length` to `length`;
- cancellation to `aborted`;
- unknown or rejected endings to `error`.

Commit: `add the Weaver model layer`

### 3. Move the accepted foundation

Move model smoke, CLI, doctor checks, receipts, public exports, and tests.

Preserve:

- fake mode never constructs a network provider;
- live mode requires explicit DeepSeek credentials;
- no provider fallback;
- Flash JSON, repeated Flash JSON, and Pro tool-call smoke checks;
- private receipts with no credentials or reasoning text;
- existing historical receipts unchanged.

Commit: `move existing model calls onto the model layer`

### 4. Preserve complete tool exchanges

Move the agent runtime to the selected `ModelSpec` and final
`ModelResponse`. Preserve grouped calls, linked results, replay, exact JSON,
safe terminal states, and empty successful dictionaries.

Commit: `preserve tool calls across model turns`

### 5. Enforce active tools

Make active names required at dispatch and update every accepted caller.

Commit: `enforce active tools at dispatch`

## Verification floor

```bash
uv run pytest -q \
  tests/test_model_layer.py \
  tests/test_deepseek_provider.py \
  tests/test_agent_turn.py

uv run pytest -q

uv run ruff check \
  src/weaver/model_layer \
  src/weaver/agent \
  src/weaver/experiment.py \
  src/weaver/cli.py \
  src/weaver/config.py \
  src/weaver/doctor.py \
  tests/test_model_layer.py \
  tests/test_deepseek_provider.py \
  tests/test_agent_turn.py \
  tests/test_config_and_fake.py \
  tests/test_receipts.py \
  tests/test_cli.py \
  tests/test_corpus_outputs_and_agent.py

uv pip check
git diff --check
```

Also verify:

```bash
rg -n 'DeepSeek|deepseek|model="pro"|model="flash"' \
  src/weaver/agent \
  src/weaver/model_layer/types.py \
  src/weaver/model_layer/provider.py \
  src/weaver/model_layer/layer.py

rg -n 'weaver\.(model|client|deepseek|fake)' src tests
```

Both searches must return no shared-core or old-import matches.

Record commands, exit codes, test counts, changed-file hashes, and failures in
Plan 003 results. Scan the candidate diff for credentials, private prose, raw
reasoning, and changes under `novels/`.

## Independent review

Freeze the passing candidate.

1. Reviewer 1 checks the model boundary, message protocol, and active dispatch.
2. Reviewer 2 checks tests, privacy, scope, and regression evidence.
3. Allow one accepted repair pass.
4. Rerun the full command floor after a repair.
5. Both reviewers check the repaired candidate.

The final owner decision remains a separate human gate.

## Done criteria

- [x] Owner confirmed Plan 003 learning and model-layer corrections.
- [x] Plan 002 has a recorded final owner decision.
- [x] Model lookup uses exact provider and model IDs.
- [x] Agent code has no provider knowledge.
- [x] Final model responses are authoritative.
- [x] Tool calls survive the next model request and later replay.
- [x] Multiple calls stay grouped under one assistant message.
- [x] Inactive registered tools cannot execute.
- [x] Empty dictionaries remain successful tool results.
- [x] All five normalized stop reasons behave safely.
- [x] Focused tests, full tests, scoped lint, and package check pass.
- [x] No network call or novel access occurred.
- [x] Two independent reviews have no open blocker.
- [x] Editable architecture and rendered preview are delivered and inspected.
- [ ] The owner records Plan 003's final decision.

## STOP conditions

Stop and report if:

- Plan 002 is not closed by an owner decision;
- recorded source hashes differ before runtime implementation;
- provider SDK objects must enter Weaver's shared message types;
- the work requires a storage migration, library behaviour change, LangGraph,
  or a chat entry point;
- focused verification fails twice after one clear repair attempt;
- private prose, a credential value, or raw reasoning enters public output.

## Deferred work

Pi's full provider catalogue, pricing, images, OAuth, retries, model refresh,
compatibility rules, other live providers, cancellation, and side-effect
approval remain outside Plan 003.

Existing internal `corpus` symbols remain as Weaver's private-library
implementation until a later admitted plan safely renames them.
