# Weaver Web Direction: Companion, Not Reader

> Status: product direction confirmed. Plan 011 proved the backend and Plan
> 013 chose React 19, Vite, and TypeScript for the product UI.

## What Weaver is

Weaver is a friend that KNOWS the novel. You discuss the story with Weaver:
who that character was, what happened in chapter 847, what you think about
an arc, whether a theory holds up. Weaver remembers, connects callbacks,
labels speculation, and changes its mind when the evidence says so.

Weaver is not a reader. Users do not read the novel inside Weaver. If they
want to read, Weaver gives them a link. Reading lives outside the product.

## Product rules (owner-confirmed)

1. Public surface: chat, memory, and links. Nothing else.
2. Never serve chapter text from the web app. No reader UI, no text
   exports to users, no offline chapter sync.
3. The private library stays private. The API never exposes
   `novels/` content, receipts, or raw reasoning.
4. Short quotes in conversation are fine at discussion scale. Bulk
   reproduction of the novel is not.
5. Reading links point out to wherever the user reads.

## Why the pivot

The target audience is novel readers, and no novel reader opens a terminal.
Plan 013 retired the old development TUI after the browser backend worked.
So:

- The browser is Weaver's only chat surface.
- Product surfaces in order: web UI, web app, mobile (PWA first, native
  later).
- The agent core, conversation loop, model layer, receipts, and corpus
  tools are UI-agnostic (see `docs/decisions/006-conversation-architecture.md`).
  Only the presentation layer changes.

This also resolves the TUI research: gptme, Elia, and OpenCode were all
answers to the wrong question. None is needed for the product.

## First spike: protocol, not UI (completed by Plan 011)

Goal: prove `SessionWeave` works over the web with streaming and
cooperative cancel. Minimal on purpose.

Scope:

- FastAPI app with one SSE chat endpoint in front of the existing
  `SessionWeave`.
- One chat screen served as static HTML + EventSource. No frontend
  framework, no build step, no stack commitment.
- Fake and live DeepSeek modes, reusing the existing config and rules:
  live default, `--fake` opt-in, no key exits 2 before any call, no
  silent fallback.
- Cancel is a POST that sets the turn's `cancel_event` (Plan 010 §4:
  cooperative only, never `task.cancel()`).
- No auth, one conversation, no corpus exposure, no new persistence.
- Verification: fake-mode stream completes; cancel settles the turn as
  interrupted; existing pytest floor stays green.

Out of scope: real UI, auth, multi-user, memory panels, spoiler-free
mode, hosting.

## UI stack decision

The spike deliberately does not choose one. Options for the real build:

| Stack | Fit | Notes |
| --- | --- | --- |
| FastAPI + Vite React + Tailwind | Recommended | Biggest chat-UI ecosystem, streaming components, PWA path, React Native later for mobile |
| FastAPI + SvelteKit | Light alternative | Smaller bundle, smaller ecosystem |
| FastAPI + Next.js | Heavy | Full framework, more than a chat app needs |
| FastAPI + static HTML/JS | Spike only | Proves the protocol, not the product |
| Textual Web | Not for product | Reuses the TUI in a browser tab, dev preview at best |

Plan 013 now uses FastAPI + Vite React + TypeScript, with plain CSS tokens and
no Tailwind dependency. The responsive PWA is the mobile surface.

## Evaluated agent chat UI options (checked 2026-07-31)

Component kits (embed into our own React app, own the routing, customize):

| Kit | License / activity | Fit for Weaver |
| --- | --- | --- |
| assistant-ui | MIT, 11k stars, active | ChatGPT-style React components, theming, streaming/interruptions/retries, works with any backend, React Native path. Top pick |
| CopilotKit | MIT, 36k stars, active | Prebuilt chat surfaces, generative UI, shared state, human-in-the-loop, AG-UI protocol, Python/FastAPI agent integrations. Pick if HITL and generative UI matter |
| Vercel AI SDK + AI Elements | Apache-2.0 style, 26k stars, active | Official React hooks (`useChat`) + 30+ shadcn components; Pydantic AI/FastAPI integration exists. Lighter and very customizable |
| 21st.dev agent-elements | MIT, young/small | shadcn registry of agent primitives (streaming markdown, tool cards with approval, thinking). Nice pieces, small community |

Full apps (ready-made but they own the backend and loop):

| App | Notes |
| --- | --- |
| Open WebUI | 147k stars, polished, PWA, plugins, RAG, OpenAI-compatible. Heavy platform, Weaver becomes a tool inside it |
| LobeChat | Beautiful, multi-agent, plugin system. Full app, own backend |
| LibreChat | Multi-user team product, MongoDB. Heavy |
| Chainlit | Python chat framework, fast demos, but community-maintained since May 2025 and less customizable than React components |

Weaver-specific fit: our conversation loop and gates stay in Python, so the
frontend only needs to render messages, stream deltas, show tool activity,
and route screens. assistant-ui or AI SDK + agent-elements cover that with
the least ownership. CopilotKit earns its weight if we want agents to render
live React UI or rich HITL approval flows. Full apps are rejected because
they would own the loop and the data model.

## Later owner gates

- Later: auth and multi-user, memory panel design, spoiler-free mode,
  hosting.
