import React from "react";
import "../nav.css";
import { useState } from "react";
import Admindetails from "../../ProfileDetails/admindetails/Admindetails";
const Adminnav=()=>{
    const [activeNav,setActiveNav]=useState("#Home");

    
    return(
        <>
        <nav>
            <a href="#Home" onClick={() => setActiveNav('#Home')}>Home</a>
            <a href="#Addseason"  onClick={() => setActiveNav('#Addseason')}>Add season</a>
            <a href="#Userquery" onClick={() => setActiveNav('#Userquery')}>User Query</a>
            <a href="nav.jsx"  onClick={() => setActiveNav('#Logout')}>Logout</a>
        </nav>
        <Admindetails active={ activeNav}/> 

        </>
    )
}
export default Adminnav 