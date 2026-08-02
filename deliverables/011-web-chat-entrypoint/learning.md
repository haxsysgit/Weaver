# Learning Note: Local browser chat entrypoint

## Gate status

**Admitted for implementation. Owner confirmed the behaviour decisions on
2026-08-02.** The appraisal ran against the owner's signed-in ChatGPT Plus
profile (dark theme): screenshots plus a live dev-style extraction
produced the design reference
(`deliverables/011-web-chat-entrypoint/chatgpt-ui-design-reference.md`)
with measured values, and the owner accepted the adopt/skip list. The
owner also confirmed the entrypoint stays plain HTML/CSS/JavaScript with
no frontend framework and no build step; a framework decision, if any, is
deferred to Plan 013. Gate 1's fixed-scope probe list was superseded by
the owner-captured screenshots and the extractor pass (recorded in
results.md).

## Observation

No current ChatGPT UI observation has been recorded yet. No authenticated
browser session has been opened for this plan.

## Appraisal tool decision (owner-approved 2026-08-02)

- The draft specified Crawl4AI for the appraisal. The executor pushed back:
  Crawl4AI is a scraping framework, and this gate needs an interactive
  visible browser with personal sign-in, fixed viewports, screenshots, and
  accessibility-role queries, which is Playwright's native model.
- Playwright 1.62 with Chromium was installed in the project environment
  (pinned `playwright>=1.62.0` in the dev dependency group) and the
  appraisal command was built on version-verified contracts.
- The appraisal tooling was retired 2026-08-02 after the design reference
  was produced: the staged probe checklist guessed the wrong roles
  (composer name is "Chat with ChatGPT", "New chat" is a link, not a
  button) and the owner's screenshots plus a live dev-style extraction
  from the signed-in profile were more reliable. `chatgpt_appraisal.py`,
  `chatgpt_extract.py`, their tests, `playwright-contracts.md`, and the
  Playwright dev dependency were deleted; raw captures stay owner-only
  under `.weaver/research/chatgpt-ui/`. Playwright can return as a dev
  tool if a later plan needs browser automation.

## Appraisal contract

- Use a visible managed Chromium profile named `weaver-chatgpt-appraisal`.
- The owner signs in personally.
- Use one harmless synthetic prompt in a temporary chat.
- Inspect only the fixed desktop and mobile states in the canonical plan.
- Do not inspect personal chats, personal sidebar titles, or novel text.
- Store authenticated captures owner-only under
  `.weaver/research/chatgpt-ui/<timestamp>/`.
- Commit only sanitized observations, decisions, and original Weaver diagrams.
- Show private capture and profile paths after the owner accepts the appraisal.
  Offer cleanup, but never delete automatically.

## Questions this gate must answer

1. Which ChatGPT behaviours should Weaver adopt in Plan 011?
   **Answered by the adopt/skip list in the design reference (accepted
   2026-08-02):** sidebar + centered 768 px column + black canvas, capsule
   composer with a send arrow, user bubble, bare assistant text, action
   rows, hairlines, cards only for file-like results, palette verbatim.
2. Which useful behaviours belong in Plan 013 instead?
   **Voice/mic/dictation, the intelligence selector, hosted-service
   settings rows, PWA polish.** The framework decision also lands at 013.
3. Which behaviours conflict with Weaver's identity or privacy boundary and
   should be rejected?
   **Everything implying a hosted multi-owner service; no CDN, no CORS, no
   third-party assets; local-only 127.0.0.1.**
4. Which desktop and mobile states could not be proven?
   **Sub-768 px responsive collapse was only partially measured (the 52 px
   rail is confirmed). The rest of the fixed-state list was superseded by
   the owner's captures and the extractor pass.**
5. Does the proposed one-column browser proof still cover the smallest useful
   conversation flow?
   **Yes: one conversation, streaming, stop, cancel, reload, new chat.
   Confirmed by the owner when admitting implementation.**

## Required owner decision

**Given on 2026-08-02: the owner confirmed the adopt/skip list, the vanilla
HTML/CSS/JS boundary, and directed the build to start.** That decision admits
browser implementation. The final owner gate after implementation, tests,
and independent review remains outstanding.
