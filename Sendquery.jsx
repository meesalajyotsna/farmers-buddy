import React from "react";
import "./Sendquery.css";
//import { useState } from "react";



const Sendquery=()=>{
    // const [Sendquery1,setSendquery1]= useState (false);
    // const [activePage,setActivePage]=useState("#Sendquery");
  
    // const src=()=>{
    //     setActivePage('#Sendquery')
    //     setSendquery1(true)
    // }

return(
<>
<div class="gh">
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
export default Sendquery
