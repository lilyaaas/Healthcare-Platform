const User = require("./auth_model");
const jwt = require("jsonwebtoken");

class AuthService {
  // Logic for registering a user
  async registerUser(userData) {
    // Check if email already exists
    const existingUser = await User.findOne({ email: userData.email });
    if (existingUser) {
      throw new Error("Email is already registered");
    }

    // Create the user
    const user = new User(userData);
    await user.save();

    return {
      id: user._id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
    };
  }

  // Logic for logging in
  async loginUser(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error("Invalid credentials");

    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error("Invalid credentials");

    // Generate Token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.USER_expiresIn },
    );

    return {
      user: { id: user._id, email: user.email, role: user.role, fullName: user.fullName },
      token,
    };
  }
}

module.exports = new AuthService();
