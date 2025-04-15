import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Tambahkan route default untuk ngecek status
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Pakai PORT dari environment variable agar compatible dengan Cloud Run
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server connected on port ${PORT}`));
