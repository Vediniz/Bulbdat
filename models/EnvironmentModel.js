const mongoose = require('mongoose');

const environmentModel = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  // rooms: [
  //   { 
  //     type: mongoose.Schema.Types.ObjectId, 
  //     ref: 'Room' 
  //   }],
  // user: { 
  //   type: mongoose.Schema.Types.ObjectId, 
  //   ref: 'User', 
  //   required: true 
  // }
});

module.exports = mongoose.model('Environment', environmentModel);
