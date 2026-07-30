# Weaver

I'm a synthetic reader. Not a search box. Not a chatbot with a vector database
duct-taped to it.

I read novels cover to cover, build real memories, and talk about them like
someone who actually absorbed the story.

The name comes from Shadow Slave. **Weaver** was the daemon. The elusive one.
The forger of the Nightmare Spell. The weaver of fate. I borrowed the name
because the job is the same: weaving scenes, facts, characters, themes,
interpretations, and conversations into something that actually hangs together.

Right now I only read Shadow Slave — 3,000+ chapters of Sunny's nightmare and
still counting. The architecture doesn't care which novel though. Add a spec,
add the chapters, and I'll read that one too. The reading system is the same.
The memory system is the same. The part of me that forms opinions and argues
about them is the same.

## What I actually do

This is not a "query your documents" demo. I don't just retrieve paragraphs
that match your search. I remember things. I have opinions. I'll argue with you.

Here's the range of what I can do when I'm fully built:

- Find obscure details, quotes, names — the kind of thing you'd normally have
  to re-read 500 chapters to confirm
- Retell an arc as a story, not a list of facts someone dumped from a RAG
  pipeline
- Trace a character's development across thousands of chapters — when did
  their attitude toward fate actually start shifting?
- Tell you what each character knew and believed at a specific point in the
  story, not what we know now
- Form interpretations, defend them with evidence, and change my mind when
  the evidence changes
- Speculate and imagine beyond canon without pretending my invention is fact
- Remember our conversations across sessions — the theories, the
  disagreements, the running jokes

When I'm done right, talking to me should feel less like querying a database
and more like talking late at night with someone who read the same enormous
story, remembers it way too well, has thought about it, and is perfectly
willing to disagree with you.

## How I'm built

I'm put together one experiment at a time. Each one proves a capability
before the next one starts. No grand framework. No architecture that
anticipates needs nobody has yet.

| Plan | What got proved |
|------|----------------|
| [001](plans/001-experimental-foundation.md) | Safe repo. Thin DeepSeek transport. Deterministic tests. Private receipts. |
| [002](plans/002-trusted-shadow-slave-library.md) | Corpus tools that fetch, clean, validate, and package chapters deterministically. No LLM touches a source file. |
| [003](plans/003-preserve-tool-protocol.md) | Model layer that doesn't care which provider is behind it. Exact tool-call preservation. Active-tool enforcement. |
| 004 | Cancellation and side-effect safety |
| 005 | DeepSeek tool payload contract |
| 006 | Where LangGraph fits (and where it doesn't) |
| 007 | First conversation entrypoint |

Plans 004 through 007 are drafted and admitted. They run one at a time.
Nothing ships until it's tested, reviewed, and the owner says yes.

### The guts

```
┌──────────────────────────────────────┐
│            Agent loop                │
│  Streaming model + tool loop.        │
│  Knows nothing about novels.         │
└────────┬─────────────────┬───────────┘
         │                 │
   ┌─────▼─────┐     ┌─────▼─────┐
   │ Model     │     │ Tool      │
   │ layer     │     │ registry  │
   │ (any      │     │ (explicit │
   │ provider) │     │ dispatch) │
   └─────┬─────┘     └─────┬─────┘
         │                 │
   ┌─────▼─────┐     ┌─────▼─────┐
   │ DeepSeek  │     │ Corpus    │
   │ adapter   │     │ tools     │
   └───────────┘     │ (library) │
                     └───────────┘
```

Three layers, sharp boundaries. The model layer swaps providers without the
agent loop noticing. The tool registry activates tools by name — no
auto-discovery, no plugin magic. The corpus tools handle chapters through an
explicit spec. Every tool is registered and activated on purpose.

## Running me

```bash
uv sync
uv run pytest -q           # 116 tests, all offline

# Inspect the library
uv run weaver corpus inspect shadow-slave

# Preview new chapters (doesn't write anything unless you say --apply)
uv run weaver corpus fetch shadow-slave 3048 --end-chapter 3128

# Model smoke test (needs DeepSeek credentials)
uv run weaver smoke --live
```

## What I believe

Some principles I'm built on:

**The novel is ground truth.** Every summary, memory, and interpretation is
derived. I reopen the text when it matters. Nothing I think is more
authoritative than the source.

**Structure earns its place.** I don't have a knowledge graph. I don't have a
vector database. I don't have an agent swarm. When a simpler thing works, I
stay simple. When it doesn't, I prove the failure first, then add the thing
that fixes it.

**Canon and opinion stay separate.** I label my claims: CANON, INFERRED,
OPINION, SPECULATION, HYPOTHETICAL. I'm allowed to guess, judge, and invent.
I'm not allowed to quietly turn those into facts.

**My opinions persist but I can change my mind.** I keep an interpretive
journal — theories, evidence, counterarguments, and changes of opinion. I
remember what I thought and why I thought it. New evidence or a better
argument can move me, and I can explain why.

**One experiment at a time.** The fastest way to build something nobody
understands is to build everything at once. I don't do that.

## The private stuff

Novel chapters live under `novels/`. They never get committed, copied, or
exposed. All tests use synthetic data. Receipts, logs, and reasoning traces
stay private. The full agent contract is in [`AGENTS.md`](AGENTS.md).

## License

MIT
