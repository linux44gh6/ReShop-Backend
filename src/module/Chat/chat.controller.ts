import { Request, Response } from "express";
import { sendResponse } from "../../Utils/SendResponse";  
import { createChat } from "./chat.service"; 

// Send a message
const sendMessage = async (req: Request, res: Response) => {
    try {
        const payload = req.body;  
        // Call the sendMessage service function to save the message to the database
        const result = await createChat.sendMessage(payload);
        
        // Send a response using your sendResponse utility
        sendResponse(res, { 
            success: true, 
            message: 'Message Sent Successfully',
            data: result,  // The newly created message
            statusCode: 200 
        });
    } catch (error) {
        // Handle errors (e.g., validation, database issues)
        sendResponse(res, { 
            success: false, 
            message: 'Failed to send message', 
            data: (error as Error)?.message,
            statusCode: 500 
        });
    }
};

//get the message
const getMessage=async(req:Request,res:Response)=>{
    const result=await createChat.getMessage();
    sendResponse(res,  {
        success: true,
        message: 'Message Retrive Successfully',
        data: result,
        statusCode: 200
    })
}
export const ChatController = { sendMessage,getMessage };
