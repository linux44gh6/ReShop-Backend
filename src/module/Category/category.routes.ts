import { Router } from "express";
import { CategoryController } from "./category.controller";
import upload from "../../Utils/fileUploadHelpers";
import { parseBody } from "../../Middlewares/bodyParser";

const router=Router()

router.post('/',upload.single('icon'),parseBody, CategoryController.createCategory)

export const categoryRoute=router