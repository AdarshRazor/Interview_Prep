import { useRef } from "react"

export const RefExample = () => {

    const someRefbuton = () => {
        console.log(inputRef.current.value); 

        focusRef.current.focus()
        focusRef.current.value = "the focus is here"; // This will print the current value of the input field.
    }

    const inputRef = useRef()
    const focusRef = useRef()

    return (
        <>
        <p>Ref Example</p>
        <input type="text" ref={inputRef}/> 
        <button onClick={someRefbuton}>Buton</button>
        <br/><br/>
        <input type="text" ref={focusRef}/> 
        </>
    )
}