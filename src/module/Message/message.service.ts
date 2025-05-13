import { StatusCodes } from "http-status-codes";
import AppError from "../../error/appError";
import MessageModel from "./message.model"
import { User } from "../User/user.model";
import { ProductModel } from "../Product/product.model";

const createMessage = async (payload: any) => {
  const { sellerId, buyerId } = payload;
  const isExist = await MessageModel.findOne({ sellerId, buyerId });

  if (isExist) {
    // Merge messages correctly
    payload.message = [...isExist.message, ...payload.message];
        console.log(payload);
    const result = await MessageModel.findOneAndUpdate(
      { sellerId, buyerId },
      { message: payload.message },
      { new: true }
    );
    return result;
  } else {
    // Create new message document
    const result = await MessageModel.create(payload);
    return result;
  }
};

const getMessage = async (productId:string,userId:string) => {
    const [messages, user, product] = await Promise.all([
    MessageModel.find({ productId, userId }),       // Returns an array
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
    throw new AppError(StatusCodes.NOT_FOUND, "Message not found");
  }
  const result = await MessageModel.find({ productId, userId });
  return result;
}

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

export const messageService={
    createMessage,
    getMessage,
    updateMessage,
    deleteMessage
}