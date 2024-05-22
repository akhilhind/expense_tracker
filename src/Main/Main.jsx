import React, { useEffect, useState } from 'react';
import './Main.css';
import Header from '../Header/Header';
import Balance from '../Balance/Balance';
import TransactionTotal from '../TransactionTotal/TransactionTotal';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import NewTransaction from '../NewTransaction/NewTransaction';

function Main() {
    const [totalIncome, updateTotalIncome] = useState(0);
    const [totalExpense, updateTotalExpense] = useState(0);
    const [totalBalance, updateTotalBalance] = useState(0);
    const [transactions, updateTransactions] = useState([]);

    useEffect(() => {
        console.log(totalIncome - totalExpense);
        updateTotalBalance(totalIncome - totalExpense);
    }, [totalIncome, totalExpense]);

    return (
        <div id='main-component'>
            <Header />
            <Balance totalBalance={totalBalance} />
            <TransactionTotal totalIncome={totalIncome} totalExpense={totalExpense} />
            <TransactionHistory transactions={transactions} updateTotalIncome={updateTotalIncome} updateTotalExpense={updateTotalExpense} />
            <NewTransaction updateTransactions={updateTransactions} updateTotalIncome={updateTotalIncome} updateTotalExpense={updateTotalExpense} />
        </div>
    )
}

export default Main