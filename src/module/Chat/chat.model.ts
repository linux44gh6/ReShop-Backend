import mongoose from "mongoose";
import { IMessage } from "./chat.interface";

const chatSchema = new mongoose.Schema<IMessage>({
  receiver: {
    type: String,
    required: true,  
  },
  sender: {
    type: String,
    required: true,
  },
  message: {          
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const ChatModel = mongoose.model<IMessage>("Chat", chatSchema);
