# Research: Karpathy's LLM Wiki pattern

## Observation

Andrej Karpathy's
[LLM Wiki](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f)
describes a persistent, agent-maintained collection of Markdown pages between
immutable sources and later questions.

Useful parts of the pattern are:

- immutable raw sources;
- interlinked summaries and topic pages;
- contradiction checks and linting;
- an index for subject navigation;
- an append-oriented log for time navigation;
- a private Obsidian view for human inspection.

The source presents the wiki itself as a persistent artifact and suggests Git
as one versioning option. Weaver accepts the interaction pattern, not that
storage choice.

## Accepted Weaver boundary

For Weaver, the wiki is a rebuildable private projection:

```text
.weaver/projections/wiki/
```

Canonical conversation evidence, relationship memory, Weaver opinions, and
future literary claims stay in `.weaver/state/weaver.sqlite3`.

The projection:

- is generated from versioned canonical source identifiers;
- may be deleted and rebuilt;
- is not committed;
- does not require Git for version history;
- may be viewed in Obsidian;
- never replaces exact conversation or private chapter sources.

`weaver.md`, or its owner-renamed successor, stays a public project vision. It
is not a live private hot cache.

## Useful later hypotheses

These remain inputs to Plan 009:

- narrative-thread pages may help a human inspect compiled understanding;
- contradiction-aware versions may make changing interpretations clearer;
- linting may find stale or unsupported projections;
- index and log pages may work before heavier search;
- private Obsidian views may make model-generated knowledge easier to audit.

These are hypotheses, not accepted literary-memory architecture.

## Rejected Plan 006 uses

- conversation history in Markdown as the canonical ledger;
- relationship cards stored only as wiki pages;
- literary claims stored only as generated prose;
- narrative threads placed in LangGraph state;
- generated wiki pages committed to the public repository;
- Git required as the wiki's source of version truth;
- a public project vision file used as private live memory.

## 2026-08-03 recheck against Plan 012 (pi run)

Owner asked: research Karpathy's LLM wiki and say whether it helps the
aggressive 20-chapters-per-turn re-read, before reading starts.

**Verdict: yes for the process, no new data layer needed.** Plan 012's
private notebook already implements the core of the pattern (immutable
novel sources, agent-written interlinked pages, contradiction lint via
`scripts/check_story_notebook.py`). The wiki idea adds nothing we lack as
a store. What it does add, and what this run adopts:

- **index.md as the first read of every turn.** Instead of re-scanning all
  prior records, the coordinator reads one living index of entities,
  locations, items, factions, and open threads, then drifts into the pages
  it needs. This is the continuity mechanism for a 20-chapter turn: the
  index is the memory handoff that survives context loss.
- **log.md as append-only journal.** One line per turn (date, chapters,
  entities touched, threads advanced, open questions). Cheap to write,
  greppable, and the second continuity anchor.
- **Update-in-place over append-only.** A new chapter updates existing
  entity pages and relationships rather than only adding records; the
  checker still guarantees every claim stays source-linked.
- **Skip, with reason:** qmd search, Obsidian graph view, Marp slides,
  Dataview, image pipeline. The notebook is agent-facing, not
  human-browsed, and search is explicitly deferred by the plan.

So: beneficial as a working method for the re-run, not as a new storage
architecture. The 006 handoff note already pointed here ("index and log
pages may work before heavier search"). The Plan 012 notebook is that
prediction, realized.

## Handoff

Plan 007 does not build a wiki. The compiled Markdown experiment belongs to
Plan 009, after direct reading has a baseline and source-linked records exist.

The Plan 012 pi-run notebook (`.weaver/knowledge/shadow-slave/`) is the
first real, source-linked implementation of this pattern and the ground
for later memory plans.
