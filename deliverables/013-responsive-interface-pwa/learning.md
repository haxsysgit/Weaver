# Learning note: the browser is Weaver's one product surface

## Gate status

Confirmed by the owner on 2026-08-04. The React repair supersedes the earlier
vanilla web-component choice.

## What changed

The terminal UI and vanilla browser UI repeated the same conversation job in
two places. The owner chose one public surface: React 19, Vite, and TypeScript
on top of the accepted FastAPI and SSE backend. HaxJobs uses the same stack,
so copied React source is the practical reuse path.

The reusable unit is the chat behavior and its boundaries, not a custom
`<weaver-chat>` element. The API adapter, stream state, transcript, composer,
conversation rail, safe Markdown parser, product configuration, and theme
tokens are separate files. HaxJobs can replace the product layer without
inheriting Shadow Slave copy.

## Theme decision retained

The earlier Plan 013 theme is still owner-confirmed:

- layered near-black backgrounds;
- bone-white and pale-silver text;
- blood-crimson actions and focus;
- obsidian hairlines;
- a black-mask and crimson-eye mark;
- restrained web and fate-thread geometry;
- a short weave line in the product footer.

The interface uses those ideas as structure and texture. ChatGPT remains a
measurement reference for interaction behavior only. Weaver ships none of
OpenAI's names, marks, assets, or fake capability rows.

## Future capability map

The product direction and owner post describe Weaver as a Shadow Slave friend
with stronger knowledge than a normal reader. Later work may add:

- chapter-backed sources and scene lookup;
- spoiler-aware conversation based on the reader's current chapter;
- remembered opinions, favourite characters, and ongoing theories;
- separate canon, interpretation, and speculation views;
- Weaver's own revisable takes;
- what-if discussions grounded in story rules;
- reading links;
- fan-made scene visuals.

Those needs affect component boundaries today. They do not justify visible
buttons before the backend supplies real data and behavior.

## Rendering and privacy decisions

- React escapes owner and model text.
- A pure parser converts Markdown into typed nodes. The renderer creates React
  elements and never uses raw HTML.
- Only `http` and `https` Markdown links become clickable.
- The service worker caches the app shell only. `/api/` stays network-only.
- SQLite remains canonical. Browser storage keeps only the active conversation
  id.
- No novel text, private knowledge, chats, receipts, secrets, or reasoning
  traces enter public frontend files.
