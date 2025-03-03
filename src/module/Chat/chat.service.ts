import { ChatModel } from "./chat.model";
import { IMessage } from "./chat.interface";

const getMessage = async () => {
    return await ChatModel.find().sort({ createdAt: -1 });
}
const sendMessage=async(payload:IMessage)=>{
    return await ChatModel.create(payload);
}
export const createChat={getMessage,sendMessage}
