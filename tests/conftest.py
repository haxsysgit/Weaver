"""Shared test setup."""

import pytest


@pytest.fixture(autouse=True)
def _owner_key_switch_off(monkeypatch):
    """The local owner switch lives in the owner's .env. Some tests load that
    file into the environment, so clear the switch for every test; a test
    that needs it sets it itself."""
    monkeypatch.delenv("WEAVER_LOCAL_OWNER_KEY", raising=False)


@pytest.fixture(autouse=True)
def _private_project_root(monkeypatch, tmp_path_factory):
    """The app finds its shelf, index, and refresh status from
    WEAVER_PROJECT_ROOT or the current folder. Point it at an empty folder
    so no test reads the owner's real library (Plan 031 review); a test
    that needs a shelf builds one and sets the variable itself."""
    monkeypatch.setenv("WEAVER_PROJECT_ROOT", str(tmp_path_factory.mktemp("project")))
