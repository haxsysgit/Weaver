# Task for researcher

Synthesize innovative context assembly approaches for Weaver — a novel-reading AI companion. You will be given two analysis files covering 6 existing systems.

Read /home/hax/novelfriend/deliverables/006-settle-langgraph-boundary/research-pi-langgraph-hermes.md and /home/hax/novelfriend/deliverables/006-settle-langgraph-boundary/research-codex-claude-honcho.md once they exist.

Weaver is unique: it reads novels (3,000+ chapters of Shadow Slave), builds layered understanding (literal recall + themes + character arcs + causal reasoning + opinions), maintains a continuing friendship with the owner across conversations, and must never confuse canon (source text) with opinion (Weaver's interpretations).

Derive 3-5 concrete hybrid approaches for Weaver's context assembly, curation, and compaction that NONE of the 6 systems use alone. Do NOT recommend "just use RAG" or "just truncate." Be genuinely innovative. Consider:

- Narrative-structured summaries (character threads, plot arcs, thematic clusters as separate compacted records rather than one flat summary)
- Multi-level compaction (conversation summary + novel understanding summary + relationship memory at different granularities)
- Reasoning-derived context (like Honcho) but tuned for literary analysis — extracting implicit connections, contradictions, and patterns from the narrative
- Context as a versioned, queryable projection with source citations (every claim links to chapter+passage)
- Hybrid of Claude Code's context editing (stale tool removal) + Pi's non-destructive compaction + Honcho's background reasoning
- Chunking strategies specific to fiction (by narrative arc, not by token count)
- Anything else genuinely novel you can derive

For each approach, explain: (1) what it borrows from which systems, (2) why it fits Weaver specifically, (3) what the minimal first implementation would be.

Output: one recommendation at the top (the one to build first), then 3-5 approach sections with rationale. Be opinionated.

---
Update progress at: /home/hax/novelfriend/.pi-subagents/artifacts/progress/3ae43969/progress.md

---
**Output:**
Write your findings to exactly this path: /home/hax/novelfriend/deliverables/006-settle-langgraph-boundary/research-synthesis.md
This path is authoritative for this run.
Ignore any other output filename or output path mentioned elsewhere, including output destinations in the base agent prompt, system prompt, or task instructions.

## Acceptance Contract
Acceptance level: attested
Completion is not accepted from prose alone. End with a structured acceptance report.

Criteria:
- criterion-1: Return concrete findings with file paths and severity when applicable

Required evidence: review-findings, residual-risks

Finish with a fenced JSON block tagged `acceptance-report` in this shape:
Use empty arrays when no items apply; array fields contain strings unless object entries are shown.
`criteriaSatisfied[].status` must be exactly one of: satisfied, not-satisfied, not-applicable.
`commandsRun[].result` must be exactly one of: passed, failed, not-run.
`manualNotes` and `notes` are optional strings; an empty string means no note and does not satisfy `manual-notes` evidence.
```acceptance-report
{
  "criteriaSatisfied": [
    {
      "id": "criterion-1",
      "status": "satisfied",
      "evidence": "specific proof"
    }
  ],
  "changedFiles": [
    "src/file.ts"
  ],
  "testsAddedOrUpdated": [
    "test/file.test.ts"
  ],
  "commandsRun": [
    {
      "command": "command",
      "result": "passed",
      "summary": "short result"
    }
  ],
  "validationOutput": [
    "validation output or concise summary"
  ],
  "residualRisks": [
    "none"
  ],
  "noStagedFiles": true,
  "diffSummary": "short description of the diff",
  "reviewFindings": [
    "blocker: file.ts:12 - issue found, or no blockers"
  ],
  "manualNotes": "anything else the parent should know"
}
```