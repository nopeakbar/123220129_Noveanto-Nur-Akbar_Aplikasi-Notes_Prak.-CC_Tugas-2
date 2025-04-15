import cors from "cors";
import NoteRoute from "./routes/NoteRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(NoteRoute);

// Tambahkan route default
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(8080, () => console.log("Server connected"));
