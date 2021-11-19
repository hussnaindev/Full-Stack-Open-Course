import axios from 'axios'
const baseUrl = '/api/blogs'

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

const blogService = { getAll, getBlogsByUser}

export default blogService