const express = require("express");
const authController = require("./controller");
const { protect } = require("../../middlewares/auth_middleware");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", authController.login);

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

module.exports = router;
