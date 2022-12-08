import React from "react";
import "./User.css";
import Screen from "../../../screen/Screen";
import { useState } from "react";
const User=()=>{
    
    const [user1,setUser1]= useState (false);
    const [activePage,setActivePage]=useState("#User");
    
    // const src=()=>{
    //     setActivePage('#Userlogin')
    //     setUser1(true)
    // }
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
    const username="user"
    const password="user"
    const validate=e=>{
        e.preventDefault();
        console.log(e)
        if(form.username===username && form.password===password){
            setActivePage('#Userlogin')
            setUser1(true)
        alert("User login successfully")
        }
        else{
            setActivePage('#Userlogin')
        setUser1(false)
            alert("Wronge username or password")
        }
    }
    return( 
        <>
        <div className="User">
            {user1?<Screen active={activePage}/>:
            <>
            <h1>User Login</h1>
            <form >
                <label>User Name:</label>
                <input type="text" name="username" value= {form.username} onChange={onupdate} placeholder="User Name" required/>
                <br></br>
                <br></br>
                <label>Password:</label>
                <input type="password" name="password" value= {form.password} onChange={onupdate} placeholder="Password" required/>
                <br></br>
                <br></br>
                <button type="button" onClick={validate}>Login</button>
            </form>
            </>
            }
            
        </div>
        </>
    )
}
export default User