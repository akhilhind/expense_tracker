import React, { useState } from 'react';
import './TransactionTotal.css';

function TransactionTotal({totalIncome, totalExpense}) {

    const displayIncome = () => {
        console.log(totalIncome);
        return totalIncome + ".00";
    }

    const displayExpense = () => {
        return totalExpense + ".00";
    }

    return (
        <div id='transaction-total'>
            <div className='amount-desc'>
                <span className='income-title'>INCOME</span>
                <span className='income-amount amount'>₹{displayIncome()}</span>
            </div>
            <div className="amount-desc">
                <span className='income-title'>EXPENSE</span>
                <span className='expense-amount amount'>₹{displayExpense()}</span>
            </div>
        </div>
    )
}

export default TransactionTotal