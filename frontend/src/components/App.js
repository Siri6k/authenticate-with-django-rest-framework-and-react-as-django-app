import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";
import Hello from "./hello";
import NavBar from "./header/navBar";

function App () {
        return (
            <div className="site">
                <Router>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route exact path="/login/" element={<Login />}/>
                        <Route exact path="/signup/" element={<Signup />}/>
                        <Route exact path="/hello/" element={<Hello />}/>
                   </Routes>
               </Router>
            </div>
        );
    }

export default App;