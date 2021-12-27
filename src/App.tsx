import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import './App.css';
import TransactionForm from './features/transactions/TransactionForm';
import TransactionTable from './features/transactions/TransactionTable';
import { Transaction, TransactionState } from './app/transactionReducer';
import { addTransaction, deleteTransaction } from './app/actions';

function App() {
  const transactions = useSelector<TransactionState, TransactionState['transactions']>((state) => state.transactions);
  const dispatch = useDispatch();
  const [eurPrice, seteurPrice] = useState(4.382);
  const onAddTransaction = (transaction: Transaction) => {
    dispatch(addTransaction(transaction));
  };
  const onDeleteTransaction = (transaction: Transaction) => {
    dispatch(deleteTransaction(transaction));
  };
  useEffect(() => {
    axios.get('http://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json')
      .then((response) => {
        seteurPrice(response.data.rates[0].ask.toFixed(3));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="app-title">
          <h1>List of expenses</h1>
          <p>
            1 EUR = {' '}
            { eurPrice}
            {' '}PLN
          </p>
        </div>
        <TransactionForm addTransaction={onAddTransaction} />
        <TransactionTable deleteTransaction={onDeleteTransaction} eurPrice={eurPrice} />
      </header>
    </div>
  );
}

export default App;
