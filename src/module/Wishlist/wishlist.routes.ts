import { Router } from "express";
import { WishlistController } from "./wishlist.controller";

const router=Router()

router.post('/',WishlistController.createWishlist)

router.get('/user/:id',WishlistController.getWishlistByUser)

router.delete('/:id',WishlistController.deleteWishlist)

export const wishlistRoute=router