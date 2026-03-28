import sql from "./dbCRM.js";

export async function createTableWishlist() {
  await sql`
  -- -- Création de la table des Sessions de wislist.
  CREATE TABLE IF NOT EXISTS wishlist(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID,
  amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
  );`;
  console.log("Tables Wishlist Créées !");
  process.exit();
}

createTableWishlist().catch((err) => {
  console.error("Erreur lors de la création de la tables Wishlist :", err);
  process.exit(1);
});
