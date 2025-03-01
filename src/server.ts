import { Server } from 'http';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    // Connect to the database
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