import React from 'react';
import AddTransaction  from './features/transactions/AddTransaction';
import { TransactionTable } from './features/transactions/TransactionTable';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { TransactionState } from "./app/transactionReducer";
import { addTransaction } from './app/actions';

function App() {
  const transactions = useSelector<TransactionState, TransactionState["transactions"]>((state) => state.transactions)
  const dispatch = useDispatch()

  const onAddTransaction = (transaction: string) => {
    dispatch(addTransaction(transaction))
  }

  console.log(transactions);

  return (
    <div className="App">
      <header className="App-header">
        <div className="add-transaction">
          <h1>List of expenses</h1>
          <p>1 EUR = (API) PLN</p>
        </div>
        <AddTransaction addTransaction={onAddTransaction}/>
        <TransactionTable />
      </header>
    </div>
  );
}

export default App;
