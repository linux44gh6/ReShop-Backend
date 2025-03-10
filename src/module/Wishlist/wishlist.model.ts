import mongoose, { Types } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const productSchema = new mongoose.Schema<IWishlist>({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
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
        type: Types.ObjectId,
        required: true,
        ref:'User'
    },
    status: {
        type: String,
        required: true
    },
    category: {
        type:Types.ObjectId,
        required: true,
        ref:'Category'
    },
    location: {
        type: String,
        required: true
    }
},{timestamps: true});

export const WishlistModel = mongoose.model<IWishlist>('Wishlist', productSchema);