import react,{useState} from "react";
import blogService from "../services/blogs";


const NewBlog = ({user}) =>
{
    const [title,setTitle] = useState('')
    const [author,setAuthor] = useState('')
    const [url,setURL] = useState('')

    const handleTitle = (event) =>
    {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    const handleAuthor = (event) =>
    {
        console.log(event.target.value)
        setAuthor(event.target.value)

    }

    const handleURL = (event) =>
    {
        console.log(event.target.value)
        setURL(event.target.value)
    }

    const handleNewBlog = async (event) =>
    {
        event.preventDefault()
        const blog = {title,author,url,user}
        console.log(blog)
        await blogService.createBlog(blog)
    }

    return(
        <div>
        <h1>create new</h1>
        <form onSubmit={handleNewBlog}>
            <div>
                <label>title:</label>
                <input type="text" value={title} onChange={handleTitle}></input>
            </div>

            <div>
                <label>author:</label>
                <input type="text" value={author} onChange={handleAuthor}></input>
            </div>

            <div>
                <label>url</label>
                <input type="text" value={url} onChange={handleURL}></input>
            </div>

            <div>
                <button type="submit">create</button>
            </div>
            
        </form>
        </div>
    )
}

export default NewBlog