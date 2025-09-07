import mongoose from "mongoose";
import { IMessage } from "./chat.interface";

const chatSchema = new mongoose.Schema<IMessage>({
  receiver: {
    type: String,
    required: true,   // ✅ fix
  },
  sender: {
    type: String,
    required: true,
  },
  message: {          // ✅ must match the field you send
    type: String,
    required: true,
  },
  productId: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const ChatModel = mongoose.model<IMessage>("Chat", chatSchema);
