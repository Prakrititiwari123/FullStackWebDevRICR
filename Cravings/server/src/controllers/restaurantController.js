import Restaurant from "../models/restaurantModel.js";
import User from "../models/userModel.js";

// Register as Restaurant Owner
export const registerRestaurant = async (req, res, next) => {
  try {
    const {
      restaurantName,
      description,
      cuisine,
      address,
      contact,
      timing,
      documents,
    } = req.body;

    // Check if user already has a restaurant
    const existingRestaurant = await Restaurant.findOne({ owner: req.user._id });
    if (existingRestaurant) {
      const error = new Error("You already have a restaurant registered");
      error.statusCode = 400;
      return next(error);
    }

    // Create restaurant
    const restaurant = await Restaurant.create({
      owner: req.user._id,
      restaurantName,
      description,
      cuisine: cuisine || [],
      address,
      contact,
      timing,
      documents,
      status: "pending", // Admin approval needed
    });

    // Update user role
    await User.findByIdAndUpdate(req.user._id, { role: "restaurant" });

    res.status(201).json({
      message: "Restaurant registered successfully. Waiting for admin approval.",
      restaurant,
    });
  } catch (error) {
    next(error);
  }
};

// Get Restaurant Profile
export const getRestaurantProfile = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ owner: req.user._id })
      .populate("owner", "fullName email phone");

    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ restaurant });
  } catch (error) {
    next(error);
  }
};

// Update Restaurant Profile
export const updateRestaurantProfile = async (req, res, next) => {
  try {
    const updates = req.body;
    
    const restaurant = await Restaurant.findOneAndUpdate(
      { owner: req.user._id },
      updates,
      { new: true, runValidators: true }
    );

    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      message: "Restaurant updated successfully",
      restaurant,
    });
  } catch (error) {
    next(error);
  }
};

// Upload Restaurant Photos
export const uploadRestaurantPhotos = async (req, res, next) => {
  try {
    const files = req.files;
    const restaurant = await Restaurant.findOne({ owner: req.user._id });

    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    // Cloudinary upload logic (similar to user photo upload)
    // ...

    res.status(200).json({
      message: "Photos uploaded successfully",
      photos: restaurant.photos,
    });
  } catch (error) {
    next(error);
  }
};