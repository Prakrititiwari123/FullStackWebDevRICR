// import Restaurant from "../models/restaurantModel.js";
// import User from "../models/userModel.js";

// // Register as Restaurant Owner
// export const registerRestaurant = async (req, res, next) => {
//   try {
//     const {
//       restaurantName,
//       description,
//       cuisine,
//       address,
//       contact,
//       timing,
//       documents,
//     } = req.body;

//     // Check if user already has a restaurant
//     const existingRestaurant = await Restaurant.findOne({ owner: req.user._id });
//     if (existingRestaurant) {
//       const error = new Error("You already have a restaurant registered");
//       error.statusCode = 400;
//       return next(error);
//     }

//     // Create restaurant
//     const restaurant = await Restaurant.create({
//       owner: req.user._id,
//       restaurantName,
//       description,
//       cuisine: cuisine || [],
//       address,
//       contact,
//       timing,
//       documents,
//       status: "pending", // Admin approval needed
//     });

//     // Update user role
//     await User.findByIdAndUpdate(req.user._id, { role: "restaurant" });

//     res.status(201).json({
//       message: "Restaurant registered successfully. Waiting for admin approval.",
//       restaurant,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Get Restaurant Profile
// export const getRestaurantProfile = async (req, res, next) => {
//   try {
//     const restaurant = await Restaurant.findOne({ owner: req.user._id })
//       .populate("owner", "fullName email phone");

//     if (!restaurant) {
//       const error = new Error("Restaurant not found");
//       error.statusCode = 404;
//       return next(error);
//     }

//     res.status(200).json({ restaurant });
//   } catch (error) {
//     next(error);
//   }
// };

// // Update Restaurant Profile
// export const updateRestaurantProfile = async (req, res, next) => {
//   try {
//     const updates = req.body;
    
//     const restaurant = await Restaurant.findOneAndUpdate(
//       { owner: req.user._id },
//       updates,
//       { new: true, runValidators: true }
//     );

//     if (!restaurant) {
//       const error = new Error("Restaurant not found");
//       error.statusCode = 404;
//       return next(error);
//     }

//     res.status(200).json({
//       message: "Restaurant updated successfully",
//       restaurant,
//     });
//   } catch (error) {
//     next(error);
//   }
// };

// // Upload Restaurant Photos
// export const uploadRestaurantPhotos = async (req, res, next) => {
//   try {
//     const files = req.files;
//     const restaurant = await Restaurant.findOne({ owner: req.user._id });

//     if (!restaurant) {
//       const error = new Error("Restaurant not found");
//       error.statusCode = 404;
//       return next(error);
//     }

//     // Cloudinary upload logic (similar to user photo upload)
//     // ...

//     res.status(200).json({
//       message: "Photos uploaded successfully",
//       photos: restaurant.photos,
//     });
//   } catch (error) {
//     next(error);
//   }
// };




//server/controllers/restaurantController.js
import Restaurant from "../models/restaurantModel.js";
import MenuItem from "../models/menuModel.js";
import User from "../models/userModel.js";
import Order from "../models/orderModel.js";
import cloudinary from "../config/cloudinary.js"; // Cloudinary import

// ==================== EXISTING FUNCTIONS (UNCOMMENT) ====================

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
      success: true,
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

    res.status(200).json({ 
      success: true,
      restaurant 
    });
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
      success: true,
      message: "Restaurant updated successfully",
      restaurant,
    });
  } catch (error) {
    next(error);
  }
};

// Upload Restaurant Photos (UNCOMMENT AND COMPLETE THIS)
export const uploadRestaurantPhotos = async (req, res, next) => {
  try {
    const files = req.files;
    const restaurant = await Restaurant.findOne({ owner: req.user._id });

    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    if (!files || files.length === 0) {
      const error = new Error("No files uploaded");
      error.statusCode = 400;
      return next(error);
    }

    // Cloudinary upload logic
    const uploadedPhotos = [];
    
    for (const file of files) {
      try {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: `restaurants/${restaurant._id}`,
        });
        
        uploadedPhotos.push({
          url: result.secure_url,
          publicID: result.public_id
        });
      } catch (uploadError) {
        console.error("Cloudinary upload error:", uploadError);
        // Continue with other files even if one fails
      }
    }

    // Add new photos to restaurant
    restaurant.photos = [...restaurant.photos, ...uploadedPhotos];
    await restaurant.save();

    res.status(200).json({
      success: true,
      message: "Photos uploaded successfully",
      photos: restaurant.photos,
    });
  } catch (error) {
    next(error);
  }
};

// ==================== NEW FUNCTIONS (FROM SECOND SECTION) ====================

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
      isAvailable,
      preparationTime,
      discount,
      tags,
    } = req.body;

    // Get restaurant ID
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    // Validate required fields
    if (!name || !price || !category) {
      const error = new Error("Name, price and category are required");
      error.statusCode = 400;
      return next(error);
    }

    // Create menu item
    const menuItem = await MenuItem.create({
      restaurant: restaurant._id,
      name,
      description: description || "",
      price: parseFloat(price),
      category,
      cuisineType: cuisineType || "",
      isVeg: isVeg !== undefined ? isVeg : true,
      isAvailable: isAvailable !== undefined ? isAvailable : true,
      preparationTime: preparationTime || 20,
      discount: discount || 0,
      tags: tags || [],
    });

    res.status(201).json({
      success: true,
      message: "Menu item created successfully",
      menuItem,
    });
  } catch (error) {
    next(error);
  }
};

// Get All Menu Items
export const getMenuItems = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    const menuItems = await MenuItem.find({ restaurant: restaurant._id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: menuItems.length,
      menuItems,
    });
  } catch (error) {
    next(error);
  }
};

// Update Menu Item
export const updateMenuItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    // Find menu item
    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
      const error = new Error("Menu item not found");
      error.statusCode = 404;
      return next(error);
    }

    // Verify restaurant ownership
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant || menuItem.restaurant.toString() !== restaurant._id.toString()) {
      const error = new Error("Not authorized to update this item");
      error.statusCode = 403;
      return next(error);
    }

    // Update menu item
    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined) {
        menuItem[key] = updates[key];
      }
    });

    await menuItem.save();

    res.status(200).json({
      success: true,
      message: "Menu item updated successfully",
      menuItem,
    });
  } catch (error) {
    next(error);
  }
};

// Delete Menu Item
export const deleteMenuItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Find menu item
    const menuItem = await MenuItem.findById(id);
    if (!menuItem) {
      const error = new Error("Menu item not found");
      error.statusCode = 404;
      return next(error);
    }

    // Verify restaurant ownership
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant || menuItem.restaurant.toString() !== restaurant._id.toString()) {
      const error = new Error("Not authorized to delete this item");
      error.statusCode = 403;
      return next(error);
    }

    // Delete menu item
    await menuItem.deleteOne();

    res.status(200).json({
      success: true,
      message: "Menu item deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};

// ==================== ORDER FUNCTIONS ====================

// Get Restaurant Orders
export const getRestaurantOrders = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    const orders = await Order.find({ restaurant: restaurant._id })
      .populate("user", "fullName email phone")
      .populate("items.menuItem", "name price category")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: orders.length,
      orders,
    });
  } catch (error) {
    next(error);
  }
};

// Update Order Status
export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const validStatuses = ["pending", "confirmed", "preparing", "out for delivery", "delivered", "cancelled"];

    if (!status || !validStatuses.includes(status)) {
      const error = new Error("Please provide a valid status");
      error.statusCode = 400;
      return next(error);
    }

    // Find order
    const order = await Order.findById(id);
    if (!order) {
      const error = new Error("Order not found");
      error.statusCode = 404;
      return next(error);
    }

    // Verify restaurant ownership
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant || order.restaurant.toString() !== restaurant._id.toString()) {
      const error = new Error("Not authorized to update this order");
      error.statusCode = 403;
      return next(error);
    }

    // Update status
    order.status = status;
    order.updatedAt = new Date();

    await order.save();

    res.status(200).json({
      success: true,
      message: `Order status updated to ${status}`,
      order,
    });
  } catch (error) {
    next(error);
  }
};

// ==================== DASHBOARD & STATS ====================

// Get Restaurant Stats
export const getRestaurantStats = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ owner: req.user._id });
    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    const restaurantId = restaurant._id;

    // Get counts
    const totalOrders = await Order.countDocuments({ restaurant: restaurantId });
    const pendingOrders = await Order.countDocuments({ 
      restaurant: restaurantId, 
      status: { $in: ["pending", "confirmed", "preparing"] } 
    });
    const deliveredOrders = await Order.countDocuments({ 
      restaurant: restaurantId, 
      status: "delivered" 
    });
    const totalMenuItems = await MenuItem.countDocuments({ restaurant: restaurantId });

    // Get earnings
    const earningsResult = await Order.aggregate([
      { $match: { restaurant: restaurantId, status: "delivered" } },
      { $group: { _id: null, totalEarnings: { $sum: "$totalAmount" } } }
    ]);

    const totalEarnings = earningsResult.length > 0 ? earningsResult[0].totalEarnings : 0;

    // Get today's orders
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todaysOrders = await Order.countDocuments({
      restaurant: restaurantId,
      createdAt: { $gte: today }
    });

    // Get popular categories
    const popularCategories = await Order.aggregate([
      { $match: { restaurant: restaurantId } },
      { $unwind: "$items" },
      { $lookup: {
        from: "menuitems",
        localField: "items.menuItem",
        foreignField: "_id",
        as: "menuItemDetails"
      }},
      { $unwind: "$menuItemDetails" },
      { $group: { 
        _id: "$menuItemDetails.category", 
        count: { $sum: "$items.quantity" }
      }},
      { $sort: { count: -1 } },
      { $limit: 3 }
    ]);

    res.status(200).json({
      success: true,
      stats: {
        totalOrders,
        pendingOrders,
        deliveredOrders,
        totalMenuItems,
        totalEarnings,
        todaysOrders,
        averageOrderValue: totalOrders > 0 ? (totalEarnings / totalOrders).toFixed(2) : 0,
        popularCategories,
      },
    });
  } catch (error) {
    next(error);
  }
};

// Get Dashboard Data
export const getDashboardData = async (req, res, next) => {
  try {
    const restaurant = await Restaurant.findOne({ owner: req.user._id })
      .populate("owner", "fullName email");

    if (!restaurant) {
      const error = new Error("Restaurant not found");
      error.statusCode = 404;
      return next(error);
    }

    const restaurantId = restaurant._id;

    // Get recent orders (last 5)
    const recentOrders = await Order.find({ restaurant: restaurantId })
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("user", "fullName")
      .select("_id status totalAmount createdAt");

    // Get menu items by category
    const menuByCategory = await MenuItem.aggregate([
      { $match: { restaurant: restaurantId } },
      { $group: { 
        _id: "$category", 
        count: { $sum: 1 },
        items: { $push: { name: "$name", price: "$price", isAvailable: "$isAvailable" } }
      }}
    ]);

    // Get today's earnings
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const todaysEarnings = await Order.aggregate([
      { $match: { 
        restaurant: restaurantId, 
        status: "delivered",
        createdAt: { $gte: today }
      }},
      { $group: { _id: null, total: { $sum: "$totalAmount" } } }
    ]);

    // Get top selling items
    const topSellingItems = await Order.aggregate([
      { $match: { restaurant: restaurantId } },
      { $unwind: "$items" },
      { $group: { 
        _id: "$items.menuItem", 
        quantity: { $sum: "$items.quantity" },
        revenue: { $sum: { $multiply: ["$items.price", "$items.quantity"] } }
      }},
      { $sort: { quantity: -1 } },
      { $limit: 5 },
      { $lookup: {
        from: "menuitems",
        localField: "_id",
        foreignField: "_id",
        as: "itemDetails"
      }},
      { $unwind: "$itemDetails" }
    ]);

    res.status(200).json({
      success: true,
      dashboard: {
        restaurant,
        recentOrders,
        menuByCategory,
        todaysEarnings: todaysEarnings.length > 0 ? todaysEarnings[0].total : 0,
        topSellingItems,
      },
    });
  } catch (error) {
    next(error);
  }
};