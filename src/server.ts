import { Server } from 'http';
import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

let server: Server;

//connect to the database
const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1); // Exit the process if DB connection fails
  }
};

async function main() {
  try {
    // Connect to the database
    await connectDatabase();
    console.log('Database connected successfully.');
    server = app.listen(config.port, () => {
      console.log(`🚀 ReShop server is running on port ${config.port}`);
    });
  } catch (err) {
    console.error('Failed to start the application:', err);
    process.exit(1);
  }
}

// Execute the main function
main();

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason) => {
  console.error(`😡 Unhandled Rejection: ${reason}`); 
  if (server) {
    server.close(() => {
      console.log('server gracefully closed.');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error(`😡 Uncaught Exception: ${error}`);
  if (server) {
    server.close(() => {
      console.log('server gracefully closed.');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});