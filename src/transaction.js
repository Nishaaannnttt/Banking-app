
import React from 'react';

function Transaction({ transactions }) {
    return (
        <div className="container mt-5">
            <h2>Transaction History</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Type</th>
                        <th>Account Number</th>
                        <th>Amount</th>
                        <th>Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td>{transaction.date}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.accountNumber}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Transaction;
