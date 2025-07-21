# Practical & Coding-Based Interview Questions for Backend (Node.js, Express, MongoDB, SQL, Docker, Testing)

---

## Node.js & Express (Advanced & Practical)

- **Implement a custom Express middleware for request logging with request/response time.**
- **Write an Express error handler that returns JSON error responses.**
- **Show how to structure a scalable Express app with routers, controllers, and services.**
- **Demonstrate how to use async/await in Express routes and handle errors gracefully.**
- **Implement file upload handling in Express using multer.**
- **Explain and demonstrate how to use environment variables securely in Node.js.**
- **Show how to use process clustering or worker threads to utilize multiple CPU cores.**
- **Implement graceful shutdown for an Express server (handling SIGTERM, closing DB connections).**
- **Demonstrate how to use Node.js streams to process large files efficiently.**
- **Explain and implement rate limiting middleware for an API.**

---

## Database Integration (MongoDB, SQL, Redis)

- **Write a Mongoose schema with validation and default values.**
- **Implement a MongoDB aggregation pipeline to group and summarize data.**
- **Show how to create and use indexes in MongoDB for query optimization.**
- **Write a SQL query to find users who made purchases in the last 30 days.**
- **Demonstrate a SQL JOIN (INNER, LEFT) with example tables and results.**
- **Implement optimistic and pessimistic locking in SQL (explain with code or pseudo-code).**
- **Integrate Redis for caching API responses and demonstrate cache invalidation.**
- **Show how to use transactions in MongoDB (with Mongoose) and SQL.**
- **Explain and implement pagination for large datasets (both MongoDB and SQL).**
- **Demonstrate how to handle database connection errors and retries in Node.js.**

---

## API Design & Security

- **Design a RESTful API for a blog (CRUD for posts, comments, users).**
- **Implement JWT-based authentication and authorization middleware in Express.**
- **Show how to hash and verify passwords securely using bcrypt.**
- **Demonstrate how to protect sensitive routes using role-based access control (RBAC).**
- **Explain and implement CORS handling in an Express API.**
- **Write code to validate and sanitize user input to prevent injection attacks.**
- **Implement API versioning in Express (e.g., /api/v1, /api/v2).**
- **Show how to log and monitor API requests and errors (e.g., with Winston, Morgan, or Sentry).**
- **Explain how to handle file uploads securely (file type/size validation, storage strategies).**
- **Demonstrate how to throttle or block abusive IPs using middleware.**

---

## Performance, Scalability & Production Readiness

- **Implement caching for expensive API endpoints using Redis or in-memory cache.**
- **Show how to use PM2 or a similar process manager for zero-downtime deployments.**
- **Demonstrate how to use environment-based configuration for dev, staging, and prod.**
- **Explain and implement health check endpoints for load balancers and monitoring.**
- **Show how to use clustering and load balancing for horizontal scaling.**
- **Implement graceful error handling and fallback strategies for external API failures.**
- **Explain and demonstrate how to use background jobs/queues (e.g., Bull, RabbitMQ) for async processing.**
- **Show how to profile and monitor Node.js app performance in production (APM, metrics, logs).**
- **Explain how to detect and fix memory leaks in a Node.js application.**
- **Demonstrate how to use feature flags/toggles for safe deployments.**

---

## Testing & CI/CD

- **Write a unit test for a service function using Jest or Mocha.**
- **Write an integration test for an Express route using Supertest.**
- **Show how to mock database calls in tests.**
- **Implement code coverage reporting and enforce thresholds in CI.**
- **Set up a GitHub Actions workflow for linting, testing, and deploying a Node.js app.**
- **Write a Dockerfile for a production-ready Node.js application.**
- **Show how to use Docker Compose to run Node.js, MongoDB, and Redis together.**
- **Explain and implement rolling deployments or blue/green deployments.**
- **Demonstrate how to securely manage secrets in CI/CD pipelines.**
- **Show how to automate database migrations as part of deployment.**

---

## Real-World Scenarios & System Design

- **Design a scalable architecture for a chat application (real-time, persistence, scaling).**
- **Explain how you would migrate a monolithic app to microservices.**
- **Demonstrate how to handle high-throughput event processing (e.g., with Kafka or RabbitMQ).**
- **Show how to implement a scheduled job (cron) in Node.js (e.g., for sending emails).**
- **Explain how to ensure data consistency across distributed services.**
- **Design a solution for zero-downtime database migrations.**
- **Show how to implement audit logging for sensitive operations.**
- **Explain how to handle GDPR or data privacy requirements in backend systems.**
- **Demonstrate how to implement multi-tenancy in a SaaS backend.**
- **Show how to handle and recover from partial system failures gracefully.**

---

*Use these as coding prompts or discussion starters for practical, hands-on backend interview rounds for experienced developers.*
