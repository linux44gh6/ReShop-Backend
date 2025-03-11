
import ITransaction from "./transaction.interface"
import { TransactionModel } from "./transaction.model"

const createTransaction=async(payload:ITransaction)=>{
    const result=await TransactionModel.create(payload)
    return result
}
const getTransaction=async()=>{
    const result=await TransactionModel.find().populate("itemID").populate("buyerID").populate("sellerID")
    return result
}
const getTransactionByUser=async(userId:string)=>{
    const result=await TransactionModel.find({buyerID:userId}).populate("itemID").populate("buyerID").populate("sellerID")
    return result
}
const getSingleTransaction=async(id:string)=>{
    const result=await TransactionModel.findById(id)
    return result
}
const updateTransaction=async(id:string,payload:ITransaction)=>{
    const result=await TransactionModel.findByIdAndUpdate(id,payload,{new:true})
    return result
}
const deleteTransaction=async(id:string)=>{
    const result=await TransactionModel.findByIdAndDelete(id)
    return result
}
export const TransactionService={
    createTransaction,
    getTransaction,
    getSingleTransaction,
    updateTransaction,
    getTransactionByUser,
    deleteTransaction
}