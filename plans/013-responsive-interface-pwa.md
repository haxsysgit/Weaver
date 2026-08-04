# Plan 013: Responsive interface and installable PWA

> **Executor instructions:** Plan 011 must be accepted (final gate) and
> Plan 012 accepted before this plan starts. Every behaviour below was
> explicitly deferred from Plan 011 in
> `deliverables/011-web-chat-entrypoint/decision.md` (2026-08-02) and the
> design reference's adopt/skip list; the details here are taken from
> those records, not invented at admission time.

## Status

- **State:** Admitted 2026-08-04; in implementation
- **Admitted implementation:** Yes — learning gate confirmed by owner 2026-08-04
- **Depends on:** Plan 011 accepted (final gate) and Plan 012 accepted
- **Priority:** P2
- **Effort:** M
- **Risk:** Medium (first responsive + installability work)
- **Learning gate:** `deliverables/013-responsive-interface-pwa/learning.md`
- **Final decision:** pending

## Learning-gate decisions (2026-08-04, owner-confirmed)

- **Framework: vanilla Web Components.** The chat UI is built as native
  custom elements (`<weaver-chat>`, `<weaver-sidebar>`, …) so HaxJobs can
  mount and re-theme the same UI via CSS custom properties. No React/Vue/
  shadcn, no Node build step. React stays an option later without a rewrite.
- **Theme: Shadow Slave dark-fantasy aesthetic.** Layered near-black
  background, bone-white/silver text, blood-crimson accent (Weaver's eye),
  spider-web / thread-of-fate motifs, mask-inspired mark. Not the generic
  ChatGPT look.
- **Font:** system stack. **"Worked for Ns":** dropped. **Voice/
  intelligence selector/dictation:** skipped (future personality plan may
  lean into the Weaver persona).
- **Markdown:** parse-to-nodes (DOM via createElement/textContent), no
  sanitizer dependency.
- **Regenerate:** real send/cancel on the same conversation, never a fake
  resume.

## Outcome

Turn the accepted Plan 011 one-column web chat into the polished
responsive Weaver interface: sidebar with conversation chrome, message
actions, a local settings modal, Markdown rendering of replies, the
responsive collapse below 768 px, and a tested installable PWA. Design
language stays the ChatGPT reference from Plan 011; the framework
decision (vanilla vs React/Vite) is made here, at the learning gate, and
was explicitly deferred out of Plan 011 by the owner on 2026-08-02.

This is still a local single-owner app, not a hosted service. CDN, CORS,
and third-party assets stay forbidden. Native Android and iOS remain
deferred until this plan proves a concrete PWA limitation.

## Deferred from Plan 011 (source of truth)

The following were recorded as Plan 013 deferrals in the Plan 011
decision.md (2026-08-02) and the design reference
(`chatgpt-ui-design-reference.md` section 10):

### In scope (deferred behaviour to build)

- **Sidebar** — the 260 px sidebar (measured; the earlier 250 px was a
  screenshot estimate) with its chrome: Library, Projects, Scheduled,
  Plugins, More, and the account footer; plus the 52 px collapsed rail
  and the collapse/expand toggle.
- **Regenerate and broader message actions** — regenerate (new
  send/cancel path on the same conversation, consistent with Weaver's
  cancellation contract), and the message action row under replies
  beyond the Plan 011 copy button.
- **Settings modal** — local-only rows: General, Appearance,
  Personalization, Storage, Safety. The hosted-service rows (Plugins,
  Billing, Usage, Cloud browser, Parental controls, Trusted contact) are
  explicitly out of scope and never shown.
- **Markdown rendering of replies** — render assistant replies as
  Markdown in the browser; the plain-text `textContent` boundary stays
  for all rendering, Markdown is parsed client-side and rendered into
  text nodes (no innerHTML from model text without a sanitizer decision
  at the learning gate).
- **Responsive collapse below 768 px** — the sub-768 px behaviour was
  only partially measured in Plan 011 (the 52 px rail is confirmed); the
  phone-width layout and breakpoints are designed and proven here.
- **PWA installation** — manifest, service worker scope, installability
  test on this machine; prove or disprove the concrete PWA limitation
  before any native Android/iOS work.
- **Framework decision** — vanilla HTML/CSS/JS (Plan 011 default) or
  React/Vite; decided at the learning gate with the owner, recorded
  there, and only then admitted. No Node build step enters the repo
  without that decision.

### Decisions deferred to this plan (design-reference open questions)

- Font: system stack vs bundling the "Circle"-style webfont (recommended:
  system stack, matching Plan 011).
- The `Worked for Ns` status line under long replies: adopt as a quiet
  status line from run receipts or drop.
- Voice, the intelligence selector, and dictation: the design
  reference's skip list argues for skipping (Weaver picks its model once;
  the meter belongs in a status line), but the decision.md records them
  as deferred here — they are decided at this plan's learning gate,
  default to skip.

### Out of scope (rejected in Plan 011, stays rejected)

- Everything implying a hosted multi-owner service.
- CDN, CORS, or third-party assets.
- Pretending an interrupted turn can resume.
- New capability beyond UI polish; the backend HTTP + SSE API surface
  from Plan 011 is consumed as-is unless a plan-level change is admitted.

## Roadmap position

1. Plan 011: local browser chat proof (one-column).
2. Plan 012: direct-reading baseline.
3. Plan 013: this plan — polished responsive interface and PWA.
4. Plan 014 and later: compiled-memory experiments.

Native Android and iOS remain deferred until Plan 013 proves a concrete
PWA limitation.
