
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Deposit({ onDeposit }) {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleDeposit = (e) => {
        e.preventDefault();
        onDeposit(accountNumber, parseFloat(amount));
        setAccountNumber('');
        setAmount('');
        navigate('/');
        alert("Money deposited in your account");
    };

    return (
        <div className="container mt-5">
            <h2>Deposit</h2>
            <form onSubmit={handleDeposit}>
                <div className="mb-3">
                    <label className="form-label">Account Number</label>
                    <input
                        type="text"
                        className="form-control"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Amount</label>
                    <input
                        type="number"
                        className="form-control"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success me-2">
                    Deposit
                </button>
                <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default Deposit;
