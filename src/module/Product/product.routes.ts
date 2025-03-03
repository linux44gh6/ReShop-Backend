import { Router } from "express";
import { ProductController } from "./product.controller";
import upload from "../../Utils/fileUploadHelpers";
import { parseBody } from "../../Middlewares/bodyParser";
import { validateRequest } from "../../Middlewares/validateRequest";
import { productValidation } from "./product.validation";
import auth from "../../Middlewares/Auth/auth";
import { userRole } from "../User/user.interface";

const router=Router()
router.post('/', auth(userRole.USER||userRole.ADMIN), upload.array("files", 5), parseBody, validateRequest(productValidation.productSchema),  ProductController.createProduct)

router.get('/',ProductController.getAllProduct)

router.get('/:id',ProductController.getSingleProduct)

router.delete('/:id', auth (userRole.USER||userRole.ADMIN),ProductController.deleteProduct)
export const productRoute=router