
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Withdrawal({ onWithdraw }) {
    const [accountNumber, setAccountNumber] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();

    const handleWithdraw = (e) => {
        e.preventDefault();
        onWithdraw(accountNumber, parseFloat(amount));
        setAccountNumber('');
        setAmount('');
        navigate('/');
        alert("withdrew successful!");
    };

    return (
        <div className="container mt-5">
            <h2>Withdraw</h2>
            <form onSubmit={handleWithdraw}>
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
                <button type="submit" className="btn btn-warning me-2">
                    Withdraw
                </button>
                <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>
                    Cancel
                </button>
            </form>
        </div>
    );
}

export default Withdrawal;
