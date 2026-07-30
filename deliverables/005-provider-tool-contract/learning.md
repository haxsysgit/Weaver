# Learning Note: Prove the DeepSeek tool payload contract

## Gate status

**Pending owner confirmation.**

Plan 005 starts only after Plan 004 is accepted.

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

After every deterministic check passes, run one synthetic DeepSeek exchange:

1. force a harmless synthetic tool call;
2. send a fixed synthetic result with the same call ID;
3. require a final assistant response;
4. record metadata in private state.

No novel or web content is involved.

## What I understood

1. Plan 005 tests the provider boundary, not the tool's domain behavior.
2. The new deterministic test must use the real `openai.AsyncOpenAI` HTTP
   serializer and stream parser. Replacing `completions.create()` with another
   stub would repeat the current blind spot.
3. The test captures two outgoing JSON bodies.
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
11. One live attempt is recorded. A provider failure is evidence, not a reason
    for hidden retries.
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

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections or added constraints: pending

Confirming approves this test and evidence shape. Live access still needs an
explicit admission during Plan 005 execution.
