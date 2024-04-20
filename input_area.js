//Blogging App using Hooks
import {useState} from 'react'
export default function Blog(){
    
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <>
        <input className="input"
        value={title}
        onChange = {(e) => setTitle(e.target.value)}/>

        <textarea className="input content"
        placeholder="Content of the Blog goes here.."
        value = {content}
        onChange = {(e) => setContent(e.target.value)}/>


        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        <h3>{title}</h3>
        <p>{content}</p>
        </>
        )
    }
