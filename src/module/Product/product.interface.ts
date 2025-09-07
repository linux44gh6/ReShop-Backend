import { ObjectId } from "mongoose";

export interface IProduct {
    title: string;
    description: string;
    price: string;
    condition: "new" | "used"; 
    images?: string[]; 
    userID: ObjectId; 
    status: "available" | "sold";
    category: ObjectId,
    productType:string
    location: string
}
