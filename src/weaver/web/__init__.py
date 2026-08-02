"""Local browser chat entrypoint (Plan 011)."""

from .app import create_app

__all__ = ["create_app", "serve_web"]


async def serve_web(runtime, *, host: str, port: int) -> int:
    """Run uvicorn over the runtime's FastAPI app; blocks until shutdown."""
    import uvicorn

    app = create_app(runtime)
    config = uvicorn.Config(app, host=host, port=port, log_level="info")
    server = uvicorn.Server(config)
    await server.serve()
    return 0
