import { useRef, useState, useEffect } from "react";

export const RefExample = () => {
    const someRefButton = () => {
        console.log(inputRef.current.value);
        focusRef.current.focus();
        focusRef.current.value = "the focus is here";
    };

    const inputRef = useRef();
    const focusRef = useRef();

    const RefCountExample = () => {
        const [count, setCount] = useState(0); // Initialize count with 0
        const previousCount = useRef(0); // Tracks the previous count value

        useEffect(() => {
            previousCount.current = count; // Update the ref with the latest count
        }, [count]); // Run this effect whenever count changes

        return (
            <div>
                <p>Current Count: {count}</p>
                <p>Previous Count: {previousCount.current}</p>
                <button onClick={() => setCount(count + 1)} style={{marginInline: 10}}>Increase</button>
                <button onClick={() => setCount(count - 1)}>Decrease</button>
            </div>
        );
    };

    return (
        <>
            <p>Ref Example</p>
            <input type="text" ref={inputRef} />
            <button onClick={someRefButton}>Button</button>
            <br />
            <br />
            <input type="text" ref={focusRef} />
            <br />
            <br />
            <RefCountExample /> 
        </>
    );
};
