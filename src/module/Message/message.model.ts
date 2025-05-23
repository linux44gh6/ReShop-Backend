import mongoose, { Schema, model, Types } from "mongoose";

const messageItemSchema = new Schema(
  {
    senderId: { type: Types.ObjectId, ref: "User", required: true },
    senderRole: { type: String, required: true }, // buyer or seller
    text: { type: String, required: true },
  },
  { _id: false,timestamps:true }
);

const messageSchema = new Schema({
  sellerId: { type: Types.ObjectId, ref: "User", required: true },
  buyerId: { type: Types.ObjectId, ref: "User", required: true },
  message: { type: [messageItemSchema], required: true },
  productId: { type: Types.ObjectId, ref: "Product", required: true },
},{timestamps:true});

const MessageModel = model("Message", messageSchema);

export default MessageModel;
