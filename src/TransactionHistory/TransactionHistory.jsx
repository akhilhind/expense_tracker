import React, {useEffect, useRef} from 'react';
import './TransactionHistory.css';

function TransactionHistory({transactions, updateTotalIncome, updateTotalExpense}) {
    // const transactions = [
    //     {"name": "Cash", "amount": 500, "type": "credit"},
    //     {"name": "Book", "amount": 40, "type": "debit"},
    //     {"name": "Camera", "amount": 200, "type": "debit"}
    // ]

    const transactionRefs = useRef([]);

    useEffect(() => {
        transactionRefs.current = transactionRefs.current.slice(0, transactions.length);
    }, [transactions]);

    function displayTransactions() {
        return transactions.map((transaction, index) => 
        <div key={index} ref={(el) => transactionRefs.current[index] = el} className={`${transaction.type} single-transaction`} onClick={() => toggleTransaction(index)}>
            <span>{transaction.name}</span>
            <span>{transaction.type === 'debit'?'-':'+'}{formatAmount(transaction.amount)}</span>
        </div>)
    }

    const toggleTransaction = (index) => {
        const element = transactionRefs.current[index];
        const amount = parseFloat(transactions[index].amount);

        if (element.classList.contains('credit')) {
            element.classList.replace('credit', 'debit');
            updateTotalIncome(prev => prev - amount);
            updateTotalExpense(prev => prev + amount);
            transactions[index].type = 'debit';
        } else if (element.classList.contains('debit')) {
            element.classList.replace('debit', 'credit');
            updateTotalIncome(prev => prev + amount);
            updateTotalExpense(prev => prev - amount);
            transactions[index].type = 'credit';
        }
    }

    function formatAmount(amount) {
        return Math.abs(parseFloat(amount)).toFixed(2);
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