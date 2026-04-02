import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables
dotenv.config();

const startServer = () => {
  const PORT = process.env.PORT || 5000;
  const NODE_ENV = process.env.NODE_ENV || "development";

  app.listen(PORT, () => {
    console.log(`
🚀 ResQBite Server Started Successfully!
---------------------------------------
📡 Port:      ${PORT}
🌐 Mode:      ${NODE_ENV}
📍 Health:    http://localhost:${PORT}/status
📍 API:       http://localhost:${PORT}/api/listings
---------------------------------------
    `);
  });
};

// Initialize server
startServer();
