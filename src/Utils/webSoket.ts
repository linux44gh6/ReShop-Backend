import type { Server, Socket } from "socket.io";
import { ChatService } from "../module/Chat/chat.service";

export const setupSocket = (io: Server) => {
  io.on("connection", (socket: Socket) => {
    console.log("⚡ New user connected", socket.id);

    // fetch all messages
    socket.on("getMessages", async () => {
      try {
        const result = await ChatService.getMessages();
        socket.emit("messages", result);  // ✅ emit with different event name
      } catch (err) {
        console.error("❌ Error fetching messages:", err);
      }
    });

    // send + broadcast message
    socket.on("sendMessage", async (msg) => {
      try {
        const result = await ChatService.sendMessage(msg);
        io.emit("receiveMessage", result);  // ✅ everyone gets it
      } catch (err) {
        console.error("❌ Error saving message:", err);
      }
    });

    socket.on("disconnect", () => {
      console.log("❌ User disconnected:", socket.id);
    });
  });
};
