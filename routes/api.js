// api.js for API Routes, by Jack Loveday

// Import dependencies
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const fs = require("fs");

// Setup route for pulling notes
router.get("/notes", (req, res) => {
    // Pull existing notes
    let oldNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    return res.json(oldNotes);
});

// Setup route for posting notes
router.post("/notes", (req, res) => {
    // Create new note variable, and set unique ID
    let newNote = req.body;
    newNote.id = uuidv4();
    
    // Pull existing notes, create variable
    let oldNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    oldNotes.push(newNote);

    // Write the updated notes
    fs.writeFileSync("./db/db.json", JSON.stringify(oldNotes));
    return res.json(oldNotes);
});

// Delete notes
router.delete("/notes/:id", (req, res) => {
    let thisNote = req.params.id;
    let oldNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newNotes = oldNotes.filter((file) => file.id !== thisNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(newNotes));
    return res.json(newNotes);
});

// Export it
module.exports = router;