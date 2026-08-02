# ChatGPT UI design reference for Weaver

Source: screenshots of a real signed-in ChatGPT Plus session (dark theme,
desktop Chromium), captured by the owner on 2026-08-02. Six states were
captured: new-chat landing, a long conversation, the composer with text,
the `/` command menu, the sidebar, and the settings modal (the most
detailed capture). Measurements are pixel estimates from the screenshots,
marked `~` where antialiasing shifts edges. Colors are hex approximations
of what the pixels show.

Purpose: this is the design target for Weaver's web chat surface. Copy the
user-facing look, not the capabilities. Where a detail is marked `skip`,
it exists in ChatGPT but has no place in Weaver.

Measurement method: values marked `measured` come from a dev-accurate
browser pass against a signed-in ChatGPT Plus profile (dark theme):
computed styles, bounding rects, CSS custom properties, and the loaded
font stack were extracted live (raw data under
`.weaver/research/chatgpt-ui/`). Values marked `~` are pixel estimates
from screenshots where the dev pass did not measure that element.

---

## 1. Layout skeleton

The whole app is one screen: a fixed left sidebar plus a centered
conversation column on a black canvas. No top app header, no footer bar.

- Viewport (desktop capture): 1912 x 860 px, background `#000000` (measured
  `--main-surface-primary: #000`, dark theme).
- Left sidebar expanded: **260 px wide** (measured `--sidebar-width`), full
  height. Collapsed to a **52 px rail** (measured `--sidebar-rail-width`).
- Main column: **768 px wide, horizontally centered** in the remaining
  space (measured composer rect 768 x 52). At 1440 px wide with the
  expanded sidebar that places the column at x=466, leaving 206 px of
  black on each side of the column after the sidebar.
- The composer is the same 768 px width, pinned at the bottom.
- Vertical rhythm in a conversation: heading, body, action row, then
  ~63 px gap to the next user bubble. User bubble to assistant status
  line: ~44 px. Status line to response body: ~23 px.
- No visible header bar above the conversation. The only top-right
  elements are two icons: share/export and three-dot overflow, ~17 px,
  near-white, sitting directly on the black.

The one-column proof for Weaver: sidebar + centered column + composer.
That's the whole skeleton.

## 2. Sidebar

- Header: **52 px tall** (measured `--header-height`), brand text
  `"ChatGPT Plus"` ~16 px semibold near-white `#F2F2F2`, left edge ~8 px.
  Search icon ~17 px at right, then a sidebar-toggle icon beside it.
- Navigation rows start ~52 px down, **36 px pitch** (measured row rects
  245 x 36), icons 16-18 px `#D9D9D9`, labels ~14 px `#F2F2F2` starting
  at x~33. Rows: New chat, Library, Projects, Scheduled, Plugins, More.
- Selected row: background `#202020` in light / near-black in dark,
  radius ~10 px, full sidebar width. No border.
- Account footer: ~67 px tall, 1 px top border `#ffffff0d` (measured
  `--border-light` = white at 5% alpha). Orange circular avatar ~24 px
  diameter, fill `~#E66D00`, white initials ~10 px. Name ~14 px white,
  plan label `"Plus"` ~12 px light gray beneath. A small outlined
  utility icon at the far right.
- Nav/content inset: ~7-9 px from the left edge.

## 3. Composer

### Empty state (measured from the dark dev pass, 768 x 52 px)

- Fully rounded capsule, **corner radius 28 px** (measured), background
  `#212121` (measured `--composer-surface-primary`), padding 5 px 8 px
  (measured), no border, hairline divider color `--border-light`
  `#ffffff0d`.
- Left: **plus icon / "Add files and more" button 36 x 36 px** (measured)
  at the left edge. Placeholder `"Ask ChatGPT"` 16 px, color ~`#B8B8B8`,
  ~17 px after the plus icon.
- Right side, in order (measured rects at 1440 wide, composer x=466):
  - Model selector `"High"` **77 x 36 px** at x=1064 (text 16 px +
    chevron; reads `"5.5 High"` in the owner's capture, model name + reason
    level).
  - Microphone / dictation **36 x 36 px** at x=1146.
  - Voice-mode **white circular button 36 px diameter** at x=1190, fill
    `#F4F4F4`, dark waveform glyph; this slot becomes the send button
    with an upward arrow when text is present.
- Under the composer, centered, 12 px `#9A9A9A`:
  `"ChatGPT can make mistakes. Check important info."`

### Focused with text (composer capture)

- Same capsule. A white text caret sits where typing begins, right after
  the plus icon. No visual state change beyond the caret; the composer
  does not grow for short input in these captures.

### What happens on send (from the conversation capture)

- The composer keeps its shape and position; the sent text appears as a
  user bubble, right-aligned in the column. The assistant reply lands
  below without a bubble. A status line `"Worked for 1m 58s"` with a
  right chevron appears above long replies.

## 4. Conversation surface

- **User messages**: right-aligned bubble, background measured
  `--default-theme-user-msg-bg: #323232d9` (dark) / `#e9e9e980` (light),
  radius ~19-20 px, no border, padding ~16 px left/right, ~13 px top,
  ~12 px bottom. Text ~15-16 px white. Filenames inside render as blue
  links `--link: #7ab7ff` (dark) with a small blue document icon.
- **Assistant messages**: left-aligned directly on the black, no bubble,
  no border. Text 16 px regular `#F2F2F2` (measured `--text-primary`
  `#fff`), **line height 26 px**, paragraph gap ~17-20 px. Headings
  inside replies 16 px bold.
- **Action row** under each assistant reply: copy, share/export,
  regenerate, overflow icons, ~16-18 px, color measured `--text-tertiary`
  `#afafaf`, center spacing ~32 px. A `"Sources"` label with a book icon
  13 px can follow.
- **File chips**: uploaded-file chip is a pill, background `#242424`,
  radius ~11-12 px, ~23 px tall, small document icon + name ~10-11 px.
- **Document card** (a linked result): 480 x 62 px, background `#202020`,
  1 px border `#424242`, radius ~15-16 px, left padding ~20 px, blue
  document icon ~18 px, title 14 px white, subtitle `"Document"` 12 px
  `#B5B5B5` stacked with a few px between.
- **Scroll indicator**: a stack of short horizontal gray marks at the far
  right; the current-position mark is white.

## 5. The `/` command menu (measured from the dark dev pass)

Container: **768 px wide x 372 px tall**, aligned under the composer,
background `#212121`, **corner radius 16 px** (measured), padding 6 px 0
(measured), z-50 popover with a layered shadow (measured):

```
box-shadow:
  rgba(0,0,0,0.32) 0px 8px 16px 0px,   /* drop */
  rgba(255,255,255,0.2) 0px 0px 1px 0px inset,  /* inner top hairline */
  rgba(0,0,0,0.62) 0px 0px 1px 0px     /* outer hairline */
```

Each row: a small white icon left, a primary label (white, 14-16 px),
a one-line description beneath it in `--text-tertiary`, and a
right-aligned chevron for submenu rows. First row is selected with a
lighter hover fill.

Visible rows, in order (from the live extraction):

1. Add photos & files — "Upload from computer"
2. Dictate — "Convert speech to text"
3. Feedback — "Share feedback about ChatGPT"
4. Model — "Latest" (chevron)
5. Move to project — "Select a project for this chat" (chevron)
6. Personalization — "Set your style and custom instructions"
7. Intelligence — "High" (chevron)
8. Search chats — "Find and open another chat"
9. Settings — "Open app settings"
10. Temporary chat — "Start a chat without memory or history"

## 6. Settings modal (measured from the dark dev pass)

A centered dialog over a dimmed backdrop, **680 x 600 px, radius 16 px**
(measured), background `#212121` (measured), same popover shadow as the
slash menu, split vertically: left nav ~180 px, right panel ~501 px,
1 px divider between them.

### Left navigation (background `#202020`)

- Close button: 36 x 36 px, background `#333333`, radius ~9 px, centered
  white x, ~10 px inset from the top-left corner.
- Nav rows: ~36 px high, ~10 px inset. Icons ~16-18 px at x~631, labels
  14 px starting x~647. No row borders.
- Selected row: background `#333333`, radius ~10 px.
- Items: General, Notifications, Personalization, Plugins, Voice,
  Billing, Usage, Data controls, Cloud browser, Storage, Safety,
  Security and login, Parental controls, Trusted contact, Account.

### Main panel (background `#212121`)

- Heading `"General"` 18 px (measured; section headings render 18 px,
  page headings 24 px), 1 px dark-gray rule beneath.
- **Security card**: 468 x 186 px, background `#000000`, radius ~12 px,
  no border. Shield icon, dismiss x at the right edge, heading
  `"Secure your account"` 14 px medium, body 14 px with ~21-22 px line
  height. Action button `"Set up MFA"`: 97 x 37 px, black fill, 1 px
  dark-gray outline `~#3D3D3D-4545`, pill radius ~18 px.
- **Settings rows**: ~59 px tall, separated by 1 px rules measured
  `--border-light` `#ffffff0d`. Label 14 px white left, value 14 px with a
  chevron right. Rows: Appearance (System), Contrast (System), Accent
  color (gray swatch, Default), Language (Auto-detect), Higher
  intelligence (toggle + helper 12 px `#afafaf`).
- **Toggle**: blue track `#3B82F6` (light) / measured `--blue-600`-family
  in dark, white thumb on the right when on.
- Helper text: 12 px, `#afafaf`, line height ~16 px.

## 7. Color palette (measured, dark theme)

| Role | Value |
|---|---|
| App background (`--main-surface-primary`) | `#000` |
| Sidebar surface (`--sidebar-surface-primary`) | `#000` |
| Composer surface (`--composer-surface-primary`) | `#212121` |
| Hairline dividers (`--border-light`) | `#ffffff0d` (white 5%) |
| Heavy border (`--border-heavy`) | `#fff3` (white 20%) |
| Primary text (`--text-primary`) | `#fff` |
| Secondary text (`--text-secondary`) | `#cdcdcd` |
| Tertiary text (`--text-tertiary`) | `#afafaf` |
| User message bubble (`--default-theme-user-msg-bg`) | `#323232d9` |
| Link blue (`--link`) | `#7ab7ff` |
| Accent / action blue | `#3b82f6` (light) / blue-600 family (dark) |
| Voice / send button | `#f4f4f4` |
| Avatar orange | `~#e66d00` |
| Footnote size (`--text-footnote`) | 0.8125rem (13 px) |
| Caption size (`--text-caption`) | 0.75rem (12 px) |

## 8. Typography (measured from the live font stack)

- **Font family**: `-apple-system-body, ui-sans-serif, -apple-system,
  "system-ui", "Segoe UI", Helvetica, "Apple Color Emoji", Arial,
  "sans-serif", "Segoe UI Emoji", "Segoe UI Symbol"` — a system-ui
  stack, with a webfont named **"Circle"** (400/600) in the loaded font
  list. So ChatGPT's actual UI font is their own "Circle" webfont, falling
  back to system-ui. For Weaver, the closest free match is the same
  system-ui stack; bundling a Söhne-like webfont is optional polish.
- Body / replies: 16 px regular, `#fff`, line height 26 px.
- Sidebar labels: 14 px. Section labels: 13 px semibold.
- Brand: 16 px semibold.
- Page headings: 24 px. Settings section headings: 18 px.
- Metadata / subtitles: 11-13 px, grays.
- Disclaimers: 12 px.

## 9. Behaviors worth copying

- Composer is a capsule, pinned to the column width, with a minimal
  placeholder and controls that never shout.
- Assistant replies have no bubble; the chat is about the text, and the
  only bubble is the user's.
- Every assistant reply gets a quiet action row; long work shows a
  status line with a chevron.
- The `/` menu is discoverable, labeled with one-line descriptions, and
  lays out as icon + label + description + chevron.
- Settings is a two-pane modal on a dimmed backdrop, rows with hairline
  separators, no cards-with-borders except where something needs to stand
  out.
- Everything is monochrome with one accent; nothing is loud.

## 10. Adopt / skip for Weaver's web chat

Adopt (design only, plain HTML/CSS, no new capability):
- 250 px sidebar, 768 px centered column, black canvas, no top header.
- Capsule composer with plus/placeholder on the left, one status selector
  and a send control on the right (Weaver gets a normal send arrow, the
  voice button is skipped).
- User bubble `#2F2F2F` radius 20 px right-aligned; assistant text bare
  on black, 16 px / 26 px line height.
- Action row under replies (copy, regenerate), ~32 px spacing.
- Hairline separators `#353535` for lists; cards `#202020` with 1 px
  `#424242` border radius 15 px only for file-like results.
- The palette table above, verbatim.

Skip (capability or noise):
- Voice mode, mic, dictation.
- "5.5 High" intelligence selector in the composer (Weaver picks its
  model once; the meter belongs in the status line, not the composer).
- Plugins, Billing, Usage, Cloud browser, Parental controls, Trusted
  contact rows (settings stays local: General, Appearance, Personalization,
  Storage, Safety).
- The "ChatGPT can make mistakes" disclaimer text (Weaver writes its own
  one-line honesty note or none).
- Anything that implies a hosted multi-owner service.

## 11. Open questions for the build

- Font: the live stack is system-ui with a "Circle" webfont on top.
  Decide in Gate 2 whether Weaver bundles a font or ships the system
  stack (recommended: system stack for the proof).
- Responsive behavior below ~768 px (sidebar collapse to the 52 px rail)
  is partially measured (the rail exists and is 52 px wide); the
  mobile-width proof is a later step.
- The `Worked for Ns` status line: Weaver has run durations from its
  receipts; adopt as a quiet status line or drop for the proof.
- The composer's right side in ChatGPT is model-selector + dictation +
  voice; Weaver replaces the selector with a send arrow and skips voice,
  so the right side is just send.

## 12. How this was measured

- Screenshots of a real signed-in ChatGPT Plus session (dark theme),
  captured by the owner on 2026-08-02, analyzed at pixel level.
- A dev-accurate browser pass against the same signed-in profile
  (Playwright, dark theme forced via `prefers-color-scheme: dark`):
  computed styles, bounding rects, CSS custom properties, and the loaded
  font stack were extracted live. Raw dumps live owner-only under
  `.weaver/research/chatgpt-ui/` (never committed).
- Where a value is marked `measured` it came from the browser pass;
  `~` values are screenshot estimates.
