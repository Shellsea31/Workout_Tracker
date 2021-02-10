// API ROUTES -- refer to api.js
const db = require("../models");

module.exports = (app) => {
  // get most recent workout
  app.get("/api/workouts", async (req, res) => {
    const recent = await db.Workout.find({}).sort({ day: -1 });
    const lastWorkout = {
      _id: recent[0]._id,
      day: recent[0].day,
      totalDuration: recent[0].exercises[0].duration,
      exercises: recent[0].exercises,
    };

    console.log(lastWorkout);
    res.json(lastWorkout);
  });
  // add an exercise

  // create a workout

  // get ranges for a workout
};
