import express from 'express';
 import cors from 'cors';
 import NoteRoute from './routes/NoteRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(NotesRoute);

app.listen(3000, () => console.log("server terhubung"));
