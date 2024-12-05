import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      setStatusMessage('Login successful');
    } catch (error) {
      setStatusMessage(error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
      {statusMessage && <p className="status-message">{statusMessage}</p>}
      <p className="message" style={{ marginTop: '20px', textAlign: 'center' }}>
        Do not have an account? <Link to="/register" style={{ color: 'blue', textDecoration: 'underline' }}>Register</Link>
      </p>
    </div>
  );
};

export default Login;