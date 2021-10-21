// server.js by Jack Loveday

// Import dependencies
const express = require("express");
const html = require("./routes/html");
const api = require("./routes/api");

// Setup Express Server
const app = express();

// Open Port for Heroku, otherwise default to 3001
const PORT = process.env.PORT || 3001;

// Setup access to Public folder
app.use(express.static("public"));

// Setup Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup proper routes
app.use("/api", api);
app.use("/", html);

// Run the app on our Port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});