import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import NewBlog from './components/NewBlog'


const App = () => {
  const [blogs,setBlogs] = useState([])
  const [user, setUser] = useState(null)

  const handleLogout = () =>
  {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  useEffect(() => {
          async function fetchAllBlogs()
          {
            const response = await blogService.getAll()
            console.log("my response",response)
            setBlogs(response)
          }

          async function fetchUserBlogs()
          {
            console.log(user.id)
            const response = await blogService.getBlogsByUser(user.id)
            console.log("my response",response)
            setBlogs(response)
          }

          if(user!==null)
          {
            fetchUserBlogs()
          }
          
  }, [user])

  useEffect(()=>
  {
    console.log('second useEffect hook working')
    setUser(JSON.parse(window.localStorage.getItem('user')))
    
    
  },[])



  if(user===null)
  {
    return(
      <Login user={user} setUser={setUser}/>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <div>
        {user.name} logged in <button onClick={handleLogout}>logout</button>
        <NewBlog />
      </div>
      {
        blogs.map(blog =>
          <Blog key={blog.id} blog={blog}/>)
      }
     
    </div>
  )
}

export default App