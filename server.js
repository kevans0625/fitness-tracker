const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;


app.listen(3000, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});