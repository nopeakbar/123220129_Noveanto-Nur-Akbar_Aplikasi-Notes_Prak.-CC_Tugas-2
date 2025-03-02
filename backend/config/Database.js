import { Sequelize } from "sequelize";

// Nyambungin db ke BE
const db = new Sequelize("tugascc_notes", "root", "", {
  host: "localhost", //35.224.144.19
  dialect: "mysql",
});

export default db;
