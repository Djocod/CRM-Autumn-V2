import sql from "./dbCRM.js";

export async function createTableColors() {
  await sql`CREATE TABLE colors (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(100)UNIQUE NOT NULL
    )`;
  console.log("Table color créées !");
  process.exit();
}

createTableColors().catch((err) => {
  console.error("Erreur lors de la création de la table color :", err);
  process.exit(1);
});
