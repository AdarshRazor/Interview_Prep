import { createContext, useContext, useState } from "react"

const GlobalStateContext = createContext(null)

export const ContextExample = () => {
    const [toggle, setToggle] = useState(false)
    
    return(
        <GlobalStateContext.Provider value={{toggle, setToggle}}>
            <div>
                <h1>Parent Component</h1>
                <ChildToggle/>
                <ChildDisplay/>
            </div>
        </GlobalStateContext.Provider>
    )
}

const ChildToggle = () => {
    const {setToggle} = useContext(GlobalStateContext)

    return(
        <div>
            <button onClick={() => setToggle((prev) => !prev)}>Toggle State</button>
        </div>
    )
}

const ChildDisplay = () => {
    const {toggle} = useContext(GlobalStateContext)
    return(
        <div>
            Current State: {toggle ? "ON" : "OFF"}
        </div>
    )
}



// when using useState

/*
export const ContextExample = () => {
    const [toggle, setToggle] = useState(false)
    return(
        <div>
            <h1>Parent Component</h1>
            <ChildToggle setToggle={setToggle}/>
            <ChildDisplay toggle={toggle}/>
        </div>
    )
}

const ChildToggle = ({setToggle}) => {
    return(
        <div>
            <button onClick={() => setToggle((prev) => !prev)}>Toggle State</button>
        </div>
    )
}

const ChildDisplay = ({toggle}) => {
    return(
        <div>
            Current State: {toggle ? "ON" : "OFF"}
        </div>
    )
}
*/