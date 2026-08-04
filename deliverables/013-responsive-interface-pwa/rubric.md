# Plan 013: rubric

Acceptance checklist against the plan outcome and learning-gate decisions.

| Criterion | Status | Evidence |
| --- | --- | --- |
| Vanilla web components, no framework/build step | Done | `static/components/*.js`, no node_modules runtime, README |
| Shadow Slave theme (tokens contract) | Done | `theme.css` + `tests/web_js/theme.test.mjs` (19 node tests pass) |
| Sidebar 260px + chrome rows + rail + collapse | Done | `weaver-sidebar.js`; live-proven |
| Message actions beyond copy (regenerate = real send/cancel) | Done | `weaver-chat.js`; live-proven turn |
| Settings modal local-only (no hosted rows) | Done | `weaver-settings.js`; Esc + focus live-proven |
| Markdown parse-to-nodes, no sanitizer dep | Done | `weaver-markdown.js`; node-tested; textContent boundary |
| Responsive <768px drawer | Done | mobile bar + `open` attr; 390x844 live-proven |
| Installable PWA | Done | manifest + root-scope SW; 0 Chrome installability errors; offline reload proven |
| Backend consumed as-is (no new capability) | Done | API contract tests unchanged (29 web tests) |
| Private sources stay private | Done | staged-diff scans zero matches |
| Independent review | Dispatched | `review-ledger.md` |
| Owner final decision | Pending | `decision.md` |
