import sql from "./dbCRM.js";

await sql`DROP TABLE IF EXISTS  view;`;
console.log("Table supprimée !");
process.exit();
