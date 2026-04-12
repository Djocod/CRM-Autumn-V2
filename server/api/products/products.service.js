import sql from "../../dbCRM.js";

// list all Product
export async function listProducts() {
  const products = await sql`SELECT * FROM products;`;
  return products;
}
// Product by brand (case-insensitive)
export async function getProductBySearch(search = "") {
  const term = "%" + search + "%";
  const products = await sql`
  SELECT * FROM products 
  WHERE brand ILIKE ${term}
  OR title ILIKE ${term}
  OR category ILIKE ${term}
  `;
  return products;
}

export async function getProductByCategory(category = []) {
  const products = await sql`
  SELECT * FROM products 
  WHERE category ILIKE ANY(${sql.array(category)})
  `;
  return products;
}

// // Add product buy by users
// export async function addPurchasedProduct(userId, productId) {
//   return Users.findByIdAndUpdate(
//     userId,
//     { $addToSet: { purchasedProducts: productId } },
//     { new: true },
//   );
// }
// // Add product view by users
// export async function addViewedProduct(userId, productId) {
//   return Users.findByIdAndUpdate(
//     userId,
//     { $addToSet: { viewedProducts: productId } },
//     { new: true },
//   );
// }
//# sourceMappingURL=products.service.js.map
//  "sacs" "chaussures" "vetements" "montres" "bijoux" "accessoires" "bagagerie" "cosmetique" "parfum" "linge de maison"
