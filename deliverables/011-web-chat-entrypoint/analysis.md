# Analysis: ChatGPT appraisal to Weaver behaviour

## Status

Complete. Gate 1 observations were accepted on 2026-08-02. Weaver's desktop
and phone implementation states were inspected after Gate 2.

## Observation matrix

| Checked date | Viewport | Account tier | State | Observation | Proven? |
| --- | --- | --- | --- | --- | --- |
| 2026-08-02 | desktop capture and live extraction | ChatGPT Plus | Signed-in chat states | Centred 768 px conversation column, capsule composer, right-aligned owner bubble, bare assistant text, dark measured palette | Yes |
| 2026-08-02 | desktop capture and live extraction | ChatGPT Plus | Sidebar, menus, settings | Useful reference for later product work, larger than the Plan 011 proof | Yes, deferred |
| 2026-08-02 | below 768 px | ChatGPT Plus | Responsive collapse | The 52 px rail was measured; the remaining collapse was only partly proven | Partial |
| 2026-08-02 | 1440 x 900 | Weaver fake mode | Implemented browser proof | Centred 768 px column, visible composer, transcript, New chat, and chat picker remained usable | Yes |
| 2026-08-02 | 390 x 844 | Weaver fake mode | Implemented browser proof | The single column and composer remained usable without a product sidebar | Yes |

## Decision table

| Observed behaviour | Adopt in Plan 011 | Defer to Plan 013 | Reject | Reason |
| --- | --- | --- | --- | --- |
| Centred conversation column and dark palette | Yes | No | No | Smallest useful browser proof |
| Capsule composer, owner bubble, bare Weaver reply | Yes | No | No | Clear turn separation without heavy chrome |
| Local Copy action | Yes | No | No | Browser-only action, no API or model work |
| Sidebar and collapsed rail | No | Yes | No | Plan 013 owns the broader responsive interface |
| Regenerate, settings, Markdown, voice, model selector | No | Yes | No | These add product capability beyond the proof |
| Hosted multi-owner behaviour, CDN, CORS, third-party assets | No | No | Yes | Conflicts with the local single-owner privacy boundary |
| OpenAI trademarks, logos, icons, and brand assets in Weaver | No | No | Yes | Weaver keeps its own product identity |
| Observed ordinary UI text, layout, spacing, and palette | Yes | No | No | Explicitly permitted by the owner on 2026-08-03 |

Authenticated screenshots, personal sidebar titles, credentials, raw captures,
and raw model reasoning remain private. The owner permits the research record
to name ChatGPT and include observed ordinary UI text and measured styles.
