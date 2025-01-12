import { useReducer } from "react"

const reducer = (state, action) => {
    switch (action.type){
        case "increment":
            return {...state, count: state.count + 1 }
        case "decrement":
            return {...state, count: state.count - 1 }
        case "double":
            return {...state, count: state.count * 2 }
        default:
            console.log("No action type");
    }
}

export const ReducerExample = () => {

    const [state, dispatch] = useReducer(reducer, {count: 0});

    return(
        <div>
            <p>Hey Reducer</p>
            <p>Count: {state.count}</p>
            <button onClick={()=> dispatch({ type: "increment" })}>+</button>
            <button onClick={()=> dispatch({ type: "decrement"})}>-</button>
            <button onClick={()=> dispatch({ type: "double"})}>*</button>
        </div>
    )
}
 
// using useState

/*
export const ReducerExample = () => {
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>Hey Reducer</p>
            <p>Count: {count}</p>
            <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={()=> setCount((prev) => prev - 1)}>Decrement</button>
        </div>
    )
}
*/