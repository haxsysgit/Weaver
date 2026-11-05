# Review Ledger

## Status

Slice 6 complete, 2026-11-05. One fresh subagent reviewed the diff
`d2199c5..249b3eb` (slices 2 to 5) and the diagnosis, confirmed its
findings with throwaway probes, and edited nothing. All ten findings were
repaired, each with a test where one fits. Floor after repairs: backend
934 passed, 4 skipped; ruff adds no finding on the changed files.

## Findings and repairs

| # | Severity | Finding | Repair |
| --- | --- | --- | --- |
| 1 | Major | A reader's stop while a call was still opening (DeepSeek lets cancellation escape before the first chunk) left no response and no timeout flag, so the turn crashed on an assertion and the run was never finished. | After the call: no response, no timeout, and the stop set means an interruption. Test with a provider that stalls before the stream opens. |
| 2 | Major | The spoiler check used the reader-named exemption, so a chapter the reader named past their boundary was no longer flagged. | The spoiler check counts every chapter named, the reader's own included. Test with a guarded packet. |
| 3 | Major | Any non-parenthesised mention of the reader's chapter was exempt, so "Chapter 400 is where..." passed unopened. | Exempt only after a placement word ("before", "after", "around", "until", "past", ...). Test. |
| 4 | Minor to major | Re-opened earlier passages came after this turn's reads, and the packet trims from the front, so this turn's fresh reads were cut first. | Re-opened passages go first and are capped at 4 (and at the packet's room). Test. |
| 5 | Minor | Draft-edit removal could drop a real correction of an earlier published answer, and an answer made only of such a note was published unchanged. | Not applied when the reader challenged the last answer; "earlier I said" no longer counts as a draft note; an answer that empties falls back to the checked draft. Tests (one through a real turn). |
| 6 | Minor | "(Ch. 900)" split a sentence, and "I remember when I first read..." was flagged as a recalled scene. | The splitter ignores case; "i remember" and "when i first read" are reading-experience labels. Test. |
| 7 | Minor | A stalled final reread was retried while a checked draft waited, so the reader could wait the whole turn. | No timeout retry in the final reread; the checked draft publishes at once. Test. |
| 8 | Minor | Tool runs and packet building sit outside the turn's time limit; recorded call times include the 0.25 s close grace. | Recorded, not changed: tools and packets are local file reads; the model calls were the stall. |
| 9 | Minor | Read-on used the highest chapter opened, so scattered reads could send it far from the scene. | Reads on from the highest chapter both cited and opened, else the highest opened. Test. |
| 10 | Minor | The last resort stripped unopened citations and left their claims standing as canon. | It drops the whole sentence that cites an unopened chapter. Test updated to the new rule. |

## Checked and fine (reviewer)

- No leaked task from the time-limited call; a timeout is not mistaken for
  a reader stop on the mid-stream path; the retry stays inside the turn;
  no double publish.
- A final-phase timeout re-inspects the checked draft before publishing.
- Earlier evidence reads both shapes, respects the reader's chapter cap,
  and only chapter reads (not search or browse results) are credited;
  re-opened passages go through the spoiler judge.
- Follow-through tests use the real save and reload path.

Replays after the repairs, over the 141 published answers of the Plan 030
v2 and 033.5 trials: recall check 1 (the vague ask), draft-edit 1 (the
vague ask), read-on phrase 3 (unchanged).
