import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import MessageModel from "./message.model"
import { User } from "../User/user.model";
import { ProductModel } from "../Product/product.model";
import mongoose from "mongoose";
const createMessage = async (payload: any, user: any) => {
  const { sellerId, buyerId, productId } = payload;

  const senderRole = user._id.toString() === sellerId.toString() ? "seller" : "buyer";

  payload.message = payload.message.map((msg: any) => ({
    ...msg,
    senderRole,
  }));

  const existingThread = await MessageModel.findOne({ productId, buyerId, sellerId });

  if (existingThread) {
    existingThread.message.push(...payload.message);
    await existingThread.save();
    return existingThread;
  } else {
    const result = await MessageModel.create(payload);
    return result;
  }
};




const getMessage = async (productId: string, userId: string) => {
  // Fetch messages, user, and product in parallel
  const [messages, user, product] = await Promise.all([
    MessageModel.find({
      productId: new mongoose.Types.ObjectId(productId),
      $or: [
        { buyerId: new mongoose.Types.ObjectId(userId) },
        { sellerId: new mongoose.Types.ObjectId(userId) },
      ],
    }),
    User.findById(userId),
    ProductModel.findById(productId),
  ]);

  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User not found");
  }
  if (!product) {
    throw new AppError(StatusCodes.NOT_FOUND, "Product not found");
  }

  if (!messages || messages.length === 0) {
    throw new AppError(StatusCodes.NOT_FOUND, "No messages found");
  }

  return messages[0];
};


const updateMessage = async (payload: any) => {
  const { sellerId, buyerId,senderId } = payload;
  const result = await MessageModel.findOneAndUpdate(
    { sellerId, buyerId },
    { message: payload.message },
    { new: true }
  );
  return result;
}
const deleteMessage = async (conversationId: string, senderId: string) => {
  const result = await MessageModel.findByIdAndUpdate(
    conversationId,
    {
      $pull: {
        message: { senderId: senderId },
      },
    },
    { new: true }
  );

  return result;
};

const getMessageByUser=async(userId:string)=>{
    const isExist=await MessageModel.find({userId});
    if(!isExist){
        throw new AppError(StatusCodes.NOT_FOUND,"Message not found")
    }
    const result = await MessageModel.find({ userId });
    return result;
}
export const messageService={
    createMessage,
    getMessage,
    updateMessage,
    deleteMessage,
    getMessageByUser
}