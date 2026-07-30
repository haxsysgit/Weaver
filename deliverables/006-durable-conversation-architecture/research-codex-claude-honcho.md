# Research: Codex, Claude Code, and Honcho

Checked on 2026-07-30. Codex code claims are pinned to
[`rust-v0.145.0`](https://github.com/openai/codex/tree/rust-v0.145.0).
Claude Code and Honcho claims use moving product documentation and may change
after this plan.

## Codex

### Observation

The Codex app-server protocol gives clients a useful identity model:

- a thread is a conversation;
- a turn is one user request and its work;
- an item is one typed unit inside a turn;
- `thread/resume` resumes stored history;
- `turn/steer` adds input to the active turn;
- `turn/interrupt` requests cancellation;
- turn and item notifications expose lifecycle changes.

These claims are supported by the
[app-server guide](https://learn.chatgpt.com/docs/app-server) and the pinned
[`thread.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/thread.rs),
[`turn.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/turn.rs),
and
[`item.rs`](https://github.com/openai/codex/blob/rust-v0.145.0/codex-rs/app-server-protocol/src/protocol/v2/item.rs).

### Weaver use

Weaver keeps the thread, turn, item, resume, steer, and interrupt vocabulary
as design evidence. Weaver adds `Relationship` above `Conversation` and `Run`
below `Turn`. The Codex protocol does not prove Weaver's storage model,
relationship memory, retry semantics, or literary understanding.

### Boundary

Claims from unrelated Codex `main` commits have been removed. Moving app-server
documentation is useful for the public protocol, while exact code statements
remain pinned to `rust-v0.145.0`.

## Claude Code

### Observation

Claude Code saves sessions continuously and resumes them later. A resumed
session restores its conversation history, including tool calls and results.
The current
[Claude Code sessions documentation](https://code.claude.com/docs/en/sessions)
documents `--continue`, `--resume`, named/session-ID resume, and the limits of
restored launch configuration.

Claude Code also uses files and compaction to shape future context. Those are
context-management patterns, not proof of semantic relationship memory.

### Correction

The previous report said Claude Code had no cross-session chat continuity.
That was wrong. The supported statement is:

> Claude Code has resumable saved sessions. Its file-backed instructions and
> auto memory are separate continuity mechanisms.

## Honcho

### Observation

Honcho stores messages before asynchronous reasoning. Its current
[reasoning documentation](https://honcho.dev/docs/v3/documentation/core-concepts/reasoning)
describes distinct reasoning levels: explicit statements, deduction, induction,
and abduction. It also describes consolidation that can identify redundant or
contradictory conclusions.

Those are two different ideas:

- reasoning level describes how a conclusion was formed;
- contradiction or supersession status describes its relationship to other
  records.

Honcho also separates immediate derivation from later consolidation. That is
useful design evidence for future Weaver memory experiments.

### Weaver boundary

Honcho's claims and confidence still need Weaver-owned validation before they
can affect a private library or a user-visible belief. Plan 006 does not import
Honcho records or treat its reasoning output as truth.

## Shared lesson

No prompt label enforces canon and opinion separation. A label can guide the
model, but enforcement needs separate records, source links, validation, and
revision rules.

Future literary records must not compress all of that into one `provenance`
field. Keep these dimensions separate:

| Field | Question |
| --- | --- |
| attribution | Who said or formed it? |
| claim type | Fact, preference, theory, opinion, or open question? |
| source type | Conversation item, chapter passage, tool result, or projection? |
| confidence | How sure is the attributed author? |
| scope | Which relationship, conversation, edition, or reading position? |
| revision status | Active, disputed, superseded, forgotten, or rejected? |

## Accepted Plan 006 use

- Adopt Codex's public conversation protocol shape as evidence.
- Correct Claude Code to saved, resumable sessions.
- Keep Honcho's reasoning levels and contradiction records distinct.
- Reject framework or prompt metadata as the canonical authority for Weaver.
- Defer literary-claim extraction and validation to later experiments.
