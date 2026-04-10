import { Router } from "express";
import {
  handleGetAllUser,
  handleGetUserById,
  handleGetUserSearch,
} from "./users.controller.js";
const router = Router();

//Forme API REST
//Read
router.get("/", handleGetAllUser);
router.get("/search", handleGetUserSearch);
router.get("/:id", handleGetUserById);
// //Post
// router.post("/sessionType/:productId/purchases", handlePatchBuyProducts);
// router.post("/:porductId/viewed", handlePatchViewProducts);
// //Delete
// router.delete(
//   "/:sessionType/:productId/purchase",
//   handleDeletePurchaseProducts,
// );
// router.delete("/:productId/viewed", handleDeleteViewProducts);

export default router;
