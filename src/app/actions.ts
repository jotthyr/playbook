export type Action = { type: "ADD_TRANSACTION", payload: string }

export const addTransaction = (transaction: string):Action => ({
    type: "ADD_TRANSACTION", payload: transaction
})