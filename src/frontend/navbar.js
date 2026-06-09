import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'; 
import Login from './login';
import Home from './home';
import Registration from './registration';
import './navbar.css';


function Navbar() {
    return (
        <Router>
        <div className="navdiv">
            <nav className="headnav">
                <NavLink to="/"  className="navlink"> Home </NavLink>
                <NavLink to="/login" className="navlink"> Login </NavLink>
                <NavLink to="/register" className="navlinkS"> Register </NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}  />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </div>
    </Router>
    );
}
export default Navbar;