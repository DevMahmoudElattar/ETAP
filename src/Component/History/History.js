import React, { useContext } from 'react'
import './History.css'
import { trans_context } from '../../App'

function History() {
    const trans_history = useContext(trans_context);
    //const Transactions = trans_history.trans_item.transList;


    const remove_button = (event) => {
        // alert(event.target.value);
        //+trans_history.trans_item.transState[event.target.value].Activity
        var cfirm = window.confirm('ARE YOU SURE YOU WANT TO DELTE THIS ITEM')
        if (cfirm) {
            trans_history.trans_modify({ type: "Remove", payload: Number(event.target.value) });
        }
    }

    const display_id = (e) => {
        const delete_button_value = document.getElementsByClassName("hide_history_button");
        for (let index = 0; index < delete_button_value.length; index++) {
            if (Number(delete_button_value[index].value) === e) {
                console.log(delete_button_value[index].value, e);
                delete_button_value[index].classList.add("show_history_button")

            }
        }
    }

    const hide_id = (e) => {
        const delete_button_value = document.getElementsByClassName("hide_history_button");
        for (let index = 0; index < delete_button_value.length; index++) {
            if (Number(delete_button_value[index].value) === e) {
                console.log(delete_button_value[index].value, e);
                delete_button_value[index].classList.remove("show_history_button")
            }
        }
    }

    return (
        <div>
            <h3>History</h3>
            <hr></hr>
            <ul className='ul_list'>
                {trans_history.trans_item.transList.map(e => {
                    return (
                        <div className={e.Amount > 0 ? 'Positive_History_list' : 'Negative_History_list'} key={e.id} onMouseEnter={() => display_id(e.id)} onMouseLeave={() => hide_id(e.id)} >

                            <div className='history_list_li_div'>
                                <li className='History_list-li'>
                                    {e.Activity} - Amount : {e.Amount}$
                        </li>
                            </div>
                            <div>
                                <button className={'hide_history_button btn_effect'} value={e.id} onClick={remove_button}> X </button>
                            </div>

                        </div>)
                })}
            </ul>
        </div>
    )
}

export default History
