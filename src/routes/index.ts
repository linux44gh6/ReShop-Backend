import { Router } from "express";
import { userRoute } from "../module/User/user.routes";
import { authRoute } from "../module/Auth/auth.routes";
import { categoryRoute } from "../module/Category/category.routes";

const router=Router();
const moduleRouter=[
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/user',
        route:userRoute
    },
    {
        path:'/category',
        route:categoryRoute
    }
]
moduleRouter.forEach((route)=>router.use(route.path,route.route));
export default router;