import sql from "./dbCRM.js";

export async function createTableMessage() {
  await sql`
  -- Création de la table des Sessions des messages.
  CREATE TABLE IF NOT EXISTS messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID,
  amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
  );
  `;
  console.log("Tables Message Créées !");
  process.exit();
}

createTableMessage().catch((err) => {
  console.error("Erreur lors de la création de la tables Message :", err);
  process.exit(1);
});
