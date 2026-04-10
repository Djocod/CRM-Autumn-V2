import sql from "./dbCRM.js";

export async function createTableSize() {
  await sql`CREATE TABLE sizes(
        id SERIAL PRIMARY KEY, 
        name VARCHAR(100) UNIQUE NOT NULL
    )`;
  console.log("Table sizes créées");
  process.exit();
}

createTableSize().catch((err) => {
  console.error("Erreur lors de la création de la table size : ", err);

  process.exit(1);
});
