import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'
import NewBlog from './components/NewBlog'
import Message from './components/Message'


const App = () => {
  const [blogs,setBlogs] = useState([])
  const [user, setUser] = useState(null)
  const [errorMessage,setErrorMessage] = useState(null)
  const [successMessage,setSuccessMessage] = useState(null)

  const handleLogout = () =>
  {
    window.localStorage.removeItem('user')
    setUser(null)
  }

  const fetchAllBlogs = async() =>
  {
    const response = await blogService.getAll()
    console.log("my response",response)
    setBlogs(response)
  }

  const fetchUserBlogs = async() =>
  {
    const response = await blogService.getBlogsByUser(user.id)
    console.log("my response",response)
    response.sort(function(a,b){return b.likes - a.likes})
    setBlogs(response)
  }

  useEffect(() => {
        
          if(user!==null)
          {
            blogService.setToken(user.token)
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
      <Login user={user} setUser={setUser} errorMessage={errorMessage} setErrorMessage={setErrorMessage} successMessage={successMessage} setSuccessMessage={setSuccessMessage} />
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <Message errorMessage={errorMessage} successMessage={successMessage}/>
      <div>
        {user.name} logged in <button onClick={handleLogout}>logout</button>
        <NewBlog />
      </div>
      {
        blogs.map(blog =>
          <Blog key={blog.id} blog={blog} fetchUserBlogs={fetchUserBlogs}/>)
      }
     
    </div>
  )
}

export default App