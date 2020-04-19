const express = require("express");
const logger = require("logger")
const mongoose = require("mongoose")

const app = express();

const db = require("./seeders");

app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//set up mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fitnessdb", { useNewUrlParser: true });

//db api's


//starts the exoress server with a printed link to the site
app.listen(3000, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});