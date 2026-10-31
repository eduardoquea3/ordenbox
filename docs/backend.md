# Backend de la plataforma: servicios y tecnologías

Oct 30, 2026 · @Eduardo Quea

Guía del backend con seis microservicios en tres lenguajes: uno en NestJS, dos en FastAPI y tres en Go, de los cuales uno es Go puro y dos usan Gin.

## Reparto de tecnologías

Cada tecnología se asignó según la dificultad del servicio: NestJS para el más sencillo, FastAPI para dos servicios medianos y Go para los tres restantes.

| Servicio | Tecnología | Por qué esta elección | Puerto |
| --- | --- | --- | --- |
| catalog-service | NestJS (TypeScript) | Es el más fácil: un CRUD con decoradores, módulos e inyección de dependencias | 3001 |
| auth-service | FastAPI (Python) | Pydantic valida los datos y la documentación OpenAPI sale sola; ideal para registro y JWT | 8001 |
| notification-service | FastAPI (Python) | Un consumidor de SQS sencillo con boto3 y un par de rutas de consulta | 8002 |
| api-gateway | Go puro (`net/http`) | Un proxy inverso con la librería estándar, sin framework, para entender cómo funciona HTTP | 8080 |
| order-service | Go + Gin | Núcleo del negocio: API REST rápida y publicación de eventos en SNS | 8003 |
| payment-service | Go + Gin | Consumidor de SQS con goroutines y una ruta de consulta | 8004 |

Los puertos son una sugerencia; solo asegúrate de que no se repitan en Docker Compose.

## Cómo se conectan los servicios

Las peticiones del frontend pasan por el gateway y llegan a cada servicio por HTTP; el pedido, en cambio, sigue su camino con eventos de SNS y SQS.
