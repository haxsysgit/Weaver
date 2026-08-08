# Plan 013 bounded identity repair

> Use this handoff only for the final Plan 013 repair. The React rebuild is
> already complete. Keep the accepted FastAPI, SSE, conversation, Markdown,
> cancellation, PWA, and HaxJobs reuse behaviour intact.

## Owner feedback

The current shell works, but it still looks crude, bare, and too close to a
normal chat app. The custom fate-thread sidebar symbol is rejected because its
meaning is unclear. The owner allows bundled Font Awesome Free icons and wants
the sidebar controls, functional icons, browser icon, and Weaver mark to share
one visual language.

The shell needs a quick identity repair now. Real chapter evidence, source
locations, and search activity will give it deeper Weaver identity after the
reading tools exist. Do not draw fake evidence or tool activity in this plan.

## Fixed scope

1. Replace the hand-drawn functional icon set with locally bundled Font
   Awesome Free icons. Preserve its attribution in packaged assets. No CDN or
   runtime network request.
2. Remove `FateThreadGateIcon` completely. Use a clear staggered-bars control
   to open the conversation rail and a left-chevron control to collapse it.
3. Replace the mask-and-eye mark with a Font Awesome spider mark inside a
   restrained bone, obsidian, and crimson seal. Update the favicon and PWA icon
   to match.
4. Sharpen the existing layout without changing its jobs:
   - stronger brand lockup and conversation rail;
   - clearer selected conversation and rail controls;
   - a more deliberate empty state;
   - stronger owner/Weaver message hierarchy;
   - a weightier composer and cleaner header;
   - restrained web geometry, depth, hover, focus, and motion.
5. Keep the fixed viewport. The page never scrolls; only the transcript and
   conversation list may scroll.
6. Keep the reusable product boundary. HaxJobs must still be able to replace
   product copy and the injected mark without inheriting Weaver presentation.

## Do not add

- chapter citations, source cards, canon labels, search status, or tool rows;
- disabled future controls, settings, projects, libraries, or fake navigation;
- a router, backend route, API event, external font, third-party image, or
  runtime asset request;
- changes to the agent, library, conversation, receipt, or retrieval code;
- a new numbered plan.

## Files expected to change

- `package.json` and `package-lock.json`
- `src/weaver/web/frontend/components/Icons.tsx`
- `src/weaver/web/frontend/components/WeaverMark.tsx`
- the React components and tests that consume those icons
- `src/weaver/web/frontend/styles/tokens.css`
- `src/weaver/web/frontend/styles/app.css`
- `src/weaver/web/frontend/public/weaver-mark.svg`
- the built frontend under `src/weaver/web/dist/`
- Plan 013 results, rubric, and review evidence

Preserve unrelated worktree changes. Never stage or commit `reddit-post.md`,
private `.weaver/` content, or the drafted Plan 014-016 files as part of this
repair.

## Verification

Run:

```sh
npm install
npm run build
npm test
uv run pytest -q
uv run ruff check src/weaver tests
uv pip check
uv run python scripts/web_live_proof.py --port 8790
uv run python scripts/web_live_proof.py --offline-shell --port 8792
uv run python scripts/web_live_proof.py --worker-upgrade --port 8794
```

Then inspect the built fake-mode app at desktop and phone widths. Check the
rail open/collapse controls, empty state, active conversation, transcript,
composer, long-message scrolling, and browser/PWA icon. Record observations
without declaring Plan 013 accepted.

## Final gate

Mechanical checks and independent review only provide evidence. The owner
inspects the browser and decides whether Plan 013 closes.
