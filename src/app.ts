import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import routes from "./routes/index.js";

const app = express();

// Standard Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

// Health Check
app.get("/status", (req, res) => {
  res.status(200).json({
    success: true,
    service: "ResQBite API",
    status: "UP",
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use("/api", routes);

// Welcome Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to ResQBite Backend API — A Surplus Food Marketplace Platform",
    version: "1.0.0"
  });
});

export default app;
