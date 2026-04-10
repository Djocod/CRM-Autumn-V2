import express from "express";
import userRoutes from "./api/users/users.route.js";
import productRoutes from "./api/products/products.route.js";
import purchaseRoutes from "./api/purchase/purchase.route.js";
import viewRoutes from "./api/view/view.route.js";
import wishlistRoutes from "./api/wishlist/wishlist.route.js";
import errorHandler from "./middleware/errorHandler.js";
import cors from "cors";

// http://localhost:8000/api/users
// http://localhost:8000/api/users/id
// http://localhost:8000/api/users/search/Smith
// http://localhost:8000/api/users/:productId/viewed
// http://localhost:8000/api/users/:productId/purchase
// http://localhost:8000/api/users/:productId/refund
// http://localhost:8000/api/product
// http://localhost:8000/api/product/search?brand=Gucci

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/purchase", purchaseRoutes);
app.use("/api/view", viewRoutes);
app.use("/api/wishlist", wishlistRoutes);

app.use(errorHandler);

export default app;
