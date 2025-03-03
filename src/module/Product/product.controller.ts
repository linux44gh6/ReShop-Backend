import AppError from "../../error/appError";
import { CatchAsync } from "../../Utils/CatchAsync";
import { sendImagesToCloudinary } from "../../Utils/fileUploadHelpers";
import { sendResponse } from "../../Utils/SendResponse";
import { User } from "../User/user.model";
import { ProductService } from "./product.service";

const createProduct=CatchAsync(async(req,res)=>{
    const payload=req.body;
    const files=req.files
    if(files){
        const uploadedImages=await sendImagesToCloudinary(files as Express.Multer.File[]);
        payload.images=uploadedImages
        
    }else{
        throw new AppError(400,"Please provide at least one image")
    }
    const result=await ProductService.createProduct(payload)
    sendResponse(res,  {
        success: true,
        message: 'Product Created Successfully',
        data: result,
        statusCode: 200
    })
})

const getAllProduct=CatchAsync(async(req,res)=>{
    const result=await ProductService.getAllProduct();
    sendResponse(res,  {
        success: true,
        message: 'Product Retrive Successfully',
        data: result,
        statusCode: 200
    })
})

const getSingleProduct=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await ProductService.getSingleProduct(id);
    sendResponse(res,  {
        success: true,
        message: 'Product Retrive Successfully',
        data: result,
        statusCode: 200
    })
})

const deleteProduct=CatchAsync(async(req,res)=>{
    const {id}=req.params
    const result=await ProductService.deleteProduct(id);
    sendResponse(res,  {
        success: true,
        message: 'Product Deleted Successfully',
        data: result,
        statusCode: 200
    })
})

export const ProductController={
    createProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct
}