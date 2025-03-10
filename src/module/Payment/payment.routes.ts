import { Router } from "express";
import { stripePaymentController } from "./payment.controller";


const router=Router()
router.post('/',stripePaymentController.stripePayment)
export const stripePaymentRouter=router