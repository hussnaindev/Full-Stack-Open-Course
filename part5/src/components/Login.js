import React from "react";
import { useState } from "react/cjs/react.development";
import login from "../services/login";

const Login = ({user,setUser}) =>
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
        console.log(response.data)
        window.localStorage.setItem('user',JSON.stringify(response.data))
        setUser(response.data)
    }

    return(
        <div>
            <h1>login to application</h1>
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