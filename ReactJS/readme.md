## Components

building blocks, visible parts, button, inpouts, use as mnay times as u want. 
every component is a function which return markup. they return JSX 
unlike html (static content), React is Dynamic. 
display data using {...} 
JS Function return only one thing, that why we need to wrap up everything in one div or empty compoenent

## Props

properties of an object.
Make prop, give it a value and use pro value.
can u pass anything as a prop ? YES
KEY PROP: react can tell one component apart from another. unique property to identify the component. so it can give error. Use index of map function instead.

## Rendering

Take the code and display the result.
use something like Virtual DOM 'VDOM' to know how and when to render something. DOM (Document Object Model)

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/ff90c309-e44e-44a2-b6cd-8a976e80e8ad)

React Rendering Steps

1. State changed: If state changes, then react update the vitual dom. 
2. React 'diffs': compare updated virtual dom with previous version to see whats change. once it sees whats changeed 
3. 'Reconciliation' with the DOM: Updaet the real dom with the changes that it found.

## Event Handling

handling user interactions - events, namely, by calling a function
some events as in:
* onClick
* onChange
* onSubmit

exmaple: to create an alart we, add onclick event on button and connect it with function that show the alart.

## State

manage data in out react, we use State. Its like a picture of our app at any given time. we cannot use JS variables (they dont cause app to re-render).
We use Hooks so that it will render the app. 

## Controller Components

a controlled component is a form component where the data (typically form input) is managed by the component's state using React's state system. This means React has control over the data and keeps the single source of truth for the information. 

steps:
1. user types, setValue called
2. state updated
3. input reads from state

```javascript
function ControlledInput(){
    const [value, setValue] = useState('');

    return(
        <input
            value = {value}
            onchange={(e)=>setValue(e.target.value)}
        />
    )
}
```

## Hooks

Hooks are the way to add features to function componenets. 5 main types
* **State hooks**: manage state within react components
    * `useState()`
    * `useReducer()`
* Context hooks: use data passed through react context 
    * `useContext()`
* **Ref hooks**: "reference" HTML elements
    * `useRef()`
* **Effect hooks**: external systems browser api
    * `useEffect()`
* Performace hooks: improve app performance by preventing unneccesary work
    * `useMemo()`
    * `useCallback()`

## Purity

A pure React component behaves similarly to a pure function:

**Renders the same JSX for the same props and state:** If a component receives the same props (data passed from parent components) and has the same state, it should always render the identical JSX output.

**Minimal side effects:** While some side effects might be necessary (like fetching data in some scenarios), pure components generally avoid them for better performance and predictability.

<img height="180em" src="https://github.com/AdarshRazor/Interview_Prep/assets/33658792/9689d910-f90c-4b93-8b38-92d1d7473a88">

<img height="180em" src="https://github.com/AdarshRazor/Interview_Prep/assets/33658792/e8e4aa8d-90cf-405d-8ba9-a5c7e6010543">

## Strict Mode

How to prevent erros? Use Strict Mode. 
Detect problem in development

```jsx
import {StrictMode} from 'react'

<StrictMode>
    <App/>
</StrictMode>
```

## Effects

What about the stuffs outside react ? 

What If we want to talk to:
* talk to browser API
* make a request to the server

if you do have an external system, you need a way to step outside from react

`Effects` are code that reach outside react application. we can use *side effects* best done in event handlers

Request (side effect) made in event handler.
```javascript
function handleSubmit(e){
    e.preventDefault();
    post('/api/register',{email, password})
}
```

if side effect can't be run in event handlers, we use `useEffect()` instead.

Fetch data when component loads
```javascript
useEffect(() => {
    fetchData().then(data =>{
        // use data here
    })
})
```

## Refs

Sometimes you have to step out of react and work directly with the DOM.

<img height="280em" src="https://github.com/AdarshRazor/Interview_Prep/assets/33658792/29051939-d047-4f0a-a7f0-c05aa65ecdab">

## Context

Pass data through react components. 

most react app have tons of nested components and get to get data passed through multiple components using props that dont actually need it. Context helps us to jump though the tree at any level and without making props.

steps:

1. Create your context in parent components

```javascript
const AppContext = createContext()
```
2. Wrap that parents component in context components

```javascript
<AppContext.Provider>
    <App/>
</AppContext.Provider>
```

3. Put data on value prop:
```javascript
<AppContext.Provider value="random">
```

4. Get data with useContext
```javascript
function Title(){
    const text = useContext(AppContext)
    return <h1>{text}</h1>
}
```

## Portals

like context but for components.

portals are for components that cant be displayed properly. 

perfects for displaying:
* modals
* dropdowns
* tooltips

![image](https://github.com/AdarshRazor/Interview_Prep/assets/33658792/3e0a8a05-9beb-4891-a31b-2b955e4177aa)

