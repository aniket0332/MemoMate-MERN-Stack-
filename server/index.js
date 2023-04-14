const express = require("express");
const app = express();
const notes = require("./data/notes");
const dotenv = require("dotenv");

dotenv.config();

app.get("/", (req, res) => {
res.send("API is running..");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
});

// app.get("/api/notes/:id", (req, res) => {
//     const note = 
// });    

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on port ${PORT}`));