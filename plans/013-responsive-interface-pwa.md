# Plan 013: Responsive Weaver interface and installable PWA

## Status

- **State:** Repair implementation complete; verification and independent review passed
- **Admitted implementation:** Yes, owner redirected the frontend repair on 2026-08-04
- **Depends on:** Plans 011 and 012 accepted
- **Final decision:** pending

## Owner direction

Keep the accepted FastAPI and SSE backend. Delete both redundant frontend
surfaces: the Textual terminal UI and the vanilla web-component app. Rebuild
one browser product with React 19, Vite, and TypeScript.

The ChatGPT appraisal from Plan 011 supplies measured interaction patterns:
a focused reading column, quiet message hierarchy, a pinned composer, clear
streaming controls, and a mobile conversation drawer. The shipped product has
Weaver's own words, mark, layout details, and Shadow Slave theme.

## Product shape

The visible app contains working behavior only:

- conversation list, picker, and new weave;
- owner and Weaver transcript with safe Markdown;
- Enter to send and Shift+Enter for a newline;
- live SSE replies, cooperative stop, and explicit recovery;
- regenerate on the current live reply only;
- fixed viewport with transcript-only scrolling;
- desktop conversation rail toggle using Weaver's fate-thread sigil;
- mobile conversation drawer below 768px;
- installable PWA with shell-only caching.

No Library, Projects, Scheduled, Plugins, settings, voice, model picker, or
other dead rows appear before their backend behavior exists.

## Weaver identity

- Layered near-black surfaces suggest depth in shadow.
- Bone-white and pale-silver text carry the porcelain and fate-thread notes.
- Blood crimson marks focus, sending, and the mask's eye.
- Obsidian hairlines, restrained thread geometry, and a mask mark carry the
  Demon of Fate reference.
- Product words include "New weave," "Recent threads," and the footer line
  "the eighth lineage, still weaving..."

## Future-fit boundary

Today remains a small chat app. The source is separated into five parts that
future Weaver work can extend without rewriting the conversation loop:

1. Backend adapter: conversations, messages, SSE turns, and cancellation.
2. Chat state: active conversation, streamed reply, recovery, and regenerate.
3. Presentation components: rail, transcript, messages, composer, and mark.
4. Product configuration: visible names, prompts, footer, and storage key.
5. Theme tokens: product colors, widths, radii, and motion.

Future chapter sources, spoiler position, remembered reader takes, Weaver
opinions, theories, reading links, and generated scene visuals get their own
components when their backend contracts exist. HaxJobs can copy the chat
components and replace product configuration, API adapter, mark, and tokens.

## Backend boundary

The Plan 011 HTTP and SSE contract stays unchanged. SQLite is canonical.
`localStorage` contains only the active conversation id. Model text is rendered
as React nodes from a pure Markdown parser and never inserted as HTML.

## Verification floor

Run in this order:

```sh
npm install && npm run build
uv run pytest -q
npx vitest run
uv run ruff check src/weaver tests
uv pip check
```

Then run `uv run python scripts/web_live_proof.py` against the built fake-mode
app, followed by its `--offline-shell` and `--mode-switch` proofs. Build and
inspect a wheel to prove the React distribution is packaged. Audit the staged
diff for credentials, private story text, chats, and generated private state
before committing.
