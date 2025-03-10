import { ObjectId } from "mongoose";

export interface IWishlist {
    title: string;
    description: string;
    price: string;
    condition: "new" | "used"; 
    images?: string[]; 
    userID: ObjectId; 
    status: "available" | "sold";
    category: ObjectId,
    location: string
}
