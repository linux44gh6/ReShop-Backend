
import { Server as SocketIOServer } from 'socket.io';

declare global {
  namespace Express {
    interface Application {
      io: SocketIOServer;
    }
  }
}
