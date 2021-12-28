import React, { useState, ChangeEvent } from 'react';
import '../../App.css';
import { Transaction } from '../../app/transactionReducer';

interface TransactionFormProps {
  addTransaction(transaction:{}): void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ addTransaction }) => {
  const [isTitleValid, setisTitleValid] = useState(false);
  const [isAmountValid, setisAmountValid] = useState(false);
  const [transaction, setTransaction] = useState<Transaction>({
    title: '',
    amount: '',
  });
  const updateTransaction = (e:ChangeEvent<HTMLInputElement>) => {
    let t = e.target.value.trim();
    let twoDecimal = (t.indexOf('.') >= 0) ? (t.substr(0, t.indexOf('.')) + t.substr(t.indexOf('.'), 3)) : t;

    if (e.target.name === 'amount') {
      if (t !== '') {
        setisAmountValid(true);
      } else {
        setisAmountValid(false);
      }

      if (!isNaN(e.target.value as any)) {
        setTransaction({
          ...transaction,
          [e.target.name]: twoDecimal,
        });
      }
    } else {
      setTransaction({
        ...transaction,
        [e.target.name]: e.target.value,
      });
    }

    if (e.target.name === 'title') {
      let re = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=.,_\- ]{5,}$/;
      if (re.test(t)) {
        setisTitleValid(true);
      } else {
        setisTitleValid(false);
      }
    }
  };

  const handleAddTransaction = () => {
    addTransaction(transaction);
    setTransaction({
      title: '',
      amount: '',
    });
    setisTitleValid(false);
    setisAmountValid(false);
  };

  return (
    <div className="add-transaction">
      <div className="add-transaction-captions">
        <p>Title of transaction </p>
        <p>Amount (in PLN) </p>
      </div>
      <div className="add-transaction-inputs">
        <input onChange={updateTransaction} name="title" type="text" value={transaction.title} />
        <input onChange={updateTransaction} name="amount" value={transaction.amount} />
      </div>
      <div className="add-transaction-button">
        <div></div>
        <div><button disabled={!(isAmountValid && isTitleValid)} onClick={handleAddTransaction}>Add</button></div>
      </div>
    </div>
  );
};
export default TransactionForm;
