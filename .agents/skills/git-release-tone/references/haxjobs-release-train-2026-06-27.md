# HaxJobs release-train correction, 2026-06-27

Use this when Arinze asks for a fast version/tag/release wave in HaxJobs.

## What happened

Arinze first asked for 11 batches from `v0.1.8` to `v0.2.9`, with each commit tagged and each tag released. After the first interpretation, he corrected the desired shape:

- create 11 real commits
- create 11 annotated tags
- create exactly 1 GitHub release, at the final tag
- commit messages should be detailed
- annotated tag messages should also be detailed
- only the GitHub release title needs to be a one-liner

## Durable workflow lesson

When a user says “commit and tag in N batches,” do not assume “release per tag.” Ask or default to the cheaper public surface:

1. compose real logical commits
2. annotate each tag with meaningful notes
3. create one final GitHub release unless the user explicitly asks for per-tag releases
4. verify `git log`, `git tag`, `git push`, and `gh release view`

## HaxJobs-specific note

For the cleanup wave, the final public release was created at `v0.2.8`, while intermediate tags marked milestones. Later discussion clarified the next step is `v0.2.9` as pre-`v0.3.0` public cleanup.
