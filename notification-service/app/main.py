from fastapi import FastAPI

app = FastAPI(title="notification-service")


@app.get("/")
def health() -> dict[str, str]:
    return {"service": "notification-service", "status": "ok"}
