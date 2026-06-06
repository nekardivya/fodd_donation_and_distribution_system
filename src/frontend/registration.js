import React from 'react';
import { useState } from 'react';

function registration(){
    return (
        <div>
            <h1>Welcome to Registration </h1>
            <label>
                Username:
                <input type="text" name="username" required/>
            </label>
            <label>
                Email:
                <input type="email" name="email" required />
            </label>
            <label>
                Phone Number:
                <input type="tel" name="phone" required />
            </label>
            <label>
                Organization Type *
                <select name="Organization Type" required>
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
                <input type="text" name="address" required />
            </label>
            <label>
                Password:
                <input type="password" name="password" required />
            </label>
            <label>
                Confirm Password:
                <input type="password" name="confirmPassword" required />
            </label>
            <button type="submit">Register</button>
            <p>Already have an account? <a href="/login">Login here</a></p>
        </div>
    );
};

export default registration;