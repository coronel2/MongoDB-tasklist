const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
});

const UserModel = mongoose.model('tareas', userSchema);

module.exports = UserModel;