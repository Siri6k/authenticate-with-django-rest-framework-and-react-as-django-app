import React, { useState } from "react";
import axiosInstance from "../axiosApi";

function Signup () {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [email, setEmail] = useState("")
    let [password2 , setPassword2] = useState("")

    const [errors, setError] = useState({})

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }
    const handlePassword2 = (event) => {
        setPassword2(event.target.value);
        setError({"password2":"OK"})
        if(password2 == password){
            setError({})
        }else{
            setError({"password2":"Confirm password must be the same as the password"})
        }
    }

   const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axiosInstance.post('/user/create/', {
                username: username,
                email: email,
                password: password
            });
            console.log(response)
            return response;
        } catch (error) {
            console.log(error);
            setError(error.response.data)
        }
    }
    return (
            <div>
                <h2>Signup page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={username} onChange={handleUsername}/>
                    { errors.username ? errors.username : null}
                </label>
                <label>
                    Email:
                    <input name="email" type="email" value={email} onChange={handleEmail}/>
                    { errors.email ? errors.email : null}
                </label>
                <label>
                    Password:
                    <input name="password" type="password" value={password} onChange={handlePassword}/>
                    { errors.password ? errors.password : null}
                </label>
                <label>
                    Confirm Password:
                    <input name="password2" type="password" value={password2} onChange={handlePassword2}/>
                    { errors.password2 ? errors.password2 : null}
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
    }

export default Signup;