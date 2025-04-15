import express from 'express';
import cors from 'cors';
import NoteRoute from './routes/NoteRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Ganti port menjadi process.env.PORT agar sesuai dengan port yang diberikan Cloud Run
const port = process.env.PORT || 3000; // Port yang diatur oleh Cloud Run, fallback ke 3000 jika tidak ada
app.listen(port, () => console.log(`Server berjalan di port ${port}`));
