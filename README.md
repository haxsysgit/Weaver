<p align="center">
  <img src="https://img.shields.io/badge/python-3.11%2B-3776AB?style=for-the-badge" alt="Python 3.11+">
  <img src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge" alt="MIT license">
  <img src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge" alt="FastAPI">
  <img src="https://img.shields.io/badge/React%2019-61DAFB?style=for-the-badge" alt="React 19">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge" alt="TypeScript">
  <img src="https://img.shields.io/badge/Qdrant-1A1A2E?style=for-the-badge" alt="Qdrant">
</p>

> *"The agent of the nightmare spell. I read every chapter, thread by
> thread, so when you ask, I open the book itself and answer with the
> chapter in hand. I remember your theories, argue your takes, and weave
> the whole story together the way the Spell weaves Memories: piece by
> piece, until it holds."*

---

## What Is This

A reading companion for web novels. Right now it knows **Shadow Slave**
inside out, all 3148 chapters, and it wants to talk about the story with
you.

Not a search engine. Not a wiki. You ask *"wait, what actually happened
in the Tomb of Ariel arc"* and it tells you, with chapters cited, the way
a friend who finished the book yesterday would. You ask *"was Sunny right
to trust Cassie there"* and it argues with you, changes its mind when you
make a good point, and remembers your theories across conversations.

The difference between Weaver and a chatbot that skimmed a wiki: Weaver
has read the actual text. Every chapter. Every line of dialogue. It
checks the book itself before it answers, and it tells you which chapter
its answer came from.

## What It Can Do

- **Recall.** Exact details from any chapter. Who said what, when a vow
  was made, what someone wore two thousand chapters ago. Quote it back
  with the chapter number.
- **Explain.** Why a scene matters, what a character actually believed at
  the time, how a setup from chapter 200 pays off in chapter 1400.
- **Argue.** Real opinions about arcs and characters, backed by evidence,
  open to being wrong. It's not a trivia machine, it has takes.
- **Speculate honestly.** What-if scenarios, theories about where a
  thread is going, all labeled. You always know what's canon, what's a
  take, and what's a guess.
- **Remember you.** Your theories, your favourite characters, your
  running jokes. You don't reintroduce yourself every session.

## How It Works (Plain Version)

Novels are long. Nobody holds 3000 chapters in their head, not even an
AI. So Weaver does what a diligent reader does: it read the whole book
and keeps notes about what happened, then when you ask something it
opens the actual chapters to check before answering. The notes are a
map, the book is the territory. Answers come with chapter references so
you can verify.

## What It Isn't

Weaver is a conversation companion, not a reader. The app never serves
chapter text, has no reader UI, and offers no way to read the novel
through it. Weaver holds conversation about the story (with chapter
references you can check yourself) and that's the whole deal. The story
itself stays where it belongs, private and out of the browser.

## Running It

Requires Python 3.11+ and a DeepSeek API key (bring your own key, that's
the deal).

```bash
uv sync
cp .env.example .env   # put your DEEPSEEK_KEY in here
uv run weaver web      # the chat app
```

No key? Run in fake mode to see the interface without live answers:

```bash
uv run weaver --fake
```

## Contributing

Contributions are welcome, with one rule: this project runs on a
numbered-plan system. Every piece of work is one admitted plan, decided
and recorded before it ships, one plan at a time. Read
[`CONTRIBUTING.md`](CONTRIBUTING.md) before touching anything. It
explains the workflow, the verification floor, and what stays private.

The one thing you won't get as a contributor: the private story data.
The novels, the index, and the notebook never leave the owner's machine,
and everything is developed against synthetic test data, so you never
need them.

## Tests

```bash
uv run pytest    # backend, 500+ tests, all synthetic
npm run test     # frontend
```

Everything is tested with fake data. No live model calls, no real novel
content in tests, ever.

## Privacy

The novels never leave the machine. The library, the notes, and your
conversations stay private and local. The web app only serves chat,
memory, and links; chapter text is never served to the browser. Full
rules in [`AGENTS.md`](AGENTS.md).

## The Name

Weaver is a character in Shadow Slave: the elusive daemon, forger of the
Nightmare Spell, weaver of fate. Same job, different material. The app
weaves scenes, facts, timelines and conversations into something that
holds together across thousands of chapters.

Built with curiosity. Reading one chapter at a time.

MIT license.
