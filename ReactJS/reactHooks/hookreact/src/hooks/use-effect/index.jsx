import { useEffect, useState } from "react"

export const EffectExample = () => {

    const [data, setData] = useState([])
    const [showNotification, setshowNotification] = useState(false)

    useEffect(() => {

        const fetchData = async () => {
            //fetch data from the api
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await response.json()
            setData(result)
            console.log(result)
        }
        fetchData()
    }, [])

    useEffect(() => {
        console.log('Notification')
    }, [showNotification])

    return(
        <div>
            <button onClick={() => setshowNotification((prev) => !prev)}>Toggle</button>
            <p>This is an example of an Effect Hook in React.</p>
            <h1>Posts</h1>
            <ul>
                {data.map((item,key) => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}

/*
fetching data from api - or side effect
example: json placeholder api - use react query for more info.
*/