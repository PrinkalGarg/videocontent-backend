import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/User.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(1, name, email, password);
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("User already exists");
      return res.status(400).json("Already registered");
    }
    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(2);
    
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    console.log(3);
    res.status(201).json("User Registered successfully,Please Login");
  } catch (err) {
    console.log(5);
    res.status(500).json(err.message);
    console.log(2, err.message);
  }
};

export const loginP = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json("Invalid credentials");
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json("Invalid credentials");
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ token, message: "Login successful" });
  } catch (err) {
    res.status(500).json(err.message);
  }
};
export const profile= async (req, res) => {
  try {
    const user = await User.findById(req.userid);
    if (!user) {
      return res.status(404).json("User not found");
    }
    res.json({ name: user.name, email: user.email });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

