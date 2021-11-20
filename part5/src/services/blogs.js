import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const setToken = newToken =>
{
  token = `bearer ${newToken}`

}

const getAll = async() => {
  try
  {
    const response = await axios.get(baseUrl)
    console.log(response.data)
    return response.data
  }

  catch(error)
  {
    console.log("error is",error.message)
  }

}

const getBlogsByUser = async(id) =>
{
  try
  {
    const response = await axios.get(`${baseUrl}/${id}`)
    console.log(response.data)
    return response.data
  }

  catch(error)
  {
  
    console.log("error is",error.message)
  }
}

const createBlog = async (blog) =>
{
  try
  {
    const config = {
      headers: { Authorization: token },
    }

    const response = await axios.post(baseUrl,blog,config)
    console.log('new blog response',response.data)
    return response.data
  }

  catch(error)
  {
    console.log(error.message)
  }
}

const blogService = { getAll, getBlogsByUser, createBlog, setToken}

export default blogService