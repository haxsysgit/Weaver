# Plan 029 Review Ledger

## Status

Literary draft review and both final implementation reviews completed on
2026-10-16. Runtime defects were repaired and rechecked. On 2026-10-17, the
owner accepted both remaining plan-scope dispositions: private-only semantic
inspection and the checkpoint-three compact brief.

## Review one: retrieval, evidence, and timeline correctness

The reviewer confirmed that packet trimming now rebuilds the evidence board
from retained passages, notebook text cannot satisfy direct quotation proof,
notebook-only packets fail closed, malformed chapter ranges are rejected, and
forced answers cannot bypass the packet and publication boundary.

The reviewer identified two scope questions rather than new regressions:

1. The semantic claim inspector is private evaluation machinery, not an
   always-on production call. Deterministic production checks cannot discover
   every uncited later-story fact from meaning alone.
2. The compact turn brief preserves the actual ask, prior positions, explicit
   version words, challenge state, and canonical item links. It does not claim
   deterministic resolution of every referent, alias, character version,
   timeline point, or uncertainty described in the broad original scope.

The owner accepted both dispositions on 2026-10-17. The first avoids added paid
latency after live false findings. The second keeps the smallest measured
record accepted at checkpoint three, while source-based resolution remains the
reading loop's work and Plan 030 must prove it in fresh trials.

## Review two: conversation, voice, style, and privacy

The reviewer confirmed that fake mode supplies synthetic direct evidence,
notebook-only evidence is rejected, direct quotation provenance uses retained
novel passages, and identity and soul are packaged into runtime.

The reviewer found two publication defects. A long quotation split across
several Markdown lines could evade the 25-word limit, and ordinary numbers in
parentheses could be mistaken for chapter citations. The repair groups
contiguous blockquote lines, counts all quoted words in one answer, and accepts
only explicit chapter forms such as `(ch. 900)` or `(chs. 900-901)`. Bare
numeric parentheses remain ordinary prose.

## Repair and recheck ledger

| Finding | Severity | Repair or disposition | Recheck |
| --- | --- | --- | --- |
| Trimmed passages remained in the source allowlist. | High | Rebuild the board for each retained candidate set and again for the final packet. | Focused packet tests pass; review one confirmed the repair. |
| Notebook text could satisfy direct quotation matching. | High | Parse direct chapter passages separately; notebook-only packets fail. | Focused answer tests pass; both reviewers confirmed the repair. |
| Forced answers and packet failures could bypass publication inspection. | High | Route forced answers through packet construction and fail closed after reading when the packet is absent or errors. | Turn regressions pass; review one confirmed web send, retry, and regenerate configure the builder. |
| Split or repeated quotations could exceed 25 words. | Medium | Aggregate contiguous blocks and count all quoted words in the answer. | Multiline and repeated-quote regressions pass; review two reproduced the former bypass and confirmed it closed. |
| Bare parenthetical numbers looked like citations. | Medium | Require explicit `ch.` or `chs.` citation markers. | A three-digit ordinary-number regression passes. |
| Semantic auditor is private only. | Plan contract | Owner accepted it as qualification evidence because live false findings make production blocking unsafe. | Accepted 2026-10-17. |
| Turn brief is smaller than the broad drafted schema. | Plan contract | Owner retained the checkpoint-three compact brief and moved held-out source-resolution proof to Plan 030. | Accepted 2026-10-17. |

The final affected code recheck passed 182 tests plus Ruff and whitespace
checks. The complete final floor then passed 628 backend tests and is recorded
in `results.md`.

### Literary draft review, 2026-10-16

Reviewer: the separate volumes 9 to 13 reading agent, read-only. This reviewer
had read those assigned source chapters and did not author the prompt drafts.
This is a local draft review, not either final implementation review or an
owner acceptance decision.

| Finding | Repair | Recheck |
| --- | --- | --- |
| A fixed distant witness could keep the voice detached. | Identity now permits broad perspective, close individual attention, and a return to consequences. | Executor reread the resulting identity against the selected latest-volume scenes. |
| A mandatory five-question checklist and fixed answer order could make replies repetitive. | Questions are optional lenses; the four-beat template was removed; what-if conditions can be explained where needed. | Executor checked all response modes for fixed sequencing. |
| Dry humour alone understates the range in the source. | Soul now allows playfulness, affection, and self-mockery, with an earnest admission allowed to stand. | Compared with the full rereads of 3152, 3155, and 3158. |
| Invented illustrative images inside the prompt could look like source observations. | Removed them from identity and soul; the examples document explicitly labels its separate invented setting. | Executor inspected the prose and its factual boundary. |
| The product persona could be presented as an observed narrator personality. | Study explicitly identifies the witness persona as a product choice informed by literary techniques. | Checked the study's method and targeted-reading section. |

The owner authorized flexible source selection, reviewed the resulting drafts,
and accepted the packaged identity and soul on 2026-10-16. This editorial
review and the later live evidence still do not accept a Reader Trial.

Reviewer recheck: the prompt findings were resolved. One stale study bullet
still prescribed dry, sparse humour. The executor replaced it with the same
range allowed by the revised soul, and aligned the study's opening advice with
invited narration. A final text check confirmed the stale instructions were
removed. This recheck does not establish live model behavior.
