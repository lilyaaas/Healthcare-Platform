const express = require("express");
const cors = require("cors");

const authRoutes = require('./modules/auth/routes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// The Auth Module
app.use('/api/auth', authRoutes);

// Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Healthcare API is ALIVE! 🚀",
  });
});

module.exports = app;
