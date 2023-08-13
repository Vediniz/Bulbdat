const mongoose = require('mongoose');

const deviceModel = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  manufacturer: { type: String, required: true },
  brand: { type: String, required: true },
  powerConsumption: { type: Number, required: true },
  voltage: { type: Number, required: true }
});

const Device = mongoose.model('Device', deviceModel);

module.exports = Device;
