# Results

## Status

Slice 2 is in progress. Production code has not started.

## V1 baseline evidence

Captured the untouched v1 production surface in fake mode at:

- `private/design-evidence/025/v1-baseline/320x568.png`
- `private/design-evidence/025/v1-baseline/360x800.png`
- `private/design-evidence/025/v1-baseline/390x844.png`
- `private/design-evidence/025/v1-baseline/412x915.png`
- `private/design-evidence/025/v1-baseline/1440x900.png`

The private captures are git-ignored and contain no novel text, key, chat, or
provider response.

## Measured asset baseline

| Asset | Raw bytes | Local gzip bytes |
| --- | ---: | ---: |
| Main JavaScript | 875,344 | 237,920 |
| Main CSS | 136,393 | 25,245 |
| Whole committed dist directory | 1,026,044 | not measured as one transfer |

## Renderer baseline from the production source

- three batched WebGL render objects;
- 4,500 star points;
- 91 divine-light points;
- up to 3,400 line segments;
- three shader programs implied by the three shader materials;
- DPR fixed at 1;
- manual animation loop capped near 30 renders per second;
- animation skipped while the document is hidden or the canvas is paused;
- geometries, materials, renderer, listener, resize frame, and animation frame
  explicitly cleaned up.

## Pending phone evidence

The Redmi Note 14 trace remains outstanding. Numeric frame-time and long-task
limits will be proposed from that trace and require owner acceptance before
production implementation begins.
