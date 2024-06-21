# React Interview Preparation Questions

## 1. Introduction to React

### Questions:
1. What is React?
2. What are the key features of React?
3. What are the advantages of using React?
4. What are the disadvantages of using React?
5. How does React compare to other frameworks like Angular and Vue.js?

### Answers:
1. **What is React?**
   React is a JavaScript library for building user interfaces, maintained by Facebook. It allows developers to create `reusable UI components`.

2. **What are the key features of React?**
   - `JSX`: JavaScript XML, a syntax extension for writing HTML-like code in JavaScript.
   - `Components`: Building blocks of a React application.
   - `Virtual DOM`: Efficient way of updating the view in a web application. 
      ```
      When JavaScript interacts with the HTML structure, it manipulates the real DOM.
      Direct manipulation of the real DOM can be slow and inefficient, especially for complex and large applications, because even small changes can cause the entire document to be re-rendered.
      ``` 
   - `One-way data binding`: Data flows in a single direction.
   - `Unidirectional data flow`: Ensures the application state is predictable.

3. **What are the advantages of using React?**
   - `Easy` to learn and use.
   - `Component-based architecture` allows for reusable code.
   - High performance due to `virtual DOM`.
   - Strong `community support` and extensive ecosystem.
   - Can be used for both `client-side` and `server-side` rendering.

4. **What are the disadvantages of using React?**
   - Rapidly changing environment, requiring `continuous learning`.
   - JSX syntax can be `unfamiliar and challenging` for new developers.
   - Requires `integration with other libraries` for full-featured applications (e.g., routing, state management).

5. **How does React compare to other frameworks like Angular and Vue.js?**
   - React is a library focused on building UI components, while Angular is a full-fledged framework.
   - React uses a virtual DOM, while Vue.js also uses a virtual DOM but offers two-way data binding.
   - Angular has a steep learning curve compared to React.
   - Vue.js is often considered more approachable for beginners compared to React and Angular.

## 2. React Components

### Questions:
1. What are functional components in React?
2. What are class components in React?
3. What are the main differences between functional and class components?
4. What are stateful and stateless components?
5. How do you convert a class component to a functional component?

### Answers:
1. **What are functional components in React?**
   Functional components are `simple JavaScript functions that return JSX`. They **do not** have their own `state or lifecycle methods` before React 16.8.

2. **What are class components in React?**
   Class components are ES6 classes that extend from `React.Component` and can have their own state and lifecycle methods.

3. **What are the main differences between functional and class components?**
   - Functional components are simpler and do not have their own state or lifecycle methods (pre-Hooks).
   - Class components can maintain their own state and have access to lifecycle methods.
   - Functional components use Hooks to manage state and side effects.

4. **What are stateful and stateless components?**
   - Stateful components `maintain their own state` and can change their output over time.
   - Stateless components `do not maintain state` and always render the same output given the same props.

5. **How do you convert a class component to a functional component?**
   Replace the class definition with a function and use Hooks to manage state and lifecycle methods.

## 3. JSX

### Questions:
1. What is JSX?
2. What are the benefits of using JSX?
3. How do you embed expressions in JSX?
4. What are the differences between JSX and HTML?
5. Can you use JSX without React?

### Answers:
1. **What is JSX?**
   JSX stands for JavaScript XML. It is a syntax extension that allows writing HTML tags within JavaScript code.

2. **What are the benefits of using JSX?**
   - JSX makes code easier to read and write.
   - It allows embedding `JavaScript expressions directly within HTML`.
   - JSX is type-safe and provides `better error messages`.

3. **How do you embed expressions in JSX?**
   You can embed JavaScript expressions in JSX using curly braces `{}`.

4. **What are the differences between JSX and HTML?**
   - JSX allows `embedding JavaScript expressions`.
   - In JSX, attributes are **camelCase** (e.g., `className` instead of `class`).
   - JSX must have a `single parent` element.

5. **Can you use JSX without React?**
   JSX is designed to be used with React, but with a `proper transpiler setup`, it can be used with other libraries that support JSX syntax.

## 4. Props

### Questions:
1. What are props in React?
2. How do you pass props to a component?
3. What are default props and how do you define them?
4. How can you validate props using PropTypes?
5. How do you use the spread operator with props?

### Answers:
1. **What are props in React?**
   Props (short for properties) are read-only attributes used to pass data from parent to child components.

2. **How do you pass props to a component?**
   Props are passed to a component as **attributes** in the JSX tag: `<Component propName={value} />`.

3. **What are default props and how do you define them?**
   Default props are values assigned to props if no value is provided by the parent component. They can be defined using the `defaultProps` property.

4. **How can you validate props using PropTypes?**
   PropTypes is a library that allows you to specify the type and requirements of props using `Component.propTypes`.

5. **How do you use the spread operator with props?**
   The spread operator (`...`) can be used to pass all props of an object to a component: `<Component {...props} />`.

## 5. State

### Questions:
1. What is state in React?
2. How do you initialize state in a class component?
3. How do you initialize state in a functional component?
4. How do you update the state in a class component?
5. How do you handle multiple state variables in a functional component?

### Answers:
1. **What is state in React?**
   State is an object that holds data that `may change` over the lifecycle of the component.

2. **How do you initialize state in a class component?**
   State is initialized in the constructor: `this.state = { key: value }`.

3. **How do you initialize state in a functional component?**
   State is initialized using the `useState` Hook: `const [state, setState] = useState(initialValue)`.

4. **How do you update the state in a class component?**
   State is updated using the `setState` method: `this.setState({ key: newValue })`.

5. **How do you handle multiple state variables in a functional component?**
   Multiple state variables can be managed by calling `useState` multiple times: `const [var1, setVar1] = useState(value1); const [var2, setVar2] = useState(value2)`.

## 6. Lifecycle Methods (Class Components)

### Questions:
1. What is the purpose of the constructor method in a React class component?
2. What is the `componentDidMount` method used for?
3. When should you use `shouldComponentUpdate`?
4. What is the `componentDidUpdate` method used for?
5. How do you clean up resources in a class component?

### Answers:
1. **What is the purpose of the constructor method in a React class component?**
   The constructor is used for `initializing state and binding event handlers`.

2. **What is the `componentDidMount` method used for?**
   `componentDidMount` is called after the component is mounted and is used for initializing data that requires DOM elements.

3. **When should you use `shouldComponentUpdate`?**
   `shouldComponentUpdate` is used to optimize performance by preventing unnecessary re-renders.

4. **What is the `componentDidUpdate` method used for?**
   `componentDidUpdate` is called after a component updates and is used for operations that depend on the DOM, such as network requests.

5. **How do you clean up resources in a class component?**
   Resources are cleaned up in the `componentWillUnmount` method, such as removing event listeners or canceling network requests.

## 7. Hooks (Functional Components)

### Questions:
1. What is the purpose of the `useState` Hook?
2. How does the `useEffect` Hook work?
3. How do you use the `useContext` Hook?
4. When should you use the `useReducer` Hook?
5. What is the purpose of the `useRef` Hook?

### Answers:
1. **What is the purpose of the `useState` Hook?**
   `useState` is used to add state to functional components.

2. **How does the `useEffect` Hook work?**
   `useEffect` allows you to perform side effects in functional components, similar to lifecycle methods in class components.

3. **How do you use the `useContext` Hook?**
   `useContext` is used to access the value of a context directly within a functional component.

4. **When should you use the `useReducer` Hook?**
   `useReducer` is used for managing complex state logic, similar to Redux but within a component.

5. **What is the purpose of the `useRef` Hook?**
   `useRef` is used to access DOM elements directly and to persist values across renders without causing re-renders.

## 8. Event Handling

### Questions:
1. How do you handle events in React?
2. What are synthetic events in React?
3. How do you pass arguments to event handlers in React?
4. How do you prevent the default behavior of an event in React?
5. How do you stop event propagation in React?

### Answers:
1. **How do you handle events in React?**
   Events are handled by passing a function as a prop to the event attribute: `<button onClick={handleClick}>`.

2. **What are synthetic events in React?**
   Synthetic events are cross-browser wrapper around native events, ensuring they behave consistently across different browsers.

3. **How do you pass arguments to event handlers in React?**
   Use an arrow function to pass arguments: `<button onClick={() => handleClick(arg)}>`.

4. **How do you prevent the default behavior of an event in React?**
   Use `event.preventDefault()` inside the event handler.

5. **How do you stop event propagation in React?**
   Use `event.stopPropagation()` inside the event handler.

## 9. Conditional Rendering

### Questions:
1. How do you conditionally render components in React using if-else statements?
2. How do you use ternary operators for conditional rendering in React?
3. How can you use the logical && operator for conditional rendering?
4. How do you render components based on switch-case in React?
5. How do you conditionally render a list of components?

### Answers:
1. **How do you conditionally render components in React using if-else statements?**
   Use if-else statements inside the `render` method or functional component body.

2. **How do you use ternary operators for conditional rendering in React?**
   Use ternary operators directly in JSX: `{condition ? <ComponentA /> : <ComponentB />}`.

3. **How can you use the logical && operator for conditional rendering?**
   Render a component only if a condition is true: `{condition && <Component />}`.

4. **How do you render components based on switch-case in React?**
   Use a switch-case statement inside the `render` method or functional component body.

5. **How do you conditionally render a list of components?**
   Map over an array and use conditional logic within the map function.

## 10. Lists and Keys

### Questions:
1. How do you render a list of components in React?
2. What is the importance of keys in lists?
3. How do you generate unique keys for list items?
4. What are the consequences of not using keys in lists?
5. How do you handle dynamic lists in React?

### Answers:
1. **How do you render a list of components in React?**
   Use the `map` function to iterate over an array and return a component for each item.

2. **What is the importance of keys in lists?**
   Keys help React identify which items have changed, are added, or are removed, optimizing the rendering process.

3. **How do you generate unique keys for list items?**
   Use a unique identifier from the data, such as an ID, or use the array index (though not recommended).

4. **What are the consequences of not using keys in lists?**
   React may not update the components efficiently, leading to performance issues and unexpected behavior.

5. **How do you handle dynamic lists in React?**
   Manage the list state using `useState` and update the state when the list changes.

## 11. Forms and Controlled Components

### Questions:
1. How do you handle form inputs in React?
2. What are controlled components in React?
3. How do you handle multiple inputs in a React form?
4. How do you implement form validation in React?
5. What are uncontrolled components and when should you use them?

### Answers:
1. **How do you handle form inputs in React?**
   Use the `onChange` event handler to update the state with the input value.

2. **What are controlled components in React?**
   Controlled components have their value controlled by React state.

3. **How do you handle multiple inputs in a React form?**
   Use a single change handler that updates the state based on the input name.

4. **How do you implement form validation in React?**
   Implement validation logic inside the change or submit handler and update the state with validation messages.

5. **What are uncontrolled components and when should you use them?**
   Uncontrolled components store their own state internally and are accessed via refs. Use them for simple forms or when integrating with non-React code.

## 12. Context API

### Questions:
1. What is the Context API in React?
2. How do you create a context in React?
3. How do you provide a context value to components?
4. How do you consume context in a functional component?
5. How do you consume context in a class component?

### Answers:
1. **What is the Context API in React?**
   The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

2. **How do you create a context in React?**
   Use `React.createContext(initialValue)` to create a context.

3. **How do you provide a context value to components?**
   Use the `Context.Provider` component and pass the value as a prop.

4. **How do you consume context in a functional component?**
   Use the `useContext` Hook with the context object.

5. **How do you consume context in a class component?**
   Use the `Context.Consumer` component or `static contextType` to access context.

## 13. React Router

### Questions:
1. What is React Router?
2. How do you set up React Router in a React application?
3. How do you navigate between different routes in React Router?
4. How do you use route parameters in React Router?
5. How do you create nested routes in React Router?

### Answers:
1. **What is React Router?**
   React Router is a library for routing in React applications, allowing navigation between different components.

2. **How do you set up React Router in a React application?**
   Install React Router and use `BrowserRouter` to wrap the application. Define routes using `Route` components.

3. **How do you navigate between different routes in React Router?**
   Use the `Link` component for navigation or programmatically navigate using the `useHistory` Hook or `history` object.

4. **How do you use route parameters in React Router?**
   Define route parameters in the path, and access them using `useParams` Hook or `props.match.params`.

5. **How do you create nested routes in React Router?**
   Define nested `Route` components within a parent route component.

## 14. State Management

### Questions:
1. How do you manage local component state in React?
2. What is lifting state up in React?
3. How do you manage global state using the Context API?
4. What are the core concepts of Redux?
5. How do you connect Redux to React components?

### Answers:
1. **How do you manage local component state in React?**
   Use `useState` in functional components or `this.state` in class components.

2. **What is lifting state up in React?**
   Moving state to the nearest common ancestor of components that need to share the state.

3. **How do you manage global state using the Context API?**
   Use `Context.Provider` to provide the state and `useContext` to consume it in functional components.

4. **What are the core concepts of Redux?**
   - Actions: Plain objects describing what happened.
   - Reducers: Functions that determine state changes based on actions.
   - Store: Holds the application state.
   - Dispatching: Sending actions to the store.

5. **How do you connect Redux to React components?**
   Use `react-redux` library, specifically the `Provider` component to wrap the app and `connect` function or `useSelector` and `useDispatch` Hooks.

## 15. Performance Optimization

### Questions:
1. How do you avoid unnecessary re-renders in React?
2. How do you use React.memo for performance optimization?
3. What is the purpose of the useCallback Hook?
4. How do you implement lazy loading in React?
5. What is code splitting and how does it improve performance?

### Answers:
1. **How do you avoid unnecessary re-renders in React?**
   Use `React.memo`, `PureComponent`, or `shouldComponentUpdate` to prevent re-renders when props/state have not changed.

2. **How do you use React.memo for performance optimization?**
   Wrap a functional component with `React.memo` to memoize the component, preventing re-renders if props have not changed.

3. **What is the purpose of the useCallback Hook?**
   `useCallback` memoizes callback functions, preventing them from being re-created on every render.

4. **How do you implement lazy loading in React?**
   Use `React.lazy` and `Suspense` to load components lazily, reducing the initial load time.

5. **What is code splitting and how does it improve performance?**
   Code splitting divides the application into smaller bundles that are loaded on demand, reducing the initial load time and improving performance.

## 16. Testing in React

### Questions:
1. What are the benefits of testing in React?
2. How do you set up Jest in a React project?
3. How do you write unit tests for React components?
4. What is snapshot testing and how do you use it?
5. How do you mock API calls in React tests?

### Answers:
1. **What are the benefits of testing in React?**
   - Ensures code correctness.
   - Helps prevent bugs.
   - Facilitates refactoring.
   - Provides documentation for components.

2. **How do you set up Jest in a React project?**
   Jest is included in Create React App by default. For other setups, install Jest using `npm` or `yarn` and configure it.

3. **How do you write unit tests for React components?**
   Use `react-testing-library` or `enzyme` to render components and make assertions on their output.

4. **What is snapshot testing and how do you use it?**
   Snapshot testing captures the output of a component and compares it to a reference snapshot file. Use `expect(component).toMatchSnapshot()`.

5. **How do you mock API calls in React tests?**
   Use Jest's `jest.mock` function to mock API modules or use `msw` (Mock Service Worker) to mock API responses.

## 17. API Integration

### Questions:
1. How do you fetch data from an API in React?
2. How do you handle loading and error states when fetching data?
3. How do you use the `fetch` API in a React component?
4. How do you use Axios to fetch data in React?
5. How do you handle asynchronous data in React?

### Answers:
1. **How do you fetch data from an API in React?**
   Use `useEffect` to trigger the fetch when the component mounts and update the state with the fetched data.

2. **How do you handle loading and error states when fetching data?**
   Maintain loading and error state variables and update them based on the fetch request status.

3. **How do you use the `fetch` API in a React component?**
   Call `fetch` inside `useEffect`, convert the response to JSON, and update the component state with the data.

4. **How do you use Axios to fetch data in React?**
   Install Axios, import it in the component, and use `axios.get` inside `useEffect` to fetch data and update the state.

5. **How do you handle asynchronous data in React?**
   Use async/await syntax inside `useEffect` and ensure proper error handling with try/catch blocks.

## 18. TypeScript with React

### Questions:
1. How do you set up TypeScript in a React project?
2. How do you type props in a functional component?
3. How do you type state in a class component?
4. How do you use TypeScript with React Hooks?
5. How do you type context values in TypeScript?

### Answers:
1. **How do you set up TypeScript in a React project?**
   Use Create React App with the TypeScript template or configure TypeScript manually by installing TypeScript and adding a `tsconfig.json` file.

2. **How do you type props in a functional component?**
   Define an interface for the props and use it as a type annotation: `const Component: React.FC<Props> = (props) => { ... }`.

3. **How do you type state in a class component?**
   Define an interface for the state and use it as a type annotation: `class Component extends React.Component<Props, State> { ... }`.

4. **How do you use TypeScript with React Hooks?**
   Use type annotations for state and dispatch values: `const [state, setState] = useState<Type>(initialValue)`.

5. **How do you type context values in TypeScript?**
   Define an interface for the context value and use it with `createContext<Type>(initialValue)`.

## 19. Miscellaneous

### Questions:
1. What are error boundaries in React?
2. How do you create a portal in React?
3. What are Higher Order Components (HOC) and how do you use them?
4. What is the purpose of render props?
5. How do you use fragments in React?

### Answers:
1. **What are error boundaries in React?**
   Error boundaries are components that catch JavaScript errors in their child component tree, logging the error and displaying a fallback UI.

2. **How do you create a portal in React?**
   Use `ReactDOM.createPortal` to render children into a DOM node outside the parent component's DOM hierarchy.

3. **What are Higher Order Components (HOC) and how do you use them?**
   HOCs are functions that take a component and return a new component, allowing code reuse and logic abstraction.

4. **What is the purpose of render props?**
   Render props is a technique for sharing code between components using a prop whose value is a function.

5. **How do you use fragments in React?**
   Use `<React.Fragment>` or the shorthand `<>` to group multiple elements without adding extra nodes to the DOM.

## 20. React Ecosystem and Tools

### Questions:
1. What is Create React App and how do you use it?
2. What is Next.js and how does it differ from Create React App?
3. What is React Native and how does it differ from React?
4. How do you use Storybook in a React project?
5. What are styled components and how do you use them?

### Answers:
1. **What is Create React App and how do you use it?**
   Create React App is a tool to set up a new React project with a standardized build configuration. Use `npx create-react-app my-app` to create a new project.

2. **What is Next.js and how does it differ from Create React App?**
   Next.js is a React framework for server-side rendering and static site generation, offering features like file-based routing and API routes.

3. **What is React Native and how does it differ from React?**
   React Native is a framework for building native mobile apps using React. It uses native components instead of web components.

4. **How do you use Storybook in a React project?**
   Install Storybook and configure it in your project. Use it to develop and test UI components in isolation.

5. **What are styled components and how do you use them?**
   Styled components is a library for styling React components using tagged template literals. Create styled components with the `styled` function.

## 21. Project Structure and Best Practices

### Questions:
1. How do you organize a React project?
2. What are best practices for file and folder structure in React?
3. How do you write clean and maintainable code in React?
4. What are common performance pitfalls in React and how do you avoid them?
5. How do you handle large projects in React?

### Answers:
1. **How do you organize a React project?**
   Organize by feature or functionality, separating components, styles, and utilities into different folders.

2. **What are best practices for file and folder structure in React?**
   Keep components modular, use clear naming conventions, and separate concerns (e.g., components, hooks, context).

3. **How do you write clean and maintainable code in React?**
   Follow coding standards, use PropTypes or TypeScript, write reusable components, and maintain a consistent code style.

4. **What are common performance pitfalls in React and how do you avoid them?**
   Avoid unnecessary re-renders, optimize state management, use memoization, and lazy load components.

5. **How do you handle large projects in React?**
   Break down the project into smaller modules, use code splitting, manage state efficiently, and maintain a scalable architecture.
