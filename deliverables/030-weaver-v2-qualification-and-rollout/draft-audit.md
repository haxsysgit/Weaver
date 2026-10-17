# Plan 030 draft audit

Status: read-only audit for the drafted Plan 030. No implementation, no paid
model call, no deploy, no push, and no Reader Trial was performed.

Date: 2026-10-17
Baseline commit: `1d32797` (Plan 029 close). Working tree had unrelated
skill, deliverable, and learning-lab changes; none were touched.

## Why this audit exists

The owner asked for the send button to be fixed, the product to be audited,
and the product to be deployed. The audit found that the first two are real
product issues and that the third is currently unsafe. This file records the
evidence so Plan 030 can be amended before admission.

## Resolution on 2026-10-17

The owner admitted Plan 030 and decided the immediate exposure.

- The public v1.2.1 site is down. Instance `weaver-v1` was stopped, its 20 GB
  data volume was preserved, and the Tailscale Funnel URL no longer answers.
- The old GitHub Actions deploy workflow is disabled.
- The EC2 and Tailscale Funnel deployment is retired.
- The v2 public surface moves to Cloudflare as CP7 inside Plan 030, set up with
  the owner.

The P0 findings about the old public site and the old deploy trigger are
closed. Their Cloudflare equivalents remain in Plan 030. This audit stays as
the pre-admission snapshot.

## Verification actually run

- `.venv/bin/python -m pytest -q`: 628 passed in 381.29 seconds.
- `npx vitest run`: 21 files, 132 tests passed in 61.07 seconds.
- `UV_CACHE_DIR=/tmp/uv-cache uv run ruff check src/weaver tests`: passed.
- `npx tsc --noEmit`: passed.
- `.venv/bin/python -m weaver doctor`: all checks passed.
- Browser probes through Chrome DevTools Protocol against the local fake
  server, the local live server, and the deployed v1.2.1 site.
- Local live BYOK check: saving a key in Settings and typing a draft enables
  the send button; no turn was sent.
- Mobile check at 390x844 with touch emulation: no horizontal overflow, the
  composer and 48x48 send button stay inside the viewport, and a real touch
  sends a fake turn.
- No live DeepSeek turn was completed. The deployed send probe aborted the
  POST before it reached the provider.

## Severity legend

- **P0**: active production risk or release blocker now.
- **P1**: must be fixed or decided before any public deploy.
- **P2**: must be fixed before launch, or explicitly accepted.
- **P3**: polish, docs, or environment.

## Findings

### P0-1: The deployed v1.2.1 site is an open spigot on the owner key

The live site is the v1.2.1 build. Its backend has no per-reader access gate
and the provider falls back to `DEEPSEEK_KEY` when the request carries no
BYOK header. The site is public through Tailscale Funnel. Any visitor can
start a turn against the owner's DeepSeek balance. The v1.2.1 app has no
sponsored allowance and no turn rate limit.

Evidence: the live assets are `weaver-D01JqGeM.js` and
`weaver-BfjopLb8.css`, exactly the v1.2.1 index. `/api/access` returns 404.
The v1.2.1 `open_chat_runtime` builds a `DeepSeekProvider` from
`DEEPSEEK_KEY`, and its `_run_turn` comments say a missing request key falls
back to the server key. A real pointer click on the live send button issued
the expected POST.

Action: either deploy the sponsored v2 build with a valid preflight, or
temporarily restrict or take down the old public surface. Leaving it public
and unqualified is the highest current financial risk.

### P0-2: Pushing now would deploy an unqualified v2

`main` is 20 commits ahead of `origin/main`. The 20 commits are Plans 028
and 029. `.github/workflows/deploy.yml` runs on every push to `main`. A push
would build the new image and replace the live v1.2.1 service.

The current compose defaults are `WEAVER_SPONSORED_ENABLED=0` and
`WEAVER_SPONSORED_PRICE_VALID_UNTIL=2026-10-10`. The price date is already
past. If sponsored stays disabled, readers without BYOK get a disabled send
button. If sponsored is enabled with the default date, the gate refuses with
`stale_price`.

Action: keep Plan 030 work on a release branch, fix the preflight, and do
not push `main` until the launch gate.

### P1-1: Local live `weaver web` cannot send without BYOK

With `DEEPSEEK_KEY` in `.env`, no sponsored configuration, and no browser
key, the local live server returns:

- `GET /api/access`: `enabled: false`, `development: false`,
  `source: "unavailable"`;
- `POST /api/access/consent`: `503 {"code":"disabled"}`;
- `POST /api/conversations/{id}/turns`: `503 {"code":"disabled"}`.

The composer correctly disables submission. The reader sees a disabled send
button. Binding a key in Settings and typing a draft enables the button; this
was verified in the browser without sending.

Action: decide the local live access behavior. Options are a loopback-only
developer voice, an honest first-run path that sends the reader to BYOK, or a
fully configured local sponsored ledger.

### P1-2: The First Nightmare shared-allowance path fails in fake mode

In fake mode the rite still offers "Continue with the shared allowance" and
"I understand. Bind the shared voice". The consent route raises `disabled`
when `runtime.sponsored is None`, so the rite stays on step 3 and shows
"The shared thread could not be bound." The primary first-run path cannot
complete in the mode used for UI review.

The frontend test mocks `acceptSponsoredNotice`, and the backend consent test
uses a configured sponsored client. No test drives the real fake-mode rite
path end to end.

Action: make the rite honest in development and fake modes, and add a real
browser or integration regression for the first-run path.

### P1-3: Sponsored production preflight is missing and stale

- `.env.example` and `docker-compose.yml` default the price valid-until to
  `2026-10-10T00:00:00+00:00`, which is past.
- `SponsoredConfig.enabled` defaults to off.
- `SponsoredAccess` refuses with `stale_price` when the clock passes the
  configured date.
- The reservation is `$0.37` per turn, the daily reader limit is three, and
  the global daily ceiling is `$1`. Under high per-turn settlement, the third
  question can be refused before the daily limit is reached.

Action: add a hard preflight gate: enabled flag, fresh price version and
valid-until, pass secret of at least 32 bytes, funded provider balance, one
real sponsored turn on the release candidate, and a measured
reservation-versus-ceiling test.

### P1-4: The deploy workflow cannot support the rollback plan

`.github/workflows/deploy.yml`:

- runs on every push to `main`;
- has no test job;
- tags the image only `latest`;
- runs `docker image prune -f` after `docker compose up -d`;
- has no health check and no backup.

The old `latest` image becomes dangling, then prune removes it. There is no
versioned image to roll back to. Plan 030 says "retain the previous image",
and the workflow does not.

Action: tag by version and digest, retain the previous image, add a health
check, add a pre-deploy backup, and gate the deploy on a release branch or
tag. The workflow should not be able to deploy unreviewed `main` commits.

### P1-5: The state bundle is not refreshed by deploys

The compose comment says the `novels/`, `.weaver/retrieval/`, and
`.weaver/knowledge/` bundle is scp'd once and deploys only replace the image.
The local library now reaches chapter 3160 and the notebook has Plan 019 and
020 work. The box's exact bundle version is unknown.

Action: record the box's novel, index, notebook, and model versions; compare
them to the release candidate; refresh the bundle if they differ; prove the
deployed reading tools see the expected shelf.

### P1-6: The Funnel client address and network limit are unverified

`_client_address` uses the direct peer address unless
`WEAVER_TRUSTED_PROXY_ADDRESSES` and `WEAVER_ORIGINAL_ADDRESS_HEADER` are set.
Both compose defaults are empty. Behind Funnel the app likely sees the proxy
address for every reader, which collapses the six-per-hour network limit into
one shared bucket.

Action: inspect the real Funnel request headers, configure the trusted proxy
and original address header, and prove two distinct readers do not share a
network bucket. If the header cannot be trusted, use a different abuse
control before public traffic.

### P1-7: The public privacy copy contradicts the product

`README.md` says "The novels never leave the machine." The Plan 029 packet
sends up to 24,000 characters of opened novel passages to DeepSeek on every
grounded turn. The rite discloses this. The README does not.

The live footer also says "Weaver runs locally" on a public server and names
only "messages", not passages.

Action: replace the absolute claim with the real data flow, add a public
privacy page, and make the footer accurate for the deployed surface.

### P1-8: The challenged follow-up is still the weak point

Plan 029's final live proof records one challenged follow-up that failed
closed after the single repair still omitted citation syntax. The Reader
Trials require follow-ups. The plan must not discover this risk during the
trial.

Action: every trial includes at least one challenge turn and one correction
turn. The trial rubric must distinguish a good first answer from a conversation
that can continue.

### P1-9: The 029 compact brief proof is not named in Plan 030

The accepted Plan 029 amendment assigns held-out proof of ambiguous referents,
aliases, character versions, and timeline points to Plan 030. The drafted
Plan 030 says only "held-out development cases" and does not name those
resolution cases.

Action: add a held-out conversation set that exercises aliases, versions, and
timeline shifts through source reading, with no expected-string matching.

### P1-10: No backup, restore, or migration proof exists yet

The conversation database is schema version 3. The box's live database is
older. The deploy replaces the image but the workflow does not back up
`/srv/weaver` or prove a restore. A rollback to v1.2.1 against a migrated
database is unproven.

Action: back up the live state before any deploy, prove restore on a copy,
and prove v1.2.1 compatibility or define the supported rollback point.

### P1-11: The release version is still 1.2.1

`src/weaver/__init__.py` is `1.2.1`. The image tag is `latest`. A v2.0.0
release has no version bump, no versioned image, and no wheel metadata proof.

Action: bump to 2.0.0 during the release-candidate freeze, tag the image by
version and digest, and prove the wheel reports 2.0.0.

### P2-1: The Docker build is not reproducible or least-privilege

`Dockerfile` uses the floating `python:3.11-slim` tag, runs as root, and runs
`pip install .`, which ignores `uv.lock` and resolves every `>=` dependency
at build time. Two builds can contain different code.

Action: pin the base digest, install from the lock file, and run as a
non-root user.

### P2-2: No health endpoint or container health check

There is no `/health` route and no `HEALTHCHECK`. `docker compose up -d`
returns before the app is ready, and the workflow has no smoke check.

Action: add a liveness/readiness route and a compose health check, and make
the deploy fail when health fails.

### P2-3: Logging may carry private content on failure

`agent/turn.py` logs model failures with `exc_info=True`. Provider exceptions
can carry request or response detail. Plan 030's privacy inspection must
prove no prompt, answer, passage, or credential reaches logs.

Action: audit and redact exception logging before public traffic.

### P2-4: Public launch surfaces are incomplete

There is no `robots.txt`, no public privacy page, and no AI-output
disclosure outside the first-run rite. The deployed footer is inaccurate.

Action: add the public privacy page and robots policy, and verify the copy in
the real browser.

### P2-5: Service-worker cache names are fixed

`sw.js` reuses `weaver-shell-v7` across deploys. Old hashed assets remain in
the same cache because only caches with different names are deleted.

Action: include the build version in the cache name and prove an update from
v1.2.1 to 2.0.0.

### P2-6: Security headers are incomplete

The CSP lacks `frame-ancestors 'none'`, `base-uri 'self'`, and
`form-action 'self'`. There is no `X-Content-Type-Options` or
`Referrer-Policy`.

Action: add the headers and verify the PWA and DeepSeek links still work.

### P2-7: Docs are stale across the repository

- `README.md`: 3148 chapters (library reaches 3160), BYOK-only onboarding,
  `uv run weaver --fake` (the real command is `weaver web --fake`), and the
  "novels never leave" claim.
- `CONTRIBUTING.md`: 501 tests (now 628), `uv run weaver --fake`, and a Ruff
  command that is not in the project venv.
- `docs/architecture.md`: "current as of plan 018", history ends at Plan 018,
  says 3148, and omits Plans 028 and 029.
- `docs/vision.md`: "Current Project Reality" says 3148 and the old surface.
- `docs/WEAVER_WEB_PRODUCT_DIRECTION.md`: says Weaver gives reading links,
  while the chapter-link decision is out.
- `TODO_future.md`: says "drafted Plans 028-030", while 028 and 029 are
  closed.
- `weaver doctor`: prints "aliases and selectable models match v1".
- `docker-compose.yml`: comments and host example still say v1.

Action: update the docs in the Plan 030 release-candidate slice.

### P3-1: Boot failure can leave the Spell stuck in "reaching"

`SpellSurfaceChatApp.sendMessage` sets the spell state and announces before
`chat.sendMessage` checks `conversationId`. If boot failed, the call returns
early and the animation can stay in "reaching".

Action: guard the wrapper on a ready conversation, or have the controller
report a rejected send.

### P3-2: Enter sends during IME composition

`Composer.handleKeyDown` does not check `event.isComposing`. An IME user can
submit while composing.

Action: return when `isComposing` is true.

### P3-3: Access-status failures are silent

`refreshAccess` swallows errors. If `/api/access` fails, the composer can stay
enabled and the turn then returns 503.

Action: show a safe status message and a route to Settings.

### P3-4: Retry does not route access failures to Settings

The recovery panel offers Retry for a 503 access failure. Retrying cannot
succeed until the reader binds a key or the allowance resets.

Action: distinguish access failures from stream failures and offer the
right action.

### P3-5: `uv` cache permission breaks the documented floor here

`uv run pytest` fails on `/home/hax/.cache/uv/sdists-v9/.git` with
`Permission denied`. `UV_CACHE_DIR=/tmp/uv-cache uv run ...` works. The
documented floor should use a working command or the environment should be
fixed.

### P3-6: Local sponsored setup would hit the secure cookie

The sponsored pass cookie is `Secure` and `SameSite=Strict`. A local HTTP
localhost sponsored setup would not retain it, so each request would mint a
new pass and the daily limit would not hold. If local sponsored is chosen,
add a loopback-only exception or use HTTPS.

### P3-7: Plan and index status drift

Resolved in the 2026-10-17 amendment: the Plan 030 doc, `learning.md`, and
`results.md` now record the Plan 028 and 029 closures and the non-admitted
Plan 029.5. The `plans/README.md` execution order still describes Plans 028
and 029 in the future tense and should be cleaned up when the plan closes.

This audit does not change the plan status ladder.

## What this means for admission

The reading and conversation code is green. The send button failure is real,
but it is an access and first-run failure, not a broken component. The deploy
is unsafe until the sponsored preflight, the release branch, the image
retention, the state bundle check, and the proxy configuration are addressed.

No Reader Trial was run. No trial can be accepted from this audit. The
recommended admission scope is the amended Plan 030 with the gates listed in
the plan doc.
