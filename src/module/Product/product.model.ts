import mongoose from "mongoose";
import { IProduct } from "./product.interface";

const productSchema = new mongoose.Schema<IProduct>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    condition: {
        type: String,
        required: true
    },
    images: {
        type: [String],
    },
    userID: {
        type: String,
        required: true
    },
    
},{timestamps: true});

export const ProductModel = mongoose.model<IProduct>('Product', productSchema);