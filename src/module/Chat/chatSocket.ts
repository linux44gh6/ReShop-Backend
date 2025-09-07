import { Server, Socket } from "socket.io"
import { ChatService } from "./chat.service"


export const chatSocket = (io: Server, socket: Socket) => {
  console.log("⚡ Client connected:", socket.id)


  socket.on("getMessages", async () => {
    const messages = await ChatService.getMessages()
    socket.emit("messages", messages)
  })

  // new message
  socket.on("sendMessage", async (msg) => {
    const saved = await ChatService.sendMessage(msg)
    io.emit("receiveMessage", saved) // broadcast
  })

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id)
  })
}
