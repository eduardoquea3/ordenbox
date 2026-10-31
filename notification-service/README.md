# notification-service

FastAPI scaffold for an SQS consumer and query routes (port 8002 by default).

Run `just` in this directory to resolve dependencies and start the development server. Set `PORT` to override the port. `GET /` returns a minimal health response; SQS integration and notification/query behavior are intentionally unimplemented.
