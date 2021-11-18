import React, { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import Login from './components/Login'


const App = () => {
  const [blogs,setBlogs] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
        const response = blogService.getAll()
        console.log("my response",response)
        setBlogs(response)
  }, [])


  if(user===null)
  {
    return(
      <Login user={user} setUser={setUser}/>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      {console.log()
      }
     
    </div>
  )
}

export default App