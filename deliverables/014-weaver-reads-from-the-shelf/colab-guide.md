# Colab guide: full-novel index + chunk-size sweep

`scripts/colab_index.py` is self-contained (no weaver imports). Run it on
Google Colab to (a) sweep chunk sizes against the labeled question set and
pick the best, then (b) build the full-novel bge-large index and download
it. One-time job: the novel never changes, so this runs once.

## What you need locally first

1. Zip the novel folder (it is public web-novel text; the private notebook
   stays home):

   ```bash
   cd /home/hax/weaver
   zip -r shadow-slave.zip novels/shadow-slave
   # ~12 MB
   ```

2. Grab the sanitized question set (no notebook internals, just trivia
   questions + expected chapter/line locations):

   ```bash
   cp .weaver/research/retrieval-experiment/questions-colab.json .
   ```

   (Regenerate it any time with the same stripping script if the set
   changes; it is derived from `questions.json` minus `statement_id`.)

3. Copy `scripts/colab_index.py` to your machine (or upload it in the
   notebook below).

## Step-by-step in Colab

1. Open https://colab.research.google.com, New Notebook.
2. Runtime -> Change runtime type -> T4 GPU -> Save.
3. In the first cell, install deps:

   ```python
   !pip install -q qdrant-client fastembed onnxruntime-gpu
   ```

4. Upload `shadow-slave.zip` and `questions-colab.json` via the files
   panel (left sidebar, folder icon). Then unzip:

   ```python
   !unzip -q shadow-slave.zip
   !ls novels/shadow-slave | tail -3   # expect 2801-2900 ... urls.md
   ```

5. Upload `colab_index.py`, then run the sweep (each size builds its own
   temp index, scores the novel arms, deletes it):

   ```python
   !python colab_index.py --novels-dir novels/shadow-slave \
       --questions questions-colab.json --sweep 12,20,30,40 \
       --report /content/report.md
   !cat /content/report.md
   ```

   GPU note: the script auto-picks CUDA when onnxruntime-gpu is present.
   Watch the `indexed N/M chunks` lines; the full novel (~22k chunks at
   12-line target) takes a few minutes on a T4.

6. Decide the winning size from the report (dense hit@5 is the headline),
   then build the real index at that size and zip it:

   ```python
   !python colab_index.py --novels-dir novels/shadow-slave \
       --chunk-target 20 --chunk-overlap 8 \
       --report /content/build-report.md --zip-out /content/index.zip
   !ls -lh /content/index.zip
   ```

7. Download `index.zip` (and both report files) from the files panel.
   The zip root is `index/`, so:

   ```bash
   cd /home/hax/weaver
   rm -rf .weaver/retrieval/index
   unzip -q ~/Downloads/index.zip -d .weaver/retrieval/
   ```

## Verify the downloaded index locally

```bash
cd /home/hax/weaver
uv run python - <<'EOF'
from qdrant_client import QdrantClient
c = QdrantClient(path=".weaver/retrieval/index")
info = c.get_collection("novel_chunks")
print("points:", info.points_count, "dense dim:", info.config.params.vectors["dense"].size)
EOF
```

Expect ~22k points and dense dim 1024 (bge-large). Then run a real search
through the tools (works once the runtime embedder wiring lands; until
then `search_library` runs sparse-only, which the index also contains).

## Controlling the environment

- **RAM/disk**: each temp index is deleted between sweep sizes
  (`shutil.rmtree`); final index is ~100-200 MB. Colab free RAM (12 GB)
  is plenty since batches upsert progressively.
- **Timeout**: Colab sessions disconnect after ~90 min idle; the sweep
  finishes in minutes, so keep moving between cells.
- **Reproducibility**: point ids and sparse indices use a stable crc32
  hash (never Python's randomized builtin hash), so a rebuild anywhere
  produces identical ids.
- **Cleanup**: nothing is cached in Colab that you need to keep; if you
  re-run, the script deletes/recreates its own collections. On your
  machine, delete `~/Downloads/index.zip` after unzipping.

## After the build

- The runtime loads `.weaver/retrieval/index` lazily on first search;
  no code change needed.
- The spoiler-knob work (ceiling as answer-framing, not retrieval
  filter) and the runtime dense-embedder wiring come next, per the
  agreed order: Colab build -> knob + framing -> reader trials.
