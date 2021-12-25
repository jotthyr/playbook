import React, { useState, ChangeEvent } from 'react';
import '../../App.css';

interface AddTransactionProps {
  addTransaction(note:string): void;
}

const AddTransaction: React.FC<AddTransactionProps> = ({addTransaction}) => {
  const [transactionTitle, setTransactionTitle] = useState()

  const updateTransaction = (e:ChangeEvent<HTMLInputElement>) => {

    setTransactionTitle(e.target.value)
  }
  const handleAddTransaction = () => {
    addTransaction(transactionTitle)
    setTransactionTitle("")
  }
  console.log(transactionTitle);

  return (
    <div className="add-transaction">
      <div className="add-transaction-elements">
        <div>
          <label>Title of transaction </label>
          <input onChange={updateTransaction} type="text" value={transactionTitle} />
        </div>
        <div>
          <label>Amount (in PLN) </label>
          <input onChange={updateTransaction} type="text" />
        </div>
      </div>
      <button onClick={handleAddTransaction}>Add</button>
    </div>
  );
}
export default AddTransaction