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

const Environment = mongoose.model('Environment', environmentModel);

module.exports = Environment;
