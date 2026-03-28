import sql from "../../dbCRM.js";

export async function showAllView() {
  const view = await sql`SELECT * FROM view;`;
  return view;
}

export async function findViewById(id) {
  const view = await sql`SELECT * FROM view WHERE id = ${id};`;
  return view[0];
}

export async function addViewProduct(userId, productId) {
  const view =
    await sql`INSERT INTO view (user_id, product_id) VALUES (${userId},${productId}) RETURNING *`;
  return view;
}

export async function deleteViewProduct(viewId) {
  const view = await sql`DELETE FROM view WHERE id = ${viewId}`;
  return view;
}
