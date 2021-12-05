const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sensorSchema = new Schema({
  buoyid: String,
  battery: Number,
  temp: Number,
  ec: Number,
  lat: Number,
  long: Number,
  dd: Number,
  mm: Number,
  yy: Number,
  hh: Number,
  mn: Number,
  ss: Number,
  gx: Number,
  gy: Number,
  gz: Number,
  ax: Number,
  ay: Number,
  az: Number,
})

const SensorModel = mongoose.model('Sensor', sensorSchema)
module.exports = SensorModel