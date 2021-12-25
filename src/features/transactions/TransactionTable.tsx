import React, { useState } from 'react';
import { TransactionState } from '../../app/transactionReducer'
import { useDispatch, useSelector } from 'react-redux';

export function TransactionTable() {
  const transactions = useSelector<TransactionState, TransactionState["transactions"]>((state) => state.transactions)

  return (
    <div className='table-container'>
      {
          transactions.length !== 0 ?
          <table>
          <tr>
            <th>Title</th>
            <th>Amount(PLN)</th>
            <th>Amount(EUR)</th>
            <th>Options</th>
          </tr>
          {transactions.map(item => (

            <tr>
              <td>{item}</td>
              <td>{item}</td>
              <td>{item}</td>
              <td>Delete</td>
            </tr>

          ))}
         </table> : "No transactions yet"
        }
    </div>
  );
}
