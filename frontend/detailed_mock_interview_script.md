# 📝 Detailed Frontend Mock Interview Script & Answers (Fresher Edition)

## 🔧 Section 1: React.js / Next.js Core Questions

### 🧠 Conceptual Questions

#### Q1: What is the difference between `useEffect`, `useLayoutEffect`, and `useInsertionEffect`?

**Detailed Answer:**
- **useEffect**: This React hook lets you run code after the component has rendered and the browser has painted the screen. It is commonly used for things like fetching data, setting up subscriptions, or manually changing the DOM. It does NOT block the browser from updating the screen, so the user sees the UI quickly.
  - **Example:**
    ```js
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
    ```
- **useLayoutEffect**: This hook runs synchronously after all DOM changes but before the browser paints the screen. It is useful when you need to measure the DOM or make changes that should happen before the user sees anything (like fixing layout shifts).
  - **Example:**
    ```js
    useLayoutEffect(() => {
      // Measure or update layout here
    }, []);
    ```
- **useInsertionEffect**: This is a special hook for libraries that inject styles into the DOM. It runs before any DOM mutations, so styles are in place before anything is drawn. As a fresher, you’ll rarely use this directly.

**Summary Table:**
| Hook                | When it runs                        | Common Use Case           |
|---------------------|-------------------------------------|---------------------------|
| useEffect           | After paint (async)                 | Data fetching, side effects|
| useLayoutEffect     | After DOM update, before paint      | Layout measurements       |
| useInsertionEffect  | Before DOM update                   | CSS-in-JS libraries       |

---

#### Q2: How does Next.js handle server-side rendering vs static generation?

**Detailed Answer:**
- **Server-Side Rendering (SSR):**
  - The page is generated on the server every time a user requests it. This is done using `getServerSideProps` in Next.js.
  - **When to use:** When your page needs to show up-to-date data for every user (e.g., dashboards, user profiles).
  - **Example:**
    ```js
    export async function getServerSideProps(context) {
      const res = await fetch('https://api.example.com/data');
      const data = await res.json();
      return { props: { data } };
    }
    ```
- **Static Site Generation (SSG):**
  - The page is generated at build time and reused for every user. This is done using `getStaticProps`.
  - **When to use:** For pages that don’t change often (e.g., blog posts, documentation).
  - **Example:**
    ```js
    export async function getStaticProps() {
      const res = await fetch('https://api.example.com/posts');
      const posts = await res.json();
      return { props: { posts } };
    }
    ```
- **Incremental Static Regeneration (ISR):**
  - Next.js can update static pages after you’ve built your site, using a revalidation time. This gives you the best of both worlds: fast static pages that can update in the background.
  - **Example:**
    ```js
    export async function getStaticProps() {
      // ...
      return { props: { posts }, revalidate: 60 } // Regenerate every 60 seconds
    }
    ```

---

#### Q3: Explain hydration in Next.js and why it's important.

**Detailed Answer:**
- **Hydration** is the process where React takes the static HTML sent from the server and attaches event listeners to make it interactive in the browser.
- **Why is it important?**
  - It allows users to see content quickly (good for SEO and user experience), and then makes the page interactive (buttons, forms, etc. start working).
- **Example:**
  1. Server sends HTML: `<button>Click me</button>`
  2. Browser loads React JS code
  3. React "hydrates" the button, so clicking it now runs your JavaScript code

---

#### Q4: What are React Suspense and Concurrent features?

**Detailed Answer:**
- **React Suspense:**
  - Lets you show a fallback UI (like a spinner) while waiting for something (like data or a component) to load.
  - **Example:**
    ```js
    const Profile = React.lazy(() => import('./Profile'));
    function App() {
      return (
        <Suspense fallback={<div>Loading...</div>}>
          <Profile />
        </Suspense>
      );
    }
    ```
- **Concurrent Features:**
  - New in React 18, these allow React to work on multiple tasks at once and prioritize what’s important (like responding to user input quickly).
  - **Example:**
    ```js
    const [isPending, startTransition] = useTransition();
    function handleClick() {
      startTransition(() => {
        // This update is low-priority
        setValue(inputValue);
      });
    }
    ```

---

#### Q5: How do you handle large component trees to avoid performance issues?

**Detailed Answer:**
- **React.memo:** Wraps a component to prevent unnecessary re-renders if props haven’t changed.
- **useMemo/useCallback:** Memoize expensive calculations or functions so they’re not re-created on every render.
- **Code splitting:** Load parts of your app only when needed (using React.lazy or dynamic imports).
- **Virtualization:** For long lists, only render what’s visible (e.g., using `react-window`).
- **Profiler:** Use React DevTools Profiler to find slow parts of your app.

**Example:**
```js
const ExpensiveComponent = React.memo(function ExpensiveComponent(props) {
  // ...
});
```

---

#### Q6: Compare SSR vs CSR vs ISR in Next.js with use cases.

**Detailed Answer:**
- **SSR (Server-Side Rendering):**
  - Page is generated on the server for every request.
  - **Use case:** Personalized dashboards, user-specific data.
- **CSR (Client-Side Rendering):**
  - Page is built in the browser using JavaScript. The server sends a blank HTML page and JS loads the content.
  - **Use case:** Admin panels, apps where SEO is not important.
- **ISR (Incremental Static Regeneration):**
  - Pages are built at build time, but can be updated after deployment.
  - **Use case:** Blogs, product listings that update occasionally.

---

### 🛠 Practical Questions

#### Q7: How would you implement infinite scrolling in React?

**Detailed Answer:**
- **Infinite scrolling** means loading more data as the user scrolls down, instead of using pagination.
- **How to do it:**
  1. Detect when the user has scrolled near the bottom of the page or a list.
  2. Fetch more data and add it to the list.
- **Example using Intersection Observer:**
  ```js
  import { useRef, useCallback } from 'react';
  function useInfiniteScroll(callback) {
    const observer = useRef();
    const lastElementRef = useCallback(node => {
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          callback();
        }
      });
      if (node) observer.current.observe(node);
    }, [callback]);
    return lastElementRef;
  }
  ```

---

#### Q8: How do you dynamically load components in Next.js?

**Detailed Answer:**
- **Dynamic import** lets you load a component only when it’s needed, which can make your app faster.
- **Example:**
  ```js
  import dynamic from 'next/dynamic';
  const DynamicComponent = dynamic(() => import('./Component'), {
    loading: () => <div>Loading...</div>,
    ssr: false // if the component uses browser-only APIs
  });
  ```
- **Preloading:** You can also preload a component in advance:
  ```js
  const preloadComponent = () => {
    import('./Component');
  };
  ```

---

#### Q9: How do you persist global state between page reloads?

**Detailed Answer:**
- **localStorage/sessionStorage:** Store data in the browser so it survives page reloads.
  - **Example:**
    ```js
    // Save
    localStorage.setItem('key', JSON.stringify(value));
    // Load
    const value = JSON.parse(localStorage.getItem('key'));
    ```
- **Redux Persist:** A library that saves Redux state to localStorage.
- **Zustand persist:** Zustand has a built-in middleware for persistence.
- **Next.js getServerSideProps:** You can hydrate state from the server on page load.

---

#### Q10: What are React Server Components (RSCs) and how are they different?

**Detailed Answer:**
- **React Server Components** are components that run on the server, not in the browser.
- **Key points:**
  - They can fetch data and access databases directly.
  - They don’t have access to browser-only APIs (like window or document).
  - They don’t use hooks like useState or useEffect.
  - They help reduce the amount of JavaScript sent to the browser, making apps faster.
- **Example:**
  ```js
  // In a Next.js app directory
  // app/page.js
  export default async function Page() {
    const data = await fetchDataFromDB();
    return <div>{data.title}</div>;
  }
  ```
