import React, { useState, useContext } from 'react'
import { trans_context } from '../../App'
import './Transaction.css'

function Transaction() {

    const Transaction = useContext(trans_context)

    const [Amount, setAmount] = useState(0);
    const [Activity, setActivity] = useState('');

    const changeActivity = (e) => {
        setActivity(prev => e.target.value)
    }
    const changeAmount = (e) => {
        setAmount(prev => e.target.value)
    }

    const handleSubmint = (e) => {
        e.preventDefault()
        Transaction.trans_modify({ type: 'Add', payload: { id: Math.floor(Math.random() * 1000000), Activity: Activity, Amount: parseInt(Amount) } })
        setAmount(0);
        setActivity('');
    }

    return (
        <div>
            <form onSubmit={handleSubmint}>
                <h3>Make Transaction</h3>
                <hr></hr>
                <div className='transaction_body'>
                    <div className='transaction_body-input'>
                        <input type="text" placeholder="Activity" value={Activity} onChange={changeActivity} ></input>
                    </div>
                    <div className='transaction_body-input'>
                        <input type="number" placeholder="Amount" value={Amount} onChange={changeAmount}></input>
                        <div style={{color:"red"}}>put (+) for incom and (-) for cost before number</div>
                    </div>
                    <div className='transaction_body-input-button'>
                        <button className='transaction_body-input-button-itself' type="submit" >Make Transaction</button>
                    </div>
                </div>


            </form>
        </div>
    )
}

export default Transaction
