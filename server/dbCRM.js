import "dotenv/config";
import postgres from "postgres";

const sql = postgres({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
}); // will use psql environment variables

export default sql;
