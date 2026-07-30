# Draw.io CLI and Skill Reference

Quick notes from the June 2026 session setting up drawio for Hermes.

## Stack
- draw.io desktop CLI v30.0.4 (local) / v30.0.4 (Archilles VPS)
- drawio-skill v1.14.0 (Hermes skill, installed via manual cp from git clone)
- drawio MCP server (jgraph/drawio-mcp) -- 3 tools: open_drawio_xml, open_drawio_csv, open_drawio_mermaid

## Installation

### draw.io CLI (Ubuntu)
```bash
# Download latest .deb from https://github.com/jgraph/drawio-desktop/releases
sudo dpkg -i drawio-amd64-*.deb
# Headless servers need xvfb
sudo apt install xvfb
xvfb-run -a drawio --version  # verify
```

### drawio-skill (Hermes)
```bash
# Clone and copy manually (piping 'yes' to 'hermes skills install' corrupts the category name)
git clone https://github.com/Agents365-ai/drawio-skill.git /tmp/drawio-skill
cp -r /tmp/drawio-skill/skills/drawio-skill ~/.hermes/skills/drawio-skill
chmod +x ~/.hermes/skills/drawio-skill/scripts/*.py
```

### drawio MCP server (wired to Hermes)
```bash
# Install globally
npm install -g drawio-mcp
# Add to Hermes (confirm tools with 'y' piped)
echo "y" | hermes mcp add drawio --command drawio-mcp
```

## Export Debugging

When `drawio --export` fails silently:
1. Test with a minimal one-shape file first. If it works, the issue is in your XML.
2. The working syntax: `drawio --export --format png -o out.png in.drawio`
3. Avoid `--scale`, `--crop`, `--page-index` flags -- they caused silent failures in this environment
4. Common XML issues: `<mxCell parent="...">` referencing non-existent parent IDs. Swimlane children must have `parent="swimlaneId"` where that swimlane exists in the same root.

Viewing:
- `drawio file.drawio` opens the full GUI editor
- `xvfb-run -a drawio --export ...` for headless servers
- Upload to https://app.diagrams.net for browser-based editing

## drawio-skill vs drawio MCP server

| | drawio-skill | drawio MCP |
|---|---|---|
| What it does | Generates complete diagrams from descriptions | Opens GUI editor from code/XML/CSV/Mermaid |
| How agent uses it | Skill loaded into session, agent writes XML and exports | Agent calls MCP tools to interact with GUI |
| Use case | "Draw a FRAME architecture diagram" | "Add a new node to this diagram" |
| Requires | draw.io CLI installed | draw.io CLI installed + MCP server on PATH |
