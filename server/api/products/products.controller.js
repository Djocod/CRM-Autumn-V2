import {
  listProducts,
  getProductBySearch,
  getProductByCategory,
} from "./products.service.js";

// ============== Function ==============
// Get all Products
export async function handleListProducts(req, res, next) {
  try {
    const products = await listProducts();
    return res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
}

// Get Products by brand name
export async function handleGetProductsBySearch(req, res, next) {
  try {
    const { search } = req.query;
    if (!search) {
      return res.status(400).json({ message: "Missing product" });
    }

    const products = await getProductBySearch(search);
    if (!products) {
      return res.status(404).json({ message: "Product not found !" });
    }

    return res.status(200).json({ success: true, products });
  } catch (err) {
    next(err);
  }
}

// Get Products by Category
export async function handleGetProductsByCategory(req, res, next) {
  try {
    const { word } = req.params;
    if (!word) {
      return res.status(400).json({ message: "Missing product" });
    }
    const category = word.split(",").map((c) => c.trim());

    const products = await getProductByCategory(category);
    if (!products === 0) {
      return res.status(404).json({ message: "Product not found !" });
    }

    return res.status(200).json({ products: products });
  } catch (err) {
    next(err);
  }
}
