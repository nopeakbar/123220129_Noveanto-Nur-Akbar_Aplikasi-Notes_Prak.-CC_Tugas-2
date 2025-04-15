import express from 'express';
import cors from 'cors';
import NoteRoute from './routes/NoteRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Mendengarkan port yang ditentukan oleh Cloud Run atau fallback ke 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
