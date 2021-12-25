import { Action } from "./actions"

export interface TransactionState {
    transactions: { title: string; amount: string; }[]
}
const initialState = {
    transactions:[{
        title: "New Book Rust", amount:"100"
    }]
}

export const transactionReducer = (state: TransactionState = initialState, action: Action) => {
    switch(action.type) {
        case "ADD_TRANSACTION": {
            return {...state, transactions: [...state.transactions, action.payload]}
        }
        default:
            return state
    }
}