# Weaver web frontend

The public surface is a React 19 + TypeScript chat app built by Vite. FastAPI
owns the HTTP and SSE API; React owns browser state and rendering.

## Shape

Source lives in `frontend/`:

| Area | Job |
| --- | --- |
| `lib/chatApi.ts` | The small backend adapter: conversations, messages, SSE turns, cancel |
| `lib/product.ts` | Product words and local-storage key; HaxJobs replaces this file |
| `hooks/useChatController.ts` | Product-neutral conversation, stream, cancel, and regenerate state |
| `lib/markdown.ts` | Pure Markdown parser; model text never becomes HTML |
| `components/ChatApp.tsx` | Presentation composition around the reusable controller |
| `components/ConversationRail.tsx` | Real conversation picker and mobile drawer |
| `components/Message.tsx` | Owner and Weaver message rendering and actions |
| `components/Composer.tsx` | Enter/Shift+Enter, send/stop, cancellation state |
| `styles/tokens.css` | Shadow Slave palette and shared sizing/motion tokens |
| `styles/app.css` | Responsive Weaver presentation |

The UI has no dead rows for future work. Future source evidence, reader
memory, spoiler position, theories, and visuals can arrive as components
beside the transcript while the chat API adapter and shell stay unchanged.

## HaxJobs reuse

The reusable boundary is ordinary React source, not Weaver's product copy:

1. Copy the components, controller hook, `lib/`, and the two style files.
2. Replace `weaverProduct` with HaxJobs names, labels, and storage key.
3. Replace `createHttpChatApi` only if HaxJobs exposes a different API.
4. Pass a HaxJobs mark component and replace the theme token values.

Conversation state, streaming, cancellation, safe Markdown, responsive
layout, and composer behavior do not know about novels.

## Build and run

```sh
npm install
npm run build
uv run weaver web --fake
```

Vite writes to `src/weaver/web/dist/`. The backend only serves those built
files. It never runs npm or builds assets itself.

For local frontend development, run the backend on port 8000 and then:

```sh
npm run dev
```

Vite proxies `/api` to `http://127.0.0.1:8000`.

## Rendering and privacy

React escapes text by default. Replies go through the pure parser in
`lib/markdown.ts`, which returns typed nodes rendered by React. The app never
uses `dangerouslySetInnerHTML` with model text. Only `http` and `https` links
become anchors.

SQLite stays canonical. Browser storage contains one value: the active
conversation id under `weaver.active-conversation`.

## PWA

The manifest, mark, and service worker live in `frontend/public/`. The worker
discovers and precaches the hashed build assets on first install. Navigation
is network-first so runtime privacy copy stays current, with the cached page as
an offline fallback. Every `/api/` request remains network only. Registration
happens in `main.tsx`, so the strict script policy needs no inline exception.

## Checks

```sh
npm run build
npx vitest run
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
```
