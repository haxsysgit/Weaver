# weaver v1: code-only image. State (novels/, .weaver/) mounts at /srv/weaver.
FROM python:3.11-slim

WORKDIR /srv/weaver

# System deps: onnxruntime needs libgomp for its CPU kernels.
RUN apt-get update && apt-get install -y --no-install-recommends \
    libgomp1 \
    && rm -rf /var/lib/apt/lists/*

# Install the package (wheel build pulls the committed frontend dist).
COPY pyproject.toml README.md ./
COPY src ./src
RUN pip install --no-cache-dir .

# State lives on a volume mounted at /srv/weaver: novels/shadow-slave,
# .weaver/retrieval/index, .weaver/knowledge (see scripts/build_prod_bundle.py).
# WEAVER_DENSE_ONNX points at the int8 model in that volume so queries
# match the int8 index. WEAVER_ALLOWED_HOSTS admits the Funnel hostname.
ENV WEAVER_PROJECT_ROOT=/srv/weaver
ENV WEAVER_STATE_DIR=/srv/weaver/.weaver/state
ENV WEAVER_CORPUS_STATE_DIR=/srv/weaver/.weaver/corpus
EXPOSE 8000

CMD ["weaver", "web", "--host", "0.0.0.0", "--port", "8000"]
