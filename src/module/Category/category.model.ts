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

export const Category=mongoose.model<ICategory>('Category',categorySchema);