# api-gateway

Go `net/http` reverse-proxy scaffold (port 8080 by default). Run `just` here. It serves a health response at `GET /` and forwards `/catalog/`, `/auth/`, `/notifications/`, `/orders/`, and `/payments/` to the service ports documented in `docs/backend.md`. Override targets with `CATALOG_SERVICE_URL`, `AUTH_SERVICE_URL`, `NOTIFICATION_SERVICE_URL`, `ORDER_SERVICE_URL`, and `PAYMENT_SERVICE_URL`; override the listen port with `PORT`.
