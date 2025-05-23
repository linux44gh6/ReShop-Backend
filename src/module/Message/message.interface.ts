import type { ObjectId } from "mongoose";

export type IMessage = {
  _id: string;
  sellerId: ObjectId;
  buyerId: ObjectId;
  message: {
    senderId: ObjectId;
    senderRole: string; // "buyer" | "seller";
    text: string;
  }[];
  productId: ObjectId;
};
