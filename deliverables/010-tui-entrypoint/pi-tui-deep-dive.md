# pi's custom TypeScript TUI: how it works, and what to copy

Deep dive into `@earendil-works/pi-tui` 0.83.0 (the engine pi 0.83.0
ships). Answer to the first question: **none of the six tools analyzed
uses Textual.** pi builds its own TUI in TypeScript, codex uses Rust
`ratatui`, Claude Code uses Ink/React, hermes uses Python
`prompt_toolkit`, opencode uses Go Charm. Textual is a Python framework
nobody else in that set picked — Weaver will still use it (it is the
right Python choice), but pi's engine is the design reference for how a
chat TUI should *feel*.

## The one-file core: `tui.js` (1411 lines, "Minimal TUI implementation with differential rendering")

The entire engine is four files: `tui.js` (component tree + render
loop), `terminal.js` (raw mode + keyboard protocol), `keys.js` (key
decoding), `stdin-buffer.js` (input chunking). No framework, no
dependency graph. That is why it is fast.

### The rendering loop — the "smooth" secret

1. **Everything is a function: `render(width) -> string[]`.** A
   component returns an array of plain lines with ANSI codes. No
   widget DOM, no reconciliation, no virtual tree. Rendering is
   recomputing strings.

2. **Differential line diff.** On every frame, the engine compares the
   new rendered lines to the previous lines, finds the **first and last
   changed line**, and only writes those. A spinner that changes one
   line writes one line:
   ```js
   // Find first and last changed lines
   for (let i = 0; i < maxLines; i++) {
       if (oldLine !== newLine) { firstChanged = i; lastChanged = i; }
   }
   ```
   This is the flicker killer. Textual does the same via its own diff,
   but pi's is visible in one loop.

3. **Synchronized output.** Every update is wrapped in the terminal's
   sync escape codes so the terminal buffers the whole frame and paints
   it atomically (no partial frames = no tearing):
   ```js
   buffer = "\x1b[?2026h"; // Begin synchronized output
   ...write changed lines...
   buffer += "\x1b[?2026l"; // End synchronized output
   ```

4. **Render throttling at 60fps.** `MIN_RENDER_INTERVAL_MS = 16`.
   `requestRender()` coalesces: if a render is already scheduled, new
   requests just set a flag. Spinners at 120hz input still paint at 60hz
   max.

5. **Full redraw only on: first render, width change, height change,
   content shrinking below the working area.** Everything else is a
   partial write. Width change forces full clear because wrapping
   changes; height change re-aligns the viewport.

6. **Scrollback is the history.** The engine tracks `maxLinesRendered`
   and lets content grow; when it shrinks it clears empty rows. It
   never owns a virtualized viewport the way Textual does — the
   terminal's own scrollback carries history, and `previousViewportTop`
   tracks where the cursor is relative to it. Resize keeps the viewport
   aligned.

7. **Cursor is a first-class output.** Components emit a zero-width
   marker (`CURSOR_MARKER = "\x1b_pi:c\x07"`) where the cursor should
   be; the engine strips it and positions the hardware cursor there.
   The fake cursor (inverted char) is rendered by the editor itself.
   This gives IME positioning without a widget system.

### The input pipeline — the "responsive" secret

1. **Raw mode + bracketed paste.** `setRawMode(true)`, `\x1b[?2004h`
   for paste wrapping, SIGWINCH refresh on start.

2. **Kitty keyboard protocol with graceful fallback.**
   `queryAndEnableKittyProtocol()` asks the terminal for disambiguated
   key codes (flags 1|2|4). If the terminal answers, pi gets exact
   `shift+enter` vs `enter`, `ctrl+i` vs `tab` (traditionally
   indistinguishable). If not, it falls back to `modifyOtherKeys`.
   This is why pi's keybindings *feel* exact where other TUIs guess.

3. **StdinBuffer: split batched input into single sequences.** The
   terminal delivers a chunk of bytes; the buffer splits it into
   individual escape sequences with a 10ms timeout, so components see
   one keypress per event — even when the user types fast or pastes.
   Paste is re-wrapped in bracketed markers and handed to the editor
   whole.

4. **Every keypress reaches the focused component, including Ctrl+C.**
   The engine explicitly does NOT quit on Ctrl+C; the component decides.
   Editor → clear, app → interrupt. Escape is the interrupt key.

### The editor — the "clean" secret

`editor.js` (87KB) is a real multi-line editor, not an input field:

- **Word wrapping at grapheme boundaries** via `Intl.Segmenter` —
  emoji, CJK, and combining chars wrap correctly.
- **Max visible lines = 30% of terminal height** (min 5). The editor
  scrolls internally with a scroll indicator in its border.
- **Full emacs-style keybinding set** — word jumps, kill ring
  (yank/yank-pop), undo stack, delete-to-line-start/end, jump-to-char,
  all mapped through a `keybindings.json` config (`tui.editor.*`
  ids). shift+enter = newline, enter = submit.
- **Tab completion with a select-list overlay** (slash commands,
  paths) — an in-editor autocomplete that pops up and down.
- **Undo stack + kill ring as real data structures** (`undo-stack.js`
  683B, `kill-ring.js` 1.4KB — tiny and specific).

### Overlays

`showOverlay(component, options)` renders a modal on top of the base
content without clearing it, with anchor (9 positions), percentage or
absolute sizing, margins, and responsive `visible(width, height)`.
Focus is tracked per overlay with a pre-focus restore. Model selector,
session tree, autocomplete — all overlays over the scrollback, never
destroying it.

### Theming

Semantic color names (`theme.fg("accent", ...)`, `mdHeading`,
`toolOutput`, `syntax*`) resolved through theme JSON files. Components
re-render on `invalidate()` after a theme switch — no stale baked
colors. The scrollback keeps its colors because lines are plain strings
with ANSI codes.

## Why it feels "fresh, smooth, clean"

1. **Fresh** — no chrome: the chat is the whole screen, state lives in
   one footer line, transient UI (selectors, autocomplete) floats as
   overlays over the scrollback instead of owning panes.
2. **Smooth** — 60fps throttled renders, line-level diffs, synchronized
   output, exact key decoding. No flicker, no tearing, no dropped
   keys.
3. **Clean** — every component is a pure `render(width) -> lines`
   function. There is nowhere to hide complexity, so the layout stays
   simple. The editor is real (undo, kill ring, word wrap) so you never
   fight it.

## What this means for Weaver's Textual TUI

Textual gives us the same primitives as pi's engine but as a Python
widget library. The mapping:

| pi mechanism | Textual equivalent |
| --- | --- |
| differential line diff | Textual's internal diff (automatic) |
| sync output `\x1b[?2026h/l` | Textual does this on supported terminals |
| 60fps throttle | Textual's render scheduling |
| `render(width) -> string[]` components | `Widget.render()` |
| fake cursor + marker | Textual cursor/blinking |
| kitty protocol keybindings | Textual `Binding` with `key="shift+enter"` — Textual's key parser also handles ctrl/alt/shift disambiguation |
| bracketed paste | Textual `Input.Paste` / paste events |
| scrollback-as-history | Textual `RichLog` (virtualized — the one real difference; history is in the widget, not the terminal scrollback) |
| overlays | Textual `Screen` stack / `ModalScreen` |

The things to deliberately copy from pi in plan 010:

1. **The footer state bar, one line**: mode · model · context % ·
   hints. pi and codex and claude all converged on it.
2. **Ctrl+C never quits the app** — it clears the input / interrupts
   the turn. Escape = interrupt. Ctrl+D exits when input is empty.
   Plan 010 already pins Ctrl+C to cancel.
3. **Transient startup card** that disappears after the first message
   (codex-style), not persistent chrome.
4. **shift+enter = newline, enter = submit** on the input widget.
5. **Real editor affordances early**: Textual's `Input` is single-line;
   plan 010 should use a multi-line capable widget or a minimal custom
   editor with undo — the "clean" feel dies the moment the user can't
   edit their message.
6. **Context meter fed by `ContextSnapshot`** (plan 009) — codex
   `Context 100% left`, hermes `0/1M` meter. Weaver already has the
   data.
7. **Bracketed paste from the start** — pasting a 100-line packet must
   work and not trigger submit.

## What NOT to copy from pi

- The 160-component component library (pi needs selectors for
  everything — sessions, models, themes, extensions). Weaver's chat
  TUI needs a handful of widgets.
- The full keybinding config file system — overkill for a chat window;
  hardcode the sane bindings, add config when users ask.
- Writing the engine from scratch. pi had to; Weaver doesn't — Textual
  already provides the diff/sync/key-decode layer, which is the hard
  part.

## Sources

- `@earendil-works/pi-tui` 0.83.0 tarball from npm registry, unpacked:
  `tui.js`, `terminal.js`, `keys.js`, `stdin-buffer.js`,
  `components/editor.js`, `components/input.js`, `utils.js`,
  `kill-ring.js`, `undo-stack.js`.
- pi's `docs/tui.md` and `docs/keybindings.md` (installed package).
