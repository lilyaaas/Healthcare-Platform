const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Healthcare API is ALIVE! 🚀",
  });
});

module.exports = app;
