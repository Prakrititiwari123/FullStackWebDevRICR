import User from "../models/userModel.js";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      // res.status(400).json({ message: "All fields required" });
      const error = new Error(" All fields required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error(" Email already exists");
      error.statusCode = 409;
      return next(error);
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
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error(" User not found");
      error.statusCode = 404;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error(" User not found");
      error.statusCode = 401;
      return next(error);
    }

    const isVerified = password === existingUser.password;
    if (!isVerified) {
      const error = new Error(" User not authorized");
      error.statusCode = 402;
      return next(error);
      // res.status(402).json({ message: "User not authorized" });
      // return;
    }
    console.log(existingUser);

    res.status(200).json({ message: "Welcome back", data: existingUser });
  } catch (error) {
    console.log(error);
    // res.status(500).json({ message: "Internal server error" });
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "logout successfull" });
  } catch (error) {
    console.log(error);
    next(error);
    // res.status(500).json({ message: "Internal server error" });
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;

    if (!fullName || !email) {
      const error = new Error(" All fields required");
      error.statusCode = 400;
      return next(error);
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error(" User not found");
      error.statusCode = 404;
      return next(error);
    }

    existingUser.fullName = fullName;
    existingUser.phone = phone;

    await existingUser.save();

    res
      .status(200)
      .json({ message: "User updated successfully", data: existingUser });

  } catch (error) {
    console.log(error);
    next(error);
  }
};
