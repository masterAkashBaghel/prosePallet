import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import tokens from "../models/token.js";

import dotenv from "dotenv";

dotenv.config();
export const signupcontroller = async (req, res) => {
  try {
    // const salt = await bcrypt.salt();
    const hashedPassword = await bcrypt.hash(req.body.password, 5);
    const { email, username } = req.body;

    // Check if a user with the same email or username already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email or username already exists" });
    }

    // If the user doesn't exist, proceed with creating the new user
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      name: req.body.name,
    };
    const newUser = new User(user);
    await newUser.save();

    res.status(200).json({ message: "Sign Up successfully!" });
  } catch (e) {
    console.log("Error while signing up", e.message);
    return res.status(500).json({ message: "Error while sign up" });
  }
};

export const LogInUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    } else {
      const payload = {
        email: user.email,
        name: user.name,
      };

      const accessToken = jwt.sign(payload, process.env.ACCESS_SECRET_KEY, {
        expiresIn: "2d",
      });
      const refreshToken = jwt.sign(payload, process.env.REFRESH_SERET_KEY);
      const newToken = new tokens({ token: refreshToken });
      await newToken.save();

      return res
        .status(200)
        .json({
          accessToken,
          refreshToken,
          name: user.name,
          username: user.username,
        });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Error during login" });
  }
};
