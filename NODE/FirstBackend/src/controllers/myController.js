import User from "../models/userModel.js";

export const UserRegister = async (req, res) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      res.status(400).json({ message: "All fields required" });
      return;
    }
    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const UserLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All fields required" });
      return;
    }
    const existingUser = await User.find({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found " });
      return;
    }

    // const isVerified = password === existingUser.password;
    if (!password === existingUser.password) {
      res.status(402).json({ message: "User not authorized" });
      return;
    }
    console.log(existingUser);

    res.status(200).json({ message: "Welcome back", data: existingUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const UserLogout = async (req, res) => {
  try {
    res.status(200).json({ message: "logout successfull" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
