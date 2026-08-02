# Spike 001: gptme as a Weaver TUI base

> Status: done (2026-07-31). Owner decision after seeing it live: rejected
> on visual grounds. Verdict below.

## Question

Given Weaver's existing agent core, conversation loop, and model layer,
can gptme's terminal UI and plugin seam host Weaver without a full fork?

## Evidence

Installed gptme 0.32.1 in a throwaway venv at `/tmp/gptme-spike-venv`.

What worked:

- Installs cleanly on Python 3.12, `gptme --version` reports 0.32.1.
- Rich toolset out of the box: shell, ipython, read, save, patch, mcp,
  subagent, chats, todo, vision, and more. `/plugin` management exists.
- DeepSeek references present in the installed package.
- Session logs are JSONL under `~/.local/share/gptme/logs/<session>`.
- Config at `~/.config/gptme/config.toml`, model and provider driven by env
  (`MODEL`, `OPENAI_API_KEY`).
- Server API exists but needs the `flask` extra (`import flask` fails on a
  base install).

What didn't:

- The TUI is a plain REPL: `User:` prompt line, `Assistant:` label, dim
  status lines. No chrome, no chat list, no themed panes. Owner verdict:
  "ugly and just looks like generic user and assistant output".
- Inline editing needs terminal cursor position requests; our PTY lacked
  CPR and gptme degraded with a warning.
- A model call failure (dummy key) prints a wall of dim error text and the
  process exits with code 1. No graceful in-app error screen.
- `get_tools()` returned an empty list on a bare import, so the default
  tool set loads lazily through the CLI path, not a clean library seam.

## Verdict

INVALIDATED (for Weaver's UI goal).

### What worked

- Python install, config, JSONL session logs, DeepSeek support present.

### What didn't

- The interface feel. It reads like a debug REPL, not a product TUI.
- The plugin seam is CLI-coupled, not a drop-in library API.

### Surprises

- The server API needs an extra install (`flask`) that the base package
  does not pull in.

### Recommendation for the real build

Do not build Weaver's TUI on gptme. If Python layering stays a hard
requirement, the pretty options are an Elia fork or porting Elia's theme
and message styling into the existing Plan 010 Textual TUI. OpenCode
remains the ready-made pretty option (DeepSeek confirmed by owner) with
reverse layering: Weaver becomes custom tools or an MCP/ACP server behind
its TUI.
