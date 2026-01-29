// import mongoose from "mongoose";

// const userSchema = mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     mobileNumber: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: String,
//       enum: ["admin", "manager", "partner", "customer"],
//       required: true,
//       default: "customer",
//     },
//     dob: {
//       type: String,
//       required: true,
//       default: "N/A",
//     },
//     gender: {
//       type: String,
//       enum: ["male", "female", "others", "N/A"],
//       required: true,
//       default: "N/A",
//     },
//     address: {
//       type: String,
//       required: true,
//       default: "N/A",
//     },
//     city: {
//       type: String,
//       required: true,
//       default: "N/A",
//     },
//     pin: {
//       type: String,
//       required: true,
//       default: "N/A",
//     },
//     photo: {
//       url: {
//         type: String,
//         default: "",
//       },
//       publicID: {
//         type: String,
//         default: "",
//       },
//     },
//     geoLocation: {
//       lat: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       lon: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//     },
//     paymentDetails: {
//       upi: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       account_number: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       ifs_Code: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//     },
//     restaurantName: {
//       type: String,
//       required: true,
//       default: "N/A",
//     },
//     cuisine: {
//       type: String,
//       required: true,
//       default: "N/A",
//     },
//     documents: {
//       gst: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       fssai: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       rc: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       dl: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       uidai: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//       pan: {
//         type: String,
//         required: true,
//         default: "N/A",
//       },
//     },
//   },
//   { timestamps: true },
// );

// const User = mongoose.model("User", userSchema);
// export default User;

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: true },
    password: { 
    type: String, 
    required: true, 
    select: false    
  },
    gender: { type: String, enum: ["Male", "Female", "Other",""], default: "" },
    dob: { type: Date, default: null },
    address: { type: String, default: "" },
    city: { type: String, default: "" },
    pin: { type: String, default: "" },
    documents: {
      uidai: { type: String, default: "" },
      pan: { type: String, default: "" },
    },
    paymentDetails: {
      upi: { type: String, default: "" },
      account_number: { type: String, default: "" },
      ifs_Code: { type: String, default: "" },
    },
    geoLocation: {
      lat: { type: String, default: "N/A" },
      lon: { type: String, default: "N/A" },
    },
    photo: {
      url: {
        type: String,
        default: "https://res.cloudinary.com/.../default_avatar.png",
      },
      publicID: { type: String, default: "" },
    },
    role: {
      type: String,
      enum: ["customer", "delivery", "restaurant", "admin"],
      default: "customer",
    },
    // ... any other existing fields
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);
export default User;
