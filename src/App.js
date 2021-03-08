import './normalize.css';
import './App.css';
import React, { useReducer } from 'react';
import Transactions from './Component/Transaction/Transaction'
import History from './Component/History/History'
import Balance from './Component/Balance/Balance'
import Header from './Component/Header/Header'

export const trans_context = React.createContext();

function App() {
  //Reducer//
  //state 
  const transState = {
    transList: [
      { id: 1, Activity: "PAYPAL", Amount: 500 },
      { id: 3, Activity: "PS5", Amount: -500 }
    ]
  }
  //Reducer
  const transReducer = (state, action) => {
    // console.log(...state.Transactions)
    //...state, transList : [...state.transList.filter(item => item.id !== item.action.payload)] 
    switch (action.type) {
      case "Add": return { ...state, transList: [...state.transList, action.payload] }
      case "Remove": return { ...state, transList: [...state.transList.filter(item => item.id !== action.payload)] }
      default: return state
    }
  }
  //useReducer 
  const [Transaction, setTransaction] = useReducer(transReducer, transState)

  return (

    <trans_context.Provider value={{ trans_item: Transaction, trans_modify: setTransaction }}>
      <div className='app-main'>
        <Header />
        <Balance />
        <History />
        <Transactions />
      </div>
    </trans_context.Provider>
  )
}

export default App
