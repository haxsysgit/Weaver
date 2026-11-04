# Results

## Status

**Complete (2026-11-04), pending the owner's decision.** Live spend for
the whole plan: **$2.58** of the $10.00 cap.

## Summary

1. **Every turn answers.** In 327 live answers after the gap answer
   shipped (regression 66, check sets 36, held-out 225), no turn gave the
   reader nothing. Before it, 18 of 66 diagnosis answers did.
2. **The hybrid search earns its keep, and so does its vector half.**
   On 15 fresh held-out questions, three runs each, the full toolset with
   the rebuilt hybrid search (arm A) got 6.67 of 15 right per run, word
   search alone (W) 4.33, and reading tools with no search (D) 3.67. Both
   fixed rules pass. A was also the cheapest and fastest arm.
3. **Wrong scenes stopped; wide what-if answers got thinner.** The check
   set's scene substitutions went from 2 of 9 to 0 of 9, but its three
   power-comparison questions stayed low (3 of 9 correct, bar 6).

## Part 1: no-answer turns

Same 33 question-and-arm pairs, twice each (66 answers), from Plan 032's
failures.

| Build | Answers | No answer | Rescued by the gap answer |
|---|---|---|---|
| Before (diagnosis, runs 4-5) | 66 | 18 | 0 |
| After patch 3 (regression, runs 6-7) | 66 | 0 | 20 |

All 18 silent turns came from two checks: no reading packet built (17)
and unsafe tool calls (1). The gap answer now covers every site. In round
2's held-out runs it stood in 18 times: no packet 10, publication repair
failed twice 7, unsafe tool calls 1.

## Round 1: vector-only search (build `ed67432`)

| Arm | Mean correct of 15 | pass^3 | Declined | Quote misses |
|---|---|---|---|---|
| A (all tools, vector search) | 6.00 | 1 | 18 of 45 | 1 |
| D (read, find, browse) | 4.33 | 2 | 16 of 45 | 0 |

A minus D: +1.67 (bar +2.00). **Rule: retire vector search.** The review
(findings 2 and 3) found the search itself broken at the root, and the
owner directed a fix and a re-test instead (direction 9).

## Root cause and fix (no model spend)

On 53 dev questions (never the held-out 15), the shipped search found the
right chapter in its top 5 for 38%. Real word search alone reached 45% and a
true blend 58%. Detail in `learning.md`. Built as `3e31779`: vector plus BM25
fused by rank, a preview on every hit, word search over every shelf chapter
(1 to 3232), and a give-up rule that reads the neighbouring chapters first.

## Round 2: the hybrid (build `3e31779`)

### Held-out set (15 questions, 3 runs, 135 answers)

| Arm | Mean correct of 15 | pass^3 | Correct | Partial | Wrong | Declined |
|---|---|---|---|---|---|---|
| **A** hybrid search + all tools | **6.67** | **2** | 20 | 3 | 11 | 11 |
| W word half only | 4.33 | 1 | 13 | 11 | 7 | 14 |
| D read, find, browse | 3.67 | 0 | 11 | 2 | 13 | 19 |

| Band | n | A | W | D |
|---|---|---|---|---|
| Chapters 1-1000 | 5 | 3.00 | 2.33 | 0.67 |
| Chapters 1001-3127 | 10 | 3.67 | 2.00 | 3.00 |

| Arm | Cost per answer | Seconds | Tool calls | Gap answers |
|---|---|---|---|---|
| A | $0.0053 | 12.2 | 5.47 | 3 |
| W | $0.0066 | 15.4 | 6.24 | 4 |
| D | $0.0072 | 15.5 | 6.84 | 11 |

The hybrid is about 20% cheaper and faster than either other arm, because
it finds the scene in fewer lookups.

### The rules

| Comparison | Gap (bar +2.00) | pass^3 | Quote misses | Rule |
|---|---|---|---|---|
| A vs D (the search tool) | +3.00 | 2 vs 0 | 0 vs 0 | **keep the hybrid search tool** |
| A vs W (the meaning half) | +2.33 | 2 vs 1 | 0 vs 0 | **keep the meaning half** |

**The quote-miss correction (review finding 8).** The analysis first printed
"the search tool does not earn its keep" for A vs D, on one quote miss for
A against none for D. Both round 2 misses (one in A, one in W) put the
reader's own question words in quotation marks,
which the checker read as a novel quote. Echoes of the question no longer
count; the raw counts are still printed beside the corrected ones. Round 1's
single miss is a genuine one and is unchanged.

**Uncertainty.** Per question, A beats W on 7 more answers and D on 9. A
bootstrap over questions puts the chance that A is not ahead at about 4.5%
in each comparison. A W-to-A swing of one borderline answer (audited) would
still leave A at exactly +2.00.

### Check set (arm A, 3 runs, 18 answers)

| Build | Another scene presented | Trial answers correct |
|---|---|---|
| Plan 032 (before 033) | not counted | 7 of 10 |
| Round 1 (`ed67432`) | 2 of 9 (0 under Plan 032's rulings) | 2 of 9 |
| Round 2 (`3e31779`) | **0 of 9** | 3 of 9 |

Gate: at most 1 substitution (passes), at least 6 trial answers correct
(fails). The trial misses are what-if and power comparisons that state their
inferences and cite, but leave out one side's key facts (Anvil's swords, prime
Azarax) and say plainly they do not have that passage.

## Commands

```bash
PREFIX=h2_ DIR=heldout2 ARMS=ADW uv run python deliverables/033-every-turn-answers/tools/analyze_heldout.py
PREFIX=x2_ uv run python deliverables/033-every-turn-answers/tools/check_summary.py
uv run python deliverables/033-every-turn-answers/tools/diag.py
```

Inputs and outputs are private, under `.weaver/evaluation/plan033/`.

## Spend

| Stage | Spend |
|---|---|
| Part 1 (diagnosis, regression, check set) | about $1.03 |
| Round 1 held-out | $0.51 |
| Round 2 (check set $0.18, held-out $0.86) | $1.04 |
| **Total** | **$2.58** of $10.00 |
