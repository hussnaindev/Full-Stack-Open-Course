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

export default { getAll }