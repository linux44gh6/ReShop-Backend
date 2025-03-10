import AppError from "../../error/appError";
import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import { CategoryService } from "./category.service";

const createCategory = CatchAsync(async (req, res) => {
    const data = req.body;
    const result = await CategoryService.createCategory(data);
    sendResponse(res, {
        success: true,
        message: "Category Created Successfully",
        data: result,
        statusCode: 200,
    });
});


const getCategory=CatchAsync(async(req,res)=>{
    const result=await CategoryService.getCategory();
    sendResponse(res,  {
        success: true,
        message: 'Category Retrive Successfully',
        data: result,
        statusCode: 200
    })
})
export const CategoryController={
    createCategory,
    getCategory
}