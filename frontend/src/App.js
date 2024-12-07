import React from 'react';
import './App.css';
import Login from './components/login';
import Register from './components/Register';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Register from './components/Register'; // Adjust the path as needed

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/" element={<Register/>} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;