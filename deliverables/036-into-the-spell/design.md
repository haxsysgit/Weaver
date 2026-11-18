# Plan 036 design: a new face for Weaver

Status: draft for owner approval, 2026-11-18. Builder check done the same
day. Sections 7.6 and 7.7 confirmed by the owner the same day. Written from the Plan 036
brainstorm; every owner decision below is recorded with its date in
`results.md`. Items marked **(my call)** were decided by the executor and
can be overruled.

## 1. Intent

Today Weaver "feels like a generic app with a colorful background" (owner,
2026-11-18). The goal is that opening Weaver feels like stepping into a
living world, while it stays what it is at its core: **an agent for
reading and talking about novels**. Chatting with Weaver is the centre.
The world exists to make that conversation feel alive, never to get in
its way.

Weaver is a lorekeeper. Its memory is the whole world of a novel. Each
chat is a **memory fragment**: a recollection in which Weaver recalls the
novel and talks with the reader. Shadow Slave is the first world; Lord of
the Mysteries is the likely next one.

Who it is for: readers of the novel, mostly non-technical, mostly on
phones, many also with a laptop or PC. The full living world is for the
big screen; the phone gets the same app at a lighter quality level, and
the chat there stays fast and one tap away.

## 2. Goals

1. A reader feels they are inside the Spell's world from the first screen.
2. The chat is as fast and readable as today, on every device.
3. The world reacts to the conversation: Weaver thinking, citing a
   chapter, the reader scrolling back through older messages.
4. Weaver's own look is separate from the novel's world, so a second
   novel is a new world folder, not a rewrite.
5. No change to how Weaver answers. Below the face, only the three small
   changes in section 9.

## 3. Non-goals (not in this build)

- A game layer: a random First Nightmare with Aspects, Soul Sea types or
  legacies (owner, 2026-11-18; goes to `TODO_future.md`).
- The storytelling mode that walks a reader through the story chapter by
  chapter (owner, 2026-11-18; far future).
- Painted place scenes behind the chat (direction C). They wait for art.
- The Lord of the Mysteries world. Only the seam for it is built.
- Any change to retrieval, prompts, the model, or the server API, except
  where section 9 names one.
- Deployment.

## 4. Anti-goals (a failure even if it works)

- The world slows the chat down, hides text, or makes reading harder.
- It looks like "a chat with a starry wallpaper": the scene does not react.
- It looks like a generic tech wallpaper (a plexus of dots and lines, an
  80s grid). The prototypes showed literal geometry reads this way.
- It shows text that spoils the novel, or explains how the Spell was made.
- It turns into a settings harness: more switches than a reader wants.
- It copies an existing site, or uses official or ripped art.

## 5. Constraints

- **The engine stays, with three small, named changes.** How Weaver
  answers (the server's turn, retrieval, prompts, streaming, recovery,
  reader memory) does not change. `hooks/useChatController.ts`,
  `lib/chatApi.ts`, `lib/identity.ts`, `lib/chatRecovery.ts`,
  `lib/readerPosition.ts` and `lib/markdown.ts` keep their behaviour
  except for the three changes in section 9. **(my call, from the
  builder check.)**
- **What the engine tells the browser.** While Weaver works, the stream
  sends `tool` events with only a tool `name` and a `status`
  (`src/weaver/web/app.py`, `on_tool_event`). Chapter numbers, arguments
  and passages deliberately stay on the server. So the thinking state
  shows phases (locating, reading, connecting, considering, as in
  `lib/runePhases.ts`), not "reading ch. 3". **(my call: keep that
  boundary; the prototype's "reading ch. 3" line is dropped.)**
- **Citations come from the answer text.** `lib/markdown.ts` already
  finds "ch. N" and "chapter N" and renders them as chapter knots
  (`components/Markdown.tsx`). Citation threads attach to those knots.
- **What the first visit must keep.** Today's setup
  (`components/FirstNightmareSetup.tsx`) has four steps: awakening,
  access (the shared question allowance, or a way to the reader's own
  DeepSeek key), the DeepSeek privacy notice with consent, and the
  Appraisal. Access and the notice with consent stay; only their look and
  voice change. The spoiler boundary is not in today's setup; it is set
  in Settings or through the in-chat "I'm at chapter N" offer.
- **Copy rules:** no em dashes in reader-facing copy; no spoiling text;
  Settings labels in plain words.
- **The novel is inspiration, not a blueprint** (owner, 2026-11-18). Read
  for the feel; invent freely where the novel is silent; tell the owner
  which parts are canon-inspired and which are invented.
- **Evidence rules (AGENTS.md):** real browser screenshots at desktop
  (1440x900) and phone (390x844) for every visual claim; jsdom is not
  layout evidence; one server at a time.
- **Art:** only art made for Weaver (Blender, painted, or commissioned) or
  properly licensed (for example CC0). Never official or ripped art.

## 6. Approaches considered

| Approach | What it means | Trade-off |
| --- | --- | --- |
| **1. New face on the same engine, with the React scene kit (chosen)** | Every screen is redrawn; scenes are written with React Three Fiber over three.js; the chat engine is reused | Three new libraries and a larger 3D download; the reader sees progress in the real app from the first slice |
| 2. New face on the same engine, plain three.js | Extend the hand-written three.js in `SpellBackground.tsx` | No new libraries; every glow, transition and scene change is our own code to maintain |
| 3. Rebuild the app from scratch beside the old one | New app, switch over at the end | Most freedom; nothing visible for a long time; rewrites the engine and its fixed bugs; about 185 frontend tests to redo |

Owner chose approach 1 (2026-11-18). The reference sites checked
(Messenger by Abeto, Bruno Simon, igloo.inc, Dracarys, Oryzo, Lusion,
Henry Heffernan) are nearly all three.js with GSAP; Active Theory uses its
own engine. None uses the React scene kit; they are one-visit showpieces.
Weaver needs a scene that follows live chat state, which is what the kit
is for.

## 7. The experience

### 7.1 Two layers

- **Weaver's layer** (the same for every novel): the silk threads, the
  woven presence with its embers, memory fragments and weaves, citation
  threads, the scroll-back rewind, the quality levels.
- **The world layer** (one per novel; Shadow Slave now): the home scene
  (the Soul Sea), the room's ground (the void between dream and reality),
  the Spell's rune voice for status lines and the first visit, palette
  and type.

A world is a folder that provides: a home scene, a room ground, palette
tokens, fonts, and its copy (status lines, first-visit lines). Weaver's
layer never imports from a specific world. **(my call: one world is
active at a time, chosen by the edition being read; a reader-facing
switch comes with the second world, not now.)**

### 7.2 Home: the Soul Sea

The app opens here (owner, 2026-11-18). A calm dark sea under one black
sun with a gold rim. Each memory fragment (chat) is a silver light over
the water; each weave (fanfic) is a gold light. The most recent sit
nearest. The composer at the bottom starts a new fragment; a clear
"return to your last fragment" action reopens the latest one.

**(my calls)**
- "Recent" means last activity, not creation (section 9). Pinned
  fragments come first, then the most recent; archived ones never show on
  the sea.
- Next to the composer, a second action, "Weave a story", starts a weave
  (today's fanfic thread, `fanfic_kind: "missing_scene"`). The composer
  itself starts a fragment.
- The sea shows the most recent few fragments (about five on a phone,
  about eight on a big screen). "All fragments" opens a plain, searchable
  list with today's actions (pin, rename, archive, delete, save as
  Markdown). A sea with fifty lights would be unreadable.
- A new reader with no fragments sees an empty sea and the composer.

### 7.3 The room: talking with Weaver

The ground is the void: fine silver threads flowing through stars, with
the conversation inside it, not on a panel over it. Messages stay fully
readable: the scene darkens behind text.

Weaver's presence sits at the top: a woven oval holding seven embers. It
is never a face. Its states follow the engine:

| Engine state | Presence |
| --- | --- |
| idle | breathes slowly; on phones it holds still |
| turn sent, no tool yet ("reaching") | the weave begins to tighten |
| a `tool` event arrives ("reading") | one ember flares; the rune status line shows the phase |
| answer streaming | the weave loosens as text arrives |
| completed | settles back to idle |
| interrupted or failed | the weave slackens and dims; the existing recovery panel shows |

**Citation threads:** when an answer's chapter knot appears, a gold thread
draws from it to a star in the scene, holds briefly, then fades **(my
call, owner agreed)**. Knots are plain text today with no tap action; this
build gives them none **(my call)**.

**Scrolling back:** as the reader scrolls up through older messages in a
fragment, the weave behind runs backwards with faint silver streaks;
scrolling down runs it forward again. Older stretches carry when they
were said ("last tuesday"), not chapter marks. A "back to now" pill
returns to the latest message.

### 7.4 The weave room (fanfic)

A weave is Weaver making something new, so its room differs: the threads
turn gold and slow, like a loom, and the presence opens into a frame
around the story. **(my calls)** The "gold underline on invented
passages" idea from the brainstorm needs the model to mark invention in
its output, which is an engine change; it is left out of this build and
recorded for later.

### 7.5 The first visit

The same substance as today (allowance or own key, the DeepSeek notice
and consent), plus one new step: **how far you have read**, which saves
the spoiler boundary (or "I haven't started" / "skip"). Restaged: the Spell's rune voice
speaks in short lines over the void, one step at a time, and it ends by
opening the Soul Sea. It can be deferred, as today.

**(my calls)**
- The earlier proposal to ask the reader's name is dropped: the server
  has nowhere to keep it, and a reader can tell Weaver their name in chat,
  which Weaver's reader memory already keeps.
- The spoiler-boundary step is new behaviour. It was proposed to the
  owner on 2026-11-18 and not objected to; it protects the first
  question, and "skip" keeps today's behaviour (no boundary, Weaver asks).
- The old "Appraisal" step is retired (no game layer). The choice between
  three Soul Seas lives in Settings > Appearance and is retired there.

### 7.6 Getting around (owner confirmed, 2026-11-18)

The owner wants a new way of using Weaver, not today's layout restyled
(2026-11-18: "todays look need a huge revamp"). Today's app is used only
as a list of things a reader can do; its layout is not kept.

- **The sea is the hub.** Everything starts there: a new fragment, a new
  weave, returning to the last fragment, opening "all fragments".
- **The desktop rail is retired.** The 280px column (logo, new button,
  search, Chats and Fanfic lists, Archived, Settings) goes on every
  screen size.
- **In the room,** the Weaver mark at the top left takes you back to the
  sea in one tap. A **fragments drawer** jumps between fragments without
  going home: on desktop it opens from the left edge or a key, on a phone
  with a swipe from the left edge; it shows recent fragments as small
  lights with their titles, and closes as soon as one is picked.
- **"All fragments"** is the full list: search, pin, rename, archive,
  delete, save as Markdown, and the archived ones.
- **Settings** opens from a small mark in the top right corner, on the sea
  and in the room.

### 7.7 Settings (owner confirmed, 2026-11-18)

Built from what a reader needs, not from today's panel. Plain labels.

| Section | Holds |
| --- | --- |
| Reading | how far you have read (the spoiler boundary); text size |
| Motion and sound | Full, Light or Still; sound on or off |
| Your key and model | your own DeepSeek key, Flash or Pro (folded away, for readers who bring a key) |
| Your data | the DeepSeek notice, delete conversations, forget this device |
| First visit | replay it |

Gone: the four themes, glass, reading density, the Soul Sea choice, Star
web (folded into Motion and sound), the Appraisal. The settings audit
fixes stay (per-device preferences, visible save state, explicit
boundary).

### 7.8 Sound

Off by default; switched on in Settings. A low hum in the void, a soft
thread pluck when Weaver starts answering, a rising shimmer when a
citation thread draws. Never autoplays.

## 8. Technology

| Part | Choice | Job |
| --- | --- | --- |
| 3D engine | three.js (already used, 0.185) | draws everything |
| Scene kit | React Three Fiber 9.x, drei 10.x, postprocessing with `@react-three/postprocessing` | scenes as React pieces driven by chat state; ready-made parts (adaptive quality, sparkles, text); bloom, vignette, grain |
| Threads | our own GLSL shaders | the flowing silk, rewind, tighten; Weaver's own craft |
| Interface motion | motion (already used) | messages entering and leaving, panels, a light on the sea growing into the room |
| Story moments | GSAP with `@gsap/react` (SplitText, and ScrollTrigger only if it earns its place) | the citation thread, rune text decoding, the first visit, the scroll-back choreography |
| Renderer | WebGL | wider phone support than WebGPU **(my call)** |
| Art | Blender (Cycles), exported as images, textures and glTF | Soul Sea sky, sun and water; the presence's woven form if code alone looks crude; still images for the Still level; icon and link preview |

Rules **(my calls)**:
- motion and GSAP never animate the same element.
- GSAP and the scene kit load after the chat is usable; the chat never
  waits for the world.
- Every GSAP animation is created inside `useGSAP` so it is cleaned up
  when a screen closes; reduced motion is honoured through
  `gsap.matchMedia`.

## 9. Engine touch points

The build needs three small changes below the face **(my calls, from
the builder check)**:

1. **Start on the Soul Sea.** `bootstrap()` in `useChatController`
   opens the saved or newest thread and creates one when none exists. It
   changes to load the fragment list and open nothing; sending from the
   home composer creates a fragment, then sends.
2. **Keep message times.** `toDisplayMessage` drops `created_at`; it keeps
   it, so older stretches can say when they were said.
3. **Last activity.** The server orders conversations by `created_at`,
   and `ConversationSummary` has no last-activity field. The server adds
   one (the time of the latest message) and the list orders by it. This
   is the only server change, with its own backend tests.

Two later ideas would need more, and are out of scope here:
- showing "what Weaver knows about you" in a profile view needs a read
  endpoint for reader memory (none exists in `ChatApi` today);
- marking invented passages in weaves needs the model to mark them.

## 10. Quality levels and budgets

Three levels, chosen automatically and overridable in Settings:

- **Full** (laptops and PCs): the living world, continuous motion, bloom.
- **Light** (phones): fewer threads, softer bloom, and the world moves
  only on events (thinking, citations, scrolling back), then rests.
- **Still** (the "reduce motion" setting, or a struggling device): one
  frame of the scene, rendered once and then left still, so it needs no
  art; Blender stills replace it in the third plan. States show through
  the status line only.

Starting budgets **(my call; the owner expects heavy phone optimisation
during the build)**, checked in every slice:

| Measure | Today | Budget |
| --- | --- | --- |
| JS before the chat is usable (gzip) | 125 KB | 200 KB |
| 3D chunk, loaded after (gzip) | 131 KB | 350 KB |
| Art on first load | none | 1.5 MB desktop, 600 KB phone |
| Frame rate | n/a | 60 fps desktop; steady 30 fps or better on a phone profile (Chrome 4x CPU slowdown), and no rendering at all when the room is idle on Light |

The owner's evaluation rule: performance is measured per device as the
build goes, and phones get as much optimisation as they need.

## 11. Accessibility

The scene is decorative and hidden from screen readers. Text contrast is
checked against the darkest and brightest parts of the scene. Everything
works by keyboard. "Reduce motion" selects Still. Sound is never needed
to understand anything.

## 12. Evidence and tests

- Each slice: screenshots at 1440x900 and 390x844 (`.weaver/tools/shoot.mjs`
  or real Chrome), a bundle size report against section 10, and a frame
  rate check on the phone profile.
- Vitest for the wiring: engine state to presence state, knots to
  citation events, scroll position to rewind, quality level selection.
- Tests for removed behaviour are deleted with it, not rewritten to pass.
- Floors: the frontend suite, `tsc`, and the build pass; the backend
  suite (1143) is untouched.

## 13. Proposed build plans

Plans run in number order and the owner renumbers at close. Proposed
sequence:

1. **The room.** The two-layer folders, the scene kit, the void, Weaver's
   presence and its states, citation threads, scroll-back, quality
   levels and budgets. The chat engine wired in; the old background
   retired.
2. **Home and the first visit.** The Soul Sea with fragments and weaves,
   the "all fragments" list, the restaged first visit, Settings redrawn,
   the old setup and Soul Sea choice retired. Blender art for the sea.
3. **The weave room and sound.** The fanfic room, the sound layer, the
   still images, final phone optimisation pass.

## 14. Left to the builder

The exact shaders, colours, type sizes, layouts and timings; how the
presence is built (code, Blender form, or both); the art pipeline; which
drei parts are used; the split of slices inside each build plan.
