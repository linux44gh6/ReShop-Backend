import AppError from "../../error/appError";
import { sendImagesToCloudinary } from "../../Utils/fileUploadHelpers";

import { Category, } from "./category.model";


const createCategory = async (data: Partial<ICategory>) => {
    console.log(data);
    try {
        const isExistCategory = await Category.findOne({ name: data.name });
        if (isExistCategory) {
            throw new AppError(400, 'Category Already Exists');
        }
        const result = await Category.create(data);
        return result;
    } catch (err) {
        console.log(err);
        throw err;  // Re-throw the error so it can be handled in the frontend
    }
};


const getCategory=async()=>{
    const result=await Category.find();
    return result
}
export const CategoryService={
    createCategory,
    getCategory
}