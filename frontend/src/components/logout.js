import React from "react";
import axiosInstance from "../axiosApi";
import { Navigate } from "react-router-dom";

function Logout (){
    const handleLogout = async () => {
        try {
            const response = await axiosInstance.post('/blacklist/', {
                "refresh_token": localStorage.getItem("refresh_token")
            });
            localStorage.removeItem('access_token');
            localStorage.removeItem('refresh_token');
            axiosInstance.defaults.headers['Authorization'] = null;
            window.location.href = '/login/';
            return response;
        }
        catch (e) {
            console.log(e);
        }
    };
    return(
    <button onClick={handleLogout}>logout</button>
    )
}

export default Logout;