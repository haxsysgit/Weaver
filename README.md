# Weaver

> *"The daemon of fate, forger of the Nightmare Spell. I weave stories the
> way he wove destiny: thread by thread, chapter by chapter, until it all
> holds together."*

---

## what is this

a reading companion for web novels. right now it knows **shadow slave**
inside out, all 3148 chapters, and it wants to talk about the story with
you.

not a search engine. not a wiki. you ask "wait, what actually happened in
the tomb of ariel arc" and it tells you, with chapters cited, the way a
friend who finished the book yesterday would. you ask "was sunny right to
trust cassie there" and it argues with you, changes its mind when you make
a good point, and remembers your theories across conversations.

the difference between weaver and a chatbot that skimmed a wiki: weaver
has read the actual text. every chapter. every line of dialogue. it
checks the book itself before it answers, and it tells you which chapter
its answer came from.

---

## what it can do

- **recall.** exact details from any chapter. who said what, when a vow
  was made, what someone wore two thousand chapters ago. quote it back
  with the chapter number.
- **explain.** why a scene matters, what a character actually believed at
  the time, how a setup from chapter 200 pays off in chapter 1400.
- **argue.** real opinions about arcs and characters, backed by evidence,
  open to being wrong. it's not a trivia machine, it has takes.
- **speculate honestly.** what-if scenarios, theories about where a
  thread is going, all labeled. you always know what's canon, what's a
  take, and what's a guess.
- **remember you.** your theories, your favourite characters, your
  running jokes. you don't reintroduce yourself every session.

---

## how it works (plain version)

novels are long. nobody holds 3000 chapters in their head, not even an
AI. so weaver does what a diligent reader does: it read the whole book
and keeps notes about what happened, then when you ask something it
opens the actual chapters to check before answering. the notes are a
map, the book is the territory. answers come with chapter references so
you can verify.

if you want the full engineering story, there's a numbered plan trail in
[`plans/`](plans/) that records every decision made building this, from
the conversation architecture to the retrieval experiments. it doubles as
the project's changelog.

---

## running it

requires python 3.11+ and a deepseek api key (bring your own key, that's
the deal).

```bash
uv sync
cp .env.example .env   # put your DEEPSEEK_KEY in here
uv run weaver web      # the chat app
```

no key? run in fake mode to see the interface without live answers:

```bash
uv run weaver --fake
```

---

## tests

```bash
uv run pytest    # backend, 500+ tests, all synthetic
npm run test     # frontend
```

everything is tested with fake data. no live model calls, no real novel
content in tests, ever.

---

## privacy

the novels never leave the machine. the library, the notes, and your
conversations stay private and local. the web app only serves chat,
memory, and links; chapter text is never served to the browser. full
rules in [`AGENTS.md`](AGENTS.md).

---

## the name

weaver is a character in shadow slave: the elusive daemon, forger of the
nightmare spell, weaver of fate. same job, different material. the app
weaves scenes, facts, timelines and conversations into something that
holds together across thousands of chapters.

built with curiosity. reading one chapter at a time.

MIT license.
