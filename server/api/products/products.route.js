import { Router } from "express";
import {
  handleGetProductsBySearch,
  handleListProducts,
} from "./products.controller.js";

const routerProducts = Router();
// READ
routerProducts.get("/", handleListProducts);
routerProducts.get("/search", handleGetProductsBySearch);

// // PATCH
// routerProducts.patch("/:productId/purchase", handlePatchBuyProducts);
// routerProducts.patch("/:productId/viewed", handlePatchViewProducts);

export default routerProducts;
