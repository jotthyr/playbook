import { Action } from "./actions"

export interface TransactionState {
    transactions: string[]
}
const initialState = {
    transactions:[]
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