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

    res.json(lastWorkout);
  });
  // add an exercise
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    )
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  // create a workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create({})
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
      });
  });
  // get ranges for a workout
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .sort({ day: -1 })
      .limit(7)
      .then((result) => {
        console.log(result);
        res.json(result);
      });
  });
};
