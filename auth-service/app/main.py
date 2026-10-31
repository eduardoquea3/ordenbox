from fastapi import FastAPI

app = FastAPI(title="auth-service")


@app.get("/")
def health() -> dict[str, str]:
    return {"service": "auth-service", "status": "ok"}
