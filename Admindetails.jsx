import React from "react";
import Addseason from "../../detailsScreen/addseason/Addseason";
import Userquery from "../../detailsScreen/userquery/Userquery";
import "./Admindetails.css"

const Admindetails=(props)=>{
    if(props.active ==="#Addseason"){
        return(
            <div className="container">
                <Addseason/>
            </div>       
        )

    }
    if(props.active ==="#Userquery"){
        return(
            <div className="container">
                <Userquery/>
            </div>       
        )

    }

    return(
        <div className="container">
            <h1>Admin Home</h1>
        </div>
        
    )
}
export default Admindetails