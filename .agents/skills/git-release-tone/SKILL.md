---
name: git-release-tone
description: Use when committing, tagging, or writing release messages for Hax projects. No feat/fix prefixes, casual gen-z dev-team tone, direct wording.
---

# Git Release Tone

HaxJobs release-train note: when Arinze asks for many commits/tags, do not assume many GitHub releases. See `references/haxjobs-release-train-2026-06-27.md`: prefer detailed commits + annotated tags, with one final GitHub release unless explicitly requested otherwise.

## Rules

- Never use conventional commit prefixes like `feat:`, `fix:`, `chore:`, `docs:`.
- Sound like a dev talking to the team, not marketing copy.
- Keep the language simple, direct, and slightly casual.
- Lead with the problem, the vibe check, or the release point.

## Message Shape

For design/structure/cleanup commits:

```
<short first line that frames the release>
i didn't like <what felt off>, so i changed it:
- <change 1>
- <change 2>
```

That phrasing is optional — not house style for every commit.

## Content Priorities

- Open with what landed, what changed, or what the release is about in plain English.
- If the message benefits from a quick why, include it early. If not, skip it.
- Spend most of the space on the highest-signal changes.

## Length Guidance

- Small commits can be very short.
- Normal commits around four lines.
- Major tagged releases usually want more room: around eight lines.
- Do not force a line count if the message reads worse.

## Release Prep Expectations

- Check whether the repo version should be bumped first.
- Before choosing a tag, check local tags, remote tags, and existing GitHub releases. If the requested tag already exists, do not overwrite/re-tag it casually. Treat it as release history and move to the next patch/minor tag unless the user explicitly asks for a destructive retag.
- When the user asks for a fast release train, clarify the release shape before acting: are they asking for N real commits + N tags, N tags on one commit, and one GitHub release or N GitHub releases? Do not assume. Arinze specifically corrected one HaxJobs release train to: 11 commits, 11 annotated tags, but one GitHub release at the final tag.
- Make each commit and annotated tag message detailed enough to explain what changed; keep only the GitHub release title as the one-liner when the user asks for a speed-run release train.
- Make sure changelog and package metadata match the intended tag.
- For package repos, verify PyPI state too: if GitHub has a tag/release but PyPI is behind, decide whether this is a publish catch-up or a new version. Do not assume the GitHub tag is reusable.
- After pushing a tag/release, verify it from GitHub with `gh release view` or equivalent before reporting success.

## Avoid

- Prefix taxonomies.
- Corporate or polished release voice.
- Long bullet lists inside commit/tag messages.
- Saying "this commit" or "this release" unless needed for clarity.
