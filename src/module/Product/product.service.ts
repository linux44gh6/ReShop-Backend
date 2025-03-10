import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import { IProduct } from "./product.interface";
import { ProductModel } from "./product.model";
import mongoose from "mongoose";
import QueryBuilder from "../../Build/QueryBuilder";
// import { QueryBuilder } from "../../Build/QueryBuilder";


// Create Product
const createProduct = async (payload: IProduct) => {
  const result = await ProductModel.create(payload);
  return result;
};

// Get All Products with Query Builder
const getAllProduct = async (query: Record<string, unknown>) => {
    console.log(query,"form service");
  const queryBuilder = new QueryBuilder(ProductModel.find().populate("userID").populate("category"), query);
  const product = await queryBuilder
    .search(["title", "description"]) 
    .sort() 
    .filter()
    .paginate()
    const result=await product.modelQuery;
  return result;
// const searchTerm = query?.searchTerm || '';

// const result = await ProductModel.find({$or: [
//     {title: {$regex: searchTerm, $options: "i"}},
//     {description: {$regex: searchTerm, $options: "i"}},
   
//   ]})
return result
};

// Get Single Product by ID
const getSingleProduct = async (id: string) => {
  const result = await ProductModel.findById(id)
    .populate("userID")
    .populate("category");

  return result;
};

// Delete Product by ID
const deleteProduct = async (id: string) => {
  const product = await ProductModel.findById(id);
  if (!product) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Product Not Found");
  }
  const result = await ProductModel.findByIdAndDelete(id);
  return result;
};

// Get Products by User ID with Query Builder
const getProductByUserId = async (id: string, query: Record<string, unknown>) => {
  const objectId = new mongoose.Types.ObjectId(id);
  const queryBuilder = new QueryBuilder(ProductModel.find({ userID: objectId }), query);

  const result = await queryBuilder
    .search(["title", "description",]) // Specify searchable fields
    .sort() // Apply sorting
    .filter() // Apply any filtering
    .paginate() // Apply pagination
    .modelQuery.exec(); // Execute the query

  return result;
};

export const ProductService = {
  createProduct,
  getAllProduct,
  getSingleProduct,
  deleteProduct,
  getProductByUserId,
};
