import express from "express";
import { 
    createNote, 
    getAllNotes, 
    getNoteById,
    updateNote, 
    deleteNote
} from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

// get method
// app.get("/api/notes", (req, res) => {
//     res.status(200).send("You got 11 notes.");
// });

// app.post("/api/notes", (req, res) => {
//     res.status(201).json({ message: "Note created successfully." });
// });

// app.put("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "Note updated successfully." });
// });

// app.delete("/api/notes/:id", (req, res) => {
//     res.status(200).json({ message: "Note deleted successfully." });
// });

export default router;