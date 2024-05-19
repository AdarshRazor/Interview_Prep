# React Hooks

## React Hooks Categories

| **Category** | **Hooks** |
| ----------- | ----------- |
| **State Management** | useState, useReducer, useSyncExternalStore |
| **Ref Hooks** | useRef, useImperativeHandle |
| **Effect Hooks** | useEffect, useLayoutEffect, useInsertionEffect |
| **Context Hooks** | useContext |
| **Transition Hooks** | useTransition, useDeferredValue |
| **Random Hooks** | useDebugValue, useId |
| **Performance Hooks** | useMemo, useCallback |
| **React 19 Hooks** | useFormStatus, useFormState, useOptimistic, use |

## 🔴 State Hooks

### useState
* Manages local component state.
* Best used for simple state management.
* Very frequently used. 🟢

### useReducer
* Manages state logic outside the component.
* Best for complex state logic.
* Occasionally used. 🔵

### useSyncExternalStore
* Subscribes to external store updates.
* Best for consistent external state management.
* Less commonly used. 🟠

## 🔴 Ref Hooks

### useRef
* Creates a mutable ref object.
* Best for accessing DOM elements or persisting values.
* Frequently used. 🟢

### useImperativeHandle
* Customizes instance value for refs.
* Best used with forwardRef for imperative methods.
* Less commonly used. 🟠

## 🔴 Effect Hooks

### useEffect
* Handles side effects in functional components.
* Best for data fetching, subscriptions.
* Very frequently used. 🟢

### useLayoutEffect
* Runs after DOM updates but before the browser paint.
* Best for DOM measurements and synchronizations.
* Occasionally used. 🔵

### useInsertionEffect
* Injects styles into the DOM before mutations.
* Best for critical style updates.
* Less commonly used. 🟠

## 🔴 Context Hooks

### useContext
* Accesses context values.
* Best for global state management.
* Frequently used. 🟢

## 🔴 Transition Hooks

### useTransition
* Manages UI transitions without blocking updates.
* Best for delaying non-urgent updates.
* Occasionally used. 🔵

### useDeferredValue
* Defers updates to non-urgent values.
* Best for performance optimization during heavy rendering.
* Occasionally used. 🔵

## 🔴 Random Hooks

### useDebugValue
* Provides debug values for custom hooks.
* Best for debugging custom hook usage.
* Less commonly used. 🟠

### useId
* Generates stable unique IDs.
* Best for accessibility and component keys.
* Occasionally used. 🔵

## 🔴 Performance Hooks

### useMemo
* Memoizes expensive calculations.
* Best for optimizing performance.
* Frequently used. 🟢

### useCallback
* Memoizes callback functions.
* Best for preventing unnecessary re-renders.
* Frequently used. 🟢

## 🔴 React 19 Hooks

### useFormStatus
* Tracks form submission status.
* Best for handling form states.
* Occasionally used. 🔵

### useFormState
* Manages form state.
* Best for form input and validation management.
* Occasionally used. 🔵

### useOptimistic
* Handles optimistic UI updates.
* Best for temporary UI state updates.
* Occasionally used. 🔵

### use
* Fetches async data in components.
* Best for simplifying async data handling.
* Occasionally used. 🔵
