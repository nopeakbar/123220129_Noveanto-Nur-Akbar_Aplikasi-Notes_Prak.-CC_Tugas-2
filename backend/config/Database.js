import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugascc_notes", "root", "akbar", {
  host: "34.136.132.0", 
  dialect: "mysql",
});

export default db;
