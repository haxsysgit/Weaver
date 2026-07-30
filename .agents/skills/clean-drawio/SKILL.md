---
name: clean-drawio
description: Build clean grouped/swimlane draw.io diagrams for HaxJobs architecture. Use when Arinze asks for architecture diagrams, pipeline diagrams, file maps, or any diagram for this project.
---

# Clean Draw.io Architecture Diagrams

Arinze's preference for draw.io architecture diagrams. Rebuild any diagram that has too many individual nodes, file listings inside nodes, or inconsistent layout.

## Rules

### Structure

- **Groups, not nodes.** Use swimlane containers (`swimlane`) as the primary visual unit. Each major phase/zone is its own swimlane. Small nodes live inside swimlanes — they should have only the role name, never file paths or detail.
- **5-7 groups max.** For pipeline: 5 groups (Discover, Store, Evaluate, Build Pack, Output). For file architecture: 6 groups (Config, Discovery, Database+State, Processing, Dashboard+API, Output).
- **Minimal node text.** Inside a swimlane, nodes say things like "Job Sources", "Scrapers", "Fit Evaluation" — not "discovery/lever_scraper.sh calls Lever API with curl".
- **Thick inter-group arrows.** Edges between swimlanes use `strokeWidth=2` or `strokeWidth=3` and match the destination group's color. No individual edges between tiny internal nodes.

### Color scheme

| Role | fillColor | strokeColor |
|---|---|---|
| Discovery / UI surfaces | `#dae8fc` (swimlane), `#e3f2fd` (node) | `#6c8ebf` |
| Database / State | `#fff2cc` (swimlane), `#fff9e6` (node) | `#d6b656` |
| Processing / Logic | `#e1d5e7` (swimlane), `#f3e8f7` (node) | `#9673a6` |
| Manual / Gated | `#f8cecc` (swimlane), `#fde8e8` (node) | `#b85450` |
| Output / Artifacts | `#d5e8d4` (swimlane), `#e8f5e9` (node) | `#82b366` |
| Config / Neutral | `#f5f5f5` | `#666666` |

### Edge rules

- Edges between groups: solid, `strokeWidth=2-3`, color matches target group's `strokeColor`, no label unless it adds clarity
- Feedback edges (e.g. "reads/writes" back to DB): dashed, `strokeWidth=1.5`, smaller font
- Use `edgeStyle=orthogonalEdgeStyle;rounded=1;html=1;endArrow=classic;`
- Always include `<mxGeometry relative="1" as="geometry" />` child element in every edge `mxCell`

### Layout rules

- Page size: `pageWidth="1400" pageHeight="900"` (or appropriate)
- Title: plain `<mxCell>` with `text;html=1;strokeColor=none;fillColor=none;fontSize=18;fontFamily=Helvetica;align=center;`
- Legend: compact strip at the bottom right, small nodes with `fontSize=10`
- Hard boundary (where applicable): dashed red box, bold text, `fillColor=#f8cecc;strokeColor=#b85450;strokeWidth=2;dashed=1;`
- Consistent spacing: swimlanes tiled left-to-right for top row, then wrap to a second row

### XML format

- Start with `<?xml version="1.0" encoding="UTF-8"?>`
- Use `<mxfile host="drawio" version="30.2.4">`
- Prefer `<diagram name="...">` only. Do **not** add a custom `id` attribute to `<diagram>` unless it came from draw.io itself.
- Include `adaptiveColors="auto"` only if the local draw.io import/export accepts it; if draw.io throws importer/runtime errors, remove optional graph attributes first.
- Indent with 2 spaces, not tabs
- Every `<mxCell edge="1">` must have `<mxGeometry relative="1" as="geometry" />` — never self-closing edge cells
- No XML comments
- Avoid risky IDs and markup when hand-authoring XML: no ids like `map`, no decimal stroke widths, no raw `<font>` tags, no unnecessary nested parent containers. Use `&#xa;` line breaks and simple root-layer cells when in doubt.

### What to avoid

- Single-line minified XML (hard to read/diff)
- Nodes with file paths or detailed descriptions (keep those in the companion `.md` document, not the diagram)
- More than ~30 cells total
- More than ~8 swimlane groups
- Individual edges between every internal node — only inter-group edges matter
- Inconsistent colors
- Mermaid/.mmd diagrams — always output `.drawio` files

## Companion document

When creating diagrams, also create/update a companion markdown document (e.g. `docs/current-pipeline-and-file-architecture.md`) that contains the detailed file paths, call chains, and dependencies. The diagram is the visual summary; the `.md` file is the detail reference.

For draw.io importer/runtime failures and the safer hand-authored XML shape, see `references/import-safe-drawio.md`.

## Verification

After writing a `.drawio` file:
1. Parse with `xml.etree.ElementTree` to confirm well-formedness.
2. Count cells, vertices, and edges — should be under ~35 total where possible.
3. Confirm no `.mmd` leftovers exist.
4. Confirm the companion `.md` doc references `.drawio`, not `.mmd`.
5. **Most important:** run a real draw.io import/export check with the local CLI when available:
   ```bash
   drawio --export --format png --output /tmp/hermes-drawio-check.png path/to/diagram.drawio
   test -s /tmp/hermes-drawio-check.png
   ```
   XML parsing alone is not enough. A file can be well-formed XML and still fail in draw.io with runtime errors such as `d.setId is not a function`.
6. If draw.io import/export fails, simplify before trying again: remove custom `<diagram id=...>`, remove nested parent cells, remove raw HTML/font tags, remove decimal stroke widths, remove edge labels, rename risky IDs, and use flat root-layer cells with visual group containers.
5. For CLI/Hermes sessions where the workspace demands fresh evidence, create a focused temporary verifier under `/tmp` with a `hermes-verify-` filename prefix, run it, and remove it. Summarize this explicitly as **ad-hoc diagram verification**, not suite green.

## Pattern: layered product/runtime architecture diagrams

Use this pattern when Arinze asks for FRAME / Haxaml / SDK / agent-loop diagrams or any multi-system architecture diagram:

- Keep the user's requested groups as actual swimlane containers, even if the diagram is not HaxJobs-specific.
- Prefer dark theme when requested: dark page background, bright grouped containers, light font in swimlane headers, dark font inside pale inner nodes.
- Put the major systems in spatial positions that match the mental model, not just a generic left-to-right pipeline. Example: agents on the left, schema/state layer at the bottom, library/API layer in the middle, governance/runtime at the top, composed output on the right.
- If the user asks for several file-level arrows (for example each FRAME file up into FrameSDK), include those specific arrows, but keep them thin and unlabeled so they do not overwhelm the groups.
- Use one or two short wrapped detail lines inside a node only when the user explicitly asks for those exact responsibilities. Avoid paragraph nodes.
- Update the diagrams README/index when adding a new `.drawio` file so the diagram is discoverable later.
- Run a post-write self-check against the user's prompt: required groups, internal subsections, direction of arrows, dark theme, and cleanliness/cell count. Fix mismatches before finalizing.
