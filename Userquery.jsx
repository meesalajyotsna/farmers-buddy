import React from "react";
import "./Userquery.css";
//import { useState } from "react";



const Userquery=()=>{
    // const [Userquery1,setUserquery1]= useState (false);
    // const [activePage,setActivePage]=useState("#Userquery");
  
    // const src=()=>{
    //     setActivePage('#userquery')
    //     setUserquery1(true)
    // }

return(
<>
<div class="ef">
    <center><h1>User Query</h1></center>
    <table border="1" align="center">
        <tbody>
            <tr>
                <th>User Name</th>
                <th>Season</th>
                <th>Soil</th>
                <th>Crops</th>
                <th>Status</th>
                <th>View</th>
            </tr>
            <tr>
                <td></td>
                <td>Rabi</td>
                <td>Reglur soil</td>
                <td>Rice</td>
                <td>Sent</td>
                <td>View</td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
)
}
export default Userquery
