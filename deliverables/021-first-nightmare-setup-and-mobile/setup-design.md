# Plan 021 setup design

## Gate status

The owner approved this copy on 2026-08-17. Implementation may proceed.

The owner also chose a setup-specific particle-fragment rune animation. It
keeps the current Spell surface's motion tokens and particle language, then
adds a cleaner gather, bind, and resolve sequence instead of copying the
existing ambient announcement animation.

## Canon basis

The admitted plan supplies four anchors for this setup:

- Chapter 28: the Spell communicates through dead rune languages, and knowing
  the language changes what the runes mean.
- Chapter 709: the Spell's appraisal rises through "Good", "Exceptional",
  "Remarkable", and "Glorious".
- Chapter 211: the Spell "always hits you in your most vulnerable spot".
- The infection leads to unnatural sleep, the Nightmare, survival, and then an
  Aspect.

The setup borrows that sequence without claiming that the browser is a literal
Nightmare. First arrival is the infection, adding a key is the small trial, and
entering Weaver is the Aspect awakening. The plain explanation always sits next
to the themed line, so the runes never hide what the user is agreeing to.

## Visual direction

The modal belongs to the current Spell surface:

- A near-black Soul Sea panel over a solid dimmed backdrop.
- Pale silver bracketed Spell announcements and quiet blood-crimson focus.
- Fine silver fate threads and the existing `FateWeavingLoader` between key
  storage and appraisal.
- A setup-specific particle-fragment rune that gathers around each Spell
  announcement. It extends the current particle treatment with a sharper
  formation and dissolve.
- Existing Elder Futhark and rune treatments only. No new alphabet, sigil set,
  illustration style, or decorative frame.
- One strong focal point per step. The explanation and action stay readable on
  a phone without relying on the theme.

The modal is a proper dialog. It traps focus, labels its current step, restores
focus when closed, and keeps the page behind it inert. On mobile it fits inside
the safe area, scrolls internally when needed, and keeps its actions reachable.

## Step flow and exact copy

The progress label is plain and small: `First Nightmare · 1 of 4`, continuing
through `4 of 4`.

### Step 1: infection

Spell line:

> [The Nightmare Spell has found you.]

Heading:

> The Spell has found you

Body:

> A thread has taken root in this browser. Before Weaver can read with you,
> there is one small trial.

Primary action:

> Enter the First Nightmare

Secondary action:

> Enter later

### Step 2: explain the key

Spell line:

> [The trial has taken shape.]

Heading:

> Bring your DeepSeek key

Body:

> A DeepSeek API key is a private code that lets Weaver send your questions to
> DeepSeek and charge the model usage to your DeepSeek account.

Privacy note:

> Your key stays in this browser. Weaver sends it with each request and the
> server does not save it.

External link:

> Get a key from DeepSeek

The link opens `https://platform.deepseek.com/` in a new tab with the usual
external-link safety attributes. Its accessible name says that it opens the
DeepSeek Platform in a new tab.

Primary action:

> I have a key

Secondary actions:

> Back

> Enter later

### Step 3: key entry

Spell line:

> [Every Nightmare finds the vulnerable place.]

Heading:

> Face the trial

Field label:

> Your DeepSeek API key

Placeholder:

> sk-...

Field help:

> Stored only in this browser. You can replace or remove it later in Settings.

The input is masked, disables spelling and automatic capitalization, and does
not expose the saved value outside the field. Whitespace-only input cannot be
stored. The primary action stays disabled until the trimmed field has content.

Primary action:

> Store key and continue

Secondary actions:

> Back

> Enter later

Storing uses the existing `setApiKey()` function. It is a local storage action,
not a live DeepSeek check, so the UI never calls the key "valid" or
"recognized".

### Step 4: appraisal

Transition status, shown with the existing fate-weaving loader:

> [Fate threads draw together.]

Spell line:

> [Your preparation has been appraised.]

The appraisal words appear in order, then `Glorious` remains highlighted:

> Good · Exceptional · Remarkable · Glorious

Heading:

> Your Aspect awakens

Body:

> The key is stored in this browser. Weaver can now read, reread, and answer
> through your DeepSeek account.

Primary action:

> Enter Weaver

This appraisal celebrates completing setup. It does not claim that DeepSeek has
accepted the key, because this fake-only plan makes no live model call.

## First-run and deferred states

Use one browser-local setup key: `weaver_first_nightmare`.

- Missing: open Step 1 automatically after the Spell surface mounts.
- `completed`: do not auto-open; a key was stored through setup.
- `deferred`: do not auto-open; the user explicitly chose `Enter later`.

`Enter later` is available throughout the flow. It writes `deferred`, closes
the modal, and leaves the user in Weaver. Escape performs the same explicit
defer action for keyboard users. A backdrop tap does not dismiss the modal, so
a stray phone tap cannot silently make the choice.

Completing Step 3 writes the API key first and then writes `completed`. If key
storage fails, the modal stays on Step 3 and shows:

> The key could not be stored in this browser. Check browser storage and try
> again.

Clearing the key later does not erase the first-run flag or force the ceremony
to replay. The persistent key status gives the user a direct route back.

## Persistent key status

The rail footer and the mobile header show the same status beside Settings:

- With a key: `DeepSeek key · stored in this browser`
- Without a key: `DeepSeek key · missing`

The missing state uses the existing crimson accent plus text, never color
alone. Activating it opens the setup at Step 2. The stored state opens the
existing Settings surface, where the key can be replaced or cleared. The status
is derived from the existing `getApiKey()` value and refreshes after every
store, replace, or clear action.

The old Settings hint must match the new guarantee. It must no longer suggest
that an empty field uses a server key. The replacement copy is:

> Stored only in this browser. Sent with each request and never saved by the
> server. Leave empty to remove it.

## Animation language

All new movement uses `--motion-smooth` for timing and `--ease-weave` for its
curve.

- Opening: the solid backdrop fades in while the panel rises a few pixels and
  settles from a very small scale change.
- Step change: particle fragments gather into a rune-like seal around the Spell
  announcement, one fine fate thread binds the panel, and the next copy settles
  in. The fragments then dissolve instead of looping.
- Key storage: `FateWeavingLoader` runs for one short transition before the
  appraisal appears. It does not pretend to validate the key.
- Appraisal: the four tier words resolve in order. There is no looping glow,
  shaking, or constant ambient movement inside the modal.
- Closing: the panel fades and settles before focus returns to the control that
  opened it.

Under `prefers-reduced-motion: reduce`, transitions complete immediately,
appraisal words appear together, and the loader is static. Content and focus
order stay the same.

## Mobile drawer contract

The drawer behaves like a real app drawer at widths below 768px:

- Closed: the rail sits fully off-canvas and cannot receive focus or pointer
  input.
- Open: the page body is scroll-locked, the solid scrim covers the chat, and the
  rail slides in from the left using `--motion-smooth` and `--ease-weave`.
- The scrim is `rgba(0, 0, 3, 0.72)` with no `backdrop-filter` on either the
  production `.lab-rail-scrim` or fallback `.drawer-scrim` path.
- Tapping the scrim, pressing Escape, selecting a thread, or starting a new
  weave closes the drawer.
- Focus moves to the drawer close button when opened and returns to the opener
  when closed. Controls behind the drawer cannot be reached while it is open.
- Top and bottom padding include `env(safe-area-inset-top)` and
  `env(safe-area-inset-bottom)`. The drawer remains `100dvh` tall.
- Stack order is content, scrim, drawer, modal. The modal stays highest.
- Scroll lock restores the body's previous inline overflow value on close and
  component cleanup.

Reduced-motion mode removes the slide while preserving the same open and close
states.

## Mobile polish contract

- Every button, link, menu action, and setup control has a hit area of at least
  44 by 44 CSS pixels.
- Text inputs, number inputs, selects, and textareas use at least 16px text at
  the mobile breakpoint, preventing iOS focus zoom.
- Header, drawer, modal, transcript, and composer padding include safe-area
  insets where they touch a screen edge.
- The setup actions stack on narrow screens. The primary action remains first
  in visual priority; Back and Enter later remain plainly visible.
- Long key guidance wraps without horizontal scrolling. The masked key field
  never extends past the viewport.
- The existing viewport declaration is already correct and stays unchanged:
  `width=device-width, initial-scale=1.0, viewport-fit=cover`.
- New animation rules extend the existing reduced-motion block.

## Deterministic checks for implementation

Vitest must prove:

1. A missing `weaver_first_nightmare` value opens Step 1.
2. `completed` and `deferred` do not auto-open setup.
3. A trimmed key round-trips through the existing identity functions and marks
   setup completed.
4. Enter later marks setup deferred and leaves the missing-key status visible.
5. The missing-key status reopens setup at Step 2.
6. The mobile drawer opens, locks body scroll, closes on scrim activation, and
   restores scroll state.
7. Escape closes both the drawer and setup according to their contracts.

The plan's full build, Vitest, and pytest floor remains Slice 6 work.
