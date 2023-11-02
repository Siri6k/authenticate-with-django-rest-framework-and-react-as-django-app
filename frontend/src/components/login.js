import React, { useState } from "react";
import axiosInstance from "../axiosApi";
import { Navigate } from "react-router-dom";

function Login () {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

   const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data, status } = await axiosInstance.post('/token/', {
                username: username,
                password: password
            });
            if (status === 200){
                axiosInstance.defaults.headers['Authorization'] = "JWT " + data.access;
                localStorage.setItem('access_token', data.access);
                localStorage.setItem('refresh_token', data.refresh);
                
            }
            console.log(data)
            window.location.href = '/hello/';
            return data;
        } catch (error) {
            console.log(error.response.data);
            throw error.response.data;
        }
    }
    return (
            <div>
                <h2>Login page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={username} onChange={handleUsername}/>
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={password} onChange={handlePassword}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default Login;