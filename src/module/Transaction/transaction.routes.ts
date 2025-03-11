import { Router } from "express";
import { TransactionController } from "./transaction.controller";
import { validateRequest } from "../../Middlewares/validateRequest";
import { TransactionValidation } from "./transaction.validation";

const router=Router()

router.post('/',
     validateRequest(TransactionValidation.TransactionValidationSchema),TransactionController.createTransaction
    )

router.get('/',TransactionController.getTransaction)

router.get('/:id',TransactionController.getSingleTransaction)

router.patch('/:id',
     validateRequest(TransactionValidation.TransactionUpdateValidationSchema),TransactionController.updateTransaction
    )
    
    router.get('/user/:id',TransactionController.getTransactionByUser)
    router.delete('/:id',TransactionController.deleteTransaction)
export const transactionRoute=router