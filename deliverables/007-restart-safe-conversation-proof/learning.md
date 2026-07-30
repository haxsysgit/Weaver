# Learning Note: Restart-safe conversation proof

## Gate status

**Unadmitted. Owner confirmation required after Plan 006 is finally accepted.**

## Tiny model

Before Weaver talks to a live model, it needs to prove that its notebook
survives a process dying at the worst useful moment.

One fake tool result settles. The process stops. A new process opens the same
database and continues without calling that tool again.

## Confirmed input from Plan 006

- `Relationship -> Conversation -> Turn -> Run`
- exact immutable conversation items;
- durable run events;
- direct coordinator first;
- retry and continue create new linked runs;
- canonical SQLite owns recovery;
- no silent replay;
- no LangGraph in the first proof.

## Questions this learning cycle must answer

1. What is the smallest schema that preserves the accepted identity model?
2. Which run phases bracket a model call and a tool call?
3. Which rows settle in one transaction?
4. What exact data does retry omit?
5. What exact settled data does continue add?
6. How does a subprocess fixture stop after tool settlement?
7. Which uniqueness constraints turn duplicates into visible failures?
8. How are owner-only permissions created and verified?
9. How small can the repository/coordinator interfaces stay?
10. Which failures should remain recorded rather than retried?

## Proposed proof

> A fake conversation persists exact ordered items, restarts in a new process,
> exposes interrupted work, continues without replaying a settled tool result,
> and never duplicates a turn, call ID, result, or event.

## Exclusions

No live model, private library, relationship curation, compaction, FTS5,
generated wiki, LangGraph, or effectful-tool exactly-once claim.

## Confirmation record

- Owner choice: pending
- Date: pending
- Corrections: pending

Confirmation will admit a detailed implementation plan and deterministic build,
not final acceptance.
