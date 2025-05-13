import { StatusCodes } from "http-status-codes";

import { sendResponse } from "../../Utils/SendResponse";
import { CatchAsync } from "../../Utils/CatchAsync";
import { messageService } from "./message.service";

const createMessage = CatchAsync(async (req, res) => {
  const payload = req.body;
  const user = req.user;

  // Validate user
  if (typeof user !== "object" || user === null || !("_id" in user)) {
    res.status(401).json({ success: false, message: "Unauthorized user" });
    return;
  }

  const senderId = (user as { _id: string })._id;
  payload.buyerId = senderId;

  // Attach senderId to each message item
  payload.message = payload.message.map((msg: any) => ({
    ...msg,
    senderId,
  }));

  // Create or update message
  const result = await messageService.createMessage(payload);

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
    deleteMessage
}
