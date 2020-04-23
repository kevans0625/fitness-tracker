const express = require("express");
var path = require("path");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// const db = require("./models");

const Workout = require("./models/Workout.js");

app.use(logger("dev"));

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//set up mongoose db
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout1", { useNewUrlParser: true });


//html route 
app.get("/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/stats.html"));
});

app.get("/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/exercise.html"));
});

//db api's
app.get("/workout", function(req, res) {
    // console.log(res)
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
        console.log(dbWorkout)
    }).catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts", function(req, res) {
    // console.log(res)
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
            // console.log(dbWorkout)
    }).catch(err => {
        res.json(err);
    });
});

app.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log(body)
    Workout.findByIdAndUpdate(
            params.id, { $push: { exercises: body } },
            // "runValidators" will ensure new exercises meet our schema requirements
            { new: true, runValidators: true }
        )
        .then(dbWorkout => {
            res.json(dbWorkout);
            console.log(dbWorkout)
        })
        .catch(err => {
            res.json(err);
        });
});

app.post("/api/workouts", function({ body }, res) {
    console.log(body);
    Workout.create(body).then(dbWorkout => {
        res.json(dbWorkout)
        console.log(dbWorkout)
    }).catch(err => {
        res.json(err);
    });
});

app.get("/api/workouts/range", function(req, res) {
    // console.log(res)
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
        console.log(dbWorkout)
    }).catch(err => {
        res.json(err);
    });
});


//starts the exoress server with a printed link to the site
app.listen(3000, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});