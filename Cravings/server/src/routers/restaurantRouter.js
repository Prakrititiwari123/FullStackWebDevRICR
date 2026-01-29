// import express from "express";
// import { Protect } from "../middlewares/authMiddleware.js";
// import { checkRole } from "../middlewares/roleMiddleware.js";
// import {
//   registerRestaurant,
//   getRestaurantProfile,
//   updateRestaurantProfile,
//   uploadRestaurantPhotos,
// } from "../controllers/restaurantController.js";
// import upload from "../middlewares/multer.js";

// const router = express.Router();

// // Restaurant Registration (customer can register as restaurant)
// router.post("/register", Protect, registerRestaurant);

// // All routes below require restaurant role
// router.use(Protect, checkRole(["restaurant"]));

// // Restaurant Profile Routes
// router.get("/profile", getRestaurantProfile);
// router.put("/profile", updateRestaurantProfile);
// router.post(
//   "/photos",
//   upload.array("photos", 5), // Max 5 photos
//   uploadRestaurantPhotos
// );

// export default router;

// server/routers/restaurantRouters.js
import express from "express";
import { Protect } from "../middlewares/authMiddleware.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import {
  registerRestaurant,
  getRestaurantProfile,
  updateRestaurantProfile,
  uploadRestaurantPhotos,
  // NEW FUNCTIONS
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem,
  getRestaurantOrders,
  updateOrderStatus,
  getRestaurantStats,
  getDashboardData,
} from "../controllers/restaurantController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

// Restaurant Registration (customer can register as restaurant)
router.post("/register", Protect, registerRestaurant);

// All routes below require restaurant role
router.use(Protect, checkRole(["restaurant"]));

// Restaurant Profile Routes
router.get("/profile", getRestaurantProfile);
router.put("/profile", updateRestaurantProfile);
router.post(
  "/photos",
  upload.array("photos", 5), // Max 5 photos
  uploadRestaurantPhotos
);

// Menu Routes
router.post("/menu", createMenuItem);
router.get("/menu", getMenuItems);
router.put("/menu/:id", updateMenuItem);
router.delete("/menu/:id", deleteMenuItem);

// Order Routes
router.get("/orders", getRestaurantOrders);
router.put("/orders/:id/status", updateOrderStatus);

// Dashboard & Stats
router.get("/stats", getRestaurantStats);
router.get("/dashboard", getDashboardData);

export default router;