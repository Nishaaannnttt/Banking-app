
import React from 'react';
import { Link } from 'react-router-dom';

function DepositButton() {
    return (
        <Link to="/deposit" className="btn btn-success">
            Deposit
        </Link>
    );
}

export default DepositButton;
