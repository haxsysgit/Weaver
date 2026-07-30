# Learning Note: Provider-neutral tool payload contract

## Gate status

**Confirmed by the owner on 2026-07-30.**

Plan 004 is accepted. Plan 005's deterministic build is admitted. Live access
still has a separate human gate after every deterministic check passes.

## Tiny model

Plans 003 and 004 test Weaver's parcel before it leaves the building. Plan 005
checks what the courier actually sends.

The OpenAI SDK turns Weaver's Python objects into HTTP JSON and parses a
streaming response back into objects. A fake model can say the internal object
looks fine while the real outgoing request is still missing a call ID or tool
array.

## Two levels of proof

### Deterministic SDK proof

Use the real OpenAI client and its real streaming parser. Replace only the
network transport with an in-process `httpx.MockTransport`.

This gives us the exact request body without paying for a call or relying on
the live service.

### Explicit live proof

After every deterministic check passes and the owner gives explicit permission,
run one synthetic round trip for each admitted model:

1. run `deepseek-v4-flash`;
2. run `deepseek-v4-pro`;
3. force one harmless synthetic tool call per model;
4. send a fixed synthetic result with the same call ID;
5. require a final assistant response;
6. record metadata in private state.

No novel or web content is involved.

Both models must pass. A failure in one model does not stop the other model from
running, but it does stop Plan 005 from passing.

## Confirmed boundary

### Accepted decisions

1. Shared Weaver messages stay provider-neutral. `ModelRequest`,
   `ModelMessage`, `ModelToolCall`, `ModelToolSchema`, `ModelResponse`, and
   `ExperimentResult` stay unchanged.
2. The round trip is owned by a named experiment runner. It does not change
   `ModelProvider`, `AgentSession`, `run_turn()`, tool policies, cancellation,
   or registry dispatch.
3. Thinking stays disabled on both requests with
   `ModelReasoning(enabled=False)`.
4. The live order is stable: Flash, then Pro.
5. Each model gets one attempt. The complete live run may make at most four API
   requests.
6. There are no retries, model fallbacks, library reads, web calls, or external
   tool calls.
7. The first request forces `synthetic_lookup`. The second request keeps the
   schema available but removes the forced choice.

### Deferred capability

DeepSeek's checked rule says a thinking-enabled tool loop must replay the
assistant's reasoning content before the linked tool result. Weaver does not
have provider-neutral reasoning replay state yet. Plan 005 therefore keeps
thinking disabled and defers thinking-enabled tool loops to a later admitted
plan.

### Adapter evidence

Pi commit `d7b02636a0c7e8e615d0cff70679d18d2ff59573` keeps provider
registration thin while shared adapters own message conversion. That supports
the same boundary here: provider registration selects the provider, while
Weaver's shared model layer owns neutral messages.

## What I understood

1. Plan 005 tests the provider boundary, not the tool's domain behavior.
2. The new deterministic test must use the real `openai.AsyncOpenAI` HTTP
   serializer and stream parser. Replacing `completions.create()` with another
   stub would repeat the current blind spot.
3. The test captures two outgoing JSON bodies for each model.
4. The second body must contain one assistant tool-call message followed by one
   tool-result message with the same call ID.
5. Tool name, type, raw synthetic arguments, content, and ordering are asserted
   exactly.
6. The mock server returns real server-sent-event shaped bytes, including split
   tool-call deltas.
7. Negative tests cover partial arguments, missing IDs, mismatched result IDs,
   and length-limited responses.
8. The default test suite makes no network call.
9. Fake and live experiment modes stay explicit. There is no fallback.
10. Live mode requires `DEEPSEEK_KEY` before creating a request or receipt.
11. One attempt per live model is recorded. A provider failure is evidence, not
    a reason for hidden retries.
12. Receipts may record IDs, hashes, finish reasons, usage, model, timing, and
    safe categories. They must not record credentials, novel content, chat
    transcripts, or raw reasoning.
13. Plan 005 does not build the user chat command. Plan 007 does that after the
    provider contract is proven.

## The exact round trip

```text
Request 1
  system
  user
  tool schema
        |
        v
Response 1
  assistant tool call
  id = call-synthetic-001
        |
        v
Request 2
  same system and user
  assistant tool call with that ID
  tool result linked to that ID
        |
        v
Response 2
  final assistant text
```

The synthetic tool can return `{"status":"ok"}`. Its meaning is irrelevant.
The linkage is what we are proving.

## Why both checks matter

The mock transport is repeatable and catches exact request drift on every test
run.

The live smoke catches provider-side rules our mock may not know, such as a
field combination DeepSeek rejects even though the OpenAI client serialized
it.

One without the other leaves a gap.

## What this plan will not prove

- a useful Weaver conversation;
- correct library inspection;
- cancellation of long-running real tools;
- provider reliability over time;
- retry or failover policy.

## Baseline recorded at the gate

- `uv run pytest -q`: 142 passed
- `uv pip check`: 64 packages compatible
- `uv run ruff check src/weaver tests`: one existing unused `ebooklib` import
  in `src/weaver/corpus/service.py`
- Installed SDK: `openai` 2.49.0

The owner approved removing that unused import as a Plan 005 scope exception so
the full lint floor can pass.

## Confirmation record

- Owner choice: confirmed
- Date: 2026-07-30
- Added constraints: both Flash and Pro must pass; thinking remains disabled;
  deterministic checks must finish before a separate live permission gate
