import { Router } from "express";
import { UserController } from "./user.controller";

const router=Router()

router.get('/',UserController.getAllUser)
export const userRoute=router