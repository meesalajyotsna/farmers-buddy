import React from "react";
//import { useState } from "react";



const Addseason=()=>{
    // const [Season,setAddSeason]= useState (false);
    // const [activePage,setActivePage]=useState("#Addseason");
  
    // const src=()=>{
    //     setActivePage('#Addseason')
    //     setAddSeason(true)
    // }
    return( 
        <section>
        <h1>Add Season</h1>
            <form action="#">
                <label>season:</label>
                <select>
                <option>select</option>
                <option>Rabi</option>  
                <option>Kharif</option>  
                </select>
                <br/><br/>
                <label>Season Time:</label>
                <select>
                <option> select </option>
                <option></option>  
                <option></option>  
                </select>
                <br/><br/>
                <button>ADD</button>
            </form>
        </section>
        
        )            
}      
export default Addseason