import React from 'react';
import './App.css';
import Login from './components/login';
import Profile from './components/profile';
// import Register from './components/Register'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Register from './components/Register'; // Adjust the path as needed

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    {/* Add other routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;