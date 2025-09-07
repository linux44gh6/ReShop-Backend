import type { IMessage } from "../Message/message.interface"
import { ChatModel } from "./chat.model"

const getMessages = async () => {
  return await ChatModel.find().sort({ createdAt: -1 })
}

const sendMessage = async (payload: IMessage) => {
  return await ChatModel.create(payload)
}

export const ChatService = { getMessages, sendMessage }
