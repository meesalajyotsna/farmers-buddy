import  React from "react"
import "./screen.css"
import Nav from "../nav/Nav"
import Adminnav from "../nav/Adminnav/Adminnav"
import Usernav from "../nav/usernav/Usernav"

const Screen=(props)=>{
  console.log(props)
 
  if(props.active==="#Adminlogin"){
    const parent=document.getElementById("anb")
    const child=parent.getElementsByTagName("nav")[0]
    
    console.log(parent)
    console.log(child)
    let removed=parent.removeChild(child)
    return (<div>
      <Adminnav/>
    </div>)
  }
  if(props.active==="#Userlogin"){
    const parent=document.getElementById("anb")
    const child=parent.getElementsByTagName("nav")[0]
    
    console.log(parent)
    console.log(child)
    let removed=parent.removeChild(child)
    return (<div>
      <Usernav/>
    </div>)
  }
    return(
      <div id="abn">
        <Nav/>
      </div>  
    )
}
export default Screen