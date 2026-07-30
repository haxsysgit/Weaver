# Coding Agent Harness Comparison (June 2026)

Deep analysis of Hermes, Pi, and MiMo Code for Arinze's FRAME-powered coding harness project.

## Summary Table

| | Hermes | Pi | MiMo Code |
|---|---|---|---|
| **Language** | Python | TypeScript/Node | TypeScript/Bun |
| **Stars** | 2.6k | - | 10.3k |
| **Release** | Mature (v0.16.0) | Active (v0.74.2) | New (open-sourced Jun 2026, v0.1.0) |
| **Framework** | None (raw OpenAI) | None (raw API via `pi-ai`) | None (raw API) |
| **Agents** | Single + subagents | Single | 3 types: build, plan, compose |
| **Context** | Linear system prompt (prompt_builder.py 1,686 lines) | Linear + extension hooks | Checkpoint-based with auto-save/reconstruction |
| **Memory** | Persistent (vector + skill) | Session-based | Persistent (SQLite FTS5): MEMORY.md, checkpoint.md, notes.md |
| **Task tracking** | No built-in | No built-in | Tree-shaped (T1, T1.1...) integrated with checkpoints |
| **Stop condition** | Agent decides | Agent decides | `/goal` with independent judge model |
| **Extensibility** | Skills + MCP | Extensions (70+ examples) + MCP | Skills + MCP + /dream + /distill |
| **FRAME integration** | Replace `prompt_builder.py` | Write extension for `before_agent_start` | Plug into checkpoint/memory system |

## Key Architectural Differences

### Hermes
- Built from scratch in Python — no LangChain, no CrewAI, no frameworks
- Core files: conversation_loop.py (4,458 lines), prompt_builder.py (1,686), tool_executor.py (1,428)
- prompt_builder.py assembles system prompt from: memory + skills + profile + AGENTS.md + tools
- FRAME integration: replace prompt_builder.py's linear assembly with FRAME's five-bucket loader (Facts, Rules, Acts, Map, Expect)
- Pro: Python (Arinze's language), already installed, portable structure
- Con: ~20K lines, includes non-coding baggage (gateway, cron, messaging, profiles, onboarding)

### Pi
- TypeScript, npm package `@earendil-works/pi-coding-agent`
- Extension system with lifecycle hooks: session_start, before_agent_start, agent_start, message_end, session_shutdown, etc.
- `claude-rules.ts` example shows exactly how to inject context via `before_agent_start` hook
- FRAME could be a ~50-line TypeScript extension, no fork needed
- Pro: Lightest touch, richest extension API with 70+ examples
- Con: TypeScript (Arinze doesn't know TS), would defeat FRAME's language-agnostic goal

### MiMo Code
- TypeScript compiled to 135MB binary via Bun's `--compile`
- Closest architectural alignment to FRAME: already has checkpoint system, memory files, task tree, goal/judge
- FRAME buckets map naturally: Facts→checkpoints, Rules→agent types, Acts→MCP+tools, Map→MEMORY.md, Expect→/goal+judge
- Pro: Least amount of building needed, context architecture already FRAME-shaped
- Con: TypeScript, Xiaomi-backed (governance risk), new codebase

## Verdict (as of June 2026)

For Arinze's "Python-only, fork-based, FRAME-powered coding harness":
- **Hermes is the only Python option.** Pi and MiMo are TypeScript.
- The plan: fork Hermes, strip non-coding parts (gateway/cron/messaging/profiles), replace prompt_builder.py with FrameSDK loader
- Long-term: may combine best of MiMo's context architecture with Hermes' agent loop
