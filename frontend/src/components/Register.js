import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerUser } from '../apiService'; // Adjust the path as needed
import '../Register.css';


const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            setMessage(response.message);
        } catch (error) {
            setMessage(error.error);
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            {/* <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" required /> */}
            <button type="submit">Register</button>
            {message && <p>{message}</p>}
        </form>
         <p className="message" style={{ marginTop: '20px', textAlign: 'center' }}>
         Already have an account? <Link to="/login" style={{ color: 'blue', textDecoration: 'underline' }}>Login</Link>
       </p>
       </div>
    );
};

export default Register;