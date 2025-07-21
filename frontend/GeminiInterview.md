# Practical & Coding-Based Interview Questions for Senior Frontend (JS, React, Redux, State Management)

---

## JavaScript & TypeScript

- **Implement a deep clone function for nested objects and arrays.**
- **Write a debounce and a throttle function in JavaScript.**
- **Explain and demonstrate variable hoisting with var, let, and const.**
- **Show how to use closures to create a private counter.**
- **TypeScript:**
  - Define an interface for a user object with optional and readonly properties.
  - Implement function overloading in TypeScript.
  - Write a function that uses type assertions and explain when to use them.

---

## React.js (Advanced & Practical)

- **Custom Hooks:**
  - Write a custom hook (e.g., useFetch, useDebounce, useLocalStorage) and show how to use it in a component.
- **Performance Optimization:**
  - Refactor a component to avoid unnecessary re-renders using React.memo, useMemo, and useCallback.
  - Implement code splitting and lazy loading for a large component.
- **Refs:**
  - Show how to use useRef to manage focus or integrate with a third-party DOM library.
- **Context API:**
  - Implement a global theme/context provider and consume it in a nested component.
- **Conditional Rendering:**
  - Build a component that shows/hides UI based on authentication state.
- **React Router:**
  - Set up protected routes and redirect unauthenticated users.
- **StrictMode:**
  - Add React.StrictMode to an app and explain what warnings it surfaces.
- **Class vs Functional Components:**
  - Convert a class component with lifecycle methods to a functional component using hooks.
- **React Server Components (RSC):**
  - Write a simple RSC in Next.js app directory and explain its limitations.

---

## Next.js (Practical)

- **SSR/SSG/ISR:**
  - Implement getServerSideProps, getStaticProps, and ISR in a Next.js page.
- **Dynamic Imports:**
  - Use next/dynamic to load a component only on the client.
- **API Routes:**
  - Create a simple API route in /pages/api and fetch from it in a component.
- **Persisting State:**
  - Use localStorage or Redux Persist to keep state across reloads.
- **Hydration:**
  - Explain and demonstrate hydration issues and how to debug them.

---

## State Management (Redux, Context API, Zustand)

- **Redux:**
  - Implement a Redux store with actions, reducers, and selectors for a todo list.
  - Add Redux Thunk or Redux Saga for async actions (e.g., fetch todos from API).
  - Use Redux Toolkit to simplify store setup and async logic.
  - Write tests for a reducer and an action creator.
  - Implement feature toggles using Redux state and selectors.
  - Normalize form state in Redux and handle validation.
  - Handle real-time updates (e.g., via WebSocket) by dispatching actions.
- **Context API:**
  - Replace prop drilling with Context for a theme or user state.
- **Zustand:**
  - Set up a global store with Zustand and persist part of the state.

---

## REST API Integration (Frontend)

- **CRUD Operations:**
  - Write code to perform GET, POST, PUT, DELETE requests using fetch or Axios.
- **Error Handling:**
  - Handle and display API errors in the UI.
- **CORS:**
  - Explain a CORS error and how to resolve it in a frontend app.
- **Authentication:**
  - Store and send JWT tokens securely from the frontend.
- **Performance:**
  - Implement caching and pagination for large API responses.

---

## Testing (Jest, React Testing Library, Cypress)

- **Jest:**
  - Write a unit test for a pure function and a React component.
  - Mock a module and test async code with Jest.
  - Use snapshot testing for a component.
- **React Testing Library:**
  - Render a component and test user interactions (e.g., clicking a button updates state).
- **Cypress:**
  - Write an end-to-end test for a login flow.

---

## Real-World Scenarios & System Design

- **Infinite Scrolling:**
  - Implement infinite scroll in React using Intersection Observer.
- **Large Lists:**
  - Use virtualization (e.g., react-window) to efficiently render large lists.
- **Component Design:**
  - Design a reusable modal or dropdown component.
- **State Persistence:**
  - Persist global state between reloads using localStorage or a persistence middleware.
- **Micro Frontends:**
  - Explain how you would split a large app into micro frontends and manage shared state.

---

## CI/CD & Production Readiness

- **Set up a CI/CD pipeline for a React/Next.js app (lint, test, build, deploy).**
- **Write a Dockerfile for a production React app.**
- **Configure environment variables securely for different environments.**

---

## Bonus: AWS & Cloud Integration

- **Integrate S3 for file uploads from the frontend.**
- **Use Cognito for authentication and handle token refresh.**
- **Explain how to securely access DynamoDB from a frontend app (via API).**

---

*Use these as coding prompts or discussion starters for practical, hands-on interview rounds.*
