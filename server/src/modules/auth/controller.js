const authService = require("./service");

class AuthController {
  // Handle Registration
  async register(req, res) {
    try {
      // Pass the data to the Service
      const user = await authService.registerUser(req.body);

      // Send back a 201 Created status
      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
      });
    } catch (error) {
      // If the Service throws an error
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }

  // Handle Login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // Pass credentials to the Service
      const result = await authService.loginUser(email, password);

      const cookieDays = parseInt(process.env.COOKIE_EXPIRY_DAYS);
      const maxAgeInMilliseconds = cookieDays * 24 * 60 * 60 * 1000;

      res.cookie("jwt", result.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: maxAgeInMilliseconds,
      });

      // Send back a 200 OK status
      res.status(200).json({
        success: true,
        message: "Login successful",
        data: result.user,
      });
    } catch (error) {
      // If the Service throws "Invalid credentials", send a 401 Unauthorized
      res.status(401).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new AuthController();
