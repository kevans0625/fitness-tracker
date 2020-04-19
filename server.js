const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//set up mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populatedb", { useNewUrlParser: true });

app.listen(3000, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});