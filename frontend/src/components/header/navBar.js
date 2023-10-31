import React from "react";
import { Link } from "react-router-dom";
import Login from "../login";
import Hello from "../hello";
import Signup from "../signup";

function NavBar (){

    return(
        <nav>
            <Link className={"nav-link"} to={"/"}>Home</Link>
            <Link className={"nav-link"} to={"/login/"}>Login</Link>
            <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
            <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
        </nav>
    );
}

export default NavBar