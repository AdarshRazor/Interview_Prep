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