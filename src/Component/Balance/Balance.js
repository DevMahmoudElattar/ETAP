import React, { useContext } from 'react'
import './Balance.css'
import { trans_context } from '../../App'

function Balance() {
    const Trans_items = useContext(trans_context);
    const trans_item_values = Trans_items.trans_item.transList
    console.log(trans_item_values)

    let positive_values = 0
    let negative_values = 0

    for (let index = 0; index < trans_item_values.length; index++) {
        if (trans_item_values[index].Amount > 0) {
            positive_values += trans_item_values[index].Amount
        } else if (trans_item_values[index].Amount <= 0) {
            negative_values += trans_item_values[index].Amount
        }

    }


    return (
        <div>
            <h3 className={positive_values + negative_values > 0 ? "header_container_p" : "header_container_n"} >Balance</h3>
            <h1 className={positive_values + negative_values > 0 ? "header_container_p" : "header_container_n"} >{positive_values + negative_values}$</h1>
            <hr></hr>
            <div className="Balance_detail_container">
                <div className='income'>
                    <div className='income_head'>
                        <h4>INCOME</h4>
                    </div>
                    <div className='income_body'>
                        <h3>${positive_values}</h3>
                    </div>
                </div>
                <div className='cost'>
                    <div className='cost_head'>
                        <h4>EXPENSES</h4>
                    </div>
                    <div className='cost_body'>
                        <h3>-${Math.abs(negative_values)}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Balance
