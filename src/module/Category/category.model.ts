import mongoose from "mongoose";

const categorySchema=new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: [String],
    },
},{timestamps: true});

export const CategoryModel=mongoose.model<ICategory>('Category',categorySchema);