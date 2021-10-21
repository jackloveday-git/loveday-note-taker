// html.js for HTML Routes, by Jack Loveday

// Import dependencies
const path = require("path");
const router = require("express").Router();

// Setup HTML Routes
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./../public/notes.html"));
});
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

// Export it
module.exports = router;