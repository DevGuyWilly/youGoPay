# YouGoPay

A microservices-based application for managing group savings and rotating credit associations.

## Project Structure

```
/apps
├── api-gateway/          # API Gateway service
├── services/            # Microservices
│   ├── auth/           # Authentication service
│   ├── user/           # User management service
│   ├── group/          # Group management service
│   ├── payment/        # Payment processing service
│   ├── payout-orchestrator/ # Payout orchestration service
│   └── notification/   # Notification service
└── docs/               # Documentation

/packages              # Shared packages
├── config/            # Configuration management
├── prisma/            # Database schema and client
├── logger/            # Logging utilities
├── common/            # Shared utilities and types
├── truelayer-sdk/     # TrueLayer API integration
├── security/          # Security utilities
├── compliance/        # Compliance utilities
├── monitoring/        # Monitoring utilities
└── tracing/           # Distributed tracing

/docker               # Docker configuration
└── Dockerfiles/      # Service-specific Dockerfiles

/docs                 # Project documentation
├── api/             # API documentation
├── architecture/    # Architecture diagrams
├── deployment/      # Deployment guides
└── security/        # Security documentation

/e2e                 # End-to-end tests
```

## Prerequisites

- Node.js >= 18
- Docker and Docker Compose
- PostgreSQL
- Redis

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy the environment file:
   ```bash
   cp apps/.env.example apps/.env
   ```
4. Start the development environment:
   ```bash
   docker-compose up
   ```

## Development

- Each service is independently deployable
- Services communicate via HTTP/REST
- Shared code is maintained in the packages directory
- Each service has its own Dockerfile

## Testing

- Unit tests: `npm run test`
- Integration tests: `npm run test:integration`
- E2E tests: `npm run test:e2e`

## Documentation

- API documentation is available in `/docs/api`
- Architecture documentation is available in `/docs/architecture`
- Deployment guides are available in `/docs/deployment`
- Security documentation is available in `/docs/security`
