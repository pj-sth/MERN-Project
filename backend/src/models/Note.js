import mongoose from "mongoose";

// 1 - Create a schema
// 2 - model based off that schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
}, 
    { timestamps: true } // by default gives us createdAt and updatedAt fields
);

const Note = mongoose.model("Note", noteSchema);

export default Note;