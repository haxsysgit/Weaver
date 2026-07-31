# TUI Landscape Analysis: pi, Codex, Claude Code, Hermes, opencode, Gemini

Analysis date: 2026-07-31. Method: live terminal captures of every tool
installed on this machine, plus source inspection where available. This
feeds Plan 010's learning gate and the "clean TUI" design for Weaver.

## How the analysis was done

Each tool was run in a pty (`script`, 100x25), fed `hi`, and the final
screen was replayed from ANSI with `pyte`. Framework claims were verified
from source or binary strings, not marketing pages.

| Tool | Version | Framework (verified) | UI style |
| --- | --- | --- | --- |
| pi | 0.83.0 | Custom TypeScript TUI (`@earendil-works/pi-tui`), no widget framework | Scrollback chat + editor at bottom |
| OpenAI Codex | 0.145.0 | Rust, `ratatui` | Boxed startup card + suggestion list |
| Claude Code | 2.1.196 | Ink/React (bundled ELF, `ink` strings) | Welcome card + tips, `❯` input |
| Hermes Agent | 0.17.0 | Python `prompt_toolkit` + Electron desktop app | ASCII banner + side panels |
| opencode | 1.17.11 | Go, Charm (bubbletea/bubbles/lipgloss) | Logo header + session switcher |
| Gemini CLI | current | boxed selector dialogs (trust, auth) | Dialog-driven, box-drawing |

## What each one actually shows

### pi — the reference for what Weaver is becoming

Captured screen (abridged):

```
 hi

 The user just said "hi"...

 Hi! What are we working on today?

 ────────────────────────────────────────────────────
 /tmp
 ↑26k ↓63 R1.5k CH5.7% $0.004 2.7%/1.0M (auto)   (deepseek) deepseek-v4-flash • max
 multimodal-proxy: fallback → GPT-5.6 Sol [openai-codex] | video: xai/grok-4.3 [+tool] ○ 🐴 ponyta...
```

Design decisions worth stealing:

- **Full scrollback chat.** The conversation is one continuous stream; the
  terminal scrollback is the history. No virtualized panes to fight.
- **Editor at the bottom, not a one-line Input.** Multi-line editor with a
  full emacs-style keybinding set (word jumps, kill ring, undo, yank,
  external editor via `ctrl+g`), all overridable via `keybindings.json`.
  `shift+enter` = newline, `enter` = submit.
- **Status line carries the state.** Model, token usage, cost, thinking
  level, working indicator — in the footer, not in the chat stream.
- **Theme = semantic color names** (`theme.fg("success", ...)`, mdHeading,
  toolOutput, syntax*), so components re-theme by rebuilding on
  `invalidate()`.
- **Overlays** (model selector, session tree) render on top without
  clearing the scrollback; anchor + margin + responsive visibility.
- **Working indicator** while streaming; `escape` = interrupt, `ctrl+d` =
  exit when editor empty, `ctrl+c` = clear editor (not quit).
- Session resume line printed at exit.

### OpenAI Codex

Captured screen:

```
 ╭────────────────────────────────────────────────╮
 │ >_ OpenAI Codex (v0.145.0)                     │
 │                                                │
 │ model:     gpt-5.6-sol high   /model to change │
 │ directory: /tmp                                │
 ╰────────────────────────────────────────────────╯

   To get started, describe a task or try one of these commands:

   /init - create an AGENTS.md file...
   /status - show current session configuration
   /permissions - choose what Codex is allowed to do

 › Explain this codebase
 ...
 gpt-5.6-sol high · /tmp · Ready · Context 100% left
```

Steal:

- **Startup card is tiny and honest**: model, directory, nothing else.
- **Empty-prompt suggestions.** Before you type anything, the UI offers
  starter tasks. Goes away as soon as the conversation starts.
- **Footer is the state bar**: `model · cwd · Ready · Context % left`.
  Context usage in the footer — exactly what Weaver's ContextAssembler
  (plan 009) can feed it.
- Slash-command affordances listed while the prompt is empty.

### Claude Code

Captured screen:

```
 ╭─── Claude Code v2.1.196 ────────────────────────╮
 │    Welcome back Hax!        │ Tips for getting  │
 │      ▐▛███▜▌               │ started           │
 │      ▝▜█████▛▘             │ /init ...          │
 │  deepseek-v4-pro · API...  │ What's new         │
 ╰─────────────────────────────────────────────────╯

 ❯ hi
   ⎿  Credit balance too low · Add funds: ...

 ✻ Worked for 1s
 ──────────────────────────────────────────────────
 ❯
 ⏵⏵ bypass permissions on (shift+tab to cycle) · ← for agents
```

Steal:

- **`❯` prompt, footer separator, mode indicators in the footer.** The
  footer is one line: mode, cycling hint, agent toggle. Never more.
- **Inline status under the message** (worked time, error note) instead of
  interleaving log lines into the chat.
- First-run trust dialog before touching the workspace; persisted in
  `~/.claude.json` (`trustedProjects`).
- Asymmetric: big welcome card, tiny persistent chrome.

Avoid:

- Welcome card eats the whole screen on every startup; tips panel is
  marketing noise after day one.

### Hermes Agent

Captured screen:

```
 │ ⠸⣿⣤⡈⠁⢤⣿⠇...             MCP Servers      │
 │  ...ASCII art banner...       computer-use-linux │
 │                                Available Skills  │
 │  deepseek-v4-flash · Nous...  autonomous-ai-ag...│
 │  /tmp                         ...
 │  Session: 20260731_...
 │  75 tools · 606 skills · 3 MCP servers · /help   │
 ╰──────────────────────────────────────────────────╯

 ● hi
 Initializing agent...
 ⚕ deepseek-v4-flash │ 0/1M │ [░░░░░░░░░░] 0% │ 9s │ ⏱ 4s
 ⚕ ❯ msg=interrupt · /queue · /bg · /steer · Ctrl+C cancel
```

Steal:

- **Single status line with a live token meter** (`0/1M │ [░░░░] 0%`) —
  Weaver's ContextAssembler token_count/token_budget maps directly onto
  this.
- **Footer = available commands** so the user never guesses.
- Session summary + `--resume <id>` at exit. Weaver's conversation
  persistence can do the same with its sqlite conversations.

Avoid:

- Full-screen ASCII banner + skills panel dump on every start. It is
  Hermes' identity, but it is the opposite of clean.
- Separate Electron desktop app for the same product = two UIs to
  maintain.

### opencode

Captured screen:

```
      ▣  Build · MiMo V2.5 Free
   █▀▀█ █▀▀█ ... (logo)
   ⬝⬝⬝⬝⬝⬝⬝⬝  esc interrupt  tab agents  ctrl+p commands
   Session   New session - ...
   Continue  opencode -s ses_...
```

Steal:

- **Footer hints with the three keys that matter**: `esc interrupt · tab
  agents · ctrl+p commands`. Everything else is discoverable.
- Session continue line.

### Gemini CLI

Dialog-driven: trust dialog, then auth dialog (radio select, box-drawing).
Nothing to steal beyond "confirm before touching the workspace", which
Claude Code does better. Notable anti-pattern: dialogs block until the
user answers; no scrollback chat at all in the captured flow.

## The common skeleton

Every one of these, despite different frameworks, converged on:

1. **Input at the bottom** with a prompt marker (`❯`, `›`, `●`, `>`).
2. **A footer/status line** carrying model, cwd, mode, context usage, and
   the 2-3 key hints. One line, never more.
3. **Enter submits, shift+enter newline** (pi, claude), **escape/Ctrl+C
   interrupts the turn** (all), **Ctrl+D exits when input is empty** (pi,
   claude).
4. **Context usage shown somewhere live** (codex `Context 100% left`,
   hermes `0/1M` meter). Weaver has this data already via plan 009.
5. **Empty-prompt affordances** (codex suggestions, pi slash commands).
6. **Session resume line at exit** (pi, hermes, opencode).
7. **A trust/confirmation gate before first action** (claude, gemini).

## What "clean" means for Weaver

From the capture evidence, the cleanest UIs (pi, codex, claude) share:

- **Chat is a scrollback stream**, not panes. History lives in the
  terminal, so resizing, scrolling, and copying just work.
- **All state in one footer line.** Model · mode · context % · hints.
- **No permanent chrome.** Welcome/suggestion cards disappear once the
  conversation starts.
- **Interrupt is a first-class key**, never Ctrl+C-kills-the-app.
- **A live context meter** fed by the assembler snapshot.

## What Weaver should NOT copy

- Hermes' banner + panel dump, Claude Code's welcome-card-every-time,
  Gemini's dialog-only flow, opencode's full-screen logo.
- A second UI surface (Electron) while the terminal one is the product.
- Frameworks that fight the scrollback model (virtualized panes).

## Recommendation for Plan 010 (stage 1)

Textual stays (already pinned in plan 010, Python-native, async, same
event loop as `SessionWeave`). The captured evidence refines the widget
set:

- `RichLog` chat history — right choice, matches the scrollback model.
- `Input` becomes a **multi-line editor or Input with shift+enter
  newline**, not a one-line prompt. pi's keybinding model is the target.
- **Footer via Textual's built-in Footer widget**, showing: mode
  (fake/live) · model name · context % from `ContextSnapshot` · hints
  (`^c stop · ^d quit`).
- `Ctrl+C` = cancel the turn (Textual key binding → set cancel event),
  `Ctrl+D` = exit when input empty. Plan 010 already pins Ctrl+C to cancel.
- Startup card (one box: conversation id, mode, "type a message") that
  disappears on first submit — codex-style, not claude-style.
- Exit prints the session resume line (conversation id is already
  persisted in sqlite; `weaver chat --resume <id>` is a later stage).
- Suggestions on empty prompt (first-class in stage 2, stub in stage 1).

### Deliberately deferred (later stages)

- Streaming text deltas (needs the streaming seam — already a plan 010
  STOP condition).
- Markdown rendering of assistant replies.
- Conversation list / resume picker.
- Token meter live updates per turn (snapshot is per-assembly; the meter
  can update per send in stage 1 — cheap win, keep it).
- Full headless TUI integration tests (plan 010 defers; `test_tui_send`
  proves the send path).

## Sources

- pi: `docs/tui.md`, `docs/keybindings.md` in the installed pi package;
  live capture.
- codex: live capture; `ratatui::` symbols in the vendored binary.
- claude code: live capture; `ink`/`react` strings in the bundled ELF.
- hermes: live capture; `agent/display.py` (prompt_toolkit-safe printer),
  `pyproject.toml`, `apps/desktop/` (Electron).
- opencode: live capture; `bubbletea`/`bubbles`/`lipgloss` strings in the
  Go binary.
- gemini: live capture (trust + auth dialogs).
