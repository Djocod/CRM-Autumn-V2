import sql from "./dbCRM.js";

export async function createTableView() {
  await sql`
  -- Création de la table des Sessions des viewed.
  CREATE TABLE IF NOT EXISTS view (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID,
  amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
  );
   `;
  console.log("Tables View Créées !");
  process.exit();
}

createTableView().catch((err) => {
  console.error("Erreur lors de la création de la tables View :", err);
  process.exit(1);
});
