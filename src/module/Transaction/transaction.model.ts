import mongoose, { model } from "mongoose";
import Transaction from "./transaction.interface";

const TransactionSchema = new mongoose.Schema<Transaction>({
    buyerID: {
        type: String,
        required: true
    },
    sellerID: {
        type: String,
        required: true
    },
    itemID: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})
export const TransactionModel=model<Transaction>('Transaction',TransactionSchema);