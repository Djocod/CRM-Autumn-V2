import { listProducts, getProductBySearch } from "./products.service.js";

// ============== Function ==============
// Get all Products
export async function handleListProducts(req, res) {
  try {
    const products = await listProducts();
    return res.status(200).json({ products });
  } catch (error) {
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
