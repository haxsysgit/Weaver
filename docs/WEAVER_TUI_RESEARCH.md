# Weaver TUI Research: Ready-Made Agent TUIs

> Status: research note, not an accepted plan. Written 2026-07-31.
> Owner decisions recorded on the same date: spike gptme first because
> staying in Python matters more than the pretty factor; OpenCode with
> DeepSeek is confirmed working by the owner, so no OpenCode spike is
> needed; Elia is not adopted as a drop-in.
>
> Updated 2026-07-31 after the gptme spike: owner rejected gptme on
> visual grounds ("ugly and just looks like generic user and assistant
> output"). Spike verdict INVALIDATED, see
> `spikes/001-gptme-tui/README.md`.

## Bottom line

Weaver needs a TUI shell for an existing agent core, conversation loop, and
model layer. None of the ready-made agent TUIs is a library you can import
and attach to your own loop. They are apps with their own loops. The real
choices are three integration shapes:

1. Fork a Python TUI (Elia) and swap its model seam for Weaver's layers.
2. Use gptme as the Python base and extend it with Weaver tools and hooks.
3. Reverse the layering: OpenCode owns the loop and Weaver becomes an MCP
   server or custom tools behind its TUI. (ACP is OpenCode serving editors,
   not a way to plug Weaver into OpenCode.)

PI's TUI engine (`@earendil-works/pi-tui`) remains the design reference for
how the chat should feel, and Plan 010 already mirrors it. Elia is the
polish reference for themes, message styling, and the typing indicator.

## Candidates (checked 2026-07-31)

| Tool | Stack | DeepSeek | Extensibility | Verdict for Weaver |
| --- | --- | --- | --- | --- |
| OpenCode | Go/TS binary, themes, plugins | Official support incl. V4 Pro | Plugins (JS/TS), custom tools, MCP, ACP, skills, permissions | Best shell if reverse layering is acceptable; owner confirmed DeepSeek works, no spike needed |
| gptme | Python, pip install | Explicit support | Python plugins (tools/hooks/commands), skills, lessons, MCP, ACP, server API | First spike: Python-native, closest to lay-on-top |
| Elia | Python + Textual, pipx | Via OpenAI-compatible config / LiteLLM | None, fork required | Not adopted; source of UI polish ideas |
| Codex CLI | Rust | Possible via custom providers | Config, AGENTS.md, MCP | Coding-focused, wrong shape |
| Aider | Python | Possible | Config/scripts | Pair-programmer, wrong shape |
| OpenRouter create-agent-tui | TypeScript scaffold | Via OpenRouter | Generates a project | Not ready-made, already installed as skill |
| PI TUI | TypeScript engine | n/a | Reference only | Design reference, already mapped into Plan 010 |
| Auntie, Harbor, Yai | unknown | unknown | unverified | Repos unreachable in research, dropped |

## Why Elia is not the drop-in

Elia is a beautiful chat client, not a TUI framework. Facts from its source:

- Conversations are `ChatData` objects in SQLite (SQLModel).
- The entire model layer is `stream_agent_response()` in
  `elia_chat/widgets/chat.py`, which calls `litellm.acompletion(stream=True)`.
  No tools, no function calling, no agent loop.
- No plugin system. Keybinds are fixed. No tool-call rendering.
- Depends on `litellm` (the package CrewAI's docs flag as quarantined on
  PyPI) and pins `textual[syntax]==0.79.1`.
- Effectively unmaintained: last release 1.10.0 in September 2024.

What it proves: Textual can look great, and its pieces are Apache-2.0.
Worth stealing: the theme system (nine built-in themes plus custom YAML),
chatbox message styling with selection mode and configurable code theme,
the typing indicator, the token-analysis widget, and the home chat-list
polish. Not worth taking: header chrome, chat-list-first flow, SQLite
conversation model, fixed keybinds, LiteLLM.

## Elia vs PI design (short form)

| Axis | PI (Plan 010 shape) | Elia |
| --- | --- | --- |
| Chrome | None, scrollback is the screen | Header, chat header, home list |
| Input | Real editor, enter submits, shift+enter newline | TextArea, ctrl+j submits, enter newline |
| Status | One-line footer: model, context %, usage, hints | App chrome + token widget |
| Tool output | Rendered in the flow | No tool concept |
| Startup | One dim line | Welcome screen |
| Themes | Semantic colors | Rich YAML theme system |

Plan 010 phases A-D already implement the PI shape: no header, one-line
StatusBar with spinner and context meter, welcome line cleared on first
submit, Ctrl+C cancels instead of quitting, shift+enter newline, streaming
preview area, `^r` resume, `^n` new, `^h` run history.

## gptme spike (owner decision: first)

Why first: Python, explicit DeepSeek support, plugins are Python packages
with tools/hooks/commands, and it has a server API. The open question is
whether its terminal UI and plugin seam can host Weaver's loop without a
full fork.

Spike location: `spikes/001-gptme-tui/` (throwaway, verdict recorded there).

Result: INVALIDATED. The TUI is a plain `User:` / `Assistant:` REPL with
dim status lines, no chrome, no themed panes. The server API needs an
extra `flask` install, and the default tool set does not expose a clean
library seam. Python fit alone did not outweigh the look.

## What that leaves

With gptme out, the realistic paths are:

1. OpenCode as the shell, Weaver as custom tools or an MCP server
   behind it. Prettiest ready-made option, DeepSeek confirmed by owner,
   reverse layering.
2. Fork Elia and swap its LiteLLM seam for Weaver's layers. Python and
   pretty, but stale (Sept 2024), pinned old Textual, no tool rendering.
3. Keep the Plan 010 Textual TUI and port Elia's polish (themes, message
   styling, typing indicator, token widget) into the PI-shaped layout.

The owner gates which one gets spiked next.

## Links to see the UIs (verified 2026-07-31)

- gptme: https://gptme.org/ (screencasts), https://gptme.org/docs/examples.html (screenshots), https://github.com/gptme/gptme
- OpenCode: https://opencode.ai/ (TUI screenshot on intro), https://opencode.ai/docs/tui/, https://github.com/anomalyco/opencode
- Elia: https://elia.chat/, https://github.com/darrenburns/elia (screenshot collage in README)
- Codex CLI: https://github.com/openai/codex (TUI screenshots in README)
- Aider: https://aider.chat/
- PI: https://github.com/earendil-works/pi, npm package page https://www.npmjs.com/package/@earendil-works/pi-tui
- OpenRouter agent TUI skill: https://github.com/OpenRouterTeam/skills/tree/main/skills/create-agent-tui

## Open decisions

- gptme: decided, rejected on looks.
- Which path gets spiked next: OpenCode reverse layering, Elia fork, or
  Elia polish ported into the existing Textual TUI.
- Whether reverse layering with OpenCode (Weaver as MCP server or custom
  tools) becomes
  a real option later, now that DeepSeek is confirmed working there.
- Whether the Elia polish list (themes, typing indicator, token widget)
  becomes Plan 010 UI sharpening phases.

The owner gates all of these.
