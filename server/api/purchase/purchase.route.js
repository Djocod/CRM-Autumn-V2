import { Router } from "express";
import {
  handleDeleteBuyProduct,
  handleGetAllPurchase,
  handleGetPurchaseById,
  handlePostBuyProduct,
} from "./purchase.controller.js";

const router = Router();

router.get("/", handleGetAllPurchase);
router.get("/:id", handleGetPurchaseById);
router.post("/:userId/:productId/:sessionType", handlePostBuyProduct);
router.delete("/:purchaseId", handleDeleteBuyProduct);

export default router;
