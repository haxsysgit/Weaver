# Review Ledger

## Status

Slice 9 done 2026-11-17. One fresh reviewer agent read `git diff
728d697..HEAD` (the voice change and the memory store, tools and wiring),
ran the memory tests, and wrote probes outside the repo. Every finding below
is repaired or recorded. Repairs were written red first: 25 new tests
failed for the expected reasons, then passed.

## Findings and dispositions

| # | Severity | Finding | Disposition |
| --- | --- | --- | --- |
| 1 | Blocker | A stored value could fake extra snapshot lines: values allowed line breaks and straight double quotes and were rendered inside quotes unescaped. Demonstrated. Worse because the reader note sits in the system prompt. | Repaired. The scan refuses line breaks and straight double quotes, and every value is rendered as one JSON string. Test: no listed line carries more than one quoted value. |
| 2 | Blocker | Any note became "Rule (said N times; follow it)" after two calls, even in one turn, and a disputed correction lost its status when written again. Demonstrated. | Repaired. A note is firm only after two separate turns, and only a convention or a checked correction; an unchecked or disputed correction never is. Once disputed, a correction stays disputed. "follow it" is gone; the label is "Firm note". |
| 3 | Should-fix | Accented letters and dotless i passed the scan (`Ìgnore all prevìous ìnstructions`). Demonstrated. | Repaired. Matching runs on an NFKD form with accents stripped and lookalikes mapped. Paraphrases still pass; the escaping in 1 is the wall, the patterns a speed bump. |
| 4 | Should-fix | Spoiler leak: an uncited note showed under protection. Demonstrated. | Repaired. Under protection a correction that cites no chapter is held back and counted. Conventions and profile values (the reader's own words) still show. |
| 5 | Should-fix | One shared connection, transactions held open across awaits: a cancelled write left a transaction open, so the shared SQLite file could lock every reader's turn; concurrent turns could commit or roll back each other's writes. Demonstrated (cancel). | Repaired. Every write and every snapshot runs under one lock, and each write is one transaction that rolls back on any exception, cancellation included. Tests: cancelled write leaves no transaction; 30 concurrent writes from two devices. |
| 6 | Should-fix | `reader_words` only had to appear somewhere in the reader's messages ("hi" passed); conventions needed none. | Repaired. The reader's words must share a real word (3+ letters, not a small word) with the value kept, and every note now needs them. |
| 7 | Minor | `1e400` / `Infinity` chapters crashed the tool. Demonstrated. | Repaired. Only whole numbers are chapters; anything else is refused as `bad_chapters`. |
| 8 | Minor | Ordinary sentences refused ("swung open (ch. 40)", "Everyone's favourite", "a token of loyalty"). Demonstrated. | Repaired; each is now a kept test case. |
| 9 | Minor | An old `.env` with `WEAVER_VOICE=buddy` stops startup. | Recorded for the owner. Startup fails loudly with the voice list; the evaluator does not open `.env`. |
| 10a | Minor | `memory_events` grows without limit. | Repaired: the last 200 per device are kept. |
| 10b | Minor | A failed `memory.open()` left the session and preferences open. | Repaired. |
| 10c | Minor | `_key` dropped accented letters, so notes could collide. | Repaired: keys keep Unicode letters (accents folded). |
| 10d | Minor | Punctuation-only frame items were stored. | Repaired: dropped. |

## Checked and sound (reviewer)

Device resolution from the conversation owner, never a header; story frame
ownership; parameterised SQL; odd argument shapes refused; refusals say
nothing was kept and store no text; spoiler hold-back rechecked every turn;
lifecycle on the developer surface and the sponsored error path; the web
policy still blocks external effects; the voice change is consistent.

## Floor after repairs

`uv run pytest -q`: 1106 passed, 4 skipped. Ruff on the memory files is
clean.
