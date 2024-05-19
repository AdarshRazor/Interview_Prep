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

🟢: Used Often

🔵: Used Occasionally

🟠: Rarely used

### useState
* Manages local component state.
* Best used for simple state management.
* Very frequently used. 🟢

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/056ad9f2-118d-40fc-9e1c-293bfce17dc5)
![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/ac4c8835-aa46-4229-a4cf-97771b1d894b)

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/d38f6549-cebd-4555-996f-1db2f55a608d)
![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/c9fb3407-2dd9-4bc4-b965-04f27f45e2de)

### useReducer (for more complex state management)
* Manages state logic outside the component.
* Best for complex state logic.
* Occasionally used. 🔵

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/2a511f85-496a-405d-878e-abff177b5c68)

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

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/ea7cb290-ef4c-4659-8c52-4e19390a521d)

### useEffect
* Handles side effects in functional components.
* Best for data fetching, subscriptions.
* Very frequently used. 🟢

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/832fee4f-d35b-4fbc-8ab5-a392df604d2d)

### useLayoutEffect
* Runs after DOM updates but before the browser paint.
* Best for DOM measurements and synchronizations.
* Occasionally used. 🔵

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/07faa00b-3c6d-4ff1-8e00-035e68695bdd)

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
