import { Router } from "express";
import { AuthController } from "./auth.controller";
import { parseBody } from "../../Middlewares/bodyParser";
import upload from "../../Utils/fileUploadHelpers";
import { validateRequest } from "../../Middlewares/validateRequest";
import { userValidation } from "../User/user.validation";

const router = Router();

router.post('/register', validateRequest(userValidation.userValidationSchema), AuthController.register);

router.post('/login', AuthController.login);
export const authRoute = router;