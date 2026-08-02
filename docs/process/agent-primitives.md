# Agent primitives map (2026-08-02)

The owner asked before Plan 011: are all the AI agent basics satisfied for
Weaver? This is the grounded answer, checked against current code, recorded
as a standing map. It is an observation record, not a plan and not a
decision. The owner decides what comes next.

## Satisfied (core loop, tested)

| Primitive | Where | State |
| --- | --- | --- |
| Model access + streaming | `src/weaver/model_layer/` (provider protocol, DeepSeek, fake, layer) | Done, both providers; TEXT_DELTA and REASONING_DELTA events |
| Message protocol | `src/weaver/agent/messages.py` (roles, tool calls, tool results, `project_messages`) | Done, pinned mapping table |
| Bounded agent loop | `src/weaver/agent/turn.py` (think, tool call, observe, repeat, capped steps, stop reasons) | Done |
| Tool registry, schemas, effect policy | `src/weaver/agent/tools.py` (READ / INTERNAL_WRITE / EXTERNAL_EFFECT gating) | Done, Plan 004 invariant holds |
| Context assembly | `src/weaver/conversation/assembler.py` (token budget, truncation, pinned owner, working brief) | Done |
| Durable conversation | `src/weaver/conversation/` (repository, coordinator, items, runs; SQLite + WAL) | Done |
| Cooperative cancellation | `cancel_event` end to end, stream cleanup on cancel | Done, deterministic tests |
| Error classification | auth / rate limit / timeout / provider / persistence categories | Done |
| Observability | `src/weaver/receipts.py`, token usage, run history, TUI footer meter | Done |

This is a complete chat agent skeleton. None of it is half-built.

## Partial (exists but not wired to rely on)

- **Crash recovery.** `continue_interrupted` / `retry_interrupted`
  (`coordinator.py:301-352`) exist but nothing consumes them. No startup
  scan of unfinished phases. A hard kill mid-turn leaves the run stuck in
  `queued` and the next send silently starts a fresh turn, re-invoking the
  model. Plan 006 audit deferred finding.
- **Timeout enforcement.** `timeout_seconds` recorded in manifests but never
  enforced with `asyncio.wait_for`. Plan 012 Slice 0 repairs this for the
  experiment.
- **Retry / backoff.** None. A transient 429 or connection blip ends the
  turn with MODEL_FAILED.
- **Token meter.** Shows the pre-turn snapshot, lags one turn. Cosmetic.

## Missing entirely

1. **Durable long-term memory.** `src/weaver/memory/__init__.py` is protocol
   stubs only (scenes, characters, world, meaning stores). Makes Weaver a
   reader instead of a chat window. First item on the functionality list.
2. **Compaction.** Long chats truncate oldest-first. Belongs with memory.
3. **Mid-tool cancellation.** `raise_if_cancelled` unimplemented in
   production handlers; a running export/build commit cannot be interrupted.
   Low urgency, tools are fast.

## Sequencing note

Plan 011 (web chat) does not depend on any missing primitive. But a browser
surface makes crashes normal (refresh, tab death, backend kill), and with
the recovery gap open a refresh mid-turn can silently double-invoke the
model. Startup recovery is the recommended plan before or inside the Plan 011
work. After 011 and 012, the functionality plans start with durable memory;
compaction rides along with it.
