# Dual-file API teaching pattern

When teaching an API concept (HTTP requests, SDK usage, error handling), create two files
that do the same thing at different abstraction levels. This lets the learner see both
the mechanism and the convenience layer side by side.

## The pattern

```
<concept>_raw.py      ← raw HTTP, no SDK. Shows every byte of the request/response.
<concept>_sdk.py      ← SDK wrapper. Same result, less code. Points at the raw version.
```

## Rules

1. Both files must produce the same output for the same input.
2. The raw file always includes error handling (try/except) from the start — raw HTTP errors
   are cryptic without it.
3. The SDK file starts WITHOUT error handling. Let the learner discover the traceback explosion,
   then add typed exception handling (AuthenticationError, RateLimitError, etc.) together.
   This teaches why SDKs have typed exceptions — the discovery is the lesson.
4. Both files must have the same 4-6 line header comment citing the lesson path.
5. Both files must use `load_dotenv()` at the top so the .env file works without manual export.
6. Install dependencies via `uv add` in the project venv, not pip install globally.

## Why it works

The learner sees that the SDK is just a wrapper around raw HTTP. When they intentionally
use a wrong key, they discover error handling differences between the two approaches.
The raw version shows them the HTTP status code dance. The SDK shows them typed exceptions.
Both matter for real API work.

## Common pitfall

.env files are NOT read by os.environ. Always add `from dotenv import load_dotenv; load_dotenv()`
at the top of every API script. This is the #1 "my key is in .env but Python can't see it" bug.
