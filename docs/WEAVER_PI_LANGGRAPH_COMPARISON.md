# Weaver architecture decision: Pi vs. LangGraph

**Earlier source comparison, retained as the reason LangGraph is conditional.**

The original inspection used pinned source revisions:

- Pi: `d7b02636a0c7e8e615d0cff70679d18d2ff59573`
- LangGraph: `41341457342327166d72fc11952ab28fb61ec0bf`

The obsolete temporary checkout paths have been removed. Plan 006's corrected
source study is
[`WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md`](WEAVER_CODEX_HERMES_CONVERSATION_COMPARISON.md),
and the accepted documentation decision is
[`docs/decisions/006-conversation-architecture.md`](docs/decisions/006-conversation-architecture.md).

This is a source comparison, not a recommendation based on product positioning. “Pi” below distinguishes the small `packages/agent` runtime from the much larger `packages/coding-agent` application layer.

## Executive decision

Build Weaver around a **small imperative, event-emitting conversation loop**, closer to Pi’s `Agent`/`runLoop`, but **do not adopt Pi’s coding-agent session model wholesale**. Implement Weaver’s durable memory as domain-owned, typed records (books, passages, claims, evidence links, reading episodes, conversation turns, interpretation revisions), not as either a Pi transcript JSONL or opaque graph state.

Use graph execution selectively for **bounded, inspectable background workflows**—for example ingest → segment → extract entities → propose claims → link evidence → verify—where replay, per-step retry, fan-out, and pause/resume have real value. If Weaver is Python-first and those workflows become operationally complex, LangGraph is a credible runtime. It should not become Weaver’s universal control plane or memory model by default.

The key split is:

1. **Conversation/session coordinator:** imperative and responsive.
2. **Durable Weaver memory:** application-owned database and schemas.
3. **Optional workflow runner:** graph-shaped only for genuinely multi-stage durable jobs.
4. **UI adapters:** TUI and web consume one transport-neutral event/command protocol.

## What the implementations actually are

### Pi: explicit loop plus a stateful façade

Pi’s core is ordinary control flow. `runLoop()` has an outer follow-up loop and inner tool/steering loop, streams one assistant response, executes tool calls, emits turn events, and stops explicitly (`packages/agent/src/agent-loop.ts:155-275`, symbol `runLoop`). `streamAssistantResponse()` adapts a provider stream into `message_start`, `message_update`, and `message_end` events (`agent-loop.ts:281-371`).

`Agent` owns transcript/runtime state, queues, listeners, and one `AbortController` (`packages/agent/src/agent.ts:165-230`, symbol `Agent`). It exposes `subscribe`, `steer`, `followUp`, `abort`, `waitForIdle`, `prompt`, and `continue` (`agent.ts:233-376`). The injected `streamFunction` is the principal model boundary (`agent.ts:177-223`, `398-468`).

Pi coding-agent then adds a very large application service. `AgentSession` is shared by interactive, print, and RPC modes and claims model management, persistence, compaction, bash, switching, and branching (`packages/coding-agent/src/core/agent-session.ts:1-14`). Its constructor subscribes to core events for persistence/extensions/retry/compaction (`agent-session.ts:375-400`), and its event handler persists finalized user/assistant/tool-result messages (`agent-session.ts:618-665`).

### LangGraph: a compiled graph on a Pregel/BSP runtime

`StateGraph.compile()` validates nodes/edges and produces a runnable supporting invoke, stream, batch, and async execution (`libs/langgraph/langgraph/graph/state.py:1116-1218`, symbols `StateGraph.validate`, `StateGraph.compile`). The lower-level `Pregel` runtime schedules actors connected by channels using plan/execution/update supersteps; writes from step N become visible in step N+1 (`libs/langgraph/langgraph/pregel/main.py:450-523`, symbol `Pregel`).

`PregelRunner.tick()` executes selected tasks concurrently, commits writes, yields stream control, handles retry/error routing, and stops peers on failure (`pregel/_runner.py:135-358`, symbol `PregelRunner`). `PregelLoop` owns channels, tasks, step state, checkpointer, durability, interrupts, retry/cache policies, and checkpoint metadata (`pregel/_loop.py:158-320`, symbol `PregelLoop`). This is a real workflow runtime, not just syntax around a `while` loop.

## Comparison by Weaver concern

### 1. Imperative agent loop vs. graph runtime

**Pi strengths**

- The control path is legible in one function. Steering is polled between turns, tool calls are executed, follow-ups are drained, and termination is explicit (`agent-loop.ts:166-274`).
- Runtime policy is easy to change directly: `prepareNextTurn`, `shouldStopAfterTurn`, context transforms, sequential/parallel tools, and before/after tool hooks are explicit seams (`agent-loop.ts:226-257`; `agent.ts:191-230`, `434-468`).
- A conversational agent naturally has one dominant loop, so the abstraction matches the workload.

**Pi costs**

- Every new durable branch, retry boundary, resume point, or parallel stage must be designed manually.
- `AgentSession` demonstrates the likely growth path: 3,332 lines combining model/auth, extensions, persistence, compaction, retries, bash, and tree navigation. The small loop stays understandable; the orchestration service does not (`core/agent-session.ts`).

**LangGraph strengths**

- Explicit nodes/edges and conditional edges (`graph/state.py`, symbols `add_node` at 375+, `add_edge` at 915, `add_conditional_edges` at 969) are useful when independent stages, fan-out, joins, retries, and persisted boundaries are requirements.
- The scheduler has defined concurrency and superstep semantics (`pregel/main.py:458-477`; `_runner.py:176-358`).

**LangGraph costs**

- Simple conversation logic is distributed across graph declarations, channel reducers, compiled runtime, configs, and checkpoint semantics.
- BSP boundaries are runtime semantics Weaver engineers must understand; they are not free structure.
- The core runtime is large: `pregel/main.py`, `_loop.py`, and `_runner.py` total 7,293 lines at this revision, before graph builders and checkpoint packages.

**Weaver decision:** imperative for the live reader/conversation loop; graph only for workflows whose operational state machine is materially more complex than a loop.

### 2. UI separation

**Pi**

- The intended separation is good: `AgentSession` is shared across interactive, print, and RPC modes (`agent-session.ts:1-14`). RPC maps commands/events without requiring the TUI, including abort and session operations (`modes/rpc/rpc-mode.ts:352-429`).
- Human UI requests are transportable discriminated messages: select, confirm, input, editor, notify, status/widget/title operations and correlated responses (`modes/rpc/rpc-types.ts:233-283`, `RpcExtensionUIRequest`/`RpcExtensionUIResponse`).
- Separation is imperfect: core `AgentSession` imports interactive theme functions (`agent-session.ts:48`) and also owns HTML export and bash concerns. The TUI implementation is a huge mode-specific class (`modes/interactive/interactive-mode.ts`), but the shared core is not completely presentation-free.

**LangGraph**

- Core has no terminal/web UI. It exposes runnable/stream/checkpoint/interrupt primitives; an application must build its own protocol.
- This is clean separation, but not a ready UI architecture. The `langgraph-sdk` dependency and remote graph machinery are transport/runtime integration, not a Weaver-specific view model.

**Weaver decision:** copy Pi’s **event/command boundary and correlated UI-request idea**, not its TUI components or `AgentSession` coupling. TUI and web should project the same domain events into different views.

### 3. Persistence and checkpointing

**Pi**

- `SessionManager` is an append-only JSONL tree. Entries have `id`, `parentId`, and timestamp; types include messages, model/thinking changes, compaction, branch summaries, custom entries, custom messages, labels, and session info (`core/session-manager.ts:30-166`).
- `CustomEntry` explicitly supports extension state that is excluded from LLM context, while `CustomMessageEntry` participates in context (`session-manager.ts:94-141`).
- `_persist` writes/append-writes JSON lines, and `_appendEntry` advances a leaf (`session-manager.ts:1015-1066`). `branch()` moves the leaf to an earlier entry without deleting the old path (`session-manager.ts:1355-1364`).
- Persistence occurs at `message_end`, so finalized messages are durable, but token deltas and arbitrary in-flight tool progress are not checkpoints (`agent-session.ts:624-643`).

This is excellent for an inspectable local transcript and lightweight branching, but weak as Weaver’s lifelong multi-entity memory: no transactional cross-record invariants, indexing/query model, evidence graph, background-job leases, or first-class intermediate-write recovery.

**LangGraph**

- `BaseCheckpointSaver` defines versioned checkpoints plus `put_writes` for intermediate task writes and sync/async APIs (`libs/checkpoint/langgraph/checkpoint/base/__init__.py:176-318`, symbol `BaseCheckpointSaver`). `thread_id` is the primary key required for save/resume/time travel (`base/__init__.py:182-199`).
- `StateGraph.compile(checkpointer=...)` provides versioned short-term state, pause/resume, and replay (`graph/state.py:1182-1201`).
- Runtime durability is explicit: `sync`, `async`, or `exit` (`pregel/main.py:2703-2711`); the loop orders delta writes before checkpoints (`pregel/_loop.py:201-223`).
- `InMemorySaver` is explicitly testing/debug only; production expects another saver such as Postgres (`checkpoint/memory/__init__.py:33-65`).

This is stronger execution checkpointing, but checkpoint state is still not a substitute for Weaver’s semantic memory. Treating a serialized graph state as the source of truth would make evidence queries, migrations, and independent memory evolution harder.

**Weaver decision:** implement a domain event/record store as the system of record. If using LangGraph for jobs, store only workflow progress/checkpoints in its saver and store accepted claims/evidence through idempotent domain commands. Never make a checkpoint blob the canonical novel interpretation.

### 4. Streaming

**Pi**

- Provider deltas map directly to semantic lifecycle events, with a mutable partial assistant message and explicit start/update/end (`agent-loop.ts:308-371`).
- `Agent.subscribe()` listeners are awaited in subscription order and included in run settlement, giving natural backpressure and deterministic persistence ordering (`agent.ts:233-245`, `523-527`).
- RPC separately subscribes to session events and to the core agent for backpressure (`modes/rpc/rpc-mode.ts:352-360`).

**LangGraph**

- `Pregel.stream()` supports full values, node updates, custom events, token messages, checkpoints, tasks, and debug streams, including multiple modes and subgraph namespaces (`pregel/main.py:2655-2723`). V2 uses discriminated `StreamPart` types (`langgraph/types.py:262-365`).
- `PregelRunner` yields as tasks finish, while eager/message/custom modes add concurrent stream wakeups (`pregel/main.py:2923-2988`).

**Weaver decision:** define a smaller stable stream protocol inspired by both: `run.started`, `assistant.delta`, `assistant.final`, `tool.started/progress/final`, `memory.proposed/committed`, `approval.requested/resolved`, `run.cancelled/failed/completed`. Add sequence numbers and resumable cursors for web reconnects. Do not expose LangGraph’s raw stream modes directly to UI clients.

### 5. Cancellation

**Pi**

- One `AbortController` is created per active run; its signal is passed through model streaming and tools, and `Agent.abort()` triggers it (`agent.ts:306-314`, `471-493`). `AgentSession.abort()` also cancels retries and waits until idle (`agent-session.ts:1539-1546`).
- Correctness still depends on every provider/tool honoring `AbortSignal`; Pi’s shape makes that contract obvious.

**LangGraph**

- Async cancellation is real for async nodes: cancelling `ainvoke` delivers `CancelledError` at an await point (`libs/langgraph/tests/test_runtime.py:734-786`).
- Sync nodes run in an executor; cancelling async invocation disconnects the future while the thread can continue as an orphan (`test_runtime.py:789-803`).
- `RunControl.request_drain()` is cooperative shutdown, distinct from hard cancellation (`test_runtime.py:670-730`). Remote streams call server run cancellation (`pregel/_remote_run_stream.py:227-233`, `355-363`).

**Weaver decision:** own a platform-level cancellation token and require all model, retrieval, and tool adapters to accept it. Make writes idempotent and commit only finalized domain operations. A graph runtime does not remove non-cooperative sync cancellation hazards.

### 6. Human input

**Pi**

- `steer()` injects after the current assistant turn; `followUp()` waits until the agent would stop (`agent.ts:275-283`; loop polling at `agent-loop.ts:166-190`, `259-268`). `AgentSession.prompt()` requires callers to choose this behavior while streaming (`agent-session.ts:1105-1171`).
- Extension UI request/response types can solicit form-like input over RPC (`rpc-types.ts:237-283`).
- These are live-process queues, not durable arbitrary-node interrupts.

**LangGraph**

- `interrupt(value)` raises a resumable graph interrupt; resume uses `Command(resume=...)` and requires a checkpointer (`langgraph/types.py:811-900`).
- Critical semantic: resumption starts the node again and re-executes logic before the interrupt (`types.py:822-831`). Side effects before `interrupt()` must therefore be idempotent or moved elsewhere.

**Weaver decision:** use two distinct domain concepts: (a) Pi-style conversational steering/follow-up, and (b) durable approval requests stored in the database. If LangGraph implements the latter, enforce idempotency and isolate pre-interrupt side effects.

### 7. Extensibility

**Pi**

- Core extension seams are direct function injection: stream provider, context conversion/transform, turn preparation, tool hooks, and queues (`agent.ts:177-230`, `434-468`).
- Coding-agent has a broad plugin API. `createExtensionAPI()` registers handlers, tools, commands, shortcuts, flags, and renderers (`core/extensions/loader.ts:230-307`); typed event overloads cover session, context, provider, agent, message, tool, and input lifecycle (`extensions/types.ts:1190-1247`).
- Benefit: rich product customization. Cost: a large privileged API, stale-context lifecycle rules, and strong coupling to coding-agent concepts.

**LangGraph**

- Extension is composition: add nodes/edges/conditional edges/subgraphs; inject stores/checkpointers/caches; wrap runnables and callbacks. This is structurally powerful but generally requires graph recompilation and knowledge of state/reducer semantics.

**Weaver decision:** keep a narrow typed plugin surface: model adapters, memory retrievers, analyzers, importers, UI renderers, and lifecycle observers. Do not begin with Pi’s full extension API. Prefer capability-scoped interfaces over access to a giant session context.

### 8. Debugging and observability

**Pi**

- Lifecycle events provide a simple chronological trace. JSONL sessions are human-readable, preserve tree branches, and expose `getEntries()`, `getTree()`, and branch/context reconstruction (`session-manager.ts:1260-1311`).
- It lacks a generic persisted in-flight execution model; reproduction relies on transcript/session fixtures and mocked providers/tools.

**LangGraph**

- Streams include checkpoint and task start/result/error data (`langgraph/types.py:142-258`, `310-350`). Runtime exposes `get_graph`, `get_state`, `get_state_history`, and `update_state` (`pregel/main.py:845`, `1392`, `1480`, `2515`). Checkpoints support time travel.
- More visibility comes with more framework-shaped data; debugging reducer/channel/superstep behavior can be harder than debugging a direct call stack.

**Weaver decision:** implement structured run spans and an append-only domain audit log regardless of runtime. Include prompt/model/tool versions, source passage IDs, claim IDs, timing, token/cost data, and causation IDs. Add graph task/checkpoint details only for graph-backed jobs.

### 9. Testing

**Pi**

- At this revision, `packages/agent/test` plus `packages/coding-agent/test` contain 205 `*.test.ts[x]` files. The core loop tests inject a `MockAssistantStream` and assert exact lifecycle sequences (`packages/agent/test/agent-loop.test.ts:1-163`). There are focused regression/session tests for settlement, queues, retries, compaction, persistence, branching, dynamic providers/tools, and concurrency.
- Direct injection makes unit tests small, but the large `AgentSession` requires many regression tests because many policies share mutable state.

**LangGraph**

- `libs/langgraph/tests` contains 49 core `test_*.py` files and checkpoint packages add 19. Individual files are large and heavily parameterized. Checkpointer fixtures exercise memory, SQLite, Postgres, sync/async, pools/pipelines, encryption, and strict serialization (`libs/langgraph/tests/conftest_checkpointer.py:1-172`). Cancellation behavior is explicitly tested for async and sync nodes (`test_runtime.py:670-849`).
- This is strong runtime coverage, but Weaver still needs domain invariants and end-to-end evidence tests; framework tests do not buy those.

**Weaver decision:** follow Pi’s dependency-injected fake streams for conversation tests and LangGraph’s backend contract-suite pattern for durable stores. Add domain tests: every interpretive claim cites existing passages, revisions preserve provenance, retries are idempotent, and UI reconnect replay is ordered.

### 10. Dependencies and coupling

**Pi**

- `pi-agent-core` has a small direct set but depends on `@earendil-works/pi-ai` and Pi’s message/model/event types (`packages/agent/package.json:31-36`). Coding-agent adds Pi TUI plus numerous CLI/file/rendering dependencies (`packages/coding-agent/package.json:41-59`).
- Provider neutrality is concrete: `Agent.streamFunction` is injected, and pi-ai resolves registered API providers and exposes `stream`/`streamSimple` (`packages/ai/src/compat.ts:127-145`, `250-288`). Still, adopting its types couples Weaver to Pi’s model/message schema.
- `AgentSession` has visible cross-layer coupling (interactive theme import, HTML export, bash, extensions, auth/model runtime in one class; `agent-session.ts:48-109`).

**LangGraph**

- Core depends on `langchain-core`, checkpoint, SDK, prebuilt, Pydantic, and xxhash (`libs/langgraph/pyproject.toml:26-33`); imports from `langchain_core` occur throughout graph, pregel, callbacks, config, and streaming modules.
- It is model-provider agnostic in the sense that nodes are arbitrary callables, but token-level `messages` streaming and runnable/config/callback conventions are LangChain-shaped.
- Checkpoint protocols are cleanly packaged, but using graph runtime still adopts LangChain runnable/config and serialization concepts.

**Weaver decision:** define Weaver-owned `ModelClient`, `ModelEvent`, `Tool`, `RunEvent`, and persistence interfaces. Write adapters for pi-ai or LangChain providers rather than allowing either framework’s types into domain memory schemas.

## What Weaver should adopt, adapt, or reject

| Piece | Decision | Reason |
|---|---|---|
| Pi `runLoop` control style | **Reimplement/adapt** | Best fit for live conversation; small and explicit. |
| Pi `StreamFn` injection | **Adopt as a pattern** | Provider-neutral seam and easy fake streams. Keep Weaver-owned types. |
| Pi lifecycle events and awaited subscribers | **Adopt, with sequence IDs** | Good UI/persistence backpressure boundary. Add durable replay for web. |
| Pi steering/follow-up queues | **Adopt** | Correctly distinguishes mid-run guidance from next request. |
| Pi `AbortSignal` propagation | **Adopt** | Simple end-to-end cooperative cancellation contract. |
| Pi RPC UI request/response union | **Adapt** | Useful shared TUI/web protocol; remove coding-specific methods. |
| Pi JSONL session tree | **Use only for export/debug, not canonical memory** | Inspectable, but insufficient query/transaction model for lifelong memory. |
| Pi `AgentSession` | **Do not copy wholesale** | Too many responsibilities and coding/TUI/auth/bash concepts. Split services. |
| Pi extension system | **Start much narrower** | Powerful but privileged and lifecycle-heavy. Add capabilities as requirements appear. |
| LangGraph StateGraph/Pregel for every turn | **Reject by default** | Complexity and coupling exceed value for a dominant conversation loop. |
| LangGraph for bounded durable pipelines | **Conditionally adopt** | Valuable for fan-out/join, retries, checkpoints, replay, and human pauses. |
| LangGraph checkpointer as Weaver memory | **Reject** | Execution state is not semantic/evidence memory. |
| LangGraph checkpointer protocol ideas | **Adopt as design input** | Version IDs, parent checkpoints, pending writes, backend contract tests are useful. |
| LangGraph `interrupt` | **Conditionally adopt** | Good durable HITL, but node replay/idempotency semantics must be explicit. |
| LangGraph stream modes | **Keep internal** | Rich diagnostics, but too framework-specific for public UI contracts. |

## Concrete Weaver target architecture

Plan 006 records these future contracts:

1. **`ConversationRepository`** stores relationships, conversations, turns,
   and immutable items.
2. **`RunRepository`** stores attempts, canonical phase, recovery choices,
   approvals, and queued work.
3. **`RelationshipMemoryRepository`** stores owner-attributed relationship
   records under risk-based save controls.
4. **`OpinionRepository`** stores Weaver-attributed, source-linked, revisable
   opinions separately.
5. **`ContextAssembler`** builds a replaceable projection from versioned
   canonical sources.
6. **`ConversationRunner`** keeps the existing direct model/tool loop.
7. **`RunCoordinator`** is direct first, with LangGraph as a later adapter.
8. **`RunEventLog`** stores sequenced lifecycle events and reconnect cursors.
9. **`CompiledKnowledgeProjector`** may later build a private Markdown view.

## Decision framework for introducing LangGraph

Score a proposed Weaver workflow, not the whole product. Use LangGraph when most answers on the left are “yes”; keep direct code when most answers on the right are “yes.”

| Question | Favors graph runtime | Favors imperative code |
|---|---|---|
| Does it have 4+ durable stages with independent retry policies? | Yes | No |
| Does it fan out over chapters/passages and join deterministically? | Yes | No |
| Must it resume after process death in the middle of the workflow? | Yes | Only rerun whole operation |
| Must an operator inspect/modify state at arbitrary intermediate stages? | Yes | Only final review |
| Are node side effects idempotent and state serializable? | Yes | No/unclear |
| Is the topology stable enough to be a graph? | Yes | Highly dynamic/simple loop |
| Is per-node replay worth adopting LangChain/Pregel/checkpointer semantics? | Yes | No |
| Is token-level low-latency conversational steering central? | Secondary | Central |
| Can the team operate/test checkpoint backends and graph migrations? | Yes | No |
| Would a job table plus explicit functions remain under roughly a few hundred lines? | No | Yes |

**Hard gates before adopting LangGraph:**

- No framework object is stored in Weaver’s canonical memory tables.
- Every node’s external side effects have idempotency keys.
- Interrupting/resuming a node is safe despite re-execution.
- Cancellation behavior is tested for each async and sync dependency.
- A workflow can be exported as domain-level audit events without requiring LangGraph to render it.
- The team accepts `langchain-core`/checkpoint/SDK coupling and Python runtime implications.

## Bottom line

This comparison still explains why LangGraph is conditional. Pi supplies the
better shape for Weaver's interactive core: direct control flow,
provider-stream injection, lifecycle events, queues, and cancellation.
LangGraph supplies execution machinery for selected durable workflows:
superstep scheduling, checkpoint backends, task streams, replay, and resumable
interrupts.

Plan 006 therefore chooses a Weaver-owned direct coordinator first. LangGraph
may later adapt `RunCoordinator` after a graph-shaped workflow proves the need.
