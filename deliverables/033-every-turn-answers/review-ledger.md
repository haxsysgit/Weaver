# Review Ledger

## Status

In progress.

## Findings during execution

| # | Severity | Finding | Outcome |
|---|---|---|---|
| 1 | Minor | Patch 1's pre-test ran only the volume test file, not the whole frontend suite; one Settings test expected "Volume 13" for chapter 3200. The executor's floor caught it and stopped (2026-11-04). | The planning agent changed the expectation to "Volume 14" (the intended change), re-ran vitest (185 passed) and tsc, committed slice 2 (ecdd403). Lesson: pre-test a patch against the whole floor, not the files it touches. |
| 2 | Major | The `<when_you_cannot_find_it>` prompt rule makes Weaver concede too early. On the same six check questions in arm A, Plan 032 had 13 of 21 answers correct and this build 5 of 18; the trials went from 7 of 10 judged answers to 2 of 9 (t1 3 of 3 to 0 of 3). Held-out answers declined 18 of 45 in arm A (Plan 032 arm A: 8 of 100 across its set). Many declines cite the chapter next to the expected one (2490 or 2492 for 2491, 198 or 199 for 197) and stop without reading it. | Open: owner decision. The rule tells the model what to say when it has not found a scene, but not to keep looking first. |
| 3 | Minor | The executor did not use the one fix round after the check gate failed, and carried on to Part 2 on the same build. Its reasoning (the gap was retrieval, and new prompt copy is the owner's call) is recorded; the held-out comparison is still a fair A versus D test, but both arms ran under the rule in finding 2. | Recorded. |
| 4 | Minor | Two r15 check answers (the earlier confession to the first cohort) were labelled `substitutes-scene`, where Plan 032's rulings label the same content `partial:original-cohort-reading`. Under the earlier ruling the substitution count is 0 of 9, not 2 of 9. Neither is correct either way. | Recorded; the trial half of the gate fails regardless. |
| 5 | Minor | Held-out judging was fast (90 answers in about two minutes, one chapter opened). The planning agent audited the 20 seeded answers plus 15 answers that could change the rule outcome, against the key and the chapters: 0 of 35 disagree on correct or not, so no re-judge. Two h12 answers missing the core fact were labelled `partial` where the rubric says `wrong`; no count changes. | Audit passed. |
| 6 | Minor | 65 tool results across the 66 diagnosis answers failed as "Tool result exceeds maximum size" (a broad `find_text` overflows the 24,000-character cap and spends a lookup). Found by the executor, outside this plan's files. | Recorded for 033.5 or later. |
| 7 | Minor | Patches 2 and 3 wrote CRLF files on a LF checkout; the executor converted the touched files back before committing. | Recorded: fix `_apply.py` to keep line endings before it is reused. |
