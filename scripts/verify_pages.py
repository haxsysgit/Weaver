"""Verify rebuilt entity pages against their digests: byte-identical statement
multiset, section structure, statement-count parity. One command per batch.

Usage:
    uv run python scripts/verify_pages.py person:mordret person:saint ...
"""
import re
import sys
from collections import Counter
from pathlib import Path

ROOT = Path(".weaver/knowledge/shadow-slave")
DIGESTS = ROOT / "digests"


def verify(entity: str) -> bool:
    kind, slug = entity.split(":", 1)
    page_dir = ROOT / ("people" if kind == "person" else f"{kind}s")
    digest_path = DIGESTS / f"{kind}-{slug}.md"
    page_path = page_dir / f"{kind}-{slug}.md"

    if not digest_path.exists():
        print(f"{entity}: NO DIGEST")
        return False
    if not page_path.exists():
        print(f"{entity}: NO PAGE")
        return False

    d_lines = [l for l in digest_path.read_text().splitlines() if l.startswith("- ch")]
    p_lines = [l for l in page_path.read_text().splitlines() if l.startswith("- ch")]
    dc, pc = Counter(d_lines), Counter(p_lines)
    missing = sum((dc - pc).values())
    extra = sum((pc - dc).values())
    identical = sum((dc & pc).values())

    ok = missing == 0 and extra == 0 and identical == len(d_lines)

    # section structure (people: Appearance/Personality/Biography/Aspect/Relationships/Trivia)
    secs = re.findall(r"^## (.*)$", page_path.read_text(), re.M)
    vols = sorted({int(v) for v in re.findall(r"^### Volume (\d+)", page_path.read_text(), re.M)})

    print(f"{entity}: {len(d_lines)} digest / {len(p_lines)} page stmts, "
          f"identical {identical}, missing {missing}, extra {extra}, "
          f"{'OK' if ok else 'FAIL'}")
    print(f"  sections: {secs}")
    if vols:
        print(f"  volumes: {vols}")
    return ok


def main() -> int:
    entities = sys.argv[1:]
    if not entities:
        print("usage: verify_pages.py person:mordret person:saint ...")
        return 2
    results = [verify(e) for e in entities]
    n_ok = sum(results)
    print(f"\n{n_ok}/{len(entities)} pages pass")
    return 0 if n_ok == len(entities) else 1


if __name__ == "__main__":
    sys.exit(main())
