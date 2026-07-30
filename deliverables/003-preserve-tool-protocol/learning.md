# Learning Note: Weaver model layer and preserved tool protocol

## Gate status

**Confirmed by the owner on 2026-07-30.**

This confirmation admits Plan 003 implementation. It does not accept the
future implementation. The final owner decision remains pending after tests,
inspection, and independent review.

## Tiny model

Weaver needs one plug shape for models.

The agent sends Weaver messages and gets one Weaver response. A DeepSeek
adapter handles DeepSeek's exact payload. A future GPT or local adapter would
handle its own payload behind the same boundary.

Tool calls work like claim tickets. The model gives each call an ID. The tool
result returns with that same ID, so the next model request can match every
answer to its request.

## Observation

The old types look provider-neutral, but selection and stream assembly are
still shaped around DeepSeek. The agent loop also loses assistant tool-call
fields during projection, and the registry can run a registered tool that was
not active for the turn.

## Accepted decisions

1. Copy Pi's separation of model specs, providers, shared messages, normalized
   endings, and one authoritative final response into readable Python.
2. Weaver's shared request does not select a provider.
3. The caller selects an exact `(provider_id, model_id)` through `ModelLayer`.
4. `run_turn()` and `AgentSession` receive `ModelLayer` and `ModelSpec`.
5. DeepSeek remains the only live adapter in this plan.
6. The fake adapter remains deterministic and network-free.
7. Tool arguments stay as JSON text. Exact provider text is preserved.
8. Structured arguments become stable JSON text.
9. Blank or malformed JSON is rejected, never repaired.
10. Reasoning text stays ephemeral.
11. One assistant step stores all its tool calls together before any handler
    runs.
12. Active tools are checked again at dispatch.
13. `length`, `error`, and `aborted` are not completed answers.

## Hypothesis

A small model layer plus lossless message projection can remove provider
knowledge from the agent and preserve a complete model-to-tool-to-model
exchange without adding a framework.

## What Plan 003 will prove

- exact provider and model lookup;
- two providers may use the same model ID without collision;
- unknown selections fail before a request starts;
- fake and DeepSeek adapters return the same response shape;
- one and many tool calls retain IDs, names, and exact JSON;
- later history replay keeps the same exchange;
- inactive, malformed, and incomplete calls never start handlers;
- existing model smoke and private receipts still work offline.

## What it will not prove

- another live provider;
- a real DeepSeek HTTP exchange;
- cancellation of a running tool;
- side-effect approval;
- memory, LangGraph, or chat UI;
- new private-library behaviour.

## Confirmed baseline

- Clean repository at `dbe23f8`
- Seven recorded source hashes matched
- Focused tests: 15 passed
- Full suite: 73 passed
- Scoped lint: 8 existing errors

## Confirmation record

- Owner choice: confirm Plan 003 with the Pi-inspired model-layer correction
- Date: 2026-07-30
- Added constraints: preserve raw JSON, keep other live providers deferred,
  use the selected model's token default, and keep the final owner gate pending
