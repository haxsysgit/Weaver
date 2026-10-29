"""Shared test setup."""

import pytest


@pytest.fixture(autouse=True)
def _owner_key_switch_off(monkeypatch):
    """The local owner switch lives in the owner's .env. Some tests load that
    file into the environment, so clear the switch for every test; a test
    that needs it sets it itself."""
    monkeypatch.delenv("WEAVER_LOCAL_OWNER_KEY", raising=False)
