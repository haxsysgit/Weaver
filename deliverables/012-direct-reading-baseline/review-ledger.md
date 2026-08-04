# Review Ledger: Build Weaver's first Shadow Slave knowledge

## Status

Review 1 (plan wording revision, 2026-08-03) complete; the owner confirmed
the plain-language plan and locked choices. Review 2 (story notebook versus
named chapter locations, ten-chapter groups) is complete. The final owner
decision is recorded: Accepted 2026-08-04.

## Review 1: Plain-language plan revision (2026-08-03)

The plan was rewritten in plain language with a fixed reading flow, a
defined notebook layout, a deterministic checker, and an explicit completion
list. The old chapter 1 attempt is quarantined and chapter 1 is re-read from
zero. Findings from the earlier contract repair carried forward:

1. **No invented acceptance.** The early pilot stays candidate evidence;
   its process predates the final contract and it is not reused.
2. **One master copy.** Chapter JSON files are canonical; pages and the
   connection file are rebuilt, so the versions cannot drift.
3. **Evidence on every statement.** Supporting chapter + exact location;
   unsupported claims become unknown.
4. **Reader-positioned knowledge (owner).** Weaver talks according to where
   the reader is; entries keep "when this became known" and later
   revelations add corrections without erasing earlier knowledge.
5. **Excerpt policy.** Short exact lines allowed only inside private
   readable chapter notes; JSON and connections store locations only.

## Review 2: Story notebook consistency (post-run, complete 2026-08-03)

- Reviewer: independent `notebook_reviewer` agent, read-only
- Frozen candidate: regenerated private notebook after source-location
  repairs; checker passed before review close
- Scope: groups 0001-0010, 0011-0020, 0021-0030, 0031-0040,
  0041-0050, 0051-0060, 0061-0070, 0071-0080, 0081-0090, and 0091-0100
- Findings: all 200 statements have valid IDs, own-chapter evidence, and
  source-supported paraphrases; no later-knowledge leaks or structural
  mismatches remain
- Verdict: pass; owner acceptance is still a separate human decision
