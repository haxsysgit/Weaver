# Learning Note: Responsive interface and installable PWA

## Gate status

**Confirmed by owner 2026-08-04. Admitted for implementation.**

All Plan 011 deferrals, the design-reference open questions, and the
framework decision were resolved with the owner at this gate. Details
below.

## Framework decision: vanilla Web Components (owner-confirmed 2026-08-04)

- **Decision:** vanilla HTML/CSS/JS, built as native **Web Components**
  (custom elements: `<weaver-chat>`, `<weaver-sidebar>`, etc.). No React,
  no Vue, no shadcn, no Node build step.
- **Why the owner wants widgets:** the chat UI will be reused for HaxJobs —
  copy Weaver's UI, edit and extend it, never recreate a chat UI.
- **Why Web Components:** the browser's native component standard. A
  `<weaver-chat>` element works in any page and any framework (including a
  future React app) without a wrapper. Framework components (React/Vue)
  do not cross framework boundaries, so the reuse goal is natively served
  by web components.
- **Why not React/Vue/shadcn (decision record):** the frontend is a thin
  consumer of the documented HTTP+SSE API (~6 components of state, no
  framework payoff); a Node build step adds a toolchain and version churn
  for a local single-owner app with no CDN/third-party assets; shadcn is
  copy-paste source on Radix + Tailwind — heavy third-party surface for
  buttons and a textarea; and framework components can't be dropped into
  HaxJobs if it chooses a different framework.
- **Open door:** if a future plan grows heavy client state (dashboard,
  charts, collaboration) or HaxJobs becomes a large product, React can be
  adopted then — web components embed inside React with no rewrite.
- **Scope of the component library:** the chat surface splits into
  reusable custom elements so HaxJobs can mount `<weaver-chat>` and
  theme it via CSS custom properties and attributes.

## Theme decision: Shadow Slave dark-fantasy aesthetic (owner-directed 2026-08-04)

Owner: "i want you to see the theme of shadow slave and make it that way,
buttons, theme and other stuff even bg colors, i dont want a generic chat
app like chatgpt. theme with element of shadows, fantasy, scary stuff, or
find the description of weaver, or weaver fan arts in reddit."

Research (wiki pages quoting the novel): **Weaver**, the Demon of Fate — a
tall nebulous figure in a dark tattered mantle, a fearsome black lacquered
wood mask with vicious fangs and twisting horns, eight nimble arms (one
porcelain-crafted), a voice "like a thousand hopeless prayers"; spiders and
webs are sacred to his followers; strings of fate connect all beings.
**Shadow God** — the half-forgotten god of peace, death, solace, and
mysteries; shadows are his essence; inseparable from his domain.

Design language:
- **Palette:** layered near-blacks (Shadow Realm depth, not flat black),
  bone-white and pale-silver text (the porcelain arm / moonlight), a
  blood-crimson accent (Weaver's eye / the Spell's crimson) for the send
  button, active states, and focus rings, with pale-silver as the
  secondary accent (strings of fate). Hairlines in dark obsidian grey.
- **Motifs:** subtle spider-web / thread-of-fate textures on the sidebar
  and background; mask-inspired mark for the app logo/avatar; a "weave"
  line in the footer.
- **Personality hook (future):** the assistant's future personality plan
  (owner note, point 4) aligns with this theme — the "thousand hopeless
  prayers" voice, fate-weaver persona. Not built now, only the theme.

## Other gate decisions (owner-confirmed)

- **Font:** system font stack (matching Plan 011). No bundled webfont.
- **"Worked for Ns" status line:** dropped (no real timings yet; add as a
  one-liner later if wanted).
- **Voice, intelligence selector, dictation:** skipped. Confirmed; the
  model is picked once, the context meter lives in a status line.
- **Markdown rendering:** parse-to-nodes (build DOM elements via
  createElement/textContent from a client-side Markdown parser). No
  sanitizer dependency — with parse-to-nodes there is nothing to
  sanitize; model text can never be interpreted as HTML.
- **Regenerate:** real new send/cancel on the same conversation under
  Weaver's cooperative cancellation contract, never a fake resume.

## Hard rules carried from Plan 011

- Still a local single-owner app: no hosted multi-owner service, no CDN,
  no CORS, no third-party assets.
- Backend HTTP + SSE API from Plan 011 is consumed as-is unless a
  plan-level change is admitted.
- Private sources stay private: nothing from novels, chats, credentials,
  receipts, or raw model reasoning in any deliverable.
