import React from "react";
import { Link } from "react-router-dom";

const Error =()=>{
    const token = localStorage.getItem("token")
    return(
        <div className="container text-center my-2 p-2">
           
            <h3>ERROR 404! page not found</h3> 
            
        </div>
    )
}

export default Error;