# Plan 005: Provider-neutral tool payload contract

> **Executor instructions:** Execute only after Plans 003 and 004 are accepted.
> The deterministic SDK-boundary test comes before any live call. Live mode
> must be explicit, must never fall back to fake mode, and gets one attempt per
> model.

## Status

- **State:** Accepted by the owner on 2026-07-30
- **Priority:** P1
- **Effort:** M
- **Risk:** Low for deterministic work; medium for live-provider uncertainty
- **Depends on:** Plan 004 accepted
- **Category:** Tests and provider integration
- **Planned at:** commit `96d0729`, dirty working-tree snapshot, 2026-07-30
- **Learning gate:** `deliverables/005-provider-tool-contract/learning.md`

## Goal

Prove that Weaver's neutral messages survive a complete tool round trip through
the actual OpenAI-compatible SDK path:

```text
request -> assistant tool call -> linked tool result -> final answer
```

DeepSeek is today's live provider. No shared Weaver type gains a
DeepSeek-specific field. Thinking stays disabled throughout this plan. Both
`deepseek-v4-flash` and `deepseek-v4-pro` must pass before Plan 005 can be
accepted.

## Why this matters

The current fake model receives `ModelRequest` objects directly. It can pass
even when the SDK payload sent to DeepSeek is malformed.

The existing adapter tests capture keyword arguments using a stub
`completions.create()` method. That bypasses the OpenAI client's HTTP
serialization and streaming parser. This plan tests the boundary Weaver
actually uses.

## Current state

- `src/weaver/model_layer/deepseek.py` streams DeepSeek-compatible responses
  and converts neutral messages into provider payloads.
- `tests/test_deepseek_provider.py` uses a stub completion object.
- `tests/test_agent_turn.py:128-154` proves a fake tool round trip, but does not
  inspect an SDK HTTP body.
- `src/weaver/experiment.py` and `src/weaver/receipts.py` contain the admitted
  fake/live experiment and private receipt patterns from Plan 001.
- `src/weaver/cli.py:40-47` currently admits only `model-smoke`.

Plans 003 and 004 are accepted. Their request types, turn loop, tool policies,
and cancellation behavior stay unchanged.

The confirmed baseline is 142 passing tests, 64 compatible packages, OpenAI
2.49.0, and one existing unused `ebooklib` import. The owner approved removing
that import as a narrow lint cleanup.

DeepSeek's checked rule requires reasoning replay when thinking is enabled
during tool loops. That capability is deferred. Both requests use
`ModelReasoning(enabled=False)`.

Pi commit `d7b02636a0c7e8e615d0cff70679d18d2ff59573` supports thin
provider registration with shared adapters owning message conversion.

## Contract to prove

### Deterministic SDK-boundary test

Use the real `openai.AsyncOpenAI` client with `httpx.MockTransport`. Do not
replace `chat.completions.create()` with a home-made stub in this new test.

The transport should:

1. capture the first JSON request body;
2. return a valid synthetic server-sent-event stream containing one tool call;
3. capture the second JSON request body;
4. return a valid synthetic final-text stream.

Assert the second request contains, in order:

```json
{
  "role": "assistant",
  "content": null,
  "tool_calls": [
    {
      "id": "call-synthetic-001",
      "type": "function",
      "function": {
        "name": "synthetic_lookup",
        "arguments": "{\"item\":\"status\"}"
      }
    }
  ]
}
```

followed by:

```json
{
  "role": "tool",
  "tool_call_id": "call-synthetic-001",
  "content": "{\"status\":\"ok\"}"
}
```

Use synthetic strings only. Test exact linkage and ordering, not incidental SDK
headers.

### Explicit live smoke

Add `provider-tool-contract` as an admitted experiment. It should:

1. require `--live` and `DEEPSEEK_KEY` for a real request;
2. force one harmless synthetic tool call through `tool_choice`;
3. send the synthetic tool result back in a second request;
4. require a final assistant response;
5. run Flash and then Pro, continuing to Pro if Flash fails;
6. record model ID, provider, finish reasons, call-ID presence, argument hash,
   usage, timing, final-text metadata, outcome, and safe error category in
   ignored owner-only state;
7. keep `reasoning_content` ephemeral;
8. never access the private library or web.

Provide `--fake` for deterministic CLI testing. Fake and live modes must be
visibly different.

Each model gets one attempt and at most two requests. The full live command can
make at most four API requests. There are no retries or fallbacks.

## Scope

### In scope

- `tests/test_provider_tool_contract.py` (new)
- `tests/test_deepseek_provider.py`, only for shared adapter assertions if needed
- `src/weaver/experiment.py`
- `src/weaver/receipts.py`, only if the existing safe schema needs a named
  contract experiment field
- `src/weaver/cli.py`
- `tests/test_cli.py`
- a new focused experiment test file if needed
- Plan 005 deliverables and `plans/README.md`

### Out of scope

- changing `ModelProvider`, `AgentSession`, `run_turn()`, shared model types,
  tool semantics, cancellation, or registry dispatch from Plans 003 and 004;
- private-library, Firecrawl, or novel access;
- chat UI;
- LangGraph;
- retries;
- storing prompts, final prose, credentials, or raw reasoning in public
  evidence;
- dependency upgrades unrelated to the test.

## Commands

| Purpose | Command | Expected result |
| --- | --- | --- |
| Contract test | `uv run pytest -q tests/test_provider_tool_contract.py` | The actual SDK emits two correctly linked request bodies for both models |
| Focused suite | `uv run pytest -q tests/test_provider_tool_contract.py tests/test_deepseek_provider.py tests/test_cli.py tests/test_receipts.py` | All focused tests pass |
| Full tests | `uv run pytest -q` | All tests pass |
| Lint | `uv run ruff check src/weaver tests` | Exit 0 |
| Package check | `uv pip check` | All installed packages compatible |
| Explicit fake use | `uv run weaver experiment provider-tool-contract --fake` | Pass, private receipt path printed |
| Missing live key | `env -u DEEPSEEK_KEY uv run weaver experiment provider-tool-contract --live` | Refuses before client or receipt creation |
| Explicit live use | `uv run weaver experiment provider-tool-contract --live` | Both round trips pass, or both outcomes are recorded without retry |

The live command runs only after deterministic verification and explicit owner
admission for live access.

## Steps

### Step 1: Build the real SDK transport test

Create a small helper that returns standards-shaped SSE bytes. Keep it in the
test file. Capture request JSON through `httpx.Request.content`.

Use the actual `DeepSeekProvider` with an injected `AsyncOpenAI` configured
with the mock transport. Run the provider-neutral experiment runner with one
synthetic tool schema.

Assert both outgoing payloads and the final `TurnResult`.

**Verify:** the new contract test passes and makes zero network calls.

### Step 2: Add negative payload cases

Test that:

- missing call IDs do not execute;
- `finish_reason="length"` with partial arguments does not execute;
- tool-result IDs must match the assistant call;
- raw JSON argument strings are preserved;
- no `reasoning_content` field reaches a request, receipt, or result.

Do not assert SDK implementation details unrelated to the provider contract.

**Verify:** contract and adapter tests pass.

### Step 3: Add the synthetic experiment

Add a named experiment function with one fake path and one live path. Reuse the
Plan 001 receipt writer and redaction checks. Keep tool data synthetic.

The first request may force `synthetic_lookup`. The second request must use the
same Weaver `Message` and `ToolCall` types tested in Step 1.

**Verify:** fake CLI use passes without credentials or network.

### Step 4: Run deterministic checks before live use

Run the contract test, focused suite, full suite, lint, and package check.
Audit the generated fake receipt for credentials, reasoning, and unexpected
text fields.

**Verify:** all deterministic gates pass.

### Step 5: Run one explicit attempt per model

Run the live command only with owner admission and an environment credential.
Do not echo the credential. Run Flash, then Pro, once each, with no retry or
fallback.

If DeepSeek rejects the payload, record the exact safe provider category and
the metadata needed to inspect the request shape. Keep any raw provider body in
ignored private state only.

**Verify:** a final assistant response is received, or a single provider failure
is honestly recorded.

### Step 6: Review the frozen evidence

Record deterministic and live observations separately. A live provider failure
does not permit weakening the deterministic protocol without a new hypothesis.

## Test plan

Required cases:

- real SDK HTTP body for the first and second request;
- real SDK streaming parser for tool-call deltas;
- exact assistant/tool ordering and call linkage;
- raw synthetic arguments unchanged;
- partial and missing-ID refusal;
- fake CLI success without credentials;
- live CLI refusal without credentials and without a receipt;
- receipt redaction and absence of raw reasoning.

## Independent review

1. Provider reviewer checks payload shape against DeepSeek's accepted
   OpenAI-compatible contract and verifies the real SDK was not stubbed away.
2. Evidence reviewer checks fake/live separation, receipt privacy, and exact
   test coverage.
3. One repair pass is allowed.
4. Both reviewers recheck the repaired candidate.

## Done criteria

- [x] The owner confirmed Plan 005 `learning.md`.
- [x] Plan 004 is accepted.
- [x] A deterministic test passes through the real SDK HTTP serializer and
      streaming parser.
- [x] The captured second request has linked assistant and tool messages.
- [x] Negative protocol cases are covered.
- [x] Fake mode passes without network or credentials.
- [x] Live mode is explicit and has no fallback.
- [x] One admitted attempt per live model is recorded.
- [x] Both live models pass.
- [x] Receipts contain no credential, library content, or raw reasoning.
- [x] Full tests, lint, and package checks pass.
- [x] Editable Draw.io source and rendered preview are linked and inspected.
- [x] Reviews have no open blocker.
- [x] The owner recorded Plan 005's final decision.

## STOP conditions

Stop and report if:

- Plan 004 is not accepted;
- the test replaces the OpenAI SDK serializer with a stub;
- a live call is needed before deterministic tests pass;
- the provider requires storing raw reasoning;
- the experiment needs private-library or web content;
- a provider failure tempts an unrecorded retry or model fallback;
- request evidence would expose a credential value;
- the fix requires changing accepted tool-policy behavior.

## Maintenance notes

Run this contract suite whenever `openai`, DeepSeek payload mapping, message
types, or the conversation loop changes. Keep the HTTP assertions about
Weaver's required fields so normal SDK header changes do not create noise.
