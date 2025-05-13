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


export const messageController = {
    createMessage
}
