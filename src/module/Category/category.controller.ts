import AppError from "../../error/appError";
import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import { CategoryService } from "./category.service";

const createCategory=CatchAsync(async(req,res)=>{
   const file=req.file;
   const data=req.body;
   if(!file || !data){
   throw new AppError(400,"Please Provide a file and data");
   }
    const result=await CategoryService.createCategory(file,data);
    sendResponse(res,  {
        success: true,
        message: 'Category Created Successfully',
        data: result,
        statusCode: 200
    })
})

export const CategoryController={
    createCategory
}