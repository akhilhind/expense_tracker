import React, {useState} from 'react';
import './Balance.css';


function Balance({totalBalance}) {
    const displayTotalBalance = () => {
        return totalBalance + ".00";
    }

    return (
        <div id='current-balance'>
            <div id="balance-head">YOUR BALANCE</div>
            <div id="actual-balance">₹{displayTotalBalance()}</div>
        </div>
    )
}

export default Balance