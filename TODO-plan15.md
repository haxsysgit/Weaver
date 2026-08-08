# Plan 15 TODO — context system + agentic sharpening

Temp working file. Status legend: [ ] todo · [x] done · [D] needs owner discussion first · [W] waiting on owner.

## Order = highest short-term win first

- [x] **1. Temp file + priority order** — this list (2026-08-07)
- [x] **2. 40 novel-derived questions** — owner-confirmed 2026-08-07; re-run at ceiling 3127 done against the persistent index (scripts/score_library_questions.py, pushed e293d36): notebook exact 0.35/0.16 best, dense 0.23/0.13, hit@10 0.40 is the lead signal, hit@1 0.03. Result: retrieval = hybrid (meaning search finds candidates, agent decides how to retrieve, finders catch the rest, assembler + LLM rank, parameters by experiment) — recorded in docs/reading-finders.md (pushed 6d4f747)
- [x] **3. Prompt rewrite** — **done and pushed 2026-08-07** (a844615): sectioned, scoring literacy, triage-first workflow, worked example, plus <tone> (friend who read the whole novel) and <who_you_are> (eighth lineage backstory grounded in ch2321 Weaver's actual voice) sections; 8/8 test_chat_runtime green
- [x] **4. Tool-cap fix** — **implemented and pushed 2026-08-07** (dcac467 + budget retune): two budgets, tool calls capped at N, answer step always guaranteed; hermes-style forced call strips the tools (d12f589). **Owner retune 2026-08-07: awakened 50 / ascended 70 / transcendent 90** (ceilings, not targets; trust the model + the context engine), the old 8-step clamp is lifted to an absolute guardrail of 100, web default = 70 (Ascended), and the per-step countdown reminder now only appears at <= 10 remaining (noise at 50-90 steps). Pending: live N-experiment needs owner go
- [x] **5. Two-phase reading architecture** — **design locked 2026-08-08**: router (one call, 5 classes, picks skill pack / tier / budget / packet size) → Locate (2-6 tool calls) → packet assembly (machinery, ephemeral 50-200K tokens) → judge gate → one heavy toolless synthesis call → verify (transcendent only)
- [x] **6. 3-tier reasoning modes** — Awakened / Ascended / Transcendent: **done 2026-08-07** — budgets 50/70/90 as ceilings (5606956, owner-set) and thinking always on with per-tier effort, REASONING_TIERS awakened high / ascended high / transcendent max (703d7cb); web profile runs Ascended (budget 70, reasoning high); DeepSeek has no low/medium so awakened shares high with ascended; per-tier packet size + verify depth ride along with the two-phase architecture (item 5)
- [~] **7. Spoiler map + judge** — **design locked 2026-08-08, slice 1 implementing**: reader ceiling is DEAD (whole novel always searchable, no filter anywhere), map = statement labels (1-1000, spoiler-labels.json) + verified volume boundaries (everything), judge = deterministic machinery (src/weaver/spoilers/judge.py): full / guarded / ask_first, position + knob are user preferences never model args, label pass over existing statements comes later with owner review (no re-reads)
- [ ] **8. Weaver skills** — situational prompt packs: power-scaling, what-if, arc-recap, character-profile, spoiler-policy
- [D] **9. Compaction + labeled context** — (a) labeled context (tags at write time: arc/characters/topic/kind/resolved), (b) living story-state note, (c) graph-anchored compaction. Pi-style summary = inspiration only. THE discussion
- [x] **11. Tool design** — **implemented 2026-08-07**: five reading tools shipped (search_story, read_chapters, find_text (phrase|speaker), browse_chapters, who_is). Names owner-approved after the unix-name debate (grep/sed/find rejected: false familiarity, sed implies editing; 'like grep' lives in the description instead). Design studied from pi (registerTool promptSnippet/promptGuidelines, active-tool filtering) and hermes (registry + toolsets, check_fn availability gates, per-tool result caps, progressive disclosure for 90+ tools - skipped, weaver is 5). Finders carry the durable split: prose is ephemeral, durable_evidence holds pointer lists. Baseline: .weaver/research/tool-call-experiment/results.md (private)
- [ ] **10. FRAME** — verdict recorded: borrow the schema+validation discipline, skip the import (project-truth ≠ story-truth). Nothing to build

## Discussion items (owner + me)
- Tool cap numbers + guaranteed answer step
- 3-tier mode semantics and defaults
- Compaction options (a/b/c above)
- Two-phase architecture shape
- Tool design: what the weaver toolset should be (pi/hermes patterns + experiment baseline)

## Tool-call experiment baseline (2026-08-07)
- 40 questions (questions-v2), 5 fresh-context subagents, 8 each, ANY means (local grep/sed/read + wiki + web), answers stripped.
- 239 tool calls total -> mean 5.98/question, median 5.5, min 1, max 22 (q17 LO49). Elapsed ~86s/question mean.
- 40/40 answered. Approach mix: ~19 pure local novel read/grep, ~17 local+web mixed, ~4 web-heavy.
- Lessons: finders carried (grep -> chapter -> read); wiki used as a map, novel confirmed the text; meaning search alone never reached this (best arm 0.35 hit@5).
- Raw data: .weaver/research/tool-call-experiment/results.md (private, 600).

## Locked capability (2026-08-07, owner: "THIS IS THE CAPABILITY I WANT WEAVER TO HAVE")
- **Exact phrase + vocative finding is core, not optional**: `docs/reading-finders.md` records the full trace (grep vocative/"Hail Weaver"/"thousand hopeless prayers" on raw chapters, sed to verify, notebook as map only) and the miss that matters (same-line quote+verb patterns are blind to this novel's dialogue structure). Applies to: item 5 (two-phase architecture must include the finders), item 7 (spoiler work), the Ariel Reader Trial (grep "Unholy Titan" -> ch1247), and any future tool design. Meaning search and exact search are complements, never substitutes

## Context reality (corrected 2026-08-07, owner caught the error)
- DeepSeek flash window is 1M tokens. The web runtime passes NO token_budget (chat_runtime.py:320), so history is fed unbounded today. The assembler's drop-oldest truncation is opt-in config, not the runtime reality.
- Implication: tool budgets of 10-20 do NOT collide with the window. Real constraints are (a) per-step re-send cost (each step re-sends all history + prior tool results, quadratic growth, fits window but costs money/latency), (b) lost-in-the-middle gradient only near ~50% of window, (c) truncation only if a budget is configured for cost control later.
- Two-phase packet (50-200K) sits in 1M with huge headroom. The locate phase can be generous.
