import { Router } from "express";
import { userRoute } from "../module/User/user.routes";

const router=Router();
const moduleRouter=[
    {
        path:'/auth',
        route:userRoute
    }
]
moduleRouter.forEach((route)=>router.use(route.path,route.route));
export default router;