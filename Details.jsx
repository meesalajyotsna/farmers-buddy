import React from "react";
import "./details.css"
import Admin from "./login/admin/Admin";
import User from "./login/user/User";
const Details=(props)=>{
    if(props.active ==="#Admin"){
        return(
            <div className="container">
                <Admin/>
            </div>       
        )

    }
    if(props.active ==="#User"){
        return(
            <div className="container">
                <User/>
            </div>       
        )

    }

    return(
        <div className="container">
            
        </div>
        
    )
}
export default Details