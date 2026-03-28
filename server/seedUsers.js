import sql from "./dbCRM.js";

async function createTablesUsers() {
  await sql`
  -- Création de la table Users
  CREATE TABLE IF NOT EXISTS users (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  gender      VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female')),
  title       VARCHAR(20),
  first_name  VARCHAR(100) NOT NULL,
  last_name   VARCHAR(100) NOT NULL,
  email       VARCHAR(255) UNIQUE NOT NULL,
  phone       VARCHAR(50),
  cell        VARCHAR(50),
  nat         VARCHAR(10),
  -- Adresse (sous-document → colonnes directes)
  street_number  INT,
  street_name    VARCHAR(255),
  city           VARCHAR(100),
  state          VARCHAR(100),
  country        VARCHAR(100),
  postcode       VARCHAR(20),
  latitude       DECIMAL(10, 7),
  longitude      DECIMAL(10, 7),
  -- Login
  username       VARCHAR(100) UNIQUE,
  password       VARCHAR(100),
  salt           VARCHAR(10),
  md5            VARCHAR(10),
  -- Photo
  picture_large    TEXT,
  picture_medium   TEXT,
  picture_thumbnail TEXT,
  -- Dates
  birth_date  TIMESTAMP,
  birth_age   INT,
  created_at  TIMESTAMP DEFAULT NOW(),
  updated_at  TIMESTAMP DEFAULT NOW()
  );
  `;
  console.log("Tables Users créées !!");
  process.exit();
}

createTablesUsers().catch((err) => {
  console.error("Erreur lors de la création des tables Users :", err);
  process.exit(1);
});
