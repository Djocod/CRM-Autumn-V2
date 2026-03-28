// export default async function showAllProducts() {
//   const products = await sql`SELECT * FROM products;`;
//   console.log("Produits:", products);
// }
import sql from "../../dbCRM.js";

// // ============== Function ==============

// // Function for find all Users
export async function showAllUsers() {
  const users = await sql`SELECT * FROM users;`;
  return users;
}

// // Function for find user by name
export async function findUserByLastName(lastName) {
  const users =
    await sql`SELECT * FROM users WHERE last_name ILIKE ${"%" + lastName + "%"}`;
  return users;
}

// Function for find user by ID
export async function findUserById(id) {
  const users = await sql`SELECT * FROM users WHERE id = ${id};`;
  return users[0];
}

// Function for Add a product in purchase session
// export async function addPurchasedProduct(userId, productId, typeSession) {
//   const purchase =
//     await sql`INSERT INTO purchase (user_id, product_id, type_session) VALUES (${userId},${productId}, ${typeSession}) RETURNING *`;
//   return purchase;
// }

// // Function for Add a product in view session
// export async function addViewedProduct(userId, productId) {
//   return User.findByIdAndUpdate(
//     userId,
//     {
//       $push: {
//         viewSessions: {
//           date: new Date(),
//           products: [{ product: productId }],
//         },
//       },
//     },
//     { returnDocument: "after" },
//   );
// }

// // Function for Delete a product in purchase session
// export async function deletePurchasedProduct(userId, productId, sessionType) {
//   return User.findByIdAndUpdate(
//     userId,
//     {
//       $pull: {
//         purchaseSessions: { type: sessionType, "products.product": productId },
//       },
//     },
//     { returnDocument: "after" },
//   );
// }

// // Function for Delete a product in view session
// export async function deleteViewedProduct(userId, productId) {
//   return User.findByIdAndUpdate(
//     userId,
//     {
//       $pull: {
//         viewSessions: { "products.product": productId },
//       },
//     },
//     { returnDocument: "after" },
//   );
// }
