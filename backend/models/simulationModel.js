const mongoose = require("mongoose");
const simulationSchema =
new mongoose.Schema({
  title: {
    type:String,
    required:true
  },
  category: {
    type:String,
    required:true
  },
  description: {
    type:String,
    required:true
  },
  status: {
    type:String,
    default:"Pending"
  }
}, {
  timestamps:true
});
const Simulation =
mongoose.model(
  "Simulation",
  simulationSchema
);
module.exports = Simulation;