# Learning Note: Responsive interface and installable PWA

## Gate status

**Unadmitted. Owner confirmation required before implementation.**

The scope of this plan is the behaviour explicitly deferred from Plan 011
in `deliverables/011-web-chat-entrypoint/decision.md` (2026-08-02) and
the design reference's adopt/skip list. The plan file records the full
deferral list; this note keeps the learning-gate facts that will need
owner confirmation before admission.

## What Plan 011 deferred here (source of truth)

- The sidebar: 260 px wide (dev-measured; the 250 px figure was a
  screenshot estimate) with its chrome — Library, Projects, Scheduled,
  Plugins, More, account footer — and the 52 px collapsed rail.
- Regenerate and broader message actions (regenerate is a new
  send/cancel path on the same conversation under Weaver's cooperative
  cancellation contract, never a fake resume).
- Settings modal with local-only rows: General, Appearance,
  Personalization, Storage, Safety. Hosted-service rows (Plugins,
  Billing, Usage, Cloud browser, Parental controls, Trusted contact) are
  explicitly excluded.
- Markdown rendering of assistant replies, client-side, preserving the
  `textContent` rendering boundary (no innerHTML from model text without
  a sanitizer decision at the learning gate).
- Responsive collapse below 768 px: Plan 011 only confirmed the 52 px
  rail; the phone-width layout and breakpoints are designed and proven
  here.
- PWA installation: manifest, service worker scope, installability proof
  on this machine, and a concrete-PWA-limitation verdict before any
  native Android/iOS work.
- The framework decision (vanilla HTML/CSS/JS vs React/Vite) — made at
  this plan's learning gate with the owner; no Node build step enters
  the repo without it.

## Open questions carried from the design reference

- Font: system stack (recommended, matching Plan 011) vs bundling the
  Circle-style webfont.
- `Worked for Ns` status line under long replies: adopt from run
  receipts as a quiet status line or drop.
- Voice, the intelligence selector, dictation: recorded as deferred in
  decision.md; the design reference's skip list argues for skipping —
  default is skip, decided at the learning gate.

## Hard rules carried from Plan 011

- Still a local single-owner app: no hosted multi-owner service, no CDN,
  no CORS, no third-party assets.
- Design language is the ChatGPT reference; this plan adds no new
  capability beyond the backend HTTP + SSE API from Plan 011.
- Private sources stay private: nothing from novels, chats, credentials,
  receipts, or raw model reasoning in any deliverable.
