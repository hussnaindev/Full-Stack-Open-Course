import axios from "axios"
const baseUrl = '/api/login'

const loginService = async (credentials) =>
{
    try{
        console.log("login credentials",credentials)
        const user = await axios.post(baseUrl,credentials)
        console.log(user)
        return user
    }

    catch(error)
    {
        console.log("error is",error.message)
    }
   
}

export default {loginService}