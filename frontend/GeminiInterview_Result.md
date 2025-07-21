Of course. I will provide a comprehensive markdown file with explanations and code examples for the senior frontend interview questions you've listed. This guide is designed to be a concise and practical resource for your preparation.

Good luck with your interview!

---

# Senior Frontend Interview Preparation Guide

Here are the answers and code examples for the questions provided, structured for quick learning.

## JavaScript & TypeScript

### **Implement a deep clone function for nested objects and arrays.**

This function recursively copies all properties of an object or elements of an array. It handles nested objects and arrays to ensure the clone is completely independent of the original.

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    let arrCopy = [];
    for (let i = 0; i < obj.length; i++) {
      arrCopy[i] = deepClone(obj[i]);
    }
    return arrCopy;
  }

  // Handle Object
  let objCopy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }
  return objCopy;
}

// Example usage:
const original = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4]
  }
};
const cloned = deepClone(original);
cloned.b.c = 99; // Change the clone
console.log(original.b.c); // Output: 2 (original is unchanged)
console.log(cloned.b.c);   // Output: 99
```

### **Write a debounce and a throttle function in JavaScript.**

-   **Debounce**: Groups a sequence of calls into one. It only executes the function after a certain period of inactivity. Useful for search input fields.
-   **Throttle**: Executes a function at most once every specified period. Useful for scroll or resize event listeners.

```javascript
// Debounce Implementation
function debounce(func, delay) {
  let timeoutId;

  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Throttle Implementation
function throttle(func, limit) {
  let inThrottle;
  let lastResult;

  return function(...args) {
    if (!inThrottle) {
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
      lastResult = func.apply(this, args);
    }
    return lastResult;
  };
}

// Example Usage:
// const debouncedLog = debounce(() => console.log('Debounced!'), 1000);
// window.addEventListener('resize', debouncedLog);

// const throttledLog = throttle(() => console.log('Throttled!'), 1000);
// window.addEventListener('scroll', throttledLog);
```

### **Explain and demonstrate variable hoisting with `var`, `let`, and `const`.**

-   **Hoisting**: JavaScript's default behavior of moving declarations to the top of the current scope.
-   **`var`**: Declarations are hoisted and initialized with `undefined`. You can access the variable before it's declared without an error.
-   **`let` and `const`**: Declarations are hoisted but not initialized. Accessing them before declaration results in a `ReferenceError`. This is known as the "Temporal Dead Zone" (TDZ).

```javascript
// Hoisting with var
console.log(myVar); // Output: undefined (hoisted and initialized)
var myVar = 5;
console.log(myVar); // Output: 5

// Hoisting with let
// console.log(myLet); // ReferenceError: Cannot access 'myLet' before initialization (TDZ)
let myLet = 10;
console.log(myLet); // Output: 10

// Hoisting with const
// console.log(myConst); // ReferenceError: Cannot access 'myConst' before initialization (TDZ)
const myConst = 15;
console.log(myConst); // Output: 15
```

### **Show how to use closures to create a private counter.**

A closure is a function that remembers the variables from its outer scope, even after the outer function has finished executing. This allows us to create "private" variables.

```javascript
function createCounter() {
  let count = 0; // This variable is "private" to the inner functions

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getValue: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); // Output: 2

// You cannot access 'count' directly from the outside
// console.log(counter.count); // Output: undefined
```

### **TypeScript: Interface, Function Overloading, and Type Assertions**

```typescript
// 1. Define an interface for a user object
interface User {
  readonly id: number; // Cannot be changed after creation
  name: string;
  email?: string; // Optional property
}

const user: User = { id: 1, name: "John Doe" };
// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// 2. Implement function overloading in TypeScript
// Overload signatures
function getLength(arg: string): number;
function getLength(arg: any[]): number;

// Implementation signature
function getLength(arg: string | any[]): number {
  return arg.length;
}

console.log(getLength("hello"));   // Output: 5
console.log(getLength([1, 2, 3])); // Output: 3

// 3. Write a function that uses type assertions
function getInputElementValue(id: string): string {
  // We use a type assertion because getElementById returns a generic HTMLElement,
  // but we know it will be an HTMLInputElement which has a 'value' property.
  const inputElement = document.getElementById(id) as HTMLInputElement;

  // Use with caution! If the element isn't an input, this will fail at runtime.
  if (inputElement) {
    return inputElement.value;
  }
  return "";
}
```

---

## React.js (Advanced & Practical)

### **Custom Hooks: `useFetch`**

A custom hook to encapsulate the logic for fetching data, including loading and error states.

```jsx
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-fetch if URL changes

  return { data, loading, error };
}

// How to use it in a component:
function MyComponent() {
  const { data, loading, error } = useFetch('https://api.example.com/data');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <div>{JSON.stringify(data)}</div>;
}
```

### **Performance Optimization: `React.memo`, `useMemo`, `useCallback`**

-   **`React.memo`**: A higher-order component that prevents a component from re-rendering if its props have not changed.
-   **`useCallback`**: Memoizes a function, preventing it from being recreated on every render. Use this for passing callbacks to memoized child components.
-   **`useMemo`**: Memoizes a value, recomputing it only when its dependencies change. Use this for expensive calculations.

```jsx
import React, { useState, useCallback, useMemo } from 'react';

// 1. Child component wrapped in React.memo
const ChildComponent = React.memo(({ onIncrement }) => {
  console.log('ChildComponent re-rendered');
  return <button onClick={onIncrement}>Increment</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 2. useCallback ensures the function isn't recreated on every render
  // Without it, ChildComponent would re-render every time ParentComponent does.
  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency array means the function is created only once

  // 3. useMemo for an expensive calculation
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...');
    let result = 0;
    // Simulate a heavy calculation
    for (let i = 0; i < 100000000; i++) {
        result += 1;
    }
    return result + count; // Re-calculates only when 'count' changes
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Value: {expensiveValue}</p>
      
      <ChildComponent onIncrement={handleIncrement} />

      <button onClick={() => setOtherState(o => o + 1)}>
        Change Other State ({otherState})
      </button>
    </div>
  );
}
```

### **Code Splitting and Lazy Loading**

Use `React.lazy` and `React.Suspense` to load a component bundle only when it's needed.

```jsx
import React, { Suspense, useState } from 'react';

// This component will be loaded in a separate chunk
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(true)}>Load Lazy Component</button>
      {show && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </div>
  );
}
```

### **`useRef` to Manage Focus**

`useRef` can hold a mutable value that doesn't trigger a re-render. It's commonly used to get direct access to a DOM element.

```jsx
import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // .current points to the mounted input element
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
```

### **Context API: Theme Provider**

Use Context to pass data through the component tree without prop drilling.

```jsx
import React, { createContext, useContext, useState } from 'react';

// 1. Create a Context
const ThemeContext = createContext();

// 2. Create a Provider Component
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create a custom hook to consume the context
function useTheme() {
  return useContext(ThemeContext);
}

// 4. Usage in the app
function App() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}

// Nested component that consumes the context
function Toolbar() {
  const { theme, toggleTheme } = useTheme();
  
  const style = {
    background: theme === 'dark' ? '#333' : '#FFF',
    color: theme === 'dark' ? '#FFF' : '#333',
    padding: '20px'
  };

  return (
    <div style={style}>
      <p>The current theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
```

### **React Router: Protected Routes**

This component checks for an authentication token. If it exists, it renders the child component; otherwise, it redirects to the login page.

```jsx
import React from 'react';
import { Route, Navigate, Outlet } from 'react-router-dom';

// A mock auth check function
const useAuth = () => {
  // In a real app, you'd check a token in localStorage or context
  const user = { loggedIn: true }; // or { loggedIn: false }
  return user && user.loggedIn;
};

const ProtectedRoute = () => {
  const isAuth = useAuth();
  // Outlet renders the child route's element
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

// In your main router setup (e.g., App.js)
// <Routes>
//   <Route path="/login" element={<LoginPage />} />
//   <Route element={<ProtectedRoute />}>
//     {/* All routes inside here are protected */}
//     <Route path="/dashboard" element={<Dashboard />} />
//     <Route path="/profile" element={<Profile />} />
//   </Route>
// </Routes>
```

### **Class Component to Functional Component Conversion**

Converting a class with state and `componentDidMount` to a functional component with `useState` and `useEffect`.

```jsx
import React, { useState, useEffect } from 'react';

// --- Class Component ---
class OldComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
  }

  componentDidMount() {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return <div>{this.state.data ? 'Data loaded' : 'Loading...'}</div>;
  }
}

// --- Functional Component with Hooks ---
function NewComponent() {
  const [data, setData] = useState(null);

  // useEffect replaces componentDidMount, componentDidUpdate, and componentWillUnmount
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(res => res.json())
      .then(fetchedData => setData(fetchedData));
  }, []); // The empty array ensures this runs only once, like componentDidMount

  return <div>{data ? 'Data loaded' : 'Loading...'}</div>;
}
```

---

## State Management (Redux Toolkit, Zustand)

### **Redux Toolkit: Todo List**

`Redux Toolkit` is the modern, recommended way to use Redux. It simplifies setup, reduces boilerplate, and includes `createAsyncThunk` for side effects.

```javascript
// store.js
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

// todosSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
  const data = await response.json();
  return data;
});

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    // Standard reducer for adding a todo
    addTodo: (state, action) => {
      state.items.push({ id: Date.now(), title: action.payload, completed: false });
    },
    // Standard reducer for toggling a todo
    toggleTodo: (state, action) => {
      const todo = state.items.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    // Reducers for the async thunk
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

// Selector to get all todos
export const selectAllTodos = state => state.todos.items;

export default todosSlice.reducer;
```

### **Zustand: Simple Global Store**

Zustand is a small, fast, and scalable state management solution using simplified hooks.

```jsx
import create from 'zustand';
import { persist } from 'zustand/middleware';

// Define the store with state and actions
const useBearStore = create(
  persist( // Use the persist middleware
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: 'bear-storage', // name of the item in storage (localStorage by default)
    }
  )
);

// Component that uses the store
function BearCounter() {
  // Select state from the store
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}

function Controls() {
  // Select actions from the store
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  return <button onClick={increasePopulation}>one up</button>;
}
```

---

## REST API Integration (Frontend)

### **CRUD Operations with `fetch`**

```javascript
const API_URL = 'https://api.example.com/items';

// GET (Read)
async function getItems() {
  const response = await fetch(API_URL);
  return response.json();
}

// POST (Create)
async function createItem(itemData) {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  return response.json();
}

// PUT (Update)
async function updateItem(id, itemData) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  return response.json();
}

// DELETE (Delete)
async function deleteItem(id) {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
}
```

### **Error Handling & Storing JWTs**

This combines error handling and sending a JWT for an authenticated request.

```javascript
async function getProtectedData() {
  try {
    // 1. Get token from secure storage (e.g., localStorage or a cookie)
    const token = localStorage.getItem('jwt_token');
    
    if (!token) {
        throw new Error("Authentication token not found.");
    }

    const response = await fetch('https://api.example.com/protected-data', {
      headers: {
        // 2. Send the token in the Authorization header
        'Authorization': `Bearer ${token}`
      }
    });

    if (!response.ok) {
      // Handle HTTP errors like 404 or 500
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    // Update UI with data
    console.log(data);

  } catch (error) {
    // Handle fetch errors (e.g., network down) or thrown errors
    // Update UI to show the error message
    console.error("Failed to fetch data:", error.message);
  }
}
```

### **CORS Error Explanation**

A **CORS (Cross-Origin Resource Sharing)** error occurs when a web application at one origin (domain) requests a resource from a different origin, but the server at the other origin does not explicitly permit it.

-   **It's a browser security feature.** It's not a server-side error. The browser blocks the frontend code from accessing the response.
-   **Resolution**: The **server** must be configured to send the correct CORS headers, primarily `Access-Control-Allow-Origin`. For example, to allow requests from `https://my-app.com`, the server should include the header: `Access-Control-Allow-Origin: https://my-app.com`. It is **not** something you can fix in your frontend JavaScript code.

---

## Testing (Jest & React Testing Library)

### **Jest: Unit & Snapshot Testing**

```javascript
// --- Unit Test for a pure function (utils.js) ---
export const add = (a, b) => a + b;

// (utils.test.js)
import { add } from './utils';
describe('add function', () => {
  test('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});

// --- Snapshot Test for a React Component (Button.js) ---
// import React from 'react';
// export const Button = ({ children }) => <button>{children}</button>;

// (Button.test.js)
// import React from 'react';
// import renderer from 'react-test-renderer';
// import { Button } from './Button';
//
// test('Button renders correctly', () => {
//   const tree = renderer.create(<Button>Click Me</Button>).toJSON();
//   expect(tree).toMatchSnapshot();
// });
// The first time this test runs, it creates a snapshot file. On subsequent runs,
// it compares the rendered output to the snapshot.
```

### **React Testing Library: User Interaction**

React Testing Library focuses on testing components from a user's perspective.

```jsx
import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // for .toBeInTheDocument()

// Component to test
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

// Test file
test('increments count when button is clicked', () => {
  // 1. Render the component
  render(<Counter />);

  // 2. Find elements the user would see
  const countElement = screen.getByText(/Count: 0/i);
  const button = screen.getByRole('button', { name: /increment/i });
  
  // Assert initial state
  expect(countElement).toBeInTheDocument();

  // 3. Simulate user interaction
  fireEvent.click(button);

  // 4. Assert the result
  // The count element is now updated to "Count: 1"
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
```

---

## Real-World Scenarios & System Design

### **Infinite Scrolling with Intersection Observer**

The `IntersectionObserver` API is the modern, performant way to detect when an element enters the viewport.

```jsx
import React, { useState, useRef, useCallback } from 'react';
import useFetchPosts from './useFetchPosts'; // A custom hook to fetch paginated data

function InfiniteScrollList() {
  const [pageNumber, setPageNumber] = useState(1);
  const { posts, hasMore, loading } = useFetchPosts(pageNumber);

  const observer = useRef();
  // Use useCallback to get a stable ref callback
  const lastPostElementRef = useCallback(node => {
    if (loading) return; // Don't trigger while loading
    if (observer.current) observer.current.disconnect(); // Disconnect old observer

    observer.current = new IntersectionObserver(entries => {
      // If the last element is visible and there's more data to load
      if (entries[0].isIntersecting && hasMore) {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
      }
    });

    if (node) observer.current.observe(node); // Observe the new last element
  }, [loading, hasMore]);

  return (
    <div>
      {posts.map((post, index) => {
        // If this is the last post, attach the ref
        if (posts.length === index + 1) {
          return <div ref={lastPostElementRef} key={post.id}>{post.title}</div>;
        } else {
          return <div key={post.id}>{post.title}</div>;
        }
      })}
      <div>{loading && 'Loading...'}</div>
      <div>{!hasMore && 'No more posts.'}</div>
    </div>
  );
}
```

### **Large Lists & Virtualization**

**Concept**: Virtualization, or "windowing," is a technique for rendering only the items in a large list that are currently visible in the viewport. This prevents the creation of thousands of DOM nodes, which would be very slow.
**Library**: `react-window` is a popular library for this.

**How it works**:
1. You provide the total number of items, the size of each item, and the component to render for each item.
2. The library calculates which items should be visible based on scroll position.
3. It renders only those items inside an absolutely positioned list, creating the illusion that the entire list is rendered.

```jsx
import { FixedSizeList as List } from 'react-window';

const largeData = Array.from({ length: 10000 }, (_, index) => `Item ${index}`);

// The component to render for each row
const Row = ({ index, style }) => (
  <div style={style}>
    {largeData[index]}
  </div>
);

const VirtualizedList = () => (
  <List
    height={400} // Height of the container
    itemCount={largeData.length} // Total number of items
    itemSize={35} // Height of each item
    width={300} // Width of the container
  >
    {Row}
  </List>
);
```

### **Reusable Modal Component Design**

A good reusable modal should have these characteristics:
1.  **Controlled by props**: Its visibility is controlled by an `isOpen` prop from the parent.
2.  **Callback for closing**: It uses an `onClose` callback to inform the parent to set `isOpen` to `false`.
3.  **Portal**: It uses `ReactDOM.createPortal` to render outside the main DOM hierarchy, avoiding CSS stacking context issues.
4.  **Accessibility**: It traps focus, can be closed with the `Escape` key, and closes when clicking the overlay.

```jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // For styling the overlay and content

function Modal({ isOpen, onClose, children }) {
  // Close modal on 'Escape' key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Use a portal to render the modal at the root level
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Assumes an element with id='modal-root' in your index.html
  );
}
```

---

## CI/CD & Production Readiness

### **CI/CD Pipeline with GitHub Actions**

This is a basic CI pipeline that runs on every push to the `main` branch. It installs dependencies, lints, tests, and builds the application.

File: `.github/workflows/ci.yml`

```yaml
name: Node.js CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v3

      - name: Use Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18.x'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run linter
        run: npm run lint

      - name: Run tests
        run: npm test -- --coverage # Add --coverage for code coverage reports

      - name: Build application
        run: npm run build
        env:
          CI: false # Treat warnings as non-breaking for the build

      # Add a deployment step here, e.g., to Vercel, AWS S3, etc.
      # - name: Deploy to Vercel
      #   uses: amondnet/vercel-action@v20
      #   with:
      #     vercel-token: ${{ secrets.VERCEL_TOKEN }}
      #     vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
      #     vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
```

### **Dockerfile for a Production React App**

This multi-stage Dockerfile first builds the React app in a `node` environment and then serves the static files using a lightweight `nginx` server, resulting in a small and secure production image.

```dockerfile
# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Build the application for production
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:1.21-alpine

# Copy the build output from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy a custom Nginx configuration (optional but recommended for routing)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
```