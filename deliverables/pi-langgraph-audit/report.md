# Pi vs LangGraph — Weaver Architecture Audit

Audit date: 2026-08-01

---

## PART 0 — VERSION VERIFICATION

### Pi (`/tmp/pi-source`)

| Check | Result |
|---|---|
| Pinned commit | `d7b02636` — Merge pull request #7272 |
| Tagged version | v0.82.1 (tag points to same commit as pinned? No — pinned is 50 commits ahead) |
| Latest release tag | v0.82.1 |
| Commits after v0.82.1 | **50 commits** — the pinned commit is post-release HEAD, not the tag itself |
| Remote ahead | 0 — we are at origin/main tip |
| Changelog found | `packages/agent/CHANGELOG.md` (636 lines) |

**IS THIS THE LATEST RELEASE?** No. The pinned commit is 50 commits past the v0.82.1 tag. The delta between v0.82.1 and HEAD is entirely maintenance: raw stop-reason preservation across providers, Qwen thinking controls, TUI fixes, docs, and contributor approvals. Zero architectural changes. **Safe to audit as effectively the current release.**

### LangGraph (`/tmp/langgraph-source`)

| Check | Result |
|---|---|
| Pinned commit | `41341457` — release(langgraph): 1.2.10 (#8462) |
| Tagged version | 1.2.10 (exact match) |
| Latest release | v1.2.10 (confirmed by `git describe --tags --exact-match`) |
| Commits after 1.2.10 | 0 — at tip |
| Changelog found | `libs/sdk-py/CHANGELOG.md` (SDK only; no core changelog in repo) |

**IS THIS THE LATEST RELEASE?** Yes. Exact match. **Safe to audit.**

---

## PART 1 — DEEP PI INTERNALS AUDIT

### 1.1 — CORE AGENT LOOP (`packages/agent/src/agent-loop.ts`, 792 lines)

**a) Two public entry points**

1. `runAgentLoop()` (line 91): Starts a *new* run with fresh prompt messages. Prepends prompts to context, emits `agent_start` → `turn_start` → per-prompt `message_start`/`message_end`, then enters `runLoop()`.

2. `runAgentLoopContinue()` (line 115): Continues from an *existing* context. Validates the last message is NOT an assistant message (must be user/toolResult), emits `agent_start` → `turn_start`, then enters `runLoop()`.

Difference: `runAgentLoop` adds prompts to context; `runAgentLoopContinue` uses context as-is. Both otherwise identical.

**b) Two nested loops in `runLoop()` (lines 155-275)**

```text
while (true) {              // OUTER: follow-up loop
  while (hasMoreToolCalls   // INNER: tool/steering loop
         || pendingMessages.length > 0) {
    // per-turn work
  }
  // check followUp queue → if items, set as pending → continue outer
  break; // no follow-ups → exit
}
```

- **Outer loop (follow-ups):** When the inner loop finishes (no more tool calls, no pending steering), the outer loop drains the follow-up queue. Follow-up messages only run after the agent would otherwise stop — they're "one more thing" after the main work.
- **Inner loop (turns):** Each iteration is one assistant response + tool execution + steering message injection. Continues while there are tool calls or pending steering messages.
- **Steering messages** (line 167, `config.getSteeringMessages`): Injected MID-workflow between turns. User says "do this differently" and it lands next turn.
- **Follow-up messages** (line 252, `config.getFollowUpMessages`): Injected AFTER the agent would stop. "Now also check X."
- **`prepareNextTurn`** (line 233): Fires after `turn_end`, before polling steering. Can replace model/thinkingLevel/context for the next turn.
- **`shouldStopAfterTurn`** (line 244): Fires after `turn_end`. Returns true → emit `agent_end` → exit without polling queues.
- **Agent stops completely** when: (a) `shouldStopAfterTurn` returns true, (b) no tool calls AND no steering AND no follow-up messages, (c) error/abort stopReason, (d) explicit `return` after `agent_end`.

**c) `streamAssistantResponse()` (lines 281-371)**

Conversion: `AgentMessage[]` → `transformContext?` (AgentMessage → AgentMessage) → `convertToLlm()` (AgentMessage → `Message[]`) → `Context` object with systemPrompt + tools.

Event order during streaming:
1. `start` → emits `message_start` with partial
2. `text_start/delta/end`, `thinking_start/delta/end`, `toolcall_start/delta/end` → emits `message_update` with partial
3. `done` or `error` → calls `response.result()` for the FINALIZED message (not the last delta), emits `message_end`

Critical detail (line 340): The final message comes from `response.result()`, not from the last delta. This means the finalized message (with completed tool calls, usage, etc.) is what gets stored — not the last partial.

**d) Tool execution path (lines 374-707)**

- **Truncated message** (lines 374-402, `failToolCallsFromTruncatedMessage`): When `stopReason === "length"`, ALL tool calls in the message are failed with an error result. None execute — because streamed arguments may be silently truncated.
- **Sequential vs parallel** (lines 407-415, `executeToolCalls`): If ANY tool has `executionMode: "sequential"` OR `config.toolExecution === "sequential"`, sequential. Otherwise parallel. Default: `"parallel"`.
- **`beforeToolCall`** (lines 610-640 in `prepareToolCall`): After schema validation, before execution. Can `block: true` → error result. Gets abort signal.
- **`afterToolCall`** (lines 660-690 in `finalizeExecutedToolCall`): After execution, before `tool_execution_end`. Can override content, details, isError, usage, terminate via field-by-field merge.
- **Parallel ordering** (lines 501-545): All tool calls are prepared sequentially (which may produce `immediate` blocked results). Then allowed tools execute concurrently via `Promise.all`. `tool_execution_end` is emitted in COMPLETION order (as each finishes). But `message_start`/`message_end` for tool results are emitted in ASSISTANT SOURCE ORDER (the order tool calls appeared in the message).
- **Abort propagation**: `signal?.aborted` checked at every stage — after preparation, before execution, after execution. Aborted tools get error results.

### 1.2 — AGENT STATE AND CANCELLATION (`packages/agent/src/agent.ts`)

**a) AgentState fields (types.ts lines 286-305):**
- `systemPrompt: string` — sent with every request
- `model: Model<any>` — active model
- `thinkingLevel: ThinkingLevel` — reasoning level
- `tools: AgentTool<any>[]` — getter/setter (copies on assign)
- `messages: AgentMessage[]` — getter/setter (copies on assign)
- `isStreaming: boolean` — true while run active
- `streamingMessage?: AgentMessage` — current partial assistant message
- `pendingToolCalls: ReadonlySet<string>` — executing tool call IDs
- `errorMessage?: string` — most recent failure

**b) `Agent.prompt()` (agent.ts lines 220-232):**
1. Guards against overlapping runs: throws if `this.activeRun` exists
2. Normalizes input: string → `[{role:"user", content: [{type:"text", text}]}]`, with optional images; array → passthrough; single message → `[message]`
3. Calls `runPromptMessages()` → `runWithLifecycle()`:
   - Creates `AbortController`
   - Sets `isStreaming=true`, clears `streamingMessage`/`errorMessage`
   - Runs executor with the signal
   - On catch: calls `handleRunFailure()` which emits error `message_start`/`message_end`/`turn_end`/`agent_end`
   - Finally: `finishRun()` clears state and resolves the active run promise

**c) Cancellation:**
- `AbortController` created per-run in `runWithLifecycle()` (agent.ts line 284)
- `abort()` calls `abortController.abort()` (agent.ts line 212) — this signals the provider stream, tool execution, and loop checks
- `waitForIdle()` returns `activeRun.promise` — resolves after `agent_end` listeners finish and `finishRun()` is called (agent.ts line 218). This guarantees the run is truly done, not just that the last event was emitted.

**d) Event subscriptions (`agent.ts` lines 183-193):**
- `subscribe()` returns an unsubscribe function `() => void`
- Listeners are called in subscription order (Set iteration order = insertion order)
- Listeners are awaited, and their promises are part of run settlement — the run isn't idle until all `agent_end` listeners have settled
- Listeners receive both the event AND the abort signal

### 1.3 — TYPES AND CONTRACTS (`packages/agent/src/types.ts`)

**a) AgentMessage:** Union of `Message` (from pi-ai: user/assistant/toolResult) + `CustomAgentMessages[keyof CustomAgentMessages]` (extensible via declaration merging). types.ts line 275.

**b) AgentContext:** `{ systemPrompt: string; messages: AgentMessage[]; tools?: AgentTool<any>[] }`. types.ts line 328. Owned by the caller — Agent creates a snapshot via `createContextSnapshot()` (agent.ts line 254).

**c) AgentEvent (types.ts lines 338-358):**
- `agent_start` — run begins
- `agent_end` — run ends (messages: AgentMessage[])
- `turn_start` — assistant turn begins
- `turn_end` — assistant turn ends (message + toolResults)
- `message_start` — any message (user/assistant/toolResult) enters transcript
- `message_update` — assistant message updated during streaming (includes raw AssistantMessageEvent)
- `message_end` — message finalized
- `tool_execution_start/update/end` — tool lifecycle

**d) AgentLoopConfig (types.ts lines 130-268):**
- `model`, `reasoning`, `sessionId`, `onPayload`, `onResponse`, `transport`, `thinkingBudgets`, `maxRetryDelayMs` — stream options
- `convertToLlm` — AgentMessage[] → Message[]
- `transformContext` — pre-conversion AgentMessage transform
- `getApiKey` — dynamic key resolution
- `shouldStopAfterTurn` — graceful stop hook
- `prepareNextTurn` — context/model mutation between turns
- `getSteeringMessages` — mid-work injection
- `getFollowUpMessages` — post-work injection
- `toolExecution` — "sequential" | "parallel"
- `beforeToolCall` / `afterToolCall` — tool hooks

**e) AgentTool vs provider-level Tool (types.ts lines 310-327):**
AgentTool extends pi-ai's `Tool` with: `label` (UI display), `prepareArguments` (pre-validation compat shim), `execute(toolCallId, params, signal?, onUpdate?) => AgentToolResult` (async executor with update callback), and `executionMode` (per-tool sequential/parallel override). Provider-level Tool is just `{name, description, parameters, constrainedSampling?}`.

### 1.4 — SESSIONS AND PERSISTENCE (`session-manager.ts`, 1712 lines)

**a) SessionEntry variants (lines 39-155):**
- `SessionMessageEntry` — type: "message", wraps AgentMessage
- `ThinkingLevelChangeEntry` — type: "thinking_level_change"
- `ModelChangeEntry` — type: "model_change"
- `CompactionEntry` — type: "compaction" (summary, firstKeptEntryId, tokensBefore, details, usage, fromHook)
- `BranchSummaryEntry` — type: "branch_summary"
- `CustomEntry` — type: "custom" (extension data, NOT in LLM context)
- `CustomMessageEntry` — type: "custom_message" (extension data, IS in LLM context)
- `LabelEntry` — type: "label"
- `SessionInfoEntry` — type: "session_info"

**b) Session tree model:**
- Every entry has `id` + `parentId` — forms a tree (lines 39-43)
- "Current leaf" determined by `leafId` (line ~50 of SessionManager class)
- `branch()` creates a new branch from any entry, producing a fork (mentioned in types)
- Compaction creates new CompactionEntry nodes WITHOUT deleting old entries — the tree just grows more branches. Compaction is non-destructive.

**c) Context reconstruction (`buildSessionPath`, lines 450-465):**
- Walks from `leafId` to root following `parentId` chain
- Compaction entries found along the path: context stops at the compaction's `firstKeptEntryId` — entries before the compaction are replaced by the summary
- `buildContextEntries()` (line ~466) walks from compaction cut point forward, collecting messages
- `sessionEntryToContextMessages()` converts each entry to AgentMessage[]

**d) Persistence (`_persist`, lines 1017-1040):**
- JSONL append-only (line 1027: `appendFileSync`)
- First assistant message acts as flush trigger: until then, entries accumulate; at first assistant, the entire file is written atomically via `openSync("wx")` then `writeFileSync` (line 1036)
- After flush, every entry is appended with `appendFileSync`
- **`message_end` is NOT the trigger** — the first assistant message's `_appendEntry()` call triggers the flush. After that, ANY `_appendEntry()` appends immediately.
- CustomEntry (extension data, not in context) vs CustomMessageEntry (extension content, goes into context) — two separate concerns.

### 1.5 — COMPACTION (`compaction.ts`, ~800 lines)

**a) Triggers (lines 127-131):**
- `shouldCompact(contextTokens, contextWindow, settings)` — returns true when `contextTokens > contextWindow - reserveTokens`
- Default `reserveTokens: 16384`, `keepRecentTokens: 20000` (lines 118-123)
- Called by session manager based on last assistant usage + trailing message estimates

**b) Cut algorithm (lines 244-300):**
- Walk backwards from newest, accumulating estimated token sizes
- Cut when accumulated >= `keepRecentTokens`
- Valid cut points: user, assistant, bashExecution, custom, branchSummary, compactionSummary messages — NEVER toolResult (must stay with its tool call)
- Can split mid-turn — returns `turnStartIndex` to include the user message that started the turn

**c) Compaction summary prompt:**
Uses `SUMMARIZATION_SYSTEM_PROMPT` from `utils.ts` (imported at line 32). Asks for a structured summary that preserves decisions, file changes, and key reasoning.

**d) Storage (compaction.ts lines 95-108, session-manager.ts appendCompaction):**
- Result is stored as a `CompactionEntry` appended to the session
- `firstKeptEntryId` marks the cut point — context reconstruction stops there
- Old entries preserved, not deleted. The compaction is a new tree branch.

**e) Risks of LLM-generated compaction:**
1. Information loss — the summary cannot preserve every detail
2. Errors in the summary propagate forward — mistaken facts become "history"
3. Compaction is irreversible in practice — re-expanding old entries requires explicit tree navigation
4. The summary prompt may be biased toward recent work, losing early context
5. No verification step — the summary is used immediately without review

### 1.6 — EXTENSIONS (`extensions/runner.ts` and `types.ts`)

**a) Lifecycle hooks (types.ts lines 35-65, expanded through the file):**
- `before_agent_start` — can inject messages, modify system prompt
- `message_end` — can replace finalized assistant messages
- `tool_call` / `tool_result` — can block or modify tool execution
- `before_provider_request` / `before_provider_headers` — intercept model calls
- `context` — receive context usage updates
- `session_before_switch/fork/compact/tree` — session lifecycle
- `session_shutdown` — cleanup
- `project_trust` — security gate
- `resources_discover` — resource injection
- `input` — intercept user input

**b) Tool call interception (`beforeToolCall`/`afterToolCall` on AgentLoopConfig):**
Extensions register hooks via the `tool_call` and `tool_result` events. The agent-loop's `beforeToolCall`/`afterToolCall` hooks (from AgentLoopConfig) are the execution-time intercept points — extensions hook into those.

**c) Replacing finalized assistant messages:**
Yes, via `message_end` event handler. The handler receives the message and can return a replacement. runner.ts manages ordering — multiple extensions can chain modifications.

**d) Isolation/ordering guarantees:**
- Extensions are loaded in order, handlers executed in order (runner.ts lines 191-210)
- First `project_trust` handler that returns yes/no wins (runner.ts lines 218-235)
- No sandbox — extensions have full Node.js access
- Risk: extension ordering is load-order dependent; one extension's transform can conflict with another's

### 1.7 — MODEL/PROVIDER LAYER (`packages/ai/src/models.ts` and `types.ts`)

**a) StreamFn signature (types.ts line 276-285):**
```typescript
export type StreamFn = (
  model: Model<Api>,
  context: Context,
  options?: SimpleStreamOptions,
) => AssistantMessageEventStream | Promise<AssistantMessageEventStream>;
```
The agent injects it via `AgentLoopConfig.streamFunction`. In `streamAssistantResponse()`, the loop calls `streamFunction(config.model, llmContext, {...config, apiKey, signal})`.

**b) `streamSimple()` (models.ts line 317-322):**
Returns `AssistantMessageEventStream`. Internally uses `lazyStream` — the actual provider dispatch is deferred until the stream is consumed. Auth is resolved at consumption time (not creation time), which matters for expiring OAuth tokens.

**c) Provider dispatch (`createProvider`, models.ts lines 323-380):**
- `createProvider()` builds a `Provider` from parts: id, auth, models, stream functions
- Models collection (`ModelsImpl`) owns the provider registry, resolves auth, and delegates to the provider's stream
- Auth resolution (`applyAuth`): resolves credential → merges headers → allows per-request apiKey/env overrides → calls provider.stream()

**d) Message at provider level vs AgentMessage (types.ts lines 204-210 vs agent types.ts line 275):**
- Provider `Message` = `UserMessage | AssistantMessage | ToolResultMessage` — strictly LLM-compatible
- `AgentMessage` = `Message | CustomAgentMessages[keyof CustomAgentMessages]` — extensible with custom app messages
- The boundary is `convertToLlm()` in agent-loop.ts which projects AgentMessage[] → Message[]

### 1.8 — TUI SEPARATION

**Confirmed:**
```
$ grep -r "from.*agent" packages/tui/src/
(no agent imports found)
```
The TUI package has zero imports from the agent or coding-agent packages. It's a pure terminal UI library.

**Interactive mode** (`interactive-mode.ts`):
- Line 435-450: `InteractiveMode` holds references to `AgentSession` and `AgentSessionRuntime` — these come from `coding-agent/src/core/agent-session.ts`
- Line 1741-1756: Subscribes to agent events via `this.subscribeToAgent()` which calls `session.agent.subscribe()`
- The TUI renders messages, status, etc. but NEVER drives the agent loop directly

**RPC mode** (`rpc-mode.ts`):
- Line 360: `session.agent.subscribe(...)` — same subscription pattern
- RPC mode receives JSON-RPC calls and forwards them to AgentSession

**Verdict: The agent runtime is truly headless.** Both interactive and RPC modes are subscribers to the Agent, not controllers. The Agent owns the loop; modes only observe and render.

### 1.9 — PI TESTS

```
Agent-loop tests: 21 passed, 0 failed
Test files in packages/agent: 18
Test files in packages/coding-agent: 187
```

---

## PART 2 — DEEP LANGGRAPH INTERNALS AUDIT

### 2.1 — STATE GRAPH BUILDER (`state.py`)

**a) Schema fields → channels (lines 245-270, `_add_schema`):**
- Ordinary field `x: int` → `LastValue` channel (state.py line 260-269: regular fields default to `LastValue`)
- `Annotated[T, reducer]` → `BinaryOperatorAggregate` channel with the reducer function
- `LastValue` (from `channels/last_value.py`): overwrites — new value replaces old. `BinaryOperatorAggregate`: calls `reducer(old, new)` to merge.
- The conversion happens in `_get_channels()` (called at line 248): inspects `__annotations__` and `__orig_bases__` to detect `Annotated` types

**b) `add_node` parameters (lines 292-340):**
- `node: StateNode[NodeInputT, ContextT]` — callable/runnable
- `defer: bool` — defer execution until run end
- `metadata: dict` — arbitrary metadata
- `input_schema` — override input schema
- `retry_policy: RetryPolicy | Sequence[RetryPolicy]` — per-node retry
- `cache_policy: CachePolicy` — per-node caching
- `error_handler: StateNode` — node-specific error handler
- `destinations: dict[str, str] | tuple[str, ...]` — **visual only** (for rendering), does NOT affect routing

**c) `add_edge([a, b], c)` compilation:**
Multi-source edges are stored in `waiting_edges: set[tuple[tuple[str, ...], str]]` (line ~215). At compile time (line ~1309), a waiting edge becomes a `NamedBarrierValue` channel: both `a` and `b` must write before `c` fires. From `channels/named_barrier_value.py`: the barrier waits for all named sources, then passes the value through.

**d) `compile()` (lines 1333-1357 → `CompiledStateGraph.__init__`):**
- Creates all channels from accumulated schemas
- Input channels: selected from `input_schema` fields
- Output channels: selected from `output_schema` fields
- Stream channels: selected from `stream_keys` or all channels
- START process: adds `__start__` as a special node that writes input to input channels, then edges to the entry point
- Result: a `CompiledStateGraph` wrapping a `Pregel` instance with all channels, nodes, edges compiled into trigger maps

### 2.2 — TYPES (`types.py`)

**a) Command (types.py lines 664-808):**
Fields: `update: StateUpdate | None`, `resume: Any | None`, `goto: str | Sequence[str] | Send | Sequence[Send] | None`, `graph: Command | None`
- `update`: partial state update merged via reducers
- `resume`: value to pass to `interrupt()` as the resume value
- `goto`: navigate to specific node(s) or Send fan-out — overrides normal edge routing
- `graph`: parent graph command for nested subgraphs
- **vs normal state update**: A node returning `dict` only updates state and follows static edges. `Command` can dynamically route, resume interrupts, and cross graph boundaries.

**b) Send (types.py lines 811-833):**
```python
Send(node: str, arg: Any)
```
Enables dynamic fan-out: a node returns `[Send("worker", data1), Send("worker", data2)]` and `worker` runs N times in parallel. Under the hood, Send writes to the `TASKS` channel.

**c) `interrupt()` (types.py lines 836-934):**
- Raises `GraphInterrupt` exception (a special internal exception caught by the runtime)
- Identified by `namespace + task_path + index` (for multiple interrupts in one node)
- Resume: on next invocation, `Command(resume=value)` is passed. The node's `interrupt()` call returns the resume value. The node RESTARTS FROM THE BEGINNING — any code before the `interrupt()` call re-executes.

**d) Stream modes (types.py lines 119-129):**
- `"values"`: full state after each step
- `"updates"`: node name → updates after each step
- `"custom"`: explicit `StreamWriter` calls
- `"messages"`: LLM token-by-token with metadata
- `"checkpoints"`: checkpoint events in `get_state()` format
- `"tasks"`: task start/result events
- `"debug"`: checkpoints + tasks

### 2.3 — PREGEL EXECUTION RUNTIME

**a) PregelLoop state (`_loop.py` lines 158-290):**
Owns: config, store, stream, step counter, checkpointer, nodes, channels, checkpoint (current snapshot), checkpoint_config, checkpoint_metadata, pending_writes, status, tasks dict, output, control (for cancellation/interrupts). This is the per-run execution state.

**b) ONE tick() iteration (from `_loop.py` and `main.py` stream loop):**
```
apply_writes()
  → read pending_writes, apply to channels via reducers
create checkpoint
  → snapshot channel_values + versions
  → put to checkpointer
check interrupt_after
  → if current node in interrupt_after → pause
prepare_next_tasks
  → determine which nodes trigger based on updated channels
check interrupt_before
  → if next node in interrupt_before → pause
emit output
  → stream values/updates/tasks/checkpoints per mode
```
**BSP guarantee**: Writes from step N are visible to step N+1. Within step N, sibling nodes run concurrently and do NOT see each other's writes — they all read the same snapshot. This is the Bulk Synchronous Parallel model.

**c) `_first` vs subsequent ticks:**
- New input: `_first` writes input to input channels, processes any `__start__` → first node edges, creates initial checkpoint
- Resuming from checkpoint: `_first` loads checkpoint via `checkpointer.get_tuple()`, restores channels to checkpoint state, replays pending writes, then continues from the node after the one that interrupted
- `Command` as resume input: `Command.resume` becomes the return value of `interrupt()`, `Command.update` is applied as state update

**d) `prepare_next_tasks` (`_algo.py`):**
- **Push tasks**: nodes triggered by writes to channels they read from. The trigger channel map (built at compile time) maps channel → [nodes that read from it].
- **Pull tasks**: nodes triggered by TASKS channel writes (Send/Command.goto). These are explicit scheduling, not data-driven.
- Trigger channels: the `trigger_to_nodes` mapping in `PregelLoop.__init__` (line 270) determines which nodes fire when a channel is written to.

### 2.4 — RUNNER AND CONCURRENCY (`_runner.py`)

**a) PregelRunner execution:**
- **Sync path** (lines 176-358): Uses `concurrent.futures` thread pool (`PregelRunner.submit()` wraps `run_with_retry` in `ThreadPoolExecutor.submit`)
- **Async path** (lines 360-572): Uses `asyncio` tasks (wraps in `asyncio.ensure_future`)
- **Task failure**: Caught by `run_with_retry`. If retries exhausted, the exception propagates. Error handlers can be scheduled (`schedule_error_handler`). Unhandled errors fail the run.

**b) Concurrency guarantees:**
- Sibling tasks within the same step are INDEPENDENT — they cannot see each other's writes
- Writes are collected individually via `put_writes(task_id, writes)` — each task reports its writes to the loop
- Writes are applied in batch at the start of the next tick (`apply_writes`)
- Write collection order doesn't matter because reducers are deterministic

**Verdict:** The runner provides true BSP parallelism — all nodes in step N read the same state, all writes from step N become visible in step N+1.

### 2.5 — CHECKPOINTS AND PERSISTENCE

**a) Checkpoint fields (`base/__init__.py` lines 92-131):**
- `v: int` — format version (currently 1)
- `id: str` — unique, monotonically increasing ID
- `ts: str` — ISO 8601 timestamp
- `channel_values: dict[str, Any]` — deserialized channel snapshots
- `channel_versions: ChannelVersions` — per-channel monotonic version numbers
- `versions_seen: dict[str, ChannelVersions]` — per-node record of which versions it has processed
- `updated_channels: list[str] | None` — which channels changed in this checkpoint

**b) `put_writes` vs `put` (base/__init__.py lines 277-318):**
- `put_writes`: stores intermediate writes linked to a checkpoint — happens DURING step execution, before the next checkpoint is created. These are the "pending writes" that become the next checkpoint's channel updates.
- `put`: stores the complete checkpoint snapshot — happens at the END of a step, after all writes from the previous step have been applied.
- **Why separate?** Writes can be persisted incrementally during long node executions (for durability), while checkpoints happen at BSP boundaries.

**c) CheckpointTuple (base/__init__.py lines 157-164):**
Adds `config` (RunnableConfig with thread_id + checkpoint_id), `metadata` (step, source, writes summary), `parent_config` (link to previous checkpoint), and `pending_writes` (writes not yet applied). The raw Checkpoint only has channel state — the tuple provides the navigational/lineage context.

**d) InMemorySaver (memory/__init__.py lines 1-100):**
- `storage: defaultdict[str, dict[str, dict[str, tuple]]]` — thread_id → checkpoint_ns → checkpoint_id → (type, serialized checkpoint)
- `writes: defaultdict[tuple[str, str, str], dict[tuple[str, int], tuple]]` — (thread_id, checkpoint_ns, checkpoint_id) → (task_id, idx) → (type, serialized write)
- Lookup: `get_tuple(config)` → extracts thread_id from config → navigates storage hierarchy → deserializes → returns CheckpointTuple
- **`thread_id` is the primary key** — every thread has its own checkpoint lineage

### 2.6 — WHAT LANGGRAPH DOES NOT GUARANTEE

**a) External side effects on retry: NOT rolled back.**
`_retry.py` (29 lines) only defines `default_retry_on()` — a predicate for which exceptions to retry. The actual retry mechanism (`run_with_retry` in the runner) re-executes the node function. Any HTTP calls, DB writes, or file operations inside the node fire AGAIN. There is no transaction manager, no compensation mechanism, no two-phase commit. The checkpoint only captures channel state — not external side effects.

**b) Interrupted + resumed node: RESTARTS FROM BEGINNING.**
When a node calls `interrupt()` and the graph is later resumed, the ENTIRE node function runs again from line 1. The `interrupt()` call returns the resume value. Any code before the `interrupt()` call re-executes. This means:
- File reads before interrupt → read again (idempotent if read-only)
- API calls before interrupt → called again (NOT idempotent unless explicitly designed)
- Expensive computation before interrupt → paid again

**c) Checkpoint recovery:**
- **Recovered**: channel values (state), node progress (which nodes ran), message history (if stored in state)
- **NOT recovered**: in-flight LLM streams, partially received tool results, external side effects, any state not in channels (local variables, intermediate computation)

---

## PART 3 — WEAVER CONTEXT

### Weaver's current code

**`turn.py` (351 lines):** A clean async turn loop. One `while model_steps < max_steps` loop that streams model responses and executes tool calls. Events: `TEXT_DELTA`, `COMPLETE_TOOL_CALL`, `RESPONSE_COMPLETED`, `RESPONSE_FAILED`. Tool dispatch is sequential per-turn, with `ToolExecutionContext` carrying a `cancel_event`. Persistence is via a `PersistCallback` called for each new message. No checkpoints, no BSP, no graph — just a straightforward imperative loop.

**`session.py` (125 lines):** Thin `AgentSession` owning history, tool registry, model client, and cancellation. Busy-input policy with one pending message slot. Delegates turn execution to `run_turn()`.

**`messages.py` (109 lines):** Four canonical message types — `UserMessage`, `AssistantMessage`, `ToolCallMessage`, `ToolResultMessage`. `project_messages()` converts to provider-ready dicts.

**`model.py` (87 lines):** Provider-neutral types: `Message`, `ModelRequest`, `ModelStreamEvent`, `Usage`, `ToolDefinition`. Five event types: `TEXT_DELTA`, `THINKING_DELTA`, `COMPLETE_TOOL_CALL`, `RESPONSE_COMPLETED`, `RESPONSE_FAILED`.

**`client.py`:** `ModelClient` protocol with `complete()` and `stream()` methods. Implementations: `DeepSeekClient` (live), `FakeModelClient` (tests).

### Weaver's requirements (from `weaver.md`)
- Lifelong novel-reading companion
- Durable multi-stage workflows: classify → retrieve → inspect sources → synthesize → verify canon/opinion separation → human review → commit memory
- Multiple memory systems: scene, world, meaning, narrative, conversational
- Interpretive journal with persistent revisable opinions
- Counterfactual reasoning
- Repeated reading passes with consolidation
- Must never expose novel content, receipts, raw reasoning, or credentials

### Weaver tests
```
73 passed, 0 failed
```

---

## PART 4 — COMPARISON AND RECOMMENDATION

### 4.1 — ARCHITECTURAL IDENTITY

**a) What IS Pi's architecture?**

Pi is an **imperative streaming agent loop with event-driven extensibility**. Control flow is a nested while-loop: an inner tool-call/steering loop inside an outer follow-up loop (`agent-loop.ts:155-275`). State lives in `Agent` (`agent.ts:52-67`) — a mutable transcript plus streaming flags. The model boundary is a clean `AgentMessage[] → Message[]` projection (`agent-loop.ts:281-310`). Extensions hook into lifecycle events (`types.ts` lines 35-65) as subscribers, not controllers. Sessions are JSONL-append-only trees (`session-manager.ts:39-43`) with non-destructive compaction (`compaction.ts:95-108`). The TUI is a pure observer — it subscribes to agent events but never drives the loop (`interactive-mode.ts:435-450`, TUI has zero agent imports).

**b) What IS LangGraph's architecture?**

LangGraph is a **Bulk Synchronous Parallel (BSP) state machine with checkpoint-based persistence**. Control flow is a compiled graph: nodes read/write typed channels, edges are dataflow triggers, and the runtime (`Pregel`) executes supersteps where all triggered nodes run concurrently, their writes are collected, and a checkpoint is created atomically (`_loop.py:158-290`, `_runner.py:176-358`). State is defined by a typed schema — each field is a channel with a reducer (`state.py:245-270`). Persistence is via `BaseCheckpointSaver` — checkpoints capture complete channel state at step boundaries and writes are stored incrementally (`base/__init__.py:92-318`). Control flow can be dynamically redirected via `Command` and `Send` (`types.py:664-833`). Human-in-the-loop uses `interrupt()` which pauses execution and can be resumed (`types.py:836-934`).

### 4.2 — PI: WHAT TO ADOPT, WHAT TO AVOID

**a) Patterns Weaver should COPY:**

1. **Provider-neutral canonical messages** (`messages.py`, `model.py`): Weaver's existing message types already follow this pattern. Pi validates it works at scale. The key insight: projection happens at the boundary (`project_messages()`), never in the loop.

2. **Event-driven persistence with durable boundaries** (`agent-loop.ts:191-220`, `session-manager.ts:1017-1040`): Persist at message boundaries, not every delta. JSONL append-only gives crash safety. Weaver should adopt this for its conversation history — each `UserMessage`, `AssistantMessage`, `ToolCallMessage`, `ToolResultMessage` is one appended JSONL line.

3. **Non-destructive compaction** (`compaction.ts:95-108`): Compaction creates a summary entry pointing past old entries — never deletes. For Weaver, this means scene summaries or arc retellings can compact the raw retrieval context without losing the ability to re-expand if needed.

4. **Cancel-event propagation** (`turn.py:70-80`, `agent-loop.ts:409-415`): Weaver already has `cancel_event: asyncio.Event` passed through turn execution and tool dispatch. Pi validates this pattern: check `signal?.aborted` at every yield point.

5. **Two-queue message injection** (`agent-loop.ts:167,252`): Steering (mid-work) vs follow-up (post-work). For Weaver: user can "steer" during retrieval ("look at chapter 10 instead") vs "follow up" after synthesis ("now also check Nephis's perspective").

**b) Patterns Weaver should AVOID:**

1. **Monolithic session-manager (1712 lines):** Pi's session manager mixes file I/O, tree traversal, context building, compaction, branch summaries, and extension storage. Weaver's memory systems (scene, world, meaning, narrative, conversational) should each own their storage, not be one giant file.

2. **Compaction as primary context management:** Pi relies heavily on LLM-generated summaries to handle long sessions. For Weaver, this is dangerous — a mistaken compaction can corrupt scene memory or lose critical canon distinctions. Weaver needs structured memories with explicit invalidation, not just summarization.

3. **Extension system complexity:** Pi's extension types file is 1700+ lines with hooks for everything. Weaver doesn't need a plugin system yet. A few well-defined interfaces (tool registry, memory backends) are enough.

4. **TypeScript declaration merging for custom messages** (`types.ts:275`): Pi uses module augmentation for custom message types. Weaver's Python dataclasses with discriminated unions are cleaner.

5. **Pi's model/provider abstraction layer** (`models.ts` — 600+ lines): Weaver uses a simple `ModelClient` protocol. Keep it simple until you need multi-provider routing, auth management, dynamic model lists, etc.

**c) Pi's strongest single design principle:**

**The agent owns the loop; everything else subscribes.** The Agent controls execution, the TUI observes, extensions react, sessions persist. Nothing drives the agent except `prompt()`/`continue()`.

**d) If Weaver copied Pi's exact architecture today, what would break first?**

Pi's architecture assumes a single linear conversation thread with occasional compaction. Weaver needs multiple concurrent memory systems (scene extraction runs parallel to timeline building), repeated reading passes that can be composed as pipelines, and long-running background consolidation. Pi's nested-while-loop can't express "run scene extraction pass on chapters 1-100, wait for all to finish, then run consolidation on the combined results." You'd need to build workflow orchestration outside the turn loop.

### 4.3 — LANGGRAPH: WHAT TO ADOPT, WHAT TO AVOID

**a) Capabilities Weaver NEEDS:**

1. **BSP execution for reading passes** (`_runner.py:176-358`, `_loop.py:599-847`): Weaver's repeated reading passes (literal, character, world, narrative, interpretive, critical) are inherently parallel. Each pass reads the same chapter, writes to different memory stores. BSP ensures they don't interfere. LangGraph's model: each pass is a node, all run concurrently, results are merged in the next superstep.

2. **Checkpoint-based workflow durability** (`base/__init__.py:92-318`): Weaver's multi-stage workflow (classify → retrieve → inspect → synthesize → verify → review → commit) can take many model calls. If it crashes mid-synthesis, restarting from scratch is wasteful. LangGraph checkpoints would let it resume from the last completed stage.

3. **`interrupt()` for human review gates** (`types.py:836-934`): Weaver's "human review → commit memory" step requires pausing. `interrupt()` plus `Command(resume=...)` is exactly the right mechanism: the workflow pauses, waits for human approval, then continues with the review feedback.

4. **Typed state with reducers** (`state.py:245-270`): Weaver's memory stores can be typed state fields: `scene_memory: Annotated[list[Scene], merge_scenes]`, `world_state: Annotated[WorldState, apply_changes]`. Reducers make concurrent writes safe — two reading passes can both write to world state without coordination.

5. **`Send` for fan-out retrieval** (`types.py:811-833`): "Find every scene where Sunny uses shadow abilities" → fan out to N retrieval workers → collect results. `Send("retriever", query)` with a reducer that deduplicates and ranks.

**b) Patterns Weaver should AVOID or ISOLATE:**

1. **Graph as the only control flow model:** Not everything is a graph node. Conversational turns (Weaver chatting with the user) need an imperative loop, not a compiled state machine. Conversations are open-ended — you can't pre-compile the graph of all possible conversation flows.

2. **`Command.goto` for dynamic routing:** LangGraph's `Command` can dynamically redirect to arbitrary nodes. This makes the graph non-deterministic and hard to reason about. For Weaver's reading pipeline, static edges are clearer and testable.

3. **LangGraph's retry-on-failure semantics:** If a scene extraction node fails and retries, any side effects (API calls, file writes) happen twice. Weaver should handle retries at the ModelClient level (with idempotency keys for external writes), not rely on graph-level retry.

4. **Checkpoint as the only durability mechanism:** LangGraph saves complete channel state at every step. For Weaver's memory stores (potentially large), differential updates would be more efficient than full snapshots.

5. **Over-reliance on `interrupt()` for control flow:** It's tempting to use `interrupt()` for everything (confirmation dialogs, error recovery, branching). But every interrupt is a potential deserialization/resume boundary — the node restarts from the beginning. Code before `interrupt()` must be idempotent.

**c) LangGraph's most dangerous abstraction for Weaver:**

**The assumption that all state lives in typed channels with reducers.** This works beautifully for structured data (scene lists, world facts) but fails for literary interpretation. An opinion like "Sunny's relationship with fate gradually changes from fear to negotiation" can't be expressed as a reducer merge — it needs to be written, compared, debated, and revised by a single reasoning process. Weaver's meaning memory and interpretive journal need single-writer semantics, not concurrent reducer merges.

### 4.4 — CAN THEY COEXIST?

**a) Clean boundary:**

**Pi-style imperative loop owns:**
- Conversational turn taking (user speaks → Weaver responds)
- Streaming response rendering
- Simple tool dispatch (search, look up fact, retell scene)
- Conversation memory (what was discussed, user preferences)
- Cancellation and interruption of the current turn

**LangGraph workflow graph owns:**
- Multi-stage reading pipelines (classify → retrieve → inspect → synthesize → verify → review → commit)
- Parallel reading passes over chapters
- Consolidation across memory stores
- Long-running background tasks (re-indexing, opinion revision)
- Checkpoint-based durability for complex workflows

**Neither touches:**
- The original novel files (immutable source)
- The interpretive journal (single-writer, opinionated prose)
- Credential/secret management
- Raw reasoning traces (ephemeral, never persisted)

**b) Data flow at the boundary:**

```text
Conversational request
       ↓
Pi-style loop: parse intent, determine if simple or complex
       ↓
  ┌────┴────┐
  ↓         ↓
simple    complex: build workflow input from conversation context
turn      ↓
       LangGraph workflow: execute reading pipeline
       (checkpoint after each stage)
       ↓
       Workflow result: synthesized answer + memory updates
       ↓
Pi-style loop: format response, update conversation memory
       ↓
Stream response to user
```

The boundary conversion is: `ConversationMessage[]` → extract the user's intent, relevant context, and any active theories → build `WorkflowInput` (a typed dict) → invoke graph → receive `WorkflowOutput` → convert back to a conversational response.

**c) SINGLE most important rule:**

**The Pi-style loop is the ONLY entry point for user conversations. The graph is invoked as a tool, not as a peer orchestrator.** If the graph tries to talk to the user directly, you have two competing orchestrators. The loop owns the user relationship; the graph owns multi-step computation.

### 4.5 — WEAVER'S CURRENT CODE AND CONCRETE CHANGES

**a) Does `turn.py` need to be rewritten?**

No. It can be wrapped as a graph node. The turn loop is already a clean async function: `run_turn(model, system_prompt, history, tool_registry, active_tools, cancel_event, persist_message) → TurnResult`. This is a perfect graph node signature: `State → Partial<State>`. A LangGraph node would call `run_turn()`, extract the result, and write back to state channels.

**b) SMALLEST change for durable multi-stage workflows:**

Add a `WorkflowRunner` class in `src/weaver/workflow/runner.py` (~50 lines) that:
1. Accepts a sequence of async functions (stages)
2. After each stage, checkpoints state dict to a JSON file
3. On restart, loads the last checkpoint and resumes from the next stage
4. Each stage returns `{"status": "ok", "output": ...} | {"status": "interrupt", "message": ..., "state": ...}`

This gives durability without LangGraph's complexity. Add LangGraph later when parallel reading passes and BSP coordination are actually needed.

### 4.6 — FINAL RECOMMENDATION

**RECOMMENDATION: Hybrid**

**JUSTIFICATION:** Pi's imperative loop is proven for conversational turns and Weaver's current code already matches it. LangGraph's BSP model solves Weaver's upcoming parallel reading and durability needs. Using both — with the loop owning the user and the graph as a tool — gives each side a clear boundary. Weaver doesn't need LangGraph yet, but building the loop→workflow interface now prevents future architecture collision.

**FIRST CONCRETE STEP:**

Create `src/weaver/workflow/runner.py`:

```python
"""Durable sequential workflow runner — checkpoint after each stage."""

@dataclass
class WorkflowStage:
    name: str
    fn: Callable[[dict, asyncio.Event], Awaitable[dict]]

async def run_workflow(
    stages: list[WorkflowStage],
    state: dict,
    checkpoint_path: str,
    cancel: asyncio.Event,
) -> dict:
    completed = _load_checkpoint(checkpoint_path)
    for stage in stages[completed:]:
        if cancel.is_set():
            break
        state = await stage.fn(state, cancel)
        _save_checkpoint(checkpoint_path, stage.name, state)
        if state.get("__interrupt__"):
            break  # human gate
    return state
```

This gives Weaver durable pipelines today. LangGraph can replace it later when parallel reading passes justify the complexity.

**BIGGEST RISK OF THIS CHOICE:**

The Pi-style loop and LangGraph graph could evolve into two competing orchestrators if the workflow runner starts managing conversations or the loop starts orchestrating reading pipelines. **Detect early by**: requiring every new capability to be assigned to exactly ONE side (loop or graph) in its design doc, with explicit justification. If a capability needs both sides, the interface must be documented before implementation.

---

## PART 5 — VERIFICATION TABLE

| Check | Result |
|---|---|
| Pi version verified | v0.82.1 + 50 commits (effectively latest: Y) |
| Pi changelog found | `packages/agent/CHANGELOG.md` |
| LangGraph version verified | 1.2.10 (latest: Y) |
| LangGraph changelog found | `libs/sdk-py/CHANGELOG.md` (core: none) |
| Pi agent-loop tests | 21 passed, 0 failed |
| LangGraph focused tests | Blocked: `conftest.py` requires `redis` module |
| Weaver tests | 73 passed, 0 failed |
| Weaver turn.py reviewed | Y |
| Weaver weaver.md reviewed | Y |
| Pi agent-loop.ts (792 lines) | Y |
| Pi agent.ts (complete) | Y |
| Pi types.ts (complete) | Y |
| Pi session-manager.ts (types + persistence) | Y |
| Pi compaction.ts (cut algorithm + storage) | Y |
| Pi extensions (runner.ts + types.ts) | Y |
| Pi models.ts + ai/types.ts | Y |
| Pi TUI isolation verified | Y (no agent imports in tui/) |
| LangGraph state.py (StateGraph + compile) | Y |
| LangGraph types.py (Command, Send, interrupt, streams) | Y |
| LangGraph _loop.py (PregelLoop) | Y |
| LangGraph _runner.py (sync tick, concurrency) | Y |
| LangGraph checkpoint base + memory | Y |
| LangGraph retry guarantees | Y (29-line _retry.py) |
