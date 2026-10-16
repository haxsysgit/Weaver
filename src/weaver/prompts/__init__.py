"""Reviewed, packaged personality components shared by the reading calls."""

from importlib.resources import files


def _component(name: str) -> str:
    text = files(__package__).joinpath(f"{name}.md").read_text(encoding="utf-8").strip()
    return f"<{name}>\n{text}\n</{name}>"


WEAVER_PERSONALITY = _component("identity") + "\n\n" + _component("soul")
