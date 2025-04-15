import express from 'express';
import cors from 'cors';
import NoteRoute from './routes/NoteRoute.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Route Default
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Listen on the PORT set by Cloud Run or fallback to 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
