const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bikemanagmentSchema = new Schema({
  Name: { type: String,  required: [true, "Username is required"],},
  Model: { type: String, required:[ true," Your Model is required"] },
  Description: { type: String,  required: [true, "Desicription is required"],},
  Colour: { type: String,  required: [true,],},
  Price: { type: Number,  required: [true,],},
  Mileage: { type: Number,  required: [true, ],},
  Features: { type: String,  required: [true,],}
}, {
  timestamps: true,
});

const BikeManagment = mongoose.model('BikeManagment', bikemanagmentSchema);

module.exports = BikeManagment;