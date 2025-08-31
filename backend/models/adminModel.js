const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  viewPassword: {
    type: String,
    required: true // new field to protect View Students
  }
});

module.exports = mongoose.model('Admin', adminSchema);
