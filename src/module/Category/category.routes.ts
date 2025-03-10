import { Router } from "express";
import { CategoryController } from "./category.controller";
import { CategoryValidation } from "./category.validation";
import { validateRequest } from "../../Middlewares/validateRequest";
import auth from "../../Middlewares/Auth/auth";
import { userRole } from "../User/user.interface";
const router=Router()
router.post("/",auth(userRole.ADMIN), validateRequest(CategoryValidation.CategoryValidationSchema) ,CategoryController.createCategory);


router.get('/',CategoryController.getCategory)

export const categoryRoute=router