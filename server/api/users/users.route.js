import { Router } from "express";
import {
  handleGetAllUser,
  handleGetUser,
  handleGetUserById,
} from "./users.controller.js";
const router = Router();

//Forme API REST
//Read
router.get("/", handleGetAllUser);
router.get("/:id", handleGetUserById);
router.get("/search/:lastname", handleGetUser);
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
