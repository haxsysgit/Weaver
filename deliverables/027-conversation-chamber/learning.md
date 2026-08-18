# Plan 027 learning note

## Gate status

**Unadmitted.** The owner approved the Hidden Thread direction and requested
this drafted plan on 2026-08-18. Plan-specific admission waits for Plans 022
through 026 to close. No production work is authorized by this draft.

## Confirmed owner direction

- Weaver replies use a silver thread spine and woven seal, with text directly
  on the chamber surface.
- Owner messages use compact black-glass shards aligned right.
- The composer uses black wood, silver edges, large controls, and visible
  Shadow Slave plus spoiler-boundary context.
- The key label comes from browser-local state and says only bound or unbound.
  It never says valid.
- Motion responds to focus, send, stream, completion, and failure. Reduced
  motion settles those events immediately.
- Phone and desktop are reviewed together. Browser evidence covers 320 x 568,
  360 x 800, 390 x 844, 412 x 915, and 1440 x 900. The Redmi Note 14 receives
  the real-device usability pass at its measured CSS viewport.
- The assistant keeps its natural reading-companion voice. Spell language stays
  around the conversation rather than taking over every answer.

## Current observations

- `Message.tsx` still renders both roles as conventional chat structures. The
  Spell Surface override gives Weaver a rounded reply card.
- `Composer.tsx` already protects Enter, Shift+Enter, cancel, and reading-tier
  behavior. The new presentation must keep those paths.
- `identity.ts` already exposes `getApiKey()` and `isApiKeyDisabled()`. The UI
  can derive status without sending key material through React props.
- `markdown.ts` produces typed React nodes and accepts only HTTP and HTTPS
  links. There is no HTML rendering path to replace.
- `useChatController.ts` already exposes the turn states needed for event-driven
  motion. Failure and recovery must remain usable after the visual change.

## Hypothesis

The chamber will feel like one living Spellweave scene when messages, composer,
and background respond to the same small event set. Reading stays comfortable
because the cosmic depth remains behind the text and foreground movement stops
when the event settles.

## Learning gate

Pending. After admission, the executor records the component mapping and any
prototype conflicts here. The owner reviews phone and desktop evidence before
the plan can close.
