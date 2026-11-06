# Draft: Plan 039, Weaver's home on the web

Status: drafted 2026-11-06 in the handoff folder. Not admitted.
Depends on: Plan 037 closed (038 optional). Must finish before the AWS free
plan ends, about 2027-02-14.

## Goal

Give Weaver a real, stable, safe home on the public web: its own domain, a
host chosen on evidence, a staging copy, backups, monitoring and proper
secrets, then the first public deploy since v1.2.1.

## Why it matters

v2.0.0 and everything after it has only ever run on the owner's machine.
Readers cannot use Weaver until it is online. The AWS free plan that hosts
the stopped EC2 box ends around 2027-02-14, so the host decision has a
deadline.

## What we want to achieve

### 1. A domain

- A domain on Cloudflare. Not `.ss`. `.ai` is about $80 a year; check `.app`
  and `.ink` and their prices. **The owner chooses and buys it**; agents
  never purchase.

### 2. A host, decided on evidence

- Compare at least: keeping AWS EC2 (after the free plan), a small VPS, and
  running from the owner's machine through Cloudflare Tunnel. Weigh monthly
  cost, the Qdrant index and SQLite on disk, the weekly library refresh, the
  embedding work, uptime, and how much the owner has to look after it.
- Cloudflare Tunnel in front of whichever host, so no inbound ports are open.
- The decision is the owner's; the plan gives a recommendation with numbers.

### 3. Staging

- A staging copy of the app on its own subdomain that mirrors production,
  used for every deploy before it goes live, with fake mode or a tight spend
  cap.

### 4. Backups

- Scheduled backups of the SQLite database (threads, preferences, opinions,
  memory) and the retrieval index, off the host, with a tested restore. The
  private library (`novels/`) is backed up privately, never to a public
  place.

### 5. Monitoring

- Uptime checks, error alerts, and a daily spend view for the sponsored
  allowance (the Plan 028 limits: three sponsored questions per reader per
  UTC day, one active sponsored turn, a $1 global daily ceiling, a manually
  funded $10 wallet; no automatic top-up, no silent fallback).
- Privacy-light analytics only if the owner wants them (umami-style).

### 6. Secrets

- The DeepSeek key and any other secret held in a secrets manager (AWS
  Secrets Manager if on AWS, following the AGENTS.md secret-safety rules) or
  the host's equivalent; never in the repo, never in logs.
- `WEAVER_LOCAL_OWNER_KEY` is never set on a shared or tunnelled server.

### 7. The first public deploy since v1.2.1

- Deploy the accepted build to staging, check it, then to production, with
  the owner's go-ahead at each step. Re-enable the deploy workflow only when
  the owner says so.

## What success looks like

- Weaver is reachable at the owner's domain over HTTPS, through the tunnel,
  from a phone on mobile data.
- The host decision is recorded with costs and reasons, made before the AWS
  free plan ends.
- Staging exists and every production deploy went through it.
- A backup was restored on a clean machine and the app ran from it.
- An alert fired in a deliberate test (server down, spend ceiling reached).
- No secret appears in the repo, the image, or any log; checked.
- Per-device preferences, the spoiler boundary and the sponsored limits work
  for two different devices at once in production.
- The owner accepts.

## Out of scope

- Accounts, payments, ads, native apps (backlog).
- New product features.

## Constraints

- No deploy, DNS change, purchase or workflow re-enable without the owner.
- Infrastructure as code where practical (AGENTS.md AWS guidance); no em
  dashes in AWS resource names or descriptions.
