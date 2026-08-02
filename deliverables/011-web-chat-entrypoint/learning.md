# Learning Note: Local browser chat entrypoint

## Gate status

**Unadmitted. Appraisal and owner confirmation are required before browser
implementation.**

Plan 010 is accepted and closed. The checkpoint covering Plans 001 to 010 is
complete. Those facts allow Plan 011 learning work, but they do not admit its
runtime, API, or browser build.

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
2. Which useful behaviours belong in Plan 013 instead?
3. Which behaviours conflict with Weaver's identity or privacy boundary and
   should be rejected?
4. Which desktop and mobile states could not be proven?
5. Does the proposed one-column browser proof still cover the smallest useful
   conversation flow?

## Required owner decision

After the sanitized matrix, decision table, and Weaver state map are ready,
stop. The owner confirms or corrects the behaviour decisions. Only that
decision admits browser implementation.
