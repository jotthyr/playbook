import { Action } from './actions';

export type Transaction = {
    title: string;
    amount: string;
}
export interface TransactionState {
    transactions: Transaction[]
}
const initialState = {
  transactions: [{
    title: 'New book about Rust', amount: '100',
  },
  {
    title: 'Snacks for a football match', amount: '20',
  },
  {
    title: 'Bus ticket', amount: '2.55',
  },
],
};

export const transactionReducer = (state: TransactionState = initialState, action: Action) => {
  switch (action.type) {
    case 'ADD_TRANSACTION': {
      return { ...state, transactions: [...state.transactions, action.payload] };
    }
    case 'DELETE_TRANSACTION': {
      return {
        ...state,
        // @ts-ignore
        transactions: state.transactions.filter((item, index) => item.title !== action.payload)
      }
    }
    default:
      return state;
  }
};
