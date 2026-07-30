"""Shared helpers for the conversation module."""

from __future__ import annotations

import uuid
from datetime import datetime, timezone


def uid() -> str:
    return uuid.uuid4().hex


def now() -> str:
    return datetime.now(timezone.utc).isoformat()
