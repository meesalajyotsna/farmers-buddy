import React from "react";
import "./admin.css";
import { useState } from "react";
import Screen from "../../../screen/Screen";


const Admin=()=>{
    
    const [admin1,setAdmin1]= useState (false);
    const [activePage,setActivePage]=useState("#Admin");
  
    
    const [form,setForm]=useState({
        username:"",
        password:""

    })
    console.log(form)
    const onupdate=e=>{
        const formstate={
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(formstate)
        console.log(form)
    }
    const username="admin"
    const password="admin"
    const validate=e=>{
        e.preventDefault();
        console.log(e)
        if(form.username===username && form.password===password){
        setActivePage('#Adminlogin')
        setAdmin1(true)
        alert("Admin login successfully")
        }
        else{
            setActivePage('#Adminlogin')
        setAdmin1(false)
            alert("Wronge username or password")
        }
    }
    return( 
        <>
        <div className="Admin">
            {admin1?
            <Screen active={activePage}/>:<>
                <h1>Admin Login</h1>
            <form onSubmit={validate}>
                <label>User Name:</label>
                <input type="text"   name= "username" value={form.username} onChange={onupdate} placeholder="User Name" required/>
                <br></br>
                <br></br>
                <label>Password:</label>
                <input type="password"  name="password" value= {form.password} onChange={onupdate} placeholder="Password" required/>
                <br></br>
                <br></br>
                <a href="#Adminlogin" onClick={validate}><button type="button" >Login</button></a>
            </form>
            </>
            
            
        }
        </div>
        </>
        )
}
export default Admin