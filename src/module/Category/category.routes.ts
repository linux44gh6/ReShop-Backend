import { Router } from "express";
import { CategoryController } from "./category.controller";
import upload from "../../Utils/fileUploadHelpers";
import { parseBody } from "../../Middlewares/bodyParser";

const router=Router()

router.post("/", upload.array("icon", 5), parseBody, CategoryController.createCategory);


router.get('/',CategoryController.getCategory)

export const categoryRoute=router