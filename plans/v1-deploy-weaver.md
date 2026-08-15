# Plan v1: Deploy Weaver

> **Executor instructions:** Take the local Weaver app and put it on the
> internet for the owner and a few friends: Docker on an AWS t3.small,
> CI/CD for seamless updates, HTTPS via Tailscale Funnel (no domain),
> BYOK with per-browser device scoping. The one rule: private story data
> (novels/, .weaver/) never leaves the owner's machine in any public or
> committed form; only the prod bundle goes to the server.

## Status

- **Tooling:** repo commands via `uv` (pytest, ruff, pip check); docker +
  docker compose; GitHub Actions; AWS console/CLI; tailscale.
- **State:** drafted (awaiting owner admission).
- **Depends on:** Plan 018 closed (2026-08-14) — repo cleanup and docs
  done, retrieval audit recorded the risks this plan sequences.
- **Priority:** P1
- **Effort:** L
- **Risk:** Medium — production exposure, key handling, index/state
  provisioning, quantization changing embeddings. Each has a mitigation
  below.
- **Budget:** estimate ~200-400k tokens across the plan, mostly in the
  quantization + index rebuild slice (live model calls for quantization
  validation only; everything else fake/deterministic first). Subagents
  used where budget allows; solo fallback.

## Owner direction (locked decisions)

1. **v1 is public but friends-only** (2026-08-14): owner + technical
   friends, BYOK with zero pooled-key work. Portfolio goal: learn
   production handling (AWS, Docker, CI/CD, environments).
2. **Host: AWS t3.small on the new-account free plan** (2026-08-14):
   $100 credits + 6-month free plan (account created 2026-08-14).
   Reassess at month 6: pay, migrate to Oracle Always Free or Hetzner,
   or shut down. ECS/Fargate stays deferred (TODO_future learning item).
3. **HTTPS: Tailscale Funnel, no domain** (2026-08-14): free ts.net URL
   with real TLS. No Caddy needed; funnel terminates TLS at the edge.
   No domain purchase. The URL is less pretty; a domain is a two-line
   change later.
4. **Identity: no accounts** (2026-08-14): device id minted in the
   browser (localStorage), sent with requests, conversations scoped by
   it. Clearing site data orphans chats (data stays on server, unclaimed).
   Auth and multi-user stay deferred (TODO_future).
5. **BYOK plumbing is a real slice, not zero work** (2026-08-14): key
   stored per browser (localStorage), sent per turn, used for that
   request only, never logged. DeepSeek only for v1.
6. **Deploys: compose-first** (2026-08-14): `docker compose up -d
   --build` on push, seconds of downtime per deploy. Blue-green
   deferred; seamless updates means CI/CD that deploys on push, not
   zero-downtime.
7. **Quantized embeddings (2026-08-10, TODO_future)**: v1 host runs the
   int8-quantized bge-large onnx model; the deep-dive lesson is part of
   the v1 build. Owner accepts reduced retrieval accuracy; the loop
   never depended heavily on RAG results.
8. **State stays private** (locked 2026-08-10, confirmed 2026-08-14):
   only the prod bundle (corpus + retrieval index + knowledge, ~165MB)
   ships to the server. research/, appraisal/, receipts/ never leave
   the machine. Nothing private enters git, the image, or CI.
9. **Reading stays server-side** (2026-08-10): the web app never serves
   chapter text; it holds conversation about the story. Blockquote
   quoting for prose (plan 018).

## Scope

- Prod-bundle tool: export exactly what the server needs (corpus,
  retrieval index, knowledge notebook), sized and verified, then ship to
  the box over scp/rsync over SSH (via tailscale or public IP).
- BYOK plumbing: per-browser key storage (localStorage), per-request key
  injection into the model layer, frontend settings UI, no-log
  guarantee (assert in tests).
- Device-scoped conversations: device id in localStorage, header on all
  API calls, server filters conversations by device, creation default
  per device.
- Quantization learning slice: int8 bge-large onnx; rebuild the index
  with the quantized model; measure hit-rate delta on the existing
  evaluation set; record the lesson.
- Docker: Dockerfile (multi-stage: frontend build + python wheel),
  docker-compose.yml (app + volume for state), healthcheck, restart
  policy, non-root user, .env on the box.
- CI/CD: GitHub Actions on main — pytest + frontend tests + build, then
  SSH deploy (compose pull/up) to the box.
- Funnel + firewall: tailscale on the box, funnel to the app, ufw or
  security-group rules, secrets via .env on the box (never in git).
- Live smoke: owner + one friend test; first v1 release recorded.

## Out of scope

- Auth, accounts, multi-user UI, rate limiting/abuse hardening beyond
  basics (friends-only; a stranger burning their own BYOK key costs
  nothing).
- Pooled keys, subscriptions, billing.
- Blue-green/zero-downtime deploys; ECS/Fargate; Kubernetes.
- Domain purchase (funnel is the v1 surface; a domain is a later
  two-line change).
- Real monitoring/alerting beyond compose healthcheck + basic logs.
- Reader Trials (they remain the finished-product bar, after v1).
- All TODO_future items not listed above.

## Deterministic proof / verification floor

1. `uv run pytest` green (501 tests) + `npm run test` + `npm run build`.
2. Prod-bundle script produces a bundle of the expected size and shape
   (corpus + retrieval + knowledge only; no research/appraisal/
   receipts); a grep-based check proves nothing private is included.
3. Fake-mode web app runs from the built image locally (`docker compose
   up` + curl /) before anything goes near the box.
4. BYOK tests: key sent per request is used and not logged (assert no
   key in logs/receipts); missing key on a live turn fails before any
   call.
5. Device scoping test: two device ids see disjoint conversation lists.
6. Live smoke: owner chat on the funnel URL, real DeepSeek key, one
   turn answers with chapter references; friend does the same.
7. CI/CD: push to main triggers the pipeline; the box picks up the new
   image and serves it (curl version marker).
8. No private content in: git history of the plan, the image layers,
   CI logs, the box's public surface.

## STOP conditions

- Quantization degrades retrieval measurably worse than the accepted
  loss (owner accepted reduced accuracy, but a broken index is not
  "reduced") — stop and reassess before shipping.
- Index rebuild exceeds budget or hangs — stop, don't force.
- Any private content (chapter text, receipts, reasoning) appears on a
  public surface or in git — stop, rewind, fix before continuing.
- Funnel free tier can't carry the app (bandwidth/uptime) — stop and
  present the paid alternatives.
- Cost surprises on AWS beyond the free plan — stop and confirm with
  owner.

## Slices

1. **Plan and admit** — this doc, learning gate (quantization lesson
   plan), index rows, deliverable scaffold, admission commit.
2. **Prod bundle tool** — script that exports corpus + retrieval +
   knowledge to a staging dir with a manifest and size report; verify
   nothing private leaks; fake-mode smoke.
3. **BYOK + device scoping** — backend (per-request key, device header,
   conversation filtering) + frontend (key in localStorage, settings
   UI) + tests for both.
4. **Quantization lesson** — int8 bge-large onnx; rebuild index;
   measure hit-rate delta on the evaluation set; record the deep-dive
   lesson in the deliverables and learning-lab.
5. **Docker** — multi-stage Dockerfile, compose file, healthcheck,
   non-root, volume for state; verify locally with fake mode.
6. **CI/CD** — GitHub Actions workflow (test → build → deploy via SSH);
   version marker endpoint for smoke checks.
7. **Funnel + box setup** — AWS t3.small up, tailscale + funnel, ufw/
   security group, .env on the box, state bundle shipped and verified.
8. **Live smoke and close** — owner + friend test on the funnel URL;
   review; owner decision recorded; close.
