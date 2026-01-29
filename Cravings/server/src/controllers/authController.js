// import User from "../models/userModel.js";
// import bcrypt from "bcrypt";
// import { genToken } from "../utils/authToken.js";

// export const UserRegister = async (req, res, next) => {
//   try {
//     console.log(req.body);
//     //accept data from Frontend
//     // const { fullName, email, mobileNumber, password, role } = req.body;
//     const {
//       fullName,
//       email,
//       mobileNumber,
//       password,
//       role = "",
//       gender = "",
//     } = req.body;
//     //verify that all data exist
//     if (!fullName || !email || !mobileNumber || !password || !role) {
//       const error = new Error("All feilds required");
//       error.statusCode = 400;
//       return next(error);
//     }

    


    
//     // Validate role
//     const validRoles = ["customer", "delivery", "restaurant", "admin"];
//     if (role && !validRoles.includes(role)) {
//       const error = new Error(`Invalid role. Allowed: ${validRoles.join(", ")}`);
//       error.statusCode = 400;
//       return next(error);
//     }


//     // Validate gender
//     const validGenders = ["Male", "Female", "Other", ""];
//     if (gender && !validGenders.includes(gender)) {
//       const error = new Error(`Invalid gender. Allowed: Male, Female, Other or empty`);
//       error.statusCode = 400;
//       return next(error);
//     }










//     console.log({ fullName, email, mobileNumber, password });

//     //Check for duplaicate user before registration
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       const error = new Error("Email already registered");
//       error.statusCode = 409;
//       return next(error);
//     }

//     console.log("Sending Data to DB");

//     //encrypt the password
//     const salt = await bcrypt.genSalt(10);
//     const hashPassword = await bcrypt.hash(password, salt);

//     console.log("Password Hashing Done. hashPassword = ", hashPassword);

//     const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
//     const photo = {
//       url: photoURL,
//     };

//     //save data to database
//     const newUser = await User.create({
//       fullName,
//       email: email.toLowerCase(),
//       mobileNumber,
//       password: hashPassword,
//       role,
//       photo,
//     });

//     // send response to Frontend
//     console.log(newUser);
//     res.status(201).json({ message: "Registration Successfull" });
//     //End
//   } catch (error) {
//     next(error);
//   }
// };

// export const UserLogin = async (req, res, next) => {
//   try {
//     //Fetch Data from Frontend
//     const { email, password } = req.body;

//     //verify that all data exist
//     if (!email || !password) {
//       const error = new Error("All feilds required");
//       error.statusCode = 400;
//       return next(error);
//     }

//     //Check if user is registred or not
//     const existingUser = await User.findOne({ email });
//     if (!existingUser) {
//       const error = new Error("Email not registered");
//       error.statusCode = 401;
//       return next(error);
//     }

//     //verify the Password
//     const isVerified = await bcrypt.compare(password, existingUser.password);
//     if (!isVerified) {
//       const error = new Error("Password didn't match");
//       error.statusCode = 401;
//       return next(error);
//     }

//     //Token Generation will be done here
//     genToken(existingUser, res);

//     //send message to Frontend
//     res.status(200).json({ message: "Login Successfull", data: existingUser });
//     //End
//   } catch (error) {
//     next(error);
//   }
// };

// export const UserLogout = async (req, res, next) => {
//   try {
//     res.clearCookie("parleG");
//     res.status(200).json({ message: "Logout Successfull" });
//   } catch (error) {
//     next(error);
//   }
// };


import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Generate Token Function (if you don't have separate file)
const genToken = (user, res) => {
  try {
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role || 'customer'
    };
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });
    
    console.log("🔐 Token generated for:", user.email);
    
    res.cookie("parleG", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    
    return token;
  } catch (error) {
    console.error("❌ Token generation error:", error);
    throw error;
  }
};

// ✅ REGISTRATION CONTROLLER
export const UserRegister = async (req, res, next) => {
  try {
    console.log("=== 🟢 REGISTER REQUEST ===");
    console.log("📦 Request Body:", req.body);

    // Accept data from Frontend
    const {
      fullName,
      email,
      mobileNumber,
      password,
      role = "customer",
      gender = "",
    } = req.body;

    // ✅ VALIDATION
    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("Full name, email, mobile number and password are required");
      error.statusCode = 400;
      return next(error);
    }

    // Role validation
    const validRoles = ["customer", "delivery", "restaurant", "admin"];
    if (role && !validRoles.includes(role)) {
      const error = new Error(`Invalid role. Allowed: ${validRoles.join(", ")}`);
      error.statusCode = 400;
      return next(error);
    }

    // Gender validation
    const validGenders = ["Male", "Female", "Other", ""];
    if (gender && !validGenders.includes(gender)) {
      const error = new Error(`Invalid gender. Allowed: Male, Female, Other or empty`);
      error.statusCode = 400;
      return next(error);
    }

    console.log("✅ Validated Data:", { 
      fullName, 
      email, 
      mobileNumber, 
      role, 
      gender,
      passwordLength: password.length 
    });

    // Check for duplicate user
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      const error = new Error("Email already registered. Please login.");
      error.statusCode = 409;
      return next(error);
    }

    console.log("🔑 Hashing password...");
    
    // Encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    console.log("✅ Password hashed. Hash sample:", hashPassword.substring(0, 30) + "...");

    // Create photo URL
    const photoURL = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photoURL,
      publicID: "",
    };

    // Save data to database
    console.log("💾 Saving user to database...");
    const newUser = await User.create({
      fullName: fullName.trim(),
      email: email.toLowerCase().trim(),
      mobileNumber: mobileNumber.trim(),
      password: hashPassword,
      role: role || "customer",
      gender: gender || "",
      photo,
    });

    console.log("✅ User created with ID:", newUser._id);

    // ✅ CRITICAL: VERIFY PASSWORD WAS SAVED
    const savedUserWithPassword = await User.findById(newUser._id).select("+password");
    
    console.log("🔍 Password verification:");
    console.log("- Password exists?", !!savedUserWithPassword?.password);
    console.log("- Password length:", savedUserWithPassword?.password?.length);
    console.log("- Password sample:", savedUserWithPassword?.password?.substring(0, 30));

    if (!savedUserWithPassword?.password) {
      console.error("❌ CRITICAL: PASSWORD NOT SAVED TO DATABASE!");
      // Force save
      savedUserWithPassword.password = hashPassword;
      await savedUserWithPassword.save();
      console.log("✅ Password forcefully saved");
    }

    // Generate JWT token
    console.log("🔐 Generating token...");
    const token = genToken(savedUserWithPassword, res);

    // Prepare response without password
    const userResponse = {
      _id: savedUserWithPassword._id,
      fullName: savedUserWithPassword.fullName,
      email: savedUserWithPassword.email,
      mobileNumber: savedUserWithPassword.mobileNumber,
      role: savedUserWithPassword.role,
      gender: savedUserWithPassword.gender,
      photo: savedUserWithPassword.photo,
      createdAt: savedUserWithPassword.createdAt,
    };

    // Send response to Frontend
    console.log("📤 Sending response to frontend...");
    res.status(201).json({
      success: true,
      message: "Registration Successful! 🎉",
      user: userResponse,
      token: token,
    });

  } catch (error) {
    console.error("❌ Registration Error Details:", error);

    // Handle specific errors
    if (error.code === 11000) {
      error.message = "Email already exists";
      error.statusCode = 409;
    } else if (error.name === "ValidationError") {
      error.statusCode = 400;
      error.message = error.message;
    } else if (!error.statusCode) {
      error.statusCode = 500;
    }

    next(error);
  }
};

// ✅ LOGIN CONTROLLER (FIXED)
export const UserLogin = async (req, res, next) => {
  try {
    console.log("=== 🔵 LOGIN REQUEST ===");
    console.log("📦 Request Body:", req.body);

    // Fetch Data from Frontend
    const { email, password } = req.body;

    // Verify that all data exist
    if (!email || !password) {
      const error = new Error("Email and password are required");
      error.statusCode = 400;
      return next(error);
    }

    // ✅✅✅ CRITICAL FIX: MUST USE .select("+password")
    console.log("🔍 Searching for user:", email.toLowerCase());
    const existingUser = await User.findOne({ email: email.toLowerCase() })
      .select("+password"); // 👈 THIS WAS MISSING!

    if (!existingUser) {
      console.log("❌ User not found:", email);
      const error = new Error("Email not registered. Please sign up first.");
      error.statusCode = 404;
      return next(error);
    }

    console.log("✅ User found:", existingUser._id);
    console.log("🔍 Password field check:");
    console.log("- Has password?", !!existingUser.password);
    console.log("- Password length:", existingUser.password?.length);
    console.log("- Password starts with:", existingUser.password?.substring(0, 30));

    // Safety check
    if (!existingUser.password) {
      console.error("❌ CRITICAL: PASSWORD FIELD IS EMPTY IN DATABASE!");
      const error = new Error("Account setup incomplete. Please register again.");
      error.statusCode = 500;
      return next(error);
    }

    // Verify the Password
    console.log("🔐 Comparing passwords...");
    const isVerified = await bcrypt.compare(password, existingUser.password);
    
    if (!isVerified) {
      console.log("❌ Password mismatch");
      const error = new Error("Invalid email or password");
      error.statusCode = 401;
      return next(error);
    }

    console.log("✅ Password verified!");

    // Generate token
    console.log("🔐 Generating login token...");
    const token = genToken(existingUser, res);

    // Prepare response without password
    const userResponse = {
      _id: existingUser._id,
      fullName: existingUser.fullName,
      email: existingUser.email,
      mobileNumber: existingUser.mobileNumber,
      role: existingUser.role,
      gender: existingUser.gender,
      photo: existingUser.photo,
      createdAt: existingUser.createdAt,
    };

    // Send message to Frontend
    console.log("📤 Sending login response...");
    res.status(200).json({
      success: true,
      message: "Login Successful! 🎉",
      data: userResponse,
      token: token,
    });

  } catch (error) {
    console.error("❌ Login Error Details:", {
      message: error.message,
      stack: error.stack,
    });
    
    // Handle bcrypt error
    if (error.message.includes("data and hash arguments required")) {
      error.message = "Account authentication error. Please contact support.";
      error.statusCode = 500;
    }
    
    if (!error.statusCode) {
      error.statusCode = 500;
    }
    
    next(error);
  }
};

// ✅ LOGOUT CONTROLLER
export const UserLogout = async (req, res, next) => {
  try {
    console.log("=== 🔴 LOGOUT REQUEST ===");
    
    res.clearCookie("parleG", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    
    res.status(200).json({
      success: true,
      message: "Logout Successful 👋",
    });
  } catch (error) {
    console.error("❌ Logout Error:", error);
    next(error);
  }
};

// ✅ DEBUG ENDPOINT (Optional - for testing)
export const debugUser = async (req, res) => {
  try {
    const { email } = req.query;
    console.log("🔍 Debug request for:", email);
    
    const user = await User.findOne({ email }).select("+password");
    
    const response = {
      exists: !!user,
      userId: user?._id,
      email: user?.email,
      role: user?.role,
      hasPassword: !!user?.password,
      passwordLength: user?.password?.length,
      passwordSample: user?.password?.substring(0, 30),
      modelFields: User.schema ? Object.keys(User.schema.paths) : [],
      fullDocument: user
    };
    
    console.log("🔍 Debug response:", response);
    res.json(response);
  } catch (error) {
    console.error("❌ Debug error:", error);
    res.status(500).json({ error: error.message });
  }
};