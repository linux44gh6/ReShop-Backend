import AppError from "../../error/appError";
import { sendImageToCloudinary } from "../../Utils/fileUploadHelpers";
import { CategoryModel } from "./category.model";


const createCategory = async (file: Express.Multer.File,data:Partial<ICategory>) => {
    try{
        const imageName="imageName"
        const path=file?.path
        const {secure_url}=await sendImageToCloudinary(imageName,path)
       data.icon=secure_url
       console.log(data);
       const result=await CategoryModel.create(data);
       return result
    }catch(err){
        console.log(err);
    }
};

export const CategoryService={
    createCategory
}