import { Router } from "express";
import {
  handleDeleteViewBuyProduct,
  handleGetAllView,
  handleGetViewById,
  handlePostViewBuyProduct,
} from "./view.controller.js";

const router = Router();

router.get("/", handleGetAllView);
router.get("/:id", handleGetViewById);
router.post("/:userId/:productId", handlePostViewBuyProduct);
router.delete("/:viewId", handleDeleteViewBuyProduct);
export default router;
