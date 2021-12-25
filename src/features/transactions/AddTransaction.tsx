import React, { useState, ChangeEvent } from 'react';
import '../../App.css';

interface AddTransactionProps {
  addTransaction(note:{}): void;
}
interface ITransaction {
  title: string;
  amount: string;
}
const AddTransaction: React.FC<AddTransactionProps> = ({addTransaction}) => {

  const [transactionTitle, setTransactionTitle] = useState<ITransaction>({
    title: "",
    amount: ""
  })
  const updateTransaction = (e:ChangeEvent<HTMLInputElement>) => {
    setTransactionTitle({
      ...transactionTitle,
      [e.target.name]: e.target.value
    });
  }
  const handleAddTransaction = () => {
    addTransaction(transactionTitle)
    setTransactionTitle({
      title: "",
      amount: ""
    })
  }


  return (
    <div className="add-transaction">
      <div className="add-transaction-elements">
        <div>
          <label>Title of transaction </label>
          <input onChange={updateTransaction} name="title" type="text" value={transactionTitle.title} />
        </div>
        <div>
          <label>Amount (in PLN) </label>
          <input onChange={updateTransaction} name="amount" type="text" value={transactionTitle.amount} />
        </div>
      </div>
      <button onClick={handleAddTransaction}>Add</button>
    </div>
  );
}
export default AddTransaction