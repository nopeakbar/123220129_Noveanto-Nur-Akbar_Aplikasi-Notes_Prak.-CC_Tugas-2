import express from 'express';
import cors from 'cors';
import NoteRoute from './routes/NoteRoute.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Default route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});

// Listen on PORT environment variable or fallback to 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
