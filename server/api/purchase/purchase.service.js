// }
import sql from "../../dbCRM.js";

// // ============== Function ==============

// // Function for find all Users
export async function showAllPurchase() {
  const purchase = await sql`SELECT * FROM purchase;`;
  return purchase;
}

export async function findPurchaseById(id) {
  const purchase = await sql`SELECT * FROM purchase WHERE id = ${id};`;
  return purchase[0];
}

export async function addPurchasedProduct(userId, productId, typeSession) {
  const purchase =
    await sql`INSERT INTO purchase (user_id, product_id, type_session) VALUES (${userId},${productId}, ${typeSession}) RETURNING *`;
  return purchase;
}

export async function deletePurchasedProduct(purchaseId) {
  const purchase = await sql`DELETE FROM purchase WHERE id === ${purchaseId}`;
  return purchase;
}
