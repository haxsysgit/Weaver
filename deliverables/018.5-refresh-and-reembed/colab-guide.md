# Colab guide: full-novel re-embed (fp32 + int8)

`scripts/weaver-full-reembed.ipynb` is the notebook. `scripts/colab_build_runner.py`
is the real weaver build runner (real chunker, real collection creators —
no parallel copy, no drift). Run the notebook on a T4 GPU.

## What you need locally first

1. Backup the current (stale, ch1000) index:

   ```bash
   cd /home/hax/weaver
   cp -r .weaver/retrieval/index .weaver/retrieval/index-backup-ch1000
   ```

2. Zip the two private inputs (they go to Google's servers — owner
   decision 2026-08-15; delete them from colab after the run):

   ```bash
   zip -r shadow-slave.zip novels/shadow-slave            # 54MB
   zip -r knowledge.zip .weaver/knowledge/shadow-slave     # 34MB
   ```

3. The notebook fetches the runner from GitHub in cell 3 (the old
   colab-index pattern: no re-uploads, fixes reach colab by re-running
   cell 3). So **push `scripts/colab_build_runner.py` to main first**.

## Step-by-step in Colab

1. Open https://colab.research.google.com, New Notebook, then
   File -> Upload notebook -> `scripts/weaver-full-reembed.ipynb`.
2. Runtime -> Change runtime type -> **T4 GPU** -> Save.
3. Upload `shadow-slave.zip` and `knowledge.zip` via the files panel.
4. Run the cells in order:
   - **Cell 1** installs the CUDA-12 onnxruntime from Microsoft's feed
     (stock onnxruntime-gpu is CUDA 13 and fails to load on the T4).
     You must see `IMPORTS OK: ... CUDAExecutionProvider` and a GPU name.
   - **Cell 2** unzips and sanity-checks (`reading` ends at `3148.json`).
   - **Cell 3** fetches the latest runner from GitHub.
   - **Cell 4** builds the **fp32** index over all 3,160 chapters
     (~15-30 min on the T4; ~6900 chunks + ~2450 statements).
   - **Cell 5** self-quantizes the cached fp32 onnx to int8
     (quantize_dynamic, MatMul only, ~30s, 1.3GB -> ~430MB).
   - **Cell 6** builds the **int8** index with the local onnx
     (~20-40 min).
   - **Cell 7** zips both and downloads them to your machine.

## Back on your machine

```bash
cd /home/hax/weaver
rm -rf .weaver/retrieval/index
unzip -q ~/Downloads/index-fp32.zip -d .weaver/retrieval/

uv run python - <<'PY'
from qdrant_client import QdrantClient
c = QdrantClient(path=".weaver/retrieval/index")
for col in c.get_collections().collections:
    info = c.get_collection(col.name)
    print(col.name, "points:", info.points_count,
          "dense dim:", info.config.params.vectors.get("dense", {}).size if info.config.params.vectors else "sparse-only")
PY
```

Expect ~6900 novel chunks + ~2450 notebook statements, dense dim 1024.
Keep `index-int8.zip` aside; swapping it in later is the quantization
before/after comparison. The runtime loads the index lazily on first
search.

## Failure modes

| symptom | cause | fix |
|---|---|---|
| `IMPORTS OK` missing CUDAExecutionProvider | wrong onnxruntime build | rerun cell 1 (CUDA-12 feed); runner also falls back to CPU |
| `FAIL ... broadcast ... 512 by N` | fed >512 tokens to a model with max_position_embeddings=512 | runner truncates to 512 (same as fastembed); not a bug |
| missing `reading/NNNN.json` | reading lags novels by design | runner (and weaver's build) skip missing records |
| colab session dies mid-build | free tier limits | rerun the cell; each build is < 1h |
| stale runner on colab | notebook cached the old script | rerun cell 3 (fetches fresh from GitHub) |
