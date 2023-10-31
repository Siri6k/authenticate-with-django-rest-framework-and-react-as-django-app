import { useState } from "react";
import React from "react";
import axiosInstance from "../axiosApi";

function Hello() {
    const [ hello, setHello] = useState("")
    const getMessage = async ()=>{
        try {
            const { data, status} = await axiosInstance.get('/hello/');
            const message = data.hello;
            setHello(message)
        }catch(error){
            console.log("Error: ", JSON.stringify(error, null, 4));
            throw error;
        }
    
    }
    getMessage();
    return(
        <div>
            <h1>Hello {hello} </h1>
            <p>We are the {hello}</p>
        </div>
    )
}

export default Hello;