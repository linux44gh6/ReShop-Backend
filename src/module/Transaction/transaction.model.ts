import mongoose, { model, Types } from "mongoose";
import Transaction from "./transaction.interface";

const TransactionSchema = new mongoose.Schema<Transaction>({
    buyerID: {
        type:Types.ObjectId,
        required: true
    },
    sellerID: {
        type: Types.ObjectId,
        required: true,
        ref:'User'
    },
    itemID: {
        type: Types.ObjectId,
        required: true,
        ref:'Product'
    },
    status: {
        type: String,
        required: true
    }
})
export const TransactionModel=model<Transaction>('Transaction',TransactionSchema);