import { Router } from "express";
import {
  handleDeleteWishlistProduct,
  handleGetAllwishlist,
  handleGetWishlistById,
  handlePostWishlistProduct,
} from "./wishlist.controller.js";
const router = Router();

router.get("/", handleGetAllwishlist);
router.get("/:id", handleGetWishlistById);
router.post("/:userId/:productId", handlePostWishlistProduct);
router.delete("/:wishlistId", handleDeleteWishlistProduct);

export default router;
// fc9580b2-6bb6-4414-a1b5-a61256a68816 idUser
// 72fdaecd-8fd3-4407-ae4c-d8bb2709fc81
