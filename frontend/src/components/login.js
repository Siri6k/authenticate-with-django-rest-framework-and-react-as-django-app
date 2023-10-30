import React, { useState } from "react";


function Login () {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

   const handleSubmit = (event) => {
        alert('A username and password was submitted: ' + username + " " + password);
        event.preventDefault();
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