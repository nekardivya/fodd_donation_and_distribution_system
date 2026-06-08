import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Login from './login';
import Home from './home';
import Registration from './registration';


function Navbar() {
    return (
        <Router>
        <div>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </div>
    </Router>
    );
}
export default Navbar;