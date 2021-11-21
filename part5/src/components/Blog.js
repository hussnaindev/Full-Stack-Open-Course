import React, { useState } from 'react'
import blogService from '../services/blogs'
const Blog = ({blog}) => {

  const [blogInfoVisible,setBlogInfoVisible] = useState(false)
  const [likes,setLikes] = useState(blog.likes)

  const hideWhenVisible = {display: blogInfoVisible ? 'none':''}
  const showWhenVisible = {display: blogInfoVisible ? '':'none'}

  const buttonText = {value: blogInfoVisible ? 'hide':'view'}

  const handleLikes = async (blog) =>
  {
    const updatedBlog = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: (likes+1)
    }
    const response = await blogService.updateBlog(updatedBlog,blog.id)
    
    console.log(response.data)
    console.log(response.status)

    if(response.status === 200)
    {
      console.log('block is working')
      setLikes(response.data.likes)
     
    }
  }

  const toggleVisibilty = () => setBlogInfoVisible(!blogInfoVisible)
  console.log(blog)

  return(
    
      <div className="blogList">
        <div >
            <span >
              {blog.title} {blog.author} 
            </span>
            <span>
              <button onClick={toggleVisibilty}>{buttonText.value}</button>
            </span>
        </div>

        <div style={showWhenVisible}>
            <p>{blog.url}</p>
            {console.log('likes',likes)}
            <span>{likes} <button onClick={() => handleLikes(blog)}>likes</button></span>
            <p>{blog.user.name}</p>
           
        </div>
        
      </div>
  )
}

export default Blog