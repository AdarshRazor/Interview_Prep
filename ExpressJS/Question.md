# ExpressJS Question

## In express, when to use server.use, server.get, server.set ?

## Answer
* In Express.js, `server.use, server.get, and server.set` serve different purposes. Here's a breakdown of when and how to use each one:

`server.use` 

 * **Purpose**: To add middleware to your application. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. Middleware can perform a variety of tasks like logging, parsing request bodies, authentication, and more.
 * **When to use**: When you need to apply a function to all routes or a subset of routes regardless of the HTTP method.

    ```javascript
    const express = require('express');
    const app = express();

    // Middleware applied to all routes
    app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
    });

    // Middleware for parsing JSON bodies
    app.use(express.json());
    ```

`server.get`

* **Purpose**: To define a route handler for GET requests to a specific path. Route handlers are used to respond to client requests.
* **When to use**: When you want to handle GET requests to a specific endpoint.

    ```javascript
    const express = require('express');
    const app = express();

    // Define a route for GET requests to "/"
    app.get('/', (req, res) => {
    res.send('Hello, World!');
    });
    ```

`server.set`

* **Purpose**: To set application-level settings. These settings are used to configure the behavior of the Express application.
* **When to use**: When you need to configure settings that affect how the application operates. Examples include the view engine, the directory for views, trust proxy settings, etc.

    ```js
    const express = require('express');
    const app = express();

    // Set the view engine to EJS
    app.set('view engine', 'ejs');

    // Set the directory for views
    app.set('views', './views');
    ```