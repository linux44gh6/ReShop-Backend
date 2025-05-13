import type { ObjectId } from "mongoose";

export type IMessage = {
  _id: string;
  sellerId: ObjectId;
  buyerId: ObjectId;
  message: {
    senderId: ObjectId;
    text: string;
    date: Date;
  }[];
  productId: ObjectId;
};
