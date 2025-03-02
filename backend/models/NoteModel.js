import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const Notes = db.define(
  "notes", //NAMA TABELNYA DI DB APA
  {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    content: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true, 
    createdAt: "created_at", 
    updatedAt: "updated_at",
  }
);

db.sync().then(() => console.log("Database synced cihuy"));

export default Notes;
