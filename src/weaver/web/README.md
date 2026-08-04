# Weaver web frontend

The chat surface is a **native web-component library** (vanilla HTML/CSS/JS,
no framework, no build step) so it can be reused and re-themed — HaxJobs
mounts the same elements Weaver uses.

## Components

All under `static/components/`, served same-origin by the FastAPI app.

| Element | Role |
| --- | --- |
| `<weaver-chat>` | Root: owns conversation state, transcript, SSE streaming, cooperative cancel, regenerate. Mount this. |
| `<weaver-sidebar>` | 260px conversation chrome + 52px collapsed rail + <768px overlay drawer. |
| `<weaver-composer>` | Capsule textarea; Enter submits, Shift+Enter newline, send/stop swap. |
| `<weaver-settings>` | Local-only settings modal (General/Appearance/Storage/Safety). Esc closes. |
| `weaver-markdown.js` | Pure parse-to-nodes Markdown renderer. Never innerHTML with model text. |

## Mounting

```html
<weaver-chat model-label="fake" privacy-label="Local only"></weaver-chat>
<script type="module" src="/static/components/weaver-chat.js"></script>
```

The element talks to the documented HTTP + SSE API (`/api/conversations`,
`/api/conversations/{id}/turns`, `/api/conversations/{id}/cancel`) on the
same origin. It needs those routes available; it does not need any other
Weaver code.

## Re-theming for HaxJobs

Every color, radius, and width is a CSS custom property in `theme.css`.
Set them on the host element or `:root`:

```css
weaver-chat {
  --accent: #d00;          /* HaxJobs accent */
  --bg-1: #0b0b0e;         /* canvas */
  --sidebar-w: 300px;      /* wider sidebar */
}
```

The theme tokens are a tested contract (`tests/web_js/theme.test.mjs`):
renaming or dropping a token fails CI.

## Rendering boundary

Model text is **never** inserted as HTML. Replies go through
`renderMarkdown` (parse-to-nodes: DOM built with `createElement` +
`textContent`), user text goes through `textContent`. A malicious model
reply cannot inject markup or scripts. No sanitizer dependency is needed
or wanted — there is nothing to sanitize.

## PWA

- `manifest.webmanifest` + `icon.svg` (Weaver mark) + `sw.js`.
- The service worker is served at **`/sw.js`** (root scope) — do not move
  it under `/static/`, or it stops controlling the shell and the app no
  longer loads offline.
- Shell assets are cached; `/api/*` is never cached (network only).
- Proven: 0 Chrome installability errors; offline reload works with the
  server stopped.

## Testing

- `node --test 'tests/web_js/*.test.mjs'` — pure JS logic (markdown parser,
  theme token contract), zero dependencies.
- DOM behavior is proven live against a real server with headless Chromium
  (see `tests/test_web.py` for the API contract and `scripts/` for the
  live-proof recipe used during Plan 013).

## CSP

`style-src 'self' 'unsafe-inline'` is required: shadow-DOM components style
themselves with inline `<style>`. Scripts stay `'self'` — the service
worker registers from the module, not an inline script.
