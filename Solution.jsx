import React from "react";
import "./Solution.css";
//import { useState } from "react";



const Solution=()=>{
    // const [Solution1,setSolution1]= useState (false);
    // const [activePage,setActivePage]=useState("#Solution");
  
    // const src=()=>{
    //     setActivePage('#Solution')
    //     setSolution1(true)
    // }

return(
<>
<div class="bc">
    <center><h1>Solution</h1></center>
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
export default Solution
