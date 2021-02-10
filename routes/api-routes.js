// API ROUTES -- refer to api.js
const db = require("../models");

module.exports = (app) => {
  // get most recent workout
  app.get("/api/workouts", async (req, res) => {
    const recent = await db.Workout.find({})
    console.log(recent)

    res.json(recent)
  });
  // add an exercise

  // create a workout

  // get ranges for a workout
};
