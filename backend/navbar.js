import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/donate">Donate</Link></li>
                <li><Link to="/request">Request</Link></li>
                <li><Link to="/login">Login</Link></li>
                
            </ul>
        </nav>
    );
}