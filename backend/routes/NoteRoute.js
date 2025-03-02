import express from "express";
import { 
    getNotes, 
    createNotes, 
    updateNotes,
    deleteNotes} from "../controllers/NoteController.js";

const router = express.Router();

router.get("/notes", getNotes);
router.post("/add-notes", createNotes);
router.patch("/update-notes/:id", updateNotes);
router.delete("/delete-notes/:id", deleteNotes);

export default router;
