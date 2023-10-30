import React, { useState } from "react";

function Signup () {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [email, setEmail] = useState("")

    const handleUsername = (event) => {
        setUsername(event.target.value);
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

   const handleSubmit = (event) => {
        alert('A username and password was submitted: ' + username + " " + password + " " + email);
        event.preventDefault();
    }
    return (
            <div>
                <h2>Signup page</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input name="username" type="text" value={username} onChange={handleUsername}/>
                </label>
                <label>
                    Email:
                    <input name="email" type="email" value={email} onChange={handleEmail}/>
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

export default Signup;