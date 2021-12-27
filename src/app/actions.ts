import { Transaction } from './transactionReducer';

export type Action = { type: 'ADD_TRANSACTION' | 'DELETE_TRANSACTION', payload: Transaction }

export const addTransaction = (transaction: Transaction):Action => ({
  type: 'ADD_TRANSACTION', payload: transaction,
});

export const deleteTransaction = (transaction: Transaction):Action => ({
  type: 'DELETE_TRANSACTION', payload: transaction,
});
