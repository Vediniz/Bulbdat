const mongoose = require('mongoose');

const roomModel = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  }
  // devices: [
  //   { 
  //     type: mongoose.Schema.Types.ObjectId, 
  //     ref: 'Device' 
  //   }
  // ]
});

const Room = mongoose.model('Room', roomModel);

module.exports = Room;
