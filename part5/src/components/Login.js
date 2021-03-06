import React from "react";
import { useState } from "react/cjs/react.development";
import blogService from "../services/blogs";
import login from "../services/login";
import Message from "./Message";

const Login = ({user,setUser,errorMessage,setErrorMessage,successMessage,setSuccessMessage}) =>
{
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const handleUsername = (event) =>
    {
        console.log(event.target.value)
        setUsername(event.target.value)

    }

    const handlePassword = (event) =>
    {
        console.log(event.target.value)
        setPassword(event.target.value)
    }

    const handleLogin = async (event) =>
    {
        event.preventDefault()
        const credentials = {username,password}
        const response = await login.loginService(credentials)
        console.log(response)
        console.log('response status',response.status)
       
        if(response.status === 200)
        {
                console.log(response.data)
                window.localStorage.setItem('user',JSON.stringify(response.data))
                setUser(response.data)
                setSuccessMessage('Login Successfully')
                setTimeout(()=>setSuccessMessage(null),5000)
        }
        else
        {
            setErrorMessage('Wrong Credentials')
            setTimeout(()=>setErrorMessage(null),5000)
        }   
       
       
    }

    return(
        <div>
            <h1>login to application</h1>
            <Message errorMessage={errorMessage} successMessage={successMessage}/>
            <form onSubmit={handleLogin}>
                <div className="username">
                    <label>Username</label>
                    <input type="text" value={username} onChange={handleUsername}></input>
                </div>
                 
                <div className="password">
                    <label>Password</label>
                    <input type="password" value={password} onChange={handlePassword}></input>
                </div>
               
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login