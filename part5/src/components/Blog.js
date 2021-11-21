import React, { useState } from 'react'
const Blog = ({blog}) => {

  const [blogInfoVisible,setBlogInfoVisible] = useState(false)

  const hideWhenVisible = {display: blogInfoVisible ? 'none':''}
  const showWhenVisible = {display: blogInfoVisible ? '':'none'}

  const buttonText = {value: blogInfoVisible ? 'hide':'view'}

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
            <span>{blog.likes} <button>likes</button></span>
            <p>{blog.user.name}</p>
           
        </div>
        
      </div>
  )
}

export default Blog