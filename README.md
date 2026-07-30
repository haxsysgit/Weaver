# Weaver

A synthetic lifelong reader — not a search box, not a chatbot bolted onto a
vector database. Weaver reads novels cover to cover, builds durable memories,
and holds real conversations about them.

The name comes from Shadow Slave: **Weaver** was the elusive daemon, the
forger of the Nightmare Spell, the weaver of fate. The agent borrows the
metaphor — weaving scenes, facts, timelines, characters, themes,
interpretations, and conversations into a connected understanding of a novel.

## What Weaver does

- Recalls obscure details, quotes, and scenes.
- Retells arcs as coherent stories, not retrieved fragments.
- Traces character development across thousands of chapters.
- Distinguishes canon from inference, opinion, and speculation.
- Forms persistent interpretations and defends them with evidence.
- Speculates and imagines beyond canon without presenting invention as fact.
- Revisits and revises its understanding when new chapters arrive.

A conversation with Weaver should feel like talking late at night with someone
who has read the same enormous story, remembers it unusually well, has thought
about it, and is willing to disagree.

## Current novel

**Shadow Slave** by Guiltythree — 3,000+ chapters, still publishing. It is
the first novel and the driver of early design, but Weaver's architecture
treats any novel as a bounded corpus with its own spec, source adapter, and
reading pipelines. Adding another novel means adding its specification and
chapters; the agent, tools, memory, and model layer stay the same.

## How it works

Weaver is built as a sequence of small, tested experiments. Each one proves a
capability before the next begins.

| Plan | What it proved |
|------|---------------|
| [001](plans/001-experimental-foundation.md) | Safe repo boundary, thin DeepSeek transport, deterministic tests, private receipts |
| [002](plans/002-trusted-shadow-slave-library.md) | Deterministic corpus tools — fetch, clean, validate, package, and export novels without an LLM touching source files |
| [003](plans/003-preserve-tool-protocol.md) | Provider-independent model layer, exact tool-call preservation, active-tool enforcement |
| 004 | Cancellation and side-effect safety |
| 005 | DeepSeek tool payload contract verification |
| 006 | LangGraph boundary decision |
| 007 | First conversational entrypoint |

Plans 004–007 are drafted and admitted for sequential implementation.

### Architecture

```
┌──────────────────────────────────────────┐
│               Agent loop                 │
│  (turn.py — streaming model + tool loop) │
└──────────┬───────────────────┬───────────┘
           │                   │
     ┌─────▼─────┐      ┌─────▼─────┐
     │ Model     │      │ Tool      │
     │ layer     │      │ registry  │
     │ (any      │      │ (explicit │
     │ provider) │      │ dispatch) │
     └─────┬─────┘      └─────┬─────┘
           │                   │
     ┌─────▼─────┐      ┌─────▼─────┐
     │ DeepSeek  │      │ Corpus    │
     │ adapter   │      │ tools     │
     └───────────┘      │ (library) │
                        └───────────┘
```

- **Model layer** (`src/weaver/model_layer/`) — provider-independent. DeepSeek
  today; another provider tomorrow without changing the agent loop.
- **Agent** (`src/weaver/agent/`) — domain-free turn runtime. Knows nothing
  about novels, providers, or specific tools.
- **Corpus** (`src/weaver/corpus/`) — deterministic library tools. Fetch,
  validate, normalize, package, and export chapters through an explicit
  specification.

Weaver chooses its tools deliberately. No auto-discovery, no plugin systems,
no framework wiring. Every tool is registered by name and activated
explicitly.

## Running

```bash
# Install
uv sync

# Run tests (all offline, no network)
uv run pytest -q           # 116 tests

# Inspect the corpus
uv run weaver corpus inspect shadow-slave

# Preview new chapters
uv run weaver corpus fetch shadow-slave 3048 --end-chapter 3128

# Run model smoke (requires DeepSeek credentials)
uv run weaver smoke --live
```

## Design principles

- **The novel is ground truth.** Every summary, memory, and interpretation is
  derived. Weaver reopens the text when it matters.
- **Structure earns its place.** No knowledge graph, vector database, or agent
  swarm until a simpler alternative has demonstrably failed.
- **Canon and opinion stay separate.** Weaver labels its claims: CANON,
  INFERRED, OPINION, SPECULATION, HYPOTHETICAL.
- **Opinions persist but remain revisable.** The interpretive journal keeps
  theories, evidence, and changes of mind.
- **One experiment at a time.** Each capability is built, tested, reviewed,
  and decided before the next begins.

## Private sources

Novel chapters live under `novels/` and are never committed, copied, or
exposed. All tests use synthetic data. Receipts, logs, and reasoning traces
stay private. See [`AGENTS.md`](AGENTS.md) for the full agent contract.

## License

MIT
