import AppError from "../../error/appError";
import { sendImagesToCloudinary } from "../../Utils/fileUploadHelpers";

import { CategoryModel } from "./category.model";


const createCategory = async (files: Express.Multer.File[],data:Partial<ICategory>) => {
    try{
        if (!files || files.length === 0) {
            throw new AppError(400, "Please provide a file");
        }
        const uploadedImages=await sendImagesToCloudinary(files)
       data.icon=uploadedImages
       console.log(data);
       const result=await CategoryModel.create(data);
       return result
    }catch(err){
        console.log(err);
    }
};

const getCategory=async()=>{
    const result=await CategoryModel.find();
    return result
}
export const CategoryService={
    createCategory,
    getCategory
}