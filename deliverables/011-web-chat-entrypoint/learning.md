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
- Playwright 1.62 with Chromium is installed in the project environment
  (pinned `playwright>=1.62.0` in the dev dependency group; the appraisal
  command is built on version-verified contracts, see
  `playwright-contracts.md`). A headless launch was verified after the
  missing chromium-1234 build was installed. The swap adds no web-runtime
  dependencies and Crawl4AI's heavy dev-group install is dropped.
- Contract notes from the verification: `page.accessibility` was removed in
  Playwright 1.57, so probes use `get_by_role(role, name=...)` and tree
  dumps use `page.aria_snapshot()`; headful is viable on this machine
  (X11 display present, no xvfb needed); the profile directory holds
  cookies, so it stays under `.weaver/` and the command never calls
  `cookies()` or `storage_state()`.
- Decision: use Playwright directly, with a managed persistent-context
  profile named `weaver-chatgpt-appraisal`. Playwright remains a
  development-only tool and never a Weaver web-runtime dependency.

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
