import AppError from "../../error/appError";
import { CatchAsync } from "../../Utils/CatchAsync";
import { sendResponse } from "../../Utils/SendResponse";
import { CategoryService } from "./category.service";

const createCategory = CatchAsync(async (req, res) => {
    const files = req.files as Express.Multer.File[]; 
    const data = req.body;
    if (!files || files.length === 0 || !data) {
        throw new AppError(400, "Please provide at least one image and category data");
    }
    const result = await CategoryService.createCategory(files, data);
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