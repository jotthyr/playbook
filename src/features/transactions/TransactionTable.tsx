import React from 'react';
import { useSelector } from 'react-redux';
import { TransactionState } from '../../app/transactionReducer';

interface TransactionTableProps {
  eurPrice: number;
  deleteTransaction(title: any): void;
}
const TransactionTable: React.FC<TransactionTableProps> = ({ eurPrice, deleteTransaction }) => {
  const transactions = useSelector<TransactionState, TransactionState['transactions']>((state) => state.transactions);

  let totalPLN = transactions.reduce((acc, obj) => acc + parseFloat(obj.amount), 0);
  let totalEUR = (totalPLN / eurPrice).toFixed(2);

  return (
    <div className="table-container">
      {
        transactions.length !== 0 ?
          <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount(PLN)</th>
                <th>Amount(EUR)</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((item) => (
                <tr key={item.title}>
                  <td>{item.title}</td>
                  <td>{item.amount}</td>
                  <td>{(parseFloat(item.amount) / eurPrice).toFixed(2)}</td>
                  <td onClick={() => deleteTransaction(item)}>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <div>
            Sum:  {totalPLN} PLN ({totalEUR} EUR)
          </div>
          </> : 'No transactions yet'
        }
    </div>
  );
};

export default TransactionTable;
