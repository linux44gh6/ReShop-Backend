import { Router } from "express";
import { UserController } from "./user.controller";
import auth from "../../Middlewares/Auth/auth";
import { userRole } from "./user.interface";

const router=Router()

router.get('/', auth(userRole.ADMIN),UserController.getAllUser)

router.get('/:id',auth(userRole.ADMIN),UserController.getSingleUser)

router.delete('/:id',auth(userRole.ADMIN),UserController.deleteUser)

router.patch('/:id',auth(userRole.ADMIN),UserController.updateUser)

router.patch('/profile/:id',auth(userRole.USER||userRole.ADMIN),UserController.updateProfile)

export const userRoute=router