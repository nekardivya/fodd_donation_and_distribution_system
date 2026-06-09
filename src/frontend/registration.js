import React from 'react';
import { useState } from 'react';
import './registration.css';

function Registration(){

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        organizationType: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
    <div className="logdiv">
        <form onSubmit={handleSubmit} className="logform" >
            <h1 className="regh1">Welcome to Registration </h1>
            <label className="loglabel" >
                Username:
                <input type="text"  className="loginput" name="username" value={formData.username} onChange={handleChange} required/>
            </label>
            <label className="loglabel">
                Email:
                <input type="email"  className="loginput" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label className="loglabel">
                Phone Number:
                <input type="tel"  className="loginput" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label className="loglabel">
                Organization Type *
                <select name="organizationType" value={formData.organizationType} onChange={handleChange}    required>
                    <option value="">Select Organization Type</option>
                    <option value="ngo">NGO</option>
                    <option value="restaurant">Restaurant</option>
                    <option value="hotel">Hotel</option>
                    <option value="catering">Catering Service</option>
                    <option value="bakery">Bakery</option>
                    <option value="individual">Individual Donor</option>
                </select>
            </label>
            <label className="loglabel">
                Address:
                <input type="text"  className="loginput" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label className="loglabel">
                Password:
                <input type="password"  className="loginput" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label className="loglabel">
                Confirm Password:
                <input type="password"  className="loginput" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </label>
            <button type="submit" className="logbutton">
                Register
            </button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    </div>
);  
}

export default Registration;