import { Server } from "socket.io";
import { createChat } from "../module/Chat/chat.service";


export const setupSocket = (io: Server) => {
  io.on("connection", (socket) => {
    console.log("User Connected:", socket.id);

    socket.on("sendMessage", async (data) => {
      const savedMessage = await createChat.sendMessage(data);
      io.emit("receiveMessage", savedMessage);
    });
    socket.on("disconnect", () => {
      console.log("User Disconnected:", socket.id);
    });
  });
};
