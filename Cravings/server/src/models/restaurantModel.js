import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    restaurantName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    cuisine: [
      {
        type: String,
        trim: true,
      },
    ],
    address: {
      street: { type: String, default: "" },
      city: { type: String, required: true },
      state: { type: String, default: "" },
      pinCode: { type: String, required: true },
      landmark: { type: String, default: "" },
    },
    location: {
      lat: { type: Number, default: 0 },
      lng: { type: Number, default: 0 },
    },
    contact: {
      phone: { type: String, required: true },
      alternatePhone: { type: String, default: "" },
      email: { type: String, default: "" },
    },
    timing: {
      opening: { type: String, default: "10:00 AM" },
      closing: { type: String, default: "10:00 PM" },
      daysOpen: [
        {
          type: String,
          enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
      ],
    },
    status: {
      type: String,
      enum: ["active", "inactive", "pending"],
      default: "pending",
    },
    documents: {
      fssaiLicense: { type: String, default: "" },
      gstNumber: { type: String, default: "" },
    },
    photos: [
      {
        url: { type: String },
        publicID: { type: String },
      },
    ],
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    bankDetails: {
      accountNumber: { type: String, default: "" },
      accountHolder: { type: String, default: "" },
      ifscCode: { type: String, default: "" },
      bankName: { type: String, default: "" },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Restaurant", restaurantSchema);