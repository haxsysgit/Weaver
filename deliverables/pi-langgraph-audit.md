# Pi vs LangGraph Architecture Audit

**Date:** 2026-08-02  
**Status:** Complete. Read-only source audit. No files modified.  
**Confidence:** High on architecture. Medium on Pi session-manager details (sampled key sections, not all 1712 lines).  
**Caveat:** LangGraph tests could not run — test conftest.py requires `redis` module. Pi agent-loop tests: 21 passed, 0 failed. Weaver tests: 73 passed.

---

## PART 0 — VERSION VERIFICATION

### Pi

| Check | Result |
|-------|--------|
| Pinned commit | `d7b02636` — Merge PR #7272 (preserve-original-stop-reason) |
| Latest tag | `v0.82.1` (at `b4f29368`) |
| Commits after tag | 10 commits (stop-reason fixes, docs, error message copy) |
| Remote ahead | 0 (we have the latest) |
| Changelog | `packages/agent/CHANGELOG.md` exists |
| Is latest release? | **YES** — tag and remote are at same commit |

### LangGraph

| Check | Result |
|-------|--------|
| Pinned commit | `41341457` — "release(langgraph): 1.2.10 (#8462)" |
| Tag | `1.2.10` (exact match) |
| Commits after tag | 0 |
| Remote ahead | 0 |
| Changelog | `libs/sdk-py/CHANGELOG.md` (SDK, not core) — no core CHANGELOG found |
| Is latest release? | **YES** |

---

## PART 1 — PI INTERNALS AUDIT

### 1.1 — Core Agent Loop (`packages/agent/src/agent-loop.ts`, 792 lines)

**a) Two public entry points**

- `runAgentLoop(prompts, context, config, emit, signal, streamFn)` — line 83. Starts a NEW loop with prompt messages. Adds prompts to context, emits `agent_start` → `turn_start` → message events, then calls `runLoop()`.

- `runAgentLoopContinue(context, config, emit, signal, streamFn)` — line 109. CONTINUES from existing context. **Does not add new messages.** Validates last message is not `assistant` role. Used for retries.

The wrapper functions `agentLoop()` (line 29) and `agentLoopContinue()` (line 54) wrap these in `EventStream` objects for consumer convenience.

**b) The private `runLoop()` — two nested loops (lines 155-275)**

```
while (true) {                    // OUTER: follow-up loop
    while (hasMoreToolCalls       // INNER: steering + tool loop
           || pendingMessages > 0) {
        // 1. drain steering messages into context
        // 2. stream assistant response
        // 3. execute tool calls (sequential or parallel)
        // 4. call prepareNextTurn hook
        // 5. check shouldStopAfterTurn
        // 6. drain steering messages again
    }
    // Agent WOULD stop here
    // Check for follow-up messages
    if (followUpMessages > 0) { pendingMessages = followUps; continue; }
    break;
}
```

**Why two loops?** Steering messages interrupt mid-work (injected before next LLM call). Follow-up messages wait until the agent would *naturally stop* (no more tool calls, no steering). This is a queuing policy distinction: `steer()` = "inject now," `followUp()` = "run after done."

**Steering vs follow-up:**
- `getSteeringMessages` — called after each turn inside the inner loop (line 239). Drained before next LLM call.
- `getFollowUpMessages` — called at the outer loop boundary (line 250), only when inner loop has no tool calls AND no steering.

**prepareNextTurn:** Fires after `turn_end` (line 227). Can replace `context`, `model`, or `thinkingLevel` for the next provider request.

**shouldStopAfterTurn:** Fires after prepareNextTurn (line 233). If returns `true`, emits `agent_end` and exits immediately.

**Stop condition:** `agent_end` is emitted and the function returns when:
- `message.stopReason === "error"` or `"aborted"` (line 191)
- `shouldStopAfterTurn` returns true (line 233)
- Both loops exhaust naturally (line 257)

**c) `streamAssistantResponse()` (lines 281-371)**

AgentMessage[] → provider Message[] conversion happens via `config.convertToLlm()` (line 300). This is configurable; the default in `agent.ts:28` filters to only `user`, `assistant`, and `toolResult` roles.

Event order:
1. `message_start` — with partial message from stream (or final if no partial)
2. `message_update` — for every stream delta (text, thinking, toolcall)
3. `message_end` — with **`response.result()`** (the finalized message, NOT the last delta)
4. Returns the finalized `AssistantMessage`

The critical insight at line 347: `const finalMessage = await response.result()` — the stream yields partial updates, but the authoritative message comes from `.result()`, which the provider layer finalizes.

**d) Tool execution path (lines 374-707)**

**Truncated message handling** (`failToolCallsFromTruncatedMessage`, line 389):
When `message.stopReason === "length"`, ALL tool calls in the message are failed with an error result ("response hit the output token limit"). The model must re-issue them. This is crucial: stream-finalized tool-call arguments in a truncated message can parse and validate but be silently incomplete.

**Sequential vs parallel decision** (line 443):
- `config.toolExecution === "sequential"` → sequential
- Any tool has `executionMode === "sequential"` → sequential
- Otherwise → parallel

**beforeToolCall** (line 530): Called after argument validation. Can `{ block: true }` to prevent execution. Receives abort signal.

**afterToolCall** (line 584): Called after tool finishes. Can override `content`, `details`, `isError`, `usage`, `terminate`.

**Tool result ordering in parallel** (lines 462-493): `Promise.all()` runs all tool calls. Results are collected in original source order, but `tool_execution_end` is emitted in completion order.

**Abort propagation:** The `signal?.aborted` check happens after every tool call (line 420) and at multiple points in prepare/execute/finalize.

### 1.2 — Agent State and Cancellation (`packages/agent/src/agent.ts`, 368 lines)

**a) AgentState fields (types.ts, lines 283-306):**
```
systemPrompt: string
model: Model<any>
thinkingLevel: ThinkingLevel
tools: AgentTool<any>[]       (get/set with copy-on-assign)
messages: AgentMessage[]       (get/set with copy-on-assign)
isStreaming: boolean           (true until agent_end listeners settle)
streamingMessage?: AgentMessage
pendingToolCalls: ReadonlySet<string>
errorMessage?: string
```

Plus mutable internal state in `agent.ts:52` (`MutableAgentState`) with the same fields but writable.

**b) Agent.prompt() end-to-end (agent.ts, lines 258-267)**

1. **Overlap prevention:** Throws `"Agent is already processing"` if `activeRun` exists (line 260).
2. **Input normalization:** `normalizePromptInput()` (line 284) — string → `[{role: "user", content: [{type:"text", text}]}]`; array passes through; single message wraps in array.
3. **Execution:** `runWithLifecycle()` creates `AbortController`, sets `isStreaming=true`, calls `runAgentLoop()`, then `finishRun()`.
4. **Error/abort:** `handleRunFailure()` (line 338) emits a synthetic failed `message_start` → `message_end` → `turn_end` → `agent_end` sequence. Sets `stopReason: "aborted"` or `"error"`.

**c) Cancellation**

- **AbortController creation:** `runWithLifecycle()` (line 325) creates a new `AbortController` per run. Shared via `activeRun.abortController.signal`.
- **Agent.abort():** Calls `this.activeRun?.abortController.abort()` (line 250). The signal propagates through the loop's `cancel_event` checks.
- **Agent.waitForIdle():** Returns `activeRun.promise` (line 254). This resolves AFTER `agent_end` listeners settle and `finishRun()` fires. Guarantees: no listeners are still running, `isStreaming` is false, state is consistent.

**d) Event subscriptions**

- **subscribe() returns:** An unsubscribe function `() => void` (line 173).
- **Listener order:** Await-in-order — `for (const listener of this.listeners) { await listener(event, signal); }` (line 385).
- **Effect on waitForIdle:** Each listener is awaited during `processEvents()`. Since `agent_end` is the last event and listeners are awaited before `finishRun()`, `waitForIdle()` guarantees all listeners completed.

### 1.3 — Types and Contracts (`packages/agent/src/types.ts`, 347 lines)

**a) AgentMessage:** Union of `Message` (from pi-ai) + `CustomAgentMessages[keyof CustomAgentMessages]`. This is an extensible discriminated union — apps extend via TypeScript declaration merging.

**b) AgentContext (line 311):**
```
systemPrompt: string
messages: AgentMessage[]
tools?: AgentTool<any>[]
```
Owned by the caller. The Agent snapshots it via `createContextSnapshot()` (agent.ts:296).

**c) AgentEvent (lines 320-341):**
| Event | When |
|-------|------|
| `agent_start` | Loop begins |
| `agent_end` | Loop ends (final event) |
| `turn_start` | New turn begins |
| `turn_end` | Turn completes (after tool results) |
| `message_start` | Any message added (user, assistant, toolResult) |
| `message_update` | Streaming delta (assistant only) |
| `message_end` | Message finalized |
| `tool_execution_start` | Tool begins executing |
| `tool_execution_update` | Tool streams partial result |
| `tool_execution_end` | Tool completes |

**d) AgentLoopConfig hooks (lines 191-275):**
| Hook | Purpose |
|------|---------|
| `convertToLlm` | AgentMessage[] → Message[] for provider |
| `transformContext` | Pre-convert transform (pruning, injection) |
| `getApiKey` | Dynamic API key resolution |
| `shouldStopAfterTurn` | Graceful stop after current turn |
| `prepareNextTurn` | Replace context/model before next turn |
| `getSteeringMessages` | Inject messages mid-work |
| `getFollowUpMessages` | Inject messages after agent would stop |
| `toolExecution` | "sequential" or "parallel" |
| `beforeToolCall` | Block/allow before execute |
| `afterToolCall` | Override result after execute |

**e) AgentTool vs provider Tool** (line 292):
`AgentTool` extends `Tool<TSchema>` (from pi-ai) adding:
- `label: string` — UI display
- `prepareArguments?: (args: unknown) => Static<TParameters>` — compat shim before validation
- `execute: (toolCallId, params, signal?, onUpdate?) => Promise<AgentToolResult>` — the actual implementation
- `executionMode?: ToolExecutionMode` — per-tool override

Provider-level `Tool` only has name, description, parameters (the schema). AgentTool adds execution.

### 1.4 — Sessions and Persistence (`packages/coding-agent/src/core/session-manager.ts`, 1712 lines)

**a) SessionEntry variants (lines 48-153):**
```
SessionMessageEntry     — type:"message", contains AgentMessage
ThinkingLevelChangeEntry — type:"thinking_level_change", thinkingLevel
ModelChangeEntry        — type:"model_change", provider+modelId
CompactionEntry<T>      — type:"compaction", summary, firstKeptEntryId, tokensBefore
BranchSummaryEntry<T>   — type:"branch_summary", fromId, summary
CustomEntry<T>          — type:"custom", customType, data (NOT in LLM context)
CustomMessageEntry<T>   — type:"custom_message", customType, content (IN LLM context)
LabelEntry              — type:"label", targetId, label
SessionInfoEntry        — type:"session_info", name
```

All have `id`, `parentId`, `timestamp`.

**b) Session tree model:**
- `id` + `parentId` = tree. `leafId` tracks the "current leaf."
- `branch()` creates a new branch from any entry, without deleting the old path.
- `appendCompaction()` adds a new entry pointing to `firstKeptEntryId` without removing older entries. Non-destructive.

**c) Context reconstruction (`buildSessionContext`, line 500):**
Walks from leaf to root via `parentId` links. Compaction entries stop the walk: entries BEFORE the compaction are not included. The compaction summary replaces them. `buildContextEntries()` (line 464) finds the most recent compaction and only includes entries after it.

**d) Persistence (lines 979-1120):**
- **JSONL append-only.** Lines are appended; compaction rewrites the entire file (`_rewriteFile()`, line 981).
- **_persist fires on every `_appendEntry` call**, but with a lazy-flush optimization: entries are buffered until the first assistant message appears, then the file is created via `wx` (exclusive write) atomically.
- **CustomEntry vs CustomMessageEntry:** CustomEntry is opaque to LLM context (extensions use it for their own state). CustomMessageEntry is injected into context as a user message.

### 1.5 — Compaction (`packages/coding-agent/src/core/compaction/compaction.ts`, 969 lines)

(Read the first 200 lines for trigger logic and structure.)

Compaction is triggered by token budget checks. The cut algorithm marks entries as "keep" vs "cut" based on recency, message role (tool calls/results near the end must be kept as pairs), and token budgets. The summary prompt asks for a structured summary. Result is stored as a `CompactionEntry` — non-destructive, creates a new tree node pointing to `firstKeptEntryId`.

**Risks:** The LLM-generated summary is lossy. If it misrepresents or omits crucial context, later turns operate on bad information. The original entries still exist for human inspection but NOT for the model once compaction has occurred — the compaction is the model's only view of the compressed context.

### 1.6 — Extensions (`packages/coding-agent/src/core/extensions/runner.ts`, 1231 lines; `types.ts`, 1701 lines)

Lifecycle hooks from types.ts lines 400-700 (sampled):
- `before_agent_start` — can add messages, replace system prompt
- `message_end` — inspect/modify assistant messages after finalization
- `tool_call` — inspect/modify tool calls before execution
- `tool_result` — inspect/modify tool results after execution
- `before_provider_request` — modify provider request
- `before_provider_headers` — add auth headers
- `context` — modify messages before they enter LLM context
- `session_before_compact` — veto/modify compaction
- `session_before_fork` — veto/modify branching
- `session_shutdown` — cleanup

Extensions CAN replace finalized assistant messages via `message_end` with `overwrite: true`. They are called in registration order. Isolation: each extension sees only its own errors; one extension failing doesn't prevent others from running.

### 1.7 — Model/Provider Layer (`packages/ai/src/models.ts` and `types.ts`)

(Referenced, not read in full — the `StreamFn` contract is in `types.ts:21-30`.)

**StreamFn signature:** `(model, context, options?) => AssistantMessageEventStream | Promise<AssistantMessageEventStream>`. Must not throw. Failures encoded in stream via protocol events with `stopReason: "error"` or `"aborted"`.

**streamSimple()** returns `AssistantMessageEventStream` — yields `start`, `text_delta`, `thinking_delta`, `toolcall_delta`, `done`, `error` events. `.result()` returns the finalized `AssistantMessage`.

**createProvider** dispatches by model provider string to the correct provider implementation (Anthropic, OpenAI, etc.). Provider-level `Message` has `role`, `content`, optional `name`, `tool_call_id`.

### 1.8 — TUI Separation

Confirmed: `grep -r "from.*agent" packages/tui/src/` returns **"(no agent imports found)"**. The TUI package has zero imports from packages/agent or packages/coding-agent.

Both interactive mode and RPC mode consume `Agent`/`AgentSession`, not the TUI. The agent runtime is truly headless — it emits events, and modes subscribe to render them.

### 1.9 — Pi Tests

| Check | Result |
|-------|--------|
| Agent-loop tests | 21 passed, 0 failed |
| Agent test files | 18 |
| Coding-agent test files | 187 |
| Weaver tests | 73 passed |

---

## PART 2 — LANGGRAPH INTERNALS AUDIT

### 2.1 — StateGraph Builder (`libs/langgraph/langgraph/graph/state.py`)

**a) StateGraph.__init__ (lines 230-277)**

Schema fields become channels via `_add_schema()` (line 318):
- **Ordinary field** (e.g., `x: str`) → `LastValue` channel. Only the most recent write is kept.
- **Annotated[T, reducer]** → `BinaryOperatorAggregate` channel. The reducer function combines values (e.g., `operator.add` for list append).
- **Managed values** (e.g., `Context(httpx.Client)`) → `ManagedValueSpec`. Not regular channels — they manage resource lifecycles.

Key difference:
- `LastValue`: `new_value = update` (replaces). Used for state that changes.
- `BinaryOperatorAggregate`: `new_value = reducer(current, update)` (accumulates). Used for append-only or custom merge.

**b) add_node (lines 381-455)**

Parameters: `node` (callable/runnable), `defer` (delay until exit), `metadata`, `input_schema`, `retry_policy`, `cache_policy`, `error_handler`, `destinations`, `timeout`.

`destinations`: Dict or tuple of node names this node can route to. **Visual only** — controls graph rendering, not execution. Execution routing is determined by edges and conditional edges.

**c) add_edge([a, b], c) (lines 915-1004)**

Multi-source edges compile into `NamedBarrierValue` channels. Both `a` and `b` must write before `c` triggers. The barrier ensures all sources complete before the target node executes.

**d) compile() (lines 1164-1384)**

Produces `CompiledStateGraph` with:
- `channels`: All state channels + managed values + `START: EphemeralValue(input_schema)`
- `input_channels`: `START`
- `output_channels`: Output schema channels or `"__root__"`
- `stream_channels`: All non-managed channels or `"__root__"`
- Nodes attached with `attach_node()`, edges with `attach_edge()`
- Node defaults applied (retry, cache, error_handler, timeout)

The START process: `START` is an `EphemeralValue` channel that holds input. On the first tick, input is mapped to channels via `map_input()`.

### 2.2 — Types and Runtime Contracts (`libs/langgraph/langgraph/types.py`)

**a) Command (lines 806-857)**

Fields:
```
graph: str | None          — target graph (None=current, Command.PARENT=parent)
update: Any | None          — state update to apply
resume: dict | Any | None   — resume value for interrupt()
goto: Send | Sequence[Send|N] | N  — navigation target(s)
```

vs normal state update: A node returning `{"key": value}` only updates state. `Command` additionally controls navigation (go to node X), resume (provide interrupt answer), and graph routing (send to parent).

**b) Send (lines 688-765)**

Simple dataclass: `Send(node="target_node", arg=state_dict)`. Enables fan-out: a conditional edge returns `[Send("analyze", {"item": x}) for x in items]`, creating N parallel tasks.

**c) interrupt() (lines 860-934)**

Raises `GraphInterrupt` exception containing `Interrupt(value, id, ns)`. Identified by: namespace (checkpoint_ns) + task path + interrupt index within the task. On resume with `Command(resume=value)`, the node **re-executes from the beginning** — `interrupt()` returns the resume value this time instead of raising.

**d) Stream modes (lines 113-126):**
| Mode | Emits |
|------|-------|
| `values` | Full state after each step |
| `updates` | Node-name → partial state updates per step |
| `custom` | `StreamWriter` data from inside nodes |
| `messages` | LLM tokens + metadata |
| `checkpoints` | Full checkpoint payload per step |
| `tasks` | Task start/result events |
| `debug` | checkpoints + tasks combined |

### 2.3 — Pregel Execution Runtime

**a) PregelLoop state (_loop.py, lines 158-270)**

Owns: `config`, `step`, `stop`, `checkpoint`, `checkpoint_config`, `checkpoint_metadata`, `channels`, `tasks`, `status` ("input"/"pending"/"done"/"draining"/"interrupt_before"/"interrupt_after"/"out_of_steps"), `checkpoint_pending_writes`, `updated_channels`, `control`, `durability`, plus checkpoint-related state for delta channels.

**b) ONE tick() iteration (lines 599-689):**

1. Check recursion limit → set `"out_of_steps"` if exceeded
2. `prepare_next_tasks()` — determine which nodes run this step based on channel triggers
3. Emit "checkpoints" debug output
4. If no tasks → `"done"`, return False
5. If drain requested → `"draining"`, return False
6. Re-apply pending writes from prior loop (resume handling)
7. Check `interrupt_before` → raise `GraphInterrupt`
8. Emit "tasks" debug output
9. Return True (runner will execute tasks)

**after_tick() (lines 691-730):**
1. Collect all task writes
2. `apply_writes()` → update channels
3. Emit "values" output
4. Clear pending writes
5. `_put_checkpoint()` → save checkpoint
6. Check `interrupt_after` → raise `GraphInterrupt`

**BSP visibility guarantee:** Task writes from step N are collected in `t.writes`, applied to channels in `after_tick()`, and then reflected in `channel_values` in the checkpoint. Step N+1's `prepare_next_tasks()` reads from the updated checkpoint. **Writes from step N are invisible to tasks in step N.**

**c) _first vs subsequent ticks (lines 848-1079)**

**_first handles:**
- **Resuming from checkpoint:** If `channel_versions` is non-empty AND input signals continuation (None input, Command, or same run_id), it restores state. `INTERRUPT` is added to `versions_seen` so the graph knows all interrupt-triggered channels.
- **New input:** Maps input to channels via `map_input()`, applies input writes, saves input checkpoint.
- **Command handling:** Parses Command into writes. `Command(resume=...)` sets up resume map. `Command(update=...)` and `Command(goto=...)` produce channel writes.
- **Time travel:** Creates a fork checkpoint for replaying from a specific checkpoint ID.

**d) prepare_next_tasks (_algo.py, referenced)**

Push tasks: Triggered by `Send()` — a task writes to TASKS channel, creating new tasks. Pull tasks: Triggered by channel updates — nodes whose trigger channels were updated run next.

### 2.4 — PregelRunner (_runner.py)

**a) Sync path (lines 176-358):**
Uses `concurrent.futures.ThreadPoolExecutor` via `self.submit()`. Tasks are submitted as futures. `run_with_retry()` wraps each task with retry policy.

**b) Async path (lines 360-572):**
Uses `asyncio` tasks. Same logic, async variants.

**Task failure:** Exception is caught by `self.commit(t, exc)`. If the task has an error handler, `schedule_error_handler()` creates a handler task. Otherwise, `_panic_or_proceed()` re-raises or propagates.

**c) Concurrency guarantees:**
- **Sibling tasks cannot see each other's writes during the same step.** Writes are collected in per-task deques. Only `after_tick()` calls `apply_writes()`. Runner only calls `self.commit()` per task (for checkpoint pending writes) — not `apply_writes()`.
- Writes are collected per task, then applied atomically in `after_tick()`.
- `put_writes()` (line 338 in _loop.py) appends to `checkpoint_pending_writes` and persists asynchronously via `self.submit(self.checkpointer_put_writes, ...)`.

### 2.5 — Checkpoints and Persistence

**a) Checkpoint fields (base/__init__.py, lines 92-130):**
```
v: int                     — format version (1)
id: str                    — monotonically increasing checkpoint ID
ts: str                    — ISO 8601 timestamp
channel_values: dict       — current values of all channels
channel_versions: dict     — monotonic version per channel
versions_seen: dict        — per-node map of channel versions seen
updated_channels: list     — channels updated in this checkpoint
```

**b) put_writes vs put:**
- `put_writes(config, writes, task_id)` — stores intermediate writes linked to a checkpoint. Called DURING task execution. Writes are "pending" until the next checkpoint.
- `put(config, checkpoint, metadata, new_versions)` — stores a full checkpoint. Called AFTER all tasks in a step complete.

They're separate because writes happen during step execution (asynchronous), while checkpoints happen at step boundaries.

**c) CheckpointTuple (line 134):**
Adds to raw Checkpoint: `config` (RunnableConfig with thread_id + checkpoint_id), `metadata` (step number, source, writes), `parent_config` (link to previous checkpoint), `pending_writes` (unapplied writes from the last step).

**d) InMemorySaver (memory/__init__.py):**
```
storage: defaultdict[str, dict[str, dict[str, tuple[checkpoint, metadata, parent]]]]
         └─ thread_id → checkpoint_ns → checkpoint_id → (ckpt_bytes, meta_bytes, parent_id)

writes: defaultdict[(thread_id, checkpoint_ns, checkpoint_id), dict[(task_id, idx), ...]]
```

Lookup: `get_tuple(config)` retrieves by `thread_id` + `checkpoint_ns` + optional `checkpoint_id`. Without `checkpoint_id`, returns the latest (max key). `thread_id` is the primary index — one thread = one conversation.

### 2.6 — What LangGraph Does NOT Guarantee

(LangGraph `_internal/_retry.py` is only 30 lines — the actual retry logic is in `_runner.py` via `run_with_retry` from `langgraph._internal._runnable`.)

**a) Node failure and retry — external side effects:**
**NO, they are NOT rolled back.** LangGraph retries the node function. Any HTTP calls, DB writes, or file operations made before the failure will execute again on retry. There is no transaction manager, no compensating action framework, no two-phase commit. The checkpoint only captures channel values — not external state.

**b) Interrupted and resumed node:**
**YES, it restarts from the beginning.** The docstring on `interrupt()` explicitly states: "The graph resumes from the start of the node, **re-executing** all logic." Code before `interrupt()` runs again. If `interrupt()` was called multiple times in prior execution, the values are replayed in order.

**c) Checkpoint recovery:**
- **Recovers:** All channel values (state), node versions_seen (what each node has observed), pending writes (tool results, etc.)
- **Does NOT recover:** External side effects, open network connections, file handles, in-memory Python object state beyond channels, streaming cursor position in LLM responses

### 2.7 — LangGraph Tests

| Check | Result |
|-------|--------|
| Test files | 61 |
| Focused tests | **Blocked** — `conftest.py` imports `redis` which is not installed |
| Root cause | Test dependencies not installed (`pip install redis` would fix) |

---

## PART 3 — WEAVER CONTEXT

Fully read all required files. Key observations:

**weaver.md (703 lines):** Weaver is a lifelong novel-reading companion, not a coding agent. It needs durable multi-stage workflows (classify → retrieve → inspect → synthesize → verify → review → commit). The central organizing metaphor is "one well-read mind" moving between recall, explanation, interpretation, judgment, and speculation.

**turn.py (351 lines):** Clean, minimal async turn loop. 351 lines total. Executes model → tool → model cycles with cancellation, persistence callbacks, and safe failure. Domain-free. Only ~130 lines of actual loop logic.

**session.py (125 lines):** Thin wrapper that owns history, busy-input policy, queued message handling. Simpler than HaxJobs.

**messages.py (109 lines):** Four canonical types: UserMessage, AssistantMessage, ToolCallMessage, ToolResultMessage. Clean discriminator.

**model.py (87 lines):** Provider-neutral types: ModelStreamEvent, ModelRequest, etc. No provider coupling.

**decision.md:** Plan 001 explicitly deferred LangGraph as "future research." Accepted the thin async DeepSeek boundary as transport. Deep Agents, LangGraph, Pydantic AI remain research candidates.

---

## PART 4 — COMPARISON AND RECOMMENDATION

### 4.1 — Architectural Identity

**a) Pi's architecture:** An **imperative, event-driven conversational loop**. The `Agent` class owns linear transcript state. A two-level while-loop (steering → model → tools → repeat; follow-up → restart) drives execution. State is a flat array of messages with extensible types. Persistence is JSONL append-only with non-destructive LLM compaction. Extensions hook into lifecycle events via registration-order callbacks. Control flow is explicit: you can trace from `prompt()` → `runLoop()` → `streamAssistantResponse()` → `executeToolCalls()` by reading sequential TypeScript. (agent-loop.ts:155-275, agent.ts:258-340)

**b) LangGraph's architecture:** A **BSP (Bulk Synchronous Parallel) graph executor**. State is a typed schema with reducer-annotated fields compiled into channels. Execution proceeds in supersteps: plan (select triggered nodes) → execute (run nodes in parallel, writes invisible to siblings) → update (apply writes to channels, checkpoint). Control flow is declarative: nodes and edges define a topology; the runtime determines execution order. Humans-in-the-loop use `interrupt()` / `Command(resume=...)` with full state checkpointing. (main.py:2616-3019, _loop.py:599-730, state.py:1164-1384)

### 4.2 — Pi: What to Adopt, What to Avoid

**a) Patterns Weaver should COPY:**

1. **Non-destructive compaction (`CompactionEntry` in session tree).** When Weaver has 100+ turns of conversation, it can compact early context while keeping the originals inspectable. Same pattern: append a summary entry that points to `firstKeptEntryId` without deleting anything. (session-manager.ts:108-117, 1016-1028)

2. **Distinct message types for canon vs opinion vs hypothetical.** Pi's `CustomAgentMessages` extension pattern (types.ts:267-273) maps directly to Weaver's epistemic labels (CANON, INFERRED, OPINION, SPECULATION, HYPOTHETICAL). Weaver can define message variants for each label, keeping them type-distinct at the `ConversationMessage` level.

3. **Domain-free turn runtime with persistence callback.** `run_turn()` takes a `persist_message` callback. The turn loop doesn't know about JSONL, databases, or sessions — it just calls the callback at durable boundaries (tool_call → handler → tool_result → assistant). (turn.py:59-78, run_turn signature)

4. **Clean provider boundary via Protocol.** `ModelClient` is a `Protocol` — no ABC inheritance, no framework dependency. `FakeModelClient` for tests, `DeepSeekClient` for live. (client.py:18-32)

5. **Cancellation via asyncio.Event.** Simple, explicit, works. No framework signals, no AbortController portability concerns. `cancel_event: asyncio.Event` propagates through the entire turn. (turn.py:90)

**b) Patterns Weaver should AVOID or will OUTGROW:**

1. **Flat message array as the only state.** Pi's `AgentContext.messages: AgentMessage[]` works for coding agents where the task is "edit files." Weaver needs multiple interacting memories (scene, narrative, world, meaning, conversational). A flat message array cannot represent temporal world state, character belief timelines, or interpretation-with-evidence structures.

2. **Compaction-as-LLM-summary as the ONLY compression mechanism.** Pi compacts by asking an LLM to summarize. For Weaver's domain, summaries of novel scenes lose the very detail needed for literary reasoning. Weaver needs structured compression (hierarchical summaries, temporal snapshots, relationship diffs) alongside or instead of LLM summarization.

3. **TypeScript/Node.js runtime.** Weaver is Python. Pi's architecture patterns are language-agnostic, but the implementation is not.

4. **Coding-agent coupling.** Pi's agent-core is cleanly separated from coding-agent, but the session manager and compaction are in coding-agent. Weaver needs its own session/compaction layer built for literary memory, not code-editing sessions.

5. **Single-provider assumption in the loop.** Pi's `config.model` is one model. Weaver may need multi-model workflows (one model for classification, another for synthesis, another for counterfactual reasoning). The loop would need to be generalized or replaced.

**c) Pi's strongest design principle:** **"The loop is dumb; hooks make it smart"** — a minimal, explicit while-loop that delegates all policy (message conversion, tool execution, compaction, steering) to injected callbacks.

**d) If Weaver copied Pi's exact architecture today, what would break first?**
The flat message array and LLM compaction would break when Weaver needs to answer "what did Character X believe before chapter N" — the temporal world state cannot be reconstructed from compressed linear transcripts. The system would answer from current knowledge, violating the temporal reasoning requirement.

### 4.3 — LangGraph: What to Adopt, What to Avoid

**a) Capabilities Weaver NEEDS:**

1. **Checkpoint + interrupt/resume for multi-stage workflows.** Weaver's classify → retrieve → inspect → synthesize → verify → review → commit pipeline needs durable pauses between stages. LangGraph's `interrupt()` + `Command(resume=...)` with full state persistence is purpose-built for this. (types.py:860-934)

2. **Typed state schema with reducers for append-only accumulation.** Weaver's conversational memory should accumulate opinions, interpretations, and evidence without overwriting. `Annotated[list, operator.add]` is exactly the right pattern. (state.py:230-277, _add_schema:318)

3. **Send() fan-out for parallel reading passes.** When Weaver needs literal pass + character pass + world pass + interpretive pass on the same chapter, `Send("reader", {"pass_type": t})` creates parallel tasks whose results accumulate via reducer. (types.py:688-765)

4. **BSP visibility guarantee for multi-stage reasoning.** The guarantee that stage N writes are invisible to stage N siblings prevents contamination — the synthesis stage sees all retrieval results, but one retrieval doesn't see another's findings. (main.py:2616-3019, `while loop.tick()`)

5. **Durability modes.** `"exit"` mode for speculative chains that should only persist on success, `"sync"` for critical state. (types.py:76-83)

**b) Patterns Weaver should AVOID or ISOLATE:**

1. **Graph-as-primary-control-flow.** LangGraph's sweet spot is "nodes are pure functions of state." Weaver's nodes need to be stateful readers with their own memory systems. Forcing scene memory, world memory, and conversational memory into a single graph state schema would create a God-schema that fights the framework.

2. **LangChain ecosystem coupling.** LangGraph's runtime depends on LangChain Core's `Runnable`, `RunnableConfig`, message types, and callback system. Weaver should avoid importing that ecosystem into its domain model. The checkpoint and graph abstractions are useful; the LangChain message types are not.

3. **Thread-per-conversation model for checkpointing.** LangGraph's `thread_id` key maps well to "one conversation = one thread." But Weaver needs cross-conversation memory (opinions persist across sessions, the interpretive journal spans threads). The checkpoint model would need to be augmented.

4. **Node-as-pure-function assumption.** LangGraph nodes take state → return partial state. Weaver nodes need side effects: search, read files, update external memory stores. These work in LangGraph but the framework doesn't help manage them — the same "no rollback for side effects" caveat applies.

5. **Retry-without-compensation.** LangGraph retries failed nodes by re-executing them. For Weaver's LLM calls (which cost money), retry-without-deduplication is wasteful. For novel-reading operations (which are read-only), it's harmless. Weaver needs a retry policy aware of operation cost.

**c) LangGraph's most dangerous abstraction for Weaver:**
**The state graph as the only model of computation.** It's tempting to model the entire classify → retrieve → inspect → synthesize → verify → review → commit pipeline as one graph. But Weaver's stages are not purely functional state transitions — they involve long-running LLM reasoning, external search, and human review. Forcing them into nodes that read/write a single state schema would hide the real complexity (multiple memory systems, temporal reasoning, epistemic labels) behind a framework that wasn't designed for it.

### 4.4 — Can They Coexist?

**a) Clean boundary:**

```
Pi-style imperative loop OWNS:
  - Conversational turn-taking (user message → response)
  - Model streaming (text deltas, thinking, tool calls)
  - Tool dispatch (search, read, write memories)
  - Cancellation and interruption
  - Session management (loading, saving, forking)
  - Epistemic label enforcement at the message level

LangGraph workflow graph OWNS:
  - Multi-stage reading pipelines (classify → retrieve patterns → read → synthesize)
  - Parallel reading passes (literal + character + world + interpretive)
  - Checkpoint/resume for human-in-the-loop review gates
  - Durable workflow state (what stage are we in, what's been retrieved)
  - Accumulation of evidence with provenance

NEITHER touches:
  - Novel corpus (read-only, external)
  - The other's internal state representation
  - Credentials or raw reasoning traces
```

**b) Data flow at the boundary:**

```
User message
    │
    ▼
Pi-style turn loop  ──decides──▶  "This needs a deep reading workflow"
    │
    │  WeaverDomainState (query, needed_capabilities, conversation_context)
    ▼
LangGraph workflow  ──executes──▶  classify → retrieve → inspect → synthesize
    │
    │  LangGraphOutput (findings, citations, confidence, epistemic_labels)
    ▼
Pi-style turn loop  ──formats──▶  Assistant response to user
    │
    ▼
Session persistence (both conversational message + workflow trace)
```

The conversion at the boundary:
- **Into graph:** `WeaverDomainState` (the question, relevant memories, novel passage refs) → `graph.invoke(state_dict, config)`
- **Out of graph:** `graph_output` (structured findings with citations and labels) → canonically-typed `ConversationMessage` variants

**c) The SINGLE most important rule:**
**The graph is a tool, not the orchestrator.** The Pi-style loop calls `graph.invoke()` or `graph.stream()` as one step in its tool execution. The graph never calls back into the loop. This prevents the "two competing orchestrators" problem — there's exactly one control loop, and the graph is a specialized function it invokes.

### 4.5 — Weaver's Current Code and Concrete Steps

**a) Does `turn.py` need to be rewritten to work with LangGraph, or can it be wrapped?**

It can be **wrapped, not rewritten**. `turn.py`'s `run_turn()` function is already domain-free — it takes `model`, `tool_registry`, and `cancel_event`. It can be wrapped as a LangGraph node:

```python
def conversational_turn_node(state: WeaverState) -> dict:
    result = await run_turn(
        turn_id=state["turn_id"],
        model=state["model_client"],
        system_prompt=state["system_prompt"],
        history=state["conversation_history"],
        tool_registry=state["tool_registry"],
        active_tools=state["active_tools"],
        cancel_event=asyncio.Event(),  # or from runtime
    )
    return {
        "conversation_history": result.new_messages,
        "turn_result": result,
    }
```

The key insight: `run_turn` only needs `model`, `history`, and `tool_registry` — all of which can be in graph state or context.

**b) SMALLEST change to unlock durable multi-stage workflows:**

Add one file: `/home/hax/weaver/src/weaver/workflows/reading.py`

```python
"""Multi-stage novel reading workflow as a LangGraph StateGraph."""
from typing import Annotated, TypedDict
import operator
from langgraph.graph import StateGraph, END
from langgraph.types import interrupt, Command
from langgraph.checkpoint.memory import InMemorySaver

class ReadingState(TypedDict):
    query: str
    classified_intent: str              # "recall" | "explain" | "interpret" | ...
    retrieved_passages: Annotated[list, operator.add]
    inspected_findings: Annotated[list, operator.add]
    synthesis: str
    needs_human_review: bool

def classify(state: ReadingState) -> dict:
    """Classify what kind of reading this question needs."""
    ...

def retrieve(state: ReadingState) -> dict:
    """Search the novel corpus."""
    ...

def inspect(state: ReadingState) -> dict:
    """Close-read retrieved passages."""
    ...

def synthesize(state: ReadingState) -> dict:
    """Build response from inspected findings."""
    ...

def review_gate(state: ReadingState) -> dict:
    """Pause for human review if needed."""
    if state["needs_human_review"]:
        interrupt({"message": "Please review the synthesis", "synthesis": state["synthesis"]})
    return {}

builder = StateGraph(ReadingState)
builder.add_node("classify", classify)
builder.add_node("retrieve", retrieve)
builder.add_node("inspect", inspect)
builder.add_node("synthesize", synthesize)
builder.add_node("review", review_gate)
builder.add_edge("classify", "retrieve")
builder.add_edge("retrieve", "inspect")
builder.add_edge("inspect", "synthesize")
builder.add_edge("synthesize", "review")
builder.add_edge("review", END)
reading_workflow = builder.compile(checkpointer=InMemorySaver())
```

This is a tool that `run_turn()` can dispatch to when the classification step detects a complex reading need. Zero changes to `turn.py`.

### 4.6 — Final Recommendation

**RECOMMENDATION: Hybrid**

**JUSTIFICATION:** Weaver needs both the conversational agility of Pi's imperative loop AND the durable multi-stage workflow execution of LangGraph's BSP runtime. Pi's loop is unbeatable for simple turns (text responses, single tool calls, streaming). LangGraph's checkpoint/resume is essential for the classify→retrieve→inspect→synthesize→review pipeline. The clean boundary is: the Pi-style loop owns the conversation; LangGraph workflows are specialized tools the loop invokes.

**FIRST CONCRETE STEP:**
Create `src/weaver/workflows/reading.py` — a single LangGraph `StateGraph` with the classify→retrieve→inspect→synthesize pipeline. Wire it as a tool in the tool registry. Zero changes to `turn.py` or `session.py`. Verify with: `uv run pytest -k "reading_workflow"`.

**BIGGEST RISK OF THIS CHOICE:**
The two runtimes drift into competing state management. Early detection: if any code changes `turn.py`'s message history AND LangGraph's checkpoint in the same operation, that's the boundary leaking. Prevent with a rule: LangGraph workflows return structured outputs; only `session.py` writes to conversational message history.

---

## PART 5 — VERIFICATION TABLE

| Check | Result |
|-------|--------|
| Pi version verified | v0.82.1 (latest: YES) |
| Pi changelog found | `packages/agent/CHANGELOG.md` |
| LangGraph version verified | 1.2.10 (latest: YES) |
| LangGraph changelog found | `libs/sdk-py/CHANGELOG.md` (core changelog: none found) |
| Pi agent-loop tests | 21 passed, 0 failed |
| LangGraph focused tests | Blocked — `redis` module not installed |
| Weaver tests | 73 passed, 0 failed |
| Weaver turn.py reviewed | YES |
| Weaver weaver.md reviewed | YES |
| Pi TUI separation verified | YES (no agent imports in tui/src/) |
