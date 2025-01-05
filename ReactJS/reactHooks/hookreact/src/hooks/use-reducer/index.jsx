import { useState } from "react"

export const ReducerExample = () => {

    const [state, dispatch]

    return(
        <div>
            <p>Hey Reducer</p>
            <p>Count: {count}</p>
            <button onClick={()=> setCount((prev) => prev + 1)}>Increment</button>
            <button onClick={()=> setCount((prev) => prev - 1)}>Decrement</button>
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