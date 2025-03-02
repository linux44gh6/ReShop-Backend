import { Router } from "express";
import { userRoute } from "../module/User/user.routes";
import { authRoute } from "../module/Auth/auth.routes";

const router=Router();
const moduleRouter=[
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/user',
        route:userRoute
    }
]
moduleRouter.forEach((route)=>router.use(route.path,route.route));
export default router;