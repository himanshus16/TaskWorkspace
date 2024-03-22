import React from 'react'
import { useNavigate } from "react-router-dom";
// import { UseSelector, useSelector } from 'react-redux';
import { login,logout } from './Redux/UserSlice';

const Home = () => {

    // let email=useSelector(login)
  return (
    <>
        <div className="main-container">
            <div className="landing">
                <h2>Welcome to Task management System</h2>
                <h3 style={{color:"red"}}>You can handle your tasks using TMS</h3>
                {/* {
                    status=="" ? <p className="home-btn" onClick={()=>{
                        swal({title: "Login Required",
                        text: "Plase Login to Acess Dashboard",
                        icon: "warning",
                    })
                    myNav("/Feed-Back/sign-in")
                    }}>Acess DashBoard</p> :  */}
                    <p className="home-btn" onClick={useNavigate("/SignUp")}>Click to Register</p>  
                
            </div>
            {/* <div className="img-container">
                <img src={img}></img>
            </div> */}

        </div>
        </>
  )
}

export default Home