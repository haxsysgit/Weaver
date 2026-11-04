"""The settings the live meaning index was built with (Plan 033.5).

Measured 2026-11-04: re-chunking with these reproduces the stored line
spans of every unchanged chapter, and re-embedding reproduces the stored
vectors at cosine 1.000. The in-place update and the full build both use
them, so the two can never write different kinds of points.
"""

CHUNK_TARGET_LINES = 40
CHUNK_OVERLAP_LINES = 19
DENSE_MODEL = "BAAI/bge-large-en-v1.5"
SPARSE_MODEL = "Qdrant/bm42-all-minilm-l6-v2-attentions"
