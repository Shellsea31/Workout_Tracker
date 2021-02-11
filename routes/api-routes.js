// API ROUTES -- refer to api.js
const Workout = require("../models/Workout");

module.exports = (app) => {
  // get most recent workout
  app.get("/api/workouts", async (req, res) => {
    // find by descending order and send data from first index
    const recent = await Workout.find({}).sort({ day: -1 });
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
    // important set new to true to save new data
    Workout.findByIdAndUpdate(
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
    Workout.create({})
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
    // find descending order and limit to 7
    Workout.find({})
      .sort({ day: -1 })
      .limit(7)
      .then((result) => {
        console.log(result);
        res.json(result);
      });
  });
};
