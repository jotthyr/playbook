import { createStore } from 'redux';
import { transactionReducer } from './transactionReducer';
export const store = createStore(transactionReducer)