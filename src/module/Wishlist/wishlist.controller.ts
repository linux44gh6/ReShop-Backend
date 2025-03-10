import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import wishlistServices from "./wishlist.service";

const createWishlist=CatchAsync(async(req,res)=>{
    const payload=req.body;
    const result=await wishlistServices.createWishlist({payload});
    sendResponse(res,  {
        success: true,
        message: 'Wishlist Created Successfully',
        data: result,
        statusCode: 200
    })
})

const getWishlistByUser=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await wishlistServices.getWishlistByUser(id);
    sendResponse(res,  {
        success: true,
        message: 'Wishlist Retrive Successfully',
        data: result,
        statusCode: 200
    })
})

const deleteWishlist=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await wishlistServices.deleteWishlist(id);
    sendResponse(res,  {
        success: true,
        message: 'Wishlist Deleted Successfully',
        data: result,    
        statusCode: 200
    })
})

export const WishlistController={
    createWishlist,
    getWishlistByUser,
    deleteWishlist    
}