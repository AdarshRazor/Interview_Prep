import { useState } from "react";

export const StateExample = () => {

    const [count, setCount] = useState(0)

    const increaseCount = () => {
        setCount((prev) => prev + 1)
        console.log(count);
    }

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={increaseCount}> Increase Counter</button>
        </div>
    )
}

/*
so if I put the count in normal variable. It will change but it needs to re-render in order to see the change.

Here comes the useState hook
*/