import sql from "./dbCRM.js";

export async function createTablePurchase() {
  await sql`
  -- Création de la table des Sessions d'achat.
  CREATE TABLE IF NOT EXISTS purchase (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID,
  type_session VARCHAR(50),
  created_at TIMESTAMP DEFAULT NOW()
  );
  `;
  console.log("Tables Purchase Créées !");

  process.exit();
}

createTablePurchase().catch((err) => {
  console.error("Erreur lors de la création de la tables Purchase :", err);
  process.exit(1);
});
