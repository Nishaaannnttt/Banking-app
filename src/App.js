
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Homepage from './homepage';
import Login from './login';
import Deposit from './deposit';
import Withdraw from './withdrawal';
import Transactions from './transaction';
import myimage from './cibc.svg';

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (accountNumber, amount) => {
    const newBalance = balance + amount;
    setBalance(newBalance);
    setTransactions([...transactions, { type: 'Deposit', accountNumber, amount, balance: newBalance, date: new Date().toLocaleString() }]);
  };

  const handleWithdraw = (accountNumber, amount) => {
    const newBalance = balance - amount;
    setBalance(newBalance);
    setTransactions([...transactions, { type: 'Withdraw', accountNumber, amount, balance: newBalance, date: new Date().toLocaleString() }]);
  };

  return (
    // <Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={myimage}></img>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/withdraw">
                  Withdraw
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/deposit">
                  Deposit
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/transactions">
                  Transactions
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage balance={balance} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/withdraw" element={<Withdraw onWithdraw={handleWithdraw} />} />
        <Route path="/deposit" element={<Deposit onDeposit={handleDeposit} />} />
        <Route path="/transactions" element={<Transactions transactions={transactions} />} />
      </Routes>
    </div>
    // </Router>
  );
}

export default App;
