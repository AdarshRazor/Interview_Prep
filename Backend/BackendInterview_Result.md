# Node.js & Express (Advanced & Practical) — Best Answers

---

**1. Implement a custom Express middleware for request logging with request/response time.**

A: Middleware is a function that runs before your route handler. For logging, you can measure the time before and after the request:

```js
const logger = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode} - ${duration}ms`);
  });
  next();
};
// Usage:
app.use(logger);
```
*Real-life analogy:* Like a stopwatch for every customer at a service counter.

---

**2. Write an Express error handler that returns JSON error responses.**

A: Error handlers in Express have 4 arguments. Always put it after your routes:

```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});
```
*Tip:* Always return JSON for APIs, not HTML.

---

**3. Show how to structure a scalable Express app with routers, controllers, and services.**

A: Use folders for routes, controllers, and services. Example:

```
project/
  routes/
    userRoutes.js
  controllers/
    userController.js
  services/
    userService.js
```

- **Route:** Handles URL and calls controller
- **Controller:** Handles request/response logic
- **Service:** Handles business logic/data access

```js
// routes/userRoutes.js
const express = require('express');
const { getUser } = require('../controllers/userController');
const router = express.Router();
router.get('/:id', getUser);
module.exports = router;

// controllers/userController.js
const { findUserById } = require('../services/userService');
exports.getUser = async (req, res) => {
  const user = await findUserById(req.params.id);
  res.json(user);
};

// services/userService.js
exports.findUserById = async (id) => {
  // DB logic here
};
```

---

**4. Demonstrate how to use async/await in Express routes and handle errors gracefully.**

A: Use try/catch in async route handlers:

```js
app.get('/user/:id', async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    next(err); // Passes error to error handler
  }
});
```
*Tip:* Use a wrapper like express-async-errors for less boilerplate.

---

**5. Implement file upload handling in Express using multer.**

A: Multer is a middleware for handling multipart/form-data (file uploads):

```js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ filename: req.file.filename });
});
```
*Real-life analogy:* Like a receptionist who puts incoming files in a folder.

---

**6. Explain and demonstrate how to use environment variables securely in Node.js.**

A: Use a `.env` file and the `dotenv` package. Never hardcode secrets in code.

```js
// .env
DB_PASSWORD=supersecret

// app.js
require('dotenv').config();
const dbPassword = process.env.DB_PASSWORD;
```
*Tip:* Never commit `.env` to version control.

---

**7. Show how to use process clustering or worker threads to utilize multiple CPU cores.**

A: Node.js is single-threaded, but you can use clustering to run multiple processes:

```js
const cluster = require('cluster');
const os = require('os');
if (cluster.isMaster) {
  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }
} else {
  // Start your Express app here
}
```
*Analogy:* Like opening multiple checkout counters in a store.

---

**8. Implement graceful shutdown for an Express server (handling SIGTERM, closing DB connections).**

A: Listen for process signals and close server/DB connections:

```js
const server = app.listen(3000);
process.on('SIGTERM', () => {
  server.close(() => {
    db.close(); // Close DB connection
    console.log('Server closed gracefully');
  });
});
```
*Why?* Prevents data loss and allows in-flight requests to finish.

---

**9. Demonstrate how to use Node.js streams to process large files efficiently.**

A: Streams let you process data chunk by chunk, not all at once:

```js
const fs = require('fs');
const readStream = fs.createReadStream('largefile.txt');
readStream.on('data', chunk => {
  // Process chunk
});
readStream.on('end', () => {
  console.log('Done');
});
```
*Analogy:* Like reading a book page by page, not all at once.

---

**10. Explain and implement rate limiting middleware for an API.**

A: Use a package like express-rate-limit to prevent abuse:

```js
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});
app.use(limiter);
```
*Why?* Protects your API from brute-force attacks and abuse.

---

# Database Integration (MongoDB, SQL, Redis) — Best Answers

---

**1. Write a Mongoose schema with validation and default values.**

A: Mongoose schemas define the structure of MongoDB documents. You can add validation and defaults:

```js
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, min: 0, default: 18 },
  createdAt: { type: Date, default: Date.now }
});
const User = mongoose.model('User', userSchema);
```
*Analogy:* Like a form with required fields and default values.

---

**2. Implement a MongoDB aggregation pipeline to group and summarize data.**

A: Aggregation pipelines process data in stages. Example: Group users by age and count them.

```js
User.aggregate([
  { $group: { _id: '$age', count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);
```
*Analogy:* Like grouping students by grade and counting each group.

---

**3. Show how to create and use indexes in MongoDB for query optimization.**

A: Indexes speed up queries. Create an index on the email field:

```js
User.createIndexes({ email: 1 });
// or in schema
db.users.createIndex({ email: 1 })
```
*Tip:* Always index fields you search or sort on frequently.

---

**4. Write a SQL query to find users who made purchases in the last 30 days.**

A:
```sql
SELECT * FROM users
JOIN purchases ON users.id = purchases.user_id
WHERE purchases.date >= NOW() - INTERVAL 30 DAY;
```

---

**5. Demonstrate a SQL JOIN (INNER, LEFT) with example tables and results.**

A:
```sql
-- INNER JOIN: Only users with purchases
SELECT users.name, purchases.amount
FROM users
INNER JOIN purchases ON users.id = purchases.user_id;

-- LEFT JOIN: All users, even if no purchases
SELECT users.name, purchases.amount
FROM users
LEFT JOIN purchases ON users.id = purchases.user_id;
```

---

**6. Implement optimistic and pessimistic locking in SQL (explain with code or pseudo-code).**

A:
- **Optimistic:** Check a version/timestamp before update.
```sql
UPDATE products SET stock = stock - 1, version = version + 1
WHERE id = 1 AND version = 5;
```
- **Pessimistic:** Lock the row for update.
```sql
BEGIN;
SELECT * FROM products WHERE id = 1 FOR UPDATE;
-- do update
COMMIT;
```
*Analogy:* Optimistic = "I hope no one else changed it"; Pessimistic = "Lock the door while I work."

---

**7. Integrate Redis for caching API responses and demonstrate cache invalidation.**

A:
```js
const redis = require('redis');
const client = redis.createClient();

// Check cache first
app.get('/data', async (req, res) => {
  client.get('mydata', async (err, cached) => {
    if (cached) return res.json(JSON.parse(cached));
    const data = await fetchData();
    client.setex('mydata', 60, JSON.stringify(data)); // cache for 60s
    res.json(data);
  });
});
// Invalidate: client.del('mydata')
```

---

**8. Show how to use transactions in MongoDB (with Mongoose) and SQL.**

A:
- **MongoDB (Mongoose):**
```js
const session = await mongoose.startSession();
session.startTransaction();
try {
  await User.create([{ name: 'A' }], { session });
  await Order.create([{ user: 'A' }], { session });
  await session.commitTransaction();
} catch (e) {
  await session.abortTransaction();
}
session.endSession();
```
- **SQL:**
```sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
```

---

**9. Explain and implement pagination for large datasets (both MongoDB and SQL).**

A:
- **MongoDB:**
```js
const page = 2, limit = 10;
User.find().skip((page-1)*limit).limit(limit);
```
- **SQL:**
```sql
SELECT * FROM users LIMIT 10 OFFSET 10;
```
*Tip:* Use indexes for efficient pagination.

---

**10. Demonstrate how to handle database connection errors and retries in Node.js.**

A:
```js
const mongoose = require('mongoose');
function connectWithRetry() {
  mongoose.connect(process.env.DB_URI, {}, err => {
    if (err) {
      console.error('DB connection failed, retrying in 5s...');
      setTimeout(connectWithRetry, 5000);
    } else {
      console.log('DB connected');
    }
  });
}
connectWithRetry();
```

---

# API Design & Security — Best Answers

---

**1. Design a RESTful API for a blog (CRUD for posts, comments, users).**

A: Use RESTful routes:
- `GET /posts` — list posts
- `POST /posts` — create post
- `GET /posts/:id` — get post
- `PUT /posts/:id` — update post
- `DELETE /posts/:id` — delete post
(Similar for comments, users)

---

**2. Implement JWT-based authentication and authorization middleware in Express.**

A:
```js
const jwt = require('jsonwebtoken');
function auth(req, res, next) {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
}
```

---

**3. Show how to hash and verify passwords securely using bcrypt.**

A:
```js
const bcrypt = require('bcrypt');
const hash = await bcrypt.hash(password, 10);
const isMatch = await bcrypt.compare(password, hash);
```
*Tip:* Never store plain passwords!

---

**4. Demonstrate how to protect sensitive routes using role-based access control (RBAC).**

A:
```js
function authorize(roles = []) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}
// Usage: app.get('/admin', auth, authorize(['admin']), ...)
```

---

**5. Explain and implement CORS handling in an Express API.**

A: Use the `cors` package:
```js
const cors = require('cors');
app.use(cors({ origin: 'https://yourfrontend.com' }));
```
*Why?* Allows your API to be called from browsers on other domains.

---

**6. Write code to validate and sanitize user input to prevent injection attacks.**

A: Use a library like express-validator:
```js
const { body, validationResult } = require('express-validator');
app.post('/user', [
  body('email').isEmail().normalizeEmail(),
  body('name').trim().escape()
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  // ...
});
```

---

**7. Implement API versioning in Express (e.g., /api/v1, /api/v2).**

A:
```js
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);
```

---

**8. Show how to log and monitor API requests and errors (e.g., with Winston, Morgan, or Sentry).**

A:
```js
const morgan = require('morgan');
app.use(morgan('combined'));
// For errors: Sentry or Winston
```

---

**9. Explain how to handle file uploads securely (file type/size validation, storage strategies).**

A: Use multer with fileFilter and limits:
```js
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 1024 * 1024 }, // 1MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png') return cb(new Error('Only PNGs!'));
    cb(null, true);
  }
});
```

---

**10. Demonstrate how to throttle or block abusive IPs using middleware.**

A: Use express-rate-limit or custom logic:
```js
const rateLimit = require('express-rate-limit');
app.use(rateLimit({ windowMs: 60000, max: 10 }));
```

---

# Performance, Scalability & Production Readiness — Best Answers

---

**1. Implement caching for expensive API endpoints using Redis or in-memory cache.**

A:
```js
const cache = {};
app.get('/expensive', async (req, res) => {
  if (cache.data) return res.json(cache.data);
  const data = await getExpensiveData();
  cache.data = data;
  setTimeout(() => { cache.data = null; }, 60000); // cache for 1 min
  res.json(data);
});
// For Redis, see previous Redis example.
```

---

**2. Show how to use PM2 or a similar process manager for zero-downtime deployments.**

A:
```sh
pm2 start app.js --name myapp
pm2 reload myapp # zero-downtime reload
```
*Why?* Keeps your app running during updates.

---

**3. Demonstrate how to use environment-based configuration for dev, staging, and prod.**

A:
```js
const config = require(`./config.${process.env.NODE_ENV}.js`);
```
*Tip:* Use dotenv and separate config files.

---

**4. Explain and implement health check endpoints for load balancers and monitoring.**

A:
```js
app.get('/health', (req, res) => res.send('OK'));
```
*Why?* Lets load balancers know your app is alive.

---

**5. Show how to use clustering and load balancing for horizontal scaling.**

A: See Node.js cluster example in previous section. For load balancing, use Nginx or a cloud load balancer in front of your app servers.

---

**6. Implement graceful error handling and fallback strategies for external API failures.**

A:
```js
try {
  const data = await fetchExternal();
  res.json(data);
} catch (e) {
  res.status(503).json({ error: 'External service unavailable', fallback: [] });
}
```

---

**7. Explain and demonstrate how to use background jobs/queues (e.g., Bull, RabbitMQ) for async processing.**

A:
```js
const Queue = require('bull');
const emailQueue = new Queue('email');
emailQueue.add({ to: 'user@example.com', body: 'Hello' });
emailQueue.process(async job => {
  await sendEmail(job.data);
});
```
*Analogy:* Like a to-do list for background tasks.

---

**8. Show how to profile and monitor Node.js app performance in production (APM, metrics, logs).**

A: Use tools like New Relic, Datadog, or open-source APMs. For metrics:
```js
const promClient = require('prom-client');
const collectDefaultMetrics = promClient.collectDefaultMetrics;
collectDefaultMetrics();
```

---

**9. Explain how to detect and fix memory leaks in a Node.js application.**

A: Use tools like Chrome DevTools, heap snapshots, and process.memoryUsage(). Look for increasing memory over time. Fix by removing unused references and listeners.

---

**10. Demonstrate how to use feature flags/toggles for safe deployments.**

A:
```js
const features = { newFeature: false };
app.get('/feature', (req, res) => {
  if (features.newFeature) res.send('New!');
  else res.send('Old!');
});
```
*Tip:* Use LaunchDarkly or Unleash for advanced feature flagging.

---

# Testing & CI/CD — Best Answers

---

**1. Write a unit test for a service function using Jest or Mocha.**

A:
```js
// sum.js
function sum(a, b) { return a + b; }
module.exports = sum;
// sum.test.js
const sum = require('./sum');
test('adds numbers', () => {
  expect(sum(2, 3)).toBe(5);
});
```

---

**2. Write an integration test for an Express route using Supertest.**

A:
```js
const request = require('supertest');
const app = require('./app');
test('GET /users', async () => {
  const res = await request(app).get('/users');
  expect(res.statusCode).toBe(200);
  expect(res.body).toBeInstanceOf(Array);
});
```

---

**3. Show how to mock database calls in tests.**

A:
```js
jest.mock('../models/User');
User.findById.mockResolvedValue({ name: 'Test' });
```

---

**4. Implement code coverage reporting and enforce thresholds in CI.**

A:
- Add to package.json:
```json
"scripts": { "test": "jest --coverage" }
```
- In CI, fail if coverage is below threshold:
```sh
jest --coverage --coverageThreshold='{ "global": { "branches": 80, "functions": 80, "lines": 80, "statements": 80 } }'
```

---

**5. Set up a GitHub Actions workflow for linting, testing, and deploying a Node.js app.**

A:
```yaml
name: CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm run lint
      - run: npm test
      - run: npm run deploy
```

---

**6. Write a Dockerfile for a production-ready Node.js application.**

A:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
CMD ["node", "app.js"]
```

---

**7. Show how to use Docker Compose to run Node.js, MongoDB, and Redis together.**

A:
```yaml
version: '3'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    depends_on:
      - mongo
      - redis
  mongo:
    image: mongo
    ports:
      - "27017:27017"
  redis:
    image: redis
    ports:
      - "6379:6379"
```

---

**8. Explain and implement rolling deployments or blue/green deployments.**

A: Rolling: Update servers one by one. Blue/green: Run two environments, switch traffic when new is ready. Use cloud tools (AWS, Azure) or Kubernetes for automation.

---

**9. Demonstrate how to securely manage secrets in CI/CD pipelines.**

A: Use environment variables or secret managers (AWS Secrets Manager, GitHub Secrets). Never hardcode secrets in code or config files.

---

**10. Show how to automate database migrations as part of deployment.**

A: Use migration tools (e.g., Sequelize CLI, Knex, Flyway) and run migrations in CI/CD before starting the app:
```sh
npx sequelize-cli db:migrate
```

---

# Real-World Scenarios & System Design — Best Answers

---

**1. Design a scalable architecture for a chat application (real-time, persistence, scaling).**

A: Use WebSocket servers (e.g., Socket.io) for real-time, store messages in MongoDB, use Redis for pub/sub across servers, and deploy behind a load balancer. Scale horizontally by adding more servers.

---

**2. Explain how you would migrate a monolithic app to microservices.**

A: Start by extracting independent modules (e.g., auth, payments) into separate services. Use APIs for communication. Gradually move features, keep a shared database or use event-driven sync.

---

**3. Demonstrate how to handle high-throughput event processing (e.g., with Kafka or RabbitMQ).**

A: Use a message broker (Kafka/RabbitMQ) to queue events. Workers consume and process events asynchronously, allowing for scaling and reliability.

---

**4. Show how to implement a scheduled job (cron) in Node.js (e.g., for sending emails).**

A:
```js
const cron = require('node-cron');
cron.schedule('0 9 * * *', () => {
  sendDailyEmails();
});
```

---

**5. Explain how to ensure data consistency across distributed services.**

A: Use distributed transactions (sagas), idempotent operations, and event sourcing. Use unique IDs and retries for reliability.

---

**6. Design a solution for zero-downtime database migrations.**

A: Use backward-compatible schema changes, deploy code that works with both old and new schema, run migrations, then remove old code.

---

**7. Show how to implement audit logging for sensitive operations.**

A:
```js
function logAudit(action, user, details) {
  AuditLog.create({ action, user, details, timestamp: new Date() });
}
```

---

**8. Explain how to handle GDPR or data privacy requirements in backend systems.**

A: Store only necessary data, encrypt sensitive info, allow users to delete/export data, and log access to personal data.

---

**9. Demonstrate how to implement multi-tenancy in a SaaS backend.**

A: Use a tenantId field in all data models, or separate databases per tenant. Filter all queries by tenantId.

---

**10. Show how to handle and recover from partial system failures gracefully.**

A: Use retries, circuit breakers, fallback responses, and alerting. Design for graceful degradation so the system still works in a limited way if a part fails.

---
