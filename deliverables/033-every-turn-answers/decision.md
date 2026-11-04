# Owner Decision

## Status

**Accepted 2026-11-04. Plan closed.**

## Recommendation (planning agent, 2026-11-04)

Accept Plan 033 and keep the hybrid search as built (`3e31779`).

1. **Every turn answers.** No silent turn in 327 live answers after the
   gap answer shipped (18 of 66 before).
2. **Keep both halves of search.** On fresh held-out questions the hybrid
   beat word search alone by 2.33 of 15 per run and no search by 3.00, both
   past the fixed bar of 2.00, and it was the cheapest and fastest arm.
   The vector half earns its keep when it is blended with word search,
   which is what the owner built it for.
3. **Rescope Plan 033.5 to "the meaning half reaches the whole shelf":**
   embed chapters 3128 to 3232 into the existing index, and make the weekly
   refresh embed each new chapter (the word half already covers every
   chapter automatically). Fitting chunks to the model's 512-token window is
   optional: it helped vectors alone but not the blend.
4. **Before this build reaches `main`:** run the twelve Reader Experience
   Trials once (about $0.75; a re-run needs the owner's approval). The
   check set's three what-if trials stayed at 3 of 9 (review finding 10).
   If the Reader Trials show thinner what-if answers, a short follow-up
   teaches wide comparisons to spend a lookup on each side before
   admitting a gap.

Caveat: 15 questions is a small set. The A vs W margin clears the bar by
one answer; a bootstrap gives about a 4.5% chance the hybrid is not ahead.

## Decision

**Accepted (owner, 2026-11-04): "Accept, keep hybrid".** Plan 033 is
closed. The hybrid search stays as built (`3e31779`), both halves. Plan
033.5 is rescoped to give the meaning half the whole shelf and fold it
into the weekly refresh (recommendation 3). The twelve Reader Experience
Trials run before this build reaches `main` (recommendation 4), with the
owner's approval for that run. Not merged, tagged, or deployed.
