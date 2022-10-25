import sql from "mssql";
import config from "../config";

export const dbSettings = {
  user: config.dbUser,
  password: config.dbPassword,
  server: config.dbServer,
  database: config.dbDatabase,
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true, // change to true for local dev / self-signed certs
  },
};

async function getConection(){
    const pool = await sql.connect(dbSettings);
    const result = await pool.request().query("SELECT 1");
    console.log(result);
}

getConection();