import { Router } from "express";
import { AuthController } from "./auth.controller";
import { parseBody } from "../../Middlewares/bodyParser";
import upload from "../../Utils/fileUploadHelpers";

const router = Router();

router.post('/register', AuthController.register);
export const authRoute = router;