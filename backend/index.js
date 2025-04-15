import express from "express";
import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Tambahkan route default
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Gunakan PORT dari environment variable (Cloud Run menyetelnya secara otomatis)
const port = process.env.PORT || 8080;  // Jika tidak ada PORT, default ke 8080

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
