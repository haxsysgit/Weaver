# Import-safe draw.io XML notes

Session lesson: XML well-formedness is not enough. A hand-authored `.drawio` file parsed with Python `xml.etree.ElementTree` but still failed in draw.io with `d.setId is not a function`.

## Real verification

Use the draw.io CLI when available:

```bash
drawio --export --format png --output /tmp/hermes-drawio-check.png path/to/file.drawio
test -s /tmp/hermes-drawio-check.png
```

Treat a successful PNG export as stronger evidence than XML parsing.

## Safer hand-authored shape

When making `.drawio` XML by hand, prefer:

- `<mxfile host="drawio" version="30.2.4">`
- `<diagram name="Readable Name">` with no custom `id`
- one root layer: `<mxCell id="0" />`, `<mxCell id="1" parent="0" />`
- all visual cells and edges with `parent="1"`
- visual grouping via large rounded rectangles, not nested child cells
- simple `rounded=1;whiteSpace=wrap;html=1;...` styles
- integer stroke widths (`strokeWidth=2`, not `1.5`)
- line breaks as `&#xa;`
- no raw `<font>` tags, even XML-escaped ones, unless draw.io itself generated them

## If import/export fails

Simplify in this order:

1. Remove custom `<diagram id="...">`.
2. Remove nested parents inside swimlanes/containers.
3. Replace swimlanes with rounded group rectangles if needed.
4. Remove HTML font tags and edge labels.
5. Rename risky IDs (`map`, reserved-ish names, IDs with punctuation).
6. Remove Unicode arrows/em dashes from labels.
7. Remove optional graph attributes such as `adaptiveColors` if still failing.
8. Re-run real `drawio --export`.

## Why this matters

Arinze specifically wants clean, non-scattered diagrams that open in draw.io without drama. Do not report success from XML parsing alone. If the user reports a draw.io runtime error, rebuild to a boring import-safe shape and verify by actual export.
