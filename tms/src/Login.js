import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {login} from "./Redux/UserSlice"
import React from 'react'

const Login = () => {
    const myDispatch=useDispatch();
    const myNav=useNavigate();

    const  [email, setEmail] = useState("");
    const  [password, setPassword] = useState("");
    // const [signInAs, setSignInAs] = useState("");
    // console.log(email);

    const submitLogin=(e)=>{
        e.preventDefault();

        let obj={}
        obj={
            "email": email, 
        }
        myDispatch(login(obj));
        myNav("/Home");
    }

  return (
    <>
     <div className="Form-container">
                <div className="form">
                    <h2>Sign-in</h2>
                    <label id="email-label">Enter Email:</label><input type="email" placeholder="Email" value={email}
                        onChange={(e) => { setEmail(e.target.value) }} id="email-input" />
                    <label id="password-label">Enter Password:</label><input type="password" placeholder="Password" value={password}
                        onChange={(e) => { setPassword(e.target.value) }} id="password-input" />
                    <label>YOU ARE :</label>
                    {/* <select onChange={(e) => setSignInAs(e.target.value)}>
                        <option value="">Select</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select> */}
                    <div className="form-button-container">
                        <button onClick={submitLogin}>Submit</button>
                        <button onClick={useNavigate("/SignUp")}>Register Now</button>
                    </div>
                    <a href="#">Forgot password</a>
                </div>
            </div>
    </>
  )
}

export default Login