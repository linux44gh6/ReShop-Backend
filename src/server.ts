import { Server } from 'http';
import app from './app';  
import config from './app/config';
import mongoose from 'mongoose';
import { setupSocket } from './Utils/webSoket';
import { Server as SocketIOServer } from 'socket.io';

let server: Server;
 
const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

// Main server start function
async function main() {
  try {
    // Connect to the database first
    await connectDatabase();
    server = app.listen(config.port, () => {
      console.log(`🚀 Server is running on port ${config.port}`);
    });
    const io= new SocketIOServer(server);
    setupSocket(io);
  } catch (err) {
    console.error('Failed to start the application:', err);
    process.exit(1); 
  }
}

main();

// Graceful shutdown
process.on('unhandledRejection', (reason) => {
  console.error(`😡 Unhandled Rejection: ${reason}`);
  if (server) {
    server.close(() => {
      console.log('Server gracefully closed due to unhandled rejection.');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Graceful shutdown on uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error(`😡 Uncaught Exception: ${error}`);
  if (server) {
    server.close(() => {
      console.log('Server gracefully closed due to uncaught exception.');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Graceful shutdown on SIGTERM
process.on('SIGTERM', () => {
  console.log("Received SIGTERM. Closing server...");
  if (server) {
    server.close(() => {
      console.log('Server gracefully closed due to SIGTERM.');
      process.exit(0);
    });
  } else {
    process.exit(1);
  }
});
