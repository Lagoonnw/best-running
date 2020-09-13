const {Schema, model} = require('mongoose');

const workout = new Schema({
  workout_type: {
    type: String,
    required: true
  },
  distance: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

module.exports = model('Workout', workout);
