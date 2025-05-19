import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import plannerRoute from "./routes/planner.route.js";
// import apiRouter from './routes/api.js';
import LoggingMiddleware from "./middleware/logging.js";
// import connectToMongoDB from "./db/connectToMongoDB.js";

// Load environment variables
dotenv.config();

const app = express();

// CORS middleware
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["*"],
  })
);

// Logging middleware
app.use(LoggingMiddleware);

// Parse JSON bodies
app.use(express.json());

// Include routes

// app.use('/api', apiRouter);

app.use("/api/planner", plannerRoute);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "Hello World from Express!",
    app_name: process.env.APP_NAME || "Express Backend",
    version: process.env.API_VERSION || "v1",
  });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  // connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});
