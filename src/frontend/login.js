import React from "react";
import { useNavigate } from "react-router-dom";
 
function Login(){
    const navigate = useNavigate();
    return(
        <form>
            <lable>
                Username:
                <input type="text" name="username" />
            </lable>
            <label>
                password:
                <input type="password" name="password" />
            </label>
            <button type="submit">Login</button>
        </form>
    );
 }

 export default Login;