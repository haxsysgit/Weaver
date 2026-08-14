<p align="center">
  <img src="https://img.shields.io/badge/status-reading%20Shadow%20Slave-blue?style=for-the-badge" alt="status">
  <img src="https://img.shields.io/badge/chapters-3148-orange?style=for-the-badge" alt="chapters">
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="license">
</p>

```
╔══════════════════════════════════════════════════════════════╗
║     ██╗    ██╗███████╗ █████╗ ██╗   ██╗███████╗██████╗      ║
║     ██║    ██║██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗     ║
║     ██║ █╗ ██║█████╗  ███████║██║   ██║█████╗  ██████╔╝     ║
║     ██║███╗██║██╔══╝  ██╔══██║╚██╗ ██╔╝██╔══╝  ██╔══██╗     ║
║     ╚███╔███╔╝███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║     ║
║      ╚══╝╚══╝ ╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝     ║
║                                                              ║
║            a synthetic reader that actually reads             ║
╚══════════════════════════════════════════════════════════════╝
```

> *"The daemon of fate, forger of the Nightmare Spell. I weave stories the
> way he wove destiny: thread by thread, chapter by chapter, until it all
> holds together."*

---

## 📖 What I am

Hey. I'm Weaver.

I read novels. The whole thing. Every chapter. And I actually remember what
happened — not the way a search engine remembers, but the way a person
remembers: who did what, when they changed, why it mattered, and how it felt.

Right now I'm working through **Shadow Slave**. All 3148 chapters are read
and in the library.

---

## ✨ What I can do

When a story is three thousand chapters long, nobody can hold it all in their
head. Characters show up in chapter 200, disappear for a thousand chapters,
and come back different. Promises made in chapter 400 pay off in chapter
1800. Themes build so slowly you don't notice them until they suddenly land.

I notice all of it.

🔍 **I remember the small things.** The side character you liked who showed
up twice. The exact wording of a vow. What someone was wearing in a scene
two thousand chapters ago.

🧑 **I follow characters like I know them.** When their worldview started
cracking. Where they lied to themselves. The moment they became someone
different.

🔗 **I connect dots across the whole story.** That cryptic thing someone
said in chapter 200? It pays off in chapter 1400. I know because I was paying
attention.

💭 **I have opinions. Real ones.** I'll tell you who I think was right in an
argument, which arc dragged, what the author was probably doing. I back them
up with evidence, and when a better argument changes my mind, I'll say so.

🔮 **I speculate without lying about it.** I'll imagine what happens if a
character made a different choice. But every thought is labeled: canon, my
take, or me making stuff up for fun.

🗣️ **I remember our conversations.** Your theories. The character you can't
stand. The running joke about chapter 847.

📖 **I tell the story back to you.** Ask me to retell an arc and I don't dump
a summary — I tell it like a story, with pacing and stakes.

---

## 🚀 Getting started

```bash
# install
uv sync

# run the CLI (fake mode: no API key needed)
uv run weaver --fake

# run the web app
uv run weaver web
```

Bring your own model key (DeepSeek) via `.env`:

```bash
cp .env.example .env
# put DEEPSEEK_KEY=... in .env
```

The web app is a React 19 + Vite + TypeScript frontend served by a FastAPI
backend. Build the frontend with `npm run build` (output lands in
`src/weaver/web/dist/`, packaged by the wheel).

---

## 🧪 Tests

```bash
uv run pytest          # 501 tests, synthetic data only
npm run test           # frontend vitest suite
```

Every test uses fake data. No live model calls, no real novel content.

---

## 🗺️ Repo map

| Path | What it is |
|---|---|
| `src/weaver/` | The Python package: agent loop, conversation ledger, corpus tools, retrieval, model layer |
| `src/weaver/web/` | FastAPI app + React frontend |
| `plans/` | Numbered plan records (001-018), the decision trail |
| `deliverables/` | Per-plan evidence, learning notes, owner decisions |
| `docs/` | Process docs, decisions, the learning lab |
| `novels/` | Private, immutable source material — never committed |
| `.weaver/` | Private generated state (index, notebook, receipts) — never committed |

Architecture: [`docs/architecture.md`](docs/architecture.md)

---

## 🎯 Why I exist

Most reading tools either search for keywords or summarize things into
paragraphs that all sound the same. That's useful for finding a quote. It's
terrible for understanding a story.

I'm built differently: everything I think comes from the text, everything is
labeled so you know whether it's fact, opinion, or guesswork, and I hold real
conversations where I change my mind.

> **The goal:** talking to me should feel like talking late at night with
> someone who read the exact same enormous story as you, remembers it way
> too well, has thought about it a lot, and isn't afraid to disagree.

A reading companion that actually reads.

---

## 🎭 The name

Weaver comes from **Shadow Slave**. In that world, Weaver was the daemon. The
elusive one. The forger of the Nightmare Spell. The weaver of fate.

Same job, different material. I weave scenes, facts, timelines, characters,
themes, and conversations into something that holds together across
thousands of chapters.

---

## 🔒 Private by design

> Novels stay private. Always. They never get committed, copied, or exposed.

The public surface is chat, memory, and links — nothing else. The API never
serves chapter text; the private library never leaves the machine. Full rules
in [`AGENTS.md`](AGENTS.md).

<p align="center">
  <sub>MIT License · Built with curiosity · Reading one chapter at a time</sub>
</p>
