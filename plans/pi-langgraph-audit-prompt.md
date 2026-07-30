# Pi vs LangGraph Architecture Audit — Prompt for Agent

You are auditing two open-source agent runtimes to inform the architecture of
Weaver, a custom Python lifelong novel-reading agent.

═══════════════════════════════════════════
PART 0 — REPOSITORY SETUP AND VERSION VERIFICATION
═══════════════════════════════════════════

Both repos are already cloned to /tmp. Do NOT reclone them. Do NOT modify any
files anywhere. This is a read-only source audit.

PI SOURCE: /tmp/pi-source
  Remote: https://github.com/badlogic/pi-mono (redirects to earendil-works/pi)
  Pinned commit: d7b02636a0c7e8e615d0cff70679d18d2ff59573
  Package name: @earendil-works/pi-agent-core, version 0.82.1
  Remote latest tag: v0.82.1 (at b4f293684bba718d59cc1157679bcf6157b3a7f5)

LANGGRAPH SOURCE: /tmp/langgraph-source
  Remote: https://github.com/langchain-ai/langgraph.git
  Pinned commit: 41341457342327166d72fc11952ab28fb61ec0bf
  Tag: 1.2.10 (confirmed — git describe --tags --exact-match returns 1.2.10)
  License: Apache 2.0 (libs/langgraph/LICENSE)

WEAVER SOURCE: /home/hax/novelfriend
  Product requirements: /home/hax/novelfriend/weaver.md (read the whole file)
  Current runtime: /home/hax/novelfriend/src/weaver/agent/turn.py (351 lines)
  Current session: /home/hax/novelfriend/src/weaver/agent/session.py (125 lines)
  Current messages: /home/hax/novelfriend/src/weaver/agent/messages.py (109 lines)
  Current model types: /home/hax/novelfriend/src/weaver/model.py (87 lines)
  Architecture decisions: /home/hax/novelfriend/deliverables/001-experimental-foundation/decision.md
  Tests: uv run pytest (target: 72+ passing)

STEP 0.1 — VERSION VERIFICATION (do this first)

For Pi:
  cd /tmp/pi-source
  Run: git log --oneline -1
  Run: git tag --sort=-creatordate | head -5
  Run: git log --oneline v0.82.1..HEAD 2>/dev/null  (are there commits after the tag?)
  Run: git log --oneline HEAD..origin/main 2>/dev/null  (are there remote commits we don't have?)
  Run: git tag --contains HEAD | head -5
  Search the repo for CHANGELOG, RELEASE_NOTES, or any file matching *change* or *release*
    in the root, packages/agent/, and packages/coding-agent/ directories.
    Read whatever you find. If there is no changelog, say so explicitly and move on.
  Report: IS THIS THE LATEST RELEASE? If not, what changed between our pinned commit
    and the latest? Is it safe to audit this pinned version, or should we pull?

For LangGraph:
  cd /tmp/langgraph-source
  Run: git log --oneline -1
  Run: git tag --sort=-creatordate | grep -E '^[0-9]' | head -10
  Run: git describe --tags --exact-match HEAD
  Run: git log --oneline 1.2.10..origin/main 2>/dev/null
  Search for CHANGELOG, RELEASE_NOTES, or changelog files anywhere in the repo.
    Look in root, libs/langgraph/, and any docs/ directory.
  Report: IS THIS THE LATEST RELEASE? If not, what changed? Safe to audit?

═══════════════════════════════════════════
PART 1 — DEEP PI INTERNALS AUDIT
═══════════════════════════════════════════

Pi has four packages. Focus ONLY on these:

  A) packages/agent/       — @earendil-works/pi-agent-core (the reusable runtime)
  B) packages/ai/          — @earendil-works/pi-ai (model/provider layer)
  C) packages/coding-agent/ — @earendil-works/pi-coding-agent (application that uses A+B)
  D) packages/tui/         — @earendil-works/pi-tui (terminal UI, separate from agent logic)

DO NOT inspect HaxJobs, OpenHands, Deep Agents, Pydantic AI, or any other project.

For EACH file you read, cite the file path and specific line numbers. Every claim
about how Pi works must be traceable to a specific line in the source.

### 1.1 — CORE AGENT LOOP (packages/agent/src/agent-loop.ts)

Read the ENTIRE file. It's ~792 lines. Answer:

a) What are the TWO public entry points? (runAgentLoop and runAgentLoopContinue)
   What is the difference between them? Cite the function signatures and line numbers.

b) Trace the private runLoop() function line by line (lines 155-275).
   - What are the TWO nested loops? Why two?
   - What is the difference between steering messages and follow-up messages?
   - When does prepareNextTurn fire? What does it control?
   - When does shouldStopAfterTurn fire?
   - What exact condition causes the agent to stop completely?

c) Trace streamAssistantResponse() (lines 281-371).
   - How does it convert AgentMessage[] to provider Message[]?
   - What events does it emit, in what order?
   - How does it handle the partial message during streaming?
   - How does it finalize the message? (hint: response.result(), not the last delta)

d) Trace the tool execution path (lines 374-707).
   - What happens when a message was truncated by token limit?
   - How does it decide between sequential and parallel tool execution?
   - What does beforeToolCall and afterToolCall control?
   - How are tool results ordered when running in parallel?
   - How does abort propagate into tool execution?

### 1.2 — AGENT STATE AND CANCELLATION (packages/agent/src/agent.ts)

Read the ENTIRE file. Answer:

a) What state does Agent own? List every field of AgentState and what it holds.
   Cite line numbers.

b) What does Agent.prompt() do end-to-end? Trace from entry to exit.
   - How does it prevent overlapping runs?
   - How does it normalize input?
   - What happens on error/abort?

c) How does cancellation work?
   - How is the AbortController created and shared?
   - What does Agent.abort() actually do?
   - What does Agent.waitForIdle() guarantee?

d) How do event subscriptions work?
   - What does subscribe() return?
   - In what order are listeners called?
   - How do listeners affect run settlement (waitForIdle)?

### 1.3 — TYPES AND CONTRACTS (packages/agent/src/types.ts)

Read the ENTIRE file. Answer:

a) What is an AgentMessage? List its variants and their fields.
b) What is an AgentContext? What does it hold, and who owns it?
c) What is an AgentEvent? List every event type and when it fires.
d) What is AgentLoopConfig? List every hook/callback and its purpose.
e) What is an AgentTool? How does it differ from a provider-level Tool?

### 1.4 — SESSIONS AND PERSISTENCE (packages/coding-agent/src/core/session-manager.ts)

Read lines 1-200 (types/contracts) and lines 450-670 (loading), and lines 979-1120
(persistence/writing). You do NOT need to read every line of this 1712-line file,
but you MUST understand the session tree structure.

a) What is a SessionEntry? List every variant and its fields. Cite line numbers.

b) What is the session tree model?
   - id + parentId = tree. What is the "current leaf"?
   - How does branching work? (branch() function)
   - How does compaction create entries without deleting old ones?

c) How is context reconstructed from session entries?
   - Trace buildSessionContext() and buildSessionPath().
   - How does it walk from leaf to root?
   - How does it handle compaction entries along the path?

d) How does persistence work?
   - JSONL append-only. What guarantees does this give?
   - When does _persist fire? (hint: message_end, not every delta)
   - What is CustomEntry vs CustomMessageEntry? Why have both?

### 1.5 — COMPACTION (packages/coding-agent/src/core/compaction/compaction.ts)

Read the ENTIRE file. Answer:

a) What triggers compaction? What token budgets control it?
b) How does the cut algorithm work? What can it cut, what can't it cut?
c) What does the compaction summary prompt ask for?
d) How is the compaction result stored? (session entry, not destructive)
e) What are the risks of relying on an LLM-generated compaction summary?

### 1.6 — EXTENSIONS (packages/coding-agent/src/core/extensions/runner.ts and types.ts)

Read both files. Answer:

a) What lifecycle hooks can extensions register?
b) How do extensions intercept tool calls and assistant messages?
c) Can an extension replace a finalized assistant message? How?
d) What are the isolation/ordering guarantees? What are the risks?

### 1.7 — MODEL/PROVIDER LAYER (packages/ai/src/models.ts and types.ts)

Read models.ts (focus on streamSimple, completeSimple, createProvider) and types.ts
(focus on Message, Context, ProviderStreams, StreamFn).

a) What is the StreamFn signature? How does the agent inject it?
b) What does streamSimple() return? What is the event stream shape?
c) How does provider dispatch work? (createProvider)
d) What is the Message type at the provider level? How does it differ from AgentMessage?

### 1.8 — TUI SEPARATION

Confirm that packages/tui/ has NO imports from packages/agent/ or packages/coding-agent/.
Run: grep -r "from.*agent" packages/tui/src/ || echo "(no agent imports found)"

Confirm that interactive mode and RPC mode both consume AgentSession, not the TUI.
Cite specific lines in packages/coding-agent/src/modes/interactive/interactive-mode.ts
and packages/coding-agent/src/modes/rpc/rpc-mode.ts showing how they subscribe.

Answer: Is the agent runtime truly headless? Cite evidence.

### 1.9 — PI TESTS

Run Pi's agent-loop tests:
  cd /tmp/pi-source
  npm run hydrate:model-data 2>/dev/null
  npm run build:offline 2>/dev/null
  npx vitest --run packages/agent/test/agent-loop.test.ts
Report: pass/fail count. If any fail, document why.

Count total test files:
  find packages/agent -name '*.test.ts' | wc -l
  find packages/coding-agent -name '*.test.ts' | wc -l

═══════════════════════════════════════════
PART 2 — DEEP LANGGRAPH INTERNALS AUDIT
═══════════════════════════════════════════

LangGraph is a monorepo. Focus ONLY on:
  A) libs/langgraph/langgraph/              — the core Python runtime
  B) libs/checkpoint/langgraph/checkpoint/  — checkpoint contracts and memory saver
  C) libs/prebuilt/langgraph/prebuilt/      — prebuilt agent/tool utilities

### 2.1 — STATE GRAPH BUILDER (libs/langgraph/langgraph/graph/state.py)

Read lines 130-399 (StateGraph.__init__ and schema setup) and
lines 662-911 (add_node) and lines 915-1004 (add_edge) and
lines 1164-1380 (compile).

a) What does StateGraph.__init__ do with schema fields?
   - How does an ordinary field become a channel?
   - How does an Annotated[T, reducer] field become a channel?
   - What is the difference between LastValue and BinaryOperatorAggregate?
     Cite the channel source files.

b) What does add_node accept? List every parameter and its purpose.
   What is destinations? When does it matter vs when is it only visual?

c) What does add_edge([a, b], c) compile into?
   - How does a multi-source edge become a NamedBarrierValue?
   - Cite channels/named_barrier_value.py to show the barrier logic.

d) What does compile() actually produce?
   - Walk through the CompiledStateGraph construction (lines 1333-1357).
   - What channels are created?
   - How are input/output/stream channels selected?
   - What is the START process?

### 2.2 — TYPES AND RUNTIME CONTRACTS (libs/langgraph/langgraph/types.py)

Read lines 1-220 (stream types, checkpoint types) and
lines 597-640 (PregelTask, PregelExecutableTask) and
lines 664-808 (Send, Command) and lines 811-934 (interrupt).

a) What is a Command? List every field and what it controls.
   How does Command differ from a normal state update?

b) What is Send? How does it enable fan-out?

c) How does interrupt() work?
   - What does it raise?
   - How is the interrupt identified (hint: namespace + task path + index)?
   - How does resume work? What happens when the node runs again?

d) What stream modes exist? What does each one emit?

### 2.3 — PREGEL EXECUTION RUNTIME (libs/langgraph/langgraph/pregel/)

Read _loop.py lines 158-487 (PregelLoop.__init__) and 599-847 (tick) and
848-1079 (_first) and 1081-1219 (_put_checkpoint).
Read main.py lines 450-779 (Pregel class) and 2616-3019 (stream) and
2900-3021 (the actual BSP loop inside stream).

a) What is PregelLoop? What state does it own?
b) Walk through ONE tick() iteration:
   - apply_writes
   - create checkpoint
   - check interrupt_after
   - prepare_next_tasks
   - check interrupt_before
   - emit output
   What is the BSP visibility guarantee? (writes from step N visible in step N+1)

c) How does _first differ from subsequent ticks?
   - Resuming from checkpoint vs new input
   - How is Command handled as resume input?

d) How are tasks prepared? (pregel/_algo.py, prepare_next_tasks)
   - What are push tasks vs pull tasks?
   - How do trigger channels determine what runs?

### 2.4 — RUNNER AND CONCURRENCY (libs/langgraph/langgraph/pregel/_runner.py)

Read the ENTIRE file (sync path: 176-358, async path: 360-572).

a) How does PregelRunner execute tasks?
   - Sync: thread pool?
   - Async: asyncio tasks?
   - What happens when a task fails?

b) What are the concurrency guarantees?
   - Can sibling tasks see each other's writes during the same step?
   - How are writes collected and applied?

### 2.5 — CHECKPOINTS AND PERSISTENCE (libs/checkpoint/langgraph/checkpoint/base/__init__.py)

Read lines 92-174 (Checkpoint, CheckpointTuple) and 176-249 (BaseCheckpointSaver)
and 277-318 (put, put_writes).

a) What is in a Checkpoint? List every field.
b) What is put_writes vs put? Why are they separate operations?
c) What does a CheckpointTuple give you that a raw Checkpoint doesn't?
d) How does InMemorySaver work? (libs/checkpoint/langgraph/checkpoint/memory/__init__.py)
   - How are checkpoints stored and looked up?
   - What is the thread_id key?

### 2.6 — WHAT LANGGRAPH DOES NOT GUARANTEE

Read _retry.py lines 573-854 (retry logic).

Answer explicitly:
a) If a node fails and retries, do its external side effects (HTTP calls, DB writes,
   file operations) get rolled back? Why not?
b) If a node is interrupted and resumed, does it restart from the beginning of the
   node function? What does this mean for code before the interrupt() call?
c) What does checkpoint recovery actually recover vs what does it NOT recover?

### 2.7 — LANGGRAPH TESTS

Count test files:
  find libs/langgraph/tests -name '*.py' | wc -l

Run dependency-free tests:
  cd /tmp/langgraph-source
  NO_DOCKER=true uv run --project . --frozen pytest libs/langgraph/tests/ -q \
    -k "interrupt or checkpoint or graph_validate" --no-header 2>&1 | tail -20

Report: pass/fail count. If any fail, document why.
Note: tests requiring Postgres or Redis will be skipped by the -k filter.
If NO_DOCKER isn't enough, explain what fixtures are blocking.

═══════════════════════════════════════════
PART 3 — WEAVER CONTEXT
═══════════════════════════════════════════

Read these Weaver files completely:

  /home/hax/novelfriend/weaver.md                         — product vision (703 lines)
  /home/hax/novelfriend/src/weaver/agent/turn.py          — current turn runtime (351 lines)
  /home/hax/novelfriend/src/weaver/agent/session.py       — current session (125 lines)
  /home/hax/novelfriend/src/weaver/agent/messages.py      — canonical messages (109 lines)
  /home/hax/novelfriend/src/weaver/model.py               — model types (87 lines)
  /home/hax/novelfriend/src/weaver/client.py              — ModelClient protocol
  /home/hax/novelfriend/deliverables/001-experimental-foundation/decision.md

Understand:
  - Weaver is a lifelong novel-reading companion, not a coding agent
  - It needs durable multi-stage workflows (classify → retrieve → inspect sources
    → synthesize → verify canon/opinion separation → human review → commit memory)
  - It currently has a clean but minimal async turn loop
  - It explicitly deferred LangGraph as "future research" in Plan 001
  - It must never expose novel content, receipts, raw reasoning, or credentials
  - It needs conversational memory, interpretive journal, counterfactual reasoning

Run Weaver's suite:
  cd /home/hax/novelfriend
  uv run pytest -q
Report pass/fail count.

═══════════════════════════════════════════
PART 4 — COMPARISON AND RECOMMENDATION
═══════════════════════════════════════════

Now synthesize everything. Answer these questions with SPECIFIC evidence from the
source code you traced. Every answer must cite file:line.

### 4.1 — ARCHITECTURAL IDENTITY

In one paragraph each, with file:line citations:
a) What IS Pi's architecture? (Not what it's named. What is the control flow
   model, who owns state, how do things connect?)
b) What IS LangGraph's architecture? (Same question.)

### 4.2 — PI: WHAT TO ADOPT, WHAT TO AVOID

a) List 3-5 specific Pi patterns Weaver should COPY.
   For each: what problem does it solve for Weaver, and where is it in Pi's source?

b) List 3-5 specific Pi patterns Weaver should AVOID or will OUTGROW.
   For each: why it doesn't fit Weaver, with evidence from Weaver's requirements.

c) What is Pi's strongest single design principle, stated in one sentence?

d) If Weaver copied Pi's exact architecture today, what would break first as
   Weaver grows? Be specific.

### 4.3 — LANGGRAPH: WHAT TO ADOPT, WHAT TO AVOID

a) List 3-5 specific LangGraph capabilities Weaver NEEDS.
   For each: what Weaver requirement does it solve, and where is it in LangGraph?

b) List 3-5 LangGraph patterns or abstractions Weaver should AVOID or ISOLATE.
   For each: what's the risk to Weaver's domain model?

c) What is LangGraph's most dangerous abstraction for a project like Weaver?
   Why?

### 4.4 — CAN THEY COEXIST?

a) If Weaver uses both a Pi-style imperative loop AND a LangGraph workflow
   graph, what is the clean boundary between them?

   Answer by specifying exactly what each side OWNS and what each side NEVER
   touches. Be concrete:
   - Pi-style loop owns: ...
   - LangGraph owns: ...
   - Neither touches: ...

b) What specific conversion happens at the boundary?
   Show the data flow: Weaver domain state → ??? → turn loop → ??? → graph state

c) What is the SINGLE most important rule to prevent them from becoming
   two competing orchestrators?

### 4.5 — READ WEAVER'S CURRENT CODE AND MAKE IT CONCRETE

Look at /home/hax/novelfriend/src/weaver/agent/turn.py.

a) Does this code need to be rewritten to work with LangGraph, or can it be
   wrapped as a graph node? Explain.

b) What is the SMALLEST change to Weaver's current code that would unlock
   durable multi-stage workflows? Be specific about which file and what
   the change is.

### 4.6 — FINAL RECOMMENDATION

State your recommendation in exactly this format:

RECOMMENDATION: [Pure Pi-style] / [LangGraph only] / [Hybrid]

JUSTIFICATION (3 sentences max):

FIRST CONCRETE STEP:
  What is the ONE file or module Weaver should create/modify FIRST?
  What does it contain? (10 lines of pseudocode or a class sketch is fine)

BIGGEST RISK OF THIS CHOICE:
  What is most likely to go wrong? How would you detect it early?

═══════════════════════════════════════════
PART 5 — VERIFICATION TABLE
═══════════════════════════════════════════

Produce a table at the end of your report:

| Check                        | Result           |
|------------------------------|------------------|
| Pi version verified          | X.X.X (latest: Y/N) |
| Pi changelog found           | path or "none"   |
| LangGraph version verified   | X.X.X (latest: Y/N) |
| LangGraph changelog found    | path or "none"   |
| Pi agent-loop tests          | N passed, M failed |
| LangGraph focused tests      | N passed, M failed |
| Weaver tests                 | N passed, M failed |
| Weaver turn.py reviewed      | Y/N              |
| Weaver weaver.md reviewed    | Y/N              |

═══════════════════════════════════════════
RULES
═══════════════════════════════════════════

- Do NOT modify any files anywhere.
- Do NOT discuss HaxJobs, OpenHands, Deep Agents, Pydantic AI, or any other project.
- Cite file:line for every claim. "Pi does X" without a line number is not accepted.
- Read the files yourself. Do not guess from file names or directory structure.
- If you cannot find something (e.g. changelog), say so explicitly rather than
  pretending it exists.
- If a test fails because of missing generated files or external services, report
  it honestly. Do not spend more than 10 minutes total on fixing test environments.
- The audit should be thorough enough that someone could verify every claim by
  opening the cited file at the cited line.
