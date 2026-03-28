import { listProducts, getProductByBrand } from "./products.service.js";

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
export async function handleGetProductsByBrand(req, res, next) {
  try {
    const { brand } = req.query;
    if (!brand) {
      return res.status(400).json({ message: "Missing product Brand" });
    }

    const product = await getProductByBrand(brand);
    if (!product) {
      return res.status(404).json({ message: "Product not found !" });
    }

    return res.status(200).json({ product });
  } catch (error) {
    next(err);
  }
}
