
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import Login from './login';
import Dashboard from './dashboard';
import myimage from './cibc.svg';
import Footer from './footer';

const App = () => {
  return (
    // <BrowserRouter>
    <div>
      <nav className="myNav navbar navbar-expand-lg navbar-dark bg-custom">
        <div className="container">
          <Link className="navbar-brand" to="/"> <h3 className='logoname'> <img src={myimage} className='logo-ctl' alt="logo" /></h3></Link>
          <ul className=" navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Homepage</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">Dashboard</Link>
            </li>

          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer></Footer>




    </div >
    // </BrowserRouter>
  );
};

export default App;
