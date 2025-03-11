import { ObjectId } from "mongoose";

export interface IWishlist {
    userID: ObjectId;
    products: ObjectId;
}
