# Learning Note — Experimental Foundation

## Gate status

**Confirmed by the owner on 2026-07-28, with the framework-context correction
recorded below.**

The owner also confirmed the exposed Firecrawl credential was rotated.

## Sources

- Andrej Karpathy, [LLM Wiki idea file](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
- DeepSeek, [official API documentation](https://api-docs.deepseek.com/)
- LangChain, [Deep Agents overview](https://docs.langchain.com/oss/python/deepagents/overview)
- LangChain, [LangGraph overview](https://docs.langchain.com/oss/python/langgraph/overview)
- Pydantic, [Pydantic AI documentation](https://ai.pydantic.dev/)

The source review focused on immutable inputs, compiled knowledge, schema
instructions, compounding memory, OpenAI-compatible model calls, JSON output,
tool calls, thinking mode, caching, errors, and usage reporting.

## Tiny model of the system

Think of Weaver as having three different notebooks:

1. **Raw sources** are the published novel files. They are evidence and never
   get rewritten by an agent.
2. **Compiled memory** is a future set of generated notes: character pages,
   event pages, timelines, links, interpretations, and corrections.
3. **Runtime conversation** is the current chat. It helps the discussion flow,
   but it is not automatically canon or durable memory.

Mixing these layers would make errors hard to detect. A model's summary could
silently replace the source, or a casual chat theory could later appear as
fact. Separate layers let us trace a claim back to evidence and revise
generated understanding without touching the novel.

## What Karpathy's wiki idea contributes

Karpathy describes immutable raw sources, an LLM-maintained Markdown wiki, and
an instruction/schema file that tells the agent how to ingest, query, and
maintain the wiki. The useful shift is from repeatedly rediscovering facts at
question time to maintaining a durable, inspectable knowledge artifact that
improves as sources and questions are added.

That pattern fits Weaver because a long novel has recurring characters,
delayed payoffs, contradictions in what people believe, and connections spread
across many chapters. A compiled wiki could preserve work that would otherwise
be repeated for every question.

It does **not** solve narrative understanding by itself. A neat page can still
contain a shallow summary, a false causal link, a spoiler placed at the wrong
point in time, or an interpretation stated as fact. Weaver still needs later
experiments for scene boundaries, chronology, point of view, character arcs,
evidence strength, revision, and evaluation. Markdown is a storage shape, not
proof of understanding.

## What the DeepSeek API contributes

The official docs currently list `deepseek-v4-flash` and
`deepseek-v4-pro`, both through an OpenAI-compatible Chat Completions endpoint.
They support normal responses, JSON output, tool calls, and thinking/non-
thinking modes.

The API details shape Plan 001:

- JSON mode uses `response_format={"type": "json_object"}` and still needs a
  prompt that explicitly asks for JSON. The docs warn that content can
  occasionally be empty, so an empty response is evidence to record, not a
  reason to hide the run behind automatic retries.
- Tool calls return function arguments as a string. The API reference warns
  that the string may be invalid JSON or contain unexpected parameters. The
  boundary should preserve it exactly; validation belongs to a later tool
  executor, which Plan 001 does not build.
- A named `tool_choice` can force a particular function. That lets the smoke
  test check normalization without executing a tool.
- Thinking mode returns `reasoning_content` separately from final `content`.
  Usage may also contain `completion_tokens_details.reasoning_tokens`. Weaver
  can record the token count, but raw reasoning text is private model
  scratchwork and must not become a receipt or explanation.
- Context caching is automatic and prefix-based. Usage exposes
  `prompt_cache_hit_tokens` and `prompt_cache_miss_tokens`, but hits are
  best-effort. The smoke should observe those fields without treating a cache
  miss as failure.
- The documented usage object also contains prompt, completion, and total token
  counts. The experiment boundary should normalize these fields so later tests
  do not depend on SDK-specific object shapes.

## Why a model boundary, not orchestration

Plan 001 needs one operation: send a controlled request and receive a
normalized result. A small `ModelClient.complete(request)` boundary makes the
experiment inputs, outputs, failure categories, and fake behavior easy to see.
The OpenAI SDK handles HTTP transport; the DeepSeek adapter handles
DeepSeek-specific configuration.

The future framework candidates are LangChain Deep Agents, LangGraph, and
Pydantic AI, not core LangChain. They may later help with multi-step tools,
durable execution, subagents, typed agent dependencies, retrieval, or agent
loops. Adding any of them here would make it harder to tell whether a failure
came from DeepSeek, framework defaults, retries, message conversion, or our own
experiment. This is not a claim that frameworks are bad. It is a scope choice
for a slice whose job is to make one model call observable.

The current docs make their different levels clearer. Deep Agents is a
higher-level harness with planning, filesystem-backed context management,
subagents, long-term memory, and human approval points; it uses LangGraph as
its durable runtime. LangGraph is the lower-level option for custom stateful
workflows, checkpointing, interrupts, and resumption. Pydantic AI takes a
typed-Python route with typed dependencies, outputs, tools, and validators.
Those distinctions should become explicit evaluation criteria in a later
orchestration plan.

## Why receipts matter

An experiment result without its request settings, model ID, finish reason,
latency, usage, and error category is just a memory of what seemed to happen.
A receipt is the lab notebook for one run.

Receipts let us answer:

- Which exact model returned this?
- Was JSON mode or a forced function call enabled?
- Did the provider stop normally or because of length/resources?
- How much did the call use, including reasoning and cache tokens?
- Did the fake and live paths stay separate?
- Was the failure an authentication, timeout, rate-limit, provider, or
  validation failure?

Receipts must still respect privacy. They are ignored local state, created with
owner-only permissions, and scrubbed of API keys and raw reasoning content.

## Thin boundary versus large framework

| Choice | Benefit | Cost |
| --- | --- | --- |
| Thin custom boundary | Small, inspectable, deterministic, provider behavior stays visible | We own normalization, error mapping, and future extensions |
| Deep Agents, LangGraph, or Pydantic AI | Higher-level agent workflows, durable orchestration, or typed agent structure | More defaults, dependencies, indirection, and upgrade surface |

The hypothesis for Plan 001 is that the thin boundary is cheaper and more
trustworthy for controlled model experiments. Later evidence may reverse that
decision if Weaver needs orchestration features whose maintenance cost exceeds
the framework's complexity.

## What this foundation can prove

If accepted, Plan 001 can prove that:

- repository privacy rules are explicit and testable;
- fake experiments run deterministically without network access;
- DeepSeek V4 Flash and Pro can be called through one normalized boundary;
- JSON content, forced tool calls, usage, cache metrics, finish reasons, and
  safe failures can be recorded;
- local receipts are permission-safe and redact secrets/reasoning;
- the candidate passed a defined deterministic verification floor and two
  independent reviews.

## What it cannot prove

Plan 001 cannot prove that Weaver:

- understands any novel, chapter, scene, character, theme, or timeline;
- can build or maintain a reliable wiki;
- retrieves the right evidence;
- remembers conversations;
- forms good literary interpretations or stable opinions;
- benefits from Flash versus Pro for narrative work;
- needs a vector database, graph database, RAG framework, or agent runtime.

Those claims require later experiments using admitted private source packets.

## What I understood

Please correct anything here before confirming:

1. Weaver should become a synthetic lifelong reader, but Plan 001 only builds
   the safe experimental bench needed to test that ambition.
2. Novel files are immutable private evidence. This slice must not open them,
   copy them, summarize them, or place their contents in tests, receipts, or
   commits.
3. Compiled memory and runtime chat are separate from raw sources. Neither may
   silently become canon.
4. The first model layer should be deliberately thin: asynchronous OpenAI SDK
   transport, DeepSeek-specific adapter, provider-neutral data types, no
   retries, and no orchestration framework.
5. Fake execution comes before live execution. Live access is always explicit,
   and a failure is recorded rather than retried away.
6. Raw model reasoning is not Weaver's explanation and is never persisted.
   Only normalized reasoning token counts may be recorded.
7. Plan 001 succeeds only after deterministic checks, a synthetic Flash/Pro
   smoke, complete redacted receipts, two blocker-free Pro reviews, and the
   owner's explicit decision.
8. Passing Plan 001 says nothing about literary understanding. It only says the
   experimental foundation is trustworthy enough for the next slice.

Owner confirmation: **CONFIRMED 2026-07-28**

Owner correction: future orchestration research should compare Deep Agents,
LangGraph, and Pydantic AI. Core LangChain is not a planned Weaver dependency.
