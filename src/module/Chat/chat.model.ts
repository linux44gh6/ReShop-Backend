import mongoose from "mongoose";
import { IMessage } from "./chat.interface";

const chatSchema = new mongoose.Schema<IMessage>({
    sender: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
}, { timestamps: true });

export const ChatModel = mongoose.model<IMessage>('Chat', chatSchema);