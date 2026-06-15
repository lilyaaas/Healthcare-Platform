const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./modules/auth/routes");

const app = express();

// Middlewares
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  }),
);
app.use(cookieParser());
app.use(express.json());

// The Auth Module
app.use("/api/auth", authRoutes);

// Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Healthcare API is ALIVE! 🚀",
  });
});

module.exports = app;
