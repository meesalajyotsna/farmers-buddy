import React from "react"
const DetailsScreen=(props)=>{
    console.log("detailsScreen")
    console.log(props)
    if(props.active === "#Adminlogin")
    {
        console.log("Adminlogin")
        return(
            <h1>AdminLogin</h1>
            
        )
    }
    if(props.active === "#Userlogin")
    {
        console.log("Userlogin")
        return(
            <h1>UserLogin</h1>
        )
    }
    return(
        <></>
    )
}
export default DetailsScreen