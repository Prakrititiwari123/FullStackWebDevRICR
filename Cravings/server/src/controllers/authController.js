import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {
    // accept data from frntend
    const { fullName, email, mobileNumber, password } = req.body;

    //     verify that all  data exist
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    // for duplicate user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    // encryption of password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashPassword,
    });

    // send response to frontend
    console.log(newUser);
    res.status(201).json({ message: "Registration successfull " });

    // end
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    // fetch data from frontend
    const { email, password } = req.body;

    // verify that all data exist
    if (!email || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log({ email, password });
    
    // check if user is tegistered or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 401;
      return next(error);
    }

    // verify the password
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password didn't match");
      error.statusCode = 401;
      return next(error);
    }

    // send message to frontend
    res.status(200).json({ message: "Login Successfull", data: existingUser });

    // end
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
     res.status(200).json({ message: "Logout Successfull"});
  } catch (error) {
    next(error);
  }
};
