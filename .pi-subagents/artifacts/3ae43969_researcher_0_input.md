# Task for researcher

Analyze context assembly and management in these 3 systems: Pi (pi-mono open-source agent, JSONL tree with non-destructive compaction), LangGraph (BSP checkpointing with typed state and reducers), and Hermes (SQLite session store with FTS5, compression lineage, file-backed memory).

For each system, research how it handles: (1) what stays in context vs gets removed, (2) compaction/summarization strategy, (3) cross-session continuity, (4) domain-specific context structure.

Then identify what each system fails to address for Weaver — a novel-reading companion that needs: literal recall (exact passages), interpretive understanding (themes, character arcs), canon-vs-opinion separation, relationship continuity across conversations, and narrative-preserving compaction.

Your primary sources are Pi source at packages/agent/src/agent-loop.ts and packages/coding-agent/src/core/session-manager.ts, LangGraph at libs/langgraph/langgraph/pregel/ and libs/checkpoint/, Hermes at agent/conversation_loop.py and tools/memory_tool.py. Web search for docs is fine for supplementary details.

Output: one section per system (3-5 paragraphs each), then a Weaver gaps section.

---
Update progress at: /home/hax/novelfriend/.pi-subagents/artifacts/progress/3ae43969/progress.md

---
**Output:**
Write your findings to exactly this path: /home/hax/novelfriend/deliverables/006-settle-langgraph-boundary/research-pi-langgraph-hermes.md
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