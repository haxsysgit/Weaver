# Plan 006 research synthesis

## Observation

The surveyed systems solve different parts of the problem:

| Source | Useful evidence | Limit |
| --- | --- | --- |
| Pi | direct loop, steering, FIFO follow-up, resumable sessions | no cross-session semantic memory |
| Codex | thread, turn, item, resume, steer, interrupt, lifecycle events | no Weaver relationship or retry-attempt model |
| Claude Code | saved sessions, resume, file context, compaction | context files are not a typed relationship store |
| Hermes | SQLite, WAL, migrations, tool fields, search | its reasoning and memory policy do not fit Weaver |
| Honcho | separate reasoning levels and contradiction handling | derived records still need Weaver validation |
| LangGraph | checkpointed stages and durable interrupts | replay rules do not prove item settlement |
| LLM Wiki | inspectable Markdown synthesis, index, log, lint | generated pages are not canonical evidence |

## Accepted Plan 006 decision

The first durable conversation uses:

1. a Weaver-owned direct `RunCoordinator`;
2. exact immutable conversation items in canonical SQLite;
3. durable run events and recovery choices in the same database;
4. replaceable context snapshots linked to exact sources;
5. separate owner-attributed relationship memory and Weaver opinions;
6. a later, rebuildable private Markdown projection.

LangGraph stays optional until a graph-shaped workflow earns it.

## Context assembly rule

The model sees a projection. The projection may include exact recent items,
one selected context snapshot, active relationship memories, current Weaver
opinions, and tool/provider instructions.

Every included snapshot, memory, and opinion carries source identifiers and a
version. Replacing the projection never changes exact history.

## Memory rule

Low-risk relationship details may save with a visible notice and undo.
Sensitive, disputed, or high-impact details stay proposed until the owner
confirms them.

Owner messages, Weaver opinions, and future literary claims are not the same
kind of record. Attribution, claim type, source type, confidence, scope, and
revision status remain separate fields.

## Later hypotheses

Plan 009 may test:

- narrative-thread Markdown pages;
- contradiction-aware versions;
- linting;
- index/log navigation;
- private Obsidian views;
- bounded compiled memory against direct rereading.

None of those belongs in LangGraph state. None is admitted by Plan 006.

## Rejected suggestions

- make LangGraph the default conversation coordinator;
- use a single `provenance` label for every knowledge dimension;
- let prompt wording enforce canon/opinion separation;
- make the generated wiki canonical;
- require Git for private generated knowledge;
- implement FTS5 before transcript search exists;
- auto-save sensitive or disputed relationship memory;
- run the Plan 007 live metadata chat before restart safety is proven.
