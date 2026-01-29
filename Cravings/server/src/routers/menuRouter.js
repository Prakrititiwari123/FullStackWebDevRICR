import express from "express";
import { Protect } from "../middlewares/authMiddleware.js";
import { checkRole } from "../middlewares/roleMiddleware.js";
import {
  createMenuItem,
  getMenuItems,
  updateMenuItem,
  deleteMenuItem,
} from "../controllers/menuController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.use(Protect, checkRole(["restaurant"]));

// Menu Item Routes
router.post("/", createMenuItem);
router.get("/", getMenuItems);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);
router.post(
  "/:id/photo",
  upload.single("image"),
  async (req, res, next) => {
    // Photo upload logic
  }
);

export default router;