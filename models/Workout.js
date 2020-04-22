const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    Exercises: [{
        type: Schema.Types.ObjectId,
        ref: "Exercise"
    }],
    date: {
        type: Date,
        default: Date.now
    },

});

const Workouts = mongoose.model("Workouts", WorkoutsSchema);

module.exports = Workouts;