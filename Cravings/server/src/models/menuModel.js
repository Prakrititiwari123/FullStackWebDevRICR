import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema(
  {
    restaurant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    category: {
      type: String,
      enum: ["starter", "main course", "dessert", "beverage", "combo"],
      default: "main course",
    },
    cuisineType: {
      type: String,
      default: "",
    },
    isVeg: {
      type: Boolean,
      default: true,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    photos: [
      {
        url: { type: String },
        publicID: { type: String },
      },
    ],
    preparationTime: {
      type: Number, // in minutes
      default: 20,
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    tags: [String],
  },
  { timestamps: true }
);

export default mongoose.model("MenuItem", menuItemSchema);