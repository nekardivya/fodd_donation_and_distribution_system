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
        <form onSubmit={handleSubmit} className="registration-form" >
            <h1>Welcome to Registration </h1>
            <label>
                Username:
                <input type="text" name="username" value={formData.username} onChange={handleChange} required/>
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <label>
                Phone Number:
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
            </label>
            <label>
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
            <label>
                Address:
                <input type="text" name="address" value={formData.address} onChange={handleChange} required />
            </label>
            <label>
                Password:
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
            </label>
            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </form>
    );
};

export default Registration;