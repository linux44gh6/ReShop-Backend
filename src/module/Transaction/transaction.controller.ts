import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import { TransactionService } from "./transaction.service";

const createTransaction=CatchAsync(async(req,res)=>{
    const payload=req.body;
    const result=await TransactionService.createTransaction(payload)
    sendResponse(res,  {
        success: true,
        message: 'Transaction Created Successfully',
        data: result,
        statusCode: 200
    })
})

const getTransaction=CatchAsync(async(req,res)=>{
    const result=await TransactionService.getTransaction();
    sendResponse(res,  {
        success: true,
        message: 'Transaction Retrive Successfully',
        data: result,
        statusCode: 200
    })
})

const getSingleTransaction=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await TransactionService.getSingleTransaction(id);
    sendResponse(res,  {
        success: true,
        message: 'Transaction Retrive Successfully',
        data: result,
        statusCode: 200
    })
})

const updateTransaction=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const payload=req.body;
    const result=await TransactionService.updateTransaction(id,payload);
    sendResponse(res,  {
        success: true,
        message: 'Transaction Updated Successfully',
        data: result,
        statusCode: 200
    })
})
export const TransactionController={
    createTransaction,
    getTransaction,
    getSingleTransaction,
    updateTransaction
}