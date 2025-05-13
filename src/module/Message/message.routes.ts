import { Router } from "express";
import { messageController } from "./message.controller";
import auth from "../../Middlewares/Auth/auth";
import { userRole } from "../User/user.interface";

const router=Router()


router.post('/',auth(userRole.ADMIN,userRole.USER),messageController.createMessage)

export const messageRouter=router