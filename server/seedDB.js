import sql from "./dbCRM.js";

async function createTableDB() {
  // Table Users
  await sql`
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

  //Table product
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

  // Table Purchase
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

  // Table view
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

  // Table wishlist
  await sql`
  -- -- Création de la table des Sessions de wislist.
  CREATE TABLE IF NOT EXISTS wishlist(
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID,
  created_at TIMESTAMP DEFAULT NOW()
  );`;
  console.log("Tables Wishlist Créées !");

  //Table sizes
  await sql`CREATE TABLE sizes(
        id SERIAL PRIMARY KEY, 
        name VARCHAR(100) UNIQUE NOT NULL
    )`;
  console.log("Table sizes créées");

  // Table colors

  await sql`CREATE TABLE colors (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(100)UNIQUE NOT NULL
    )`;
  console.log("Table color créées !");

  // Table message
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

  console.log("\nBase de données créée avec succès !");
  await sql.end();
}

createTableDB().catch((err) => {
  console.error("Erreur lors de la création de la base de données :", err);
  process.exit(1);
});
