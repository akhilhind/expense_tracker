import React from 'react';
import './TransactionHistory.css';

function TransactionHistory({transactions}) {
    // const transactions = [
    //     {"name": "Cash", "amount": 500, "type": "credit"},
    //     {"name": "Book", "amount": 40, "type": "debit"},
    //     {"name": "Camera", "amount": 200, "type": "debit"}
    // ]

    function displayTransactions() {
        return transactions.map((transaction, index) => 
        <div key={index} className={`${transaction.type} single-transaction`}>
            <span>{transaction.name}</span>
            <span>{transaction.type === 'debit'?'':'+'}{transaction.amount}</span>
        </div>)
    }

    if(transactions.length > 0) {
        return (
            <div id='transaction-history'>
                <div id="transaction-history-title">
                    <h2>History</h2>
                </div>
                <div id="history-break"></div>
                <div id="actual-transactions">
                    {displayTransactions()}
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default TransactionHistory