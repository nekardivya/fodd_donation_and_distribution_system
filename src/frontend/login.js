import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
 
function Login(){
    const navigate = useNavigate();
    return(
        <div className="logdiv">
            <h1 className="regh1">Welcome to Login</h1>
            <form className="logform">
                <label className="loglabel">
                    Username:
                    <input type="text" name="username" className="loginput" />
                </label>
                <label className="loglabel">
                    Password:
                    <input type="password" name="password" className="loginput" />
                </label>
                <button type="submit" className="logbutton">
                    Login
                </button>
                <p>Don't have an account? <a href="/registration">Register</a></p>
            </form>
        </div>
    );
 }

 export default Login;