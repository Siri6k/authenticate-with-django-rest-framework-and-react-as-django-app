import React from "react";
import { Link } from "react-router-dom";

import Logout from "../logout";

function NavBar (){

    return(
        <nav>
            <Link className={"nav-link"} to={"/"}>Home</Link>
            <Link className={"nav-link"} to={"/login/"}>Login</Link>
            <Link className={"nav-link"} to={"/signup/"}>Signup</Link>
            <Link className={"nav-link"} to={"/hello/"}>Hello</Link>
            <Logout />
        </nav>
    );
}

export default NavBar