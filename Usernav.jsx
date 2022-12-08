import React from "react";
import "../nav.css";
import { useState } from "react";
import Userdetails from "../../ProfileDetails/usrdetails/Userdetails"
const Usernav=()=>{
    const [activeNav,setActiveNav]=useState("#Home");

    
    return(
        <>
        <nav>
            <a href="#Home" onClick={() => setActiveNav('#Home')}>Home</a>
            <a href="#Sendquery"  onClick={() => setActiveNav('#Sendquery')}>Send Query</a>
            <a href="#Solution" onClick={() => setActiveNav('#Solution')}>Solution</a>
            <a href="nav.jsx" onClick={() => setActiveNav('#Logout')}>Logout</a>
        </nav>
        <Userdetails active={ activeNav}/> 

        </>
    )
}
export default Usernav 