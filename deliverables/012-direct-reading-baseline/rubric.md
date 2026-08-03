# Acceptance Rubric: Lore graph build (Shadow Slave 1-100)

| Requirement | State | Evidence |
| --- | --- | --- |
| Owner confirmed the re-scoped direction (lore graph, pure reading, chapters 1-100) | Done | `learning.md` confirmation record 2026-08-03 |
| Owner accepted the chapter-1 pilot format and loop | Done | `learning.md` binding rules; `results.md` |
| Plans 010 and 011 are accepted | Passed | Plan 010 and Plan 011 decision records |
| Readers are fresh-context subagents (no session inheritance) | In loop | `plans/012` Reader independence; batch verification |
| Readers open only their assigned chapter file | In loop | `plans/012` Discipline; STOP conditions |
| Coordinator is sole writer of the knowledge base | In loop | `plans/012` Roles |
| All 100 chapters read with three eyes (coordinator + 2 readers) | 1/100 | `chapters/` in private KB |
| `lore-graph.jsonl` built cumulatively per the write contract | 1/100 | entities/edges/threads/checkpoints in private KB |
| Stable ids, aliases, confidence/verification marking | In loop | write contract |
| Atomic per-chapter batches with checkpoint records | In loop | write contract; `checkpoint` records |
| Restart safety: resume from last checkpoint, no duplicates | In loop | write contract validation |
| Threads ledger tracks setups and payoffs | In loop | `threads.md` in private KB |
| Timeline ledger tracks events in order | In loop | `timeline.md` in private KB |
| Sanitized research summary in deliverables (no story-derived content) | Pending | commit after main run |
| No novel file modified | Passed so far | `git ls-files novels/` = 0; results.md incident log |
| No knowledge base content committed | Passed so far | commit audits |
| No reader subagent wrote files | In loop | batch verification |
| Independent review of graph consistency has no blocker | Not started | `review-ledger.md` |
| Owner records final decision | Pending | `decision.md` |
