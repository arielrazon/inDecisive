const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const scripts = require('./scripts/seedDB.js');
const app = express();
const port = process.env.PORT || 5000;

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/indecisive", { useNewUrlParser: true });

//Populate database with seed file
scripts.seedPetSitters();

//Start the API Server
app.listen(port, () => console.log(`Listening on port ${port}`));
