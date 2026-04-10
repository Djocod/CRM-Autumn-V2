import sql from "./dbCRM.js";

export async function createTablesProducts() {
  await sql`

  CREATE TABLE IF NOT EXISTS products (
  id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title             VARCHAR(50),
  brand             VARCHAR(100),
  category          VARCHAR(50) ,
  price             INT,
  currency          VARCHAR(50),
  stock             INT,
  description_txt   TEXT,
  picture           TEXT,
  tags              VARCHAR(100),
  ref               VARCHAR(50),
  sizes             VARCHAR(100),
  colors            VARCHAR(100) ,
  created_at        TIMESTAMP DEFAULT NOW(),
  updated_at        TIMESTAMP DEFAULT NOW()
  );
  `;
  console.log("Tables Products créées !!");
  process.exit();
}
createTablesProducts().catch((err) => {
  console.error("Erreur lors de la création des tables Products :", err);
  process.exit(1);
});
