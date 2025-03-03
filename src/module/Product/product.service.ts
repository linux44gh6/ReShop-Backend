
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";

const createProduct=async(payload:IProduct)=>{
const result=await ProductModel.create(payload)
return result
}

const getAllProduct=async()=>{
    const result=await ProductModel.find();
    return result
}

const getSingleProduct=async(id:string)=>{
    const result=await ProductModel.findById(id);
    return result
}

const deleteProduct=async(id:string)=>{
    const result=await ProductModel.findByIdAndDelete(id);
    return result
}
export const ProductService={
    createProduct,
    getAllProduct,
    getSingleProduct,
    deleteProduct
}