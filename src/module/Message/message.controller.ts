import { StatusCodes } from "http-status-codes";

import { sendResponse } from "../../Utils/SendResponse";
import { CatchAsync } from "../../Utils/CatchAsync";
import { messageService } from "./message.service";
import { ProductModel } from "../Product/product.model";

const createMessage = CatchAsync(async (req, res) => {
  const payload = req.body;
  const user = req.user;

  if (typeof user !== "object" || user === null || !("_id" in user)) {
    res.status(401).json({ success: false, message: "Unauthorized user" });
    return;
  }

  const userId = (user as { _id: string })._id;
  const { productId } = payload;

  const product = await ProductModel.findById(productId);
  if (!product) {
    res.status(404).json({ success: false, message: "Product not found" });
    return;
  }

  const productOwnerId = product.userID.toString();

  if (userId.toString() === productOwnerId) {
    // Sender is seller
    payload.sellerId = userId;
    if (!payload.buyerId) {
      res.status(400).json({ success: false, message: "buyerId is required when seller replies." });
      return;
    }
  } else {
    // Sender is buyer
    payload.buyerId = userId;
    payload.sellerId = productOwnerId;
  }

  payload.message = payload.message.map((msg: any) => ({
    ...msg,
    senderId: userId,
  }));

  const result = await messageService.createMessage(payload, user);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    success: true,
    message: "Message created successfully",
    data: result,
  });
});



const deleteMessage = CatchAsync(async (req, res) => {
    const {conversationId}=req.params
  const user = req.user;

  // Validate user
  if (typeof user !== "object" || user === null || !("_id" in user)) {
    res.status(401).json({ success: false, message: "Unauthorized user" });
    return;
  }
  const senderId = (user as { _id: string })._id;
  const result = await messageService.deleteMessage(conversationId, senderId);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Message deleted successfully",
    data: result,
  });
})


const getMessage=CatchAsync(async(req,res)=>{
    const {productId}=req.params
    const user = req.user;
     if (typeof user !== "object" || user === null || !("_id" in user)) {
    res.status(401).json({ success: false, message: "Unauthorized user" });
    return;
  }
 const getMessage=await messageService.getMessage(productId,user._id)
 sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Message fetched successfully",
    data: getMessage,
 })
})


export const messageController = {
    createMessage,
    deleteMessage,
    getMessage
}
