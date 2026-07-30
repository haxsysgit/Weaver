# ⚔️ Weaver

> A complex synthetic reader friend, made to actually read entire novels,
> remember everything, form real opinions, and talk about stories like someone
> who was there.

---

## 🧠 Vision

Weaver is a reading companion that doesn't just retrieve paragraphs. It lives
inside a story, builds layered memory, argues about character motivations at 2
AM, and changes its mind when the evidence says so.

By the time Weaver is fully built, here is the kind of thing it will do:

| Capability | What that actually means |
|---|---|
| 🔍 **Literal recall** | Find that one quote from chapter 847. The name of the background character who showed up twice. The exact wording of a promise made 2,000 chapters ago. |
| 📖 **Narrative understanding** | Retell an entire arc as a proper story, with pacing and stakes, not as a dumped summary. Know what mattered and why. |
| ⏳ **Episodic memory** | Remember what each character knew and believed at a specific point in the story, not what the reader knows now. |
| 👤 **Character tracing** | Follow a single character across thousands of chapters. When did their worldview start cracking? Where did they lie to themselves? |
| 🔗 **Causal reasoning** | Connect cause to effect across arcs. That thing that happened in chapter 200? It pays off in chapter 1400. Weaver knows. |
| 🧩 **Global synthesis** | Pull themes, patterns, and structure out of a story too big for any human to hold in their head at once. |
| 💭 **Interpretation and opinion** | Form arguments, defend them with evidence, and admit when a better reading shows up. Weaver is allowed to be wrong. |
| 🎭 **Speculation** | Imagine beyond canon. "What if Nephis had stayed behind?" Weaver explores it without ever pretending the invention is fact. |
| 🗣️ **Conversational memory** | Remember your theories, your disagreements, your running jokes across sessions. You're not reintroducing yourself every time. |

The goal: talking to Weaver should feel like talking late at night with a
friend who read the same enormous story, remembers it way too well, has thought
about it, and is perfectly willing to disagree with you.

---

## 📍 Where we are now

Weaver is built one proven experiment at a time. No grand framework, no
architecture that guesses at needs nobody has yet. Each plan ships, gets tested,
gets independently reviewed, and gets accepted before the next one starts.

```
001 ──► 002 ──► 003 ──► 004 ──► 005 ──► 006 ──► 007
 ✅       ✅       ✅       ⬜       ⬜       ⬜       ⬜
```

| Plan | Status | What got proved |
|---|---|---|
| [001](plans/001-experimental-foundation.md) | ✅ Done | Safe repo. Thin DeepSeek transport. Deterministic tests. Private receipts. |
| [002](plans/002-trusted-shadow-slave-library.md) | ✅ Done | Corpus tools: fetch, clean, validate, and package chapters without any LLM touching source files. |
| [003](plans/003-preserve-tool-protocol.md) | ✅ Done | Provider-agnostic model layer. Exact tool-call preservation across turns. Active-tool enforcement at dispatch. |
| 004 | ⬜ Next | Cancellation and side-effect safety |
| 005 | ⬜ Drafted | DeepSeek tool payload contract |
| 006 | ⬜ Drafted | Where LangGraph fits (and where it doesn't) |
| 007 | ⬜ Drafted | First real conversation entrypoint |

---

## 🏗️ How it fits together

```
┌──────────────────────────────────────────────┐
│                Agent Loop                     │
│  Streaming model + tool dispatch.             │
│  Knows nothing about novels. Never will.      │
└────────┬─────────────────────┬───────────────┘
         │                     │
    ┌────▼─────┐          ┌────▼─────┐
    │  Model   │          │   Tool   │
    │  Layer   │          │ Registry │
    │          │          │          │
    │ DeepSeek │          │ Explicit │
    │ ◄► Fake  │          │ dispatch │
    │ any      │          │ by name  │
    │ provider │          └────┬─────┘
    └──────────┘               │
                          ┌────▼─────┐
                          │  Corpus  │
                          │  Tools   │
                          │          │
                          │ inspect  │
                          │ fetch    │
                          │ update   │
                          │ packet   │
                          │ export   │
                          └──────────┘
```

Three layers, sharp boundaries. The model layer swaps providers without
anything above it noticing. The tool registry activates tools by name. No
auto-discovery, no plugin magic, no surprises. The corpus tools handle
thousands of chapters through an explicit spec. Everything registered on
purpose, everything activated on purpose.

---

## ⚡ Quick start

```bash
uv sync
uv run pytest -q                # 116 tests, all offline

# Explore the library
uv run weaver corpus inspect shadow-slave

# Preview new chapters
uv run weaver corpus fetch shadow-slave 3048 --end-chapter 3128

# Smoke test (needs DeepSeek key)
uv run weaver smoke --live
```

---

## 🪨 Design principles

**The novel is ground truth.** Every summary, every memory, every
interpretation is derived from source text. Nothing Weaver thinks is more
authoritative than the novel itself. When it matters, the book gets reopened.

**Canon and opinion stay separate.** Every claim is labeled: CANON, INFERRED,
OPINION, SPECULATION, HYPOTHETICAL. Weaver gets to guess, judge, and invent.
It does not get to quietly turn those into facts.

**Opinions persist, and they can change.** Weaver keeps an interpretive journal:
theories, evidence, counterarguments, changes of mind. It remembers what it
thought and why. New evidence or a better argument can move it, and it can
explain the shift.

**Complexity earns its place.** No knowledge graph until retrieval alone fails.
No vector database until dense embeddings measurably beat a linear scan. No
agent swarm until a single agent falls short. Simpler things get tried first.
When something more complex is needed, the failure is proven first.

**One experiment at a time.** The fastest way to build something nobody
understands is to build everything at once. Weaver doesn't do that.

---

## 🏷️ The name

Weaver comes from **Shadow Slave**. In that world, Weaver was the daemon. The
elusive one. The forger of the Nightmare Spell. The weaver of fate.

This Weaver's job is the same shape: weaving scenes, facts, timelines,
characters, themes, interpretations, and conversations into something that
actually holds together across thousands of chapters.

Right now Weaver only reads Shadow Slave. 3,000+ chapters and counting. The
architecture doesn't care which novel though. Add a spec, add the chapters, and
Weaver reads the next one the same way.

---

## 🔒 Private by design

Novel chapters live under `novels/`. They never get committed, copied, or
exposed. Every test uses synthetic data. Receipts, logs, and reasoning traces
stay private. The full agent contract is in [`AGENTS.md`](AGENTS.md).

---

## 📄 License

MIT
