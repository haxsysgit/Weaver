# Plan 021 — decision

**Status:** Accepted and closed 2026-08-17.

**Reason:** Owner reviewed the deployed UI on a real phone and confirmed
the First Nightmare setup flow and the mobile drawer behave as intended
("very perfect"). Independent verification passed: npm run build green,
41/41 frontend tests, 516/516 backend suite (stale firecrawl-key test
fixed under Plan v1 fc01fa6), leak audit clean, frontend-only boundary
respected. Deployment shipped via the v1 CI pipeline to
weaver.platy-halfmoon.ts.net.
