import { Router } from "express";
import { ProductController } from "./product.controller";
import { validateRequest } from "../../Middlewares/validateRequest";
import { productValidation } from "./product.validation";
import auth from "../../Middlewares/Auth/auth";
import { userRole } from "../User/user.interface";

const router=Router()

router.post('/', auth(userRole.USER||userRole.ADMIN), validateRequest(productValidation.productSchema), ProductController.createProduct)

router.get('/',ProductController.getAllProduct)

router.get('/:id',ProductController.getSingleProduct)
router.delete('/:id', auth (userRole.USER||userRole.ADMIN),ProductController.deleteProduct)

router.get('/user/:id',ProductController.getAllProductByUser)

export const productRoute=router