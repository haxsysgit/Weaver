# Arinze social visual style notes

Use this when creating or editing visuals for FRAME/Haxaml social posts.

## Core rule

Do not make the asset look like generic AI architecture slop.

Avoid:
- glossy dark SaaS dashboards
- neon cyber gradients unless the user explicitly asks
- excessive glow effects
- generic node-and-arrow diagrams with no editorial point
- tiny labels packed into cards
- decorative complexity that makes the idea feel less serious

Prefer:
- editorial / research-note energy
- simple readable layouts
- warm paper, notebook, whiteboard, or clean technical sketch aesthetics
- one clear visual claim per asset
- plain labels that sound like a human wrote them
- enough whitespace that the asset can breathe on LinkedIn

## FRAME visual pattern

For FRAME/Haxaml visuals, the visual should usually explain one of these ideas:
- scattered project context causes agent confusion
- FRAME shapes project context into five parts
- Haxaml uses FRAME during a governed agent run
- better-shaped context beats more context
- the project should brief the agent instead of being re-explained every run

## Five-part FRAME diagram pitfall

When drawing `Facts`, `Rules`, `Map`, `Expect`, and `Acts` inside a shared shape:
- keep all five blocks fully inside the containing shape, not half-hanging outside it
- give `Expect` and `Acts` real spacing; they visually collide easily in the lower row
- run a quick geometry/visual check if editing SVG coordinates
- do not let arrows or connectors dominate the center

A good simple layout is:
- `Facts` top center
- `Rules` middle left
- `Map` middle right
- `Expect` lower left
- `Acts` lower right

## Wording style

Use labels that are simple and engaging:
- `chat notes` instead of `chat memory`
- `useful, then stale` instead of `long, useful, rotting`
- `big context` instead of `context window`
- `more room, same mess` instead of `bigger is not cleaner`
- `agent switch` instead of `tool switch`
- `explain it again` instead of `onboard again, again`
- `Not more context. Better-shaped context.` as a strong footer

Do not over-explain inside the image. The post can carry the nuance; the asset should carry the visual idea.