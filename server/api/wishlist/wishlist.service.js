import sql from "../../dbCRM.js";

export async function showAllWihslist() {
  const wishlist = await sql`SELECT * FROM wishlist`;
  return wishlist;
}

export async function findWhislistById(id) {
  const wishlist = await sql`SELECT * FROM wishlist WHERE id = ${id};`;
  return wishlist[0];
}

export async function addWishlistProduct(userId, productId) {
  const whislist =
    await sql`INSERT INTO wishlist(  user_id, product_id ) VALUES (${userId}, ${productId}) RETURNING *`;
  return whislist;
}

export async function deleteWishlistProduct(wishId) {
  const wishlist = await sql`DELETE FROM wishlist WHERE id = ${wishId}`;
  return wishlist;
}
