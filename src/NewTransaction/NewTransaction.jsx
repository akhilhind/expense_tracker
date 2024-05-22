import React from 'react';
import './NewTransaction.css';

function NewTransaction({updateTransactions, updateTotalIncome, updateTotalExpense, updateTotalBalance}) {

    const newTransactionHandler = () => {
        const amount = document.getElementById('new-amount').value;
        console.log(amount);
        const text = document.getElementById('new-title').value;
        
        if(amount == '' || text == '') return;

        const new_transaction = {
            'name': text,
            'amount': amount,
            'type': amount < 0 ? 'debit' : 'credit'
        }

        console.log("new_transaction = ", new_transaction);

        updateTransactions(prevTransaction => [...prevTransaction, new_transaction]);

        if(amount > 0) updateTotalIncome(prev => prev + parseFloat(amount));
        else if(amount < 0) updateTotalExpense(prev => prev + Math.abs(parseFloat(amount)));


        document.getElementById('new-amount').value = '';
        document.getElementById('new-title').value = '';
    }

    return (
        <div id='new-transaction'>
            <div id="new-tran-title">
                <h2>Add new transaction</h2>
            </div>
            <div id="new-transaction-break"></div>
            <div id="new-tran-form">
                <div id="new-tran-text" className='new-tran-element'>
                    <span className="new-tran-text-title">Text</span>
                    <input type="text" id='new-title'  placeholder='Enter text...'/>
                </div>
                <div id="new-tran-amount" className='new-tran-element'>
                    <span className="new-tran-text-title">
                        Amount <br/>
                        (negative-expense, positive-income)
                    </span>
                    <input type="number" id='new-amount' placeholder='Enter amount...' />
                </div>
                <button id="add-new-transaction" onClick={newTransactionHandler}>Add transaction</button>
            </div>
        </div>
    )
}

export default NewTransaction