# Plan 013 rubric

| Criterion | Status | Evidence |
| --- | --- | --- |
| React 19, Vite, and TypeScript production build | Done | `package.json`, `vite.config.ts`, frontend source |
| TUI and `weaver chat` removed | Done | deleted source/tests, CLI rejection test |
| Vanilla frontend removed | Done | deleted `static/`, `templates/`, and old JS tests |
| Shadow Slave theme and Weaver-native words | Done | sharpened tokens, web geometry, product config, spider seal |
| Real conversation rail only | Done | API-backed list, no dead rows |
| Safe Markdown without raw HTML | Done | pure parser tests and React renderer |
| Send or stop rendered exclusively | Done | component test and live proof |
| Stop disabled during cancellation | Done | component test |
| SSE completion, interruption, and recovery | Done | React tests plus backend API tests |
| Regenerate scoped to the live reply | Done | React test and live proof |
| Fixed viewport and transcript-only scroll | Done | CSS and live long-transcript measurement |
| Desktop rail toggle is clear and visually consistent | Done | Font Awesome staggered-bars/chevron component test and browser proof |
| Mobile drawer below 768px | Done | CSS and 390px live proof |
| Shell-only PWA cache, API network-only | Done | hashed first-install shell, offline reload proof, fake-to-live proof |
| SQLite canonical, one local-storage value | Done | implementation and live proof |
| HaxJobs copy boundary documented | Done | controller hook, product copy, mark slot, custom-product test |
| Packaged install serves React | Done | Hatch artifact rule, asset test, built and installed wheel smoke |
| Full verification floor | Done | build, 289 pytest, 9 Vitest, Ruff, 78-package compatibility check |
| Independent review | Passed | four findings repaired; fresh-context re-review returned PASS |
| Final identity repair | Done | desktop, phone, drawer, and populated transcript inspected on 2026-08-05 |
| Owner final decision | Accepted 2026-08-05 | `decision.md`; owner closed the plan |
