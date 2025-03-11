import { Router } from "express";
import { userRoute } from "../module/User/user.routes";
import { authRoute } from "../module/Auth/auth.routes";
import { categoryRoute } from "../module/Category/category.routes";
import { productRoute } from "../module/Product/product.routes";
import { chatRoute } from "../module/Chat/chat.routes";
import { transactionRoute } from "../module/Transaction/transaction.routes";
import { stripePaymentRouter } from "../module/Payment/payment.routes";
import { wishlistRoute } from "../module/Wishlist/wishlist.routes";

const router=Router();
const moduleRouter=[
    {
        path:'/auth',
        route:authRoute
    },
    {
        path:'/users',
        route:userRoute
    },
    {
        path:'/category',
        route:categoryRoute
    },
    {
        path:'/listings',
        route:productRoute
    },
    {
        path:'/chat',
        route:chatRoute
    },
    {
        path:'/transaction',
        route:transactionRoute
    },
    {
        path:'/payment',
        route:stripePaymentRouter
    },
    {
        path:'/wishlist',
        route:wishlistRoute
    },
]
moduleRouter.forEach((route)=>router.use(route.path,route.route));
export default router;