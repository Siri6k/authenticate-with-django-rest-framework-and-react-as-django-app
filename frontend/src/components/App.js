import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./login";
import Signup from "./signup";
import Home from "./home";

function App () {
        return (
            <div className="site">
                <Router>
                    <h1>Ahhh after 10,000 years I'm free. Time to conquer the Earth!</h1>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route exact path="/login" element={<Login />}/>
                        <Route exact path="/signup" element={<Signup />}/>
                   </Routes>
               </Router>
            </div>
        );
    }

export default App;