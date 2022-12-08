import React from "react";
import "./nav.css";
import { useState } from "react";
import Details from "../details/Details";
const Nav=()=>{
    const [activeNav,setActiveNav]=useState("#Home");

    
    return(
        <div id="anb">
        <nav>
            <a href="#Home" onClick={() => setActiveNav('#Home')}>Home</a>
            <a href="#Admin"  onClick={() => setActiveNav('#Admin')}>Admin</a>
            <a href="#User" onClick={() => setActiveNav('#User')}>User</a>
        </nav>
        <Details active={ activeNav}/> 

        </div>
    )
}
export default Nav 