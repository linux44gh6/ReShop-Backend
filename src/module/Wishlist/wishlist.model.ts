import mongoose, { Schema, Types } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const wishlistSchema = new mongoose.Schema<IWishlist>(
  {
    userID: {
      type: Types.ObjectId,
      required: true,
      ref: "User",
    },
    products:{
        type: Types.ObjectId,
        required: true,
        ref: "Product", // Reference to the Product model
      },
  },
  { timestamps: true }
);

export const WishlistModel = mongoose.model<IWishlist>("Wishlist", wishlistSchema);
