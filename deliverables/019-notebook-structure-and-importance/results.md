# Results

## Slice 2 pre-run: cost measurement test (2026-08-16)

Measured BEFORE committing to the full 3149-3160 reading, per owner
directive ("accurately calculate and test this first using a small part
of the notebook").

**Test:** read chapters 3149-3150 as a budgeted subagent run (usageBudget
tokens soft 150k/hard 300k, costUsd soft $0.25/hard $0.50). Run
f0689c3f, context fork, model deepseek-v4-flash.

**Output:** `reading/3149.json` (9 statements) + `reading/3150.json`
(10 statements), both schema-valid, source sha256 + line_count verified
against the novel files (honest provenance).

**Cost — the real numbers (subagent's own calls only, after run start):**

| metric | value |
|---|---|
| model calls | 33 |
| fresh input | 168.2k tokens |
| output | 21.7k tokens |
| cacheRead | 5.58M tokens |
| **total cost (2 chapters)** | **$0.0453** |
| per chapter | $0.0226 |
| **extrapolated 12 chapters** | **$0.27** |

**Measurement lesson (important):** the subagent run forked the parent
session, so its jsonl contained the parent's ENTIRE 2-day history (838
calls, $1.14). Naively summing the jsonl gives $1.21 for 2 chapters —
wrong by 27x. The correct figure requires filtering to calls after the
run's start timestamp. Lesson: for clean per-run accounting, start
subagent runs fresh (context: fresh) or always filter by timestamp.

**Verdict:** full reading 3149-3160 ≈ $0.27 extrapolated — far under the
$3 cap. Cache hits dominate (5.58M cacheRead vs 168k fresh input per
run; cacheRead is the bulk of context and costs ~50x less). The
remaining slices are agent-executed, no key. Live budget for 019 is
safely inside the cap.

## Slice 2: reading 3149-3160

Pending (measurement above done; run gated on owner go + $3 cap).
