# Owner Decision

## Status

**Accepted by the owner, 2026-11-18** ("Accept and close"). Built,
checked and closed on the same day.

## What the owner was asked

Plan 035.5 made Weaver Linux-first after the move to Ubuntu: the weekly
refresh as a systemd user timer with desktop alerts, a model cache that
survives reboots, Linux docs, LF line endings in the repository, and
owner-only file modes on the private library and state. Backend 1143
passed (Linux baseline 1118), frontend 185, the build byte-identical to
the committed bundle, `library inspect` 0 issues. Accept or reject.

## Owner decisions taken during the plan

- Enable the timer: yes (first run Saturday 2026-11-21 10:00).
- Fix line endings: yes (the 49 CRLF-only files restored, an LF rule in
  `.gitattributes`, 12 committed files renormalized; the owner's edited
  files left as they are).
- Tighten file modes: yes.
- A launcher for the DSH `web` profile: dropped (the desktop app is enough).

## Gaps accepted

- The timer has not fired yet; the first run also downloads the 1.3 GB
  dense embedding model into the new cache.
- No independent reviewer ran; the review ledger is the executor's own.
- Linger stays off: the timer runs only while the owner is logged in.
