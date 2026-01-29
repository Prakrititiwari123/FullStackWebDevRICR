import MenuItem from "../models/menuModel.js";
import Restaurant from "../models/restaurantModel.js";

// Create Menu Item
export const createMenuItem = async (req, res, next) => {
  try {
    const {
      name,
      description,
      price,
      category,
      cuisineType,
      isVeg,
      preparationTime,
      discount,
      tags,
    } = req.body;

    // Get restaurant ID from owner
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    const menuItem = await MenuItem.create({
      restaurant: restaurant._id,
      name,
      description,
      price,
      category,
      cuisineType,
      isVeg,
      preparationTime,
      discount,
      tags: tags || [],
    });

    res.status(201).json({
      message: "Menu item created successfully",
      menuItem,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Menu Items for Restaurant
export const getMenuItems = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    const menuItems = await MenuItem.find({ restaurant: restaurant._id });
    res.status(200).json({ menuItems });
  } catch (error) {
    next(error);
  }
};

// Update Menu Item
export const updateMenuItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Verify restaurant ownership
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    const menuItem = await MenuItem.findById(id);

    if (!menuItem || menuItem.restaurant.toString() !== restaurant._id.toString()) {
      const error = new Error("Menu item not found or access denied");
      error.statusCode = 404;
      return next(error);
    }

    const updatedItem = await MenuItem.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      message: "Menu item updated successfully",
      menuItem: updatedItem,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Menu Item
export const deleteMenuItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    const menuItem = await MenuItem.findById(id);

    if (!menuItem || menuItem.restaurant.toString() !== restaurant._id.toString()) {
      const error = new Error("Menu item not found or access denied");
      error.statusCode = 404;
      return next(error);
    }

    await MenuItem.findByIdAndDelete(id);

    res.status(200).json({
      message: "Menu item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};