import React from "react";
import Sendquery from "../../detailsScreen/sendquery/Sendquery";
import Solution from "../../detailsScreen/Solution/Solution";
import "./Userdetails.css"

const Userdetails=(props)=>{
    if(props.active ==="#Sendquery"){
        return(
            <div className="container">
                <Sendquery/>
            </div>       
        )

    }
    if(props.active ==="#Solution"){
        return(
            <div className="container">
                <Solution/>
            </div>       
        )

    }

    return(
        <div className="container">
            <h1>User Home</h1>
        </div>
        
    )
}
export default Userdetails